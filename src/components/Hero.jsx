import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Phone, Image as ImageIcon } from 'lucide-react';
import { businessInfo } from '../data/content';
import MagneticButton from './MagneticButton';
import MagicRings from './MagicRings';
import Lightfall from './Lightfall';
import logoImg from '../assets/logo.webp';

// Floating sparkling light dots for magical ambient atmosphere
const sparklingParticles = [
  { top: '12%', left: '8%', size: '6px', delay: '0s', duration: '3.5s' },
  { top: '22%', left: '88%', size: '8px', delay: '1s', duration: '4.5s' },
  { top: '48%', left: '12%', size: '5px', delay: '0.5s', duration: '4s' },
  { top: '68%', left: '92%', size: '7px', delay: '1.8s', duration: '5.5s' },
  { top: '82%', left: '18%', size: '9px', delay: '1.2s', duration: '5s' },
  { top: '32%', left: '78%', size: '6px', delay: '2.2s', duration: '3.8s' },
  { top: '75%', left: '62%', size: '5px', delay: '0.7s', duration: '4.2s' },
  { top: '18%', left: '38%', size: '8px', delay: '1.5s', duration: '5.2s' },
  { top: '88%', left: '82%', size: '6px', delay: '2.8s', duration: '4.6s' },
  { top: '10%', left: '68%', size: '7px', delay: '0.3s', duration: '4.9s' },
];

const Hero = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 text-gray-100 overflow-hidden bg-purple-950"
    >
      {/* Background Illumination Silhouette with Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={businessInfo.heroBgImage}
          alt="S.Kumar Light and Flower Decoration Background"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center scale-105 opacity-20 filter brightness-[0.35] contrast-125 pointer-events-none"
        />

        {/* Animated Lightfall Falling Streaks Background Layer */}
        <div className="absolute inset-0 opacity-75 mix-blend-screen pointer-events-none">
          <Lightfall
            colors={['#f5c451', '#e879f9', '#a855f7', '#fbbf24', '#ffd700']}
            backgroundColor="#1a0b2e"
            speed={0.7}
            streakCount={isMobile ? 4 : 8}
            streakWidth={1.2}
            streakLength={1.2}
            glow={1.2}
            density={0.8}
            twinkle={1}
            zoom={2.2}
            backgroundGlow={0.4}
            opacity={0.85}
            mouseInteraction={!isMobile}
            mouseStrength={0.8}
            mouseRadius={0.7}
            mixBlendMode="screen"
          />
        </div>

        {/* Animated Magic Rings Background Layer */}
        <div className="absolute inset-0 opacity-85 mix-blend-screen pointer-events-none">
          <MagicRings
            color="#f5c451"
            colorTwo="#a855f7"
            ringCount={isMobile ? 4 : 6}
            speed={0.8}
            attenuation={8}
            lineThickness={2.2}
            baseRadius={0.28}
            radiusStep={0.1}
            scaleRate={0.12}
            opacity={0.7}
            blur={0}
            noiseAmount={0.08}
            rotation={15}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={!isMobile}
            mouseInfluence={0.2}
            hoverScale={1.15}
            parallax={0.04}
            clickBurst={true}
          />
        </div>

        {/* Radial Purple Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,18,104,0.5)_0%,rgba(13,5,24,0.92)_85%)] pointer-events-none" />
      </div>

      {/* Glowing Floating Particles */}
      {sparklingParticles.map((p, idx) => (
        <div
          key={idx}
          className="absolute rounded-full bg-amber-300/90 shadow-[0_0_15px_#f5c451] animate-pulse pointer-events-none z-0"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* CENTERED HERO CONTENT CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center flex flex-col items-center space-y-6">
        
        {/* Top Outlined Pill: KHATIPURA, JAIPUR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-xl font-sans"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>KHATIPURA, JAIPUR</span>
        </motion.div>

        {/* GRAND CENTER BRAND LOGO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="py-2 flex justify-center"
        >
          <img
            src={logoImg}
            alt="S.KUMAR Light and Flower Decoration Grand Royal Logo"
            width={440}
            height={200}
            loading="eager"
            decoding="async"
            className="w-[280px] sm:w-[360px] md:w-[440px] max-w-full h-auto object-contain drop-shadow-[0_12px_30px_rgba(212,175,55,0.45)] hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            data-cursor="view"
          />
        </motion.div>

        {/* Eyebrow Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-xs font-bold text-amber-300 uppercase tracking-widest font-sans w-full max-w-md"
        >
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-amber-400/60" />
          <span>KHATIPURA, JAIPUR</span>
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-amber-400/60" />
        </motion.div>

        {/* Main Hindi Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-hindi text-white max-w-3xl mx-auto leading-snug tracking-wide drop-shadow-lg"
        >
          "आपके हर खास मौके को बनाएं और भी खास, हमारी लाइटिंग से दें एक नई पहचान!"
        </motion.h1>

        {/* English Sub-Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-slate-300 font-sans italic max-w-2xl mx-auto font-light tracking-wide"
        >
          "Make every special occasion even more special — give it a new identity with our lighting"
        </motion.p>

        {/* Gold Star Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex items-center justify-center gap-4 text-amber-400 w-full max-w-sm pt-1"
        >
          <span className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-amber-400/50" />
          <Star className="w-4 h-4 fill-amber-400 text-amber-400 shadow-gold-glow" />
          <span className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-amber-400/50" />
        </motion.div>

        {/* Action CTA Buttons Side-by-Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href={`tel:${businessInfo.phone}`}
            className="shimmer-btn gap-2.5 px-8 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm sm:text-base font-sans shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300"
            data-cursor="link"
          >
            <Phone className="w-4 h-4 fill-purple-950" />
            <span>Call Now 📞 {businessInfo.phone}</span>
          </MagneticButton>

          <MagneticButton
            href="#gallery"
            className="gap-2.5 px-8 py-4 rounded-full border border-amber-400/50 text-amber-300 bg-purple-950/80 hover:bg-amber-400/20 font-bold text-sm sm:text-base font-sans transition-all duration-300 hover:border-amber-400 hover:text-white shadow-md backdrop-blur-md"
            data-cursor="link"
          >
            <ImageIcon className="w-4 h-4 text-amber-300" />
            <span>View Gallery</span>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
