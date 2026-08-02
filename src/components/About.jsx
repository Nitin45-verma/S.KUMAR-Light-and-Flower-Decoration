import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Sparkles, MapPin, CheckCircle2, Star } from 'lucide-react';
import { businessInfo } from '../data/content';

const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-gold-gradient">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0d0518] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4a1268]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2e0a4a]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a2e] border border-[#d4af37]/30 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#f5c451]" />
            <span>About Our Brand</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-heading text-gold-gradient"
          >
            {businessInfo.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-300 font-hindi"
          >
            "आपके हर खास मौके को बनाएं और भी खास, हमारी लाइटिंग से दें एक नई पहचान!"
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-[0_15px_40px_rgba(13,5,24,0.9)] group">
              <img
                src={businessInfo.aboutImage}
                alt="S.Kumar Light and Flower Decoration Event Setup Jaipur"
                className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0518] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[#d4af37]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-purple-950">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f5c451]">Kapurwala, Jaipur</h4>
                    <p className="text-xs text-slate-300 font-hindi">वेडिंग लाइटिंग व फ्लावर डेकोरेशन</p>
                  </div>
                </div>
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#f5c451] rounded-tl-xl pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#f5c451] rounded-br-xl pointer-events-none hidden sm:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f5c451] uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Kapurwala, Pawaliya Road, Jaipur, Rajasthan</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-slate-100 leading-snug">
              Specialists in Wedding Lighting & Fresh Flower Decoration in Jaipur
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-[#f5c451]">S.KUMAR Light and Flower Decoration</strong>, we are premier specialists in high-end wedding lighting, fresh flower arrangements, grand stage setups, line-array DJ sound systems, royal dulhan entries, and luxury waterproof tents.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-hindi">
              कपूरवाला, पवालिया रोड, जयपुर में स्थित एस. कुमार लाइट एंड फ्लावर डेकोरेशन - शादी, रिंग सेरेमनी, सगाई व सभी उत्सवों के लिए शाही लाइटिंग और ताजे फूलों की भव्य सजावट की सर्वोत्तम सेवा प्रदान करता है।
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#f5c451] shrink-0" />
                <span className="text-sm font-medium text-slate-200">Luxury Crystal Chandeliers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#f5c451] shrink-0" />
                <span className="text-sm font-medium text-slate-200">Fresh Flower Mandaps & Arches</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#f5c451] shrink-0" />
                <span className="text-sm font-medium text-slate-200">Cold Pyro Dulhan Entry</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#f5c451] shrink-0" />
                <span className="text-sm font-medium text-slate-200">Waterproof Tent & Light Setup</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={`tel:${businessInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,196,81,0.7)] transition-all"
              >
                <span>Book Event: {businessInfo.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {businessInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#1a0a2e]/80 border border-[#d4af37]/30 text-center glass-panel card-hover-glow"
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-100 uppercase tracking-wide">
                {stat.label}
              </h4>
              <p className="mt-1 text-xs text-[#f5c451] font-hindi">
                {stat.labelHindi}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
