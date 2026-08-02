import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Image as ImageIcon, Sparkles, MapPin, Star } from 'lucide-react';
import FairyLights from './FairyLights';
import { businessInfo } from '../data/content';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0d0518]"
    >
      {/* Background Image with Dark Purple Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={businessInfo.heroBgImage}
          alt="S.Kumar Light and Flower Decoration Jaipur"
          className="w-full h-full object-cover object-center filter brightness-75 transition-transform duration-10000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-[#0d0518]/85 to-[#1a0a2e]/70" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Canvas Fairy Lights Particle Animation */}
      <FairyLights />

      {/* Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#f5c451]/20 via-[#4a1268]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a2e]/90 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-6"
          >
            <MapPin className="w-4 h-4 text-[#f5c451]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#f5c451] uppercase">
              {businessInfo.shortLocation}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c451] animate-ping" />
          </motion.div>

          {/* Main Headline: S.KUMAR */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif-heading tracking-wider uppercase leading-none text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          >
            S.KUMAR
          </motion.h1>

          {/* Subheading: Light and Flower Decoration */}
          <motion.h2
            variants={itemVariants}
            className="mt-2 text-xl sm:text-3xl md:text-4xl font-extrabold font-serif-heading text-slate-100 tracking-wide uppercase drop-shadow-md"
          >
            Light and Flower Decoration
          </motion.h2>

          {/* Subheading Location */}
          <motion.p
            variants={itemVariants}
            className="mt-3 text-xs sm:text-sm font-medium tracking-[0.25em] text-[#f5c451] uppercase font-sans flex items-center justify-center gap-2"
          >
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#f5c451]" />
            <span>KAPURWALA, JAIPUR</span>
            <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#f5c451]" />
          </motion.p>

          {/* Hindi Tagline */}
          <motion.div variants={itemVariants} className="mt-6 max-w-3xl">
            <p className="text-lg sm:text-2xl font-hindi font-medium text-slate-100 leading-relaxed drop-shadow-md">
              "{businessInfo.taglineHindi}"
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 italic font-sans font-light max-w-2xl mx-auto">
              "{businessInfo.taglineEnglish}"
            </p>
          </motion.div>

          {/* Star Accent */}
          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
            <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#d4af37]" />
            <Star className="w-4 h-4 text-[#f5c451] fill-[#f5c451] animate-spin-slow" />
            <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#d4af37]" />
          </motion.div>

          {/* Dual CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={`tel:${businessInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-base sm:text-lg shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_45px_rgba(245,196,81,0.8)] transition-all duration-300"
            >
              <Phone className="w-5 h-5 fill-purple-950" />
              <span>Call Now 📞 {businessInfo.phone}</span>
            </motion.a>

            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#d4af37] text-[#f5c451] font-semibold text-base sm:text-lg bg-[#1a0a2e]/60 backdrop-blur-sm hover:bg-[#d4af37]/10 hover:border-[#f5c451] transition-all duration-300"
            >
              <ImageIcon className="w-5 h-5 text-[#f5c451]" />
              <span>View Gallery</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#1a0a2e]/80 flex items-center justify-center text-[#f5c451] hover:border-[#f5c451] transition-colors"
          aria-label="Scroll to About section"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
