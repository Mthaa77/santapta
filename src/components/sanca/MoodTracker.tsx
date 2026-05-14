'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  SmilePlus,
  TrendingUp,
  Save,
  Calendar,
  X,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface MoodEntry {
  date: string;   // YYYY-MM-DD
  mood: MoodKey;
  tags: string[];
  notes: string;
}

type MoodKey = 'great' | 'good' | 'okay' | 'low' | 'struggling';

interface MoodOption {
  key: MoodKey;
  emoji: string;
  label: string;
  color: string;       // tailwind bg class for ring / bar
  hex: string;         // raw hex for inline styles
  value: number;       // 5 = great … 1 = struggling
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const MOOD_OPTIONS: MoodOption[] = [
  { key: 'great',      emoji: '😊', label: 'Great',      color: 'ring-sanca-emerald',    hex: '#059669', value: 5 },
  { key: 'good',       emoji: '🙂', label: 'Good',       color: 'ring-sanca-green-light', hex: '#2D8B57', value: 4 },
  { key: 'okay',       emoji: '😐', label: 'Okay',       color: 'ring-sanca-gold',        hex: '#C5963A', value: 3 },
  { key: 'low',        emoji: '😔', label: 'Low',        color: 'ring-sanca-gold-dark',   hex: '#9B7429', value: 2 },
  { key: 'struggling', emoji: '😢', label: 'Struggling', color: 'ring-red-500',           hex: '#EF4444', value: 1 },
];

const TAG_OPTIONS = [
  'Cravings', 'Anxiety', 'Isolation', 'Good Sleep', 'Exercise',
  'Support Group', 'Family Time', 'Triggers', 'Meditation', 'Relapse Risk',
];

const STORAGE_KEY = 'sanca_mood_data';

const DAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function loadMoods(): MoodEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as MoodEntry[]) : [];
  } catch {
    return [];
  }
}

