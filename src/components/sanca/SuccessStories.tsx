'use client';

import { motion } from 'framer-motion';
import { Quote, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stories = [
  {
    id: 1,
    quote:
      'I walked through the doors of Castle Carey broken and afraid. Today, 5 years later, I have my family back, my career, and my dignity. SANCA didn\'t just save my life — they taught me how to live it.',
    initials: 'M.K.',
    programme: 'Inpatient',
    sobriety: '5 Years Sober',
    accentColor: 'from-sanca-green to-sanca-emerald',
    avatarBg: 'bg-sanca-green',
    badgeBg: 'bg-sanca-green/10 text-sanca-green',
    stripeColor: 'bg-sanca-green',
  },
  {
    id: 2,
    quote:
      'The outpatient programme allowed me to keep working while getting the help I needed. The counsellors understood my situation and never judged me. I\'m proof that recovery is possible.',
    initials: 'T.P.',
    programme: 'Outpatient',
    sobriety: '3 Years Sober',
    accentColor: 'from-sanca-gold to-sanca-gold-dark',
    avatarBg: 'bg-sanca-gold',
    badgeBg: 'bg-sanca-gold/10 text-sanca-gold-dark',
    stripeColor: 'bg-sanca-gold',
  },
  {
    id: 3,
    quote:
      'I was only 17 when I came to Lapalamé. I thought my life was over. The youth programme showed me I had a whole life ahead of me. Now I\'m studying and helping other young people.',
    initials: 'L.N.',
    programme: 'Youth Programme',
    sobriety: '2 Years Sober',
    accentColor: 'from-sanca-emerald to-teal-600',
    avatarBg: 'bg-sanca-emerald',
    badgeBg: 'bg-sanca-emerald/10 text-sanca-emerald',
    stripeColor: 'bg-sanca-emerald',
  },
  {
    id: 4,
    quote:
      'Aftercare kept me grounded. The AA groups, the check-ins — they reminded me I wasn\'t alone. Recovery isn\'t a straight line, but with SANCA\'s aftercare, I never lost my way back.',
    initials: 'A.R.',
    programme: 'Aftercare',
    sobriety: '7 Years Sober',
    accentColor: 'from-sanca-gold-dark to-amber-700',
    avatarBg: 'bg-sanca-gold-dark',
    badgeBg: 'bg-sanca-gold-dark/10 text-sanca-gold-dark',
    stripeColor: 'bg-sanca-gold-dark',
  },
];

export default function SuccessStories() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="stories" className="py-20 sm:py-28 bg-white relative overflow-hidden section-top-gradient">
      {/* Subtle sage accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sanca-sage/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sanca-sage/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-gold/10 text-sanca-gold-dark text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            Recovery Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sanca-green-dark mb-4">
            Stories of <span className="text-gradient-gold">Hope</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Real journeys. Real recovery. You are not alone.
          </p>
        </motion.div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group"
            >
              <Card className="h-full shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 overflow-hidden hover-lift relative">
                {/* Top accent stripe */}
                <div className={`h-1.5 bg-gradient-to-r ${story.accentColor}`} />

                <div className="p-6 flex flex-col h-full">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-sanca-gold/30" />
                  </div>

                  {/* Testimonial quote */}
                  <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed flex-1 mb-4">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-sanca-gold/40 to-transparent mb-4" />

                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    {/* Initials avatar */}
                    <div
                      className={`w-10 h-10 rounded-full ${story.avatarBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white font-serif font-bold text-sm">
                        {story.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm text-foreground">{story.initials}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-medium ${story.badgeBg}`}
                        >
                          {story.programme}
                        </span>
                        <span className="text-[11px] text-muted-foreground font-medium">
                          {story.sobriety}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-sanca-green-dark mb-4">
            Your Story <span className="text-gradient-gold">Matters</span>
          </h3>
          <Button
            onClick={scrollToContact}
            className="bg-sanca-green hover:bg-sanca-green-dark text-white btn-ripple shadow-premium-md hover:shadow-premium-lg transition-all duration-300 px-8"
            size="lg"
          >
            Share Your Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
