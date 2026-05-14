'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ClipboardCheck,
  HeartPulse,
  Brain,
  Users,
  ShieldCheck,
  Compass,
  ChevronRight,
  Quote,
  ArrowRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Phase {
  id: number;
  phase: string;
  icon: React.ElementType;
  day: string;
  title: string;
  description: string;
  details: string;
  color: string;
  bgColor: string;
  borderColor: string;
  quote: string;
  emoji: string;
}

const phases: Phase[] = [
  {
    id: 1,
    phase: 'Reaching Out',
    icon: Phone,
    day: 'Day 0',
    title: 'The Courage to Call',
    description:
      "By simply being here, you have already taken the hardest step — reaching out for help. Our caring team is available 24 hours a day, 7 days a week, and every call is answered with warmth and compassion, never judgement.",
    details:
      'Call us on 012 542 1121 or WhatsApp 081 318 1511 — whichever feels more comfortable for you. No doctor\'s referral is needed. We will gently ask a few questions to understand your situation and then guide you through every next step, at your own pace.',
    color: 'text-sanca-green-light',
    bgColor: 'bg-sanca-green-light',
    borderColor: 'border-sanca-green-light',
    quote: '"Even the longest journey begins with a single, courageous step." — Inspired by an African proverb',
    emoji: '🤝',
  },
  {
    id: 2,
    phase: 'Assessment',
    icon: ClipboardCheck,
    day: 'Day 1',
    title: 'Understanding What You Need',
    description:
      'A thorough, professional assessment helps us understand your unique circumstances so we can recommend the level of care that is right for you.',
    details:
      'Our experienced social workers conduct a comprehensive assessment that covers your substance use history, medical needs, family situation, and personal goals for recovery. The assessment takes about 60 to 90 minutes, and you are welcome to have a loved one present for support.',
    color: 'text-sanca-emerald',
    bgColor: 'bg-sanca-emerald',
    borderColor: 'border-sanca-emerald',
    quote: '"When you understand your own story, you begin to rewrite it." — South African saying',
    emoji: '📋',
  },
  {
    id: 3,
    phase: 'Medical Detox',
    icon: HeartPulse,
    day: 'Days 1-7',
    title: 'Safe, Supported Detoxification',
    description:
      'Around-the-clock medical care ensures that your detoxification is as safe and comfortable as possible, so you can focus on resting and healing.',
    details:
      "At Castle Carey Clinic, our dedicated medical team monitors withdrawal symptoms around the clock. Where appropriate, medication is available to ease discomfort and help you rest. You will always have someone nearby — you are never alone during this important phase.",
    color: 'text-sanca-gold',
    bgColor: 'bg-sanca-gold',
    borderColor: 'border-sanca-gold',
    quote: '"Courage is not the absence of fear, but the triumph over it." — Nelson Mandela',
    emoji: '💪',
  },
  {
    id: 4,
    phase: 'Treatment',
    icon: Brain,
    day: 'Weeks 1-4',
    title: 'Building a Stronger You',
    description:
      'Through individual therapy, group sessions, and purposeful daily activities, you will gain a deeper understanding of addiction and develop the practical coping skills that form the foundation of lasting recovery.',
    details:
      'Your personalised Individual Treatment Plan includes one-on-one counselling, group therapy, family sessions, occupational therapy, stress management techniques, and spiritual support groups. Each day is thoughtfully structured to give you the best possible foundation for the life ahead.',
    color: 'text-sanca-green',
    bgColor: 'bg-sanca-green',
    borderColor: 'border-sanca-green',
    quote: '"Each new day brings a chance to rebuild, to grow, and to become the person you were meant to be." — Inspired by Desmond Tutu',
    emoji: '🧠',
  },
  {
    id: 5,
    phase: 'Family Integration',
    icon: Users,
    day: 'Ongoing',
    title: 'Healing Together',
    description:
      "Addiction touches the lives of everyone who cares about you. Our family programme is designed to help rebuild trust, restore open communication, and strengthen the bonds that support lasting recovery.",
    details:
      'Through family therapy sessions, visiting hours every Sunday from 14:00 to 16:00, and dedicated family support groups, your loved ones will gain a deeper understanding of addiction and learn how to walk alongside you in recovery.',
    color: 'text-sanca-gold-dark',
    bgColor: 'bg-sanca-gold-dark',
    borderColor: 'border-sanca-gold-dark',
    quote: '"Ubuntu — I am because we are." — African philosophy',
    emoji: '👨‍👩‍👧‍👦',
  },
  {
    id: 6,
    phase: 'Aftercare',
    icon: ShieldCheck,
    day: 'Ongoing',
    title: 'Your Lifeline Continues',
    description:
      "Recovery does not end when you leave our care — in many ways, it has only just begun. Our aftercare programme ensures you remain connected, supported, and equipped for the road ahead.",
    details:
      'You will receive relapse prevention training, AA/NA group facilitation, regular outpatient check-ins, and guided community reintegration support. We begin planning your aftercare from week 3 of your treatment, so that when the day comes, you step forward with confidence and a clear plan.',
    color: 'text-sanca-green-dark',
    bgColor: 'bg-sanca-green-dark',
    borderColor: 'border-sanca-green-dark',
    quote: '"A journey of recovery is walked one day at a time — and every day you keep going is a victory." — South African wisdom',
    emoji: '🛡️',
  },
];

