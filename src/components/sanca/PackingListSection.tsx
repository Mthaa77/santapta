'use client';

import { motion } from 'framer-motion';
import { Luggage, CheckCircle2, XCircle, Shirt, Pill, FileText, Sparkles, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const bringItems = [
  {
    category: 'Clothing & Comfort',
    icon: Shirt,
    items: [
      'Comfortable casual clothing (2 weeks supply)',
      'Sleepwear / pyjamas',
      'Warm jacket or jersey',
      'Comfortable walking shoes',
      'Slippers or sandals',
      'Underwear & socks (sufficient supply)',
      'Swimwear (if seasonally appropriate)',
    ],
  },
  {
    category: 'Personal Care',
    icon: Sparkles,
    items: [
      'Toiletries (toothbrush, toothpaste, soap, shampoo)',
      'Towel and face cloth',
      'Deodorant (non-alcohol based)',
      'Sunscreen and lip balm',
      'Hairbrush / comb',
    ],
  },
  {
    category: 'Medical & Documentation',
    icon: Pill,
    items: [
      'ID document or valid passport',
      'Medical aid card (if applicable)',
      'Any prescribed medication (in original packaging)',
      'Medical report from GP (patients over 60)',
      'Proof of address',
    ],
  },
  {
    category: 'Personal Items',
    icon: FileText,
    items: [
      'Journal or notebook',
      'Inspirational books (subject to approval)',
      'Family photos (small, unframed)',
      'Phone (will be secured during first 7 days)',
      'Small amount of cash for toiletries',
    ],
  },
];

const doNotBring = [
  'Any substances or drugs (including over-the-counter)',
  'Alcohol-based products (mouthwash, hand sanitiser, perfume)',
  'Sharp objects (knives, scissors, razors)',
  'Large amounts of cash',
  'Valuable jewellery or electronics',
  'Outside food or beverages',
  'Matches, lighters, or any flammable items',
  'Any items that could trigger other patients',
];

export default function PackingListSection() {
  return (
    <section className="py-20 sm:py-28 bg-sanca-sage/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-sanca-green/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

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
            <Luggage className="h-4 w-4" />
            What to Bring
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Packing for <span className="text-gradient-gold">Your Stay</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Preparing for admission? Here&apos;s a helpful guide on what to pack — and what
            to leave at home. We want you to feel as comfortable as possible.
          </p>
        </motion.div>

        {/* What to Bring */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {bringItems.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="p-5 shadow-premium-md hover:shadow-premium-lg transition-all duration-300 border-0 h-full">
                  <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center mb-4 transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]">
                    <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                    <Icon className="h-5 w-5 text-sanca-green" />
                  </div>
                  <h4 className="font-serif font-bold text-sanca-green-dark mb-3 text-sm tracking-tight">
                    {category.category}
                  </h4>
                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sanca-emerald mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* What NOT to Bring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 sm:p-8 shadow-premium-lg border-2 border-red-200 bg-red-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <h4 className="font-serif font-bold text-red-700 text-lg tracking-tight">
                Do NOT Bring
              </h4>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
              {doNotBring.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-red-800/80">
                  <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600/60 mt-4 italic leading-relaxed">
              All belongings are checked upon admission. Prohibited items will be securely stored and returned upon discharge.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
