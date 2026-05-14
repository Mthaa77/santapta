'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  DollarSign,
  TrendingUp,
  BookOpen,
  HandHeart,
  AlertTriangle,
  ShieldUser,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

const impactStats = [
  {
    icon: Users,
    value: '1 in 3',
    label: 'families',
    description: 'are affected by substance use in South Africa',
    accent: 'text-sanca-green',
    bg: 'bg-sanca-sage',
    border: 'border-sanca-green/20',
  },
  {
    icon: DollarSign,
    value: 'R37 billion',
    label: 'annual cost',
    description: 'economic cost of alcohol abuse alone in South Africa',
    accent: 'text-sanca-gold-dark',
    bg: 'bg-sanca-warm',
    border: 'border-sanca-gold/30',
  },
  {
    icon: TrendingUp,
    value: '6×',
    label: 'more likely',
    description: 'children of addicts are 6× more likely to develop substance issues',
    accent: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-200',
  },
];

interface FlipCardData {
  id: string;
  frontIcon: React.ElementType;
  frontTitle: string;
  frontHint: string;
  backContent: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  backAccentBg: string;
}

const flipCards: FlipCardData[] = [
  {
    id: 'understanding',
    frontIcon: BookOpen,
    frontTitle: 'Understanding Addiction',
    frontHint: 'Tap to learn more',
    backContent:
      'Addiction is a disease, not a moral failing. It physically changes brain chemistry, affecting the reward centre, decision-making, and impulse control. Like diabetes or hypertension, it requires professional treatment — not willpower alone. With the right support, recovery is absolutely possible.',
    accentColor: 'text-sanca-green',
    accentBg: 'bg-sanca-sage',
    accentBorder: 'border-sanca-green/20',
    backAccentBg: 'bg-sanca-green',
  },
  {
    id: 'how-to-help',
    frontIcon: HandHeart,
    frontTitle: 'How to Help',
    frontHint: 'Tap to learn more',
    backContent:
      'Don\'t enable destructive behaviour — set clear, loving boundaries. Encourage professional treatment and offer to help find a programme. Attend family therapy sessions when invited. Most importantly, take care of yourself too — you cannot support someone from a place of burnout.',
    accentColor: 'text-sanca-gold-dark',
    accentBg: 'bg-sanca-warm',
    accentBorder: 'border-sanca-gold/30',
    backAccentBg: 'bg-sanca-gold-dark',
  },
  {
    id: 'warning-signs',
    frontIcon: AlertTriangle,
    frontTitle: 'Warning Signs',
    frontHint: 'Tap to learn more',
    backContent:
      'Watch for: increasing secrecy and isolation, unexplained financial problems, dramatic mood swings, neglecting responsibilities at work or home, and noticeable physical changes like weight loss, poor hygiene, or bloodshot eyes. Trust your instincts — if something feels wrong, it probably is.',
    accentColor: 'text-amber-700',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    backAccentBg: 'bg-amber-700',
  },
  {
    id: 'self-care',
    frontIcon: ShieldUser,
    frontTitle: 'Self-Care for Families',
    frontHint: 'Tap to learn more',
    backContent:
      'You can\'t pour from an empty cup. Attend support groups like Al-Anon or SANCA\'s family sessions. Set and maintain healthy boundaries. Seek counselling for yourself — you deserve support too. Remember: you didn\'t cause the addiction, you can\'t control it, and you can\'t cure it — but you can take care of yourself.',
    accentColor: 'text-teal-700',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    backAccentBg: 'bg-teal-700',
  },
];

const dosList = [
  'Educate yourself about addiction as a disease',
  'Set healthy, consistent boundaries',
  'Encourage professional help and treatment',
  'Attend family support sessions',
  'Take care of your own mental health',
  'Remain hopeful and patient — recovery is a journey',
];

const dontsList = [
  'Enable destructive behaviour or make excuses',
  'Blame yourself for their addiction',
  'Argue when they\'re under the influence',
  'Ignore your own emotional and physical needs',
  'Expect instant or linear recovery',
  'Keep it a secret — seeking help is strength',
];

const supportProgrammes = [
  {
    icon: Users,
    title: 'Family Therapy Sessions',
    description:
      'Structured therapy sessions at Castle Carey Clinic that actively involve the family in the recovery process. Family participation strengthens outcomes and rebuilds trust.',
    tag: 'Part of every inpatient programme',
    tagIcon: Sparkles,
    accentBg: 'bg-sanca-green',
    accentLight: 'bg-sanca-sage',
  },
  {
    icon: Heart,
    title: 'Family Support Groups',
    description:
      'Weekly peer support groups for family members to learn coping strategies, share experiences, and connect with others who understand your journey.',
    tag: 'Available at all 3 locations',
    tagIcon: MapPin,
    accentBg: 'bg-sanca-gold-dark',
    accentLight: 'bg-sanca-warm',
  },
];

/* ────────────────────────────────────────────
   Flip Card Component
   ──────────────────────────────────────────── */

