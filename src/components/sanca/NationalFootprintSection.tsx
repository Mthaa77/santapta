'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Building2,
  Users,
  Globe,
  TreePine,
  GraduationCap,
  BedDouble,
  Stethoscope,
  Network,
  ChevronRight,
  Landmark,
  Truck,
  Shield,
  Sparkles,
  ArrowUpRight,
  Medal,
  TrendingUp,
  Phone,
  CircleDot,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type CenterType = 'Inpatient' | 'Outpatient' | 'In- & Out-patient';

interface TreatmentCenter {
  province: string;
  location: string;
  name: string;
  type: CenterType;
  capacity: string;
  ownership: string;
}

const centers: TreatmentCenter[] = [
  { province: 'Gauteng', location: 'Pretoria', name: 'Castle Carey Clinic', type: 'Inpatient', capacity: '50+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Boksburg', name: 'SANCA Horizon', type: 'Inpatient', capacity: '40+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Soweto', name: 'SANCA Soweto', type: 'Outpatient', capacity: '150+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Vanderbijlpark', name: 'SANCA Vaal', type: 'Outpatient', capacity: '100+', ownership: 'SANCA' },
  { province: 'Gauteng', location: 'Cullinan', name: 'Dr. Fabian Ribeiro', type: 'Inpatient', capacity: '200+', ownership: 'State' },
  { province: 'KwaZulu-Natal', location: 'Durban', name: 'SANCA Lulama', type: 'Inpatient', capacity: '42', ownership: 'SANCA' },
  { province: 'KwaZulu-Natal', location: 'Durban', name: 'SANCA Durban', type: 'Outpatient', capacity: '200+', ownership: 'SANCA' },
  { province: 'KwaZulu-Natal', location: 'Newcastle', name: 'Madadeni Rehab', type: 'Inpatient', capacity: '100', ownership: 'State' },
  { province: 'KwaZulu-Natal', location: 'Empangeni', name: 'SANCA Zululand', type: 'Outpatient', capacity: '60+', ownership: 'SANCA' },
  { province: 'Free State', location: 'Bloemfontein', name: 'SANCA Aurora', type: 'In- & Out-patient', capacity: '50', ownership: 'SANCA' },
  { province: 'Free State', location: 'Sasolburg', name: 'SANRA', type: 'Outpatient', capacity: '60', ownership: 'SANCA' },
  { province: 'Limpopo', location: 'Polokwane', name: 'SANCA Limpopo', type: 'Outpatient', capacity: '100', ownership: 'SANCA' },
  { province: 'North West', location: 'Klerksdorp', name: 'Sanpark', type: 'Inpatient', capacity: '34', ownership: 'SANCA' },
  { province: 'Mpumalanga', location: 'Nelspruit', name: 'SANCA Lowveld', type: 'Outpatient', capacity: '56', ownership: 'SANCA' },
  { province: 'Mpumalanga', location: 'Witbank', name: 'SANCA Witbank', type: 'Outpatient', capacity: '120', ownership: 'SANCA' },
  { province: 'Eastern Cape', location: 'East London', name: 'SANCA CEC', type: 'In- & Out-patient', capacity: '40+', ownership: 'SANCA' },
  { province: 'Western Cape', location: 'Kraaifontein', name: 'De Novo', type: 'Inpatient', capacity: '90', ownership: 'State' },
];

const provinces = [
  'All',
  'Gauteng',
  'KwaZulu-Natal',
  'Free State',
  'Limpopo',
  'North West',
  'Mpumalanga',
  'Eastern Cape',
  'Western Cape',
] as const;

type ProvinceFilter = (typeof provinces)[number];

const stats = [
  { icon: MapPin, value: '100+', label: 'Service Points', sublabel: 'Nationwide', color: 'sanca-green', bgGradient: 'from-sanca-green to-sanca-green-dark' },
  { icon: Building2, value: '30+', label: 'Treatment Centres', sublabel: 'Accredited', color: 'sanca-gold', bgGradient: 'from-sanca-gold to-sanca-gold-dark' },
  { icon: Users, value: '10M+', label: 'Lives Touched', sublabel: 'Since 1956', color: 'sanca-emerald', bgGradient: 'from-sanca-emerald to-sanca-green' },
  { icon: Globe, value: '9', label: 'Provinces', sublabel: 'Full Coverage', color: 'sanca-green-dark', bgGradient: 'from-sanca-green-dark to-sanca-green' },
];

