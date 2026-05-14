'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Target, Sparkles, Users, Shield, Award, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const values = [
  { letter: 'C', word: 'Caring', desc: 'Compassionate support for every individual', icon: Heart, color: 'bg-rose-50 text-rose-600 border-rose-200' },
  { letter: 'A', word: 'Accountability', desc: 'Transparent and responsible in all actions', icon: Shield, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { letter: 'I', word: 'Integrity', desc: 'Honest and ethical in everything we do', icon: Award, color: 'bg-amber-50 text-amber-600 border-amber-200' },
  { letter: 'R', word: 'Responsibility', desc: 'Dedicated to the communities we serve', icon: Users, color: 'bg-purple-50 text-purple-600 border-purple-200' },
  { letter: 'U', word: 'Ubuntu', desc: '"I am because we are" — community spirit', icon: Leaf, color: 'bg-green-50 text-green-600 border-green-200' },
  { letter: 'P', word: 'Professionalism', desc: 'Highest standards of clinical excellence', icon: Sparkles, color: 'bg-teal-50 text-teal-600 border-teal-200' },
];

const timeline = [
  { year: '1956', title: 'SANCA National Founded', desc: 'First conference opened by the Mayor of Johannesburg. Registered as a Welfare Organisation.' },
  { year: '1957', title: 'Pretoria Society Established', desc: 'One of eight founding affiliated societies of SANCA National.' },
  { year: '1970', title: 'Expanded Mandate', desc: 'SANCA expanded from alcoholism to include all drugs and substances.' },
  { year: 'Present', title: '32 Societies Nationwide', desc: 'SANCA Pretoria operates 3 clinics across Pretoria, Soshanguve & Hammanskraal.' },
];

function MissionCard() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-left' : 'opacity-0'}>
      <Card className="h-full p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-green to-sanca-green-dark text-white relative overflow-hidden card-animated-border">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
              <Target className="h-6 w-6 text-sanca-gold-light" />
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">Our Mission</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            To prevent and treat substance misuse, empowering individuals with the knowledge
            and tools they need to make positive choices. Our team of compassionate
            professionals works tirelessly to provide comprehensive and effective treatment
            programmes that address the physical, emotional, and spiritual aspects of
            substance abuse.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10">
            <p className="text-sm italic text-sanca-gold-light">
              &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from
              the chains of addiction.&rdquo;
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function VisionCard() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-right' : 'opacity-0'}>
      <Card className="h-full p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-gold to-sanca-gold-dark text-white relative overflow-hidden card-animated-border">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
              <Eye className="h-6 w-6 text-sanca-green-light" />
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">Our Vision</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            To guide SANCA member organisations in providing high-quality, compassionate
            services for individuals with Substance Use Disorders, their families, and
            communities. We strive to build resilient, innovative organisations, foster
            lasting partnerships, and promote evidence-based treatment and prevention
            through professional expertise and research-driven service delivery.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10">
            <p className="text-sm italic text-white/90">
              Like the vibrant threads of a tapestry, they intertwine, creating a beautiful
              mosaic of hope and healing.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ValuesGrid() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-scale' : 'opacity-0'}>
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-2">
          Our Values: <span className="text-shimmer">C.A.I.R.U.P.</span>
        </h3>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed">
          The principles that guide every decision we make
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {values.map((value, i) => (
          <motion.div
            key={value.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group"
          >
            <Card className={`p-5 text-center shadow-premium-sm hover:shadow-premium-lg transition-all duration-300 border dark:bg-[#0D3B22] ${value.color.split(' ').pop()} cursor-default h-full`}>
              <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <span className="font-serif text-2xl font-bold text-sanca-green">{value.letter}</span>
              </div>
              <h4 className="font-serif font-bold tracking-tight text-foreground mb-1">{value.word}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HeritageTimeline() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={isVisible ? 'animate-slide-up-bounce' : 'opacity-0'}>
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-2">
          Our <span className="text-gradient-gold">Heritage</span>
        </h3>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed">
          Seven decades of unwavering service to South African communities
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald hidden md:block" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`flex items-center gap-6 mb-8 last:mb-0 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <Card className="p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 dark:bg-[#0D3B22] inline-block">
                <span className="text-xs font-bold text-sanca-gold uppercase tracking-wider">
                  {item.year}
                </span>
                <h4 className="font-serif text-lg font-bold tracking-tight text-sanca-green-dark mt-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </Card>
            </div>

            {/* Center dot */}
            <div className="hidden md:flex w-10 h-10 rounded-full bg-sanca-green items-center justify-center shadow-premium-sm flex-shrink-0 border-4 border-white">
              <div className="w-3 h-3 rounded-full bg-sanca-gold" />
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Heart className="h-4 w-4" />
            Who We Are
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4">
            A Legacy of <span className="text-gradient-gold">Healing</span> and Hope
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Proudly one of the original eight founding affiliates of SANCA National — serving our communities with heart and clinical excellence since 1957.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <MissionCard />
          <VisionCard />
        </div>

        {/* C.A.I.R.U.P. Values */}
        <div className="mb-20">
          <ValuesGrid />
        </div>

        {/* Heritage Timeline */}
        <HeritageTimeline />
      </div>
    </section>
  );
}
