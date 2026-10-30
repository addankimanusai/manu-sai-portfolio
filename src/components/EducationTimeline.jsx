import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react';
import { educationList } from '../data/education';

export default function EducationTimeline() {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-border-dark space-y-10 my-6">
      {educationList.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: index * 0.12 }}
          className="relative group"
        >
          {/* Timeline Node Icon */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background-card border-2 border-accent-purple flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all shadow-md shadow-accent-purple/20">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>

          {/* Education Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-background-card border border-border-dark group-hover:border-accent-purple/30 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-purple/10 text-accent-purpleLight border border-accent-purple/20">
                <Calendar className="w-3 h-3" />
                {item.period}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent-blue/10 text-accent-blueLight border border-accent-blue/20">
                <Award className="w-3.5 h-3.5" />
                {item.score}
              </span>
            </div>

            <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main group-hover:text-accent-purpleLight transition-colors">
              {item.degree}
            </h3>

            <p className="text-sm text-text-secondary font-medium mt-1">
              {item.institution}
            </p>

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5 text-xs text-text-secondary">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-purple flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