function FlipCard({ card }: { card: FlipCardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = card.frontIcon;

  return (
    <div
      className="cursor-pointer group"
      style={{ perspective: 1200 }}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped(!isFlipped);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${card.frontTitle}. ${isFlipped ? 'Tap to flip back' : 'Tap to learn more'}`}
    >
      <div
        className="relative w-full"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <Card
          className={`p-6 sm:p-8 shadow-premium-md hover:shadow-premium-lg transition-shadow duration-300 border-2 ${card.accentBorder} ${card.accentBg} min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center text-center`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div
            className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]`}
          >
            <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
            <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${card.accentColor}`} />
          </div>
          <h4 className={`font-serif text-lg sm:text-xl font-bold ${card.accentColor} mb-3 tracking-tight`}>
            {card.frontTitle}
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
            <RotateCcw className="h-3.5 w-3.5" />
            {card.frontHint}
          </p>
        </Card>

        {/* Back */}
        <Card
          className={`p-6 sm:p-8 shadow-premium-lg border-2 ${card.accentBorder} absolute inset-0 min-h-[220px] sm:min-h-[260px] flex flex-col justify-center`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div
            className={`w-8 h-1 rounded-full ${card.backAccentBg} mb-4`}
          />
          <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4">
            {card.backContent}
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-auto">
            <RotateCcw className="h-3.5 w-3.5" />
            Tap to flip back
          </p>
        </Card>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Section Component
   ──────────────────────────────────────────── */

export default function FamiliesSection() {
  return (
    <section id="families" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sanca-green/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sanca-gold/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Heart className="h-4 w-4" />
            For Families & Loved Ones
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            For Families &amp; <span className="text-gradient-gold">Loved Ones</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Addiction doesn&apos;t just affect the individual — it impacts the entire family.
            When someone you love struggles with substance use, you deserve support,
            understanding, and guidance too. We&apos;re here for you.
          </p>
        </motion.div>

        {/* ─── Impact Statistics Row ─── */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {impactStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
              >
                <Card
                  className={`p-6 sm:p-8 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-2 ${stat.border} ${stat.bg} text-center`}
                >
                  <div
                    className={`relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-4 transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]`}
                  >
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Icon className={`h-6 w-6 ${stat.accent}`} />
                  </div>
                  <p className={`font-serif text-3xl sm:text-4xl font-bold ${stat.accent} mb-1 tracking-tight`}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* ─── Waiting Room Image Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-8 hover-lift group">
            <Image
              src="/images/sanca/waiting-room.jpg"
              alt="Calm and welcoming SANCA Pretoria waiting room with comfortable seating"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-sanca-green-dark/70 via-sanca-green-dark/40 to-sanca-green-dark/70" />
            {/* Caption overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-white text-xl sm:text-2xl font-serif font-semibold leading-snug drop-shadow-lg">
                  A welcoming space where healing begins
                </p>
                <p className="text-white/80 text-sm mt-2 drop-shadow-md">
                  Our comfortable waiting area at Castle Carey Clinic
                </p>
              </div>
            </div>
            {/* Gold accent corners */}
            <div className="absolute top-0 left-0 w-10 h-10 z-10 pointer-events-none">
              <div className="absolute top-2 left-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
              <div className="absolute top-2 left-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-10 h-10 z-10 pointer-events-none">
              <div className="absolute bottom-2 right-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
              <div className="absolute bottom-2 right-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* ─── Interactive Flip Cards ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark mb-2 tracking-tight">
              Essential <span className="text-gradient-gold">Knowledge</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Tap each card to discover vital information for families
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {flipCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <FlipCard card={card} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Do's and Don'ts Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark mb-2 tracking-tight">
              Guiding <span className="text-gradient-gold">Principles</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Practical do&apos;s and don&apos;ts for families navigating a loved one&apos;s addiction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 sm:p-8 shadow-premium-lg border-2 border-sanca-green/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <CheckCircle2 className="h-5 w-5 text-sanca-green" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-sanca-green tracking-tight">
                    Do&apos;s
                  </h4>
                </div>
                <ul className="space-y-4">
                  {dosList.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-sanca-green/10 border border-sanca-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-3 w-3 text-sanca-green" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 sm:p-8 shadow-premium-lg border-2 border-amber-200 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <XCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-amber-700 tracking-tight">
                    Don&apos;ts
                  </h4>
                </div>
                <ul className="space-y-4">
                  {dontsList.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <XCircle className="h-3 w-3 text-amber-600" />
                      </div>
                      <span className="text-sm sm:text-base text-foreground leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── SANCA Family Support Programmes ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark mb-2 tracking-tight">
              SANCA Family <span className="text-gradient-gold">Support Programmes</span>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Professional support designed specifically for families and loved ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supportProgrammes.map((programme, i) => {
              const Icon = programme.icon;
              const TagIcon = programme.tagIcon;
              return (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="p-6 sm:p-8 shadow-premium-lg border-0 h-full relative overflow-hidden">
                    {/* Accent stripe */}
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${programme.accentBg}`} />

                    <div className="pl-3">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center`}
                        >
                          <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                          <Icon className={`h-6 w-6 ${i === 0 ? 'text-sanca-green' : 'text-sanca-gold-dark'}`} />
                        </div>
                        <h4 className="font-serif text-xl font-bold text-sanca-green-dark tracking-tight">
                          {programme.title}
                        </h4>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {programme.description}
                      </p>

                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${programme.accentLight} text-xs sm:text-sm font-medium ${
                          i === 0 ? 'text-sanca-green' : 'text-sanca-gold-dark'
                        }`}
                      >
                        <TagIcon className="h-3.5 w-3.5" />
                        {programme.tag}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ─── CTA Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="shadow-premium-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-emerald p-8 sm:p-12 text-center relative">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

              <div className="relative">
                <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-6">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <Heart className="h-7 w-7 text-sanca-gold-light" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                  Your family deserves healing too
                </h3>
                <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  You don&apos;t have to carry this burden alone. SANCA Pretoria offers dedicated
                  family support to help you navigate this journey with compassion and professional
                  guidance. Together, we can find a way forward.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold px-8 py-3 text-base shadow-gold btn-ripple"
                  >
                    Reach Out for Support
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <a
                    href="tel:0125421121"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    012 542 1121
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
