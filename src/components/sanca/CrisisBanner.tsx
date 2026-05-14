'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Phone, MessageCircle, X } from 'lucide-react';

const SESSION_KEY = 'sanca_crisis_banner_dismissed';

export default function CrisisBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!sessionStorage.getItem(SESSION_KEY);
    }
    return false;
  });

  const handleScroll = useCallback(() => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed, handleScroll]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem(SESSION_KEY, 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed left-0 right-0 bottom-20 sm:bottom-24 z-40"
          role="alert"
          aria-label="Crisis intervention banner"
        >
          {/* Gold bottom border */}
          <div className="relative">
            <div className="bg-gradient-to-r from-sanca-green-dark to-sanca-green backdrop-blur-md px-3 sm:px-6 py-2.5 flex items-center gap-3 sm:gap-4">
              {/* Left side: Alert + Text */}
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <AlertTriangle className="h-5 w-5 text-sanca-gold flex-shrink-0" />
                <span className="text-white text-sm font-medium truncate">
                  Need immediate help?
                </span>
              </div>

              {/* Right side: Action buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href="tel:0125421121"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-sanca-green rounded-full text-xs sm:text-sm font-semibold hover:bg-white/90 transition-colors duration-200 min-h-[36px]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span className="hidden xs:inline sm:inline">Call </span>
                  <span>012 542 1121</span>
                </a>
                <a
                  href="https://wa.me/27813181511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sanca-gold text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-sanca-gold-dark transition-colors duration-200 min-h-[36px]"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute -top-0.5 right-1.5 sm:static sm:ml-1 w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10"
                aria-label="Dismiss crisis banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/* Gold bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-sanca-gold" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
