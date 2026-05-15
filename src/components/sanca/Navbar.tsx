'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle, Clock, Home, ClipboardCheck, Stethoscope, DoorOpen, BookOpen, HelpCircle, MapPin, ExternalLink, ChevronDown, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/sanca/ThemeToggle';

import type { LucideIcon } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero', icon: Home, description: 'Return to the beginning' },
  { label: 'Assessment', href: '#assessment', icon: ClipboardCheck, description: 'Self-assessment tools' },
  { label: 'Programmes', href: '#programmes', icon: Stethoscope, description: 'Treatment programmes' },
  { label: 'Getting Started', href: '#admissions', icon: DoorOpen, description: 'Begin your journey' },
  { label: 'Resources', href: '#resources', icon: BookOpen, description: 'Support & education' },
  { label: 'Common Questions', href: '#faq', icon: HelpCircle, description: 'Frequently asked' },
  { label: 'Contact', href: '#contact', icon: Phone, description: 'Reach out to us' },
];

// Animation variants for the overlay backdrop
const overlayVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Animation variants for the menu panel sliding from top
const panelVariants = {
  closed: {
    y: '-100%',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      when: 'afterChildren',
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0,
    },
  },
};

// Animation variants for the gradient bar at top
const gradientBarVariants = {
  closed: {
    scaleX: 0,
    transition: { duration: 0.3 },
  },
  open: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

// Animation variants for header section
const headerVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

// Animation variants for individual nav items
const navItemVariants = {
  closed: {
    opacity: 0,
    y: -15,
    filter: 'blur(8px)',
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35 + i * 0.06,
    },
  }),
};

// Animation variants for the footer CTA
const ctaVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.75 },
  },
};

