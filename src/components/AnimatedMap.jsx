import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Layers, Copy, Check, Minimize2, Maximize2, Compass } from 'lucide-react';
import { businessInfo } from '../data/content';

const AnimatedMap = () => {
  const [mapMode, setMapMode] = useState('roadmap');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 rounded-2xl overflow-hidden border border-amber-500/25 bg-purple-950 relative text-left shadow-2xl glass-card"
      >
        <div className="p-4 sm:p-6 bg-purple-900 border-b border-amber-500/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-20 font-sans">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl glass-panel border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 font-bold">
              <MapPin className="w-5 h-5 text-amber-300" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap font-sans">
                <h3 className="font-bold text-base sm:text-lg text-white font-serif-heading">
                  S.KUMAR Light & Flower Decoration
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold font-sans">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Venue Pin</span>
                </span>
              </div>

              <p className="text-xs text-slate-300 font-sans mt-0.5">
                QM5X+WP6, Kishanpura at Khatipura, Jaipur, Rajasthan - {businessInfo.pincode}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap font-sans">
            <div className="glass-panel p-1 rounded-xl border border-amber-500/20 flex items-center gap-1 text-xs" role="group" aria-label="Map view mode options">
              <button
                type="button"
                onClick={() => setMapMode('roadmap')}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  mapMode === 'roadmap'
                    ? 'bg-gold-gradient text-purple-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-amber-300'
                }`}
              >
                <Compass className="w-3.5 h-3.5 inline mr-1" />
                <span>Map</span>
              </button>

              <button
                type="button"
                onClick={() => setMapMode('satellite')}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  mapMode === 'satellite'
                    ? 'bg-gold-gradient text-purple-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-amber-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5 inline mr-1" />
                <span>Satellite</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="p-2.5 rounded-xl glass-panel border border-amber-400/30 text-slate-200 hover:text-amber-300 transition-colors cursor-pointer"
              title="Expand Fullscreen Map"
            >
              <Maximize2 className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-purple-950"
        >
          <iframe
            key={mapMode}
            src={getIframeSrc(mapMode)}
            className="w-full h-full border-0"
            loading="lazy"
            title="S.Kumar Light and Flower Decoration Interactive Location Map"
            style={{ border: 0 }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-20 flex flex-wrap items-center gap-2.5 font-sans">
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn px-5 py-2.5 rounded-full border border-amber-400/40 text-purple-950 bg-gold-gradient font-bold text-xs shadow-gold-glow flex items-center gap-2 transition-all hover:scale-105"
            >
              <Navigation className="w-4 h-4 fill-purple-950" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyAddress}
              className="px-4 py-2.5 rounded-full bg-purple-950/90 backdrop-blur-md border border-amber-400/40 text-slate-200 hover:text-amber-300 text-xs font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-300" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-4 sm:p-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 text-white font-sans">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <h3 className="text-lg font-bold font-serif-heading text-white">
                    S.KUMAR Light & Flower Decoration Map
                  </h3>
                  <p className="text-xs text-slate-300 font-light">
                    {businessInfo.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gold-gradient text-purple-950 font-bold text-xs flex items-center gap-1.5 shadow-gold-glow"
                >
                  <Navigation className="w-4 h-4 fill-purple-950" />
                  <span>Open Maps</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-full bg-purple-900 border border-amber-400/40 text-amber-300 hover:bg-purple-950 cursor-pointer"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 my-4 rounded-2xl overflow-hidden border border-amber-500/30 relative">
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
