'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import ThemeToggle from '@/components/sanca/ThemeToggle';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Getting Started', href: '#admissions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Common Questions', href: '#faq' },
  { label: 'Contact', href: '#contact' },
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
              <span className="hidden sm:inline">Emergency: </span>012 542 1121
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sanca-green rounded-xl flex items-center justify-center shadow-premium-sm group-hover:shadow-premium-md transition-shadow card-animated-border">
              <span className="text-white font-serif font-bold text-lg sm:text-xl relative z-10">
                S
              </span>
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
              className="hidden md:flex bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold shadow-gold transition-all duration-300 hover:shadow-lg"
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
                className="w-[300px] bg-white dark:bg-sanca-green-dark p-0"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-sanca-green rounded-lg flex items-center justify-center">
                        <span className="text-white font-serif font-bold text-sm">
                          S
                        </span>
                      </div>
                      <span className="font-serif font-bold text-sanca-green">
                        SANCA Pretoria
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 py-4 px-2 overflow-y-auto">
                    {navLinks.map((link, i) => (
                      <motion.button
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => scrollTo(link.href)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 ${
                          activeSection === link.href.replace('#', '')
                            ? 'bg-sanca-green text-white shadow-premium-sm'
                            : 'text-foreground/70 hover:bg-sanca-sage hover:text-sanca-green'
                        }`}
                      >
                        {link.label}
                      </motion.button>
                    ))}
                  </div>
                  <div className="p-4 border-t space-y-3">
                    <Button
                      onClick={() => scrollTo('#admissions')}
                      className="w-full bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold shadow-gold"
                    >
                      Get Help Now
                    </Button>
                    <a
                      href="tel:0125421121"
                      className="flex items-center justify-center gap-2 text-sm text-sanca-green font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      012 542 1121
                    </a>
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
