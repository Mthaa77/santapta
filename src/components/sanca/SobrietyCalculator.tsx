'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  CheckCircle2,
  Clock,
  Share2,
  Heart,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TimeSince {
  years: number;
  months: number;
  days: number;
  hours: number;
  totalDays: number;
  totalHours: number;
}

interface Milestone {
  label: string;
  description: string;
  hoursRequired: number;
}

const milestones: Milestone[] = [
  {
    label: '8 hours',
    description: 'Nicotine and carbon monoxide levels in blood drop by half',
    hoursRequired: 8,
  },
  {
    label: '24 hours',
    description: 'Risk of heart attack begins to decrease',
    hoursRequired: 24,
  },
  {
    label: '48 hours',
    description: 'Nerve endings start to regrow, sense of taste/smell improves',
    hoursRequired: 48,
  },
  {
    label: '2 weeks',
    description: 'Circulation improves, lung function increases',
    hoursRequired: 336,
  },
  {
    label: '1 month',
    description: 'Skin appearance improves, energy levels increase',
    hoursRequired: 720,
  },
  {
    label: '3 months',
    description: 'Stress levels decrease significantly',
    hoursRequired: 2160,
  },
  {
    label: '6 months',
    description: 'Immune system substantially stronger',
    hoursRequired: 4320,
  },
  {
    label: '1 year',
    description: "Risk of heart disease is half that of a user's",
    hoursRequired: 8760,
  },
  {
    label: '5 years',
    description: 'Risk of various cancers reduced by half',
    hoursRequired: 43800,
  },
  {
    label: '10 years',
    description: 'Risk of lung cancer similar to non-user',
    hoursRequired: 87600,
  },
];

function getMotivationalMessage(totalDays: number): string {
  if (totalDays < 1) {
    return "Every journey begins with a single step. You've taken yours.";
  }
  if (totalDays < 7) {
    return "You're in the hardest part. Stay strong — it gets easier.";
  }
  if (totalDays < 30) {
    return 'Your body is already healing. Keep going!';
  }
  if (totalDays < 180) {
    return "You're building a new life. Be proud of yourself.";
  }
  if (totalDays < 365) {
    return "Half a year of freedom. You're an inspiration.";
  }
  return "You've proven that recovery is possible. Thank you for showing the way.";
}

function calculateTimeSince(dateStr: string): TimeSince | null {
  const startDate = new Date(dateStr);
  const now = new Date();

  if (isNaN(startDate.getTime()) || startDate >= now) {
    return null;
  }

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  const hours = now.getHours() - startDate.getHours();

  if (hours < 0) {
    days -= 1;
  }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const diffMs = now.getTime() - startDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(diffMs / (1000 * 60 * 60));

  return { years, months, days, hours: Math.max(0, hours), totalDays, totalHours };
}

