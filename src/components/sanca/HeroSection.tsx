'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown, Shield, Heart, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src="/images/sanca/facility-garden-building.jpg"
          alt="SANCA Pretoria facility nestled in lush gardens and greenery"
          className="w-full h-[120%] object-cover"
        />
        {/* Multi-layer overlay for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-sanca-green-dark/85 via-sanca-green-dark/65 to-sanca-green-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-sanca-green-dark/50 via-transparent to-sanca-green-dark/30" />
        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* Animated geometric decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-sanca-gold/10 rounded-full animate-rotate-slow hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-20 h-20 border border-sanca-gold/15 rounded-full animate-rotate-slow hidden lg:block" style={{ animationDirection: 'reverse', animationDuration: '20s' }} />
      <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-sanca-gold/30 rounded-full animate-bounce-gentle hidden lg:block" />
      <div className="absolute top-1/2 right-[10%] w-1.5 h-1.5 bg-sanca-gold-light/20 rounded-full animate-bounce-gentle hidden lg:block" style={{ animationDelay: '1s' }} />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-sanca-gold/8 rounded-full blur-3xl animate-parallax-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-sanca-green-light/8 rounded-full blur-3xl animate-parallax-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-sanca-emerald/5 rounded-full blur-3xl animate-parallax-float" style={{ animationDelay: '5s' }} />

      {/* Hero particles - subtle floating dots */}
      <div className="hero-particle hero-particle-1 bg-sanca-gold/40" />
      <div className="hero-particle hero-particle-2 bg-white/30" />
      <div className="hero-particle hero-particle-3 bg-sanca-gold-light/25" />
      <div className="hero-particle hero-particle-4 bg-sanca-emerald/30" />
      <div className="hero-particle hero-particle-5 bg-white/20" />
      <div className="hero-particle hero-particle-6 bg-sanca-gold/35" />

      {/* Content with parallax */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full" style={{ y: textY, opacity }}>
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-sanca-gold/40 text-white text-sm mb-8 badge-pulse shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(197,150,58,0.1)]"
          >
            <img src="/images/sanca/sanca-logo-official.png" alt="" className="h-5 w-5 object-contain rounded-sm" />
            <Shield className="h-4 w-4 text-sanca-gold" />
            <span>Est. 1957 — Nearly Seven Decades of Restoring Lives and Rebuilding Futures</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-tight"
          >
            <span>Your Journey to </span>
            <span className="text-gradient-animated">Healing</span>
            <span> Starts Here</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/85 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Where heartfelt compassion meets world-class clinical care — accessible, affordable recovery
            for Pretoria, Soshanguve, Hammanskraal, and the greater Tshwane area. Set within
            tranquil, landscaped grounds that nurture the soul, we offer a sanctuary where healing
            begins the moment you arrive. Because every person deserves the dignity of a fresh start
            and the hope of a brighter tomorrow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold text-base px-8 py-6 shadow-gold hover:shadow-xl transition-all duration-300 rounded-xl group btn-ripple"
            >
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Take the First Step
            </Button>
            <Button
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/70 font-semibold text-base px-8 py-6 bg-white/10 backdrop-blur-md transition-all duration-300 rounded-xl group shadow-lg shadow-black/10"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Start Admissions
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-emerald animate-pulse" />
              <span>DSD Registered & Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-gold animate-pulse" />
              <span>Medical Aid & PMB Covered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-emerald animate-pulse" />
              <span>No Co-Payment for Extended Stay</span>
            </div>
          </motion.div>

          {/* Stats Row — Premium Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-14 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg"
          >
            <div className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center hover:bg-white/15 transition-colors duration-300">
              <Award className="h-5 w-5 text-sanca-gold/90" />
              <span className="text-white font-serif font-bold text-base sm:text-lg tracking-tight">68+</span>
              <span className="text-white/60 text-xs sm:text-sm leading-snug font-medium">Years of Service</span>
            </div>
            <div className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center hover:bg-white/15 transition-colors duration-300">
              <Users className="h-5 w-5 text-sanca-gold/90" />
              <span className="text-white font-serif font-bold text-base sm:text-lg tracking-tight">32</span>
              <span className="text-white/60 text-xs sm:text-sm leading-snug font-medium">Societies</span>
            </div>
            <div className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center hover:bg-white/15 transition-colors duration-300">
              <Star className="h-5 w-5 text-sanca-gold/90" />
              <span className="text-white font-serif font-bold text-base sm:text-lg tracking-tight">1000+</span>
              <span className="text-white/60 text-xs sm:text-sm leading-snug font-medium">Patients/Year</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Emergency Floating Button - Enhanced */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 right-8 xl:absolute xl:right-6 xl:top-1/2 xl:-translate-y-1/2 flex flex-col gap-3 z-50"
      >
        <a
          href="tel:0125421121"
          className="group relative flex items-center gap-2 bg-sanca-green hover:bg-sanca-green-dark text-white px-5 py-3 rounded-xl shadow-premium-xl hover:shadow-premium-2xl transition-all duration-300 hover:scale-105 premium-focus"
        >
          <Phone className="h-4 w-4 group-hover:animate-bounce-gentle" />
          <span className="text-sm font-medium">Call Now</span>
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-sanca-gold rounded-full animate-pulse" />
        </a>
        <a
          href="https://wa.me/27813181511"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 bg-sanca-emerald hover:bg-sanca-green text-white px-5 py-3 rounded-xl shadow-premium-xl hover:shadow-premium-2xl transition-all duration-300 hover:scale-105 premium-focus"
        >
          <MessageCircle className="h-4 w-4 group-hover:animate-bounce-gentle" />
          <span className="text-sm font-medium">WhatsApp</span>
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-sanca-emerald rounded-full animate-pulse" />
        </a>
      </motion.div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-sanca-gold"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sanca-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
}
