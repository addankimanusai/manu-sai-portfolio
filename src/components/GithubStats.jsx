import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Users, BookMarked, GitCommit, ExternalLink, Calendar, RefreshCw, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function GithubStats() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGithubProfile() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`https://api.github.com/users/${personalInfo.githubUsername}`);
        if (!res.ok) {
          throw new Error(`GitHub API error status ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setProfile(data);
          setLoading(false);
        }
      } catch (err) {
        console.warn('Unable to fetch live GitHub profile:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchGithubProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* GitHub Profile & Quick Metrics Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-background-secondary border-2 border-accent-purple/30 overflow-hidden flex-shrink-0 flex items-center justify-center">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Github className="w-8 h-8 text-accent-purple" />
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main">
                {profile?.name || personalInfo.name}
              </h3>
              <span className="text-xs font-mono text-accent-purpleLight px-2 py-0.5 rounded-full bg-accent-purple/10 border border-accent-purple/20">
                @{personalInfo.githubUsername}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              {profile?.bio || 'Full-Stack Developer | Software Developer targeting high-impact engineering roles.'}
            </p>
            {profile?.location && (
              <p className="text-xs text-text-muted mt-0.5">
                📍 {profile.location}
              </p>
            )}
          </div>
        </div>

        {/* Live Metrics Counts */}
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-between md:justify-end">
          <div className="px-4 py-3 rounded-xl bg-background-secondary border border-border-dark text-center min-w-[90px]">
            <span className="font-heading text-xl font-bold text-text-main block">
              {loading ? '-' : (profile?.public_repos ?? '3+')}
            </span>
            <span className="text-[11px] text-text-muted font-medium">
              Repositories
            </span>
          </div>

          <div className="px-4 py-3 rounded-xl bg-background-secondary border border-border-dark text-center min-w-[90px]">
            <span className="font-heading text-xl font-bold text-accent-blueLight block">
              {loading ? '-' : (profile?.followers ?? '—')}
            </span>
            <span className="text-[11px] text-text-muted font-medium">
              Followers
            </span>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-background-secondary hover:bg-border-dark border border-border-dark text-text-main hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">View Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </motion.div>

      {/* GitHub Contribution Activity Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-accent-purple" />
            <div>
              <h4 className="font-heading text-lg font-bold text-text-main">
                Public Contribution Heatmap
              </h4>
              <p className="text-xs text-text-muted">
                Real-time GitHub commit history and code contributions
              </p>
            </div>
          </div>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-accent-purpleLight hover:underline font-medium"
          >
            <span>Open @{personalInfo.githubUsername} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Heatmap visualization with graceful fallback */}
        <div className="p-4 sm:p-6 rounded-xl bg-background-secondary/90 border border-border-dark overflow-x-auto">
          {!imageError ? (
            <div className="min-w-[650px] flex flex-col items-center justify-center">
              <img
                src={`https://ghchart.rshah.org/8B5CF6/${personalInfo.githubUsername}`}
                alt="GitHub Contribution Calendar"
                onError={() => setImageError(true)}
                className="w-full max-w-4xl h-auto filter brightness-110 contrast-125"
              />
              <div className="mt-4 flex items-center justify-between w-full text-[11px] text-text-muted px-2">
                <span>Intensity indicator: Less active</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-sm bg-[#161b22] border border-border-dark" />
                  <span className="w-3 h-3 rounded-sm bg-[#3B2865]" />
                  <span className="w-3 h-3 rounded-sm bg-[#5B39A8]" />
                  <span className="w-3 h-3 rounded-sm bg-[#7C3AED]" />
                  <span className="w-3 h-3 rounded-sm bg-[#8B5CF6]" />
                </div>
                <span>More active</span>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <AlertCircle className="w-8 h-8 text-text-muted mx-auto mb-2" />
              <p className="text-sm text-text-secondary">
                Contribution heatmap is available directly on GitHub.
              </p>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-accent-purple/20 text-accent-purpleLight border border-accent-purple/30"
              >
                <span>View Contribution Graph on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
