'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  RefreshCw,
  Share2,
  Flame,
  Trophy,
  Calendar,
  Heart,
  ArrowRight,
  Copy,
  Check,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  Types & Constants                                                  */
/* ------------------------------------------------------------------ */

interface RecoveryData {
  startDate: string; // ISO date string
  currentStreak: number;
  longestStreak: number;
  lastVisitDate: string; // YYYY-MM-DD
}

const STORAGE_KEY = 'sanca_recovery_data';

const AFFIRMATIONS: string[] = [
  'I am worthy of recovery and a life free from addiction.',
  'Every day sober is a victory I can be proud of.',
  'My past does not define my future — I am creating a new path.',
  'I have the strength within me to overcome any challenge.',
  'Healing is not linear, and I honour every step of my journey.',
  'I choose progress over perfection, one day at a time.',
  'My body is healing, my mind is clearing, and my spirit is rising.',
  'I am surrounded by people who believe in my recovery.',
  'Today I choose hope over fear, and courage over comfort.',
  'I forgive myself for the past and embrace the possibility of today.',
  'I am stronger than my cravings and braver than my doubts.',
  'Recovery is my superpower — it teaches me resilience and grace.',
  'I am not alone in this journey; support is always within reach.',
  'Each breath I take is a reminder that life is worth living fully.',
  'I celebrate my progress, no matter how small it may seem.',
  'My story is still being written, and the best chapters are ahead.',
  'I deserve love, health, and happiness — and I claim them today.',
  'Sobriety opens doors I never knew existed.',
  'I am grateful for this new day and the chance to start fresh.',
  'The seeds of recovery I plant today will blossom into freedom.',
  'I trust the process, even when the path feels uncertain.',
  'My courage to change inspires others around me.',
  'I release what no longer serves me and welcome what heals me.',
  'Every moment of sobriety builds the life I truly want.',
  'I am proof that transformation is possible.',
  'My triggers do not control me — I control my response.',
  'I choose to nourish my mind, body, and soul every day.',
  'The storm I weathered made me the resilient person I am today.',
  'I am becoming the person I always wanted to be.',
  'Recovery is not about being perfect — it is about being present.',
  'My future is bright, and I am walking toward it with confidence.',
  'I am enough, just as I am, right here, right now.',
];

const MOTIVATIONAL_QUOTES: { text: string; author: string }[] = [
  { text: 'Recovery is not a race. You don\'t have to feel guilty if it takes you longer than you thought.', author: 'Unknown' },
  { text: 'The only person you are destined to become is the person you decide to be.', author: 'Ralph Waldo Emerson' },
  { text: 'Fall seven times, stand up eight.', author: 'Japanese Proverb' },
  { text: 'Every next level of your life will demand a different you.', author: 'Leonardo DiCaprio' },
  { text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.', author: 'Ralph Waldo Emerson' },
  { text: 'The wound is the place where the Light enters you.', author: 'Rumi' },
  { text: 'You are not a drop in the ocean. You are the entire ocean in a drop.', author: 'Rumi' },
  { text: 'Strength does not come from winning. Your struggles develop your strengths.', author: 'Arnold Schwarzenegger' },
  { text: 'Rock bottom became the solid foundation on which I rebuilt my life.', author: 'J.K. Rowling' },
  { text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { text: 'Healing takes courage, and we all have courage — even if we have to dig a little to find it.', author: 'Tori Amos' },
  { text: 'One day at a time — this is enough. Do not look back and grieve over the past, for it is gone.', author: 'Ida Scott Taylor' },
];

interface Badge {
  day: number;
  title: string;
  emoji: string;
  description: string;
}

const MILESTONE_BADGES: Badge[] = [
  { day: 1, title: 'First Step', emoji: '🌱', description: 'You took the bravest step — choosing to start. Every journey begins with Day 1.' },
  { day: 7, title: 'One Week Strong', emoji: '💪', description: 'Seven days of courage. The hardest week is behind you. Keep going!' },
  { day: 30, title: 'Monthly Milestone', emoji: '⭐', description: 'One full month of recovery. Your body and mind are already transforming.' },
  { day: 90, title: '90-Day Warrior', emoji: '🔥', description: 'Three months strong! Your brain chemistry is rewiring. You are a warrior.' },
  { day: 180, title: 'Half Year Hero', emoji: '🏆', description: 'Six months of freedom. You have built a foundation of lasting change.' },
  { day: 365, title: 'One Year Champion', emoji: '👑', description: 'A full year of recovery. You are living proof that transformation is possible.' },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function loadRecoveryData(): RecoveryData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RecoveryData) : null;
  } catch {
    return null;
  }
}

function saveRecoveryData(data: RecoveryData): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getDayNumber(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.max(1, Math.floor(diff / (1000 * 60 * 60 * 24)) + 1);
}

function getDailyAffirmation(dayNum: number): string {
  return AFFIRMATIONS[(dayNum - 1) % AFFIRMATIONS.length];
}

