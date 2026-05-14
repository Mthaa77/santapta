'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeftRight,
  Check,
  X,
  Building2,
  Users,
  HeartPulse,
  Clock,
  CreditCard,
  UserCheck,
  Star,
  GraduationCap,
  TreePine,
  HelpCircle,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ComparisonCell {
  value: string;
  type: 'check' | 'cross' | 'text';
}

interface Programme {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  headerBg: string;
  recommended?: boolean;
  data: Record<string, ComparisonCell>;
}

interface Category {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: Category[] = [
  { key: 'duration', label: 'Duration', icon: Clock },
  { key: 'setting', label: 'Setting', icon: Building2 },
  { key: 'medicalDetox', label: 'Medical Detox', icon: HeartPulse },
  { key: 'counselling', label: 'Counselling', icon: Users },
  { key: 'familyInvolvement', label: 'Family Involvement', icon: UserCheck },
  { key: 'cost', label: 'Cost', icon: CreditCard },
  { key: 'ageGroup', label: 'Age Group', icon: Users },
  { key: 'bestFor', label: 'Best For', icon: Star },
];

const programmes: Programme[] = [
  {
    id: 'castle-carey',
    name: 'Castle Carey Clinic',
    subtitle: 'Inpatient - Adults',
    icon: Building2,
    headerBg: 'bg-gradient-to-br from-sanca-green to-sanca-green-dark',
    recommended: true,
    data: {
      duration: { value: '21-day programme', type: 'text' },
      setting: { value: 'Residential (24/7 care)', type: 'text' },
      medicalDetox: { value: 'Included', type: 'check' },
      counselling: { value: 'Individual + Group', type: 'text' },
      familyInvolvement: { value: 'Family therapy included', type: 'text' },
      cost: { value: 'Medical aid covers', type: 'text' },
      ageGroup: { value: '18+', type: 'text' },
      bestFor: { value: 'Severe addiction, medical detox needed', type: 'text' },
    },
  },
  {
    id: 'lapalame',
    name: 'Lapalamé Youth Drug Unit',
    subtitle: 'Inpatient - Youth 13-18',
    icon: GraduationCap,
    headerBg: 'bg-gradient-to-br from-sanca-emerald to-emerald-800',
    data: {
      duration: { value: '21-day programme', type: 'text' },
      setting: { value: 'Residential (24/7 care)', type: 'text' },
      medicalDetox: { value: 'Included', type: 'check' },
      counselling: { value: 'Individual + Group', type: 'text' },
      familyInvolvement: { value: 'Family therapy included', type: 'text' },
      cost: { value: 'Medical aid covers', type: 'text' },
      ageGroup: { value: '13-18', type: 'text' },
      bestFor: { value: 'Youth with substance issues', type: 'text' },
    },
  },
  {
    id: 'outpatient',
    name: 'Outpatient Programme',
    subtitle: 'Community-based',
    icon: TreePine,
    headerBg: 'bg-gradient-to-br from-sanca-gold to-sanca-gold-dark',
    data: {
      duration: { value: '8-12 weeks (3x/week)', type: 'text' },
      setting: { value: 'Community-based', type: 'text' },
      medicalDetox: { value: 'Not included', type: 'cross' },
      counselling: { value: 'Individual + Group', type: 'text' },
      familyInvolvement: { value: 'Optional family sessions', type: 'text' },
      cost: { value: 'Lower cost', type: 'text' },
      ageGroup: { value: '18+', type: 'text' },
      bestFor: { value: 'Mild-moderate addiction', type: 'text' },
    },
  },
  {
    id: 'aftercare',
    name: 'Aftercare Programme',
    subtitle: 'Continued Support',
    icon: HeartPulse,
    headerBg: 'bg-gradient-to-br from-sanca-green-light to-sanca-green',
    data: {
      duration: { value: 'Ongoing (weekly)', type: 'text' },
      setting: { value: 'Community-based', type: 'text' },
      medicalDetox: { value: 'Not included', type: 'cross' },
      counselling: { value: 'Group sessions', type: 'text' },
      familyInvolvement: { value: 'Family support groups', type: 'text' },
      cost: { value: 'Minimal cost', type: 'text' },
      ageGroup: { value: 'All ages', type: 'text' },
      bestFor: { value: 'Maintaining recovery', type: 'text' },
    },
  },
];

function CellRenderer({ cell }: { cell: ComparisonCell }) {
  if (cell.type === 'check') {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-sanca-emerald/10">
          <Check className="h-3.5 w-3.5 text-sanca-emerald" />
        </span>
        <span className="text-sm text-sanca-emerald font-medium">{cell.value}</span>
      </span>
    );
  }
  if (cell.type === 'cross') {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30">
          <X className="h-3.5 w-3.5 text-red-500 dark:text-red-400" />
        </span>
        <span className="text-sm text-red-500 dark:text-red-400 font-medium">{cell.value}</span>
      </span>
    );
  }
  return <span className="text-sm text-foreground dark:text-white/80">{cell.value}</span>;
}

