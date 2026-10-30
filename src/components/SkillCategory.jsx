import React from 'react';
import { motion } from 'framer-motion';
import { getSkillIcon } from '../utils/icons';

export default function SkillCategory({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-7 border border-border-dark flex flex-col justify-between hover:border-accent-purple/40 transition-colors"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main">
            {category.title}
          </h3>
          <span className="text-xs font-mono text-text-muted">
            0{index + 1}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-3 rounded-xl bg-background-secondary/90 border border-border-dark/80 hover:border-accent-purple/50 hover:bg-background-cardHover transition-all group flex items-center gap-3"
            >
              <div 
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
              >
                {getSkillIcon(skill.icon, "w-5 h-5")}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-text-main group-hover:text-white truncate">
                  {skill.name}
                </p>
                <p className="text-[11px] text-text-muted truncate">
                  {skill.badge}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
