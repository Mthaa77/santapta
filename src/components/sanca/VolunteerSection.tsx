'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const volunteerPoints = [
  'Counselling support',
  'Community outreach',
  'Administrative assistance',
];

const donationImpacts = [
  { amount: 'R250', desc: 'feeds a patient for a week' },
  { amount: 'R500', desc: 'sponsors a counselling session' },
  { amount: 'R1000', desc: 'supports a family programme' },
];

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="py-20 sm:py-28 relative overflow-hidden section-top-gradient">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #1B5E3B 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C5963A 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Cream accent shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sanca-cream/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sanca-cream/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]"
          >
            <HeartHandshake className="h-4 w-4" />
            Join Our Mission
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Make a <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Whether you give your time or your resources, every contribution helps
            rebuild lives and strengthen communities across Pretoria. Together, we can make a lasting impact.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* Volunteer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="hover-lift h-full p-0 shadow-premium-xl border-0 overflow-hidden relative group">
              {/* Green gradient top border */}
              <div className="h-1.5 bg-gradient-to-r from-sanca-green-light via-sanca-green to-sanca-emerald" />

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                  className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]"
                >
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <HeartHandshake className="h-7 w-7 text-sanca-green" />
                </motion.div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-sanca-green-dark mb-3 tracking-tight">
                  Volunteer With Us
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Make a lasting impact in community recovery. Your time and compassion can
                  transform lives — join our dedicated team of volunteers and be part of
                  the healing journey.
                </p>

                {/* Bullet points */}
                <ul className="space-y-3 mb-8">
                  {volunteerPoints.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-sanca-green flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="btn-ripple border-sanca-green text-sanca-green hover:bg-sanca-green hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 group/btn"
                >
                  Apply to Volunteer
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Donate Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="hover-lift h-full p-0 shadow-premium-xl border-0 overflow-hidden relative group">
              {/* Gold gradient top border */}
              <div className="h-1.5 bg-gradient-to-r from-sanca-gold-dark via-sanca-gold to-sanca-gold-light" />

              <div className="p-6 sm:p-8">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.4 }}
                  className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]"
                >
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <Heart className="h-7 w-7 text-sanca-gold" />
                </motion.div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-sanca-green-dark mb-3 tracking-tight">
                  Support Our Mission
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your generosity directly funds treatment, counselling, and community
                  programmes. Every rand brings someone closer to recovery and a brighter future.
                </p>

                {/* Impact cards */}
                <div className="space-y-3 mb-8">
                  {donationImpacts.map((impact, i) => (
                    <motion.div
                      key={impact.amount}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-sanca-cream/60 border border-sanca-gold/10"
                    >
                      <span className="font-serif text-lg font-bold text-sanca-gold min-w-[70px]">
                        {impact.amount}
                      </span>
                      <span className="text-sm text-muted-foreground">{impact.desc}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className="btn-ripple bg-sanca-gold hover:bg-sanca-gold-dark text-sanca-green-dark font-semibold px-6 py-3 rounded-xl shadow-gold transition-all duration-300 hover:shadow-lg group/btn"
                >
                  Donate Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
