'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Users, Building2, TreePine, GraduationCap, ArrowRight, ChevronDown, Mail, Navigation, Camera, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const facilities = [
  {
    id: 'castle-carey',
    name: 'Castle Carey Clinic',
    type: 'Inpatient Adult Facility',
    icon: Building2,
    image: '/images/sanca/castle-carey-welcome.jpg',
    color: 'from-sanca-green-dark to-sanca-green',
    address: 'Corner Rachel De Beer & Waterbok Street, Ninapark, Pretoria North, 0182',
    phone: '012 542 1121 / 012 542 1122',
    whatsapp: '+27 81 318 1511',
    email: 'info@sancapta.co.za',
    capacity: '52 patients (adults)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8!2d28.18!3d-25.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNinapark%2C+Pretoria+North!5e0!3m2!1sen!2sza!4v1',
    mapSearchUrl: 'https://www.google.com/maps/search/SANCA+Castle+Carey+Clinic+Ninapark+Pretoria',
    hours: {
      admin: 'Monday–Friday: 08:00–17:00',
      alcoholAdmissions: '06:00–16:00 and 19:00–22:00 daily',
      generalAssessments: '08:00–12:00 daily',
      remotePatients: 'After 14:00 or weekends',
    },
    features: [
      'Medical detoxification under 24-hour professional supervision',
      'Round-the-clock compassionate care and nursing support',
      'Individualised Treatment Plans tailored to your journey',
      'Healing garden therapy & enriching occupational therapy',
      'Warm, family-welcoming environment for visits and support',
      '7-day-a-week admissions — help when you need it most',
    ],
    specialNote: 'Patients above 60 must submit a medical report from a GP.',
  },
  {
    id: 'lapalame',
    name: 'Lapalamé Youth Drug Unit',
    type: 'Inpatient Youth Facility',
    icon: GraduationCap,
    image: '/images/sanca/clinic-entrance.jpg',
    color: 'from-sanca-emerald to-green-700',
    address: '116 Waterbok Street, Ninapark, Akasia, Pretoria',
    phone: '012 542 1121',
    whatsapp: '+27 81 318 1511',
    email: 'info@sancapta.co.za',
    capacity: '8 adolescent males',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8!2d28.18!3d-25.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s116+Waterbok+St%2C+Ninapark%2C+Akasia!5e0!3m2!1sen!2sza!4v1',
    mapSearchUrl: 'https://www.google.com/maps/search/116+Waterbok+Street+Ninapark+Akasia+Pretoria',
    hours: {
      admin: 'Monday–Friday: 08:00–17:00',
      alcoholAdmissions: 'By appointment',
      generalAssessments: 'By appointment',
      remotePatients: 'Contact for details',
    },
    features: [
      'Specialised programme for adolescent males aged 13–18',
      'Age-appropriate, youth-centred rehabilitation programmes',
      'Mandatory parental involvement for lasting family healing',
      'Comprehensive after-care support post-discharge',
      'Creative, age-appropriate therapy including art and play',
      'School programme integration to keep education on track',
    ],
    specialNote: '"Do teenagers always grow out of using substances? The answer is FALSE."',
  },
  {
    id: 'soshanguve',
    name: 'Soshanguve Clinic',
    type: 'Outpatient Community Clinic',
    icon: TreePine,
    image: '/images/sanca/facility-building.jpg',
    color: 'from-sanca-gold-dark to-sanca-gold',
    address: '1631 Block H, Soshanguve, 0152',
    phone: '(012) 799 2553',
    whatsapp: '+27 81 318 1511',
    email: 'info@sancapta.co.za',
    capacity: 'Open intake',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d28.1!3d-25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBlock+H%2C+Soshanguve!5e0!3m2!1sen!2sza!4v1',
    mapSearchUrl: 'https://www.google.com/maps/search/1631+Block+H+Soshanguve+0152',
    hours: {
      admin: 'Monday–Friday: 08:00–17:00',
      alcoholAdmissions: 'By appointment',
      generalAssessments: 'By appointment',
      remotePatients: 'Walk-ins welcome',
    },
    features: [
      'Flexible part-time treatment that fits your daily life',
      'Maintain work and family routines while getting help',
      'Individual & group counselling in a safe, welcoming space',
      'Confidential drug testing and screening services',
      'Deep community roots with trusted resource networking',
      'Self-help group facilitation for ongoing peer support',
    ],
    specialNote: 'Dedicated social workers conduct sessions and address community needs.',
  },
  {
    id: 'hammanskraal',
    name: 'Hammanskraal Clinic',
    type: 'Outpatient Community Clinic',
    icon: TreePine,
    image: '/images/sanca/facility-building.jpg',
    color: 'from-sanca-gold-dark to-sanca-gold',
    address: 'Stand 2025, Jubilee Road, Temba, Hammanskraal, 0407',
    phone: '076 822 4463',
    whatsapp: '+27 81 318 1511',
    email: 'info@sancapta.co.za',
    capacity: 'Open intake',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590!2d28.27!3d-25.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJubilee+Road%2C+Temba%2C+Hammanskraal!5e0!3m2!1sen!2sza!4v1',
    mapSearchUrl: 'https://www.google.com/maps/search/Stand+2025+Jubilee+Road+Temba+Hammanskraal',
    hours: {
      admin: 'Monday–Friday: 08:00–17:00',
      alcoholAdmissions: 'By appointment',
      generalAssessments: 'By appointment',
      remotePatients: 'Walk-ins welcome',
    },
    features: [
      'Community-based treatment rooted in local trust',
      'Relapse management with compassionate, non-judgmental support',
      'Family counselling sessions for lasting healing together',
      'Diversion programmes as an alternative to the justice system',
      'Aftercare & ongoing support to sustain your recovery',
      'Referral services connecting you to the right resources',
    ],
    specialNote: 'Deep community roots — trusted in Hammanskraal and surrounding areas.',
  },
];

