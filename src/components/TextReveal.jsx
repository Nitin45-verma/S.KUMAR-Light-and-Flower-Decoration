import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ text, className = '', as: Tag = 'h2', ...props }) => {
  if (!text) return null;

  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Tag className={className} {...props}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default TextReveal;
