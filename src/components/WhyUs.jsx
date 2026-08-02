import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, BadgePercent, Check } from 'lucide-react';
import { whyChooseUsFeatures } from '../data/content';

const iconMap = {
  Sparkles,
  Clock,
  BadgePercent,
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#1a0a2e] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4a1268]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0518] border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#f5c451]" />
            <span>Why Choose Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            WHY S.KUMAR LIGHT DECORATION?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "हम क्यों हैं खातीपुरा व जयपुर में इवेंट डेकोरेशन के लिए पहली पसंद?"
          </motion.p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.85, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15, type: 'spring', damping: 20 }}
                className="group relative p-8 rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/30 text-center glass-panel border-gold-glow flex flex-col items-center justify-between"
              >
                <div>
                  {/* Gold Circular Badge Design */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f5c451] via-[#d4af37] to-[#b8860b] p-[2px] shadow-[0_0_25px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(245,196,81,0.7)] transition-all duration-500">
                      <div className="w-full h-full bg-[#0d0518] rounded-full flex items-center justify-center text-[#f5c451]">
                        <IconComponent className="w-9 h-9 group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                    </div>
                    {/* Small Pulsing Ring */}
                    <div className="absolute inset-0 rounded-full border border-[#f5c451]/40 animate-ping pointer-events-none" />
                  </div>

                  {/* Hindi Title */}
                  <h3 className="text-2xl font-bold font-hindi text-slate-100 group-hover:text-[#f5c451] transition-colors mb-1">
                    {feature.titleHindi}
                  </h3>

                  {/* English Title */}
                  <p className="text-xs font-semibold text-[#f5c451] uppercase tracking-widest mb-4">
                    ({feature.titleEng})
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 font-hindi leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Assurance Tag */}
                <div className="mt-6 pt-4 border-t border-[#d4af37]/20 w-full flex items-center justify-center gap-2 text-xs font-semibold text-amber-400">
                  <Check className="w-4 h-4 text-[#f5c451]" />
                  <span>100% Guaranteed Excellence</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
