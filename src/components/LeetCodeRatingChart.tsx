import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { contestHistory, contestRanking, type ContestEntry } from '../data/leetcodeContest';
import '../styles/LeetCodeCharts.less';
export const LeetCodeRatingChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredEntry, setHoveredEntry] = useState<ContestEntry | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth || 500;
    const margin = { top: 20, right: 24, bottom: 40, left: 56 };
    const width = containerWidth - margin.left - margin.right;
    const height = 180 - margin.top - margin.bottom;

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3
      .select(svgRef.current)
      .attr('width', containerWidth)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = contestHistory.map((d) => ({
      ...d,
      date: new Date(d.contest.startTime * 1000),
    }));

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([0, width]);

    const minRating = Math.min(...data.map((d) => d.rating));
    const maxRating = Math.max(...data.map((d) => d.rating));
    const padding = (maxRating - minRating) * 0.3;

    const yScale = d3
      .scaleLinear()
      .domain([minRating - padding, maxRating + padding])
      .range([height, 0]);

    // Grid lines
    svg
      .append('g')
      .attr('class', 'grid')
      .call(
        d3
          .axisLeft(yScale)
          .ticks(4)
          .tickSize(-width)
          .tickFormat(() => '')
      )
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .attr('stroke', '#e0e0e0')
          .attr('stroke-dasharray', '3,3')
      );

    // X axis
    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(d3.timeYear.every(1))
          .tickFormat((d) => d3.timeFormat('%Y')(d as Date))
      )
      .call((g) => g.select('.domain').attr('stroke', '#ccc'))
      .call((g) =>
        g
          .selectAll('.tick line')
          .attr('stroke', '#ccc')
      )
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('fill', '#888')
          .attr('font-size', '11px')
          .attr('font-family', 'inherit')
      );

    // Y axis
    svg
      .append('g')
      .call(d3.axisLeft(yScale).ticks(4).tickFormat((d) => `${d}`))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .selectAll('.tick line')
          .attr('stroke', '#e0e0e0')
      )
      .call((g) =>
        g
          .selectAll('.tick text')
          .attr('fill', '#888')
          .attr('font-size', '11px')
          .attr('font-family', 'inherit')
      );

    // Area fill
    const area = d3
      .area<(typeof data)[0]>()
      .x((d) => xScale(d.date))
      .y0(height)
      .y1((d) => yScale(d.rating))
      .curve(d3.curveMonotoneX);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'rgba(100,100,100,0.07)')
      .attr('d', area);

    // Line
    const line = d3
      .line<(typeof data)[0]>()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.rating))
      .curve(d3.curveMonotoneX);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Dots
    svg
      .selectAll('.dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => xScale(d.date))
      .attr('cy', (d) => yScale(d.rating))
      .attr('r', (_, i) => (i === hoveredIndex ? 7 : 4))
      .attr('fill', (_, i) => (i === hoveredIndex ? '#111' : '#888'))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('pointer-events', 'none');

    // Transparent overlay rect — finds nearest point by pixel distance
    svg
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'transparent')
      .style('cursor', 'default')
      .on('mousemove', (event: MouseEvent) => {
        const [mx, my] = d3.pointer(event);
        let nearestIdx = 0;
        let minDist = Infinity;
        data.forEach((d, i) => {
          const dist = Math.hypot(xScale(d.date) - mx, yScale(d.rating) - my);
          if (dist < minDist) {
            minDist = dist;
            nearestIdx = i;
          }
        });
        setHoveredIndex(nearestIdx);
        setHoveredEntry(data[nearestIdx]);
      })
      .on('mouseleave', () => {
        setHoveredIndex(null);
        setHoveredEntry(null);
      });
  }, [hoveredIndex]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  const formatDate = (ts: number) =>
    new Date(ts * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  return (
    <div className="lc-chart-wrapper">
      <div className="lc-chart-header">
        <span className="lc-chart-title">LeetCode Contest Rating</span>
        <span className="lc-rating-value">
          {hoveredEntry ? Math.round(hoveredEntry.rating) : Math.round(contestRanking.rating)}
        </span>
        {hoveredEntry ? (
          <div className="lc-chart-meta">
            <span className="lc-meta-date">{formatDate(hoveredEntry.contest.startTime)}</span>
            <span className="lc-meta-contest">{hoveredEntry.contest.title}</span>
            <span className="lc-meta-row">
              <span className="lc-meta-item">Rank <strong>#{hoveredEntry.ranking.toLocaleString()}</strong></span>
              <span className="lc-meta-sep">·</span>
              <span className="lc-meta-item">Solved <strong>{hoveredEntry.problemsSolved}/{hoveredEntry.totalProblems}</strong></span>
              <span className="lc-meta-sep">·</span>
              <span className="lc-meta-item">Time <strong>{formatTime(hoveredEntry.finishTimeInSeconds)}</strong></span>
            </span>
          </div>
        ) : (
          <div className="lc-chart-meta">
            <span className="lc-meta-row">
              <span className="lc-meta-item">Global Ranking <strong>{contestRanking.globalRanking.toLocaleString()} / {contestRanking.totalParticipants.toLocaleString()}</strong></span>
            </span>
            <span className="lc-meta-row">
              <span className="lc-meta-item">Attended <strong>{contestRanking.attendedContestsCount}</strong></span>
              <span className="lc-meta-sep">·</span>
              <span className="lc-meta-item">Top <strong>{contestRanking.topPercentage}%</strong></span>
            </span>
          </div>
        )}
      </div>
      <div ref={containerRef} className="lc-chart-svg-container">
        <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      </div>
    </div>
  );
};
