import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Flower2, Sparkles, Music, Crown, Tent, CheckCircle2, ArrowRight } from 'lucide-react';
import { services, businessInfo } from '../data/content';

const iconMap = {
  Lightbulb,
  Flower2,
  Sparkles,
  Music,
  Crown,
  Tent,
};

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#1a0a2e] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4a1268]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2e0a4a]/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>Our Offerings</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            OUR LUXURY SERVICES
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "शादी, सगाई, पार्टी और सभी शुभ अवसरों के लिए प्रीमियम व शाही सजावट की सेवाएं"
          </motion.p>
        </div>

        {/* 6 Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/30 overflow-hidden flex flex-col justify-between card-hover-glow border-gold-glow"
              >
                <div>
                  {/* Top Image with Zoom Hover Effect */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - S.Kumar Light Decoration Khatipura Jaipur`}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-[#0d0518]/40 to-transparent" />

                    {/* Service Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-gold-gradient p-[1px] shadow-lg">
                      <div className="w-full h-full bg-[#0d0518] rounded-[11px] flex items-center justify-center text-[#f5c451]">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Emoji Tag */}
                    <div className="absolute top-4 right-4 text-2xl drop-shadow-md">
                      {service.emoji}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-xl font-bold font-serif-heading text-slate-100 group-hover:text-[#f5c451] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-[#f5c451] font-hindi mb-3">
                      {service.titleHindi}
                    </p>

                    <p className="text-slate-300 text-sm font-hindi leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2 border-t border-[#d4af37]/20">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f5c451] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA in Card */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#2e0a4a]/60 hover:bg-gold-gradient text-slate-200 hover:text-purple-950 border border-[#d4af37]/30 hover:border-transparent font-semibold text-xs transition-all duration-300 group/btn"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
