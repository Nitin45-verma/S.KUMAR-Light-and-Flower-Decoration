import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick, href, ...props }) => {
  const ref = useRef(null);

  // Motion values for magnetic displacement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animation physics
  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Calculate displacement (max 12px offset in any direction)
    const maxOffset = 12;
    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * 0.35));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * 0.35));

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      data-cursor="link"
      className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
