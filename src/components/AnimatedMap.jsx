import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Phone,
  Maximize2,
  Minimize2,
  Sparkles,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { businessInfo } from '../data/content';

const AnimatedMap = () => {
  const [mapMode, setMapMode] = useState('roadmap'); // 'roadmap' | 'satellite' | 'hybrid'
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // STEP 3 — Reduced Motion Support
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // STEP 1 — Component State & Structure
  const [stage, setStage] = useState(prefersReducedMotion ? 'map' : 'globe');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (prefersReducedMotion) {
      setStage('map');
      return;
    }
    if (!isInView) return;

    setStage('globe');
    const t1 = setTimeout(() => setStage('zooming'), 900);
    const t2 = setTimeout(() => setStage('map'), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isInView, prefersReducedMotion]);

  // Pre-generate reduced star field positions (10 stars for minimal DOM overhead)
  const stars = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      id: i,
      top: `${(i * 23 + 12) % 100}%`,
      left: `${(i * 37 + 15) % 100}%`,
      delay: (i * 0.3) % 2,
    }));
  }, []);

  const getIframeSrc = (mode) => {
    switch (mode) {
      case 'satellite':
        return `https://maps.google.com/maps?q=Skumar+Light+And+Flower+Decoration+Jaipur&t=k&z=17&ie=UTF8&iwloc=&output=embed`;
      case 'hybrid':
        return `https://maps.google.com/maps?q=Skumar+Light+And+Flower+Decoration+Jaipur&t=h&z=16&ie=UTF8&iwloc=&output=embed`;
      case 'roadmap':
      default:
        return `https://maps.google.com/maps?q=Skumar+Light+And+Flower+Decoration+Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    }
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-16 rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_20px_60px_rgba(13,5,24,0.9)] glass-panel relative group"
      >
        {/* Animated Gold Perimeter Glow Beam */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f5c451] to-transparent animate-gold-pulse z-20" />

        {/* Top Control & Location Header */}
        <div className="p-4 sm:p-6 bg-[#0d0518]/95 border-b border-[#d4af37]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-20">
          {/* Business Pin Info with Pulsing Radar Ring */}
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-[#f5c451]/30 animate-ping" />
              <div className="w-12 h-12 rounded-full bg-gold-gradient p-[2px] shadow-[0_0_20px_rgba(245,196,81,0.5)] relative z-10">
                <div className="w-full h-full bg-[#0d0518] rounded-full flex items-center justify-center text-[#f5c451]">
                  <MapPin className="w-6 h-6 text-[#f5c451] animate-bounce" />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-base sm:text-lg text-gold-gradient tracking-wide font-serif-heading">
                  S.KUMAR Light & Flower Decoration
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 Live Pin</span>
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans mt-0.5">
                QM5X+WP6, Kishanpura at Khatipura, Jaipur, Rajasthan - {businessInfo.pincode}
              </p>
            </div>
          </div>

          {/* View Mode Switcher Buttons */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <div className="bg-[#1a0a2e] p-1 rounded-2xl border border-[#d4af37]/30 flex items-center gap-1 text-xs" role="group" aria-label="Map view mode options">
              <button
                type="button"
                onClick={() => setMapMode('roadmap')}
                aria-label="Switch to map mode"
                aria-pressed={mapMode === 'roadmap'}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  mapMode === 'roadmap'
                    ? 'bg-gold-gradient text-purple-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-[#f5c451]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Map Mode</span>
              </button>

              <button
                type="button"
                onClick={() => setMapMode('satellite')}
                aria-label="Switch to satellite mode"
                aria-pressed={mapMode === 'satellite'}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  mapMode === 'satellite'
                    ? 'bg-gold-gradient text-purple-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-[#f5c451]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Satellite HD</span>
              </button>

              <button
                type="button"
                onClick={() => setMapMode('hybrid')}
                aria-label="Switch to 3D hybrid mode"
                aria-pressed={mapMode === 'hybrid'}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  mapMode === 'hybrid'
                    ? 'bg-gold-gradient text-purple-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-[#f5c451]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Hybrid</span>
              </button>
            </div>

            {/* Expand Fullscreen Button */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              aria-label="Expand map to fullscreen"
              className="p-2.5 rounded-2xl bg-[#1a0a2e] border border-[#d4af37]/30 text-[#f5c451] hover:bg-[#2e0a4a] hover:border-[#f5c451] transition-all cursor-pointer shadow-md"
              title="Expand Fullscreen Map"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* STEP 2 — Container Markup (exact structure) */}
        <div
          ref={containerRef}
          className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-[#0a0a14]"
        >
          {/* Globe Layer */}
          <AnimatePresence>
            {stage !== 'map' && (
              <motion.div
                key="globe-layer"
                className="absolute inset-0 flex items-center justify-center bg-[#0a0a14] z-20 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{
                  opacity: stage === 'zooming' ? 0 : 1,
                  scale: stage === 'zooming' ? 25 : 1,
                }}
                transition={{
                  opacity: { duration: 1.2, delay: stage === 'zooming' ? 0.3 : 0 },
                  scale: { duration: 1.5, ease: [0.65, 0, 0.85, 0.35] },
                }}
                style={{ transformOrigin: '62% 38%' }}
              >
                {/* Stars background */}
                <div className="absolute inset-0">
                  {stars.map((star) => (
                    <div
                      key={star.id}
                      className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
                      style={{ top: star.top, left: star.left, animationDelay: `${star.delay}s` }}
                    />
                  ))}
                </div>

                {/* Globe SVG */}
                <motion.svg
                  viewBox="0 0 200 200"
                  className="w-40 h-40 md:w-52 md:h-52"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <defs>
                    <radialGradient id="globeGrad" cx="35%" cy="35%" r="70%">
                      <stop offset="0%" stopColor="#2d1b4e" />
                      <stop offset="60%" stopColor="#150a28" />
                      <stop offset="100%" stopColor="#0a0514" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="url(#globeGrad)"
                    stroke="#d4af37"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                  />
                  {/* Stylized continent blobs */}
                  <path
                    d="M60 70 Q80 60 100 75 Q110 90 95 100 Q75 105 65 90 Z"
                    fill="#d4af37"
                    fillOpacity="0.35"
                  />
                  <path
                    d="M110 110 Q130 105 140 120 Q135 135 115 130 Z"
                    fill="#d4af37"
                    fillOpacity="0.35"
                  />
                  <path
                    d="M70 120 Q85 118 90 135 Q80 145 65 138 Z"
                    fill="#d4af37"
                    fillOpacity="0.3"
                  />
                </motion.svg>

                {/* Pulsing pin marking India/Jaipur position */}
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-[#f5c451]"
                  style={{ top: '38%', left: '62%' }}
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <span className="absolute inset-0 rounded-full bg-[#f5c451] animate-ping" />
                </motion.div>

                {/* Caption */}
                <motion.p
                  className="absolute bottom-6 text-[#f0dba8] text-sm tracking-wide font-light font-hindi"
                  animate={{ opacity: stage === 'zooming' ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  आपकी मंज़िल तक पहुंचते हुए...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Map Layer */}
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.08 }}
            animate={{
              opacity: stage === 'map' ? 1 : 0,
              scale: stage === 'map' ? 1 : 1.08,
            }}
            transition={{ duration: prefersReducedMotion ? 0.5 : 1, ease: 'easeOut' }}
          >
            <iframe
              key={mapMode}
              src={getIframeSrc(mapMode)}
              className="w-full h-full border-0"
              loading="lazy"
              title="S.Kumar Light and Flower Decoration Interactive Location Map"
              style={{
                border: 0,
                filter: mapMode === 'satellite' ? 'contrast(1.15) brightness(0.95)' : 'contrast(1.08)',
              }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Floating Action Pill Bar over Map Bottom */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 flex flex-wrap items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gold-gradient text-purple-950 font-bold text-xs shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center gap-2 hover:shadow-[0_0_30px_rgba(245,196,81,0.9)] transition-all"
            >
              <Navigation className="w-4 h-4 fill-purple-950" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyAddress}
              className="px-4 py-2.5 rounded-full bg-[#0d0518]/90 backdrop-blur-md border border-[#d4af37]/40 text-[#f5c451] hover:bg-[#2e0a4a] text-xs font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#f5c451]" />
                  <span>Copy Address</span>
                </>
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${businessInfo.phone}`}
              className="px-4 py-2.5 rounded-full bg-[#0d0518]/90 backdrop-blur-md border border-[#d4af37]/40 text-slate-100 hover:text-[#f5c451] hover:bg-[#2e0a4a] text-xs font-semibold flex items-center gap-2 shadow-lg transition-all hidden sm:flex"
            >
              <Phone className="w-3.5 h-3.5 text-[#f5c451]" />
              <span>Call: {businessInfo.phone}</span>
            </motion.a>
          </div>

          {/* Top Right Floating Badge */}
          <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0518]/90 backdrop-blur-md border border-[#d4af37]/30 text-[11px] font-semibold text-slate-200 shadow-xl">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#f5c451]" />
            <span>Khatipura, Vaishali Nagar & Whole Jaipur</span>
          </div>
        </div>

        {/* Footer Info Strip */}
        <div className="p-3 sm:p-4 bg-[#080210] border-t border-[#d4af37]/20 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
          <div className="flex items-center gap-2 font-hindi text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#f5c451]" />
            <span>विशेष सेवा: वेडिंग लाइटिंग, ताजा फ्लावर मंडप व स्टेज डेकोरेशन</span>
          </div>
          <div className="text-[11px] text-[#f5c451] font-mono">
            Plus Code: {businessInfo.plusCode}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Interactive Animated Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col p-4 sm:p-6"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/30 text-white">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#f5c451] animate-bounce" />
                <div>
                  <h3 className="text-lg font-bold text-gold-gradient font-serif-heading">
                    S.KUMAR Light & Flower Decoration Location Map
                  </h3>
                  <p className="text-xs text-slate-300">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gold-gradient text-purple-950 font-bold text-xs flex items-center gap-1.5 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in App</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  aria-label="Close fullscreen map"
                  className="p-2 rounded-full bg-[#1a0a2e] border border-[#d4af37]/40 text-[#f5c451] hover:bg-[#2e0a4a] cursor-pointer"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Full Map Iframe */}
            <div className="flex-1 my-4 rounded-2xl overflow-hidden border border-[#d4af37]/30 relative">
              <iframe
                src={getIframeSrc(mapMode)}
                title="Fullscreen Map View"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedMap;
