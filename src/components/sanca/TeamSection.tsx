'use client';

import { motion } from 'framer-motion';
import { HeartPulse, Users, Brain, ShieldCheck, Stethoscope } from 'lucide-react';
import { Card } from '@/components/ui/card';

const teamRoles = [
  {
    id: 1,
    title: 'Medical Team',
    icon: HeartPulse,
    iconBg: 'bg-sanca-green',
    description:
      '24-hour medical supervision during detox and treatment. Our doctors and nursing staff ensure safe, comfortable withdrawal management.',
    services: ['Medical detox supervision', 'Psychiatric assessment', 'Medication management'],
    accentBar: 'bg-sanca-green',
  },
  {
    id: 2,
    title: 'Social Workers',
    icon: Users,
    iconBg: 'bg-sanca-emerald',
    description:
      'Professional social workers guide you through assessment, treatment planning, and family reintegration.',
    services: ['Comprehensive assessment', 'Individual treatment plans', 'Family therapy'],
    accentBar: 'bg-sanca-emerald',
  },
  {
    id: 3,
    title: 'Counsellors',
    icon: Brain,
    iconBg: 'bg-sanca-gold',
    description:
      'Experienced addiction counsellors provide individual and group therapy using evidence-based approaches.',
    services: ['One-on-one counselling', 'Group therapy sessions', 'Relapse prevention'],
    accentBar: 'bg-sanca-gold',
  },
  {
    id: 4,
    title: 'Support Staff',
    icon: ShieldCheck,
    iconBg: 'bg-sanca-gold-dark',
    description:
      'Dedicated support team ensuring a safe, comfortable environment throughout your stay.',
    services: ['24-hour support', 'Activity coordination', 'Aftercare planning'],
    accentBar: 'bg-sanca-gold-dark',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sanca-gold/5 rounded-full translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-10 left-0 w-56 h-56 bg-sanca-green/5 rounded-full -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4">
            <Stethoscope className="h-4 w-4" />
            Our Professionals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 heading-gradient">
            Our Expert <span className="text-gradient-gold">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated professionals committed to your recovery journey
          </p>
        </motion.div>

        {/* Team Role Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamRoles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group"
              >
                <Card className="h-full shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 overflow-hidden hover-lift relative flex flex-col">
                  {/* Bottom accent bar */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1.5 ${role.accentBar} transition-all duration-300 group-hover:h-2`}
                  />

                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    {/* Professional icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${role.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Role title */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-sanca-green-dark mb-2">
                      {role.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {role.description}
                    </p>

                    {/* Key services list */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-sanca-green-dark/60">
                        Key Services
                      </p>
                      <ul className="space-y-1.5">
                        {role.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full ${role.accentBar} flex-shrink-0`}
                            />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
