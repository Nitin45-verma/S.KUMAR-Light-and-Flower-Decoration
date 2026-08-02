import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#0d0518] relative overflow-hidden">
      {/* Ambient purple glowing orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2e0a4a]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a2e] border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#f5c451]" />
            <span>Client Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            WHAT OUR CLIENTS SAY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "ग्राहकों के हमारे काम और लाइटिंग डेकोरेशन पर विचार"
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[320px] sm:min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50) handleNext();
                else if (offset.x > 50) handlePrev();
              }}
              className="w-full p-8 sm:p-10 rounded-2xl bg-[#1a0a2e]/90 border border-[#d4af37]/40 shadow-[0_15px_35px_rgba(13,5,24,0.8)] glass-panel border-gold-glow flex flex-col justify-between"
            >
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-10 h-10 text-[#f5c451]/30 rotate-180" />
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-slate-200 font-hindi leading-relaxed italic">
                  "{testimonials[currentIndex].review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-8 pt-6 border-t border-[#d4af37]/20 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-bold font-serif-heading text-gold-gradient">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-xs text-slate-300 font-hindi">
                    {testimonials[currentIndex].location} • <span className="text-[#f5c451]">{testimonials[currentIndex].event}</span>
                  </p>
                </div>

                <div className="text-xs text-slate-400 bg-[#0d0518] px-3 py-1 rounded-full border border-[#d4af37]/20">
                  {testimonials[currentIndex].date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls & Dots */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-[#1a0a2e] border border-[#d4af37]/30 text-slate-200 hover:text-[#f5c451] hover:border-[#f5c451] transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-gold-gradient shadow-[0_0_10px_rgba(245,196,81,0.6)]'
                    : 'w-2.5 bg-[#2e0a4a] hover:bg-[#d4af37]/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-[#1a0a2e] border border-[#d4af37]/30 text-slate-200 hover:text-[#f5c451] hover:border-[#f5c451] transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
