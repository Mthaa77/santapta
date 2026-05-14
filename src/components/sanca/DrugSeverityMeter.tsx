'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, AlertTriangle, AlertCircle, Info, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Substance {
  id: string;
  name: string;
  severity: number; // 1-5
  icon: string;
  color: string;
  shortTerm: string[];
  longTerm: string[];
  withdrawal: string;
  treatment: string;
}

const substances: Substance[] = [
  {
    id: 'alcohol',
    name: 'Alcohol',
    severity: 4,
    icon: '🍷',
    color: 'from-amber-500 to-red-500',
    shortTerm: ['Impaired judgement', 'Loss of coordination', 'Nausea & vomiting', 'Blackouts'],
    longTerm: ['Liver disease (cirrhosis)', 'Heart damage', 'Brain shrinkage', 'Cancer risk increase'],
    withdrawal: 'Delirium tremens, seizures, extreme anxiety — medically supervised detox is essential',
    treatment: 'Medical detox at Castle Carey Clinic, followed by 4-6 week inpatient programme',
  },
  {
    id: 'dagga',
    name: 'Dagga / Cannabis',
    severity: 2,
    icon: '🌿',
    color: 'from-green-500 to-emerald-600',
    shortTerm: ['Impaired memory', 'Anxiety & paranoia', 'Slow reaction time', 'Bloodshot eyes'],
    longTerm: ['Motivational syndrome', 'Respiratory issues', 'Mental health risk (psychosis)', 'Dependency'],
    withdrawal: 'Irritability, sleep difficulties, cravings, mood swings — typically manageable',
    treatment: 'Outpatient programme at Soshanguve or Hammanskraal with counselling and group therapy',
  },
  {
    id: 'tik',
    name: 'Tik / Methamphetamine',
    severity: 5,
    icon: '💎',
    color: 'from-cyan-400 to-blue-600',
    shortTerm: ['Extreme euphoria', 'Rapid heart rate', 'Paranoia & aggression', 'Insomnia'],
    longTerm: ['Severe tooth decay ("meth mouth")', 'Brain damage', 'Psychosis', 'Organ failure'],
    withdrawal: 'Severe depression, extreme fatigue, intense cravings — requires medical supervision',
    treatment: 'Medical detox at Castle Carey Clinic with intensive inpatient programme and aftercare',
  },
  {
    id: 'heroin',
    name: 'Heroin',
    severity: 5,
    icon: '💉',
    color: 'from-purple-500 to-indigo-700',
    shortTerm: ['Intense euphoria', 'Respiratory depression', 'Nodding off', 'Nausea'],
    longTerm: ['Physical dependence', 'Collapsed veins', 'Heart infections', 'Overdose risk (fatal)'],
    withdrawal: 'Severe flu-like symptoms, intense cravings, muscle pain — medical detox critical',
    treatment: 'Medical detox at Castle Carey Clinic with structured inpatient programme and long-term aftercare',
  },
  {
    id: 'cocaine',
    name: 'Cocaine',
    severity: 4,
    icon: '❄️',
    color: 'from-white to-gray-400',
    shortTerm: ['Intense euphoria', 'Increased energy', 'Elevated heart rate', 'Anxiety'],
    longTerm: ['Heart attack risk', 'Nasal damage', 'Mental health deterioration', 'Financial ruin'],
    withdrawal: 'Crash with depression, fatigue, increased appetite, vivid nightmares',
    treatment: 'Inpatient or outpatient programme depending on severity, with relapse prevention focus',
  },
  {
    id: 'mandrax',
    name: 'Mandrax',
    severity: 4,
    icon: '💊',
    color: 'from-pink-500 to-rose-700',
    shortTerm: ['Sedation & euphoria', 'Slurred speech', 'Impaired coordination', 'Memory loss'],
    longTerm: ['Severe dependency', 'Respiratory depression', 'Organ damage', 'Overdose risk'],
    withdrawal: 'Seizures, severe anxiety, insomnia, tremors — medically supervised detox essential',
    treatment: 'Medical detox at Castle Carey Clinic with comprehensive inpatient treatment',
  },
];

