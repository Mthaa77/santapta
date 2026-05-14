'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <TooltipProvider delayDuration={200}>
      <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col-reverse gap-3 items-center pb-safe">
        {/* WhatsApp */}
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="https://wa.me/27813181511"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-sanca-emerald text-white shadow-premium-xl flex items-center justify-center hover:bg-sanca-emerald/90 transition-all duration-300 animate-pulse-glow premium-focus"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-sanca-emerald text-white border-0">
            <p className="text-xs font-medium">WhatsApp: 081 318 1511</p>
          </TooltipContent>
        </Tooltip>

        {/* Emergency Call */}
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="tel:0125421121"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, type: 'spring', stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 rounded-full bg-sanca-green text-white shadow-premium-xl flex items-center justify-center hover:bg-sanca-green-dark transition-all duration-300 premium-focus"
              aria-label="Emergency call"
            >
              <Phone className="h-6 w-6" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-sanca-green text-white border-0">
            <p className="text-xs font-medium">Emergency: 012 542 1121</p>
          </TooltipContent>
        </Tooltip>

        {/* Back to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={scrollToTop}
                  className="w-12 h-12 rounded-full bg-white border-2 border-sanca-green/20 shadow-premium-xl flex items-center justify-center text-sanca-green hover:bg-sanca-green hover:text-white hover:border-sanca-green transition-all duration-300 premium-focus"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5" />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-sanca-green-dark text-white border-0">
                <p className="text-xs font-medium">Back to Top</p>
              </TooltipContent>
            </Tooltip>
          )}
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}
