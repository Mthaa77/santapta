'use client';

import { motion } from 'framer-motion';
import { CreditCard, Shield, CheckCircle2, AlertCircle, Heart, ArrowRight, Info, Scale, Banknote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const medicalAidPoints = [
  {
    icon: CheckCircle2,
    title: 'Your Medical Aid Is Welcome Here',
    description: 'We work with most major South African medical schemes so you can focus on what matters most — getting better.',
    color: 'text-sanca-emerald',
    bg: 'bg-sanca-emerald/10',
  },
  {
    icon: Shield,
    title: 'You\'re Legally Protected',
    description: 'Substance use disorders qualify as Prescribed Minimum Benefits under the Medical Schemes Act — your medical aid is legally required to fund your treatment.',
    color: 'text-sanca-green',
    bg: 'bg-sanca-green/10',
  },
  {
    icon: Banknote,
    title: 'No Extra Cost for Extended Care',
    description: 'Medical aid typically covers 21–24 days, but our full programme runs 4–6 weeks. The good news? There is absolutely NO co-payment for those additional days — we cover them for you.',
    color: 'text-sanca-gold',
    bg: 'bg-sanca-gold/10',
  },
  {
    icon: Heart,
    title: 'Affordable Care for Everyone',
    description: 'As a non-profit, DSD-registered organisation, our cash rates are the most affordable in the region — significantly lower than private rehabs, because we believe cost should never stand between you and recovery.',
    color: 'text-sanca-green-light',
    bg: 'bg-sanca-green-light/10',
  },
];

const pmbSteps = [
  {
    step: 1,
    title: 'Reach Out to Us',
    desc: 'Give us a call or send a WhatsApp — we\'ll get things moving right away.'
  },
  {
    step: 2,
    title: 'We Check Your Cover',
    desc: 'Our team contacts your medical aid directly to confirm your benefits — no hassle for you.'
  },
  {
    step: 3,
    title: 'Authorisation Sorted',
    desc: 'We handle all the paperwork and secure your treatment authorisation — it&apos;s what we do best.'
  },
  {
    step: 4,
    title: 'Your Healing Begins',
    desc: 'Now you can focus entirely on getting better — we&apos;ll keep managing the admin from start to finish.'
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/15 text-sanca-gold-dark dark:text-sanca-gold text-sm font-semibold mb-4 shadow-sm border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <CreditCard className="h-4 w-4" />
            Costs & Medical Aid
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Healing You Can <span className="text-gradient-gold">Afford</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Don&apos;t let worries about cost keep you from getting the help you deserve. The true price
            of waiting is far greater — lost workdays, strained relationships, and mounting medical
            emergencies. We&apos;re here to make the financial side simple and transparent, so you can focus entirely on
            what matters most: your healing and wellbeing.
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
                  <div className={`relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-4 transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]`}>
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Icon className={`h-6 w-6 ${point.color}`} />
                  </div>
                  <h4 className="font-serif font-bold text-sanca-green-dark mb-2 tracking-tight">{point.title}</h4>
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
            <Card className="p-6 sm:p-8 shadow-premium-xl border-0 h-full bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Scale className="h-6 w-6 text-sanca-gold-light" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-tight">Your Legal Right to Treatment</h3>
                    <p className="text-sm text-white/60">Prescribed Minimum Benefits — protecting your access to care</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 border border-white/10 mb-6">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Under South Africa&apos;s <strong>Medical Schemes Act</strong>, substance use disorders
                    qualify as a <strong>Prescribed Minimum Benefit (PMB)</strong> condition. This means
                    your medical aid is <strong>legally required</strong> to fund your treatment — no matter
                    what plan you&apos;re on. You have the right to care, and we&apos;ll help you exercise it.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">All medical schemes must cover PMB conditions in full — no exceptions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">Covers every plan type — even hospital-only plans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">Pre-authorization cannot be denied for PMB conditions — it&apos;s your right</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sanca-gold-light flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/80">Co-payments for PMB conditions are not permitted by law — you won&apos;t pay extra</p>
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
                <div className="relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <Info className="h-6 w-6 text-sanca-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-sanca-green-dark tracking-tight">How We Handle Your Medical Aid</h3>
                  <p className="text-sm text-muted-foreground">We take care of everything — so you don&apos;t have to worry</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {pmbSteps.map((step, i) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center font-bold text-sm flex-shrink-0 text-sanca-green">
                      <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                      {step.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-foreground tracking-tight">{step.title}</h5>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/20 mb-4">
                <p className="text-sm text-sanca-gold-dark flex items-start gap-2 leading-relaxed">
                  <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  Don&apos;t let medical aid worries hold you back from getting help. We handle every detail of the paperwork — all you need to do is focus on your healing.
                </p>
              </div>

              <Button
                onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold"
              >
                Let&apos;s Get You Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
