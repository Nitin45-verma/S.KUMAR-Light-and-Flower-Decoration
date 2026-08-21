import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Phone, Layers, LayoutGrid, Sparkles, ChevronDown } from 'lucide-react';
import { galleryCategories, galleryItems, businessInfo } from '../data/content';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './ScrollStack.css';
import ImageReveal from './ImageReveal';
import MagneticButton from './MagneticButton';
import ImageTrail from './ImageTrail';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [trailVariant, setTrailVariant] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const uniqueItems = Array.from(
    new Map(galleryItems.map(item => [item.image, item])).values()
  );

  const filteredItems = activeCategory === 'All'
    ? uniqueItems
    : uniqueItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching exact screenshot 6 */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-md font-sans">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>DECORATION PORTFOLIO</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient tracking-wide uppercase">
            OUR WORK GALLERY
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-hindi italic font-medium">
            "खातीपुरा व जयपुर में की गई हमारी बेहतरीन सजावट और लाइटिंग की एक झलक"
          </p>
        </div>

        {/* Category Filter Pills Centered matching exact screenshot */}
        <div className="flex flex-col items-center justify-center gap-6 mb-12">

          {/* ── MOBILE: Dropdown ── */}
          <div className="relative w-full sm:hidden" role="listbox" aria-label="Select gallery category">
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              data-cursor="link"
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
              className="w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-purple-900/80 border border-amber-400/40 text-amber-300 font-bold text-sm font-sans shadow-md cursor-pointer"
            >
              <span>📂 {activeCategory}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${
                  dropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl bg-purple-950 border border-amber-400/30 shadow-2xl overflow-hidden"
                  role="listbox"
                >
                  {galleryCategories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <li
                        key={category}
                        role="option"
                        aria-selected={isActive}
                        onClick={() => {
                          setActiveCategory(category);
                          setDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-5 py-3.5 cursor-pointer text-sm font-bold font-sans transition-colors ${
                          isActive
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'text-slate-200 hover:bg-purple-900 hover:text-amber-300'
                        }`}
                      >
                        <span>{category}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-amber-400 shadow-gold-glow" />}
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* ── DESKTOP: Pill Buttons ── */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 w-full" role="tablist" aria-label="Gallery category filters">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Filter gallery by ${category}`}
                  onClick={() => setActiveCategory(category)}
                  data-cursor="link"
                  className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gold-gradient text-purple-950 shadow-gold-glow scale-105'
                      : 'bg-purple-900/60 border border-amber-500/30 text-slate-200 hover:text-amber-300 hover:border-amber-400/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* View Switcher Toggle */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-sans shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              data-cursor="link"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'border border-amber-400/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('stack')}
              data-cursor="link"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'stack'
                  ? 'border border-amber-400/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Stack View</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('trail')}
              data-cursor="link"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                viewMode === 'trail'
                  ? 'border border-amber-400/50 bg-amber-500/20 text-amber-300 shadow-sm'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Trail</span>
            </button>
          </div>
        </div>

        {/* ── GRID VIEW (STANDARD CARDS) ────────────────────────────────────── */}
        {viewMode === 'grid' && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseMove={handleCardMouseMove}
                  onClick={() => setSelectedImage(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details of ${item.title}`}
                  data-cursor="view"
                  className="group relative rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 bg-purple-900 cursor-pointer h-72 sm:h-80 transition-all duration-300 glass-card-hover card-spotlight"
                >
                  <ImageReveal
                    src={item.image}
                    alt={`${item.title} - S.Kumar Light Decoration`}
                    imgClassName="h-72 sm:h-80 object-cover group-hover:scale-[1.06] transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    data-cursor="view"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-950/90 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider font-sans">
                    {item.category}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10">
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold-gradient transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-hindi mt-1 line-clamp-2 font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── 3D SCROLL STACK VIEW ────────────────────────────────────────────── */}
        {viewMode === 'stack' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
          >
            <ScrollStack
              useWindowScroll={true}
              itemDistance={120}
              itemScale={0.04}
              itemStackDistance={20}
              stackPosition="12%"
              scaleEndPosition="8%"
              baseScale={0.84}
              rotationAmount={1}
              blurAmount={2}
            >
              {filteredItems.map((item, idx) => (
                <ScrollStackItem key={item.id || idx}>
                  <div className="w-full h-full relative rounded-2xl overflow-hidden border border-amber-400/30 group bg-purple-950 glass-card" data-cursor="view">
                    <img
                      src={item.image}
                      alt={`${item.title} - S.Kumar Light Decoration`}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent opacity-95" />

                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                      <div className="px-3 py-1 rounded-full bg-purple-950/90 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider font-sans">
                        {item.category}
                      </div>

                      <div className="text-xl font-serif text-amber-300 font-bold">
                        {String(idx + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div className="max-w-2xl text-left">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1 font-sans">
                          S.Kumar Light & Flower Decor Setup
                        </span>
                        <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-300 font-hindi leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <MagneticButton
                          onClick={() => setSelectedImage(item)}
                          className="shimmer-btn gap-2 px-5 py-2.5 rounded-full border border-amber-400/40 bg-amber-500/15 text-amber-300 hover:bg-amber-400 hover:text-purple-950 font-semibold text-xs font-sans shadow-gold-glow"
                          data-cursor="link"
                        >
                          <ZoomIn className="w-4 h-4 text-amber-300" />
                          <span>View Full Photo</span>
                        </MagneticButton>
                        <a
                          href={`tel:${businessInfo.phone}`}
                          className="inline-flex items-center justify-center p-2.5 rounded-full border border-amber-400/40 bg-purple-900 text-amber-300 hover:bg-amber-400 hover:text-purple-950 transition-colors"
                          title="Call for Booking"
                          data-cursor="link"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </motion.div>
        )}

        {/* ── INTERACTIVE IMAGE TRAIL VIEW ────────────────────────────────────── */}
        {viewMode === 'trail' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full relative rounded-2xl overflow-hidden border border-amber-400/40 bg-purple-900/60 shadow-2xl glass-card flex flex-col justify-between"
          >
            {/* Header control bar */}
            <div className="p-4 sm:p-6 bg-purple-950/80 backdrop-blur-md border-b border-amber-400/30 flex flex-wrap items-center justify-between gap-4 z-20">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block font-sans">
                  MAGIC INTERACTIVE CANVAS
                </span>
                <p className="text-xs sm:text-sm font-hindi text-slate-200 mt-0.5">
                  माउस को इस क्षेत्र में घुमाएं और हमारी लाइटिंग गैलरी ट्रेल का अनुभव करें! (Move mouse here to trail photos)
                </p>
              </div>

              {/* Variant Selector Pills */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-amber-300 font-sans mr-1 font-semibold">Animation Style:</span>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setTrailVariant(v)}
                    data-cursor="link"
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      trailVariant === v
                        ? 'bg-amber-400 text-purple-950 shadow-gold-glow scale-110'
                        : 'bg-purple-950 border border-amber-400/30 text-amber-300 hover:bg-amber-400/20'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Image Trail Canvas Area */}
            <div className="relative w-full h-[450px] sm:h-[550px] overflow-hidden cursor-crosshair">
              <ImageTrail
                key={`trail-${trailVariant}-${activeCategory}`}
                items={filteredItems.map((item) => item.image)}
                variant={trailVariant}
              />
            </div>
          </motion.div>
        )}

        {/* Editorial Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-2xl bg-purple-950 border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] glass-card"
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image lightbox"
                  data-cursor="link"
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-purple-950/90 border border-amber-400/40 text-slate-200 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-amber-300" />
                </button>

                <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-950/90 text-amber-300 text-xs font-bold uppercase font-sans border border-amber-400/40">
                    {selectedImage.category}
                  </div>
                </div>

                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left font-sans">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-hindi leading-relaxed">
                      {selectedImage.desc}
                    </p>

                    <div className="mt-6 p-4 rounded-xl glass-panel border border-amber-500/20">
                      <h4 className="text-xs font-bold text-amber-300 uppercase mb-1">
                        S.Kumar Light & Flower Decor
                      </h4>
                      <p className="text-xs text-slate-300">
                        Khatipura, Jaipur • Custom Royal Setup
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <a
                      href={`https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(`Hello S.Kumar Decor, I am interested in this design: ${selectedImage.title} (${selectedImage.category})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="link"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md"
                    >
                      <span>Inquire This Photo on WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${businessInfo.phone}`}
                      data-cursor="link"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-amber-400/40 text-amber-300 bg-amber-500/10 hover:bg-amber-400 hover:text-purple-950 font-bold text-xs transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now: {businessInfo.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
