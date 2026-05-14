'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Users, Calendar, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Users, label: '2,500+ subscribers' },
  { icon: Calendar, label: 'Monthly updates' },
  { icon: ShieldCheck, label: 'No spam' },
];

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="newsletter" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-green-dark" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 0L40 20L20 40L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative gradient orb top-right */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sanca-gold/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-sanca-emerald/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)] text-white/90 text-sm font-medium mb-6"
            >
              <Mail className="h-4 w-4 text-sanca-gold-light" />
              Stay Connected
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              Stay Connected<br />
              with <span className="text-gradient-gold">SANCA</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg"
            >
              Receive recovery tips, the latest news, and event updates straight to your inbox.
              Stay informed about our programmes and community initiatives. We&apos;re in this together.
            </motion.p>

            {/* Email form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 glow-focus focus:border-sanca-gold transition-all duration-300 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn-ripple bg-sanca-gold hover:bg-sanca-gold-dark text-sanca-green-dark font-semibold px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-lg h-auto"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>

              {/* Success message */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sanca-gold-light text-sm mt-3 font-medium"
                >
                  ✓ Thank you for subscribing! Check your inbox soon.
                </motion.p>
              )}
            </motion.form>

            {/* Privacy note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/40 text-sm mb-8"
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <stat.icon className="h-4 w-4 text-sanca-gold-light" />
                  <span className="text-white/60 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-rotate-slow" />
              <div className="absolute inset-4 rounded-full border border-sanca-gold/20 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute inset-10 rounded-full border border-white/10" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center backdrop-blur-sm shadow-gold">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <Mail className="h-12 w-12 text-sanca-gold-light" />
                </div>
              </div>

              {/* Floating decorative dots */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-12 w-3 h-3 rounded-full bg-sanca-gold/40"
              />
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-sanca-emerald/50"
              />
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 left-4 w-2.5 h-2.5 rounded-full bg-white/20"
              />
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/4 right-6 w-2 h-2 rounded-full bg-sanca-gold-light/30"
              />

              {/* Decorative lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                <circle cx="160" cy="160" r="100" stroke="rgba(197,150,58,0.08)" strokeWidth="1" strokeDasharray="8 8" />
                <circle cx="160" cy="160" r="140" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 12" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
