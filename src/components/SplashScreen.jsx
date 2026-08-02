import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Crown } from 'lucide-react';
import { businessInfo } from '../data/content';

const SplashScreen = ({ duration = 2500, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const intervalTime = 25;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.style.overflow = 'unset';
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="full-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0518] text-white overflow-hidden px-4 select-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f5c451]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#4a1268]/40 rounded-full blur-[100px] pointer-events-none" />

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(18)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: '100vh',
                  opacity: 0,
                  scale: Math.random() * 0.6 + 0.4,
                }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 1.5,
                  ease: 'easeOut',
                }}
                className="absolute w-2 h-2 rounded-full bg-[#fff3a1] shadow-[0_0_12px_#f5c451]"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a2e] border border-[#d4af37]/40 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              <Crown className="w-3.5 h-3.5 text-[#f5c451] animate-bounce" />
              <span>Luxury Event Illumination</span>
              <Crown className="w-3.5 h-3.5 text-[#f5c451] animate-bounce" />
            </motion.div>

            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 18, stiffness: 200, delay: 0.3 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#f5c451]/60 animate-spin-slow" />
              <div className="absolute -inset-2 rounded-full bg-gold-gradient opacity-30 blur-xl animate-pulse" />

              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#0d0518] border-2 border-[#d4af37] flex flex-col items-center justify-center p-3 shadow-[0_0_35px_rgba(212,175,55,0.5)]">
                <Sparkles className="w-8 h-8 text-[#f5c451] animate-pulse" />
                <span className="text-xl font-bold font-serif-heading text-gold-gradient mt-1 leading-none">
                  S.KUMAR
                </span>
                <span className="text-[8px] tracking-widest text-slate-300 text-center">
                  LIGHT & FLOWER
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl font-serif-heading font-black tracking-wider text-gold-gradient uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
                {businessInfo.name}
              </h1>

              <p className="text-sm sm:text-base font-hindi font-bold text-slate-200">
                "{businessInfo.taglineHindi}"
              </p>

              <p className="text-xs font-mono text-[#f5c451] tracking-widest uppercase mt-1">
                Kapurwala, Jaipur
              </p>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="w-full mt-8 max-w-xs space-y-2"
            >
              <div className="h-1.5 w-full bg-[#1a0a2e] rounded-full border border-[#d4af37]/30 p-0.5 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gold-gradient rounded-full shadow-[0_0_15px_#f5c451]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-[#f5c451]/80">
                <span>Loading Luxury Decor...</span>
                <span>{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
