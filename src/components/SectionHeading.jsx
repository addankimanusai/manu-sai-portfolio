import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const isCenter = align === "center";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-purple/10 text-accent-purpleLight border border-accent-purple/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple"></span>
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-main">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
