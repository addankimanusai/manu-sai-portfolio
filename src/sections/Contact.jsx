import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Interested in hiring, technical collaboration, or discussing software engineering roles? I'm actively exploring opportunities and would love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark space-y-6">
              <h3 className="font-heading text-xl font-bold text-text-main">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-background-secondary hover:bg-background-card border border-border-dark group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-purple/15 text-accent-purple flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">Email</p>
                    <p className="text-sm font-semibold text-text-main group-hover:text-accent-purpleLight transition-colors truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-background-secondary hover:bg-background-card border border-border-dark group transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/15 text-accent-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">Phone</p>
                    <p className="text-sm font-semibold text-text-main group-hover:text-accent-blueLight transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-background-secondary border border-border-dark">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted">Location</p>
                    <p className="text-sm font-semibold text-text-main">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-border-dark">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-background-secondary hover:bg-[#0A66C2]/20 border border-border-dark hover:border-[#0A66C2]/50 text-xs font-semibold text-text-main hover:text-[#0A66C2] transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-background-secondary hover:bg-white/10 border border-border-dark hover:border-white/30 text-xs font-semibold text-text-main hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Status Note */}
              <div className="p-4 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-accent-purple flex-shrink-0 mt-0.5" />
                <p className="text-xs text-text-secondary leading-relaxed">
                  Available for immediate interview scheduling and software developer opportunities across India &amp; remote teams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
