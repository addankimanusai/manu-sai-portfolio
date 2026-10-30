import React from 'react';
import SectionHeading from '../components/SectionHeading';
import GithubStats from '../components/GithubStats';

export default function GithubSection() {
  return (
    <section id="github-stats" className="py-20 md:py-28 relative bg-background-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Open Source &amp; Version Control"
          title="GitHub Engineering Activity"
          subtitle="Real-time public repository metrics and consistent commit activity on GitHub, reflecting continuous programming and version-controlled software development."
        />

        <GithubStats />
      </div>
    </section>
  );
}