function getDailyQuote(dayNum: number): { text: string; author: string } {
  return MOTIVATIONAL_QUOTES[(dayNum - 1) % MOTIVATIONAL_QUOTES.length];
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function RecoveryAffirmations() {
  const [recoveryData, setRecoveryData] = useState<RecoveryData | null>(null);
  const [dayNumber, setDayNumber] = useState(0);
  const [currentAffirmation, setCurrentAffirmation] = useState('');
  const [refreshCount, setRefreshCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeBadge, setActiveBadge] = useState<number | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const data = loadRecoveryData();
    if (data) {
      setRecoveryData(data);
      setIsStarted(true);
      const day = getDayNumber(data.startDate);
      setDayNumber(day);

      // Update streak logic
      const today = todayKey();
      const yesterday = (() => {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      })();

      let newStreak = data.currentStreak;
      if (data.lastVisitDate === today) {
        // Already visited today, no change
      } else if (data.lastVisitDate === yesterday) {
        // Consecutive day
        newStreak = data.currentStreak + 1;
      } else {
        // Streak broken
        newStreak = 1;
      }

      const newLongest = Math.max(newStreak, data.longestStreak);
      const updated: RecoveryData = {
        ...data,
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastVisitDate: today,
      };
      saveRecoveryData(updated);
      setRecoveryData(updated);
      setCurrentAffirmation(getDailyAffirmation(day + refreshCount));
    } else {
      // Show a default affirmation for non-started users
      const todayDayOfYear = Math.floor(
        (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
      );
      setCurrentAffirmation(getDailyAffirmation(todayDayOfYear));
    }
  }, []);

  // Update affirmation when refreshCount changes
  useEffect(() => {
    if (dayNumber > 0) {
      setCurrentAffirmation(getDailyAffirmation(dayNumber + refreshCount));
    }
  }, [refreshCount, dayNumber]);

  const handleStartJourney = useCallback(() => {
    const today = todayKey();
    const data: RecoveryData = {
      startDate: today,
      currentStreak: 1,
      longestStreak: 1,
      lastVisitDate: today,
    };
    saveRecoveryData(data);
    setRecoveryData(data);
    setDayNumber(1);
    setIsStarted(true);
    setCurrentAffirmation(getDailyAffirmation(1));
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshCount((prev) => prev + 1);
  }, []);

  const handleShare = useCallback(async () => {
    const shareText = `"${currentAffirmation}" — SANCA Recovery Affirmation`;
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: do nothing
    }
  }, [currentAffirmation]);

  const handleBadgeClick = useCallback((day: number) => {
    setActiveBadge((prev) => (prev === day ? null : day));
  }, []);

  const todayQuote = dayNumber > 0 ? getDailyQuote(dayNumber) : getDailyQuote(
    Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <section id="affirmations" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Decorative background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-gold/8 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-green/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* -------- Section Header -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/15 text-sanca-gold-dark text-sm font-medium mb-4 badge-pulse">
            <Sparkles className="h-4 w-4" />
            Daily Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark mb-4">
            Your Recovery{' '}
            <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Daily affirmations and milestones to inspire and track your path to healing.
          </p>
        </motion.div>

        {/* -------- Daily Affirmation Card -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="shadow-premium-lg border-0 overflow-hidden hover-lift relative">
            {/* Top decorative border */}
            <div className="h-1.5 bg-gradient-to-r from-sanca-gold-dark via-sanca-gold to-sanca-gold-light" />

            <div className="p-6 sm:p-10 relative">
              {/* Decorative quote marks */}
              <span className="absolute top-6 left-6 sm:top-8 sm:left-8 text-7xl sm:text-8xl font-serif text-sanca-gold/15 leading-none select-none">
                &ldquo;
              </span>
              <span className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-7xl sm:text-8xl font-serif text-sanca-gold/15 leading-none select-none rotate-180">
                &ldquo;
              </span>

              {/* Date & Day Counter */}
              {isStarted && recoveryData && (
                <div className="flex items-center justify-center gap-3 mb-6 relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sanca-green/10 text-sanca-green text-xs font-semibold">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(recoveryData.startDate)}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sanca-gold/15 text-sanca-gold-dark text-xs font-semibold">
                    <Heart className="h-3.5 w-3.5" />
                    Day {dayNumber} of your journey
                  </div>
                </div>
              )}

              {/* Affirmation Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentAffirmation}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-center relative"
                >
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-sanca-green-dark leading-relaxed max-w-2xl mx-auto px-4 sm:px-8">
                    <span className="text-gradient-gold">{currentAffirmation}</span>
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 mt-8 relative">
                {!isStarted ? (
                  <Button
                    onClick={handleStartJourney}
                    className="bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-md hover:shadow-premium-lg transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl"
                    size="lg"
                  >
                    Start My Journey
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                ) : (
                  <>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleRefresh}
                        className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5 transition-all"
                      >
                        <RefreshCw className="h-4 w-4 mr-1.5" />
                        New Affirmation
                      </Button>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleShare}
                        className="border-sanca-gold/30 text-sanca-gold-dark hover:bg-sanca-gold/5 transition-all"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 mr-1.5" />
                            Copied!
                          </>
                        ) : (
                          <>
                            {copied ? <Check className="h-4 w-4 mr-1.5" /> : <Copy className="h-4 w-4 mr-1.5" />}
                            Share
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* -------- Progress Badge System -------- */}
        {isStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8"
          >
            <Card className="shadow-premium-md border-0 overflow-hidden hover-lift">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-5 w-5 text-sanca-gold" />
                  <h3 className="font-serif text-lg font-bold text-sanca-green-dark">
                    Milestone Badges
                  </h3>
                </div>

                {/* Horizontal scrollable badge strip */}
                <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                  {MILESTONE_BADGES.map((badge, i) => {
                    const earned = dayNumber >= badge.day;
                    const isActive = activeBadge === badge.day;

                    return (
                      <motion.button
                        key={badge.day}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleBadgeClick(badge.day)}
                        className={`relative flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer min-w-[100px] ${
                          earned
                            ? 'border-sanca-gold/40 bg-sanca-gold/5 shadow-gold'
                            : 'border-gray-200 bg-gray-50/60 grayscale opacity-60'
                        } ${isActive ? 'ring-2 ring-sanca-gold ring-offset-2' : ''}`}
                        aria-label={`${badge.title} badge — ${earned ? 'Earned' : 'Earn at Day ' + badge.day}`}
                      >
                        <span className="text-3xl">{badge.emoji}</span>
                        <span className={`text-xs font-bold text-center ${earned ? 'text-sanca-green-dark' : 'text-gray-400'}`}>
                          {badge.title}
                        </span>
                        <span className={`text-[10px] font-medium text-center ${earned ? 'text-sanca-gold-dark' : 'text-gray-400'}`}>
                          Day {badge.day}
                        </span>
                        {earned && (
                          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-sanca-green flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-white" />
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Badge tooltip */}
                <AnimatePresence>
                  {activeBadge !== null && (() => {
                    const badge = MILESTONE_BADGES.find((b) => b.day === activeBadge);
                    if (!badge) return null;
                    const earned = dayNumber >= badge.day;

                    return (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className={`p-4 rounded-xl border ${
                          earned
                            ? 'bg-sanca-gold/5 border-sanca-gold/20'
                            : 'bg-gray-50 border-gray-200'
                        }`}>
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{badge.emoji}</span>
                            <div>
                              <h4 className={`font-serif font-bold text-sm ${earned ? 'text-sanca-green-dark' : 'text-gray-500'}`}>
                                {badge.title}
                                {earned && (
                                  <span className="ml-2 text-xs font-medium text-sanca-green">&#10003; Earned</span>
                                )}
                              </h4>
                              <p className={`text-xs mt-1 leading-relaxed ${earned ? 'text-foreground/80' : 'text-muted-foreground'}`}>
                                {badge.description}
                              </p>
                              {!earned && (
                                <p className="text-xs text-sanca-gold-dark mt-2 font-medium">
                                  {badge.day - dayNumber} day{badge.day - dayNumber !== 1 ? 's' : ''} until you earn this badge
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        )}

        {/* -------- Streak Counter & Motivational Quote -------- */}
        {isStarted && recoveryData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Streak Counter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="shadow-premium-md border-0 overflow-hidden hover-lift h-full">
                <div className="h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="h-5 w-5 text-orange-500" />
                    <h3 className="font-serif text-lg font-bold text-sanca-green-dark">
                      Streak Counter
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Current Streak */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50/80 border border-orange-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                          <Flame className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Current Streak</p>
                          <p className="text-lg font-bold text-sanca-green-dark">
                            {recoveryData.currentStreak} day{recoveryData.currentStreak !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: Math.min(recoveryData.currentStreak, 7) }).map((_, i) => (
                          <span key={i} className="text-sm">🔥</span>
                        ))}
                      </div>
                    </div>

                    {/* Longest Streak */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sanca-gold/10 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-sanca-gold" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Longest Streak</p>
                          <p className="text-lg font-bold text-sanca-green-dark">
                            {recoveryData.longestStreak} day{recoveryData.longestStreak !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Motivational Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Card className="shadow-premium-md border-0 overflow-hidden hover-lift h-full">
                <div className="h-1 bg-gradient-to-r from-sanca-green via-sanca-emerald to-sanca-green-light" />
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="h-5 w-5 text-sanca-emerald" />
                    <h3 className="font-serif text-lg font-bold text-sanca-green-dark">
                      Daily Inspiration
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-sanca-green/5 border border-sanca-green/10 relative">
                    <span className="absolute top-2 left-3 text-4xl font-serif text-sanca-green/10 leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="font-serif text-base sm:text-lg font-semibold text-sanca-green-dark leading-relaxed italic pl-6 pr-2 pt-2">
                      {todayQuote.text}
                    </p>
                    <p className="text-sm text-sanca-gold-dark font-medium mt-3 pl-6">
                      — {todayQuote.author}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        )}

        {/* -------- Bottom CTA -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-3 text-base sm:text-lg">
            Need support today? We&apos;re here for you.
          </p>
          <a
            href="tel:0125421121"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold text-base shadow-premium-md hover:shadow-premium-lg transition-all duration-300 btn-ripple"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call 012 542 1121
          </a>
        </motion.div>
      </div>
    </section>
  );
}
