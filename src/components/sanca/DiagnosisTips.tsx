'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle2, HelpCircle, Lightbulb, ArrowRight, ChevronRight, Heart, Shield, Eye, Brain, Users, Home, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DiagnosisTip {
  id: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  signs: string[];
  advice: string;
  action: string;
}

const tips: DiagnosisTip[] = [
  {
    id: 'physical',
    category: 'Physical Signs',
    icon: <Heart className="h-5 w-5" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    signs: [
      'Sudden weight loss or gain',
      'Bloodshot or glazed eyes',
      'Poor coordination or slurred speech',
      'Changes in sleep patterns',
      'Tremors or shaking',
      'Needle marks or track lines',
    ],
    advice: 'Physical changes are often the first visible signs that something may be amiss. If you notice these in yourself or someone you care about, please don\'t dismiss them — your body may be telling you something important. A simple conversation with a medical professional can bring clarity and relief.',
    action: 'Speak to a medical professional today',
  },
  {
    id: 'behavioural',
    category: 'Behavioural Changes',
    icon: <Brain className="h-5 w-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    signs: [
      'Increased secrecy or lying',
      'Neglecting responsibilities',
      'Sudden mood swings',
      'Withdrawing from family & friends',
      'Financial problems or borrowing money',
      'Legal troubles',
    ],
    advice: 'Behavioural shifts can be subtle at first, which is exactly why they\'re so easy to overlook. Trust your instincts — if something feels different or wrong, it probably deserves a closer look. Reaching out for a confidential conversation doesn\'t commit you to anything; it simply opens a door to understanding.',
    action: 'Contact SANCA for a confidential chat',
  },
  {
    id: 'social',
    category: 'Social Impact',
    icon: <Users className="h-5 w-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    signs: [
      'Relationship breakdown',
      'Loss of interest in hobbies',
      'Changing friend groups',
      'Isolation from family',
      'Conflict at home or work',
      'Neglecting children or dependants',
    ],
    advice: 'Addiction doesn\'t only affect one person — its impact ripples outward through families, friendships, and entire communities. Seeking help is not just for you; it\'s an act of care for everyone who loves you. You deserve to have those relationships whole and healthy again.',
    action: 'Join a family support session',
  },
  {
    id: 'workplace',
    category: 'Workplace Signs',
    icon: <Briefcase className="h-5 w-5" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    signs: [
      'Frequent absenteeism',
      'Declining work performance',
      'Difficulty concentrating',
      'Missed deadlines',
      'Conflicts with colleagues',
      'Financial requests at work',
    ],
    advice: 'If you\'re an employer or colleague who\'s concerned about someone, you don\'t have to navigate that difficult conversation alone. SANCA\'s Employee Assistance Programme (EAP) referrals and workplace programmes offer professional, discreet support — helping you help them without overstepping.',
    action: 'Learn about EAP workplace referrals',
  },
  {
    id: 'youth',
    category: 'Youth Warning Signs',
    icon: <Eye className="h-5 w-5" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    signs: [
      'Declining school grades',
      'New peer group influence',
      'Unusual smells on clothing',
      'Hidden paraphernalia',
      'Extreme rebellion or defiance',
      'Sleeping at odd hours',
    ],
    advice: 'It\'s a common hope that teenagers will simply "grow out of it," but the evidence tells a different story. Early intervention gives young people the very best chance for lasting change. SANCA\'s Lapalamé Youth Drug Unit is specially designed for adolescents — offering age-appropriate care in a setting where they feel safe and understood.',
    action: 'Explore the Lapalamé Youth Programme',
  },
  {
    id: 'family',
    category: 'For Families',
    icon: <Home className="h-5 w-5" />,
    color: 'text-sanca-green',
    bgColor: 'bg-sanca-sage',
    borderColor: 'border-sanca-green/20',
    signs: [
      'Feeling helpless or overwhelmed',
      'Walking on eggshells constantly',
      'Enabling behaviours without realising',
      'Emotional exhaustion',
      'Financial strain from the addiction',
      'Impact on other family members',
    ],
    advice: 'You are not alone in this, even though it may feel that way. SANCA\'s family support sessions provide a compassionate space where you can learn how to support your loved one\'s recovery while also protecting your own emotional and mental wellbeing. Caring for yourself isn\'t selfish — it\'s essential.',
    action: 'Attend a family support session',
  },
];

export default function DiagnosisTips() {
  const [activeTip, setActiveTip] = useState<string | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-sanca-cream dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      <div className="absolute top-0 left-0 w-80 h-80 bg-sanca-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/10 dark:bg-sanca-gold/15 text-sanca-gold-dark dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Lightbulb className="h-4 w-4" />
            Know the Signs
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Recognising the <span className="text-gradient-gold">Signs That Matter Most</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re worried about yourself, someone you love, a colleague, or your child —
            knowing what to look for is the first brave step. Trust yourself: if something feels
            wrong, it&apos;s always worth exploring further. You don&apos;t need to be certain — you just
            need to be willing to ask the question.
          </p>
        </motion.div>

        {/* Tip Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {tips.map((tip, i) => (
            <motion.button
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTip(activeTip === tip.id ? null : tip.id)}
              className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                activeTip === tip.id
                  ? `${tip.bgColor} ${tip.borderColor} shadow-premium-md`
                  : 'bg-white dark:bg-[#0D3B22] border-gray-100 shadow-premium-sm hover:shadow-premium-md'
              }`}
            >
              <div className="relative w-12 h-12 rounded-full border border-sanca-gold/30 bg-gradient-to-b from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-3 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow">
                <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <span className={tip.color}>{tip.icon}</span>
              </div>
              <h4 className={`font-serif font-bold tracking-tight text-sm ${tip.color}`}>{tip.category}</h4>
              <p className="text-xs text-muted-foreground mt-1">{tip.signs.length} warning signs</p>
              <ChevronRight className={`h-4 w-4 mt-2 transition-transform ${activeTip === tip.id ? 'rotate-90' : ''} ${tip.color}`} />
            </motion.button>
          ))}
        </div>

        {/* Expanded Tip Detail */}
        <AnimatePresence mode="wait">
          {activeTip && (() => {
            const tip = tips.find((t) => t.id === activeTip)!;
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Card className={`shadow-premium-lg dark:bg-[#0D3B22] border-2 ${tip.borderColor} overflow-hidden`}>
                  <div className={`${tip.bgColor} p-6 border-b ${tip.borderColor}`}>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full border border-sanca-gold/30 bg-gradient-to-b from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow">
                        <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                        <span className={tip.color}>{tip.icon}</span>
                      </div>
                      <div>
                        <h3 className={`font-serif text-xl font-bold tracking-tight ${tip.color}`}>
                          {tip.category}
                        </h3>
                        <p className="text-xs text-muted-foreground">Important signs to be aware of</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {tip.signs.map((sign, i) => (
                        <motion.div
                          key={sign}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className={`flex items-start gap-2 p-3 rounded-xl ${tip.bgColor} border ${tip.borderColor}`}
                        >
                          <AlertTriangle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tip.color}`} />
                          <span className="text-sm text-foreground">{sign}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-sanca-green/5 border border-sanca-green/10 mb-4">
                      <p className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-lg leading-none">💡</span>
                        {tip.advice}
                      </p>
                    </div>

                    <Button
                      onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`bg-sanca-green hover:bg-sanca-green-dark text-white`}
                    >
                      {tip.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
}
