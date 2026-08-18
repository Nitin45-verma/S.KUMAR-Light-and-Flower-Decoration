import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessInfo } from '../data/content';
import Logo from './Logo';

const SplashScreen = ({ duration = 950, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = 'unset';
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="fast-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-purple-950 text-gray-100 overflow-hidden px-4 select-none"
        >
          {/* Ambient Glow Orb */}
          <div className="absolute w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full space-y-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Logo size="splash" showText={false} />
            </motion.div>

            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-h4 font-serif-heading font-bold tracking-widest text-gold-gradient uppercase"
            >
              {businessInfo.name}
            </motion.h1>

            {/* Fast Elegant Center Line Draw (scaleX 0 -> 1) */}
            <div className="w-48 h-[2px] bg-purple-900 overflow-hidden relative rounded-full border border-amber-500/20">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full bg-gold-gradient shadow-gold-glow origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
