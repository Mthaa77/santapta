'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle, Clock, Home, ClipboardCheck, Stethoscope, DoorOpen, BookOpen, HelpCircle, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import ThemeToggle from '@/components/sanca/ThemeToggle';

import type { LucideIcon } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Assessment', href: '#assessment', icon: ClipboardCheck },
  { label: 'Programmes', href: '#programmes', icon: Stethoscope },
  { label: 'Getting Started', href: '#admissions', icon: DoorOpen },
  { label: 'Resources', href: '#resources', icon: BookOpen },
  { label: 'Common Questions', href: '#faq', icon: HelpCircle },
  { label: 'Contact', href: '#contact', icon: Phone },
];

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

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
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
                className={`font-serif font-bold leading-tight transition-colors ${
                  scrolled ? 'text-sanca-green-dark dark:text-white' : 'text-white'
                }`}
              >
                SANCA
              </p>
              <p
                className={`text-[10px] tracking-wider uppercase transition-colors ${
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

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${
                    scrolled ? 'text-sanca-green' : 'text-white'
                  }`}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[320px] sm:w-[360px] p-0 overflow-hidden bg-gradient-to-b from-sanca-cream via-white to-sanca-cream dark:from-sanca-green-dark dark:via-sanca-green-dark dark:to-sanca-green-dark/95 border-l-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Decorative background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Floating orb */}
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-sanca-gold/5 dark:bg-sanca-gold/10 blur-3xl" />
                  <div className="absolute bottom-20 -left-16 w-48 h-48 rounded-full bg-sanca-green/5 dark:bg-sanca-emerald/10 blur-3xl" />
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #1B5E3B 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>

                {/* Gold accent line at top */}
                <div className="h-1 w-full bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

                <div className="relative flex flex-col h-full">
                  {/* Premium Header */}
                  <div className="relative px-6 pt-6 pb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-sanca-green/5 via-transparent to-sanca-gold/5 dark:from-sanca-green/20 dark:via-transparent dark:to-sanca-gold/10" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-sanca-green to-sanca-green-dark rounded-2xl flex items-center justify-center shadow-premium-md overflow-hidden card-animated-border">
                        <img src="/images/sanca/sanca-logo-official.png" alt="SANCA Pretoria Logo" className="w-full h-full object-contain p-1.5" />
                      </div>
                      <div>
                        <p className="font-serif font-bold text-lg leading-tight text-sanca-green-dark dark:text-white">SANCA</p>
                        <p className="text-xs tracking-[0.2em] uppercase text-sanca-green/70 dark:text-sanca-gold-light/80 font-medium">Pretoria</p>
                        <p className="text-[10px] text-sanca-sage dark:text-white/40 mt-0.5 italic font-serif">C.A.I.R.U.P. Programme</p>
                      </div>
                    </div>
                    {/* Decorative line under header */}
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-sanca-gold/30 to-transparent dark:via-sanca-gold/20" />
                  </div>

                  {/* Nav Items */}
                  <div className="flex-1 px-3 py-2 overflow-y-auto custom-scrollbar">
                    <div className="space-y-1">
                      {navLinks.map((link, i) => {
                        const Icon = link.icon;
                        const isActive = activeSection === link.href.replace('#', '');
                        return (
                          <motion.button
                            key={link.href}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.06, type: 'spring', stiffness: 200, damping: 20 }}
                            onClick={() => scrollTo(link.href)}
                            className={`group relative w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                              isActive
                                ? 'bg-sanca-green/[0.08] dark:bg-sanca-gold/[0.12] text-sanca-green-dark dark:text-sanca-gold shadow-premium-sm'
                                : 'text-foreground/60 dark:text-white/60 hover:bg-sanca-green/[0.04] dark:hover:bg-white/[0.05] hover:text-sanca-green dark:hover:text-white'
                            }`}
                          >
                            {/* Gradient left border accent on active */}
                            {isActive && (
                              <motion.div
                                layoutId="sidebarActive"
                                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                              />
                            )}

                            {/* Icon */}
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                              isActive
                                ? 'bg-sanca-green/10 dark:bg-sanca-gold/20 text-sanca-green dark:text-sanca-gold'
                                : 'bg-transparent text-foreground/30 dark:text-white/30 group-hover:bg-sanca-green/5 dark:group-hover:bg-white/10 group-hover:text-sanca-green dark:group-hover:text-sanca-gold-light'
                            }`}>
                              <Icon className="h-4 w-4" />
                            </div>

                            {/* Label */}
                            <span className="relative">
                              {link.label}
                              {isActive && (
                                <motion.div
                                  className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gradient-to-r from-sanca-green to-sanca-gold rounded-full"
                                  layoutId="sidebarUnderline"
                                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                              )}
                            </span>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer Section */}
                  <div className="relative px-4 pb-6 pt-4">
                    {/* Top separator with gradient */}
                    <div className="h-px bg-gradient-to-r from-transparent via-sanca-gold/30 to-transparent dark:via-sanca-gold/20 mb-5" />

                    {/* Premium Get Help Now CTA */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
                      onClick={() => { scrollTo('#admissions'); }}
                      className="w-full relative overflow-hidden group rounded-xl"
                    >
                      <div className="relative px-5 py-3.5 bg-gradient-to-r from-sanca-gold via-sanca-gold-light to-sanca-gold text-white font-semibold text-sm rounded-xl shadow-gold-enhanced transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02] btn-ripple flex items-center justify-center gap-2">
                        <span>Get Help Now</span>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.button>

                    {/* Emergency Contact Info */}
                    <div className="mt-4 space-y-2.5">
                      <a
                        href="tel:0125421121"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sanca-green/[0.04] dark:bg-white/[0.04] hover:bg-sanca-green/[0.08] dark:hover:bg-white/[0.08] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-sanca-green/10 dark:bg-sanca-green/20 flex items-center justify-center">
                          <Phone className="h-3.5 w-3.5 text-sanca-green dark:text-sanca-emerald" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">Emergency Line</p>
                          <p className="text-xs text-foreground/50 dark:text-white/50">012 542 1121</p>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/27813181511"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sanca-green/[0.04] dark:bg-white/[0.04] hover:bg-sanca-green/[0.08] dark:hover:bg-white/[0.08] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-full bg-sanca-gold/10 dark:bg-sanca-gold/20 flex items-center justify-center">
                          <MessageCircle className="h-3.5 w-3.5 text-sanca-gold dark:text-sanca-gold-light" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">WhatsApp</p>
                          <p className="text-xs text-foreground/50 dark:text-white/50">081 318 1511</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sanca-green/[0.04] dark:bg-white/[0.04]">
                        <div className="w-8 h-8 rounded-full bg-sanca-emerald/10 dark:bg-sanca-emerald/20 flex items-center justify-center">
                          <Clock className="h-3.5 w-3.5 text-sanca-emerald dark:text-sanca-emerald" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-sanca-green-dark dark:text-white">Operating Hours</p>
                          <p className="text-xs text-foreground/50 dark:text-white/50">Admissions 7 days/week</p>
                        </div>
                      </div>
                    </div>

                    {/* Location badge */}
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-foreground/30 dark:text-white/25">
                      <MapPin className="h-3 w-3" />
                      <span>Pretoria, Gauteng, South Africa</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
