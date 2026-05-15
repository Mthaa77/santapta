'use client';

import { motion } from 'framer-motion';
import { Heart, Eye, Target, Sparkles, Users, Shield, Award, Leaf } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const values = [
  { letter: 'C', word: 'Caring', desc: 'Offering heartfelt, compassionate support that honours the dignity and worth of every individual who entrusts us with their journey', icon: Heart, color: 'bg-rose-50 text-rose-600 border-rose-200' },
  { letter: 'A', word: 'Accountability', desc: 'Holding ourselves to the highest standards of transparency and responsibility in every action, every decision, every day', icon: Shield, color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { letter: 'I', word: 'Integrity', desc: 'Guided by unwavering honesty and strong ethical principles in everything we do, because trust is the foundation of healing', icon: Award, color: 'bg-amber-50 text-amber-600 border-amber-200' },
  { letter: 'R', word: 'Responsibility', desc: 'Deeply dedicated to the communities we serve, recognising that our work carries the hopes and futures of real people and families', icon: Users, color: 'bg-purple-50 text-purple-600 border-purple-200' },
  { letter: 'U', word: 'Ubuntu', desc: '"I am because we are" — the deeply South African belief that our shared humanity binds us, and that healing happens in community', icon: Leaf, color: 'bg-green-50 text-green-600 border-green-200' },
  { letter: 'P', word: 'Professionalism', desc: 'Delivering clinical excellence with skill and dedication, because every person who seeks our help deserves the very best care we can give', icon: Sparkles, color: 'bg-teal-50 text-teal-600 border-teal-200' },
];

const timeline = [
  { year: '1956', title: 'SANCA National Founded', desc: 'A bold vision took root when the first national conference was opened by the Mayor of Johannesburg. SANCA was officially registered as a Welfare Organisation, igniting a movement of hope across South Africa.' },
  { year: '1957', title: 'Pretoria Society Established', desc: 'Our story began as one of just eight founding affiliated societies of SANCA National — a small team with an enormous heart, determined to bring healing to the people of Pretoria and beyond.', hasImage: true, imageSrc: '/images/sanca/pienaar-bust-courtyard.jpeg', imageAlt: 'Bronze bust of A.J. Pienaar in the courtyard at SANCA Pretoria', imageCaption: 'A.J. Pienaar — Founder Member, SANRA National (1957–1978)' },
  { year: '1963', title: 'Navigating Apartheid Constraints', desc: 'Under the Group Areas Act, SANCA societies were mandated to conform to racial segregation in service delivery. Yet even within these Draconian constraints, the organisation maintained a philosophy of non-refusal — providing services across racial lines whenever possible.' },
  { year: '1980s', title: 'Professionalisation & Affiliation', desc: 'The institutional expansion of the 1980s marked a professionalisation of the sector, as local societies sought affiliation with the emerging national body — standardising care and strengthening the collective voice against substance abuse.' },
  { year: '1994', title: 'Post-Apartheid Transformation', desc: 'The abolishment of the Group Areas Act catalysed radical re-evaluation of service boundaries. SANCA rapidly expanded facilities into previously underserved urban and rural corridors, ensuring every community had access to dignified care.' },
  { year: '2002', title: 'Regional Autonomy Granted', desc: 'Major regional hubs attained full autonomy and self-governance, allowing for more localised and responsive approaches to the specific drug trends emerging in different provinces.' },
  { year: 'Present', title: '100+ Service Points Nationwide', desc: 'Today, the SANCA network encompasses over 100 service points and more than 30 specialised treatment centres across all nine provinces, having supported over 10 million individuals over nearly seven decades of operation.' },
];

function MissionCard() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-left' : 'opacity-0'}>
      <Card className="h-full p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-green to-sanca-green-dark text-white relative overflow-hidden card-animated-border">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
              <Target className="h-6 w-6 text-sanca-gold-light" />
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">Our Mission</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            To prevent and treat substance misuse by empowering individuals with the knowledge,
            tools, and unwavering support they need to reclaim their lives and make choices
            that lead to lasting wellbeing. Our team of dedicated professionals works with
            genuine compassion to deliver comprehensive, evidence-based treatment programmes
            that nurture the whole person — body, mind, and spirit — because we believe that
            true healing happens when every part of a person is cared for.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10">
            <p className="text-sm italic text-sanca-gold-light">
              &ldquo;Every person in our land deserves the chance to live a life of dignity and
              purpose — free from the grip of addiction, surrounded by the warmth of community
              that says: you are not alone, and your story is not over.&rdquo;
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function VisionCard() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-right' : 'opacity-0'}>
      <Card className="h-full p-6 sm:p-8 shadow-premium-lg border-0 bg-gradient-to-br from-sanca-gold to-sanca-gold-dark text-white relative overflow-hidden card-animated-border">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
              <Eye className="h-6 w-6 text-sanca-green-light" />
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">Our Vision</h3>
          </div>
          <p className="text-white/90 leading-relaxed">
            To lead and guide SANCA member organisations in providing exceptional, compassionate
            care for individuals and families affected by Substance Use Disorders. We envision
            a future where resilient, innovative organisations work hand in hand with
            communities, where lasting partnerships are built on trust, and where every person
            — regardless of circumstance — has access to evidence-based treatment and
            prevention delivered with professional excellence and genuine human kindness.
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/10">
            <p className="text-sm italic text-white/90">
              Like the ancient baobab whose branches shelter all beneath them, our vision grows
              from deep roots — each community a living branch, each healed life a leaf
              catching the light, together forming a canopy of hope under which all may
              find rest and renewal.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ValuesGrid() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={isVisible ? 'animate-reveal-scale' : 'opacity-0'}>
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-2">
          Our Values: <span className="text-shimmer">C.A.I.R.U.P.</span>
        </h3>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed">
          The living principles that guide every decision, every interaction, and every life we are privileged to touch
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {values.map((value, i) => (
          <motion.div
            key={value.letter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group"
          >
            <Card className={`p-5 text-center shadow-premium-sm hover:shadow-premium-lg transition-all duration-300 border dark:bg-[#0D3B22] ${value.color.split(' ').pop()} cursor-default h-full`}>
              <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <span className="font-serif text-2xl font-bold text-sanca-green">{value.letter}</span>
              </div>
              <h4 className="font-serif font-bold tracking-tight text-foreground mb-1">{value.word}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HeritageTimeline() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div ref={ref} className={isVisible ? 'animate-slide-up-bounce' : 'opacity-0'}>
      <div className="text-center mb-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-2">
          Our <span className="text-gradient-gold">Heritage</span>
        </h3>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed">
          Seven decades of standing shoulder to shoulder with South African communities — a story of courage, compassion, and unyielding hope
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald hidden md:block" />

        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`flex items-center gap-6 mb-8 last:mb-0 ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <Card className="p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 dark:bg-[#0D3B22] inline-block">
                <span className="text-xs font-bold text-sanca-gold uppercase tracking-wider">
                  {item.year}
                </span>
                <h4 className="font-serif text-lg font-bold tracking-tight text-sanca-green-dark mt-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>

                {/* Pienaar bust image for 1957 entry */}
                {item.hasImage && (
                  <div className="mt-3 flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <Image
                        src={item.imageSrc!}
                        alt={item.imageAlt!}
                        width={96}
                        height={96}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-premium-md border-2 border-sanca-gold/30 hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                    <p className="text-[10px] sm:text-xs text-sanca-gold-dark dark:text-sanca-gold/80 font-medium leading-snug italic">
                      {item.imageCaption}
                    </p>
                  </div>
                )}
              </Card>
            </div>

            {/* Center dot */}
            <div className="hidden md:flex w-10 h-10 rounded-full bg-sanca-green items-center justify-center shadow-premium-sm flex-shrink-0 border-4 border-white">
              <div className="w-3 h-3 rounded-full bg-sanca-gold" />
            </div>

            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PosterShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid md:grid-cols-5 gap-6 items-center mb-20"
    >
      {/* Poster images */}
      <div className="md:col-span-2">
        <div className="grid grid-cols-2 gap-3">
          {/* SANCA Poster */}
          <div className="relative rounded-2xl overflow-hidden shadow-premium-2xl border-4 border-sanca-gold/20 hover-lift group">
            {/* Gold accent corners */}
            <div className="absolute top-0 left-0 w-8 h-8 z-10 pointer-events-none">
              <div className="absolute top-2 left-2 w-5 h-[2px] bg-sanca-gold/50 rounded-full" />
              <div className="absolute top-2 left-2 w-[2px] h-5 bg-sanca-gold/50 rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 z-10 pointer-events-none">
              <div className="absolute bottom-2 right-2 w-5 h-[2px] bg-sanca-gold/50 rounded-full" />
              <div className="absolute bottom-2 right-2 w-[2px] h-5 bg-sanca-gold/50 rounded-full" />
            </div>

            <div className="relative aspect-[3/4]">
              <Image
                src="/images/sanca/sanca-poster.png"
                alt="SANCA Pretoria official promotional poster showcasing services and contact information"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              {/* Bottom overlay with tagline */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-12 pb-3 px-3">
                <p className="text-white text-xs font-serif font-semibold leading-snug">
                  SANCA Pretoria
                </p>
                <p className="text-white/80 text-[10px] mt-0.5">
                  Your Health Matters
                </p>
              </div>
            </div>
          </div>

          {/* Garden Patio */}
          <div className="relative rounded-2xl overflow-hidden shadow-premium-2xl border-4 border-sanca-gold/20 hover-lift group">
            {/* Gold accent corners */}
            <div className="absolute top-0 right-0 w-8 h-8 z-10 pointer-events-none">
              <div className="absolute top-2 right-2 w-5 h-[2px] bg-sanca-gold/50 rounded-full" />
              <div className="absolute top-2 right-2 w-[2px] h-5 bg-sanca-gold/50 rounded-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8 z-10 pointer-events-none">
              <div className="absolute bottom-2 left-2 w-5 h-[2px] bg-sanca-gold/50 rounded-full" />
              <div className="absolute bottom-2 left-2 w-[2px] h-5 bg-sanca-gold/50 rounded-full" />
            </div>

            <div className="relative aspect-[3/4]">
              <Image
                src="/images/sanca/garden-patio.jpeg"
                alt="Tranquil garden patio at SANCA Pretoria with ornate stone seating and lush greenery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              {/* Bottom overlay with tagline */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-12 pb-3 px-3">
                <p className="text-white text-xs font-serif font-semibold leading-snug">
                  Healing Gardens
                </p>
                <p className="text-white/80 text-[10px] mt-0.5">
                  A Place of Peace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-3 space-y-4">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white">
          More Than a Clinic — <span className="text-gradient-gold">A Community of Care</span>
        </h3>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed text-base sm:text-lg">
          SANCA Pretoria is not simply a treatment facility — it is a lifeline woven into the
          fabric of our community. From our tranquil Castle Carey Clinic nestled among healing
          gardens to our accessible outpatient services in Soshanguve and Hammanskraal, we
          meet people exactly where they are, with open doors and open hearts.
        </p>
        <p className="text-muted-foreground dark:text-white/70 leading-relaxed text-base sm:text-lg">
          For over sixty-eight years, we have walked alongside thousands of South Africans
          on their journey to recovery. Each story is different, each path unique — yet every
          person who enters our gates is greeted with the same unwavering promise: here, you
          will find hope, you will find help, and you will find a community that believes in
          your capacity to heal.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-2 text-sanca-gold">
            <Heart className="h-5 w-5" />
            <span className="text-sm font-semibold">Compassion-First</span>
          </div>
          <div className="w-px h-5 bg-sanca-gold/30" />
          <div className="flex items-center gap-2 text-sanca-green">
            <Shield className="h-5 w-5" />
            <span className="text-sm font-semibold">PMB Accredited</span>
          </div>
          <div className="w-px h-5 bg-sanca-gold/30" />
          <div className="flex items-center gap-2 text-sanca-emerald">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold">Whole-Family Care</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Heart className="h-4 w-4" />
            Who We Are — A Family of Care
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient section-heading-lg">
            A Legacy of <span className="text-gradient-gold">Healing</span>, Hope, and Humanity
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Proudly one of the original eight founding affiliates of SANCA National, we have stood alongside our communities through every season of need since 1957. With deep roots in the greater Tshwane area, we bring together heartfelt compassion and clinical excellence to walk the road of recovery with every person who walks through our doors — because in the words of ubuntu, <em className="text-sanca-gold dark:text-sanca-gold-light">&ldquo;I am because we are&rdquo;</em>, and no one should face this journey alone.
          </p>
        </motion.div>

        {/* SANCA Poster Showcase */}
        <PosterShowcase />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <MissionCard />
          <VisionCard />
        </div>

        {/* C.A.I.R.U.P. Values */}
        <div className="mb-20">
          <ValuesGrid />
        </div>

        {/* Heritage Timeline */}
        <HeritageTimeline />
      </div>
    </section>
  );
}
