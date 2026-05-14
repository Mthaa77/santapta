'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedCounter from './AnimatedCounter';

const testimonials = [
  {
    id: 1,
    quote: 'Thanks to Castle Carey, I feel like I\'m new and improved... still have tools the clinic helped me with. Thanks again for the change you brought in my life.',
    author: 'Anonymous Patient',
    role: 'Inpatient Programme Graduate',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Many say the turning point was knowing they weren\'t judged but just supported. That\'s what makes Castle Carey different.',
    author: 'Community Member',
    role: 'Family Support Group',
    rating: 5,
  },
  {
    id: 3,
    quote: 'Clients who completed our 4-week programme reported fewer cravings, healthier routines, and stronger family relationships.',
    author: 'Clinical Team Member',
    role: 'SANCA Pretoria',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Several shared that they finally felt "steady enough" to return to work and rebuild their lives.',
    author: 'Staff Member',
    role: 'Castle Carey Clinic',
    rating: 5,
  },
  {
    id: 5,
    quote: 'I realised my child doesn\'t just need support for today… they need support for every tomorrow too.',
    author: 'Mother of a Patient',
    role: 'Family Support Session, Nov 2025',
    rating: 5,
  },
  {
    id: 6,
    quote: 'Growth takes time, and today our patients proved just how powerful small steps can be. From preparing the soil to harvesting fresh veggies, every moment in the garden became a moment of healing.',
    author: 'Occupational Therapy Team',
    role: 'Castle Carey Clinic',
    rating: 5,
  },
];

const stats = [
  { label: 'Years of Service', value: 68, suffix: '+', icon: '🏥' },
  { label: 'SANCA Societies Nationwide', value: 32, suffix: '', icon: '🇿🇦' },
  { label: 'Provinces Covered', value: 9, suffix: '', icon: '🗺️' },
  { label: 'Patients Helped Annually', value: 1000, suffix: '+', icon: '💚' },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="py-20 sm:py-28 bg-sanca-sage/30 relative overflow-hidden section-top-gradient">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sanca-gold/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl" />

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
            <Users className="h-4 w-4" />
            Stories of Hope
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Voices of <span className="text-gradient-gold">Recovery</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Real stories from those who walked the path before you — living proof that
            transformation is not only possible, but lasting. When you choose SANCA, you join a
            community of survivors, thrivers, and believers who refused to give up.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="p-5 text-center shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 group hover:-translate-y-1">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-sanca-green-dark group-hover:text-sanca-green transition-colors tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-premium-2xl border-0 overflow-hidden">
            <div className="p-8 sm:p-12 relative">
              {/* Quote decoration */}
              <div className="absolute top-4 left-6 opacity-10">
                <Quote className="h-20 w-20 text-sanca-green" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sanca-gold text-sanca-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-sanca-green-dark leading-relaxed mb-6">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                      <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                      <span className="text-sanca-green font-serif font-bold text-sm">
                        {testimonials[current].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {testimonials[current].author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'w-8 bg-sanca-green scroll-indicator-pulse' : 'w-2 bg-gray-200 hover:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prev}
                    className="h-9 w-9 rounded-full border-sanca-green/20"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={next}
                    className="h-9 w-9 rounded-full border-sanca-green/20"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
