'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Users,
  TreePine,
  HeartHandshake,
  Stethoscope,
  Calendar,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock,
  BedDouble,
  GraduationCap,
  Shield,
  Sparkles,
  Award,
  Star,
  Phone,
  MapPin,
  CircleDot,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const programmes = [
  {
    id: 'inpatient',
    title: 'Inpatient Programme',
    subtitle: 'Castle Carey Clinic',
    icon: Building2,
    color: 'sanca-green',
    colorHex: '#1B5E3B',
    duration: '4–6 Weeks',
    capacity: '52 Patients',
    target: 'Adults',
    image: '/images/sanca/facility-garden-building.jpg',
    description:
      'When you need the deepest level of support, our flagship residential programme is here for you. Nestled within tranquil, landscaped gardens in the peaceful suburb of Ninapark, Castle Carey Clinic offers medically supervised detoxification and round-the-clock compassionate care. Here, surrounded by the quiet beauty of nature, you can focus entirely on your healing — knowing you are safe, supported, and never alone on this journey.',
    features: [
      'Medical Detoxification with Compassionate Support',
      'Personalised Individual Treatment Plan',
      '24-Hour Multi-Professional Care Team',
      'One-on-One & Group Therapy Sessions',
      'Family Therapy & Spiritual Support Groups',
      'Occupational & Leisure Therapy Activities',
      'Stress Management & Relaxation Techniques',
      'HIV/AIDS Counselling & Support',
      'Medical Aid Covers 21–24 Days',
      'No Co-Payment Required for Extra Days',
    ],
    highlights: [
      'Admissions open 7 days a week',
      'Alcohol admissions welcome from 06:00 to 22:00',
      'No out-of-pocket costs beyond medical aid',
      'Family warmly welcomed into the recovery process',
    ],
  },
  {
    id: 'youth',
    title: 'Youth Programme',
    subtitle: 'Lapalamé Youth Drug Unit',
    icon: GraduationCap,
    color: 'sanca-emerald',
    colorHex: '#059669',
    duration: 'Tailored',
    capacity: '8 Males',
    target: 'Ages 13–18',
    image: '/images/sanca/clinic-entrance-gate.jpg',
    description:
      'We know how deeply it hurts to watch your child struggle. Lapalamé is a dedicated inpatient facility designed specifically for adolescent males aged 13–18, offering age-appropriate therapeutic care in a nurturing, structured environment. With its distinctive stone archway entrance and welcoming grounds, Lapalamé provides a safe space where young people can begin to rebuild. Parents are not just included — they are essential partners in their child\'s recovery journey, because healing young lives means healing families together.',
    features: [
      'Rehabilitation Programmes Tailored to Each Young Person',
      'Age-Appropriate Therapeutic Interventions',
      'Active Parental Involvement Throughout',
      'Aftercare Support After Discharge',
      'School Programme Integration Where Possible',
      'Individual & Group Therapy Sessions',
      'Occupational Therapy & Life Skills',
      'Dedicated Family Support Sessions',
    ],
    highlights: [
      'Designed specifically for adolescent males',
      'Small group size ensures personal attention',
      'Parents involved every step of the way',
      'Schooling continued wherever possible',
    ],
  },
  {
    id: 'outpatient',
    title: 'Outpatient Programme',
    subtitle: 'Soshanguve & Hammanskraal',
    icon: TreePine,
    color: 'sanca-gold-dark',
    colorHex: '#9B7429',
    duration: 'Flexible',
    capacity: 'Open',
    target: 'All Ages',
    image: '/images/sanca/facility-building.jpg',
    description:
      'Recovery should never mean putting your life on hold. Our outpatient programme offers flexible, part-time treatment that fits around your work, school, and daily responsibilities. Led by dedicated social workers who understand the realities of community life, sessions are designed to give you the tools and support you need — while keeping your world turning. With clinics in Soshanguve and Hammanskraal, quality care is never far from home.',
    features: [
      'Thorough Assessment & Motivational Support',
      'Personalised Individual Counselling',
      'Supportive Group Therapy Sessions',
      'Family & Significant Other Programme',
      'Confidential Drug Testing',
      'Diversion Programme Support',
      'Self-Help Group Facilitation',
      'Relapse Prevention & Management',
      'Community Resource Networking & Referrals',
      'Ongoing Aftercare Support',
    ],
    highlights: [
      'Keep your daily routine intact',
      'No overnight stay — return home each day',
      'Two accessible community locations',
      'Support rooted in your community',
    ],
  },
  {
    id: 'aftercare',
    title: 'Aftercare Programme',
    subtitle: 'Continued Support',
    icon: HeartHandshake,
    color: 'sanca-green-light',
    colorHex: '#2D8B57',
    duration: 'Ongoing',
    capacity: 'Open',
    target: 'Graduates',
    image: '/images/sanca/garden-patio.jpeg',
    description:
      'Leaving treatment is not the end of your journey — it is the beginning of a beautiful new chapter. Our aftercare programme equips you with the practical skills, confidence, and ongoing support to maintain your sobriety and navigate the challenges of daily life with grace. We begin planning your aftercare early, so that when the time comes, you step forward with a clear plan, inner strength, and a community that stands behind you — today, tomorrow, and always.',
    features: [
      'Practical Relapse Prevention Skills Training',
      'Self-Help Group Integration (AA & NA)',
      'Regular Outpatient Check-ins & Support',
      'Family Support Groups & Workshops',
      'Guided Community Reintegration Support',
      'Stress & Trigger Management Strategies',
      'Healthy Routine Building & Planning',
      'Peer Support Network & Mentorship',
    ],
    highlights: [
      'Aftercare planning begins from week 3 of treatment',
      'Family support sessions always available',
      'AA/NA group connections facilitated',
      'Focused support for returning to daily life',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const tabContentVariants = {
  enter: { opacity: 0, y: 24, filter: 'blur(6px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, filter: 'blur(4px)', transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
};

const featureVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.04 },
  }),
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function ProgrammesSection() {
  const [activeTab, setActiveTab] = useState('inpatient');
  const activeProgramme = programmes.find((p) => p.id === activeTab)!;

  return (
    <section
      id="programmes"
      className="py-24 sm:py-32 bg-sanca-sage/30 dark:bg-[#0a2a18] relative overflow-hidden"
    >
      {/* ============= PREMIUM BACKGROUND LAYERS ============= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 via-white/30 to-transparent dark:from-[#0a2a18] dark:via-[#0a2a18] dark:to-transparent" />
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-sanca-cream/40 via-sanca-cream/15 to-transparent dark:from-sanca-green-dark/20 dark:via-sanca-green-dark/5 dark:to-transparent" />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-sanca-green/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-sanca-gold/[0.04] blur-[100px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1B5E3B 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Corner decorative elements */}
        <div className="absolute top-12 right-12 w-16 h-16 border-r-2 border-t-2 border-sanca-gold/[0.08] dark:border-sanca-gold/[0.06] rounded-tr-lg" />
        <div className="absolute bottom-12 left-12 w-16 h-16 border-l-2 border-b-2 border-sanca-green/[0.08] dark:border-sanca-green/[0.06] rounded-bl-lg" />
      </div>

      {/* Section top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ============= SECTION HEADER — GOVERNMENT-LEVEL ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Government-style seal badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-14 h-14 rounded-full border-2 border-sanca-green/20 dark:border-sanca-gold/20 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-10 h-10 rounded-full border border-sanca-gold/30 dark:border-sanca-gold/20 flex items-center justify-center bg-sanca-green/[0.04] dark:bg-sanca-gold/[0.06]">
                  <Stethoscope className="h-5 w-5 text-sanca-green dark:text-sanca-gold" />
                </div>
              </div>
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sanca-gold" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sanca-gold dark:text-sanca-gold-light">
                SANCA Pretoria
              </p>
              <p className="text-xs font-medium text-sanca-green/60 dark:text-white/40">
                Accredited Treatment Programmes
              </p>
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-5">
            Care That Meets You{' '}
            <span className="text-gradient-gold">Where You Are</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sanca-gold/40" />
            <Sparkles className="h-4 w-4 text-sanca-gold/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sanca-gold/40" />
          </div>

          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Every person who walks through our doors carries a unique story, and we honour that with personalised care.
            Whether you need full residential care, flexible outpatient support, or ongoing aftercare, our programmes
            are designed to meet you exactly where you are — with warmth, understanding, and an unwavering commitment to your recovery.
          </p>
        </motion.div>

        {/* ============= PROGRAMME TABS — PREMIUM GOV ============= */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {programmes.map((prog) => {
            const Icon = prog.icon;
            const isActive = activeTab === prog.id;
            return (
              <motion.button
                key={prog.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(prog.id)}
                className={`relative flex items-center gap-2.5 px-5 sm:px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? 'bg-sanca-green dark:bg-sanca-gold text-white border-sanca-green dark:border-sanca-gold shadow-premium-md'
                    : 'bg-white dark:bg-[#0D3B22] border-sanca-green/10 dark:border-sanca-gold/[0.08] text-foreground/60 dark:text-white/60 hover:border-sanca-green/25 dark:hover:border-sanca-gold/20 hover:text-sanca-green dark:hover:text-sanca-gold-light shadow-premium-sm'
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                <span className="hidden sm:inline">{prog.title}</span>
                <span className="sm:hidden">{prog.title.split(' ')[0]}</span>
                {isActive && (
                  <motion.div
                    layoutId="programmeTabGlow"
                    className="absolute -inset-px rounded-xl border-2 border-sanca-gold/20 dark:border-sanca-green/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* ============= PROGRAMME CONTENT — ULTRA PREMIUM ============= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="relative bg-white dark:bg-[#0D3B22] rounded-2xl shadow-premium-2xl border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] overflow-hidden">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

              <div className="grid lg:grid-cols-2">
                {/* ============= LEFT: Hero Image & Quick Info ============= */}
                <div className="relative bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-green-dark p-8 sm:p-10 text-white overflow-hidden">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={activeProgramme.image}
                      alt=""
                      className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-sanca-green-dark/95 via-sanca-green-dark/85 to-sanca-green/90" />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 border border-white/5 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-sanca-gold/10 rounded-full" />

                  <div className="relative">
                    {/* Icon with premium frame */}
                    <div className="relative w-16 h-16 mb-7">
                      {/* Outer ring */}
                      <div className="absolute inset-0 rounded-full border border-sanca-gold/25" />
                      {/* Inner container */}
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-sanca-gold/20 flex items-center justify-center">
                        {(() => {
                          const Icon = activeProgramme.icon;
                          return <Icon className="h-7 w-7 text-sanca-gold-light" />;
                        })()}
                      </div>
                      {/* Top decorative dot */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sanca-gold/50" />
                    </div>

                    {/* Programme type badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-5">
                      <Award className="h-3 w-3 text-sanca-gold-light" />
                      <span className="text-[10px] uppercase tracking-widest font-semibold text-sanca-gold-light">
                        Accredited Programme
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                      {activeProgramme.title}
                    </h3>
                    <p className="text-sanca-gold-light font-semibold mb-5 text-lg">
                      {activeProgramme.subtitle}
                    </p>
                    <p className="text-white/75 leading-relaxed text-[15px]">
                      {activeProgramme.description}
                    </p>

                    {/* Quick Stats — Premium Government Cards */}
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.08] border border-white/10 backdrop-blur-sm hover:bg-white/[0.12] transition-colors">
                        <Clock className="h-4 w-4 text-sanca-gold-light mb-2" />
                        <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Duration</p>
                        <p className="font-bold text-sm mt-0.5">{activeProgramme.duration}</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.08] border border-white/10 backdrop-blur-sm hover:bg-white/[0.12] transition-colors">
                        <BedDouble className="h-4 w-4 text-sanca-gold-light mb-2" />
                        <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Capacity</p>
                        <p className="font-bold text-sm mt-0.5">{activeProgramme.capacity}</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/[0.08] border border-white/10 backdrop-blur-sm hover:bg-white/[0.12] transition-colors">
                        <Users className="h-4 w-4 text-sanca-gold-light mb-2" />
                        <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Target</p>
                        <p className="font-bold text-sm mt-0.5">{activeProgramme.target}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============= RIGHT: Features & Highlights ============= */}
                <div className="p-8 sm:p-10 relative">
                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] rounded-tr" />

                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-sanca-green/10 dark:bg-sanca-gold/10 flex items-center justify-center">
                      <ShieldCheck className="h-4 w-4 text-sanca-green dark:text-sanca-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold tracking-tight text-sanca-green-dark dark:text-white">
                        Programme Components
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest font-semibold text-sanca-gold/60 dark:text-sanca-gold/40">
                        Core Services
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-7 max-h-72 overflow-y-auto custom-scrollbar pr-1">
                    {activeProgramme.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        custom={i}
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-start gap-2.5 text-sm group/feature"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-md bg-sanca-green/[0.06] dark:bg-sanca-gold/[0.08] flex items-center justify-center mt-0.5 group-hover/feature:bg-sanca-green/10 dark:group-hover/feature:bg-sanca-gold/15 transition-colors">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sanca-emerald" />
                        </div>
                        <span className="text-muted-foreground dark:text-white/70 leading-snug">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights — Premium Government Callout */}
                  <div className="relative p-5 rounded-xl bg-sanca-gold/[0.04] dark:bg-sanca-gold/[0.06] border border-sanca-gold/15 dark:border-sanca-gold/10 mb-7 overflow-hidden">
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-sanca-gold/25 rounded-tl-lg" />

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-sanca-gold dark:text-sanca-gold-light" />
                      <h5 className="font-semibold text-sm text-sanca-gold-dark dark:text-sanca-gold-light uppercase tracking-wide">
                        Key Highlights
                      </h5>
                    </div>
                    <ul className="space-y-2">
                      {activeProgramme.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2.5 text-sm text-foreground/70 dark:text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-sanca-gold flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold shadow-premium-md h-12 rounded-xl text-base group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Start Your Journey
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </Button>
                  </motion.div>

                  {/* Emergency contact hint */}
                  <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-foreground/30 dark:text-white/20">
                    <Phone className="h-3 w-3" />
                    <span>Need help now? Call 012 542 1121</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ============= BOTTOM TRUST INDICATORS ============= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: Shield, label: 'Medical Aid Accepted', sub: 'All major schemes' },
            { icon: Award, label: 'SANCA Accredited', sub: 'Since 1956' },
            { icon: Star, label: '7 Days Admissions', sub: 'Walk-ins welcome' },
            { icon: MapPin, label: 'Multiple Locations', sub: 'Across Pretoria' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-sanca-green/[0.06] dark:bg-sanca-gold/[0.06] flex items-center justify-center group-hover:bg-sanca-green/10 dark:group-hover:bg-sanca-gold/10 transition-colors">
                <item.icon className="h-4 w-4 text-sanca-green/60 dark:text-sanca-gold/60" />
              </div>
              <div>
                <p className="text-xs font-semibold text-sanca-green-dark/70 dark:text-white/60">{item.label}</p>
                <p className="text-[10px] text-foreground/30 dark:text-white/25">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