export default function TreatmentComparison() {
  return (
    <section
      id="treatment-compare"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden"
    >
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sanca-green/5 rounded-full translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-sanca-gold/5 rounded-full -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4">
            <ArrowLeftRight className="h-4 w-4" />
            Compare Programmes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Compare <span className="text-gradient-gold">Treatment Options</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-2xl mx-auto">
            Find the right programme for your needs
          </p>
        </motion.div>

        {/* Desktop: 4-column card layout */}
        <div className="hidden lg:block">
          <Card className="shadow-premium-2xl border-0 dark:bg-[#0D3B22] overflow-hidden p-0">
            {/* Column headers */}
            <div className="grid grid-cols-[200px_1fr_1fr_1fr_1fr]">
              {/* Empty corner */}
              <div className="p-4" />
              {programmes.map((prog, i) => {
                const Icon = prog.icon;
                return (
                  <motion.div
                    key={prog.id}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className={`relative p-6 text-center ${prog.headerBg} text-white ${
                      i === 0 ? 'rounded-tl-2xl' : ''
                    } ${i === programmes.length - 1 ? 'rounded-tr-2xl' : ''} ${
                      prog.recommended ? 'ring-2 ring-sanca-gold ring-inset' : ''
                    }`}
                  >
                    {prog.recommended && (
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-lg bg-sanca-gold text-white text-xs font-bold shadow-md z-10">
                        ★ Recommended
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-serif text-base font-bold leading-tight">{prog.name}</h3>
                    <p className="text-white/75 text-xs mt-1">{prog.subtitle}</p>
                    <div className="mt-3 h-1 rounded-full bg-white/30 mx-auto w-12" />
                  </motion.div>
                );
              })}
            </div>

            {/* Data rows */}
            {categories.map((cat, catIdx) => {
              const CatIcon = cat.icon;
              const isEven = catIdx % 2 === 0;
              const isLast = catIdx === categories.length - 1;
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * catIdx }}
                  className="grid grid-cols-[200px_1fr_1fr_1fr_1fr]"
                >
                  {/* Category label */}
                  <div
                    className={`flex items-center gap-2 p-4 text-sm font-semibold text-sanca-green-dark dark:text-white/90 ${
                      isEven
                        ? 'bg-sanca-cream/50 dark:bg-[#0a2a18]/50'
                        : 'bg-white dark:bg-[#0D3B22]'
                    } ${isLast ? 'rounded-bl-2xl' : ''}`}
                  >
                    <CatIcon className="h-4 w-4 text-sanca-gold flex-shrink-0" />
                    <span>{cat.label}</span>
                  </div>
                  {/* Programme cells */}
                  {programmes.map((prog, progIdx) => (
                    <div
                      key={prog.id}
                      className={`flex items-center justify-center p-4 text-center ${
                        isEven
                          ? 'bg-sanca-cream/50 dark:bg-[#0a2a18]/50'
                          : 'bg-white dark:bg-[#0D3B22]'
                      } ${isLast && progIdx === programmes.length - 1 ? 'rounded-br-2xl' : ''}`}
                    >
                      <CellRenderer cell={prog.data[cat.key]} />
                    </div>
                  ))}
                </motion.div>
              );
            })}
          </Card>
        </div>

        {/* Mobile/Tablet: Horizontally scrollable cards */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory custom-scrollbar -mx-4 px-4">
            {programmes.map((prog, progIdx) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * progIdx }}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <Card
                    className={`shadow-premium-md border-0 dark:bg-[#0D3B22] overflow-hidden h-full ${
                      prog.recommended ? 'ring-2 ring-sanca-gold' : ''
                    }`}
                  >
                    {/* Card header */}
                    <div className={`p-5 ${prog.headerBg} text-white relative`}>
                      {prog.recommended && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold">
                          ★ Recommended
                        </span>
                      )}
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-serif text-base font-bold leading-tight">{prog.name}</h3>
                      <p className="text-white/75 text-xs mt-1">{prog.subtitle}</p>
                    </div>

                    {/* Card body - comparison rows */}
                    <div className="p-0">
                      {categories.map((cat, catIdx) => {
                        const CatIcon = cat.icon;
                        return (
                          <div
                            key={cat.key}
                            className={`flex items-start gap-3 px-5 py-3 ${
                              catIdx % 2 === 0
                                ? 'bg-sanca-cream/30 dark:bg-[#0a2a18]/30'
                                : 'bg-transparent'
                            }`}
                          >
                            <CatIcon className="h-4 w-4 text-sanca-gold flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-sanca-green-dark/60 dark:text-white/50 uppercase tracking-wide mb-0.5">
                                {cat.label}
                              </p>
                              <CellRenderer cell={prog.data[cat.key]} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll hint */}
          <p className="text-center text-xs text-muted-foreground dark:text-white/40 mt-2 flex items-center justify-center gap-1">
            <ArrowLeftRight className="h-3 w-3" />
            Swipe to compare programmes
          </p>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground dark:text-white/60">
              <HelpCircle className="h-5 w-5 text-sanca-gold" />
              <span className="text-sm">Not sure which programme?</span>
            </div>
            <Button
              onClick={() =>
                document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold shadow-premium-sm btn-ripple"
              size="lg"
            >
              Take Our Assessment
              <ArrowLeftRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
