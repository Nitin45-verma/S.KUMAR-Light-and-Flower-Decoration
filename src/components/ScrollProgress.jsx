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

  return (
    <>
      {/* Top Fixed Hairline Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[110] pointer-events-none bg-purple-950/60">
        <motion.div
          className="h-full bg-gold-gradient shadow-gold-glow origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Back to Top Button */}
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
          className="relative w-11 h-11 rounded-full bg-purple-950/90 border border-amber-400/40 backdrop-blur-md flex items-center justify-center text-amber-300 hover:text-white hover:border-amber-400 shadow-lg transition-all group cursor-pointer"
          title="Scroll Back to Top"
          aria-label="Scroll Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />

          <span className="absolute right-14 px-2.5 py-1 rounded-full bg-purple-950 text-amber-300 text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-amber-400/40 pointer-events-none font-sans shadow-md">
            {scrollPercent}%
          </span>
        </button>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
