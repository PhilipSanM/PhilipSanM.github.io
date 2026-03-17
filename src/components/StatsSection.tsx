import React from 'react';
import '../styles/GitHubStats.less';

const GITHUB_USERNAME = 'PhilipSanM';

export const StatsSection: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="stats-cards">
        <div className="github-stats-card">
          <div className="github-stats-grid">
            <img
              src={`https://github-readme-stats.vercel.app/api/?username=${GITHUB_USERNAME}&count_private=true&show_icons=true&theme=transparent&bg_color=00000000&border_color=00000000&text_color=666666&icon_color=666666&title_color=4a4a4a`}
              alt="GitHub Stats"
              className="github-stat-image"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&bg_color=00000000&border_color=00000000&text_color=666666&icon_color=666666&title_color=4a4a4a`}
              alt="Top Languages"
              className="github-stat-image"
            />
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&date_format=j%20M%5B%20Y%5D&text_color=666666&icon_color=666666&title_color=4a4a4a`}
              alt="GitHub Streak"
              className="github-stat-image streak"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
