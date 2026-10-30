import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, AlertCircle, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-background-card border border-border-dark rounded-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
        >
          {/* Top colored accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-purple to-accent-blue" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-text-secondary hover:text-white hover:bg-background-secondary transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-text-main">
                Resume Access
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                Addanki Manu Sai — Computer Science &amp; Engineering
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-xl bg-background-secondary border border-border-dark">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                <AlertCircle className="w-4 h-4" />
                <span>Google Drive Link Pending</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                The Google Drive viewer link is awaiting configuration. To connect your online Google Drive resume link, set <code className="text-accent-purpleLight bg-background-main px-1.5 py-0.5 rounded text-[11px] font-mono">RESUME_DRIVE_URL</code> in <code className="text-text-main bg-background-main px-1.5 py-0.5 rounded text-[11px] font-mono">src/data/personalInfo.js</code>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/20">
              <p className="text-xs text-text-main font-medium mb-1">
                Official PDF Resume Ready
              </p>
              <p className="text-xs text-text-secondary">
                The verified offline PDF resume (<code className="text-accent-blueLight text-[11px]">Addanki_Manu_Sai_Resume.pdf</code>) is packaged and available for instant download.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={personalInfo.resumeDownloadPath}
              download={personalInfo.resumeDownloadFilename}
              onClick={onClose}
              className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/25 hover:opacity-95 active:scale-98 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-1/2 px-4 py-2.5 rounded-xl text-sm font-medium bg-background-secondary border border-border-dark text-text-secondary hover:text-white hover:bg-border-dark transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
