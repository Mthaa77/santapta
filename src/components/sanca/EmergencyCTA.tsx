'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, Heart, Shield, Clock } from 'lucide-react';

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl sm:text-5xl font-bold font-serif text-sanca-gold-light animate-count-glow">
        {count.toLocaleString('en-ZA')}{suffix}
      </span>
      <p className="text-white/60 text-sm mt-2 font-medium">{label}</p>
    </div>
  );
}

export default function EmergencyCTA() {
  return (
    <section id="emergency" className="py-20 sm:py-28 relative overflow-hidden section-wave-gold-bottom">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-emerald" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sanca-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sanca-emerald/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="relative w-20 h-20 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
          >
            <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
            <Heart className="h-10 w-10 text-sanca-gold-light" />
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight heading-gradient">
            We&apos;re Right Here<br />
            <span className="text-gradient-gold">Whenever You&apos;re Ready</span>
          </h2>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re reaching out for yourself, worried about someone you love, or simply
            looking for honest guidance — we&apos;re here with open arms, ready to listen. Day or night,
            weekday or weekend, you&apos;ll always find a caring voice on the other end. Together,
            we&apos;ll find the path that&apos;s right for you.
          </p>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-12"
          >
            <AnimatedStat value={1000} suffix="+" label="Lives Touched Every Year" />
            <AnimatedStat value={68} suffix="+" label="Years of Dedicated Service" />
            <AnimatedStat value={24} suffix="/7" label="Always Here When You Need Us" />
          </motion.div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            <motion.a
              href="tel:0125421121"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-sanca-gold/40 transition-all duration-300 block"
            >
              <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]">
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <Phone className="h-7 w-7 text-sanca-gold-light" />
              </div>
              <p className="font-serif font-bold text-lg tracking-tight">Call Us</p>
              <p className="text-white/70 text-sm mt-1">012 542 1121</p>
              <p className="text-white/50 text-xs mt-1">A caring voice, any time of day</p>
            </motion.a>

            <motion.a
              href="https://wa.me/27813181511"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-sanca-emerald/40 transition-all duration-300 block"
            >
              <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]">
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <MessageCircle className="h-7 w-7 text-sanca-emerald" />
              </div>
              <p className="font-serif font-bold text-lg tracking-tight">WhatsApp</p>
              <p className="text-white/70 text-sm mt-1">081 318 1511</p>
              <p className="text-white/50 text-xs mt-1">Send a message, we&apos;ll reply soon</p>
            </motion.a>

            <motion.a
              href="mailto:info@sancapta.co.za"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-sanca-gold/40 transition-all duration-300 block"
            >
              <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]">
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <Shield className="h-7 w-7 text-sanca-gold" />
              </div>
              <p className="font-serif font-bold text-lg tracking-tight">Email Us</p>
              <p className="text-white/70 text-sm mt-1">info@sancapta.co.za</p>
              <p className="text-white/50 text-xs mt-1">We&apos;ll respond within one business day</p>
            </motion.a>
          </div>

          {/* Key Info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Admissions open 7 days a week
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              DSD Registered & Trusted
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Medical Aid Welcomed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
