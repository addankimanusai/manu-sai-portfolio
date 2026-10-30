import React from 'react';
import SectionHeading from '../components/SectionHeading';
import AchievementCard from '../components/AchievementCard';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Milestones &amp; Recognition"
          title="Achievements &amp; Honors"
          subtitle="Notable algorithmic problem-solving accomplishments and competitive coding cohort selections."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
