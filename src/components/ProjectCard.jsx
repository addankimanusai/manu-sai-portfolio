import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Clock, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const hasGithub = project.github && project.github.trim() !== "";
  const hasLiveDemo = project.liveDemo && project.liveDemo.trim() !== "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-border-dark group"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background-secondary border-b border-border-dark">
        <img
          src={project.image}
          alt={`${project.title} Preview Screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent opacity-60" />
        
        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-background-main/80 backdrop-blur-md text-accent-purpleLight border border-accent-purple/30">
          {project.category}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main group-hover:text-accent-purpleLight transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-text-secondary text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Project Key Highlights */}
        {project.highlights && (
          <ul className="mt-4 space-y-1.5 text-xs text-text-muted">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue flex-shrink-0 mt-0.5" />
                <span className="text-zinc-300">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-background-secondary text-zinc-300 border border-border-dark"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons: GitHub & Live Demo */}
        <div className="mt-6 pt-5 border-t border-border-dark flex items-center gap-3">
          {/* GitHub Button */}
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-background-secondary hover:bg-border-dark text-text-main border border-border-dark transition-all focus:outline-none"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <div
              title="GitHub repository link will be added soon"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-background-secondary/60 text-text-muted border border-border-dark/60 cursor-not-allowed select-none"
            >
              <Github className="w-3.5 h-3.5 opacity-60" />
              <span>Repo Coming Soon</span>
            </div>
          )}

          {/* Live Demo Button */}
          {hasLiveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-sm shadow-accent-purple/20 hover:opacity-90 active:scale-95 transition-all focus:outline-none"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <div
              title="Live deployment will be available soon"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-background-secondary/60 text-text-muted border border-border-dark/60 cursor-not-allowed select-none"
            >
              <Clock className="w-3.5 h-3.5 opacity-60" />
              <span>Demo Coming Soon</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
