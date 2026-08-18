import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Flower2, Sparkles, Music, Crown, Tent, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services, businessInfo } from '../data/content';
import MagneticButton from './MagneticButton';

const iconMap = { Lightbulb, Flower2, Sparkles, Music, Crown, Tent };

const Services = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-800/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching exact screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-md font-sans">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>OUR OFFERINGS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gold-gradient tracking-wide uppercase">
            OUR LUXURY SERVICES
          </h2>

          <p className="text-base sm:text-lg text-amber-200/90 font-hindi max-w-2xl mx-auto italic font-medium">
            "शादी, सगाई, पार्टी और सभी शुभ अवसरों के लिए प्रीमियम व शाही सजावट की सेवाएं"
          </p>
        </div>

        {/* 6 Services Responsive Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileTap={{ scale: 0.98 }}
                onMouseMove={handleMouseMove}
                data-cursor="view"
                className="group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between transition-all duration-300 glass-card-hover card-spotlight border border-amber-500/25 bg-purple-950/90 shadow-xl"
              >
                <div>
                  {/* Top Image Box */}
                  <div className="relative h-64 w-full overflow-hidden bg-purple-900 border-b border-amber-500/20">
                    <img
                      src={service.image}
                      alt={`${service.title} - S.Kumar Light Decoration Khatipura Jaipur`}
                      className="w-full h-64 object-cover group-hover:scale-[1.06] transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/20 to-transparent opacity-80" />

                    {/* Top-Left Glowing Gold Icon Badge */}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-purple-950/90 backdrop-blur-md border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-md z-10">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    {/* Top-Right Emoji Badge */}
                    <div className="absolute top-4 right-4 text-2xl z-10 filter drop-shadow-md">
                      {service.emoji}
                    </div>
                  </div>

                  {/* Content Body matching screenshot */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-2xl font-serif text-white font-semibold group-hover:text-gold-gradient transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-amber-400 font-hindi mt-0.5">
                        {service.titleHindi}
                      </p>
                    </div>

                    <p className="text-sm font-hindi text-slate-300 leading-relaxed font-light pt-1">
                      {service.shortDesc}
                    </p>

                    {/* Feature Checkmark Bullets matching screenshot */}
                    <div className="space-y-2 pt-3 font-sans border-t border-amber-500/15">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Button */}
                <div className="p-6 pt-0 relative z-10">
                  <MagneticButton
                    href={`tel:${businessInfo.phone}`}
                    className="shimmer-btn w-full gap-2 py-3 rounded-xl border border-amber-400/40 text-amber-300 bg-amber-500/15 hover:bg-amber-400 hover:text-purple-950 font-bold text-xs sm:text-sm font-sans shadow-md"
                    data-cursor="link"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>
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
