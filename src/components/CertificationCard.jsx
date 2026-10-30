import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, BookOpen } from 'lucide-react';

export default function CertificationCard({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
      className="glass-card rounded-2xl p-6 sm:p-7 border border-border-dark flex flex-col justify-between hover:border-accent-blue/40 transition-colors group"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-background-secondary border border-border-dark flex items-center justify-center text-accent-blue group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/10 text-accent-blueLight border border-accent-blue/20">
            <Calendar className="w-3 h-3" />
            {cert.period}
          </span>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          {cert.issuer}
        </span>

        <h3 className="font-heading text-xl font-bold text-text-main group-hover:text-accent-blueLight transition-colors mt-1">
          {cert.title}
        </h3>

        <p className="mt-3 text-text-secondary text-sm leading-relaxed">
          {cert.description}
        </p>

        {/* Skills Covered */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-background-secondary text-zinc-300 border border-border-dark"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border-dark flex items-center justify-between text-xs text-text-muted">
        <span className="inline-flex items-center gap-1.5 text-zinc-300">
          <BookOpen className="w-3.5 h-3.5 text-accent-purple" />
          {cert.type}
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Completed
        </span>
      </div>
    </motion.div>
  );
}
