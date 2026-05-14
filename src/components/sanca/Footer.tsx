'use client';

import { Phone, Mail, MapPin, Clock, Heart, Shield, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Self-Assessment', href: '#assessment' },
  { label: 'Treatment Programmes', href: '#programmes' },
  { label: 'Admissions Process', href: '#admissions' },
  { label: 'Recovery Journey', href: '#recovery-journey' },
  { label: 'Resource Library', href: '#resources' },
  { label: 'For Families', href: '#families' },
  { label: 'Volunteer With Us', href: '#volunteer' },
  { label: 'FAQ', href: '#faq' },
];

const programmes = [
  'Inpatient Programme',
  'Youth Programme (Lapalamé)',
  'Outpatient Programme',
  'Aftercare',
  'Medical Services',
  'Family Support',
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-sanca-green-dark text-white relative">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-sanca-gold via-sanca-gold-light to-sanca-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-sanca-gold rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg">SANCA Pretoria</p>
                <p className="text-xs text-white/50">Est. 1957</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              South African National Council on Alcoholism and Drug Dependence — Pretoria,
              Soshanguve & Hammanskraal. Accessible, affordable, medically sound addiction
              recovery for all communities.
            </p>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 italic">
                &ldquo;Everyone deserves a chance at a healthy and fulfilling life, free from
                the chains of addiction.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Programmes
            </h4>
            <ul className="space-y-2">
              {programmes.map((prog) => (
                <li key={prog}>
                  <button
                    onClick={() => scrollTo('#programmes')}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {prog}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-sm mb-4 text-sanca-gold-light uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0125421121"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-sanca-gold flex-shrink-0" />
                012 542 1121
              </a>
              <a
                href="https://wa.me/27813181511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-sanca-emerald flex-shrink-0" />
                WhatsApp: 081 318 1511
              </a>
              <a
                href="mailto:info@sancapta.co.za"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-sanca-gold flex-shrink-0" />
                info@sancapta.co.za
              </a>
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-sanca-gold flex-shrink-0 mt-0.5" />
                <span>Corner Rachel De Beer & Waterbok St, Ninapark, Pretoria North, 0182</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 text-sanca-gold flex-shrink-0" />
                Mon–Fri: 08:00–17:00
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 flex items-center gap-1">
                <Shield className="h-3 w-3" />
                DSD Registered — Meets Minimum Norms & Standards
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <p className="text-xs text-white/30 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-sanca-gold fill-sanca-gold" /> for healing
          </p>
        </div>
      </div>
    </footer>
  );
}
