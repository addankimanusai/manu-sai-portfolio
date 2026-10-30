import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
  FileText
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import ResumeModal from '../components/ResumeModal';

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleViewResume = () => {
    if (personalInfo.RESUME_DRIVE_URL && personalInfo.RESUME_DRIVE_URL.trim() !== '') {
      window.open(personalInfo.RESUME_DRIVE_URL, '_blank', 'noopener,noreferrer');
    } else {
      setIsResumeModalOpen(true);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-background-card border border-border-dark text-text-secondary shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">
                {personalInfo.status}
              </span>
            </div>

            {/* Greeting */}
            <span className="text-text-secondary font-heading text-lg sm:text-xl font-medium tracking-wide">
              Hi, I'm
            </span>

            {/* Full Name */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-main mt-1 mb-3">
              ADDANKI <span className="gradient-text">MANU SAI</span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-2xl font-semibold text-accent-blueLight tracking-wide mb-5">
              {personalInfo.title}
            </h2>

            {/* 2-3 Line Professional Introduction */}
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroIntro}
            </p>

            {/* Location & Quick Info */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-text-muted mb-8">
              <MapPin className="w-4 h-4 text-accent-purple" />
              <span>{personalInfo.location}</span>
              <span className="text-border-dark">•</span>
              <span>Mohan Babu University (2022–2026)</span>
            </div>

            {/* Four Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Button 1: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/25 hover:opacity-95 active:scale-95 transition-all text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Button 2: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-background-card hover:bg-border-dark text-text-main border border-border-dark transition-all active:scale-95 text-center"
              >
                <Mail className="w-4 h-4 text-accent-purpleLight" />
                <span>Contact Me</span>
              </a>

              {/* Button 3: View Resume */}
              <button
                type="button"
                onClick={handleViewResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-background-card hover:bg-border-dark text-text-main border border-border-dark transition-all active:scale-95 text-center"
              >
                <ExternalLink className="w-4 h-4 text-accent-blueLight" />
                <span>View Resume</span>
              </button>

              {/* Button 4: Download Resume */}
              <a
                href={personalInfo.resumeDownloadPath}
                download={personalInfo.resumeDownloadFilename}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-background-card hover:bg-border-dark text-accent-purpleLight hover:text-white border border-accent-purple/30 transition-all active:scale-95 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Authentic Professional Photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent-purple via-indigo-500 to-accent-blue rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Main photo container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-background-card border-2 border-border-dark shadow-2xl aspect-[4/5]">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle vignette/gradient at bottom of photo for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-main/80 via-transparent to-transparent opacity-40" />

                {/* Floating mini badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background-card/90 backdrop-blur-md border border-border-dark flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-text-main">Addanki Manu Sai</p>
                    <p className="text-[11px] text-accent-purpleLight">B.Tech CSE • Mohan Babu University</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purpleLight">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Resume Configuration Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