const virtualTourImages = [
  {
    src: '/images/sanca/clinic-entrance-gate.jpg',
    label: 'Main Entrance Gate',
  },
  {
    src: '/images/sanca/facility-landscaped.jpg',
    label: 'Landscaped Grounds',
  },
  {
    src: '/images/sanca/waiting-room.jpg',
    label: 'Waiting Room',
  },
  {
    src: '/images/sanca/garden-patio.jpeg',
    label: 'Garden Patio',
  },
  {
    src: '/images/sanca/garden-courtyard.jpg',
    label: 'Healing Garden',
  },
  {
    src: '/images/sanca/facility-garden-building.jpg',
    label: 'Facility Building',
  },
];

export default function FacilitiesSection() {
  const [expandedId, setExpandedId] = useState<string | null>('castle-carey');

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-white dark:bg-[#0a2a18] relative overflow-hidden section-top-gradient">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sanca-green via-sanca-gold to-sanca-emerald" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sanca-green/10 dark:bg-sanca-gold/15 text-sanca-green dark:text-sanca-gold text-sm font-medium mb-4 border border-sanca-gold/20 shadow-[inset_0_1px_2px_rgba(197,150,58,0.1)]">
            <MapPin className="h-4 w-4" />
            Our Clinics
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-sanca-green-dark dark:text-white mb-4 heading-gradient section-heading-lg">
            Four Facilities, <span className="text-gradient-gold">One Purpose</span>
          </h2>
          <p className="text-muted-foreground dark:text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            From our serene Pretoria North campus to community-rooted clinics in Soshanguve and Hammanskraal — every SANCA door opens to hope, healing, and a fresh start.
          </p>
        </motion.div>

        {/* Virtual Tour Gallery Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Camera className="h-5 w-5 text-sanca-gold" />
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-sanca-green-dark dark:text-white">
              Step Inside Our Facilities
            </h3>
          </div>
          <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 flex-wrap">
            {virtualTourImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="relative w-44 h-28 lg:w-48 lg:h-32 rounded-xl overflow-hidden shadow-premium-md border-2 border-sanca-gold/20 hover-lift group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sanca-gold to-sanca-gold-light z-10" />
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sanca-green-dark/40 to-transparent" />
                </div>
                <span className="text-xs text-muted-foreground dark:text-white/60 font-medium flex items-center gap-1">
                  <ImageIcon className="h-3 w-3" />
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facility Cards */}
        <div className="space-y-4">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            const isExpanded = expandedId === facility.id;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className={`dark:bg-[#0D3B22] shadow-premium-md hover:shadow-premium-lg transition-all duration-500 border-0 overflow-hidden ${isExpanded ? 'ring-2 ring-sanca-green/20' : ''}`}>
                  {/* Header */}
                  <button
                    onClick={() => toggle(facility.id)}
                    className="w-full text-left"
                  >
                    <div className="p-5 sm:p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center flex-shrink-0 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)] transition-shadow duration-300`}>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-sanca-green" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-sanca-green-dark dark:text-white">
                            {facility.name}
                          </h3>
                          <p className="text-sm text-sanca-gold-dark dark:text-sanca-gold font-medium">
                            {facility.type}
                          </p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground dark:text-white/50 mt-1">
                            <MapPin className="h-3 w-3" />
                            <span className="line-clamp-1">{facility.address}</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground dark:text-white/50 flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100 dark:border-white/10">
                          {/* Premium Framed Image */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative rounded-2xl overflow-hidden shadow-premium-2xl border-4 border-white dark:border-[#0D3B22] group mb-6"
                          >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sanca-gold to-sanca-gold-light z-10" />
                            <img
                              src={facility.image}
                              alt={facility.name}
                              className="object-cover w-full h-48 sm:h-56 transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sanca-green-dark/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h4 className="font-serif text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                                {facility.name}
                              </h4>
                              <p className="text-white/80 text-sm font-medium drop-shadow-md">
                                {facility.type}
                              </p>
                            </div>
                          </motion.div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Contact Info */}
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm tracking-tight text-sanca-green-dark dark:text-white flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                Contact & Hours
                              </h4>
                              <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm">
                                  <Phone className="h-4 w-4 text-sanca-green flex-shrink-0" />
                                  <a href={`tel:${facility.phone.replace(/\s/g, '')}`} className="text-sanca-green dark:text-sanca-gold hover:underline">{facility.phone}</a>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                  <Mail className="h-4 w-4 text-sanca-green flex-shrink-0" />
                                  <a href={`mailto:${facility.email}`} className="text-sanca-green dark:text-sanca-gold hover:underline">{facility.email}</a>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-muted-foreground dark:text-white/60">
                                  <Users className="h-4 w-4 flex-shrink-0" />
                                  Capacity: {facility.capacity}
                                </div>
                              </div>

                              <h5 className="font-medium text-xs text-muted-foreground dark:text-white/50 uppercase tracking-wider pt-2">
                                Operating Hours
                              </h5>
                              <div className="space-y-1.5 text-sm text-muted-foreground dark:text-white/60">
                                <div className="flex items-start gap-2">
                                  <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                                  <span>Admin: {facility.hours.admin}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                                  <span>Alcohol Admissions: {facility.hours.alcoholAdmissions}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Clock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                                  <span>Assessments: {facility.hours.generalAssessments}</span>
                                </div>
                              </div>

                              {facility.specialNote && (
                                <div className="p-3 rounded-lg bg-sanca-gold/5 dark:bg-sanca-gold/10 border border-sanca-gold/20 text-xs text-sanca-gold-dark dark:text-sanca-gold italic">
                                  💡 {facility.specialNote}
                                </div>
                              )}
                            </div>

                            {/* Features & Map */}
                            <div>
                              <h4 className="font-semibold text-sm tracking-tight text-sanca-green-dark dark:text-white mb-4">
                                Services & Features
                              </h4>
                              <div className="grid gap-2">
                                {facility.features.map((feature, j) => (
                                  <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-white/60">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sanca-green flex-shrink-0 mt-1.5" />
                                    {feature}
                                  </div>
                                ))}
                              </div>

                              {/* Map embed */}
                              <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-premium-sm">
                                <iframe
                                  src={facility.mapEmbedUrl}
                                  width="100%"
                                  height="180"
                                  style={{ border: 0 }}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  title={`${facility.name} location map`}
                                  className="w-full"
                                />
                              </div>

                              {/* Map link button */}
                              <div className="flex gap-2 mt-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5 flex-1"
                                  asChild
                                >
                                  <a
                                    href={facility.mapSearchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Navigation className="mr-1 h-3.5 w-3.5" />
                                    Get Directions
                                  </a>
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-sanca-green/30 text-sanca-green hover:bg-sanca-green/5"
                                  onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                  Enquire
                                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Parallax divider between facilities section and next */}
        <div className="parallax-divider-green mt-12" />
      </div>
    </section>
  );
}
