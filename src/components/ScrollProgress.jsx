import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = Math.round((window.scrollY / totalHeight) * 100);
        setScrollPercent(Math.min(100, Math.max(0, currentProgress)));
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const strokeDashoffset = 100 - scrollPercent;

  return (
    <>
      {/* Top Fixed Gold Shimmer Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[110] pointer-events-none bg-[#0d0518]/50">
        <motion.div
          className="h-full bg-gradient-to-r from-[#d4af37] via-[#f5c451] to-[#fff3a1] origin-left shadow-[0_0_15px_#f5c451]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Scroll Progress Ring & Back-to-Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-20 sm:bottom-24 right-5 z-40"
      >
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 rounded-full bg-[#1a0a2e]/90 border border-[#d4af37]/40 backdrop-blur-md flex items-center justify-center text-[#f5c451] hover:text-white shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(245,196,81,0.6)] transition-all duration-300 group cursor-pointer"
          title="Scroll Back to Top"
          aria-label="Scroll Back to Top"
        >
          {/* SVG Circular Progress Meter */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
            <path
              className="text-[#2e0a4a]"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#f5c451] transition-all duration-150 ease-out"
              strokeDasharray="100, 100"
              strokeDashoffset={strokeDashoffset}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>

          {/* Arrow / Percent Icon */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Hover Percentage Tooltip */}
          <span className="absolute right-14 px-2.5 py-1 rounded-md bg-[#0d0518] text-[#f5c451] text-[11px] font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#d4af37]/40 shadow-lg pointer-events-none">
            {scrollPercent}% Scrolled
          </span>
        </button>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
