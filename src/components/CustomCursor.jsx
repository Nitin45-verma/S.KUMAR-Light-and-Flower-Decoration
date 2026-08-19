import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'link' | 'view' | 'text'

  // Motion values for raw mouse coordinates (no re-renders)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Elastic smooth trailing for the ring/box
  const springConfig = { damping: 25, stiffness: 350 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updatePointerFine = () => setIsPointerFine(mediaQuery.matches);
    
    updatePointerFine();
    mediaQuery.addEventListener('change', updatePointerFine);

    return () => mediaQuery.removeEventListener('change', updatePointerFine);
  }, []);

  const lensRef = React.useRef(null);
  const activeImgSrcRef = React.useRef('');

  useEffect(() => {
    if (!isPointerFine) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const updateLens = (e, target) => {
      let imgEl = target.tagName.toLowerCase() === 'img' ? target : target.querySelector('img');
      if (imgEl && (imgEl.src || imgEl.currentSrc)) {
        const src = imgEl.currentSrc || imgEl.src;
        const rect = imgEl.getBoundingClientRect();
        const cursorX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        const cursorY = Math.max(0, Math.min(rect.height, e.clientY - rect.top));

        activeImgSrcRef.current = src;
        if (lensRef.current) {
          lensRef.current.style.backgroundImage = `url("${src}")`;
          lensRef.current.style.backgroundSize = `${rect.width * 1.5}px ${rect.height * 1.5}px`;
          lensRef.current.style.backgroundPosition = `${-cursorX * 1.5 + 40}px ${-cursorY * 1.5 + 40}px`;
        }
      }
    };

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (cursorState === 'view') {
        const target = e.target.closest('img, [data-cursor="view"], .cursor-view');
        if (target) {
          updateLens(e, target);
        }
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, [role="button"], input, textarea, select, img, .cursor-view');
      
      if (!target) {
        if (cursorState !== 'default') setCursorState('default');
        return;
      }

      const explicitDataCursor = target.getAttribute('data-cursor');
      if (explicitDataCursor) {
        if (cursorState !== explicitDataCursor) setCursorState(explicitDataCursor);
        if (explicitDataCursor === 'view') {
          updateLens(e, target);
        }
        return;
      }

      const tagName = target.tagName.toLowerCase();
      if (tagName === 'input' || tagName === 'textarea' || target.getAttribute('contenteditable')) {
        if (cursorState !== 'text') setCursorState('text');
      } else if (tagName === 'img' || target.classList.contains('cursor-view')) {
        if (cursorState !== 'view') setCursorState('view');
        updateLens(e, target);
      } else if (tagName === 'a' || tagName === 'button' || target.getAttribute('role') === 'button') {
        if (cursorState !== 'link') setCursorState('link');
      } else {
        if (cursorState !== 'default') setCursorState('default');
      }
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget) {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isPointerFine, mouseX, mouseY, cursorState]);

  if (!isPointerFine) return null;

  // Ring/Box variants based on state
  const ringVariants = {
    default: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundColor: 'rgba(212, 175, 55, 0)',
      borderColor: 'rgba(212, 175, 55, 0.8)',
      borderWidth: '1.5px',
      opacity: 1,
    },
    link: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      backgroundColor: 'rgba(212, 175, 55, 0.18)',
      borderColor: 'rgba(245, 196, 81, 0.9)',
      borderWidth: '1.5px',
      opacity: 1,
    },
    view: {
      width: 80,
      height: 80,
      borderRadius: '8px', // Square box matching exact screenshot!
      backgroundColor: 'rgba(13, 5, 24, 0.7)',
      borderColor: 'rgba(245, 196, 81, 0.95)',
      borderWidth: '1.5px',
      opacity: 1,
    },
    text: {
      width: 2,
      height: 24,
      borderRadius: 1,
      backgroundColor: '#f5c451',
      borderColor: 'rgba(245, 196, 81, 0)',
      borderWidth: '0px',
      opacity: 1,
    },
  };

  const zoomFactor = 1.5; // 1.5x exact magnification requested by user!
  const boxRadius = 40;   // Half of 80px box width

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Layer 1: Fast tracking small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400 shadow-gold-glow pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorState === 'default' ? 1 : 0,
          scale: cursorState === 'default' ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Layer 2: Elastic smooth trailing ring/square lens box */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none shadow-gold-glow border overflow-hidden"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={ringVariants}
        animate={cursorState}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      >
        <AnimatePresence>
          {cursorState === 'view' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 rounded-[6px] overflow-hidden pointer-events-none flex items-center justify-center"
            >
              {/* True Optical 1.5x Magnifying Glass Lens (Exact 1.5x zoom of covered image area) */}
              <div
                ref={lensRef}
                className="absolute inset-0 bg-no-repeat pointer-events-none"
                style={{
                  filter: 'brightness(1.1) contrast(1.05)',
                }}
              />

              {/* Semi-transparent dark tint overlay + VIEW gold text */}
              <div className="absolute inset-0 bg-purple-950/25 pointer-events-none" />

              <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-amber-300 font-sans select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                VIEW
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
