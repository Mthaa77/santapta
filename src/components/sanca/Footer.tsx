'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, Shield, ExternalLink, ArrowUp, MessageCircle, Navigation } from 'lucide-react';

const quickLinks = [
  { label: 'Self-Assessment', href: '#assessment' },
  { label: 'Treatment Programmes', href: '#programmes' },
  { label: 'Getting Started', href: '#admissions' },
  { label: 'Recovery Journey', href: '#recovery-journey' },
  { label: 'Helpful Resources', href: '#resources' },
  { label: 'For Families', href: '#families' },
  { label: 'Cost Calculator', href: '#cost-calculator' },
  { label: 'Common Questions', href: '#faq' },
];

const programmes = [
  'Inpatient Programme',
  'Youth Programme (Lapalamé)',
  'Outpatient Programme',
  'Aftercare',
  'Medical Services',
  'Family Support',
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/CastleCareyClinic', icon: 'facebook' },
  { label: 'SANCA National', href: 'https://www.sancanational.info', icon: 'external' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sanca-green-dark dark:bg-[#071a10] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sanca-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sanca-green-light/3 rounded-full blur-3xl pointer-events-none" />

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-sanca-gold via-sanca-gold-light to-sanca-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center shadow-gold overflow-hidden">
                <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                {/* SVG Caduceus Icon */}
                <svg className="w-6 h-6 text-sanca-gold" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <div>
                <p className="font-serif font-bold text-xl tracking-tight">SANCA Pretoria</p>
                <p className="text-xs text-white/50 tracking-wider">Est. 1957 — 68 Years of Service</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              The South African National Council on Alcoholism and Drug Dependence — proudly
              serving Pretoria, Soshanguve &amp; Hammanskraal since 1957. We offer compassionate,
              accessible, and medically sound addiction recovery — because everyone deserves
              a path to hope and healing.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
              <p className="text-sm text-white/50 italic leading-relaxed">
                &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from
                the chains of addiction.&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_4px_12px_rgba(27,94,59,0.12)]"
                  aria-label={link.label}
                >
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-sanca-gold" />
                  {link.icon === 'facebook' ? (
                    <svg className="h-4 w-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ) : (
                    <ExternalLink className="h-4 w-4 text-white/70" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white hover:pl-2 transition-all duration-200 gold-underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programmes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider tracking-tight">
              Programmes
            </h4>
            <ul className="space-y-2.5">
              {programmes.map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => scrollTo('#programmes')}
                    className="text-sm text-white/60 hover:text-white hover:pl-2 transition-all duration-200"
                  >
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider tracking-tight">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0125421121"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center group-hover:bg-sanca-gold/20 transition-colors">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[2px] h-[2px] rounded-full bg-sanca-gold" />
                  <Phone className="h-3.5 w-3.5 text-sanca-gold" />
                </div>
                012 542 1121
              </a>
              <a
                href="https://wa.me/27813181511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center group-hover:bg-sanca-emerald/20 transition-colors">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[2px] h-[2px] rounded-full bg-sanca-gold" />
                  <MessageCircle className="h-3.5 w-3.5 text-sanca-emerald" />
                </div>
                WhatsApp: 081 318 1511
              </a>
              <a
                href="mailto:info@sancapta.co.za"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center group-hover:bg-sanca-gold/20 transition-colors">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[2px] h-[2px] rounded-full bg-sanca-gold" />
                  <Mail className="h-3.5 w-3.5 text-sanca-gold" />
                </div>
                info@sancapta.co.za
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[2px] h-[2px] rounded-full bg-sanca-gold" />
                  <MapPin className="h-3.5 w-3.5 text-sanca-gold" />
                </div>
                <span>Corner Rachel De Beer &amp; Waterbok St, Ninapark, Pretoria North, 0182</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <div className="relative w-8 h-8 rounded-full border-[1.5px] border-sanca-gold/25 bg-gradient-to-br from-sanca-green/8 to-sanca-cream/5 flex items-center justify-center">
                  <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[2px] h-[2px] rounded-full bg-sanca-gold" />
                  <Clock className="h-3.5 w-3.5 text-sanca-gold" />
                </div>
                Mon–Fri: 08:00–17:00
              </div>
            </div>

            {/* Google Maps Link */}
            <a
              href="https://maps.google.com/?q=SANCA+Pretoria+Corner+Rachel+De+Beer+Waterbok+St+Ninapark"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-sanca-gold/10 hover:border-sanca-gold/30 transition-all duration-300 group"
            >
              <Navigation className="h-4 w-4 text-sanca-gold group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                Get Directions on Google Maps
              </span>
            </a>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-sanca-gold/60" />
                DSD Registered — Meets Minimum Norms &amp; Standards
              </p>
            </div>
          </motion.div>
        </div>

        {/* Partners Row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-5 text-center sm:text-left">
            In Collaboration With
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 sm:gap-12">
            <a
              href="https://www.up.ac.za"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="University of Pretoria — Academic Research & Training Partner"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UP_edit_18542722435737-WhoBDgielGj1QzPnz6jTvc2AZVdTF9.png"
                alt="University of Pretoria"
                width={200}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
                sizes="200px"
              />
            </a>
            <a
              href="https://www.dsd.gov.za"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Department of Social Development — Republic of South Africa"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%281%29-52F4zYYrJj6QmQi1Wlo1F41ZmQeWcl.png"
                alt="Department of Social Development — Republic of South Africa"
                width={220}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
                sizes="220px"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SANCA Pretoria / Soshanguve / Hammanskraal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.sancanational.info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
            >
              SANCA National <ExternalLink className="h-3 w-3" />
            </a>
            <a
              href="https://www.facebook.com/CastleCareyClinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1"
            >
              Facebook <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/30 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-sanca-gold fill-sanca-gold" /> for South Africa&#39;s healing
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-sanca-gold/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