export default function RecoveryJourney() {
  const [activePhase, setActivePhase] = useState<number>(1);

  const currentPhase = phases.find((p) => p.id === activePhase) as Phase;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="recovery-journey"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-green-dark" />

      {/* Subtle background decoration */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-sanca-cream/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-sanca-sage/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Compass className="h-4 w-4" />
            Your Path Forward
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Your Recovery <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            From that first courageous call to lifelong aftercare, SANCA Pretoria walks beside you every step of the way. We know that reaching out takes immense bravery, and we want you to know — there is no judgement here, only understanding. Here is what the path looks like, and remember: you are never alone on this journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-12">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Gradient connecting line */}
              <div className="absolute top-10 left-[8%] right-[8%] h-1 bg-gradient-to-r from-sanca-green-light via-sanca-gold to-sanca-green-dark rounded-full" />

              {/* Phase Nodes */}
              <div className="relative flex justify-between px-[4%]">
                {phases.map((phase, i) => {
                  const Icon = phase.icon;
                  const isActive = activePhase === phase.id;
                  return (
                    <motion.button
                      key={phase.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      onClick={() => setActivePhase(phase.id)}
                      className="flex flex-col items-center gap-3 group cursor-pointer z-10"
                      aria-label={`View ${phase.phase} phase`}
                    >
                      {/* Node Circle */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.15 : 1,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`
                          w-20 h-20 rounded-full flex items-center justify-center
                          transition-all duration-300 border-4
                          ${
                            isActive
                              ? `bg-white ${phase.bgColor} border-sanca-gold shadow-gold`
                              : 'bg-white border-sanca-cream shadow-premium-sm hover:shadow-premium-md'
                          }
                        `}
                      >
                        <Icon
                          className={`h-8 w-8 transition-colors duration-300 ${
                            isActive ? 'text-white' : phase.color
                          }`}
                        />
                      </motion.div>

                      {/* Phase Label */}
                      <div className="text-center">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                            isActive ? 'text-sanca-gold' : 'text-muted-foreground'
                          }`}
                        >
                          {phase.day}
                        </span>
                        <p
                          className={`text-sm font-semibold mt-0.5 transition-colors duration-300 ${
                            isActive
                              ? 'text-sanca-green-dark'
                              : 'text-muted-foreground group-hover:text-sanca-green'
                          }`}
                        >
                          {phase.phase}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet: Vertical Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Gradient vertical line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sanca-green-light via-sanca-gold to-sanca-green-dark rounded-full" />

              <div className="space-y-4">
                {phases.map((phase, i) => {
                  const Icon = phase.icon;
                  const isActive = activePhase === phase.id;
                  return (
                    <motion.button
                      key={phase.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      onClick={() => setActivePhase(phase.id)}
                      className="relative flex items-start gap-4 sm:gap-5 w-full text-left group cursor-pointer"
                      aria-label={`View ${phase.phase} phase`}
                    >
                      {/* Node Circle */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className={`
                          relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0
                          transition-all duration-300 border-4
                          ${
                            isActive
                              ? `bg-white ${phase.bgColor} border-sanca-gold shadow-gold`
                              : 'bg-white border-sanca-cream shadow-premium-sm'
                          }
                        `}
                      >
                        <Icon
                          className={`h-5 w-5 sm:h-7 sm:w-7 transition-colors duration-300 ${
                            isActive ? 'text-white' : phase.color
                          }`}
                        />
                      </motion.div>

                      {/* Phase Info */}
                      <div
                        className={`
                          flex-1 pt-1 pb-3
                          ${i < phases.length - 1 ? 'border-b border-sanca-cream/60' : ''}
                        `}
                      >
                        <span
                          className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                            isActive ? 'text-sanca-gold' : 'text-muted-foreground'
                          }`}
                        >
                          {phase.day}
                        </span>
                        <p
                          className={`text-base font-semibold transition-colors duration-300 ${
                            isActive
                              ? 'text-sanca-green-dark'
                              : 'text-foreground group-hover:text-sanca-green'
                          }`}
                        >
                          {phase.phase}
                        </p>
                        {isActive && (
                          <p className="text-sm text-sanca-green mt-0.5 font-medium">
                            {phase.title}
                          </p>
                        )}
                      </div>

                      {/* Arrow indicator */}
                      <ChevronRight
                        className={`h-5 w-5 mt-3 flex-shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'text-sanca-gold translate-x-0.5'
                            : 'text-muted-foreground/40'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Card
              className={`shadow-premium-xl border-0 overflow-hidden`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left accent border */}
                <div
                  className={`w-full md:w-2 ${currentPhase.bgColor} flex-shrink-0`}
                  style={{ minHeight: '8px' }}
                />

                <div className="flex-1 p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentPhase.bgColor} text-white`}
                        >
                          {currentPhase.day}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Phase {currentPhase.id} of 6
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark mb-3 tracking-tight">
                        {currentPhase.title}
                      </h3>

                      <p className="text-foreground text-lg leading-relaxed mb-4">
                        {currentPhase.description}
                      </p>

                      <div className="p-4 sm:p-5 rounded-xl bg-sanca-cream/60 border border-sanca-cream">
                        <h4 className="text-sm font-bold text-sanca-green-dark uppercase tracking-wider mb-2">
                          What to expect
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {currentPhase.details}
                        </p>
                      </div>
                    </div>

                    {/* Side panel - quote & illustration */}
                    <div className="lg:w-72 flex-shrink-0">
                      <div className="p-5 rounded-xl bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-sanca-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                        <div className="relative">
                          {/* Illustration area */}
                          <div className="text-4xl mb-3">{currentPhase.emoji}</div>

                          <Quote className="h-5 w-5 text-sanca-gold-light mb-2 opacity-70" />

                          <p className="text-sm italic text-white/90 leading-relaxed mb-4">
                            {currentPhase.quote}
                          </p>

                          {/* Phase progress dots */}
                          <div className="flex gap-2">
                            {phases.map((p) => (
                              <div
                                key={p.id}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  p.id === activePhase
                                    ? 'w-6 bg-sanca-gold'
                                    : p.id < activePhase
                                      ? 'w-3 bg-sanca-gold-light/50'
                                      : 'w-3 bg-white/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Phase navigation */}
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setActivePhase(Math.max(1, activePhase - 1))
                          }
                          disabled={activePhase === 1}
                          className="flex-1 text-sanca-green border-sanca-green/20 hover:bg-sanca-green/5 disabled:opacity-40"
                        >
                          Previous
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            setActivePhase(Math.min(6, activePhase + 1))
                          }
                          disabled={activePhase === 6}
                          className="flex-1 text-sanca-green border-sanca-green/20 hover:bg-sanca-green/5 disabled:opacity-40"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark mb-4 tracking-tight">
            Your Journey Can <span className="text-gradient-gold">Begin</span>{' '}
            Today
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            Every recovery journey begins with a single step, and that step can be as simple as picking up the phone. We are here whenever you are ready — with open arms, without judgement, and with genuine care. You do not have to walk this path alone.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-sanca-green hover:bg-sanca-green-dark text-white px-8 py-6 text-base font-semibold rounded-xl shadow-premium-md hover:shadow-premium-lg transition-all duration-300 btn-ripple"
          >
            Reach Out Now
            <ArrowRight className="h-5 w-5 ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
