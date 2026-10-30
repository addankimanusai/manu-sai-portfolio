import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-dark bg-background-secondary/60 mt-20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-dark">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center font-heading font-bold text-white shadow-md shadow-accent-purple/20">
                MS
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-main">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-text-secondary font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              Computer Science graduate dedicated to building practical, performant, and user-centric software applications with modern full-stack web technologies.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Software Engineering Roles</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-text-main">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#home" className="hover:text-accent-purpleLight transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-purpleLight transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-purpleLight transition-colors">Skills &amp; Tech</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-purpleLight transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#github-stats" className="hover:text-accent-purpleLight transition-colors">GitHub Activity</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-purpleLight transition-colors">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-text-main">
              Connect With Me
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-text-secondary">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub (@{personalInfo.githubUsername})</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-purpleLight" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-blueLight" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {personalInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Designed &amp; Architected with React + Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-background-card hover:bg-border-dark border border-border-dark text-text-secondary hover:text-white transition-colors flex items-center justify-center"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
