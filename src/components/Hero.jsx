import React, { lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Image as ImageIcon, Sparkles, MapPin, Star } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '../data/content';

const FairyLights = lazy(() => import('./FairyLights'));

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.18]);
  const opacityText = useTransform(scrollY, [0, 550], [1, 0]);
  const yText = useTransform(scrollY, [0, 550], [0, -80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] lg:h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden bg-[#0d0518]"
    >
      {/* Background Image with Parallax Scroll Shift */}
      <motion.div style={{ y: yBg, scale: scaleBg }} className="absolute inset-0 z-0">
        <img
          src={businessInfo.heroBgImage}
          alt="S.Kumar Light and Flower Decoration Jaipur"
          width={1920}
          height={1080}
          loading="eager"
          fetchpriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center filter brightness-75 transition-transform duration-10000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-[#0d0518]/85 to-[#1a0a2e]/70" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </motion.div>

      {/* Canvas Fairy Lights Particle Animation */}
      <Suspense fallback={null}>
        <FairyLights />
      </Suspense>

      {/* Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-[#f5c451]/20 via-[#4a1268]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-10" />

      <motion.div style={{ opacity: opacityText, y: yText }} className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a0a2e]/90 border border-[#d4af37]/40 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.2)] mb-3 sm:mb-4"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5c451]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#f5c451] uppercase">
              {businessInfo.shortLocation}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5c451] animate-ping" />
          </motion.div>

          {/* Grand Brand Logo Display & Primary Heading */}
          <motion.div variants={itemVariants} className="mb-2 sm:mb-3 flex flex-col items-center">
            <Logo size="hero" />
            <h1 className="sr-only">
              {businessInfo.name} - Premium Wedding Lighting & Flower Decoration in Khatipura, Jaipur
            </h1>
          </motion.div>

          {/* Subheading Location */}
          <motion.p
            variants={itemVariants}
            className="mt-1.5 text-[11px] sm:text-xs font-medium tracking-[0.2em] text-[#f5c451] uppercase font-sans flex items-center justify-center gap-2"
          >
            <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#f5c451]" />
            <span>{businessInfo.shortLocation.toUpperCase()}</span>
            <span className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#f5c451]" />
          </motion.p>

          {/* Hindi Tagline */}
          <motion.div variants={itemVariants} className="mt-3 sm:mt-4 max-w-2xl">
            <p className="text-base sm:text-xl md:text-2xl font-hindi font-medium text-slate-100 leading-snug sm:leading-relaxed drop-shadow-md">
              "{businessInfo.taglineHindi}"
            </p>
            <p className="mt-1 text-[11px] sm:text-xs text-slate-300 italic font-sans font-light max-w-xl mx-auto">
              "{businessInfo.taglineEnglish}"
            </p>
          </motion.div>

          {/* Star Accent */}
          <motion.div variants={itemVariants} className="mt-3 sm:mt-4 flex items-center gap-3">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#d4af37]" />
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5c451] fill-[#f5c451] animate-spin-slow" />
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#d4af37]" />
          </motion.div>

          {/* Dual CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto"
          >
            <motion.a
              href={`tel:${businessInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(245,196,81,0.8)] transition-all duration-300"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-purple-950" />
              <span>Call Now 📞 {businessInfo.phone}</span>
            </motion.a>

            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#d4af37] text-[#f5c451] font-semibold text-sm sm:text-base bg-[#1a0a2e]/60 backdrop-blur-sm hover:bg-[#d4af37]/10 hover:border-[#f5c451] transition-all duration-300"
            >
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f5c451]" />
              <span>View Gallery</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#d4af37]/40 bg-[#1a0a2e]/80 flex items-center justify-center text-[#f5c451] hover:border-[#f5c451] transition-colors"
          aria-label="Scroll to About section"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
