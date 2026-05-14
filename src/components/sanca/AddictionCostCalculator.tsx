'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  Heart,
  Clock,
  Users,
  AlertTriangle,
  GraduationCap,
  Plane,
  Car,
  Home,
  Baby,
  Smartphone,
  Brain,
  Wind,
  Activity,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ── Types ────────────────────────────────────────────────────────────────────

type Substance = 'alcohol' | 'tik' | 'cocaine' | 'heroin' | 'cannabis' | 'nyaope';
type Frequency = 'daily' | 'several-weekly' | 'weekly';
type Duration = 1 | 2 | 5 | 10;

interface SubstanceInfo {
  label: string;
  defaultWeekly: number;
  hoursPerUse: number;
  healthImpact: {
    liver: number;
    brain: number;
    heart: number;
    lungs: number;
  };
}

// ── Data ─────────────────────────────────────────────────────────────────────

const substances: Record<Substance, SubstanceInfo> = {
  alcohol: {
    label: 'Alcohol',
    defaultWeekly: 500,
    hoursPerUse: 3,
    healthImpact: { liver: 85, brain: 60, heart: 70, lungs: 30 },
  },
  tik: {
    label: 'Tik (Methamphetamine)',
    defaultWeekly: 1400,
    hoursPerUse: 6,
    healthImpact: { liver: 40, brain: 95, heart: 90, lungs: 50 },
  },
  cocaine: {
    label: 'Cocaine',
    defaultWeekly: 2500,
    hoursPerUse: 4,
    healthImpact: { liver: 45, brain: 80, heart: 95, lungs: 35 },
  },
  heroin: {
    label: 'Heroin',
    defaultWeekly: 2100,
    hoursPerUse: 8,
    healthImpact: { liver: 60, brain: 90, heart: 75, lungs: 70 },
  },
  cannabis: {
    label: 'Cannabis',
    defaultWeekly: 300,
    hoursPerUse: 2,
    healthImpact: { liver: 20, brain: 35, heart: 15, lungs: 55 },
  },
  nyaope: {
    label: 'Nyaope',
    defaultWeekly: 700,
    hoursPerUse: 7,
    healthImpact: { liver: 65, brain: 90, heart: 80, lungs: 65 },
  },
};

const frequencyMultiplier: Record<Frequency, number> = {
  daily: 7,
  'several-weekly': 4,
  weekly: 1,
};

const durationOptions: { value: Duration; label: string }[] = [
  { value: 1, label: '1 Year' },
  { value: 2, label: '2 Years' },
  { value: 5, label: '5 Years' },
  { value: 10, label: '10 Years' },
];

const frequencyOptions: { value: Frequency; label: string }[] = [
  { value: 'daily', label: 'Daily' },
  { value: 'several-weekly', label: 'Several times/week' },
  { value: 'weekly', label: 'Weekly' },
];

const substanceOptions: { value: Substance; label: string }[] = [
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'tik', label: 'Tik (Methamphetamine)' },
  { value: 'cocaine', label: 'Cocaine' },
  { value: 'heroin', label: 'Heroin' },
  { value: 'cannabis', label: 'Cannabis' },
  { value: 'nyaope', label: 'Nyaope' },
];

// What you could buy items
interface PurchaseComparison {
  icon: React.ElementType;
  label: string;
  cost: number;
  description: string;
}

const purchaseComparisons: PurchaseComparison[] = [
  { icon: GraduationCap, label: 'University Degree', cost: 156000, description: 'A full 3-year degree at a South African university' },
  { icon: Home, label: 'House Deposit', cost: 120000, description: 'A 10% deposit on a R1.2 million home' },
  { icon: Plane, label: 'Family Holiday', cost: 45000, description: 'A 2-week overseas holiday for a family of 4' },
  { icon: Car, label: 'Reliable Car', cost: 85000, description: 'A reliable second-hand vehicle' },
  { icon: Baby, label: 'Child\'s Education', cost: 200000, description: 'Private schooling from Grade 1 to Matric' },
  { icon: Smartphone, label: 'Smartphones', cost: 20000, description: '5 flagship smartphones for your family' },
];

// Health organ data
const healthOrgans = [
  { key: 'liver' as const, label: 'Liver', icon: Activity, color: '#C5963A' },
  { key: 'brain' as const, label: 'Brain', icon: Brain, color: '#1B5E3B' },
  { key: 'heart' as const, label: 'Heart', icon: Heart, color: '#DC2626' },
  { key: 'lungs' as const, label: 'Lungs', icon: Wind, color: '#059669' },
];

