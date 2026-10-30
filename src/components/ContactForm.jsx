import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Info, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';

export default function ContactForm() {
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'unconfigured'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Check if endpoint is configured
    if (!formspreeEndpoint || formspreeEndpoint.trim() === '') {
      setStatus('unconfigured');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#8B5CF6', '#3B82F6', '#10B981']
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData?.errors?.[0]?.message ||
          'Submission encountered an issue. Please try again or reach out directly via email.'
        );
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Unable to connect to the mail server. Please verify your connection or email directly at ' + personalInfo.email
      );
      setStatus('error');
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-dark relative">
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-text-main mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-text-secondary mb-6 leading-relaxed">
        Have an exciting developer opening, collaborative idea, or question? Fill in the details below.
      </p>

      {/* Unconfigured Formspree Notice */}
      {status === 'unconfigured' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed"
        >
          <div className="flex items-center gap-2 font-semibold mb-1">
            <Info className="w-4 h-4 text-amber-400" />
            <span>Formspree Endpoint Configuration Notice</span>
          </div>
          <p>
            The backend Formspree endpoint is not set yet. To activate this form, create your free form at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-amber-200">formspree.io</a>, then set <code className="bg-background-main px-1.5 py-0.5 rounded font-mono text-white">VITE_FORMSPREE_ENDPOINT</code> in your <code className="bg-background-main px-1.5 py-0.5 rounded font-mono text-white">.env</code> file.
          </p>
          <div className="mt-3">
            <a
              href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name || 'Recruiter')}&body=${encodeURIComponent(formData.message || '')}`}
              className="inline-flex items-center gap-1.5 font-bold text-white bg-amber-500/20 hover:bg-amber-500/30 px-3 py-1.5 rounded-lg border border-amber-500/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Click to Send via Default Email Client Instead</span>
            </a>
          </div>
        </motion.div>
      )}

      {/* Error state alert */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5"
        >
          <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Failed</p>
            <p className="mt-0.5">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      {/* Success feedback */}
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 px-4 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-heading text-2xl font-bold text-text-main">
            Message Sent Successfully!
          </h4>
          <p className="mt-2 text-sm text-text-secondary max-w-md mx-auto">
            Thank you for reaching out. I have received your message and will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 px-5 py-2.5 rounded-xl text-xs font-semibold bg-background-secondary border border-border-dark text-text-main hover:bg-border-dark transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-text-main uppercase tracking-wider mb-1.5">
              Full Name <span className="text-accent-purple">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              placeholder="e.g. Jane Doe"
              className={`w-full px-4 py-3 rounded-xl bg-background-secondary text-text-main placeholder-text-muted text-sm border transition-all outline-none focus:ring-2 focus:ring-accent-purple/50 ${
                errors.name ? 'border-rose-500' : 'border-border-dark hover:border-border-highlight'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-400">{errors.name}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-text-main uppercase tracking-wider mb-1.5">
              Email Address <span className="text-accent-purple">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
              placeholder="jane@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-background-secondary text-text-main placeholder-text-muted text-sm border transition-all outline-none focus:ring-2 focus:ring-accent-purple/50 ${
                errors.email ? 'border-rose-500' : 'border-border-dark hover:border-border-highlight'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-400">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-text-main uppercase tracking-wider mb-1.5">
              Message <span className="text-accent-purple">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'loading'}
              placeholder="Share details regarding an opportunity or project..."
              className={`w-full px-4 py-3 rounded-xl bg-background-secondary text-text-main placeholder-text-muted text-sm border transition-all outline-none resize-none focus:ring-2 focus:ring-accent-purple/50 ${
                errors.message ? 'border-rose-500' : 'border-border-dark hover:border-border-highlight'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-400">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/25 hover:opacity-95 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all focus:outline-none"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting message...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
