'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  HeartPulse,
  Brain,
  Users,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MilestoneRange {
  minDay: number;
  maxDay: number;
  label: string;
  physical: { milestone: string; progress: number };
  mental: { milestone: string; progress: number };
  social: { milestone: string; progress: number };
}

const milestoneData: MilestoneRange[] = [
  {
    minDay: 0,
    maxDay: 1,
    label: 'Day 0–1',
    physical: { milestone: 'Your detox journey begins — the first brave step toward healing', progress: 2 },
    mental: { milestone: 'Cravings are at their strongest — but they will pass', progress: 1 },
    social: { milestone: 'You may feel alone, but reaching out for help is already a victory', progress: 1 },
  },
  {
    minDay: 2,
    maxDay: 7,
    label: 'Day 2–7',
    physical: { milestone: 'Withdrawal symptoms reach their peak — this is the hardest part, and it means healing has started', progress: 8 },
    mental: { milestone: 'Sleep patterns begin to gently improve — rest is returning', progress: 5 },
    social: { milestone: 'Family visits begin — reconnecting with loved ones starts here', progress: 4 },
  },
  {
    minDay: 8,
    maxDay: 14,
    label: 'Day 8–14',
    physical: { milestone: 'Physical cravings begin to ease — your body is finding its balance', progress: 15 },
    mental: { milestone: 'The fog is lifting — mental clarity is steadily returning', progress: 12 },
    social: { milestone: 'Group therapy begins — discovering you\'re not alone in this journey', progress: 10 },
  },
  {
    minDay: 15,
    maxDay: 30,
    label: 'Day 15–30',
    physical: { milestone: 'Energy levels are noticeably rising — you\'re growing stronger each day', progress: 25 },
    mental: { milestone: 'Emotional balance is returning — you\'re learning to navigate feelings with confidence', progress: 22 },
    social: { milestone: 'Building a trusted support network — meaningful connections are forming', progress: 18 },
  },
  {
    minDay: 31,
    maxDay: 90,
    label: 'Day 31–90',
    physical: { milestone: 'Your organs are actively healing — your body is remarkable at recovering', progress: 45 },
    mental: { milestone: 'Cognitive function is normalising — thinking becomes sharper and clearer', progress: 40 },
    social: { milestone: 'Rebuilding trust and repairing relationships — one honest conversation at a time', progress: 35 },
  },
  {
    minDay: 91,
    maxDay: 180,
    label: 'Day 91–180',
    physical: { milestone: 'Your immune system is growing stronger — your whole body is thanking you', progress: 68 },
    mental: { milestone: 'Healthy stress management skills are becoming second nature', progress: 62 },
    social: { milestone: 'Confidently stepping back into community life — you belong here', progress: 58 },
  },
  {
    minDay: 181,
    maxDay: 365,
    label: 'Day 181–365',
    physical: { milestone: 'Major health recovery achieved — your body has made an extraordinary comeback', progress: 90 },
    mental: { milestone: 'A full toolkit of coping strategies — you\'re equipped for whatever comes your way', progress: 85 },
    social: { milestone: 'Independent living with confidence — you\'re building a life you\'re proud of', progress: 82 },
  },
];

function getMilestoneForDay(day: number): MilestoneRange {
  for (let i = milestoneData.length - 1; i >= 0; i--) {
    if (day >= milestoneData[i].minDay) return milestoneData[i];
  }
  return milestoneData[0];
}

function getOverallProgress(day: number): number {
  if (day <= 0) return 0;
  if (day >= 365) return 100;
  return Math.round((day / 365) * 100);
}

// Animated counter for day number
function AnimatedDayCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    const diff = Math.abs(end - start);
    const duration = Math.min(600, 150 + diff * 2);
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        prevValue.current = end;
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value]);

  return <>{displayValue}</>;
}