// Animation variants for contact info
const contactVariants = {
  closed: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.2 },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.85 },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass dark:bg-sanca-green-dark/90 dark:border-white/10 shadow-premium-md border-b border-white/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top Emergency Bar */}
        <div className="bg-sanca-green-dark dark:bg-sanca-green-dark/95 text-white/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1.5 text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:0125421121"
                className="flex items-center gap-1.5 hover:text-sanca-gold-light transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span className="hidden sm:inline">Emergency Line: </span>012 542 1121
              </a>
              <a
                href="https://wa.me/27813181511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sanca-gold-light transition-colors"
              >
                <MessageCircle className="h-3 w-3" />
                <span className="hidden sm:inline">WhatsApp: </span>081 318 1511
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-white/70">
              <Clock className="h-3 w-3" />
              <span className="hidden sm:inline">Admissions 7 days/week</span>
              <span className="sm:hidden">24/7</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav
          className={`transition-all duration-500 ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sanca-green rounded-xl flex items-center justify-center shadow-premium-sm group-hover:shadow-premium-md transition-shadow card-animated-border overflow-hidden">
                <img src="/images/sanca/sanca-logo-official.png" alt="SANCA Pretoria Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="hidden sm:block">
                <p
                  className={`heading-premium leading-tight transition-colors ${
                    scrolled ? 'text-sanca-green-dark dark:text-white' : 'text-white'
                  }`}
                >
                  SANCA
                </p>
                <p
                  className={`text-[10px] label-premium transition-colors ${
                    scrolled ? 'text-sanca-green/70 dark:text-white/60' : 'text-white/70'
                  }`}
                >
                  Pretoria
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? scrolled
                        ? 'text-sanca-green dark:text-sanca-gold bg-sanca-green/5 dark:bg-sanca-gold/10'
                        : 'text-white bg-white/10'
                      : scrolled
                      ? 'text-foreground/70 hover:text-sanca-green dark:hover:text-sanca-gold hover:bg-sanca-green/5 dark:hover:bg-sanca-gold/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-sanca-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                onClick={() => scrollTo('#admissions')}
                className="hidden md:flex bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold shadow-gold-enhanced transition-all duration-300 hover:shadow-lg"
                size="sm"
              >
                Get Help Now
              </Button>

              {/* Mobile Menu Toggle Button */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  scrolled
                    ? 'hover:bg-sanca-green/5 dark:hover:bg-white/5'
                    : 'hover:bg-white/10'
                } ${mobileOpen ? 'z-[60]' : 'z-[51]'}`}
                whileTap={{ scale: 0.9 }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                <motion.div
                  className="relative w-5 h-5 flex items-center justify-center"
                  animate={mobileOpen ? 'open' : 'closed'}
                >
                  <motion.span
                    className={`absolute left-0 right-0 h-[2px] rounded-full transition-colors duration-300 ${
                      mobileOpen
                        ? 'bg-sanca-green-dark dark:bg-white'
                        : scrolled
                        ? 'bg-sanca-green dark:bg-white'
                        : 'bg-white'
                    }`}
                    variants={{
                      closed: { top: '35%', rotate: 0, width: '100%' },
                      open: { top: '50%', rotate: 45, width: '100%' },
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: '-50%' }}
                  />
                  <motion.span
                    className={`absolute left-0 right-0 h-[2px] rounded-full transition-colors duration-300 ${
                      mobileOpen
                        ? 'bg-sanca-green-dark dark:bg-white'
                        : scrolled
                        ? 'bg-sanca-green dark:bg-white'
                        : 'bg-white'
                    }`}
                    variants={{
                      closed: { top: '65%', rotate: 0, width: '100%' },
                      open: { top: '50%', rotate: -45, width: '100%' },
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: '-50%' }}
                  />
                  <motion.span
                    className={`absolute h-[2px] rounded-full transition-colors duration-300 ${
                      mobileOpen
                        ? 'bg-sanca-green-dark dark:bg-white'
                        : scrolled
                        ? 'bg-sanca-green dark:bg-white'
                        : 'bg-white'
                    }`}
                    variants={{
                      closed: { top: '50%', width: '60%', opacity: 1 },
                      open: { top: '50%', width: 0, opacity: 0 },
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{ y: '-50%' }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* ============================================
          ULTRA PREMIUM TOP-DOWN MOBILE MENU
          ============================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm"
            />

            {/* Menu Panel - Slides from Top */}
            <motion.div
              key="mobile-menu"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-0 top-0 z-[56] max-h-screen overflow-y-auto custom-scrollbar"
            >
              <div className="relative min-h-screen bg-gradient-to-b from-sanca-cream via-white to-sanca-cream dark:from-sanca-green-dark dark:via-[#0a2a18] dark:to-sanca-green-dark/95">
                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Floating orbs */}
                  <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-sanca-gold/[0.06] dark:bg-sanca-gold/[0.08] blur-[80px]" />
                  <div className="absolute top-1/3 -left-24 w-64 h-64 rounded-full bg-sanca-green/[0.05] dark:bg-sanca-emerald/[0.06] blur-[80px]" />
                  <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-sanca-gold/[0.04] dark:bg-sanca-gold/[0.05] blur-[60px]" />
                  {/* Subtle dot grid */}
                  <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #1B5E3B 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Top-right decorative leaf shapes */}
                  <svg className="absolute top-20 right-6 w-24 h-24 opacity-[0.04] dark:opacity-[0.06]" viewBox="0 0 100 100">
                    <path d="M50 5 C20 5 5 35 5 50 C5 75 30 95 50 95 C70 95 95 75 95 50 C95 35 80 5 50 5Z" fill="#1B5E3B" />
                  </svg>
                  <svg className="absolute top-44 right-16 w-16 h-16 opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100">
                    <path d="M50 5 C20 5 5 35 5 50 C5 75 30 95 50 95 C70 95 95 75 95 50 C95 35 80 5 50 5Z" fill="#C5963A" />
                  </svg>
                </div>

                {/* Animated Gradient Bar at Top */}
                <motion.div
                  variants={gradientBarVariants}
                  className="h-1.5 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald origin-left"
                />

                {/* Content Container */}
                <div className="relative max-w-lg mx-auto px-6 pt-4 pb-10">
                  {/* Close Button + Header */}
                  <motion.div
                    variants={headerVariants}
                    className="flex items-center justify-between mb-8"
                  >
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-sanca-green to-sanca-green-dark rounded-2xl flex items-center justify-center shadow-premium-md overflow-hidden card-animated-border">
                        <img
                          src="/images/sanca/sanca-logo-official.png"
                          alt="SANCA Pretoria Logo"
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div>
                        <p className="heading-premium text-xl leading-tight text-sanca-green-dark dark:text-white">
                          SANCA
                        </p>
                        <p className="text-xs label-premium text-sanca-green/70 dark:text-sanca-gold-light/80">
                          Pretoria
                        </p>
                      </div>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      onClick={() => setMobileOpen(false)}
                      className="w-10 h-10 rounded-xl bg-sanca-green/[0.06] dark:bg-white/[0.06] hover:bg-sanca-green/[0.12] dark:hover:bg-white/[0.12] flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.05, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="h-4 w-4 text-sanca-green-dark dark:text-white" />
                    </motion.button>
                  </motion.div>

                  {/* Tagline */}
                  <motion.div
                    variants={headerVariants}
                    className="mb-8"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-3.5 w-3.5 text-sanca-gold" />
                      <p className="text-xs font-medium text-sanca-gold dark:text-sanca-gold-light uppercase tracking-wider">
                        Your Path to Healing
                      </p>
                      <Sparkles className="h-3 w-3 text-sanca-gold/60" />
                    </div>
                    <div className="h-px bg-gradient-to-r from-sanca-green/20 via-sanca-gold/20 to-transparent" />
                  </motion.div>

                  {/* Navigation Items */}
                  <div className="space-y-1.5 mb-8">
                    {navLinks.map((link, i) => {
                      const Icon = link.icon;
                      const isActive = activeSection === link.href.replace('#', '');
                      return (
                        <motion.button
                          key={link.href}
                          custom={i}
                          variants={navItemVariants}
                          initial="closed"
                          animate="open"
                          onClick={() => scrollTo(link.href)}
                          className={`group relative w-full text-left flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-sanca-green/[0.08] to-sanca-green/[0.03] dark:from-sanca-gold/[0.1] dark:to-sanca-gold/[0.03] shadow-premium-sm'
                              : 'hover:bg-sanca-green/[0.04] dark:hover:bg-white/[0.03]'
                          }`}
                        >
                          {/* Active indicator bar */}
                          {isActive && (
                            <motion.div
                              layoutId="topMenuActive"
                              className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald"
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}

                          {/* Icon container */}
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold shadow-premium-xs'
                                : 'bg-sanca-green/[0.04] dark:bg-white/[0.04] text-sanca-green/50 dark:text-white/40 group-hover:bg-sanca-green/[0.08] dark:group-hover:bg-white/[0.08] group-hover:text-sanca-green dark:group-hover:text-sanca-gold-light'
                            }`}
                          >
                            <Icon className="h-4.5 w-4.5" />
                          </div>

                          {/* Label & Description */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-sm font-semibold transition-colors ${
                                  isActive
                                    ? 'text-sanca-green-dark dark:text-sanca-gold'
                                    : 'text-foreground/70 dark:text-white/70 group-hover:text-sanca-green-dark dark:group-hover:text-white'
                                }`}
                              >
                                {link.label}
                              </span>
                              {isActive && (
                                <motion.div
                                  className="h-1.5 w-1.5 rounded-full bg-sanca-gold"
                                  layoutId="topMenuDot"
                                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                              )}
                            </div>
                            <p className="text-[11px] text-foreground/35 dark:text-white/30 mt-0.5 leading-tight">
                              {link.description}
                            </p>
                          </div>

                          {/* Arrow indicator */}
                          <motion.div
                            className={`flex-shrink-0 transition-all duration-300 ${
                              isActive
                                ? 'text-sanca-green dark:text-sanca-gold opacity-100'
                                : 'text-foreground/15 dark:text-white/15 opacity-0 group-hover:opacity-100 group-hover:text-sanca-green/40 dark:group-hover:text-sanca-gold/40 group-hover:translate-x-0.5'
                            }`}
                          >
                            <ChevronDown className="h-4 w-4 -rotate-90" />
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Divider with diamond */}
                  <motion.div
                    variants={ctaVariants}
                    className="divider-diamond my-6"
                  />

                  {/* Get Help Now CTA */}
                  <motion.div variants={ctaVariants}>
                    <motion.button
                      onClick={() => scrollTo('#admissions')}
                      className="w-full relative overflow-hidden group rounded-2xl"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative px-6 py-4 bg-gradient-to-r from-sanca-gold via-sanca-gold-light to-sanca-gold text-white font-semibold text-sm rounded-2xl shadow-gold-enhanced transition-all duration-300 group-hover:shadow-lg btn-ripple flex items-center justify-center gap-2.5">
                        <span>Get Help Now</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </div>
                    </motion.button>
                  </motion.div>

                  {/* Contact Info Cards */}
                  <motion.div
                    variants={contactVariants}
                    className="mt-6 space-y-2"
                  >
                    <a
                      href="tel:0125421121"
                      className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-sanca-green/[0.04] dark:bg-white/[0.03] hover:bg-sanca-green/[0.08] dark:hover:bg-white/[0.06] transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sanca-green/10 dark:bg-sanca-green/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Phone className="h-3.5 w-3.5 text-sanca-green dark:text-sanca-emerald" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">
                          Emergency Line
                        </p>
                        <p className="text-xs text-foreground/45 dark:text-white/40">
                          012 542 1121
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/27813181511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-sanca-green/[0.04] dark:bg-white/[0.03] hover:bg-sanca-green/[0.08] dark:hover:bg-white/[0.06] transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-sanca-gold/10 dark:bg-sanca-gold/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <MessageCircle className="h-3.5 w-3.5 text-sanca-gold dark:text-sanca-gold-light" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">
                          WhatsApp
                        </p>
                        <p className="text-xs text-foreground/45 dark:text-white/40">
                          081 318 1511
                        </p>
                      </div>
                    </a>

                    <div className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-sanca-green/[0.04] dark:bg-white/[0.03]">
                      <div className="w-9 h-9 rounded-lg bg-sanca-emerald/10 dark:bg-sanca-emerald/15 flex items-center justify-center">
                        <Clock className="h-3.5 w-3.5 text-sanca-emerald" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">
                          Operating Hours
                        </p>
                        <p className="text-xs text-foreground/45 dark:text-white/40">
                          Admissions 7 days/week
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Location Badge */}
                  <motion.div
                    variants={contactVariants}
                    className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-foreground/25 dark:text-white/20"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>Pretoria, Gauteng, South Africa</span>
                  </motion.div>

                  {/* Motto */}
                  <motion.div
                    variants={contactVariants}
                    className="mt-4 text-center"
                  >
                    <p className="text-[10px] text-sanca-green/30 dark:text-sanca-gold/20 font-serif italic tracking-wide">
                      &ldquo;Where compassion meets clinical excellence&rdquo;
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
