'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pill, AlertTriangle, Eye, ChevronRight, Info, ShieldAlert, Zap, Droplets, Leaf, Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Drug {
  id: string;
  name: string;
  streetNames: string;
  classification: string;
  icon: React.ReactNode;
  iconBg: string;
  shortTerm: string[];
  withdrawal: string[];
  longTerm?: string[];
  howUsed?: string[];
  color: string;
  borderColor: string;
  bgColor: string;
}

const drugs: Drug[] = [
  {
    id: 'dagga',
    name: 'Dagga (Cannabis)',
    streetNames: 'Marijuana, Weed, Ganja, Bankies',
    classification: 'Depressant / Hallucinogen',
    icon: <Leaf className="h-6 w-6" />,
    iconBg: 'bg-green-100 text-green-700',
    shortTerm: ['Bloodshot red eyes', 'Increased sleep', 'Mood changes', 'Dry mouth', 'Impaired judgement', 'Memory loss'],
    withdrawal: ['Cravings & thirst', 'Strange vivid dreams', 'Irritability & anger', 'Restlessness', 'Depression & anxiety'],
    howUsed: ['Smoked in joints or pipes', 'Mixed with Mandrax/Heroin (White pipe)', 'Brewed as tea or mixed in food'],
    color: 'text-green-700',
    borderColor: 'border-green-200',
    bgColor: 'bg-green-50',
  },
  {
    id: 'heroin',
    name: 'Heroin',
    streetNames: 'Smack, H, Horse, Junk',
    classification: 'Opioid',
    icon: <Pill className="h-6 w-6" />,
    iconBg: 'bg-purple-100 text-purple-700',
    shortTerm: ['Dry mouth', 'Warm flushing of skin', 'Heavy feeling in limbs', 'Nausea & vomiting', 'Clouded mental functioning', 'Slowed speech'],
    withdrawal: ['Severe muscle & joint pain', 'Sleep problems', 'Diarrhoea & vomiting', 'Cold flashes with goose bumps', 'Uncontrollable leg movements'],
    longTerm: ['Collapsed veins', 'Liver & kidney disease', 'Lung complications', 'Mental disorders', 'Sexual dysfunction', 'Coma or death'],
    howUsed: ['Injected', 'Sniffed / snorted', 'Smoked', 'Mixed with Crack Cocaine (speedballing)'],
    color: 'text-purple-700',
    borderColor: 'border-purple-200',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'tik',
    name: 'Methamphetamine (Tik)',
    streetNames: 'Tik, Crystal Meth, Ice, Speed',
    classification: 'Stimulant',
    icon: <Zap className="h-6 w-6" />,
    iconBg: 'bg-red-100 text-red-700',
    shortTerm: ['High energy levels', 'Over-alertness', 'Uncontrollable jerking', 'Euphoria', 'Increased physical activity'],
    withdrawal: ['Insomnia', 'Hallucinations', 'Anxiety & paranoia', 'Convulsions (can be fatal)'],
    longTerm: ['Brain damage', 'Severe tooth decay (meth mouth)', 'Liver, kidney & lung damage', 'Depression', 'Increased heart rate'],
    howUsed: ['Snorting', 'Smoking', 'Injecting'],
    color: 'text-red-700',
    borderColor: 'border-red-200',
    bgColor: 'bg-red-50',
  },
  {
    id: 'mandrax',
    name: 'Mandrax',
    streetNames: 'Buttons, Smarties, MX',
    classification: 'Depressant / Sedative',
    icon: <Pill className="h-6 w-6" />,
    iconBg: 'bg-amber-100 text-amber-700',
    shortTerm: ['Appears tired/sleepy', 'Poor co-ordination', 'Slurring of words', 'Restlessness'],
    withdrawal: ['Rapid weight loss', 'Headaches', 'Serious emotional problems', 'Depression & insomnia', 'Epilepsy', 'Liver impairment'],
    howUsed: ['Crushed and mixed with Dagga', 'Smoked in bottleneck (White pipe)', 'Tablet form'],
    color: 'text-amber-700',
    borderColor: 'border-amber-200',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'cocaine',
    name: 'Cocaine / Crack',
    streetNames: 'Coke, Snow, Rocks, Freebase',
    classification: 'Stimulant',
    icon: <Flame className="h-6 w-6" />,
    iconBg: 'bg-orange-100 text-orange-700',
    shortTerm: ['Happiness & excitement', 'Self-confidence', 'Alertness', 'Hallucination (high dose)'],
    withdrawal: ['Depression', 'Fatigue', 'Increased appetite', 'Vivid unpleasant dreams'],
    howUsed: ['Sniffed (cocaine powder)', 'Smoked (crack rock form)', 'Injected'],
    color: 'text-orange-700',
    borderColor: 'border-orange-200',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'alcohol',
    name: 'Alcohol',
    streetNames: 'Booze, Liquor, Drink',
    classification: 'Depressant',
    icon: <Droplets className="h-6 w-6" />,
    iconBg: 'bg-blue-100 text-blue-700',
    shortTerm: ['Impaired judgement', 'Reduced inhibitions', 'Slurred speech', 'Loss of co-ordination', 'Memory blackouts'],
    withdrawal: ['Tremors', 'Anxiety & agitation', 'Sweating & nausea', 'Seizures', 'Delirium tremens (severe)'],
    longTerm: ['Liver disease', 'Heart damage', 'Brain damage', 'Cancer risk', 'Social & relationship damage'],
    color: 'text-blue-700',
    borderColor: 'border-blue-200',
    bgColor: 'bg-blue-50',
  },
];

