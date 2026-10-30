import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCategory from '../components/SkillCategory';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive toolkit spanning foundational programming languages, modern frontend libraries, robust database systems, and developer workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
