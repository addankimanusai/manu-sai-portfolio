import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Code, Brain, Target, CheckCircle2, UserCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EducationTimeline from '../components/EducationTimeline';
import { personalInfo } from '../data/personalInfo';
import { careerInterests } from '../data/education';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Background & Academic Journey"
          subtitle="A dedicated software developer grounded in solid Computer Science fundamentals, algorithmic problem solving, and modern full-stack web engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Career Objective & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Career Objective Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-main">
                  Career Objective
                </h3>
              </div>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {personalInfo.careerObjective}
              </p>

              <div className="mt-6 pt-6 border-t border-border-dark grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-text-muted block">Degree Focus</span>
                  <span className="font-semibold text-text-main">B.Tech Computer Science</span>
                </div>
                <div>
                  <span className="text-text-muted block">Target Roles</span>
                  <span className="font-semibold text-accent-blueLight">Full-Stack / Software Dev</span>
                </div>
              </div>
            </div>

            {/* Core Technical & Career Interests */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-main">
                  Areas of Interest
                </h3>
              </div>

              <div className="space-y-4">
                {careerInterests.map((interest, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background-secondary border border-border-dark">
                    <h4 className="text-sm font-bold text-text-main">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vertical Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="mb-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main">
                Education History
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Chronological academic record with verified performance marks
              </p>
            </div>

            <EducationTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
