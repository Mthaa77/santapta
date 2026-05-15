'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Gamepad2,
  Briefcase,
  Tv,
  Users,
  ShieldCheck,
  Heart,
  Star,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  HandHeart,
  Sparkles,
  Target,
  Lightbulb,
  Award,
  Phone,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ────────────────────────────────────────────
   Tab Data
   ──────────────────────────────────────────── */

interface TabData {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  content: React.ReactNode;
}

/* ────────────────────────────────────────────
   Puppet Programmes Tab Content
   ──────────────────────────────────────────── */

function PuppetProgrammeContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6 sm:p-8 shadow-premium-md border-2 border-sanca-green/20 hover-lift">
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-2xl bg-sanca-sage border border-sanca-green/15 flex items-center justify-center flex-shrink-0">
            <Users className="h-7 w-7 text-sanca-green" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
              Puppet Programmes
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-green/10 text-sanca-green text-xs font-semibold">
                Ages 3–14
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-sage text-sanca-green-dark text-xs font-medium">
                Developmental Intervention
              </span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          SANCA&apos;s Puppet Programmes use the power of <span className="text-sanca-green font-semibold">story-telling and puppetry</span> to
          teach young children about bodily autonomy, the dangers of substance misuse, and how
          to recognise unsafe situations — all in an age-appropriate, engaging format.
        </p>

        {/* Key Features */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: Heart,
              title: 'Bodily Autonomy',
              description: 'Teaching children about their bodies and personal boundaries',
            },
            {
              icon: ShieldCheck,
              title: 'Danger Recognition',
              description: 'How to identify and respond to unsafe situations involving substances',
            },
            {
              icon: BookOpen,
              title: 'Story-Based Learning',
              description: 'Engaging narratives that make complex topics accessible to young minds',
            },
            {
              icon: HandHeart,
              title: 'Partnered with DBE',
              description: 'Implemented in partnership with the Department of Basic Education',
            },
          ].map((feature) => {
            const FIcon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3 p-3 rounded-xl bg-sanca-cream border border-sanca-green/10"
              >
                <div className="relative w-8 h-8 rounded-lg bg-sanca-green/10 border border-sanca-green/15 flex items-center justify-center flex-shrink-0">
                  <FIcon className="h-4 w-4 text-sanca-green" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-sanca-green-dark">{feature.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-sanca-green/5 border border-sanca-green/10">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-sanca-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-sanca-green-dark leading-relaxed">
              <span className="font-semibold">Why it works:</span> Young children learn best through
              play and narrative. Puppet-based interventions build cognitive resilience{' '}
              <span className="text-sanca-green font-semibold">before addiction can take root</span>,
              making prevention far more effective than intervention later.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Teenagers Tab Content
   ──────────────────────────────────────────── */

function TeenagerProgrammeContent() {
  return (
    <div className="space-y-6">
      {/* Shatterproof Card */}
      <Card className="p-6 sm:p-8 shadow-premium-md border-2 border-sanca-gold/20 hover-lift">
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-2xl bg-sanca-warm border border-sanca-gold/15 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="h-7 w-7 text-sanca-gold-dark" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
              Shatterproof Programme
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-gold/10 text-sanca-gold-dark text-xs font-semibold">
                Ages 14–17
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-warm text-sanca-green-dark text-xs font-medium">
                Refusal Skills
              </span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-5">
          Shatterproof focuses on building <span className="text-sanca-gold-dark font-semibold">&quot;refusal skills&quot;</span> —
          equipping teenagers with practical strategies to navigate peer pressure, make healthy
          choices, and resist the social influences that lead to substance use.
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: 'Peer Pressure Navigation', icon: Users },
            { label: 'Decision-Making Skills', icon: Target },
            { label: 'Self-Efficacy Building', icon: Star },
          ].map((item) => {
            const IIcon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 p-3 rounded-lg bg-sanca-cream border border-sanca-gold/10"
              >
                <IIcon className="h-4 w-4 text-sanca-gold-dark flex-shrink-0" />
                <span className="text-xs font-medium text-sanca-green-dark">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* I-CAN Featured Card */}
      <Card className="shadow-premium-lg border-2 border-sanca-green/30 overflow-hidden hover-lift">
        {/* Top accent gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="relative w-14 h-14 rounded-2xl bg-sanca-green/15 border border-sanca-green/20 flex items-center justify-center flex-shrink-0">
              <Award className="h-7 w-7 text-sanca-green" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
                  I-CAN Programme
                </h4>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sanca-green text-white text-xs font-bold">
                  <Sparkles className="h-3 w-3" />
                  Flagship
                </span>
              </div>
              <p className="text-sanca-gold-dark text-sm font-semibold mt-1">
                SANCA National&apos;s Premier Prevention Programme
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The I-CAN programme is the <span className="text-sanca-green font-semibold">flagship prevention programme of SANCA National</span>,
            specifically designed for teenagers aged 14–17. It focuses on building cognitive
            resilience, self-awareness, and the critical &quot;refusal skills&quot; needed to resist
            peer pressure and make healthy life choices.
          </p>

          {/* Success Metrics */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 rounded-xl bg-sanca-green/5 border border-sanca-green/10">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-sanca-green tracking-tight">
                High
              </p>
              <p className="text-xs font-semibold text-sanca-green-dark mt-1">Success Rate</p>
              <p className="text-xs text-muted-foreground mt-0.5">Stopping substance misuse</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-sanca-gold/5 border border-sanca-gold/10">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-sanca-gold-dark tracking-tight">
                14–17
              </p>
              <p className="text-xs font-semibold text-sanca-green-dark mt-1">Target Age</p>
              <p className="text-xs text-muted-foreground mt-0.5">Critical development years</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-sanca-sage border border-sanca-green/10">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-sanca-green tracking-tight">
                DBE
              </p>
              <p className="text-xs font-semibold text-sanca-green-dark mt-1">Partnership</p>
              <p className="text-xs text-muted-foreground mt-0.5">Dept. of Basic Education</p>
            </div>
          </div>

          {/* Programme Pillars */}
          <div className="p-4 rounded-xl bg-sanca-cream border border-sanca-green/10">
            <p className="text-sm font-semibold text-sanca-green-dark mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-sanca-green" />
              Programme Pillars
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                'Cognitive resilience building',
                'Self-awareness and self-efficacy',
                'Refusal skills for peer pressure',
                'Life orientation integration',
                'Restorative justice principles',
                'Ongoing follow-up support',
              ].map((pillar) => (
                <div key={pillar} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sanca-green flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Workplace Tab Content
   ──────────────────────────────────────────── */

function WorkplaceContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6 sm:p-8 shadow-premium-md border-2 border-sanca-green/20 hover-lift">
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-2xl bg-sanca-sage border border-sanca-green/15 flex items-center justify-center flex-shrink-0">
            <Briefcase className="h-7 w-7 text-sanca-green" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
              Workplace Interventions
            </h4>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-green/10 text-sanca-green text-xs font-semibold mt-1">
              Corporate Partnerships
            </span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          SANCA assists corporate entities in developing{' '}
          <span className="text-sanca-green font-semibold">proactive substance use policies</span>,
          conducting screenings, and providing referral pathways for employees in distress.
          Substance abuse in the workplace costs South African businesses billions annually —
          early intervention protects both people and profits.
        </p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: BookOpen,
              title: 'Policy Development',
              description: 'Custom substance use policies tailored to your organisation',
              accent: 'bg-sanca-green/10 border-sanca-green/15',
              iconColor: 'text-sanca-green',
            },
            {
              icon: ShieldCheck,
              title: 'Employee Screenings',
              description: 'Professional, confidential screening programmes',
              accent: 'bg-sanca-gold/10 border-sanca-gold/15',
              iconColor: 'text-sanca-gold-dark',
            },
            {
              icon: HandHeart,
              title: 'Referral Pathways',
              description: 'Direct access to SANCA treatment and counselling',
              accent: 'bg-sanca-emerald/10 border-sanca-emerald/15',
              iconColor: 'text-sanca-emerald',
            },
          ].map((service) => {
            const SIcon = service.icon;
            return (
              <div
                key={service.title}
                className={`p-4 rounded-xl border ${service.accent}`}
              >
                <SIcon className={`h-6 w-6 ${service.iconColor} mb-3`} />
                <p className="text-sm font-semibold text-sanca-green-dark mb-1">{service.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-sanca-cream border border-sanca-green/10">
            <p className="font-serif text-2xl font-bold text-sanca-green tracking-tight">R37B+</p>
            <p className="text-xs text-muted-foreground">
              Annual cost of alcohol abuse to South African economy
            </p>
          </div>
          <div className="p-4 rounded-xl bg-sanca-cream border border-sanca-green/10">
            <p className="font-serif text-2xl font-bold text-sanca-green tracking-tight">15–30%</p>
            <p className="text-xs text-muted-foreground">
              Reduction in workplace accidents with proper substance policies
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Digital Innovation Tab Content
   ──────────────────────────────────────────── */

function DigitalInnovationContent() {
  return (
    <div className="space-y-6">
      {/* Makers of Tomorrow Campaign */}
      <Card className="shadow-premium-lg border-2 border-sanca-gold/20 overflow-hidden hover-lift">
        <div className="h-1.5 bg-gradient-to-r from-sanca-gold-dark via-sanca-gold to-sanca-gold-light" />
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="relative w-14 h-14 rounded-2xl bg-sanca-warm border border-sanca-gold/15 flex items-center justify-center flex-shrink-0">
              <Tv className="h-7 w-7 text-sanca-gold-dark" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
                Makers of Tomorrow
              </h4>
              <p className="text-sanca-gold-dark text-sm font-semibold mt-1">
                National TV Campaign on SABC TV1
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The &quot;Makers of Tomorrow&quot; campaign utilised high-ranking youth dramas on SABC TV1,
            reaching an extraordinary audience and bringing substance abuse awareness into
            millions of South African homes through compelling storytelling.
          </p>

          {/* Big Stat */}
          <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-sanca-gold/10 via-sanca-warm to-sanca-gold/5 border border-sanca-gold/15 mb-5">
            <p className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-sanca-gold-dark tracking-tight animate-count-glow">
              225M+
            </p>
            <p className="text-sm font-semibold text-sanca-green-dark mt-2">Viewers Reached</p>
            <p className="text-xs text-muted-foreground mt-1">
              Through high-ranking youth dramas on SABC TV1
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-sanca-cream border border-sanca-gold/10">
            <Sparkles className="h-5 w-5 text-sanca-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              By embedding prevention messages in popular youth dramas, the campaign reached
              audiences who would never engage with traditional anti-drug messaging.
            </p>
          </div>
        </div>
      </Card>

      {/* Gamification / Roblox Card */}
      <Card className="p-6 sm:p-8 shadow-premium-md border-2 border-sanca-green/20 hover-lift">
        <div className="flex items-start gap-4 mb-5">
          <div className="relative w-14 h-14 rounded-2xl bg-sanca-sage border border-sanca-green/15 flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-7 w-7 text-sanca-green" />
          </div>
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark tracking-tight">
              Gamified Interventions
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-green/10 text-sanca-green text-xs font-semibold">
                Innovative
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sanca-emerald/10 text-sanca-emerald text-xs font-semibold">
                Roblox Platform
              </span>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          SANCA&apos;s partners have developed <span className="text-sanca-green font-semibold">interactive gaming experiences</span> on
          platforms like Roblox to teach &quot;refusal skills&quot; to tens of thousands of young South
          Africans — reaching demographics that are resistant to traditional &quot;talk-therapy&quot; approaches.
        </p>

        {/* How It Works */}
        <div className="space-y-3 mb-6">
          {[
            {
              step: '1',
              title: 'Engaging Game Worlds',
              description:
                'Young people enter immersive game environments on platforms they already use',
            },
            {
              step: '2',
              title: 'Scenario-Based Challenges',
              description:
                'Players face realistic peer-pressure scenarios and practice refusal responses',
            },
            {
              step: '3',
              title: 'Skills Transfer',
              description:
                'Learned behaviours transfer to real-life situations, building genuine resilience',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-3 p-3 rounded-xl bg-sanca-cream border border-sanca-green/10"
            >
              <div className="relative w-8 h-8 rounded-full bg-sanca-green text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                {item.step}
              </div>
              <div>
                <p className="text-sm font-semibold text-sanca-green-dark">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-sanca-green/5 border border-sanca-green/10">
          <div className="flex items-start gap-3">
            <Gamepad2 className="h-5 w-5 text-sanca-green flex-shrink-0 mt-0.5" />
            <p className="text-sm text-sanca-green-dark leading-relaxed">
              <span className="font-semibold">Why gaming works:</span> Young people who would never
              attend a counselling session willingly spend hours in game worlds. By embedding
              prevention education in these environments, we reach{' '}
              <span className="text-sanca-green font-semibold">tens of thousands</span> of youth
              who traditional programmes simply cannot.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ────────────────────────────────────────────
   Tab Configuration
   ──────────────────────────────────────────── */

const tabs: TabData[] = [
  {
    id: 'young-children',
    label: 'Young Children (3–14)',
    shortLabel: 'Ages 3–14',
    icon: Users,
    accentColor: 'text-sanca-green',
    accentBg: 'bg-sanca-green',
    accentBorder: 'border-sanca-green/30',
    content: <PuppetProgrammeContent />,
  },
  {
    id: 'teenagers',
    label: 'Teenagers (14–17)',
    shortLabel: 'Ages 14–17',
    icon: GraduationCap,
    accentColor: 'text-sanca-gold-dark',
    accentBg: 'bg-sanca-gold',
    accentBorder: 'border-sanca-gold/30',
    content: <TeenagerProgrammeContent />,
  },
  {
    id: 'workplace',
    label: 'Workplace',
    shortLabel: 'Workplace',
    icon: Briefcase,
    accentColor: 'text-sanca-emerald',
    accentBg: 'bg-sanca-emerald',
    accentBorder: 'border-sanca-emerald/30',
    content: <WorkplaceContent />,
  },
  {
    id: 'digital',
    label: 'Digital Innovation',
    shortLabel: 'Digital',
    icon: Gamepad2,
    accentColor: 'text-sanca-green',
    accentBg: 'bg-sanca-green',
    accentBorder: 'border-sanca-green/30',
    content: <DigitalInnovationContent />,
  },
];

/* ────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────── */

export default function PreventionProgrammesSection() {
  const [activeTab, setActiveTab] = useState('teenagers');

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="prevention" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sanca-green/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sanca-gold/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <GraduationCap className="h-4 w-4" />
            Prevention &amp; Education
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient section-heading-lg">
            Building <span className="text-gradient-gold">Resilience</span> Before Addiction Takes Root
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Prevention programmes build cognitive resilience early — implemented in partnership
            with the Department of Basic Education and innovative digital platforms to reach
            South Africans where they are.
          </p>
        </motion.div>

        {/* ─── Tab Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? `${tab.accentBg} text-white shadow-premium-md`
                      : 'bg-white text-muted-foreground border border-gray-200 hover:border-sanca-green/30 hover:text-sanca-green'
                  }`}
                >
                  <TabIcon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Tab Content ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {currentTab.content}
          </motion.div>
        </AnimatePresence>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="shadow-premium-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-br from-sanca-green-dark via-sanca-green to-sanca-emerald p-8 sm:p-12 text-center relative">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

              <div className="relative">
                <div className="relative w-14 h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mx-auto mb-6">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  <GraduationCap className="h-7 w-7 text-sanca-gold-light" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                  Partner with SANCA for Prevention
                </h3>
                <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Whether you&apos;re a school looking for age-appropriate programmes, or a corporation
                  seeking proactive substance policies — SANCA Pretoria has the expertise and
                  evidence-based programmes to protect your community.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={() =>
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="bg-sanca-gold hover:bg-sanca-gold-dark text-white font-semibold px-8 py-3 text-base shadow-gold btn-ripple"
                  >
                    Schools: Start a Programme
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <a
                    href="tel:0125421121"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Corporations: 012 542 1121
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