const serviceTiers = [
  {
    icon: Building2,
    title: 'Treatment Centres',
    subtitle: 'Fully-fledged facilities',
    desc: 'Offering both inpatient (residential) and outpatient medical services with comprehensive clinical teams, detoxification, and structured therapeutic programmes.',
    color: 'sanca-green',
    accent: 'bg-sanca-green',
    badge: 'Tier 1',
    badgeSub: 'Primary Care',
  },
  {
    icon: Stethoscope,
    title: 'Sub-Clinics',
    subtitle: 'Community-based offices',
    desc: 'Permanent community-based offices providing counselling services, early intervention programmes, and ongoing support — closer to where people live and work.',
    color: 'sanca-gold',
    accent: 'bg-sanca-gold',
    badge: 'Tier 2',
    badgeSub: 'Community Care',
  },
  {
    icon: Truck,
    title: 'Satellite Offices',
    subtitle: 'Mobile & rural outreach',
    desc: 'Temporary or mobile service points reaching remote rural areas and high-density townships, ensuring no community is beyond the reach of help.',
    color: 'sanca-emerald',
    accent: 'bg-sanca-emerald',
    badge: 'Tier 3',
    badgeSub: 'Outreach Care',
  },
];

const hubSpokes = [
  { province: 'Western Cape', note: '"Tik" (methamphetamine) focus', icon: '🪴' },
  { province: 'Gauteng', note: '"Nyaope" & "Whoonga" focus', icon: '🏙️' },
  { province: 'KwaZulu-Natal', note: 'Alcohol & cannabis interventions', icon: '🌊' },
  { province: 'Free State', note: 'Rural & mining community outreach', icon: '🌾' },
  { province: 'Eastern Cape', note: 'Youth & community-based care', icon: '🦁' },
  { province: 'Limpopo', note: 'Cross-border trafficking awareness', icon: '🌳' },
  { province: 'Mpumalanga', note: 'Mining belt substance abuse', icon: '⛏️' },
  { province: 'North West', note: 'Rural & farming community support', icon: '🌻' },
  { province: 'Northern Cape', note: 'Remote & desert community outreach', icon: '🏜️' },
];

/* ------------------------------------------------------------------ */
/*  HELPER: type icon & colour                                        */
/* ------------------------------------------------------------------ */

function typeIcon(type: CenterType) {
  if (type === 'Inpatient') return BedDouble;
  if (type === 'Outpatient') return Stethoscope;
  return Building2;
}

function typeBadgeColor(type: CenterType) {
  if (type === 'Inpatient') return 'bg-sanca-green/10 text-sanca-green border-sanca-green/20';
  if (type === 'Outpatient') return 'bg-sanca-gold/10 text-sanca-gold-dark border-sanca-gold/20';
  return 'bg-sanca-emerald/10 text-sanca-emerald border-sanca-emerald/20';
}

function ownershipColor(ownership: string) {
  return ownership === 'State'
    ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/30'
    : 'bg-sanca-cream text-sanca-green-dark border-sanca-sage dark:bg-sanca-green/20 dark:text-sanca-gold-light dark:border-sanca-green/30';
}

