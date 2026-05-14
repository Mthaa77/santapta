'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, X, CheckCircle2, ChevronDown, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MythData {
  id: number;
  myth: string;
  fact: string;
  detail: string;
}

const myths: MythData[] = [
  {
    id: 1,
    myth: 'Addiction is a choice — you just need willpower.',
    fact: 'Addiction is a recognised chronic brain disease, not a failure of character.',
    detail:
      'Addiction physically alters brain chemistry, particularly the reward, motivation, and memory pathways. The DSM-5 classifies it as Substance Use Disorder — a medical condition, not a moral failing. Expecting willpower alone to reverse structural brain changes is like expecting it to cure diabetes. Compassionate, evidence-based treatment is what truly makes the difference.',
  },
  {
    id: 2,
    myth: 'Only hard drugs like heroin are addictive.',
    fact: 'Alcohol, prescription medication, and even dagga can be deeply addictive.',
    detail:
      'In South Africa, alcohol remains the primary substance of abuse, responsible for more treatment admissions than all other drugs combined. Prescription opioids, sedatives, and cannabis (dagga) all carry significant addiction potential. Over-the-counter codeine-based painkillers are an escalating concern across our communities. No substance is automatically "safe" — what matters is how it affects you.',
  },
  {
    id: 3,
    myth: 'You can\'t be addicted if you have a job.',
    fact: 'High-functioning addiction is real, common, and deeply dangerous.',
    detail:
      'Many people maintain employment and outward appearances while struggling with substance use disorder. High-functioning addiction often goes untreated for longer because it hides behind success, increasing the risk of sudden health crises, workplace accidents, and delayed intervention. Professional achievement does not provide immunity from addiction — and seeking help is a sign of strength, not weakness.',
  },
  {
    id: 4,
    myth: 'Rehab is only for wealthy people.',
    fact: 'SANCA serves everyone — regardless of financial means.',
    detail:
      'SANCA Pretoria operates on a non-profit basis and is registered with the Department of Social Development. Medical aid covers inpatient treatment as a Prescribed Minimum Benefit (PMB), and for those without medical aid, subsidised options are available to ensure cost is never a barrier. No one is ever turned away based on their financial status — that is our promise to the community.',
  },
  {
    id: 5,
    myth: 'Once an addict, always an addict.',
    fact: 'Recovery is entirely possible — and sustainable with the right support.',
    detail:
      'Research consistently shows that people can and do recover, going on to lead full, meaningful lives. With evidence-based treatment, ongoing aftercare, and family support, long-term remission is achievable. SANCA\'s aftercare programme and support groups help maintain recovery for years after treatment. Recovery is a journey of hope — not a life sentence.',
  },
  {
    id: 6,
    myth: 'Dagga is harmless — it\'s just a plant.',
    fact: 'Modern dagga is far more potent and harmful than many realise.',
    detail:
      'Today\'s cannabis strains contain significantly higher THC concentrations than in previous generations — often 3 to 5 times stronger. The South African Community Epidemiology Network on Drug Use (SACENDU) reports dagga as the second most common substance driving treatment admissions nationally. Chronic use is linked to psychosis, anxiety, and motivational syndrome, particularly in adolescents whose brains are still developing.',
  },
  {
    id: 7,
    myth: 'Sending someone to rehab against their will doesn\'t work.',
    fact: 'Research shows that treatment can be effective even when initially involuntary.',
    detail:
      'Studies demonstrate that outcomes for involuntary and voluntary treatment are broadly comparable. The act of entering treatment — regardless of initial motivation — can catalyse genuine, lasting change. Under South African law, the Prevention and Treatment of Drug Dependency Act allows for compulsory treatment when a person is a danger to themselves or others. Sometimes, starting the journey is the hardest part — and that\'s okay.',
  },
  {
    id: 8,
    myth: 'You have to hit rock bottom before getting help.',
    fact: 'Early intervention leads to far better outcomes — and can save your life.',
    detail:
      'Waiting for "rock bottom" can be truly dangerous, even fatal. Research clearly shows that earlier intervention produces better treatment outcomes and reduces long-term harm. You do not need to lose everything before seeking help — in fact, addressing substance use early prevents devastating consequences to your health, relationships, and livelihood. The best time to reach out is now, whatever your situation looks like.',
  },
];

export default function MythsSection() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="myths" className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient">
      {/* Decorative sage gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sanca-sage/30 rounded-full translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-sanca-sage/20 rounded-full -translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sanca-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/10 text-sanca-gold-dark text-sm font-medium mb-4">
            <Lightbulb className="h-4 w-4" />
            Myth Busters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            The Truth About <span className="text-gradient-gold">Addiction & Recovery</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Harmful misconceptions keep far too many people from reaching out for the help
            they deserve. Let&apos;s gently set aside the myths and replace them with honest,
            evidence-based facts — because the truth, spoken with compassion, can truly save lives.
          </p>
        </motion.div>

        {/* Myth Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {myths.map((item, i) => {
            const isExpanded = expandedIds.has(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="hover-lift"
              >
                <Card
                  className={`overflow-hidden cursor-pointer transition-all duration-300 border-0 shadow-premium-sm hover:shadow-premium-md ${
                    isExpanded ? 'ring-1 ring-sanca-sage' : ''
                  }`}
                  onClick={() => toggleExpand(item.id)}
                >
                  {/* Collapsed state — always visible */}
                  <div
                    className={`p-5 sm:p-6 border-l-4 ${
                      isExpanded ? 'border-red-400 bg-red-50/50' : 'border-red-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-xs font-bold tracking-wide flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3" />
                        MYTH
                      </span>
                      <p className={`font-medium text-foreground leading-relaxed ${isExpanded ? 'line-through decoration-red-400 decoration-2' : ''}`}>
                        {item.myth}
                      </p>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded state — fact + detail */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-l-4 border-sanca-green bg-sanca-sage/30 p-5 sm:p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sanca-green/10 text-sanca-green text-xs font-bold tracking-wide flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="h-3 w-3" />
                              FACT
                            </span>
                            <p className="font-semibold text-sanca-green-dark leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                          <div className="ml-0 sm:ml-0 pl-0 border-l-0">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-4 text-xs text-sanca-gold-dark">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            <span>Click to collapse</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="max-w-lg mx-auto p-6 sm:p-8 rounded-2xl bg-sanca-sage/30 border border-sanca-green/10">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-2">
              Know the facts. Save a life.
            </h3>
            <p className="text-sm text-muted-foreground mb-5">
              If you or someone you know is struggling, reaching out for help is one of the bravest
              and most caring things you can do. We&apos;re here to walk that path alongside you.
            </p>
            <Button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-gold-enhanced"
              size="lg"
            >
              Get Help Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