function saveMoods(entries: MoodEntry[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getMoodOption(key: MoodKey): MoodOption {
  return MOOD_OPTIONS.find((m) => m.key === key) ?? MOOD_OPTIONS[2];
}

function getMotivational(key: MoodKey): string {
  if (key === 'great' || key === 'good') {
    return "Keep up the amazing work! Your recovery is inspiring.";
  }
  if (key === 'okay') {
    return "Every day is a step forward. You're doing great by checking in.";
  }
  return "It's okay to not be okay. Consider reaching out: 012 542 1121";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<MoodKey | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>(() => loadMoods());
  const [showTrends, setShowTrends] = useState(false);

  /* ---- handlers ---- */

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = useCallback(() => {
    if (!selectedMood) return;
    const entry: MoodEntry = {
      date: todayKey(),
      mood: selectedMood,
      tags: selectedTags,
      notes,
    };
    const existing = loadMoods();
    // replace today's entry if it already exists
    const filtered = existing.filter((e) => e.date !== entry.date);
    const updated = [...filtered, entry];
    saveMoods(updated);
    setMoodHistory(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [selectedMood, selectedTags, notes]);

  const handleReset = () => {
    setSelectedMood(null);
    setSelectedTags([]);
    setNotes('');
    setSaved(false);
  };

  /* ---- derived data for 7-day strip ---- */

  const last7Days = (() => {
    const days: { date: string; abbr: string; entry?: MoodEntry }[] = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      days.push({
        date: key,
        abbr: DAY_ABBR[d.getDay()],
        entry: moodHistory.find((e) => e.date === key),
      });
    }
    return days;
  })();

  /* ---- trend chart data ---- */

  const trendBars = last7Days.map((d) => ({
    ...d,
    value: d.entry ? getMoodOption(d.entry.mood).value : 0,
    hex: d.entry ? getMoodOption(d.entry.mood).hex : '#D1D5DB',
  }));

  /* ---- motivational message ---- */

  const motivational = selectedMood ? getMotivational(selectedMood) : null;

  /* ================================================================ */

  return (
    <section id="mood-tracker" className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-emerald/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* -------- Section Header -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-emerald/10 text-sanca-emerald text-sm font-medium mb-4 badge-pulse">
            <Heart className="h-4 w-4" />
            Emotional Wellness
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Daily Mood{' '}
            <span className="text-gradient-gold">Check-In</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track your emotional journey. Recovery is day by day.
          </p>
        </motion.div>

        {/* -------- Main Mood Card -------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="shadow-premium-md border-0 overflow-hidden hover-lift">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-sanca-emerald via-sanca-gold to-sanca-green-light" />

            <div className="p-6 sm:p-8">
              {/* Mood Selection */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <SmilePlus className="h-5 w-5 text-sanca-green" />
                  <h3 className="font-serif text-lg font-bold text-sanca-green-dark">
                    How are you feeling today?
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {MOOD_OPTIONS.map((mood) => (
                    <motion.button
                      key={mood.key}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        if (saved) return;
                        setSelectedMood(mood.key);
                      }}
                      className={`relative flex flex-col items-center gap-2 p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        selectedMood === mood.key
                          ? `ring-2 ${mood.color} ring-offset-2 border-transparent bg-white shadow-premium-sm`
                          : 'border-gray-100 bg-gray-50/60 hover:border-gray-200 hover:bg-white'
                      }`}
                    >
                      <AnimatePresence>
                        {selectedMood === mood.key && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                            style={{ backgroundColor: mood.hex }}
                          >
                            ✓
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <motion.span
                        className="text-3xl sm:text-4xl"
                        animate={selectedMood === mood.key ? { scale: [1, 1.15, 1] } : {}}
                        transition={{ duration: 0.4 }}
                      >
                        {mood.emoji}
                      </motion.span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        {mood.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Post-selection content */}
              <AnimatePresence mode="wait">
                {selectedMood && !saved && (
                  <motion.div
                    key="post-selection"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    {/* Motivational Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-6 p-4 rounded-xl border"
                      style={{
                        backgroundColor: `${getMoodOption(selectedMood).hex}08`,
                        borderColor: `${getMoodOption(selectedMood).hex}25`,
                      }}
                    >
                      <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                        💬 {motivational}
                      </p>
                    </motion.div>

                    {/* Tags */}
                    <div className="mb-5">
                      <p className="text-sm font-semibold text-sanca-green-dark mb-3">
                        What&apos;s influencing your mood? <span className="text-muted-foreground font-normal">(select any)</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {TAG_OPTIONS.map((tag) => {
                          const active = selectedTags.includes(tag);
                          return (
                            <motion.button
                              key={tag}
                              whileHover={{ scale: 1.04 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => toggleTag(tag)}
                              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
                                active
                                  ? 'bg-sanca-green text-white border-sanca-green shadow-premium-sm'
                                  : 'bg-white text-foreground border-gray-200 hover:border-sanca-green/40'
                              }`}
                            >
                              {tag}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="mb-6">
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="How are you feeling today? (optional)"
                        rows={3}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/60 p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sanca-green/30 focus:border-sanca-green/40 transition-all resize-none custom-scrollbar"
                      />
                    </div>

                    {/* Save Button */}
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={handleSave}
                        className="bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-sm hover:shadow-premium-md transition-all duration-300 px-6 py-2.5 rounded-xl font-semibold"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Log My Mood
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={handleReset}
                        className="text-muted-foreground"
                      >
                        <X className="h-4 w-4 mr-1" />
                        Cancel
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Saved confirmation */}
                {saved && (
                  <motion.div
                    key="saved"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="inline-flex w-16 h-16 rounded-full bg-sanca-emerald/10 items-center justify-center mb-4"
                    >
                      <span className="text-3xl">✅</span>
                    </motion.div>
                    <h4 className="font-serif text-xl font-bold text-sanca-green-dark mb-1">
                      Mood Logged!
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your check-in has been saved. Keep coming back every day.
                    </p>
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5"
                    >
                      Log Another Mood
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>

        {/* -------- 7-Day History Strip -------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <Card className="shadow-premium-md border-0 overflow-hidden hover-lift">
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-sanca-gold" />
                  <h3 className="font-serif text-lg font-bold text-sanca-green-dark">
                    Last 7 Days
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTrends((v) => !v)}
                  className="text-sanca-gold hover:text-sanca-gold-dark hover:bg-sanca-gold/5"
                >
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {showTrends ? 'Hide Trends' : 'View Trends'}
                </Button>
              </div>

              {/* Day cards strip */}
              <div className="grid grid-cols-7 gap-2">
                {last7Days.map((day) => (
                  <div
                    key={day.date}
                    className="flex flex-col items-center gap-1"
                  >
                    <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase">
                      {day.abbr}
                    </span>
                    {day.entry ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full aspect-square rounded-xl bg-white border border-gray-100 flex flex-col items-center justify-center shadow-premium-sm relative overflow-hidden"
                      >
                        <span className="text-lg sm:text-2xl">{getMoodOption(day.entry.mood).emoji}</span>
                        {/* Accent bar */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl"
                          style={{ backgroundColor: getMoodOption(day.entry.mood).hex }}
                        />
                      </motion.div>
                    ) : (
                      <div className="w-full aspect-square rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center">
                        <span className="text-gray-300 text-lg">—</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Trends chart */}
              <AnimatePresence>
                {showTrends && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden mt-5 pt-5 border-t border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-sanca-green-dark">
                        Mood Trend
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#059669' }} />
                          Great
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C5963A' }} />
                          Okay
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#EF4444' }} />
                          Low
                        </span>
                      </div>
                    </div>

                    {/* Bar chart */}
                    <div className="flex items-end gap-2 h-32 sm:h-40">
                      {trendBars.map((bar) => (
                        <div key={bar.date} className="flex-1 flex flex-col items-center gap-1">
                          <span className="text-[10px] font-bold text-foreground">
                            {bar.value > 0 ? bar.value : ''}
                          </span>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: bar.value > 0 ? `${(bar.value / 5) * 100}%` : '4px' }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="w-full rounded-t-lg min-h-[4px]"
                            style={{
                              backgroundColor: bar.value > 0 ? bar.hex : '#E5E7EB',
                            }}
                          />
                          <span className="text-[10px] text-muted-foreground">{bar.abbr}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
