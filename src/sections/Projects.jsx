import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, FolderGit2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const INITIAL_VISIBLE_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE_COUNT;

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Engineered Projects"
          subtitle="Real-world applications highlighting frontend craft, responsive design systems, full-stack architectural integration, and persistent database modeling."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Scalable View More Button: only rendered if > 3 projects exist */}
        {hasMoreProjects && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-background-card hover:bg-border-dark text-text-main border border-border-dark transition-all active:scale-95"
            >
              <span>{showAll ? 'Show Fewer Projects' : `View All Projects (${projects.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
