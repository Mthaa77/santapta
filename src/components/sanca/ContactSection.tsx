'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ---------- contact info data ---------- */
const contactCards = [
  {
    icon: Phone,
    label: 'Phone',
    value: '012 542 1121',
    href: 'tel:0125421121',
    sub: 'Available 24/7 for emergencies',
    accent: 'sanca-green',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '081 318 1511',
    href: 'https://wa.me/27813181511',
    sub: 'Quick text response',
    accent: 'sanca-emerald',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@sancapta.co.za',
    href: 'mailto:info@sancapta.co.za',
    sub: 'Response within 24 hours',
    accent: 'sanca-gold',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '307 Sakabula St, Elandsoord, Pretoria',
    href: 'https://maps.google.com/?q=307+Sakabula+St+Elandsoord+Pretoria',
    sub: 'Click to open in Google Maps',
    accent: 'sanca-green-light',
    external: true,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon–Fri 07:30–16:00  •  Sat 08:00–12:00',
    href: undefined,
    sub: 'Closed Sundays & Public Holidays',
    accent: 'sanca-gold-dark',
  },
];

const subjectOptions = [
  'Admissions Enquiry',
  'General Enquiry',
  'Family Support',
  'Volunteer Interest',
  'Donation',
  'Other',
];

/* ---------- animation variants ---------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const cardStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' },
  }),
};

/* ---------- form field type ---------- */
interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/* ================================================================ */
export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ---- validation ---- */
  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) {
      e.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.subject) e.subject = 'Please select a subject';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  /* ---- submit handler ---- */
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    // simulate 1.5 s network call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  /* ---- helpers ---- */
  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field as keyof FormErrors];
        return copy;
      });
    }
  };

  /* ---- accent map for icon bg ---- */
  const accentBg: Record<string, string> = {
    'sanca-green': 'bg-sanca-green/10 text-sanca-green',
    'sanca-emerald': 'bg-sanca-emerald/10 text-sanca-emerald',
    'sanca-gold': 'bg-sanca-gold/10 text-sanca-gold',
    'sanca-green-light': 'bg-sanca-green-light/10 text-sanca-green-light',
    'sanca-gold-dark': 'bg-sanca-gold-dark/10 text-sanca-gold-dark',
  };

  /* ================================================================ */
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-sanca-cream dark:bg-[#0a2a18] overflow-hidden section-top-gradient"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sanca-green/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-sanca-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sanca-sage/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ============ Section Header ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 border border-sanca-green/20 text-sanca-green text-sm font-medium mb-5"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark leading-tight"
          >
            Get in{' '}
            <span className="text-gradient-gold">Touch</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need help, have questions, or want to support our mission — we&apos;re here for you. Reach out and SANCA will respond.
          </motion.p>
        </motion.div>

        {/* ============ Two-column layout ============ */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ---------- Left column: Form ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 sm:p-8 shadow-premium-md dark:bg-[#0D3B22] border-sanca-green/5 relative overflow-hidden">
              {/* Gold top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ---- Success state ---- */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 250, damping: 15, delay: 0.15 }}
                      className="w-20 h-20 rounded-full bg-sanca-green/10 flex items-center justify-center mb-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12, delay: 0.3 }}
                      >
                        <CheckCircle2 className="h-10 w-10 text-sanca-green" />
                      </motion.div>
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-sanca-green-dark mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-lg max-w-sm">
                      We&apos;ll be in touch within 24 hours. Thank you for reaching out to SANCA.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      variant="outline"
                      className="mt-6 border-sanca-green text-sanca-green hover:bg-sanca-green hover:text-white transition-colors"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  /* ---- Form state ---- */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Full Name */}
                    <motion.div
                      custom={0}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-sanca-green-dark mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="Enter your full name"
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#1a3a25] dark:border-sanca-green/30 dark:text-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sanca-green/20 focus:border-sanca-green ${
                          errors.name ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 mt-1.5 text-red-500 text-sm"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Email + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <motion.div
                        custom={1}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-sanca-green-dark mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setField('email', e.target.value)}
                          placeholder="you@example.com"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#1a3a25] dark:border-sanca-green/30 dark:text-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sanca-green/20 focus:border-sanca-green ${
                            errors.email ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : 'border-gray-200'
                          }`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-1 mt-1.5 text-red-500 text-sm"
                          >
                            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        custom={2}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-sanca-green-dark mb-1.5">
                          Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setField('phone', e.target.value)}
                          placeholder="e.g. 012 345 6789"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white dark:bg-[#1a3a25] dark:border-sanca-green/30 dark:text-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sanca-green/20 focus:border-sanca-green"
                        />
                      </motion.div>
                    </div>

                    {/* Subject dropdown */}
                    <motion.div
                      custom={3}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label htmlFor="contact-subject" className="block text-sm font-semibold text-sanca-green-dark mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={(e) => setField('subject', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#1a3a25] dark:border-sanca-green/30 dark:text-white transition-all duration-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sanca-green/20 focus:border-sanca-green appearance-none cursor-pointer ${
                          errors.subject ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : 'border-gray-200'
                        } ${!form.subject ? 'text-gray-400' : ''}`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                        }}
                      >
                        <option value="" disabled>
                          Select a subject…
                        </option>
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 mt-1.5 text-red-500 text-sm"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Message textarea */}
                    <motion.div
                      custom={4}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-sanca-green-dark mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => setField('message', e.target.value)}
                        placeholder="Tell us how we can help you…"
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-[#1a3a25] dark:border-sanca-green/30 dark:text-white transition-all duration-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sanca-green/20 focus:border-sanca-green resize-y min-h-[120px] ${
                          errors.message ? 'border-red-400 focus:ring-red-200 focus:border-red-400' : 'border-gray-200'
                        }`}
                      />
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-1 mt-1.5 text-red-500 text-sm"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Submit button */}
                    <motion.div
                      custom={5}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="pt-2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={submitting}
                          className="btn-ripple w-full sm:w-auto bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold px-8 py-4 rounded-xl shadow-premium-md transition-all duration-300 hover:shadow-premium-lg h-auto text-base disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="inline-block h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending…
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* ---------- Right column: Contact cards ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              const bgClass = accentBg[card.accent] ?? 'bg-sanca-green/10 text-sanca-green';

              const inner = (
                <>
                  {/* Icon */}
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">
                      {card.label}
                    </p>
                    <p className="font-semibold text-sanca-green-dark text-sm sm:text-base leading-snug break-words">
                      {card.value}
                    </p>
                    {card.sub && (
                      <p className="text-gray-500 text-xs mt-0.5">{card.sub}</p>
                    )}
                  </div>
                </>
              );

              const cardClasses = `group p-4 rounded-2xl bg-white dark:bg-[#0D3B22] border border-gray-100 shadow-premium-sm hover-lift transition-all duration-300`;

              return (
                <motion.div
                  key={card.label}
                  custom={i}
                  variants={cardStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className={`${cardClasses} flex items-center gap-4 cursor-pointer`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={`${cardClasses} flex items-center gap-4`}>
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Extra note card */}
            <motion.div
              custom={contactCards.length}
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-5 rounded-2xl bg-gradient-to-br from-sanca-green/5 to-sanca-gold/5 border-sanca-green/10">
                <p className="text-sanca-green-dark text-sm leading-relaxed">
                  <strong>Need immediate help?</strong> Our 24/7 emergency line is always open. Call{' '}
                  <a href="tel:0125421121" className="text-sanca-green font-semibold underline underline-offset-2 hover:text-sanca-green-light transition-colors">
                    012 542 1121
                  </a>{' '}
                  or WhatsApp{' '}
                  <a href="https://wa.me/27813181511" target="_blank" rel="noopener noreferrer" className="text-sanca-green font-semibold underline underline-offset-2 hover:text-sanca-green-light transition-colors">
                    081 318 1511
                  </a>.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* ============ Google Maps ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14"
        >
          {/* Label row above map */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-sanca-green">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold text-sm uppercase tracking-wider">Find Us</span>
            </div>
            <span className="text-gray-500 text-sm hidden sm:inline">•</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">
              Corner Rachel De Beer &amp; Waterbok St, Ninapark, Pretoria
            </span>
            <a
              href="https://maps.google.com/?q=SANCA+Pretoria+Corner+Rachel+De+Beer+Waterbok+St+Ninapark"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sanca-green text-sm font-semibold hover:text-sanca-green-light transition-colors"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          </div>

          {/* Map card */}
          <Card className="shadow-premium-md rounded-2xl overflow-hidden border-sanca-green/5 dark:bg-[#0D3B22]">
            <iframe
              src="https://maps.google.com/maps?q=SANCA+Pretoria+Corner+Rachel+De+Beer+Waterbok+St+Ninapark&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 sm:h-80 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SANCA Pretoria Location"
              allowFullScreen
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