// Circular progress ring component
function ProgressRing({ percentage, day }: { percentage: number; day: number }) {
  const radius = 80;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
        aria-label={`Recovery progress: ${percentage}%`}
      >
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B5E3B" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#C5963A" />
          </linearGradient>
        </defs>
        {/* Background circle */}
        <circle
          stroke="#E8F0E8"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <motion.circle
          stroke="url(#progressGradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          initial={false}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xs text-sanca-green font-semibold uppercase tracking-wider">
          Day
        </span>
        <span className="text-3xl sm:text-4xl font-bold font-serif text-sanca-green-dark">
          <AnimatedDayCounter value={day} />
        </span>
        <span className="text-lg font-bold text-sanca-gold">{percentage}%</span>
      </div>
    </div>
  );
}

export default function RecoveryVisualizer() {
  const [currentDay, setCurrentDay] = useState(0);

  const milestone = useMemo(() => getMilestoneForDay(currentDay), [currentDay]);
  const overallProgress = useMemo(() => getOverallProgress(currentDay), [currentDay]);

  const handlePrevDay = () => {
    setCurrentDay((prev) => {
      // Jump to the start of the previous milestone range
      for (let i = milestoneData.length - 1; i >= 0; i--) {
        if (milestoneData[i].maxDay < prev) return milestoneData[i].minDay;
      }
      return 0;
    });
  };

  const handleNextDay = () => {
    setCurrentDay((prev) => {
      for (let i = 0; i < milestoneData.length; i++) {
        if (milestoneData[i].minDay > prev) return milestoneData[i].minDay;
      }
      return 365;
    });
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDay(Number(e.target.value));
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const milestoneIndex = milestoneData.findIndex((m) => m.minDay === milestone.minDay);

  return (
    <section
      id="recovery-visualizer"
      className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient"
    >
      {/* Decorative sage gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-sage/15 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-sage/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sanca-sage/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 badge-pulse">
            <Activity className="h-4 w-4" />
            Recovery Science
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Your Journey of{' '}
            <span className="text-gradient-gold">Healing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Recovery isn\'t just possible — it\'s happening, one day at a time. Explore how your
            body, mind, and relationships heal at every stage of the journey. Every single day
            brings you closer to the life you deserve.
          </p>
        </motion.div>

        {/* Interactive Day Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Card className="p-5 sm:p-8 shadow-premium-xl border-0 bg-white relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-sanca-green/15 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-sanca-green/15 rounded-br-2xl" />

            <div className="relative">
              {/* Day display with animated counter */}
              <div className="text-center mb-6">
                <span className="text-sm text-sanca-green font-semibold uppercase tracking-wider">
                  Currently viewing
                </span>
                <div className="mt-1">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-sanca-green-dark">
                    Day <AnimatedDayCounter value={currentDay} />
                  </span>
                </div>
                <span className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-sanca-gold/10 text-sanca-gold-dark text-sm font-medium">
                  {milestone.label}
                </span>
              </div>

              {/* Slider */}
              <div className="relative px-2 mb-4">
                <input
                  type="range"
                  min={0}
                  max={365}
                  value={currentDay}
                  onChange={handleSliderChange}
                  className="recovery-slider w-full h-2 rounded-full appearance-none cursor-pointer bg-sanca-sage"
                  aria-label="Select recovery day"
                  style={{
                    background: `linear-gradient(to right, #1B5E3B 0%, #059669 ${overallProgress}%, #E8F0E8 ${overallProgress}%, #E8F0E8 100%)`,
                  }}
                />
                {/* Milestone markers */}
                <div className="relative w-full h-4 mt-1">
                  {milestoneData.map((m, i) => {
                    const pos = (m.minDay / 365) * 100;
                    return (
                      <div
                        key={m.minDay}
                        className="absolute -translate-x-1/2"
                        style={{ left: `${pos}%` }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            milestoneIndex >= i
                              ? 'bg-sanca-green'
                              : 'bg-gray-300'
                          }`}
                        />
                        <span className="text-[9px] text-muted-foreground hidden sm:block mt-0.5 whitespace-nowrap">
                          {m.minDay}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Previous / Next buttons */}
              <div className="flex items-center justify-between">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevDay}
                    disabled={currentDay <= 0}
                    className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5 transition-all"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                </motion.div>

                <span className="text-xs text-muted-foreground font-medium">
                  Day 0 → Day 365
                </span>

                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextDay}
                    disabled={currentDay >= 365}
                    className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5 transition-all"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Main content: Progress Ring + Milestone Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Progress Ring - Left side */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <Card className="p-6 sm:p-8 shadow-premium-lg border-0 bg-white w-full flex flex-col items-center hover-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />
              <h3 className="font-serif text-lg font-bold text-sanca-green-dark mb-4 text-center">
                Overall Recovery
              </h3>
              <ProgressRing percentage={overallProgress} day={currentDay} />
              <p className="text-sm text-muted-foreground mt-4 text-center leading-relaxed">
                Every day you choose recovery, your body, mind, and relationships grow
                a little stronger — and that progress is something to be proud of.
              </p>
            </Card>
          </div>

          {/* Milestone Cards - Right side */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={milestone.minDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                {/* Physical Recovery Card */}
                <Card className="p-5 sm:p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sanca-green" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sanca-green/10 flex items-center justify-center">
                      <HeartPulse className="h-6 w-6 text-sanca-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-lg font-bold text-sanca-green-dark">
                          Physical Recovery
                        </h4>
                      </div>
                      <p className="text-foreground font-medium text-sm sm:text-base mb-3">
                        {milestone.physical.milestone}
                      </p>
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="h-2.5 bg-sanca-sage rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-sanca-green to-sanca-emerald"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${milestone.physical.progress}%`,
                            }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="absolute right-0 -top-5 text-xs font-bold text-sanca-green">
                          {milestone.physical.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Mental Recovery Card */}
                <Card className="p-5 sm:p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sanca-gold" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sanca-gold/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-sanca-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-lg font-bold text-sanca-green-dark">
                          Mental Recovery
                        </h4>
                      </div>
                      <p className="text-foreground font-medium text-sm sm:text-base mb-3">
                        {milestone.mental.milestone}
                      </p>
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="h-2.5 bg-sanca-gold/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-sanca-gold to-sanca-gold-light"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${milestone.mental.progress}%`,
                            }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="absolute right-0 -top-5 text-xs font-bold text-sanca-gold">
                          {milestone.mental.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Social Recovery Card */}
                <Card className="p-5 sm:p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sanca-emerald" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sanca-emerald/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-sanca-emerald" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-serif text-lg font-bold text-sanca-green-dark">
                          Social Recovery
                        </h4>
                      </div>
                      <p className="text-foreground font-medium text-sm sm:text-base mb-3">
                        {milestone.social.milestone}
                      </p>
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="h-2.5 bg-sanca-emerald/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-sanca-emerald to-sanca-green-light"
                            initial={{ width: 0 }}
                            animate={{
                              width: `${milestone.social.progress}%`,
                            }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="absolute right-0 -top-5 text-xs font-bold text-sanca-emerald">
                          {milestone.social.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-4 text-base sm:text-lg">
            Your recovery journey starts with a single, courageous step — and we\'ll walk beside you every step of the way.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-md hover:shadow-premium-lg transition-all duration-300 px-8 py-3 text-base font-semibold rounded-xl"
          >
            Take That First Step
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .recovery-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C5963A 0%, #E8C877 100%);
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(197, 150, 58, 0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .recovery-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 12px rgba(197, 150, 58, 0.6);
        }
        .recovery-slider::-webkit-slider-thumb:active {
          transform: scale(1.05);
        }
        .recovery-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #C5963A 0%, #E8C877 100%);
          cursor: pointer;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 8px rgba(197, 150, 58, 0.4);
        }
        .recovery-slider::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: #E8F0E8;
        }
      `}</style>
    </section>
  );
}
