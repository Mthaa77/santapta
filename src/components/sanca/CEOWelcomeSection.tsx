'use client';

import { motion } from 'framer-motion';
import { Quote, Feather } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CEOWelcomeSection() {
  return (
    <section id="welcome" className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-gold/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-green/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Message Card */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
                  <Feather className="h-4 w-4" />
                  A Message from Our Leadership
                </span>
              </div>

              <Card className="shadow-premium-xl border-0 overflow-hidden relative">
                {/* Top accent line */}
                <div className="h-1.5 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

                <div className="p-6 sm:p-8 lg:p-10 relative">
                  {/* Decorative quote mark */}
                  <span className="absolute top-4 left-6 sm:top-6 sm:left-8 text-7xl sm:text-8xl font-serif text-sanca-gold/10 leading-none select-none">
                    &ldquo;
                  </span>

                  <div className="relative">
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-sanca-green-dark dark:text-white mb-6 leading-snug">
                      Welcome to <span className="text-gradient-gold">SANCA Pretoria</span>
                    </h2>

                    <div className="space-y-4 text-foreground/85 dark:text-white/80 text-base sm:text-lg leading-relaxed">
                      <p>
                        For nearly seven decades, SANCA Pretoria has stood as a beacon of hope for
                        individuals and families affected by substance misuse. What began in 1957 as
                        one of eight founding societies of SANCA National has grown into a
                        multi-clinic operation serving communities across Pretoria, Soshanguve, and
                        Hammanskraal.
                      </p>
                      <p>
                        We believe that every person — regardless of background, circumstance, or
                        financial means — deserves access to compassionate, evidence-based treatment.
                        Addiction is not a moral failing; it is a treatable medical condition, and
                        recovery is absolutely possible with the right support.
                      </p>
                      <p>
                        Whether you are reaching out for yourself, a loved one, or simply seeking
                        guidance, I want you to know: <span className="font-semibold text-sanca-green dark:text-sanca-gold">you are not alone, and it is never too
                        late to begin again.</span> Our dedicated team of social workers, medical
                        professionals, and counsellors is here to walk alongside you every step of
                        the way.
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8 pt-6 border-t border-sanca-gold/15">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-sanca-green to-sanca-green-dark flex items-center justify-center shadow-premium-md">
                            <span className="text-white font-serif font-bold text-xl sm:text-2xl">CEO</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-serif text-lg sm:text-xl font-bold text-sanca-green-dark dark:text-white">
                            Advocate L. Mathebula
                          </p>
                          <p className="text-sm text-sanca-gold-dark dark:text-sanca-gold font-medium">
                            Chief Executive Officer
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-white/60 mt-1">
                            SANCA Pretoria &mdash; Since 1957
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right: Values & Impact */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 shadow-premium-md border-0 bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white relative overflow-hidden hover-lift">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Quote className="h-6 w-6 text-sanca-gold-light" />
                  </div>
                  <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed italic font-serif mb-4">
                    &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from the
                    chains of addiction.&rdquo;
                  </blockquote>
                  <p className="text-sanca-gold-light text-sm font-medium">— SANCA Pretoria Mission</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Card className="p-6 shadow-premium-md border-0 hover-lift">
                <h4 className="font-serif text-lg font-bold text-sanca-green-dark dark:text-white mb-4">
                  Our Commitment to You
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Confidential & Judgement-Free', detail: 'Every interaction is treated with the utmost privacy and respect.' },
                    { label: 'Affordable for Everyone', detail: 'Medical aid accepted, PMB-covered, and subsidised options available.' },
                    { label: 'Evidence-Based Treatment', detail: 'Clinical programmes grounded in research and professional expertise.' },
                    { label: 'Whole-Family Approach', detail: 'Healing extends beyond the individual to restore families and communities.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sanca-gold mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-sanca-green-dark dark:text-white">{item.label}</p>
                        <p className="text-xs text-muted-foreground dark:text-white/60">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-5 shadow-premium-sm border-0 bg-sanca-cream dark:bg-[#0D3B22]">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark dark:text-white">68+</p>
                    <p className="text-[11px] text-muted-foreground dark:text-white/60">Years of Service</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark dark:text-white">1000+</p>
                    <p className="text-[11px] text-muted-foreground dark:text-white/60">Patients Annually</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold font-serif text-sanca-green-dark dark:text-white">3</p>
                    <p className="text-[11px] text-muted-foreground dark:text-white/60">Clinic Locations</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
