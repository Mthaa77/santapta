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
    image: '/team-image.png',
    description:
      'Our flagship residential programme provides the highest level of treatment care, including detoxification under medical supervision and 24-hour care and support in a peaceful Pretoria suburb.',
    features: [
      'Medical Detoxification & Support',
      'Individual Treatment Plan (ITP)',
      '24-hour Multi-Professional Care',
      'Individual & Group Therapy',
      'Family Therapy & Spiritual Groups',
      'Occupational & Leisure Therapy',
      'Stress Management & Relaxation',
      'HIV/AIDS Counselling',
      'Medical Aid: 21–24 days funded',
      'No co-payment for extra days',
    ],
    highlights: [
      '7-day-a-week admissions',
      'Alcohol admissions: 06:00–22:00',
      'No co-payment beyond medical aid',
      'Family welcomed in recovery process',
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
    image: '/hope-image.png',
    description:
      'A specialised inpatient facility for adolescent males aged 13–18. Age-appropriate therapeutic interventions with parental involvement as a key component.',
    features: [
      'Tailored Rehabilitation Programmes',
      'Age-Appropriate Therapy',
      'Mandatory Parental Involvement',
      'After-Care Support Post-Discharge',
      'School Programme Integration',
      'Individual & Group Therapy',
      'Occupational Therapy',
      'Family Support Sessions',
    ],
    highlights: [
      'Specialised for adolescent males',
      'Small capacity = personal attention',
      'Parental involvement throughout',
      'School integration where possible',
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
    image: '/pattern-bg.png',
    description:
      'Flexible, part-time treatment that allows service users to attend without missing work or school. Dedicated social workers conduct sessions and address community needs.',
    features: [
      'Assessment & Motivational Interventions',
      'Individual Counselling',
      'Group Therapy Sessions',
      'Family / Significant Other Programme',
      'Drug Testing',
      'Diversion Programmes',
      'Self-Help Groups',
      'Relapse Management',
      'Community Resource Networking',
      'Aftercare Support',
    ],
    highlights: [
      'Maintain daily routines',
      'No overnight stay required',
      'Two convenient locations',
      'Community-based support',
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
    image: '/hope-image.png',
    description:
      'Equipping service users with the skills necessary to maintain sobriety and reduce the risk of relapse. Aftercare is the lifeline that keeps long-term recovery alive.',
    features: [
      'Relapse Prevention Skills Training',
      'Self-Help Group Integration (AA, NA)',
      'Ongoing Outpatient Check-ins',
      'Family Support Groups',
      'Community Reintegration Support',
      'Stress & Trigger Management',
      'Healthy Routine Building',
      'Peer Support Network',
    ],
    highlights: [
      'Discharge planning from week 3',
      'Family support sessions available',
      'AA/NA group facilitation',
      'Community reintegration focus',
    ],
  },
];

export default function ProgrammesSection() {
  const [activeTab, setActiveTab] = useState('inpatient');
  const activeProgramme = programmes.find((p) => p.id === activeTab)!;

  return (
    <section id="programmes" className="py-20 sm:py-28 bg-sanca-sage/50 relative overflow-hidden section-top-gradient">
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4" />
            Treatment Programmes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark mb-4">
            A Path for <span className="text-gradient-gold">Every Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SANCA recognises the need for a basket of services — considering each person&apos;s
            unique needs, circumstances, and stage of dependency.
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
                    ? 'bg-sanca-green text-white shadow-premium-md'
                    : 'bg-white text-muted-foreground hover:bg-sanca-green/5 hover:text-sanca-green shadow-premium-sm'
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
            <Card className="shadow-premium-xl border-0 overflow-hidden">
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
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      {(() => {
                        const Icon = activeProgramme.icon;
                        return <Icon className="h-8 w-8 text-sanca-gold-light" />;
                      })()}
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
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
                  <h4 className="font-serif text-lg font-bold text-sanca-green-dark mb-4 flex items-center gap-2">
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
                        <span className="text-muted-foreground">{feature}</span>
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
