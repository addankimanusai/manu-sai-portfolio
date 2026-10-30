import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, CheckCircle } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export default function AchievementCard({ achievement, index }) {
  const isLeetcode = achievement.id === 'leetcode';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark flex flex-col justify-between relative overflow-hidden group hover:border-accent-purple/40 transition-colors"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-accent-purple/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-background-secondary border border-border-dark flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
            {isLeetcode ? (
              <SiLeetcode className="w-6 h-6 text-amber-500" />
            ) : (
              <Trophy className="w-6 h-6 text-accent-purpleLight" />
            )}
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-purple/10 text-accent-purpleLight border border-accent-purple/20">
            {achievement.category}
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main group-hover:text-accent-purpleLight transition-colors">
          {achievement.title}
        </h3>

        <p className="text-xs font-medium text-accent-blueLight mt-1">
          {achievement.subtitle}
        </p>

        <p className="mt-3 text-text-secondary text-sm leading-relaxed">
          {achievement.description}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-border-dark flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-heading text-2xl font-bold text-text-main">
            {achievement.metric}
          </span>
          <span className="text-[11px] text-text-muted">
            {achievement.metricLabel}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
          <CheckCircle className="w-3.5 h-3.5" />
          Verified
        </span>
      </div>
    </motion.div>
  );
}
