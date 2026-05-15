'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ClipboardCheck, UserCheck, FileText, CalendarCheck, HeartPulse, ArrowRight, CheckCircle2, AlertCircle, CreditCard, Clock, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const steps = [
  {
    step: 1,
    title: 'Reach Out to Us',
    icon: Phone,
    color: 'bg-sanca-green',
    description: 'Reach out to us via phone, WhatsApp, or our website chatbot.',
    details: [
      'Call 012 542 1121 (24/7)',
      'WhatsApp 081 318 1511',
      'Use the website chatbot',
      'Receive a callback within one business day',
    ],
    tip: 'You don\'t need a referral — anyone can reach out directly.',
  },
  {
    step: 2,
    title: 'Intake Call',
    icon: MessageCircle,
    color: 'bg-sanca-emerald',
    description: 'Answer basic questions so we can understand your needs.',
    details: [
      'Brief screening questions',
      'Medical aid verification starts',
      'Programme suitability assessed',
      'Assessment appointment scheduled',
    ],
    tip: 'Have your medical aid details ready if applicable.',
  },
  {
    step: 3,
    title: 'Medical Aid Verification',
    icon: CreditCard,
    color: 'bg-sanca-gold',
    description: 'SANCA confirms your cover with your medical aid scheme.',
    details: [
      'We contact your medical aid directly',
      'Confirm coverage and benefits',
      'PMB benefits apply (legal right)',
      'No co-payment for additional days',
    ],
    tip: 'Under SA law, substance use disorders qualify as PMB — medical aids must fund treatment.',
  },
  {
    step: 4,
    title: 'Assessment',
    icon: ClipboardCheck,
    color: 'bg-sanca-green',
    description: 'Attend an in-person assessment to determine the best programme for you.',
    details: [
      'Available 08:00–12:00 daily',
      'Thorough psychosocial evaluation',
      'Medical assessment completed',
      'Individual treatment pathway determined',
    ],
    tip: 'Patients from far can be admitted after 14:00 or on weekends.',
  },
  {
    step: 5,
    title: 'Treatment Plan',
    icon: FileText,
    color: 'bg-sanca-emerald',
    description: 'Your Individual Treatment Plan (ITP) is created with your assigned therapist.',
    details: [
      'Personalised recovery goals',
      'Therapy modalities selected',
      'Multi-professional team assigned',
      'Family involvement planned',
    ],
    tip: 'Your ITP is reviewed and adjusted throughout your stay.',
  },
  {
    step: 6,
    title: 'Admission',
    icon: UserCheck,
    color: 'bg-sanca-gold',
    description: 'Formal admission — payment or medical aid authorisation processed.',
    details: [
      'Cash payment or medical aid authorisation',
      '7-day-a-week admissions',
      'Alcohol admissions: 06:00–22:00',
      'Welcome orientation completed',
    ],
    tip: 'First 2 weeks: no visitors. This is for your focused recovery.',
  },
  {
    step: 7,
    title: 'Treatment Begins',
    icon: HeartPulse,
    color: 'bg-sanca-green',
    description: '4–6 week inpatient programme commences with 24-hour care.',
    details: [
      'Medical detoxification if needed',
      'Daily therapy sessions',
      'Group & individual therapy',
      'Occupational & leisure therapy',
    ],
    tip: 'Every patient emerges with renewed clarity in mind, body, and soul.',
  },
  {
    step: 8,
    title: 'Graduation & Aftercare',
    icon: CalendarCheck,
    color: 'bg-sanca-emerald',
    description: 'Discharge planning from week 3 — aftercare programme set up for ongoing support.',
    details: [
      'Relapse prevention skills',
      'Self-help group integration (AA/NA)',
      'Ongoing outpatient check-ins',
      'Family support groups',
    ],
    tip: 'Aftercare is the lifeline that keeps long-term recovery alive.',
  },
];

const visitingRules = [
  { period: 'First 2 weeks', rule: 'No visitors allowed', icon: AlertCircle, color: 'text-red-500' },
  { period: 'Week 3 onwards', rule: 'Visitors welcome', icon: CheckCircle2, color: 'text-sanca-emerald' },
  { period: 'First 7 days', rule: 'No phone calls to patients', icon: AlertCircle, color: 'text-sanca-gold' },
];