/* ------------------------------------------------------------------ */
/*  ANIMATION VARIANTS                                                 */
/* ------------------------------------------------------------------ */

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 },
  }),
};

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function NationalFootprintSection() {
  const [activeProvince, setActiveProvince] = useState<ProvinceFilter>('All');

  const filteredCenters =
    activeProvince === 'All'
      ? centers
      : centers.filter((c) => c.province === activeProvince);

  return (
    <section
      id="national-footprint"
      className="py-24 sm:py-32 bg-white dark:bg-[#0a2a18] relative overflow-hidden"
    >
      {/* ============= PREMIUM BACKGROUND LAYERS ============= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient band */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-sanca-cream/60 via-sanca-cream/20 to-transparent dark:from-sanca-green-dark/40 dark:via-sanca-green-dark/10 dark:to-transparent" />
        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-sanca-green/10 dark:border-sanca-gold/10 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-sanca-green/10 dark:border-sanca-gold/10 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-sanca-green/10 dark:border-sanca-gold/10 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-sanca-green/10 dark:border-sanca-gold/10 rounded-br-lg" />
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-sanca-gold/[0.04] blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-sanca-green/[0.04] blur-[100px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1B5E3B 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-sanca-green to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ============= SECTION HEADER — GOVERNMENT-LEVEL ============= */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Government-style seal badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-14 h-14 rounded-full border-2 border-sanca-green/20 dark:border-sanca-gold/20 flex items-center justify-center">
                {/* Inner ring */}
                <div className="w-10 h-10 rounded-full border border-sanca-gold/30 dark:border-sanca-gold/20 flex items-center justify-center bg-sanca-green/[0.04] dark:bg-sanca-gold/[0.06]">
                  <Shield className="h-5 w-5 text-sanca-green dark:text-sanca-gold" />
                </div>
              </div>
              {/* Small decorative dot */}
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-sanca-gold" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-sanca-gold dark:text-sanca-gold-light">
                Republic of South Africa
              </p>
              <p className="text-xs font-medium text-sanca-green/60 dark:text-white/40">
                Established 1956 — National Network
              </p>
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-6">
            SANCA&apos;s National{' '}
            <span className="text-gradient-gold">Footprint</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-sanca-gold/40" />
            <Sparkles className="h-4 w-4 text-sanca-gold/60" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-sanca-gold/40" />
          </div>

          <p className="text-muted-foreground dark:text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            For nearly seven decades, SANCA has been the beating heart of substance abuse
            treatment in South Africa — with over 100 service points across all nine provinces,
            bringing hope and healing to communities from urban centres to the most remote rural areas.
          </p>
        </motion.div>

        {/* ============= IMPACT STAT CARDS — PREMIUM GOV STYLE ============= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="group relative bg-white dark:bg-[#0D3B22] rounded-2xl p-6 sm:p-7 text-center border border-sanca-green/[0.06] dark:border-sanca-gold/[0.08] shadow-premium-md hover-lift overflow-hidden">
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.bgGradient}`} />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-sanca-gold/20 dark:bg-sanca-gold/15" />
                </div>

                {/* Icon */}
                <div className={`mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgGradient} flex items-center justify-center shadow-premium-sm group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>

                {/* Value */}
                <p className="font-serif text-3xl sm:text-4xl font-bold text-sanca-green-dark dark:text-white stat-counter">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="text-sm font-semibold text-foreground/70 dark:text-white/60 mt-1">
                  {stat.label}
                </p>

                {/* Sublabel */}
                <p className="text-[10px] uppercase tracking-widest font-medium text-sanca-gold/60 dark:text-sanca-gold/40 mt-1">
                  {stat.sublabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============= PROVINCE FILTER — PREMIUM ============= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-sanca-green/10 dark:bg-sanca-gold/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-sanca-green dark:text-sanca-gold" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark dark:text-white">
              Filter by Province
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {provinces.map((province) => {
              const isActive = activeProvince === province;
              const count =
                province === 'All'
                  ? centers.length
                  : centers.filter((c) => c.province === province).length;

              return (
                <motion.button
                  key={province}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveProvince(province)}
                  className={`relative rounded-full text-sm font-medium transition-all duration-300 px-4 py-2 border ${
                    isActive
                      ? 'bg-sanca-green dark:bg-sanca-gold text-white border-sanca-green dark:border-sanca-gold shadow-premium-sm'
                      : 'bg-white dark:bg-[#0D3B22] border-sanca-green/15 dark:border-sanca-gold/10 text-sanca-green-dark dark:text-white/70 hover:border-sanca-green/30 dark:hover:border-sanca-gold/25 hover:bg-sanca-green/5 dark:hover:bg-sanca-gold/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {province}
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-sanca-green/10 dark:bg-sanca-gold/10 text-sanca-green dark:text-sanca-gold'
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="provinceFilterActive"
                      className="absolute inset-0 rounded-full border-2 border-sanca-gold/30 dark:border-sanca-green/30"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ============= CENTER CARDS GRID — PREMIUM GOV ============= */}
        <div className="mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProvince}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {filteredCenters.map((center, i) => {
                const Icon = typeIcon(center.type);
                return (
                  <motion.div
                    key={`${center.name}-${center.location}`}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="group relative bg-white dark:bg-[#0D3B22] rounded-2xl p-5 shadow-premium-md border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] hover-lift overflow-hidden h-full flex flex-col">
                      {/* Left accent stripe */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sanca-green via-sanca-gold to-sanca-emerald rounded-l-2xl" />

                      {/* Top-right decorative dot */}
                      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-sanca-gold/20 dark:bg-sanca-gold/15" />

                      <div className="pl-3 flex-1 flex flex-col">
                        {/* Header row */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-sanca-green/10 dark:bg-sanca-gold/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <Icon className="h-5 w-5 text-sanca-green dark:text-sanca-gold" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-bold text-sm sm:text-base text-sanca-green-dark dark:text-white leading-tight">
                              {center.name}
                            </h4>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3 text-sanca-gold flex-shrink-0" />
                              <span className="text-xs text-muted-foreground dark:text-white/50">
                                {center.location}, {center.province}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${typeBadgeColor(center.type)}`}
                          >
                            <Icon className="h-3 w-3" />
                            {center.type}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border ${ownershipColor(center.ownership)}`}
                          >
                            <Landmark className="h-3 w-3" />
                            {center.ownership}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold border bg-sanca-cream text-sanca-green-dark border-sanca-sage dark:bg-sanca-green/20 dark:text-sanca-gold-light dark:border-sanca-green/30">
                            <Users className="h-3 w-3" />
                            Capacity: {center.capacity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12 text-muted-foreground dark:text-white/50">
              No centres found for this province.
            </div>
          )}
        </div>

        {/* ============= THREE-TIER SERVICE MODEL — GOV PREMIUM ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-14">
            {/* Government-style badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <div className="h-px w-8 bg-sanca-gold/30" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sanca-gold/[0.06] dark:bg-sanca-gold/[0.08] border border-sanca-gold/15 dark:border-sanca-gold/10">
                <Medal className="h-4 w-4 text-sanca-gold dark:text-sanca-gold-light" />
                <span className="text-xs font-semibold uppercase tracking-widest text-sanca-gold-dark dark:text-sanca-gold-light">
                  Service Delivery Model
                </span>
              </div>
              <div className="h-px w-8 bg-sanca-gold/30" />
            </motion.div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4">
              Three-Tier <span className="text-gradient-gold">Service Model</span>
            </h3>
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
              SANCA&apos;s service delivery is structured across three tiers — ensuring that help reaches every corner of South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {serviceTiers.map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="group relative bg-white dark:bg-[#0D3B22] rounded-2xl p-7 shadow-premium-lg border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] hover-lift overflow-hidden h-full flex flex-col">
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${tier.accent}`} />

                  {/* Corner decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                    <div className="absolute -top-6 -right-6 w-12 h-12 rotate-45 bg-sanca-green/[0.03] dark:bg-sanca-gold/[0.04]" />
                  </div>

                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${tier.accent} text-white`}>
                      <CircleDot className="h-3 w-3" />
                      {tier.badge}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium text-foreground/30 dark:text-white/20">
                      {tier.badgeSub}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${tier.accent} flex items-center justify-center shadow-premium-sm mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <tier.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Text */}
                  <h4 className="font-serif text-xl font-bold text-sanca-green-dark dark:text-white mb-1.5">
                    {tier.title}
                  </h4>
                  <p className="text-sm font-semibold text-sanca-gold dark:text-sanca-gold-light mb-3">
                    {tier.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70 leading-relaxed flex-1">
                    {tier.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting visual between tiers */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden md:flex items-center justify-center mt-6"
          >
            <div className="flex items-center gap-2 text-sanca-gold/40">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-sanca-gold/30" />
              <TrendingUp className="h-4 w-4" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">Community Reach</span>
              <TrendingUp className="h-4 w-4 rotate-180" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-sanca-gold/30" />
            </div>
          </motion.div>
        </motion.div>

        {/* ============= HUB-AND-SPOKE MODEL — PREMIUM GOV ============= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-14">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-5"
            >
              <div className="h-px w-8 bg-sanca-emerald/30" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sanca-emerald/[0.06] dark:bg-sanca-emerald/[0.08] border border-sanca-emerald/15 dark:border-sanca-emerald/10">
                <Network className="h-4 w-4 text-sanca-emerald" />
                <span className="text-xs font-semibold uppercase tracking-widest text-sanca-emerald dark:text-sanca-emerald">
                  Organisational Structure
                </span>
              </div>
              <div className="h-px w-8 bg-sanca-emerald/30" />
            </motion.div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4">
              Hub-and-Spoke <span className="text-gradient-gold">Model</span>
            </h3>
            <p className="text-muted-foreground dark:text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
              The National Office serves as the intellectual and administrative custodian of the SANCA brand, while regional affiliates adapt interventions to local realities.
            </p>
          </div>

          {/* Hub-and-Spoke Visual — Premium Government Card */}
          <div className="relative bg-white dark:bg-[#0D3B22] rounded-2xl p-6 sm:p-10 shadow-premium-xl border border-sanca-green/[0.06] dark:border-sanca-gold/[0.06] overflow-hidden">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-10 h-10 border-l border-t border-sanca-green/10 dark:border-sanca-gold/10 rounded-tl" />
            <div className="absolute top-3 right-3 w-10 h-10 border-r border-t border-sanca-green/10 dark:border-sanca-gold/10 rounded-tr" />

            <div className="flex flex-col items-center">
              {/* National Office Hub — Premium Government Seal Style */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative mb-10"
              >
                {/* Outer glow ring */}
                <div className="absolute -inset-4 rounded-full border border-sanca-gold/10 dark:border-sanca-gold/5 animate-pulse" />

                {/* Main hub circle */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-green-dark flex flex-col items-center justify-center shadow-green-glow border-[3px] border-sanca-gold/30 dark:border-sanca-gold/20 z-10">
                  {/* Inner decorative ring */}
                  <div className="absolute inset-2 rounded-full border border-sanca-gold/15 dark:border-sanca-gold/10" />

                  <Landmark className="h-8 w-8 sm:h-10 sm:w-10 text-sanca-gold-light mb-1.5" />
                  <span className="text-white text-xs sm:text-sm font-serif font-bold text-center px-3 leading-tight">
                    National Office
                  </span>
                  <span className="text-sanca-gold-light text-[10px] sm:text-xs mt-0.5 font-medium">
                    Custodian
                  </span>

                  {/* Small decorative dots around the hub */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sanca-gold/40" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sanca-gold/40" />
                  <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-sanca-gold/40" />
                  <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-sanca-gold/40" />
                </div>

                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-sanca-green/20 animate-ping" style={{ animationDuration: '3s' }} />
              </motion.div>

              {/* Connecting label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-2 mb-6 text-sanca-green/40 dark:text-sanca-gold/30"
              >
                <div className="h-px w-8 bg-sanca-green/20 dark:bg-sanca-gold/20" />
                <ArrowUpRight className="h-3.5 w-3.5 rotate-90" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Regional Affiliates</span>
                <ArrowUpRight className="h-3.5 w-3.5 -rotate-90" />
                <div className="h-px w-8 bg-sanca-green/20 dark:bg-sanca-gold/20" />
              </motion.div>

              {/* Province spokes */}
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
                  {hubSpokes.map((spoke, i) => (
                    <motion.div
                      key={spoke.province}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="group"
                    >
                      <div className="relative p-4 rounded-xl bg-sanca-cream/40 dark:bg-sanca-green/10 border border-sanca-sage/50 dark:border-sanca-green/15 hover:border-sanca-green/30 dark:hover:border-sanca-gold/20 transition-all duration-300 hover:shadow-premium-md cursor-default overflow-hidden">
                        {/* Subtle top accent */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sanca-green/20 to-transparent dark:via-sanca-gold/20 group-hover:via-sanca-gold/40 transition-colors" />

                        <div className="flex items-center gap-2.5 mb-2">
                          <span className="text-lg">{spoke.icon}</span>
                          <h5 className="font-serif font-bold text-sm text-sanca-green-dark dark:text-white">
                            {spoke.province}
                          </h5>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <ChevronRight className="h-3 w-3 text-sanca-gold flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs text-muted-foreground dark:text-white/50 leading-snug">
                            {spoke.note}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key insight — Premium Government Callout */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-10 max-w-3xl mx-auto w-full"
              >
                <div className="relative p-5 sm:p-6 rounded-xl bg-sanca-green/[0.03] dark:bg-sanca-green/[0.08] border border-sanca-green/10 dark:border-sanca-green/15 overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-sanca-gold/30 rounded-tl-lg" />

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sanca-gold/10 dark:bg-sanca-gold/15 flex items-center justify-center mt-0.5">
                      <Shield className="h-4 w-4 text-sanca-gold dark:text-sanca-gold-light" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-sanca-gold dark:text-sanca-gold-light mb-2">
                        Regional Adaptability
                      </p>
                      <p className="text-sm text-sanca-green-dark/80 dark:text-white/75 leading-relaxed">
                        Each affiliate is an independent legal entity that adapts interventions to local realities — for example, addressing &ldquo;tik&rdquo; (methamphetamine) in the Cape and &ldquo;nyaope&rdquo; in the northern provinces. This decentralised model ensures that SANCA&apos;s response is always locally relevant, culturally sensitive, and community-owned.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
