'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  FileText,
  Users,
  MessageSquare,
  Heart,
  Brain,
  GraduationCap,
  ClipboardList,
  Download,
  Library,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Category = 'All' | 'For Patients' | 'For Families' | 'For Professionals' | 'For Youth';

interface Resource {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  fileType: string;
  category: Exclude<Category, 'All'>;
  badgeColor: string;
  badgeBg: string;
  iconColor: string;
  iconBg: string;
}

const categories: Category[] = ['All', 'For Patients', 'For Families', 'For Professionals', 'For Youth'];

const resources: Resource[] = [
  {
    title: 'Understanding Addiction',
    icon: BookOpen,
    fileType: 'PDF',
    category: 'For Patients',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    title: 'Relapse Prevention Workbook',
    icon: FileText,
    fileType: 'PDF',
    category: 'For Patients',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    title: 'Family Support Guide',
    icon: Users,
    fileType: 'PDF',
    category: 'For Families',
    badgeColor: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    title: 'Talking to Your Teen About Drugs',
    icon: MessageSquare,
    fileType: 'PDF',
    category: 'For Families',
    badgeColor: 'text-amber-700',
    badgeBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    title: 'Medical Aid & Rehabilitation',
    icon: Heart,
    fileType: 'PDF',
    category: 'For Patients',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    title: 'Counselling Techniques Manual',
    icon: Brain,
    fileType: 'PDF',
    category: 'For Professionals',
    badgeColor: 'text-teal-700',
    badgeBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
  },
  {
    title: 'Youth Recovery Handbook',
    icon: GraduationCap,
    fileType: 'PDF',
    category: 'For Youth',
    badgeColor: 'text-green-700',
    badgeBg: 'bg-green-100',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-50',
  },
  {
    title: 'Aftercare Planning Template',
    icon: ClipboardList,
    fileType: 'PDF',
    category: 'For Patients',
    badgeColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
];

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredResources =
    activeCategory === 'All'
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <section id="resources" className="py-20 sm:py-28 bg-sanca-cream relative overflow-hidden section-top-gradient">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sanca-green/5 rounded-full translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-sanca-gold/5 rounded-full -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 text-sanca-green text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <Library className="h-4 w-4" />
            Helpful Resources
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Helpful <span className="text-gradient-gold">Resources</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Practical guides, worksheets, and information for your recovery journey. We&apos;re here to support you every step of the way.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap min-h-[44px] ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-sanca-green-dark hover:bg-sanca-green/10'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeResourceTab"
                    className="absolute inset-0 bg-sanca-green rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="hover-lift shadow-premium-md border-0 bg-white h-full flex flex-col overflow-hidden group">
                    {/* Category badge at top */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${resource.badgeBg} ${resource.badgeColor}`}
                        >
                          {resource.category}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-sanca-green/10 text-sanca-green">
                          {resource.fileType}
                        </span>
                      </div>

                      {/* Document Icon */}
                      <div
                        className={`relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]`}
                      >
                        <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                        <IconComponent className={`h-6 w-6 ${resource.iconColor}`} />
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-sm sm:text-base font-bold text-sanca-green-dark leading-snug mb-4 flex-1 tracking-tight">
                        {resource.title}
                      </h3>

                      {/* Download Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="btn-ripple w-full border-sanca-green/20 text-sanca-green hover:bg-sanca-green hover:text-white hover:border-sanca-green transition-colors min-h-[44px]"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            All resources are free to download. For printed copies, please contact us at{' '}
            <a href="tel:0125421121" className="text-sanca-green font-medium hover:underline">
              012 542 1121
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