export default function AdmissionsSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="admissions" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      <div className="absolute top-20 left-0 w-80 h-80 bg-sanca-green/5 rounded-full -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <CalendarCheck className="h-4 w-4" />
            Getting Started
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient section-heading-lg">
            Your Pathway to <span className="text-gradient-gold">Recovery</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We&apos;ve made getting help as straightforward and welcoming as possible — because the decision to reach out is brave enough without unnecessary barriers. From your very first phone call, you&apos;ll find a warm, compassionate voice ready to guide you every step of the way.
          </p>
        </motion.div>

        {/* Interactive Stepper */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step List */}
          <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <motion.button
                  key={step.step}
                  onClick={() => setActiveStep(i)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-sanca-green text-white shadow-premium-md'
                      : 'bg-white hover:bg-sanca-green/5 shadow-premium-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`relative w-10 h-10 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-shadow duration-300 ${
                        isActive
                          ? 'border-sanca-gold/40 bg-white/20 shadow-[0_4px_12px_rgba(27,94,59,0.12)]'
                          : 'border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5'
                      }`}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                      <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-sanca-green'}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-semibold ${isActive ? 'text-sanca-gold-light' : 'text-sanca-gold-dark'}`}>
                        Step {step.step}
                      </p>
                      <p className={`font-medium text-sm ${isActive ? 'text-white' : 'text-foreground'}`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Step Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-premium-xl border-0 overflow-hidden">
                  <div className={`p-6 sm:p-8 bg-gradient-to-r ${steps[activeStep].color} text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                        {(() => {
                          const Icon = steps[activeStep].icon;
                          return <Icon className="h-7 w-7 text-sanca-gold-light" />;
                        })()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/70">Step {steps[activeStep].step} of {steps.length}</p>
                        <h3 className="font-serif text-2xl font-bold tracking-tight">{steps[activeStep].title}</h3>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {steps[activeStep].description}
                    </p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {steps[activeStep].details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-sanca-emerald flex-shrink-0" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/20">
                      <p className="text-sm text-sanca-gold-dark flex items-start gap-2">
                        <span className="text-lg leading-none">💡</span>
                        {steps[activeStep].tip}
                      </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                      >
                        Previous
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        className="bg-sanca-green hover:bg-sanca-green-dark text-white"
                      >
                        Next Step
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Visiting Rules & Quick Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Visiting Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 shadow-premium-md border-0 h-full">
              <h4 className="font-serif text-xl font-bold tracking-tight text-sanca-green-dark mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-sanca-gold" />
                Visiting Rules
              </h4>
              <div className="space-y-3">
                {visitingRules.map((rule) => {
                  const Icon = rule.icon;
                  return (
                    <div key={rule.period} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <Icon className={`h-5 w-5 ${rule.color} flex-shrink-0`} />
                      <div>
                        <p className="font-medium text-sm text-foreground">{rule.period}</p>
                        <p className="text-xs text-muted-foreground">{rule.rule}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Quick Admission Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 shadow-premium-md border-0 h-full bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white">
              <h4 className="font-serif text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-sanca-gold-light" />
                Admission Times
              </h4>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                  <p className="text-xs text-white/60">General Assessments</p>
                  <p className="font-semibold">08:00–12:00 daily</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                  <p className="text-xs text-white/60">Alcohol Admissions</p>
                  <p className="font-semibold">06:00–16:00 & 19:00–22:00</p>
                </div>
                <div className="p-3 rounded-lg bg-white/10 border border-white/10">
                  <p className="text-xs text-white/60">Remote Patients</p>
                  <p className="font-semibold">After 14:00 or weekends</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:0125421121"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sanca-gold text-white font-medium text-sm hover:bg-sanca-gold-dark transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/27813181511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sanca-emerald text-white font-medium text-sm hover:bg-sanca-emerald/90 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Clinical Rationale — From Research */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark dark:text-white tracking-tight">
              Why These <span className="text-gradient-gold">Rules</span> Exist
            </h3>
            <p className="text-muted-foreground dark:text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Every rule at Castle Carey is grounded in clinical evidence and designed to give you the strongest possible foundation for lasting recovery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { rule: 'First 7-Day Communication Ban', rationale: 'To facilitate neurological stabilisation and minimise external triggers during the most vulnerable phase of detoxification.', icon: Phone },
              { rule: '14-Day No-Visitation Period', rationale: 'To allow the patient to bond with the therapeutic group and adjust to the clinical routine — building the internal motivation that sustains recovery.', icon: Users },
              { rule: '4–6 Week Programme Duration', rationale: 'Aligns with behavioural change models and the physical time required for brain recovery from substance-induced neuroadaptation.', icon: Clock },
              { rule: 'Medical Aid Navigation', rationale: 'Castle Carey covers the final 7 days if the insurer only pays for 21 or 24 days — ensuring you complete the full curriculum regardless of cover limits.', icon: CreditCard },
              { rule: '60+ Medical Certification', rationale: 'Prevents medical complications in patients with co-morbidities like hypertension or diabetes, where withdrawal stress can be life-threatening.', icon: HeartPulse },
              { rule: 'DSD Quarterly Compliance', rationale: 'The Department of Social Development conducts quarterly monitoring to ensure adherence to Minimum Norms and Standards — your guarantee of quality care.', icon: Shield },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.rule}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Card className="p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-sanca-green/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-sanca-green" />
                      </div>
                      <h5 className="font-serif font-bold text-sanca-green-dark dark:text-white text-sm tracking-tight leading-snug">{item.rule}</h5>
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-white/60 leading-relaxed">{item.rationale}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
