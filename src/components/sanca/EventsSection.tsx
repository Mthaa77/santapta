'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  MessageCircle,
  Calendar,
  Heart,
  Clock,
  MapPin,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/* ────────────────────────────────────────────
   Data
   ──────────────────────────────────────────── */

type EventType = 'Workshop' | 'Support Group' | 'Community' | 'Fundraiser';

interface EventData {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  description: string;
  type: EventType;
  time: string;
  location: string;
  badgeColor: string;
  badgeBg: string;
  dateCircleBg: string;
}

const events: EventData[] = [
  {
    id: 'family-support-workshop',
    title: 'Family Support Workshop',
    date: 'March 15, 2025',
    month: 'MAR',
    day: '15',
    description:
      'Learn how to support a loved one in recovery. Practical tools and coping strategies for families.',
    type: 'Workshop',
    time: '09:00–12:00',
    location: 'Castle Carey Clinic',
    badgeColor: 'text-green-700',
    badgeBg: 'bg-green-100',
    dateCircleBg: 'bg-sanca-green',
  },
  {
    id: 'weekly-aa-na',
    title: 'Weekly AA/NA Meetings',
    date: 'Every Sunday',
    month: 'SUN',
    day: '∞',
    description:
      'Open meetings for anyone in recovery. A safe space to share and connect with others on the same journey.',
    type: 'Support Group',
    time: '14:00–16:00',
    location: 'SANCA Pretoria',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    dateCircleBg: 'bg-sanca-emerald',
  },
  {
    id: 'youth-awareness-day',
    title: 'Youth Awareness Day',
    date: 'April 5, 2025',
    month: 'APR',
    day: '5',
    description:
      'Community event raising awareness about substance abuse among young people. Activities, talks, and resources.',
    type: 'Community',
    time: '10:00–15:00',
    location: 'Soshanguve Campus',
    badgeColor: 'text-sanca-gold-dark',
    badgeBg: 'bg-sanca-warm',
    dateCircleBg: 'bg-sanca-gold',
  },
  {
    id: 'charity-golf-day',
    title: 'Annual Charity Golf Day',
    date: 'May 20, 2025',
    month: 'MAY',
    day: '20',
    description:
      "Join our fundraiser golf day. All proceeds support subsidised treatment for those who can't afford it.",
    type: 'Fundraiser',
    time: '07:00–17:00',
    location: 'Pretoria Country Club',
    badgeColor: 'text-sanca-gold-dark',
    badgeBg: 'bg-amber-100',
    dateCircleBg: 'bg-sanca-gold-dark',
  },
];

interface StatData {
  icon: React.ElementType;
  target: number;
  suffix: string;
  label: string;
  gradient: string;
}

const communityStats: StatData[] = [
  {
    icon: Users,
    target: 2500,
    suffix: '+',
    label: 'Families Supported',
    gradient: 'icon-gradient',
  },
  {
    icon: MessageCircle,
    target: 15000,
    suffix: '+',
    label: 'Counselling Sessions',
    gradient: 'icon-gradient',
  },
  {
    icon: Calendar,
    target: 850,
    suffix: '+',
    label: 'Community Events',
    gradient: 'icon-gradient-gold',
  },
  {
    icon: Heart,
    target: 2.5,
    suffix: 'M+',
    label: 'Subsidised Treatment',
    gradient: 'icon-gradient-gold',
  },
];

/* ────────────────────────────────────────────
   Animated Counter
   ──────────────────────────────────────────── */

function AnimatedCounter({
  target,
  suffix,
  isRand,
}: {
  target: number;
  suffix: string;
  isRand: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  function formatValue(val: number): string {
    if (isRand) {
      return `R${val.toFixed(1)}${suffix}`;
    }
    if (target >= 1000) {
      return `${Math.round(val).toLocaleString()}${suffix}`;
    }
    return `${Math.round(val)}${suffix}`;
  }

  return (
    <span ref={ref} className="tabular-nums">
      {formatValue(count)}
    </span>
  );
}

/* ────────────────────────────────────────────
   Section
   ──────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function EventsSection() {
  return (
    <section
      id="events"
      className="section-top-gradient bg-sanca-cream py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-sanca-gold/30 bg-sanca-warm px-4 py-1.5 text-sm font-medium text-sanca-gold-dark">
            <Sparkles className="h-4 w-4" />
            Community
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-sanca-green-dark dark:text-white sm:text-4xl lg:text-6xl heading-gradient">
            Events &amp;{' '}
            <span className="text-gradient-gold">Community</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join us in building a healthier, substance-free community
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: Upcoming Events (3 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3 space-y-5"
          >
            <h3 className="flex items-center gap-2 text-xl font-semibold text-sanca-green-dark">
              <Calendar className="h-5 w-5 text-sanca-green" />
              Upcoming Events
            </h3>

            {events.map((event) => (
              <motion.div key={event.id} variants={itemVariants}>
                <Card className="hover-lift group flex gap-4 p-5 transition-colors sm:gap-5 sm:p-6">
                  {/* Date circle */}
                  <div
                    className={`${event.dateCircleBg} flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl text-white shadow-md`}
                  >
                    <span className="text-[10px] font-bold uppercase leading-none tracking-wider opacity-90">
                      {event.month}
                    </span>
                    <span className="mt-0.5 text-xl font-bold leading-none">
                      {event.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="font-serif text-lg font-semibold text-sanca-green-dark group-hover:text-sanca-green transition-colors">
                        {event.title}
                      </h4>
                      <span
                        className={`${event.badgeBg} ${event.badgeColor} rounded-full px-2.5 py-0.5 text-xs font-semibold`}
                      >
                        {event.type}
                      </span>
                    </div>
                    <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-sanca-green-light" />
                        {event.time}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-sanca-gold" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Community Impact Stats (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="shadow-premium-xl rounded-2xl border border-sanca-green/10 bg-white p-6 sm:p-8">
              <h3 className="mb-8 text-center font-serif text-xl font-bold text-sanca-green-dark">
                Our Community Impact
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {communityStats.map((stat) => {
                  const Icon = stat.icon;
                  const isRand = stat.suffix === 'M+';
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div
                        className={`${stat.gradient} mb-3 flex h-12 w-12 items-center justify-center rounded-2xl text-white`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-2xl font-bold text-sanca-green-dark sm:text-3xl">
                        <AnimatedCounter
                          target={stat.target}
                          suffix={stat.suffix}
                          isRand={isRand}
                        />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <h3 className="mb-5 font-serif text-2xl font-bold text-sanca-green-dark sm:text-3xl">
            Get Involved in Your Community
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              className="btn-ripple border-sanca-green text-sanca-green hover:bg-sanca-green hover:text-white premium-focus"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="btn-ripple bg-sanca-green text-white hover:bg-sanca-green-dark premium-focus"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
