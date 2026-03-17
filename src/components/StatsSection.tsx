import React from 'react';
import '../styles/GitHubStats.less';

const GITHUB_USERNAME = 'PhilipSanM';

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <h2>Stats</h2>
      <div className="stats-cards">
        <div className="github-stats-card">
          <h3>GitHub Stats</h3>
          <div className="github-stats-grid">
            <img
              src={`https://github-readme-stats.vercel.app/api/?username=${GITHUB_USERNAME}&count_private=true&theme=vision-friendly-dark&show_icons=true`}
              alt="GitHub Stats"
              className="github-stat-image"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=vision-friendly-dark`}
              alt="Top Languages"
              className="github-stat-image"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=vision-friendly-dark&date_format=j%20M%5B%20Y%5D`}
              alt="GitHub Streak"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