// Animated counter component
function AnimatedNumber({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValue = useRef(0);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    const duration = 1200;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
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

  return (
    <Card className="p-4 sm:p-6 text-center shadow-premium-md border-0 hover-lift relative overflow-hidden bg-white">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />
      <div className="stat-counter">
        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-sanca-green-dark animate-count-glow">
          {displayValue.toLocaleString()}
        </span>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground mt-2 font-medium">
        {label}
      </p>
    </Card>
  );
}

export default function SobrietyCalculator() {
  const [dateValue, setDateValue] = useState('');
  const [results, setResults] = useState<TimeSince | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = useCallback(() => {
    if (!dateValue) return;
    const result = calculateTimeSince(dateValue);
    if (result) {
      setResults(result);
      setIsCalculated(true);
    }
  }, [dateValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleCalculate();
    },
    [handleCalculate]
  );

  // Determine next milestone
  const nextMilestoneIndex = results
    ? milestones.findIndex((m) => m.hoursRequired > results.totalHours)
    : -1;

  const motivationalMessage = results
    ? getMotivationalMessage(results.totalDays)
    : '';

  return (
    <section
      id="sobriety-calculator"
      className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient"
    >
      {/* Subtle sage accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-sage/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-sage/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sanca-sage/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 badge-pulse">
            <Calculator className="h-4 w-4" />
            Sobriety Tracker
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Sobriety Milestone{' '}
            <span className="text-gradient-gold">Calculator</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Enter your sobriety date to see how far you&apos;ve come and what
            your body is healing
          </p>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto mb-12"
        >
          <Card className="p-6 sm:p-8 shadow-premium-xl border-0 bg-white relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-sanca-gold/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-sanca-gold/20 rounded-br-2xl" />

            <label
              htmlFor="sobriety-date"
              className="block text-sm font-semibold text-sanca-green-dark mb-2"
            >
              Your Sobriety Date
            </label>
            <input
              id="sobriety-date"
              type="date"
              value={dateValue}
              onChange={(e) => {
                setDateValue(e.target.value);
                if (isCalculated) setIsCalculated(false);
              }}
              onKeyDown={handleKeyDown}
              max={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl border-2 border-sanca-sage bg-white text-foreground text-base glow-focus focus:border-sanca-gold transition-all duration-300 premium-focus"
              aria-label="Enter your sobriety date"
            />

            <Button
              onClick={handleCalculate}
              disabled={!dateValue}
              className="w-full mt-4 bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-md hover:shadow-premium-lg transition-all duration-300 py-3 text-base font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              size="lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate My Milestones
            </Button>
          </Card>
        </motion.div>

        {/* Results Panel */}
        <AnimatePresence mode="wait">
          {isCalculated && results && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-10"
            >
              {/* Time Counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <h3 className="text-center font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-6">
                  <Sparkles className="h-5 w-5 inline-block text-sanca-gold mr-2" />
                  Your Time Sober
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    <AnimatedNumber value={results.years} label="Years" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.4 }}
                  >
                    <AnimatedNumber value={results.months} label="Months" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                  >
                    <AnimatedNumber value={results.days} label="Days" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                  >
                    <AnimatedNumber value={results.hours} label="Hours" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Healing Milestones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h3 className="text-center font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-6">
                  <Heart className="h-5 w-5 inline-block text-sanca-emerald mr-2" />
                  Healing Milestones
                </h3>
                <Card className="p-4 sm:p-6 shadow-premium-lg border-0 bg-white max-h-96 overflow-y-auto custom-scrollbar">
                  <div className="space-y-1">
                    {milestones.map((milestone, i) => {
                      const achieved = results.totalHours >= milestone.hoursRequired;
                      const isNext =
                        nextMilestoneIndex === i;

                      return (
                        <motion.div
                          key={milestone.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.4 + i * 0.06,
                            duration: 0.4,
                          }}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                            isNext
                              ? 'bg-sanca-gold/10 border border-sanca-gold/30'
                              : achieved
                                ? 'bg-sanca-green/5'
                                : 'bg-gray-50/50'
                          }`}
                        >
                          {/* Icon */}
                          <div className="flex-shrink-0 mt-0.5">
                            {achieved ? (
                              <div className="relative">
                                <CheckCircle2 className="h-5 w-5 text-sanca-green" />
                              </div>
                            ) : (
                              <div className="relative">
                                <Clock className="h-5 w-5 text-gray-400" />
                                {isNext && (
                                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sanca-gold animate-pulse" />
                                )}
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={`text-sm font-bold ${
                                  achieved
                                    ? 'text-sanca-green'
                                    : isNext
                                      ? 'text-sanca-gold-dark'
                                      : 'text-gray-500'
                                }`}
                              >
                                {milestone.label}
                              </span>
                              {isNext && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sanca-gold/20 text-sanca-gold-dark uppercase tracking-wider">
                                  Next Milestone
                                </span>
                              )}
                              {achieved && (
                                <span className="text-sanca-green text-xs">&#10003;</span>
                              )}
                            </div>
                            <p
                              className={`text-sm mt-0.5 leading-snug ${
                                achieved
                                  ? 'text-foreground/80'
                                  : 'text-muted-foreground'
                              }`}
                            >
                              {milestone.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* Motivational Message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Card className="p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-green/5 via-white to-sanca-sage/20 relative overflow-hidden">
                  {/* Decorative icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Trophy className="h-24 w-24 text-sanca-gold" />
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="icon-gradient-gold flex-shrink-0 w-12 h-12 rounded-xl">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-sanca-green-dark mb-2">
                        Your Message of Encouragement
                      </h4>
                      <p className="text-foreground/90 text-base sm:text-lg leading-relaxed italic">
                        &ldquo;{motivationalMessage}&rdquo;
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Share Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Card className="p-6 sm:p-8 shadow-premium-lg border-0 bg-white card-animated-border relative overflow-hidden">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4">
                      <Share2 className="h-4 w-4" />
                      Share Your Milestone
                    </div>

                    <p className="font-serif text-lg sm:text-xl font-bold text-sanca-green-dark mb-1">
                      Your{' '}
                      <span className="text-gradient-gold">
                        {results.years > 0 && `${results.years}-year `}
                        {results.months > 0 && `${results.months}-month `}
                        {results.days}-day
                      </span>{' '}
                      journey of recovery
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      Inspire others by sharing how far you&apos;ve come
                    </p>

                    {/* Social Share Buttons (visual only) */}
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium shadow-premium-sm hover:shadow-premium-md transition-all duration-200 hover:scale-105 btn-ripple"
                        aria-label="Share on WhatsApp"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1DA1F2] text-white text-sm font-medium shadow-premium-sm hover:shadow-premium-md transition-all duration-200 hover:scale-105 btn-ripple"
                        aria-label="Share on Twitter"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Twitter
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4267B2] text-white text-sm font-medium shadow-premium-sm hover:shadow-premium-md transition-all duration-200 hover:scale-105 btn-ripple"
                        aria-label="Share on Facebook"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sanca-green text-white text-sm font-medium shadow-premium-sm hover:shadow-premium-md transition-all duration-200 hover:scale-105 btn-ripple"
                        aria-label="Copy link"
                      >
                        <Share2 className="h-4 w-4" />
                        Copy Link
                      </button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state hint */}
        {!isCalculated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground/60 text-sm mt-4"
          >
            <p>Select your sobriety date above and click Calculate to see your milestones</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
