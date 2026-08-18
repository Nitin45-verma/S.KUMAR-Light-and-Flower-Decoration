import React from 'react';
import { motion } from 'framer-motion';

const ImageReveal = ({ src, alt, className = '', imgClassName = '', aspect = '', ...props }) => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};

export default ImageReveal;
