'use client';

import { motion } from 'framer-motion';
import { Quote, Feather } from 'lucide-react';
import Image from 'next/image';
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

              <Card className="shadow-premium-2xl border-0 overflow-hidden relative">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

                <div className="p-8 sm:p-10 lg:p-12 relative">
                  {/* Decorative quote mark */}
                  <span className="absolute top-4 left-6 sm:top-6 sm:left-8 text-7xl sm:text-8xl font-serif text-sanca-gold/10 leading-none select-none">
                    &ldquo;
                  </span>

                  <div className="relative">
                    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-8 leading-snug tracking-tight section-heading">
                      Welcome to <span className="text-gradient-gold">SANCA Pretoria</span>
                    </h2>

                    <div className="space-y-5 text-foreground/90 dark:text-white/85 text-base sm:text-lg leading-relaxed font-light">
                      <p>
                        For nearly seven decades, SANCA Pretoria has stood as a beacon of hope for
                        individuals and families affected by substance misuse. What began in 1957 as
                        one of eight founding societies of SANCA National has grown into a
                        multi-clinic operation serving communities across Pretoria, Soshanguve, and
                        Hammanskraal.
                      </p>
                      <p>
                        Set within tranquil, landscaped gardens, our facilities provide a serene
                        sanctuary where healing begins the moment you arrive. The quiet beauty of
                        our grounds offers a gentle reminder that recovery, like nature, unfolds
                        one step at a time — and that even in the most difficult seasons, new
                        growth is always possible.
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
                        the way — not to judge, but to journey with you toward the life you deserve.
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-10 pt-8 border-t border-sanca-gold/20">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-premium-md border-2 border-sanca-gold/40 relative">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2015%2C%202026%2C%2002_26_26%20PM-Jb5EVZp5BzbDSW5RmzAMfT4TtaPVzu.png"
                              alt="Celeste du Preez"
                              fill
                              className="object-cover object-top"
                              sizes="96px"
                            />
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark dark:text-white tracking-tight">
                            Celeste Du Preez
                          </p>
                          <p className="text-sm sm:text-base text-sanca-gold-dark dark:text-sanca-gold font-semibold mt-1">
                            Centre Manager, Castle Carey Clinic
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/70 mt-2 font-medium">
                            SANCA Pretoria &mdash; Est. 1957
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right: Image, Quote & Commitment */}
          <div className="lg:col-span-2 space-y-5">
            {/* CEO Portrait Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium-2xl border-2 border-white dark:border-[#0D3B22] hover-lift group">
                {/* Gold accent corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 z-10 pointer-events-none">
                  <div className="absolute top-2 left-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
                  <div className="absolute top-2 left-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 z-10 pointer-events-none">
                  <div className="absolute bottom-2 right-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
                </div>

                <div className="relative aspect-[3/4]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2015%2C%202026%2C%2002_26_26%20PM-Jb5EVZp5BzbDSW5RmzAMfT4TtaPVzu.png"
                    alt="Celeste du Preez, Centre Manager of SANCA Castle Carey Clinic, speaking at a SANCA podium"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Marble Logo Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium-2xl border-2 border-white dark:border-[#0D3B22] hover-lift group">
                {/* Gold accent corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 z-10 pointer-events-none">
                  <div className="absolute top-2 left-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
                  <div className="absolute top-2 left-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 z-10 pointer-events-none">
                  <div className="absolute bottom-2 right-2 w-6 h-[2px] bg-sanca-gold/60 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-[2px] h-6 bg-sanca-gold/60 rounded-full" />
                </div>

                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/sanca/sanca-logo-marble.jpeg"
                    alt="SANCA Pretoria official logo on marble background with embossed 3D finish"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Bottom overlay gradient with caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16 pb-4 px-5">
                    <p className="text-white text-sm font-serif font-semibold leading-snug">
                      SANCA Pretoria
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      Official Emblem — Est. 1957
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Card className="p-7 shadow-premium-md border-0 bg-gradient-to-br from-sanca-green-dark to-sanca-green text-white relative overflow-hidden hover-lift">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="relative w-16 h-16 rounded-full border-2 border-sanca-gold/40 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Quote className="h-7 w-7 text-sanca-gold-light" />
                  </div>
                  <blockquote className="text-white/95 text-lg sm:text-xl leading-relaxed italic font-serif mb-5">
                    &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from the
                    chains of addiction.&rdquo;
                  </blockquote>
                  <p className="text-sanca-gold-light text-sm font-semibold tracking-wide">— SANCA Pretoria Mission</p>
                </div>
              </Card>
            </motion.div>

            {/* Commitment Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-7 shadow-premium-md border-0 hover-lift">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark dark:text-white mb-6 tracking-tight">
                  Our Commitment
                </h4>
                <div className="space-y-4">
                  {[
                    { label: 'Confidential & Judgement-Free', detail: 'Every conversation is held in the strictest confidence — a safe space where you will never be judged, only heard and helped.' },
                    { label: 'Affordable for Everyone', detail: 'Medical aid accepted, PMB-covered, and subsidised options available — because the cost of treatment should never stand between you and recovery.' },
                    { label: 'Evidence-Based Treatment', detail: 'Clinical programmes grounded in the latest research and delivered by experienced professionals who bring both expertise and genuine heart.' },
                    { label: 'Whole-Family Approach', detail: 'Healing does not happen in isolation. We nurture the bonds that sustain recovery, restoring wholeness to individuals, families, and communities.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-sanca-gold mt-2.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-sanca-green-dark dark:text-white">{item.label}</p>
                        <p className="text-xs text-muted-foreground dark:text-white/70 mt-1">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Card className="p-7 shadow-premium-md border-0 bg-sanca-cream dark:bg-[#0D3B22]">
                <div className="grid grid-cols-3 gap-5 text-center">
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold font-serif text-sanca-green-dark dark:text-white tracking-tight">68+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/70 mt-2 font-medium">Years of Service</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold font-serif text-sanca-green-dark dark:text-white tracking-tight">1000+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/70 mt-2 font-medium">Patients/Year</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold font-serif text-sanca-green-dark dark:text-white tracking-tight">3</p>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-white/70 mt-2 font-medium">Clinic Locations</p>
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
