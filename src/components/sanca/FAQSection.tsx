'use client';

import { motion } from 'framer-motion';
import { HelpCircle, Search, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'Admissions & Getting Help',
    items: [
      {
        q: 'How do I get admitted to SANCA Pretoria?',
        a: 'You can reach us by calling 012 542 1121, WhatsApp 081 318 1511, or using our website chatbot. No referral is needed — anyone can reach out directly. You\'ll receive a callback within one business day, and we\'ll guide you through the assessment and admission process.',
      },
      {
        q: 'Do I need a referral from a doctor to be admitted?',
        a: 'No referral is needed. You can contact SANCA directly. However, patients above 60 years of age must submit a medical report from a GP with current physical health conditions.',
      },
      {
        q: 'What are the admission hours?',
        a: 'General assessments are from 08:00–12:00 daily. Alcohol admissions are from 06:00–16:00 and 19:00–22:00, seven days a week. Patients from far can be admitted after 14:00 or on weekends. We accept admissions 7 days a week.',
      },
      {
        q: 'Can I be admitted on weekends?',
        a: 'Yes, SANCA Pretoria accepts admissions 7 days a week. Patients from far areas can be admitted after 14:00 or on weekends.',
      },
    ],
  },
  {
    category: 'Treatment & Programmes',
    items: [
      {
        q: 'How long is the inpatient programme?',
        a: 'The inpatient programme at Castle Carey Clinic is 4–6 weeks. Medical Aid funds 21 or 24 days — and importantly, there is NO co-payment for additional days beyond what medical aid funds.',
      },
      {
        q: 'What happens during treatment?',
        a: 'Each patient receives an Individual Treatment Plan (ITP) developed with their assigned therapist. The programme includes medical detoxification, individual therapy, intensive group therapy, occupational therapy, family therapy, stress management, relaxation sessions, and aftercare planning. A multi-professional team closely monitors each patient.',
      },
      {
        q: 'Is there a programme for teenagers?',
        a: 'Yes, the Lapalamé Youth Drug Unit is a specialised inpatient facility for adolescent males aged 13–18. It has a capacity of 8 patients, ensuring personal attention. Parental involvement is a mandatory component throughout the programme.',
      },
      {
        q: 'What is the outpatient programme?',
        a: 'Our outpatient programme at Soshanguve and Hammanskraal clinics allows you to attend treatment without missing work or school. It includes assessment, individual counselling, group therapy, family programmes, drug testing, relapse management, and aftercare support.',
      },
      {
        q: 'What happens after treatment (aftercare)?',
        a: 'Aftercare equips you with skills to maintain sobriety and reduce relapse risk. It includes relapse prevention training, self-help group integration (AA, NA), ongoing outpatient check-ins, family support groups, and community reintegration support. Discharge planning begins from week 3 of the inpatient programme.',
      },
    ],
  },
  {
    category: 'Costs & Medical Aid',
    items: [
      {
        q: 'Does SANCA accept medical aid?',
        a: 'Yes, SANCA accepts medical aid authorisation. Medical Aid funds 21 or 24 days of treatment. Importantly, there is NO co-payment for additional days beyond what medical aid covers. We also accept cash payment.',
      },
      {
        q: 'What if I don\'t have medical aid?',
        a: 'SANCA Pretoria is a non-profit, DSD-registered organisation offering the most affordable care in the region. Cash payment options are available, and the cost is significantly lower than private rehabs. Contact us directly for current pricing.',
      },
      {
        q: 'Is substance abuse treatment covered by Prescribed Minimum Benefits (PMB)?',
        a: 'Yes. Under South Africa\'s Medical Schemes Act, substance use disorders qualify as a Prescribed Minimum Benefit (PMB) condition. This means medical aids are legally required to fund treatment. Contact us and we\'ll help you understand your rights and navigate the process.',
      },
    ],
  },
  {
    category: 'Visiting & Family',
    items: [
      {
        q: 'Can family members visit during treatment?',
        a: 'No visitors are allowed during the first 2 weeks of treatment. From the 3rd week onwards, visitors are welcome. No phone calls to patients are allowed within the first 7 days of treatment. Castle Carey Clinic actively welcomes family as part of the recovery process.',
      },
      {
        q: 'Is family therapy available?',
        a: 'Yes, family therapy is a core component of our treatment programmes. We offer family therapy sessions, family groups, and regular Family Support Sessions. Families are considered essential partners in the recovery journey.',
      },
      {
        q: 'What should I bring to Castle Carey Clinic?',
        a: 'Bring comfortable clothing, toiletries, any prescribed medication (in original packaging), ID document, medical aid card (if applicable), and a positive attitude. Avoid bringing valuables, large amounts of cash, or any substances. A detailed packing list will be provided during the intake call.',
      },
    ],
  },
  {
    category: 'About SANCA',
    items: [
      {
        q: 'What is SANCA?',
        a: 'SANCA stands for the South African National Council on Alcoholism and Drug Dependence. Founded in 1956, it is a non-governmental organisation with 32 societies operating across all 9 provinces. SANCA Pretoria was one of the original 8 founding affiliates, established in 1957.',
      },
      {
        q: 'Is SANCA a government organisation?',
        a: 'SANCA is a Non-Governmental Organisation (NGO) / Non-Profit Organisation (NPO). However, it is registered with and regulated by the Department of Social Development (DSD), and meets the Minimum Norms and Standards set by the National Department of Social Development.',
      },
      {
        q: 'How is SANCA different from private rehabs?',
        a: 'SANCA is the most affordable treatment option in the region, with no co-payment for extra days beyond medical aid funding. With 68+ years of experience, a multi-professional team, DSD registration, and a holistic programme (including spiritual, occupational, and family components), SANCA offers a depth of care that newer private facilities cannot match.',
      },
    ],
  },
];

export default function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />
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
            <HelpCircle className="h-4 w-4" />
            Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-sanca-green-dark dark:text-white mb-4 tracking-tight heading-gradient">
            Questions & <span className="text-gradient-gold">Answers</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about getting help at SANCA Pretoria. Can&apos;t find
            your answer? We&apos;re just a call away.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions... (e.g. medical aid, visiting, teenagers)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-4 text-base rounded-xl border-sanca-green/20 focus:border-sanca-green shadow-premium-sm"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-3xl mx-auto space-y-8">
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="font-serif text-xl font-bold text-sanca-green-dark dark:text-white mb-4 flex items-center gap-2 tracking-tight">
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center text-sm font-bold text-sanca-green">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  {catIndex + 1}
                </div>
                {category.category}
              </h3>
              <Card className="shadow-premium-md border-0 dark:bg-[#0D3B22] overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem
                      key={itemIndex}
                      value={`${catIndex}-${itemIndex}`}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-sanca-green/[0.02] hover:no-underline group">
                        <span className="font-medium text-sm sm:text-base text-foreground pr-4 group-hover:text-sanca-green transition-colors">
                          {item.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg mb-4">
                No questions match &ldquo;{searchQuery}&rdquo;
              </p>
              <a
                href="tel:0125421121"
                className="inline-flex items-center gap-2 text-sanca-green font-medium hover:underline"
              >
                Call us at 012 542 1121 — we&apos;re happy to help
              </a>
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 leading-relaxed">Still have questions? We&apos;re here to help.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:0125421121"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sanca-green text-white font-medium text-sm hover:bg-sanca-green-dark transition-colors shadow-premium-sm"
            >
              📞 Call 012 542 1121
            </a>
            <a
              href="https://wa.me/27813181511"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sanca-emerald text-white font-medium text-sm hover:bg-sanca-emerald/90 transition-colors shadow-premium-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