// Relationship impact levels
const relationshipImpact = [
  { years: 1, label: 'Strained trust', detail: 'Frequent arguments, broken promises, emotional distance', severity: 1 },
  { years: 2, label: 'Eroded bonds', detail: 'Loss of close friendships, family members distance themselves', severity: 2 },
  { years: 5, label: 'Shattered relationships', detail: 'Marriage breakdown, loss of custody, isolation from community', severity: 3 },
  { years: 10, label: 'Complete isolation', detail: 'Few remaining relationships, estranged from family, deep loneliness', severity: 4 },
];

// ── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, prefix = '', duration = 1500 }: { value: number; prefix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const prevRef = useRef(0);
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplay(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        prevRef.current = end;
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value, duration]);

  return (
    <span className="animate-count-glow">
      {prefix}{display.toLocaleString('en-ZA')}
    </span>
  );
}

// ── Health Bar ───────────────────────────────────────────────────────────────

function HealthBar({ organ, severity, icon: Icon, color, label }: {
  organ: string;
  severity: number;
  icon: React.ElementType;
  color: string;
  label: string;
}) {
  const pct = Math.min(100, severity);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 w-20 flex-shrink-0">
        <Icon className="h-4 w-4" style={{ color }} />
        <span className="text-sm font-semibold text-sanca-green-dark">{label}</span>
      </div>
      <div className="flex-1 h-3 bg-sanca-sage rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
      <span className="text-xs font-bold w-10 text-right" style={{ color }}>
        {pct}%
      </span>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function AddictionCostCalculator() {
  const [substance, setSubstance] = useState<Substance>('alcohol');
  const [frequency, setFrequency] = useState<Frequency>('daily');
  const [duration, setDuration] = useState<Duration>(1);
  const [weeklySpend, setWeeklySpend] = useState(500);
  const [showResults, setShowResults] = useState(false);
  const [calculated, setCalculated] = useState(false);

  // Auto-update weekly spend default when substance changes
  const handleSubstanceChange = useCallback((newSubstance: Substance) => {
    setSubstance(newSubstance);
    setWeeklySpend(substances[newSubstance].defaultWeekly);
    if (calculated) setCalculated(false);
  }, [calculated]);

  const handleCalculate = useCallback(() => {
    setCalculated(true);
    setShowResults(true);
  }, []);

  // Calculations
  const daysPerWeek = frequencyMultiplier[frequency];
  const totalWeeks = duration * 52;
  const totalCost = weeklySpend * totalWeeks;
  const hoursPerWeek = substances[substance].hoursPerUse * daysPerWeek;
  const totalHours = hoursPerWeek * totalWeeks;
  const totalDays = Math.round(totalHours / 24);

  // Health severity scales with duration
  const healthScale = duration <= 1 ? 0.3 : duration <= 2 ? 0.55 : duration <= 5 ? 0.8 : 1;
  const healthData = substances[substance].healthImpact;

  // Get applicable purchase comparisons
  const applicablePurchases = purchaseComparisons.filter(p => totalCost >= p.cost * 0.5);

  // Get relationship impact level
  const relationshipLevel = [...relationshipImpact].reverse().find(r => duration >= r.years) || relationshipImpact[0];

  // Duration label for display
  const durationLabel = durationOptions.find(d => d.value === duration)?.label ?? `${duration} Years`;

  return (
    <section id="cost-calculator" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sanca-green/[0.03]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-sanca-gold/[0.04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 badge-pulse">
            <Calculator className="h-4 w-4" />
            Cost Calculator
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            The True <span className="text-gradient-gold">Cost of Addiction</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Addiction costs far more than money. See the real financial, health, and personal toll
            that substance dependence takes over time.
          </p>
        </motion.div>

        {/* ── Calculator Inputs ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-6 sm:p-8 shadow-premium-xl border-0 bg-white relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-sanca-gold/20 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-sanca-gold/20 rounded-br-2xl" />

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Substance Type */}
              <div>
                <label htmlFor="substance-type" className="block text-sm font-semibold text-sanca-green-dark mb-2">
                  Substance Type
                </label>
                <div className="relative">
                  <select
                    id="substance-type"
                    value={substance}
                    onChange={(e) => handleSubstanceChange(e.target.value as Substance)}
                    className="select-sanca"
                    aria-label="Select substance type"
                  >
                    {substanceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Usage Frequency */}
              <div>
                <label htmlFor="usage-frequency" className="block text-sm font-semibold text-sanca-green-dark mb-2">
                  Usage Frequency
                </label>
                <div className="relative">
                  <select
                    id="usage-frequency"
                    value={frequency}
                    onChange={(e) => { setFrequency(e.target.value as Frequency); if (calculated) setCalculated(false); }}
                    className="select-sanca"
                    aria-label="Select usage frequency"
                  >
                    {frequencyOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-sanca-green-dark mb-2">
                  Duration of Use
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => { setDuration(opt.value); if (calculated) setCalculated(false); }}
                      className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 premium-focus ${
                        duration === opt.value
                          ? 'bg-sanca-green text-white shadow-premium-md'
                          : 'bg-sanca-cream text-sanca-green-dark border border-sanca-green/15 hover:bg-sanca-green/5 hover:border-sanca-green/30'
                      }`}
                      aria-label={`Set duration to ${opt.label}`}
                      aria-pressed={duration === opt.value}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weekly Spend */}
              <div>
                <label htmlFor="weekly-spend" className="block text-sm font-semibold text-sanca-green-dark mb-2">
                  Estimated Weekly Spend
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sanca-green-dark font-bold text-lg">R</span>
                  <input
                    id="weekly-spend"
                    type="number"
                    min={0}
                    step={50}
                    value={weeklySpend}
                    onChange={(e) => { setWeeklySpend(Math.max(0, Number(e.target.value))); if (calculated) setCalculated(false); }}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-sanca-sage bg-sanca-cream text-foreground text-base glow-focus focus:border-sanca-gold transition-all duration-300 premium-focus"
                    aria-label="Enter estimated weekly spend in Rand"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  Based on typical {substances[substance].label} usage in South Africa
                </p>
              </div>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={handleCalculate}
              className="w-full mt-6 bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-md hover:shadow-premium-lg transition-all duration-300 py-3.5 text-base font-semibold rounded-xl"
              size="lg"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Calculate the True Cost
            </Button>
          </Card>
        </motion.div>

        {/* ── Results ────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {calculated && showResults && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-8"
            >
              {/* ── Total Financial Cost ─────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card className="p-6 sm:p-8 shadow-premium-2xl border-0 bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-emerald text-white relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-sanca-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-sanca-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

                  <div className="relative text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sanca-gold-light text-sm font-medium mb-4">
                      <TrendingUp className="h-4 w-4" />
                      Total Financial Cost Over {durationLabel}
                    </div>
                    <div className="stat-counter mb-2">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-sanca-gold-light animate-count-glow">
                        R<AnimatedCounter value={totalCost} duration={2000} />
                      </span>
                    </div>
                    <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto">
                      Based on R{weeklySpend.toLocaleString('en-ZA')}/week × {totalWeeks.toLocaleString('en-ZA')} weeks of {substances[substance].label} use
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* ── What You Could Have Bought ────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-center font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-6">
                  <AlertTriangle className="h-5 w-5 inline-block text-sanca-gold mr-2" />
                  What You Could Have Bought Instead
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {applicablePurchases.map((item, i) => {
                    const Icon = item.icon;
                    const count = Math.floor(totalCost / item.cost);
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      >
                        <Card className="p-5 shadow-premium-md border-0 bg-white hover-lift card-spotlight relative overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-gold to-sanca-gold-light" />
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl bg-sanca-gold/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="h-5 w-5 text-sanca-gold" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-serif font-bold text-sanca-green-dark text-sm">
                                {count > 1 ? `${count}× ` : ''}{item.label}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                R{item.cost.toLocaleString('en-ZA')} each
                              </p>
                              <p className="text-xs text-sanca-green-dark/70 mt-1.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
                {applicablePurchases.length === 0 && (
                  <Card className="p-6 shadow-premium-md border-0 bg-white text-center">
                    <p className="text-muted-foreground text-sm">
                      Increase the weekly spend or duration to see purchase comparisons
                    </p>
                  </Card>
                )}
              </motion.div>

              {/* ── Two-Column: Health Impact + Relationships ─────────────── */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Health Impact Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Card className="p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-red-500" />
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-sanca-green/10 flex items-center justify-center">
                        <Heart className="h-4 w-4 text-sanca-green" />
                      </div>
                      <h4 className="font-serif font-bold text-sanca-green-dark">
                        Health Impact Timeline
                      </h4>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                      Estimated organ damage severity after {durationLabel.toLowerCase()} of {substances[substance].label} use
                    </p>

                    <div className="space-y-4">
                      {healthOrgans.map((organ) => {
                        const severity = Math.round(healthData[organ.key] * healthScale);
                        return (
                          <HealthBar
                            key={organ.key}
                            organ={organ.key}
                            severity={severity}
                            icon={organ.icon}
                            color={organ.color}
                            label={organ.label}
                          />
                        );
                      })}
                    </div>

                    {/* Timeline markers */}
                    <div className="mt-6 pt-4 border-t border-sanca-sage">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs font-semibold text-sanca-green-dark">Damage Progression</span>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 5, 10].map((yr) => (
                          <div
                            key={yr}
                            className={`flex-1 h-2 rounded-full transition-colors duration-500 ${
                              duration >= yr ? 'bg-sanca-green' : 'bg-sanca-sage'
                            }`}
                            title={`${yr} year${yr > 1 ? 's' : ''}`}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-1">
                        {[1, 2, 5, 10].map((yr) => (
                          <span key={yr} className="text-[10px] text-muted-foreground">
                            {yr}yr
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Relationships Lost + Time Wasted */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Relationships Lost */}
                  <Card className="p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-gold to-red-400" />
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sanca-gold/10 flex items-center justify-center">
                        <Users className="h-4 w-4 text-sanca-gold" />
                      </div>
                      <h4 className="font-serif font-bold text-sanca-green-dark">
                        Relationships Impact
                      </h4>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-sanca-cream border border-sanca-gold/15">
                      <div className="flex gap-0.5 mt-0.5 flex-shrink-0">
                        {[1, 2, 3, 4].map((level) => (
                          <div
                            key={level}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                              relationshipLevel.severity >= level
                                ? 'bg-sanca-gold'
                                : 'bg-sanca-sage'
                            }`}
                          />
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold text-sanca-green-dark text-sm">
                          {relationshipLevel.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                          {relationshipLevel.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        { label: 'Family', impact: duration >= 2 ? 'Strained' : 'At risk' },
                        { label: 'Friends', impact: duration >= 5 ? 'Lost' : 'Distanced' },
                        { label: 'Work', impact: duration >= 5 ? 'Jeopardised' : 'Affected' },
                      ].map((item) => (
                        <div key={item.label} className="text-center p-2 rounded-lg bg-sanca-sage/50">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                            {item.label}
                          </p>
                          <p className="text-xs font-bold text-sanca-green-dark mt-0.5">
                            {item.impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Time Wasted */}
                  <Card className="p-6 shadow-premium-md border-0 bg-white hover-lift relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-emerald to-sanca-green" />
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-sanca-emerald/10 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-sanca-emerald" />
                      </div>
                      <h4 className="font-serif font-bold text-sanca-green-dark">
                        Time Wasted
                      </h4>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 rounded-xl bg-sanca-cream">
                        <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark stat-counter">
                          <AnimatedCounter value={totalHours} duration={1500} />
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">Hours</p>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-sanca-cream">
                        <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark stat-counter">
                          <AnimatedCounter value={totalDays} duration={1500} />
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">Days</p>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-sanca-cream">
                        <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark stat-counter">
                          <AnimatedCounter value={Math.round(totalDays / 365 * 10) / 10} duration={1500} />
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 font-medium">Years</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      Time spent obtaining, using, and recovering from {substances[substance].label} —
                      {hoursPerWeek} hours/week that could have been spent with loved ones,
                      building a career, or pursuing dreams.
                    </p>
                  </Card>
                </motion.div>
              </div>

              {/* ── CTA ──────────────────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center pt-4"
              >
                <Card className="p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-green/5 via-white to-sanca-sage/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-3">
                    It&apos;s never too late to <span className="text-gradient-gold">break free</span>
                  </h4>
                  <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                    Every day you wait, the cost grows. Take the first step towards recovery today —
                    SANCA Pretoria is here to help.
                  </p>
                  <Button
                    onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-sanca-green hover:bg-sanca-green-dark text-white px-8 py-6 text-base font-semibold rounded-xl btn-ripple shadow-gold transition-colors"
                    size="lg"
                  >
                    Break Free Today
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Card>
              </motion.div>

              {/* ── Disclaimer ───────────────────────────────────────────── */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center text-xs text-muted-foreground italic max-w-2xl mx-auto"
              >
                These estimates are illustrative. Actual costs and health impacts vary by individual.
                If you or someone you know is struggling with addiction, please contact SANCA Pretoria
                at <a href="tel:0125421121" className="text-sanca-green font-semibold hover:underline">012 542 1121</a>.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state hint */}
        {!calculated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground/60 text-sm mt-4"
          >
            <p>Select your details above and click &quot;Calculate the True Cost&quot; to see the impact</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
