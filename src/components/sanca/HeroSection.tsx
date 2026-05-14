'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown, Shield, Heart, Clock, Star, Award, Users } from 'lucide-react';
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
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src="/hero-bg.png"
          alt="Serene garden sanctuary"
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

      {/* Content with parallax */}
      <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full" style={{ y: textY, opacity }}>
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 badge-pulse"
          >
            <Shield className="h-4 w-4 text-sanca-gold" />
            <span>Established 1957 — 68 Years of Healing</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6"
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
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
          >
            Accessible, affordable, and medically sound addiction recovery — serving
            Pretoria, Soshanguve, and Hammanskraal. One person at a time.
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
              Take the Self-Assessment
            </Button>
            <Button
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base px-8 py-6 bg-white/5 backdrop-blur-sm transition-all duration-300 rounded-xl group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Admissions Process
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
              <span>DSD Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-gold animate-pulse" />
              <span>Medical Aid Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-emerald animate-pulse" />
              <span>No Co-Payment for Extra Days</span>
            </div>
          </motion.div>

          {/* Compact Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Award className="h-3.5 w-3.5 text-sanca-gold/60" />
              <span>68+ Years of Service</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Users className="h-3.5 w-3.5 text-sanca-gold/60" />
              <span>32 Societies Nationwide</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Star className="h-3.5 w-3.5 text-sanca-gold/60" />
              <span>1000+ Patients Annually</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Emergency Floating Button - Enhanced */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
      >
        <a
          href="tel:0125421121"
          className="group relative flex items-center gap-2 bg-sanca-green text-white px-4 py-3 rounded-xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105 premium-focus"
        >
          <Phone className="h-4 w-4 group-hover:animate-bounce-gentle" />
          <span className="text-sm font-medium">Call Now</span>
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-sanca-gold rounded-full animate-pulse" />
        </a>
        <a
          href="https://wa.me/27813181511"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 bg-sanca-emerald text-white px-4 py-3 rounded-xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105 premium-focus"
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
