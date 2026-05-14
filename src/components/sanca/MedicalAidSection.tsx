'use client';

import { motion } from 'framer-motion';
import { CreditCard, Shield, CheckCircle2, AlertCircle, Heart, ArrowRight, Info, Scale, Banknote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const medicalAidPoints = [
  {
    icon: CheckCircle2,
    title: 'Medical Aid Accepted',
    description: 'We accept medical aid authorisation from most major South African medical schemes.',
    color: 'text-sanca-emerald',
    bg: 'bg-sanca-emerald/10',
  },
  {
    icon: Shield,
    title: 'PMB Coverage Applies',
    description: 'Under the Medical Schemes Act, substance use disorders qualify as Prescribed Minimum Benefits — medical aids are legally required to fund treatment.',
    color: 'text-sanca-green',
    bg: 'bg-sanca-green/10',
  },
  {
    icon: Banknote,
    title: 'No Co-Payment for Extra Days',
    description: 'Medical Aid funds 21 or 24 days. If you need the full 4–6 week programme, there is NO co-payment for additional days beyond medical aid funding.',
    color: 'text-sanca-gold',
    bg: 'bg-sanca-gold/10',
  },
  {
    icon: Heart,
    title: 'Affordable Cash Options',
    description: 'As a non-profit, DSD-registered organisation, our cash rates are the most affordable in the region — significantly lower than private rehabs.',
    color: 'text-sanca-green-light',
    bg: 'bg-sanca-green-light/10',
  },
];

const pmbSteps = [
  {
    step: 1,
    title: 'Contact SANCA',
    desc: 'Call us or WhatsApp — we\'ll start the process immediately.',
  },
  {
    step: 2,
    title: 'We Verify Your Cover',
    desc: 'Our team contacts your medical aid directly to confirm benefits.',
  },
  {
    step: 3,
    title: 'Authorisation Secured',
    desc: 'We handle the paperwork and secure your treatment authorisation.',
  },
  {
    step: 4,
    title: 'Treatment Begins',
    desc: 'Focus on your recovery — we manage the admin throughout.',
  },
];

export default function MedicalAidSection() {
  return (
    <section className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 bg-sanca-gold/5 rounded-full -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/15 text-sanca-gold-dark dark:text-sanca-gold text-sm font-semibold mb-4 shadow-sm border border-sanca-gold/20">
            <CreditCard className="h-4 w-4" />
            Costs & Medical Aid
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark mb-4">
            Affordable <span className="text-gradient-gold">Care</span> for All
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don&apos;t let medical aid confusion hold you back. The real cost is not rehab — it&apos;s the
            missed workdays, broken trust at home, and emergency medical bills that come from
            waiting too long.
          </p>
        </motion.div>

        {/* Key Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {medicalAidPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="p-6 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 h-full">
                  <div className={`w-12 h-12 rounded-xl ${point.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${point.color}`} />
                  </div>
                  <h4 className="font-serif font-bold text-sanca-green-dark mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* PMB Explainer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 sm:p-8 shadow-premium-lg border-0 h-full bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-sanca-gold-light" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">Your Legal Right to Treatment</h3>
                    <p className="text-sm text-white/60">Prescribed Minimum Benefits (PMB)</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/10 mb-6">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Under South Africa&apos;s <strong>Medical Schemes Act</strong>, substance use disorders
                    qualify as a <strong>Prescribed Minimum Benefit (PMB)</strong> condition. This means
                    medical aids are <strong>legally required</strong> to fund treatment — regardless of your
                    plan type.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">All medical schemes must cover PMB conditions in full</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">Applies to all plan types, including hospital plans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">No pre-authorization can be denied for PMB conditions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">Co-payments for PMB conditions are not permitted by law</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* How We Help */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 sm:p-8 shadow-premium-lg border-0 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sanca-gold/10 flex items-center justify-center">
                  <Info className="h-6 w-6 text-sanca-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-sanca-green-dark">How We Handle Medical Aid</h3>
                  <p className="text-sm text-muted-foreground">We manage the entire process for you</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {pmbSteps.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sanca-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-foreground">{step.title}</h5>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/20 mb-4">
                <p className="text-sm text-sanca-gold-dark flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Don&apos;t let medical aid confusion delay your recovery. We handle all the paperwork — you focus on healing.
                </p>
              </div>

              <Button
                onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold"
              >
                Start the Admission Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