export default function DrugInfoSection() {
  const [selectedDrug, setSelectedDrug] = useState<string | null>(null);

  return (
    <section id="drug-info" className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <AlertTriangle className="h-4 w-4" />
            Understanding Substances
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Know the <span className="text-gradient-gold">Facts</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Knowledge is power. Understanding the substances, their effects, and withdrawal
            symptoms is the first step toward making informed decisions. We&apos;re here to help you navigate this information.
          </p>
        </motion.div>

        {/* Drug Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          {drugs.map((drug, i) => (
            <motion.button
              key={drug.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedDrug(selectedDrug === drug.id ? null : drug.id)}
              className={`group relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                selectedDrug === drug.id
                  ? `${drug.borderColor} ${drug.bgColor} shadow-premium-md`
                  : 'border-gray-100 hover:border-gray-200 bg-white shadow-premium-sm hover:shadow-premium-md'
              }`}
            >
              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]`}>
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <span className={drug.color}>{drug.icon}</span>
              </div>
              <h4 className={`font-serif font-bold text-sm sm:text-base text-center ${drug.color} tracking-tight`}>
                {drug.name.split('(')[0].trim()}
              </h4>
              <p className="text-[10px] text-muted-foreground text-center mt-1">
                {drug.classification}
              </p>
              <ChevronRight className={`h-4 w-4 mx-auto mt-2 transition-transform ${selectedDrug === drug.id ? 'rotate-90' : ''} text-muted-foreground`} />
            </motion.button>
          ))}
        </div>

        {/* Selected Drug Detail */}
        <AnimatePresence mode="wait">
          {selectedDrug && (() => {
            const drug = drugs.find((d) => d.id === selectedDrug)!;
            return (
              <motion.div
                key={selectedDrug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className={`shadow-premium-2xl border-2 ${drug.borderColor} overflow-hidden`}>
                  {/* Header */}
                  <div className={`${drug.bgColor} p-6 sm:p-8 border-b ${drug.borderColor}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center`}>
                        <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                        <span className={drug.color}>{drug.icon}</span>
                      </div>
                      <div>
                        <h3 className={`font-serif text-2xl font-bold ${drug.color} tracking-tight`}>
                          {drug.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Street names: {drug.streetNames}
                        </p>
                        <p className="text-xs font-medium mt-1">
                          Classification: <span className={drug.color}>{drug.classification}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* How it's used */}
                      {drug.howUsed && (
                        <div>
                          <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2 tracking-tight">
                            <Eye className="h-4 w-4 text-sanca-green" />
                            How It&apos;s Used
                          </h5>
                          <ul className="space-y-2">
                            {drug.howUsed.map((use) => (
                              <li key={use} className="text-sm text-muted-foreground flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-sanca-green mt-1.5 flex-shrink-0" />
                                {use}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Short-term effects */}
                      <div>
                        <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2 tracking-tight">
                          <Zap className="h-4 w-4 text-sanca-gold" />
                          Short-Term Effects
                        </h5>
                        <ul className="space-y-2">
                          {drug.shortTerm.map((effect) => (
                            <li key={effect} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${drug.color.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`} />
                              {effect}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Withdrawal symptoms */}
                      <div>
                        <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2 tracking-tight">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          Withdrawal Symptoms
                        </h5>
                        <ul className="space-y-2">
                          {drug.withdrawal.map((symptom) => (
                            <li key={symptom} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Long-term effects */}
                    {drug.longTerm && (
                      <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200">
                        <h5 className="font-semibold text-sm text-red-700 mb-2 flex items-center gap-2 tracking-tight">
                          <ShieldAlert className="h-4 w-4" />
                          Long-Term Effects
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {drug.longTerm.map((effect) => (
                            <span
                              key={effect}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200"
                            >
                              {effect}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-sanca-green hover:bg-sanca-green-dark text-white"
                      >
                        Take the Self-Assessment
                      </Button>
                      <a
                        href="tel:0125421121"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-sanca-green/30 text-sanca-green font-medium text-sm hover:bg-sanca-green/5 transition-colors"
                      >
                        <Info className="h-4 w-4" />
                        Speak to a Professional
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="p-4 sm:p-6 rounded-2xl bg-sanca-green-dark text-white text-center">
            <p className="font-serif text-lg sm:text-xl font-bold mb-2">
              The real cost is not rehab — it&apos;s waiting too long.
            </p>
            <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
              The missed workdays, broken trust at home, and emergency medical bills that come
              from waiting far exceed the cost of getting help today. You deserve support — reach out now.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
