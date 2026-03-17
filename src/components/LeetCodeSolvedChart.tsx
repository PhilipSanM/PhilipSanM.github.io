import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import '../styles/LeetCodeCharts.less';
import {
  numAcceptedQuestions,
  numUntouchedQuestions,
  numFailedQuestions,
  userSessionBeatsPercentage,
} from '../data/leetcodeSolved';

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  EASY: '#5b5b5b',
  MEDIUM: '#888888',
  HARD: '#bbbbbb',
};

const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  EASY: 'Easy',
  MEDIUM: 'Med.',
  HARD: 'Hard',
};

export const LeetCodeSolvedChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredDifficulty, setHoveredDifficulty] = useState<Difficulty | null>(null);

  const difficulties: Difficulty[] = ['EASY', 'MEDIUM', 'HARD'];

  const totals = difficulties.map((diff) => {
    const accepted = numAcceptedQuestions.find((q) => q.difficulty === diff)!.count;
    const failed = numFailedQuestions.find((q) => q.difficulty === diff)!.count;
    const untouched = numUntouchedQuestions.find((q) => q.difficulty === diff)!.count;
    const total = accepted + failed + untouched;
    return { diff, accepted, failed, untouched, total };
  });

  const totalSolved = totals.reduce((sum, t) => sum + t.accepted, 0);

  useEffect(() => {
    if (!svgRef.current) return;

    const size = 160;
    const cx = size / 2;
    const cy = size / 2;
    const outerR = 66;
    const innerR = 46;
    const gapDeg = 3;

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', size)
      .attr('height', size)
      .append('g')
      .attr('transform', `translate(${cx},${cy})`);

    const totalAll = totals.reduce((sum, t) => sum + t.total, 0);
    const gapRad = (gapDeg * Math.PI) / 180;

    // Build arc segments per difficulty (accepted, failed+untouched)
    let currentAngle = -Math.PI / 2;

    totals.forEach(({ diff, accepted, total }) => {
      const sliceAngle = (total / totalAll) * (2 * Math.PI) - gapRad;
      const acceptedAngle = (accepted / total) * sliceAngle;
      const remainingAngle = sliceAngle - acceptedAngle;
      const isHovered = hoveredDifficulty === diff;

      const r = isHovered ? outerR + 5 : outerR;

      // Accepted arc
      const arcAccepted = d3
        .arc()
        .innerRadius(innerR)
        .outerRadius(r)
        .startAngle(currentAngle)
        .endAngle(currentAngle + acceptedAngle)
        .padAngle(0.01)
        .cornerRadius(2);

      svg
        .append('path')
        .attr('d', arcAccepted as unknown as string)
        .attr('fill', DIFFICULTY_COLORS[diff as Difficulty])
        .attr('opacity', isHovered ? 1 : 0.85)
        .style('cursor', 'pointer')
        .on('mouseenter', () => setHoveredDifficulty(diff as Difficulty))
        .on('mouseleave', () => setHoveredDifficulty(null));

      // Remaining arc (failed + untouched)
      if (remainingAngle > 0) {
        const arcRemaining = d3
          .arc()
          .innerRadius(innerR)
          .outerRadius(r - 8)
          .startAngle(currentAngle + acceptedAngle)
          .endAngle(currentAngle + sliceAngle)
          .padAngle(0.01)
          .cornerRadius(2);

        svg
          .append('path')
          .attr('d', arcRemaining as unknown as string)
          .attr('fill', DIFFICULTY_COLORS[diff as Difficulty])
          .attr('opacity', 0.2)
          .style('cursor', 'pointer')
          .on('mouseenter', () => setHoveredDifficulty(diff as Difficulty))
          .on('mouseleave', () => setHoveredDifficulty(null));
      }

      currentAngle += sliceAngle + gapRad;
    });

    // Center text
    const active = hoveredDifficulty
      ? totals.find((t) => t.diff === hoveredDifficulty)!
      : null;

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.3em')
      .attr('font-size', '22px')
      .attr('font-weight', '700')
      .attr('fill', '#1a1a1a')
      .attr('font-family', 'inherit')
      .text(active ? active.accepted : totalSolved);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.1em')
      .attr('font-size', '10px')
      .attr('fill', '#888')
      .attr('font-family', 'inherit')
      .text(active ? DIFFICULTY_LABELS[active.diff as Difficulty] : 'Solved');
  }, [hoveredDifficulty, totals, totalSolved]);

  const beatsMap = Object.fromEntries(
    userSessionBeatsPercentage.map((b) => [b.difficulty, b.percentage])
  );

  return (
    <div className="lc-solved-wrapper">
      <div className="lc-solved-header">
        <span className="lc-solved-title">LeetCode Problems Solved</span>
      </div>
      <div className="lc-solved-inner">
        <svg ref={svgRef} />
        <div className="lc-solved-legend">
          {totals.map(({ diff, accepted, total }) => (
            <div
              key={diff}
              className={`lc-legend-row${hoveredDifficulty === diff ? ' active' : ''}`}
              onMouseEnter={() => setHoveredDifficulty(diff as Difficulty)}
              onMouseLeave={() => setHoveredDifficulty(null)}
            >
              <span className="lc-legend-dot" style={{ background: DIFFICULTY_COLORS[diff as Difficulty] }} />
              <span className="lc-legend-label">{DIFFICULTY_LABELS[diff as Difficulty]}</span>
              <span className="lc-legend-count">
                <strong>{accepted}</strong>
                <span className="lc-legend-total">/{total}</span>
              </span>
              <span className="lc-legend-beats">
                Beats {beatsMap[diff].toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
