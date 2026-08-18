import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/content';
import TextReveal from './TextReveal';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section id="testimonials" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-800/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-label font-body uppercase tracking-widest text-amber-300 block mb-3 font-semibold">
            ✨ Client Reviews • ग्राहकों की राय
          </span>

          <TextReveal
            text="WHAT OUR CLIENTS SAY"
            className="text-h2 font-display text-white tracking-tight uppercase"
          />
        </div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="w-full p-8 sm:p-12 rounded-2xl glass-card border border-amber-400/30 shadow-2xl flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-300">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300 shadow-gold-glow" />
                    ))}
                  </div>
                  <Quote className="w-9 h-9 text-amber-400/25 rotate-180" />
                </div>

                <p className="text-body-lg text-slate-200 font-hindi leading-relaxed italic">
                  "{testimonials[currentIndex].review}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-500/20 flex items-center justify-between flex-wrap gap-4 font-body">
                <div>
                  <h4 className="text-h4 font-bold font-display text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-body-sm text-slate-300 font-hindi mt-0.5">
                    {testimonials[currentIndex].location} • <span className="text-amber-300 font-semibold">{testimonials[currentIndex].event}</span>
                  </p>
                </div>

                <div className="text-body-sm text-amber-300 glass-panel px-3 py-1 rounded-full border border-amber-400/30 font-mono">
                  {testimonials[currentIndex].date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between font-body">
          <button
            type="button"
            onClick={handlePrev}
            data-cursor="link"
            className="p-3 rounded-full glass-panel border border-amber-400/30 text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-all cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={currentIndex === idx}
                onClick={() => setCurrentIndex(idx)}
                data-cursor="link"
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gold-gradient shadow-gold-glow' : 'w-2.5 bg-amber-500/30 hover:bg-amber-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            data-cursor="link"
            className="p-3 rounded-full glass-panel border border-amber-400/30 text-slate-300 hover:text-amber-300 hover:border-amber-400 transition-all cursor-pointer"
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
