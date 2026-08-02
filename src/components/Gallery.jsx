import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ZoomIn, Phone, Filter } from 'lucide-react';
import { galleryCategories, galleryItems, businessInfo } from '../data/content';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0d0518] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#4a1268]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a2e] border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#f5c451]" />
            <span>Decoration Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            OUR WORK GALLERY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "खातीपुरा व जयपुर में की गई हमारी बेहतरीन सजावट और लाइटिंग की एक झलक"
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12"
        >
          {galleryCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gold-gradient text-purple-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-[#1a0a2e]/90 text-slate-300 hover:text-[#f5c451] border border-[#d4af37]/20 hover:border-[#f5c451]/60'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Gallery Grid with Framer Motion Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/30 bg-[#1a0a2e] cursor-pointer card-hover-glow h-72 sm:h-80"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={`${item.title} - S.Kumar Light Decoration`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-[#0d0518]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0d0518]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f5c451] text-[11px] font-semibold uppercase tracking-wider">
                  {item.category}
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold-gradient text-purple-950 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg">
                  <ZoomIn className="w-5 h-5" />
                </div>

                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold font-serif-heading text-slate-100 group-hover:text-[#f5c451] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-hindi mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-2xl bg-[#1a0a2e] border-2 border-[#d4af37]/60 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#0d0518]/80 text-slate-200 hover:text-[#f5c451] border border-[#d4af37]/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Image */}
                <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[450px]">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-gradient text-purple-950 text-xs font-bold uppercase">
                    {selectedImage.category}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold font-serif-heading text-gold-gradient mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-hindi leading-relaxed">
                      {selectedImage.desc}
                    </p>

                    <div className="mt-6 p-4 rounded-xl bg-[#2e0a4a]/50 border border-[#d4af37]/20">
                      <h4 className="text-xs font-semibold text-[#f5c451] uppercase mb-1">
                        Provided by S.Kumar Light Decoration
                      </h4>
                      <p className="text-xs text-slate-300">
                        Khatipura, Jaipur • Complete Custom Lighting & Setup
                      </p>
                    </div>
                  </div>

                  {/* Modal CTA */}
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                  >
                    <Phone className="w-4 h-4 fill-purple-950" />
                    <span>Inquire For Similar Setup ({businessInfo.phone})</span>
                  </a>
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
