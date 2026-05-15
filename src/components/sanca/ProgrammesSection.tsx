'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, TreePine, HeartHandshake, Stethoscope, Calendar, ShieldCheck, ArrowRight, CheckCircle2, Clock, BedDouble, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const programmes = [
  {
    id: 'inpatient',
    title: 'Inpatient Programme',
    subtitle: 'Castle Carey Clinic',
    icon: Building2,
    color: 'sanca-green',
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

export default function ProgrammesSection() {
  const [activeTab, setActiveTab] = useState('inpatient');
  const activeProgramme = programmes.find((p) => p.id === activeTab)!;

  return (
    <section id="programmes" className="py-20 sm:py-28 bg-sanca-sage/50 dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sanca-green/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl" />

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
            <Stethoscope className="h-4 w-4" />
            Our Programmes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient section-heading-lg">
            Care That Meets You <span className="text-gradient-gold">Where You Are</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Every person who walks through our doors carries a unique story, and we honour that with personalised care. Whether you need full residential care in our tranquil clinic, flexible outpatient support close to home, or ongoing aftercare to maintain your hard-won progress, our programmes are designed to meet you exactly where you are — with warmth, understanding, and an unwavering commitment to your recovery.
          </p>
        </motion.div>

        {/* Programme Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {programmes.map((prog) => {
            const Icon = prog.icon;
            const isActive = activeTab === prog.id;
            return (
              <motion.button
                key={prog.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(prog.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-sanca-green dark:bg-sanca-gold dark:text-white text-white shadow-premium-md'
                    : 'bg-white dark:bg-[#0D3B22] text-muted-foreground hover:bg-sanca-green/5 hover:text-sanca-green shadow-premium-sm'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{prog.title}</span>
                <span className="sm:hidden">{prog.title.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Programme Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="shadow-premium-2xl border-0 dark:bg-[#0D3B22] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left: Image & Quick Info */}
                <div className="relative bg-gradient-to-br from-sanca-green-dark to-sanca-green p-8 sm:p-10 text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src={activeProgramme.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-sanca-green-dark/90 to-sanca-green/90" />

                  <div className="relative">
                    <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/30 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                      {(() => {
                        const Icon = activeProgramme.icon;
                        return <Icon className="h-7 w-7 text-sanca-gold-light" />;
                      })()}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                      {activeProgramme.title}
                    </h3>
                    <p className="text-sanca-gold-light font-medium mb-4">
                      {activeProgramme.subtitle}
                    </p>
                    <p className="text-white/80 leading-relaxed mb-8">
                      {activeProgramme.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                        <Clock className="h-4 w-4 text-sanca-gold-light mb-1" />
                        <p className="text-xs text-white/60">Duration</p>
                        <p className="font-semibold text-sm">{activeProgramme.duration}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                        <BedDouble className="h-4 w-4 text-sanca-gold-light mb-1" />
                        <p className="text-xs text-white/60">Capacity</p>
                        <p className="font-semibold text-sm">{activeProgramme.capacity}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                        <Users className="h-4 w-4 text-sanca-gold-light mb-1" />
                        <p className="text-xs text-white/60">Target</p>
                        <p className="font-semibold text-sm">{activeProgramme.target}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Features & Highlights */}
                <div className="p-8 sm:p-10">
                  <h4 className="font-serif text-lg font-bold tracking-tight text-sanca-green-dark mb-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-sanca-gold" />
                    Programme Components
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {activeProgramme.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-sanca-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground dark:text-white/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/20 mb-6">
                    <h5 className="font-semibold text-sm text-sanca-gold-dark mb-2 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Key Highlights
                    </h5>
                    <ul className="space-y-1">
                      {activeProgramme.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-sanca-gold flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-sanca-green hover:bg-sanca-green-dark text-white font-semibold shadow-premium-sm"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
