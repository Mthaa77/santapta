'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-sanca-green-dark"
        >
          {/* Decorative background rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.05 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-96 h-96 rounded-full border-2 border-sanca-gold/30"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: 0.08 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute w-64 h-64 rounded-full border border-sanca-gold/20"
            />
          </div>

          {/* Gold spinner ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              opacity: { duration: 0.4 },
              scale: { duration: 0.5, ease: 'easeOut' },
              rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            }}
            className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border-[3px] border-transparent border-t-sanca-gold border-r-sanca-gold-light"
          />

          {/* Inner glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-[0_0_40px_rgba(197,150,58,0.3)]"
          />

          {/* SANCA Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
              scale: { times: [0, 0.7, 1] },
            }}
            className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sanca-green to-sanca-green-dark flex items-center justify-center shadow-2xl overflow-hidden"
          >
            <img src="/images/sanca/sanca-logo-official.png" alt="SANCA Pretoria Logo" className="w-full h-full object-contain p-2" />
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-[30%] sm:bottom-[35%] text-center"
          >
            <p className="text-sanca-gold-light text-sm font-medium tracking-widest uppercase">
              SANCA Pretoria
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