function getSeverityLabel(level: number) {
  switch (level) {
    case 1: return { label: 'Low Risk', color: 'text-green-500', bg: 'bg-green-50', icon: <ShieldCheck className="h-5 w-5 text-green-500" /> };
    case 2: return { label: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50', icon: <Info className="h-5 w-5 text-yellow-600" /> };
    case 3: return { label: 'High Risk', color: 'text-orange-500', bg: 'bg-orange-50', icon: <AlertCircle className="h-5 w-5 text-orange-500" /> };
    case 4: return { label: 'Severe', color: 'text-red-500', bg: 'bg-red-50', icon: <AlertTriangle className="h-5 w-5 text-red-500" /> };
    case 5: return { label: 'Critical', color: 'text-red-700', bg: 'bg-red-100', icon: <AlertTriangle className="h-5 w-5 text-red-700" /> };
    default: return { label: 'Unknown', color: 'text-gray-500', bg: 'bg-gray-50', icon: <Info className="h-5 w-5 text-gray-500" /> };
  }
}

export default function DrugSeverityMeter() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedSubstance = substances.find(s => s.id === selected);

  return (
    <section id="drug-severity" className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient">
      <div className="absolute top-0 left-0 w-full section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-sm font-medium mb-4">
            <Gauge className="h-4 w-4" />
            Severity Meter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark mb-4">
            Drug <span className="text-gradient-gold">Severity</span> Comparison
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understand the relative severity and risks of common substances in South Africa.
            Select a substance to see detailed information.
          </p>
        </motion.div>

        {/* Severity Meter Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6 sm:p-8 shadow-premium-xl border-0 overflow-hidden">
            {/* Scale Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-muted-foreground mb-2 px-1">
                <span>Low Risk</span>
                <span>Moderate</span>
                <span>High Risk</span>
                <span>Severe</span>
                <span>Critical</span>
              </div>
              <div className="h-3 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 via-red-500 to-red-800 relative">
                {/* Substance Markers */}
                {substances.map((sub, i) => {
                  const position = (sub.severity / 5) * 100;
                  const isSelected = selected === sub.id;
                  return (
                    <motion.button
                      key={sub.id}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-300"
                      style={{ left: `${position}%` }}
                      onClick={() => setSelected(isSelected ? null : sub.id)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-lg shadow-lg transition-all duration-300 ${
                        isSelected
                          ? 'bg-white ring-2 ring-sanca-green scale-125 shadow-premium-lg'
                          : 'bg-white/90 hover:bg-white shadow-premium-md'
                      }`}>
                        {sub.icon}
                      </div>
                      <p className={`text-[9px] sm:text-[10px] font-medium text-center mt-1 whitespace-nowrap transition-all ${
                        isSelected ? 'text-sanca-green-dark font-bold' : 'text-muted-foreground'
                      }`}>
                        {sub.name}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              {substances.map(sub => {
                const sev = getSeverityLabel(sub.severity);
                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelected(selected === sub.id ? null : sub.id)}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-lg transition-all ${
                      selected === sub.id ? `${sev.bg} ${sev.color} font-medium` : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>{sub.icon}</span>
                    <span>{sub.name}</span>
                    <span className="font-bold">({sub.severity}/5)</span>
                  </button>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          {selectedSubstance && (
            <motion.div
              key={selectedSubstance.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="shadow-premium-xl border-0 overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  {/* Left: Substance info */}
                  <div className={`p-6 sm:p-8 bg-gradient-to-br ${selectedSubstance.color} text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative">
                      <span className="text-4xl mb-4 block">{selectedSubstance.icon}</span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
                        {selectedSubstance.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        {getSeverityLabel(selectedSubstance.severity).icon}
                        <span className="font-semibold">
                          Severity: {selectedSubstance.severity}/5 — {getSeverityLabel(selectedSubstance.severity).label}
                        </span>
                      </div>
                      {/* Severity dots */}
                      <div className="flex gap-1.5 mb-6">
                        {[1, 2, 3, 4, 5].map(level => (
                          <div
                            key={level}
                            className={`h-2 flex-1 rounded-full transition-all ${
                              level <= selectedSubstance.severity ? 'bg-white' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                        <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Withdrawal
                        </p>
                        <p className="text-xs text-white/80">{selectedSubstance.withdrawal}</p>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Effects */}
                  <div className="p-6 sm:p-8 border-r border-gray-100">
                    <h4 className="font-serif font-bold text-sanca-green-dark mb-4 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-sanca-gold" />
                      Effects & Risks
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">Short-Term</p>
                        <ul className="space-y-1">
                          {selectedSubstance.shortTerm.map((effect, i) => (
                            <motion.li
                              key={effect}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                              {effect}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <div className="divider-diamond" />
                      <div>
                        <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Long-Term</p>
                        <ul className="space-y-1">
                          {selectedSubstance.longTerm.map((effect, i) => (
                            <motion.li
                              key={effect}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 + 0.2 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                              {effect}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right: Treatment */}
                  <div className="p-6 sm:p-8">
                    <h4 className="font-serif font-bold text-sanca-green-dark mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sanca-emerald" />
                      Treatment at SANCA
                    </h4>
                    <div className="p-4 rounded-xl bg-sanca-sage border border-sanca-green/10 mb-4">
                      <p className="text-sm text-sanca-green-dark leading-relaxed">
                        {selectedSubstance.treatment}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/20 mb-6">
                      <p className="text-xs text-sanca-gold-dark flex items-start gap-2">
                        <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        SANCA Pretoria provides medical detox and professional treatment regardless of substance type or severity.
                      </p>
                    </div>
                    <Button
                      onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold btn-ripple"
                    >
                      Start Treatment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground italic">
            Severity ratings are based on dependency potential, withdrawal severity, and health impact.
            All substances can be dangerous. If you or someone you know is struggling, reach out to SANCA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
