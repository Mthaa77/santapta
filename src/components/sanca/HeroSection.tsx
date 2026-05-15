'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronRight, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGES = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%2817%29-mw6UyPbYV3HfLiyQQYZhENhYtI9jSh.jpeg',
    alt: 'SANCA Pretoria welcome sign with community member',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0027-scaled-kmUcsTfZqZQoXyJt6ANGvs5WUPIFqC.jpg',
    alt: 'SANCA clinic exterior with modern architecture and landscaping',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0114-K98FL6aprFFHE5NpqYPQfLyJmuIk1b.jpg',
    alt: 'Castle Carey Clinic entrance with welcoming vegetation',
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240516-WA0059-nVNI5IEj4SGML8AelsLzQ9D5cGt1hu.jpg',
    alt: 'SANCA clinic courtyard with peaceful landscaping',
  },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    setIsAutoplay(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
    setIsAutoplay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoplay(false);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-sanca-green-dark">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentImageIndex].url}
              alt={HERO_IMAGES[currentImageIndex].alt}
              className="w-full h-full object-cover"
              loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-sanca-green-dark/75 via-sanca-green-dark/60 to-sanca-green-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-sanca-green-dark/50 via-transparent to-sanca-green-dark/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-sanca-gold/40 text-white text-sm mb-8"
          >
            <Shield className="h-4 w-4 text-sanca-gold" />
            <span>Est. 1957 — Nearly 70 Years of Restoring Lives</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Your Journey to{' '}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gradient-animated block"
            >
              Healing Starts
            </motion.span>
            <span>Now</span>
          </motion.h1>

          {/* Subtitle with staggered animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg sm:text-xl text-white/90 max-w-2xl mb-12 leading-relaxed font-light"
          >
            Compassionate clinical care meets accessible recovery. Our serene facilities in Pretoria, Soshanguve, and
            Hammanskraal welcome you to a sanctuary where healing begins the moment you arrive.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group"
            >
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Your Recovery
            </Button>
            <Button
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/70 font-semibold text-base px-8 py-6 bg-white/10 backdrop-blur-md transition-all duration-300 rounded-xl group"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Admissions
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-emerald" />
              <span>DSD Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-gold" />
              <span>Medical Aid Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sanca-emerald" />
              <span>Confidential Care</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        {/* Dots */}
        <div className="flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-sanca-gold w-8' : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={handlePrevImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
        aria-label="Previous image"
      >
        <ChevronRight className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform rotate-180" />
      </motion.button>

      <motion.button
        onClick={handleNextImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Emergency Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="fixed bottom-8 right-8 flex flex-col gap-3 z-50"
      >
        <a
          href="tel:0125421121"
          className="group relative flex items-center gap-2 bg-sanca-green hover:bg-sanca-green-dark text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">Call Now</span>
        </a>
        <a
          href="https://wa.me/27813181511"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 bg-sanca-emerald hover:bg-sanca-green text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm font-medium">WhatsApp</span>
        </a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sanca-cream to-transparent z-10 pointer-events-none" />
    </section>
  );
}
