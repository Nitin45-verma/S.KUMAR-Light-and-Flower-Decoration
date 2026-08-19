import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, CheckCircle2, Star } from 'lucide-react';
import { businessInfo } from '../data/content';
import Ballpit from './Ballpit';

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
    <span ref={ref} className="text-3xl sm:text-4xl font-bold font-serif text-gold-gradient block">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden">
      {/* Interactive 3D Ballpit Physics Layer */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none lg:pointer-events-auto">
        <Ballpit
          count={100}
          gravity={0.4}
          friction={0.992}
          wallBounce={0.9}
          followCursor={true}
          colors={[0xf5c451, 0xa855f7, 0xfbbf24, 0xd946ef, 0xffd700]}
          ambientColor={0xffffff}
          ambientIntensity={1.2}
          lightIntensity={250}
          minSize={0.4}
          maxSize={0.85}
        />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Section (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans block mb-3">
            ✨ ABOUT OUR BRAND • हमारी पहचान
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal font-serif text-white tracking-tight">
            {businessInfo.name}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-amber-200/90 font-hindi max-w-2xl mx-auto italic font-medium">
            "आपके हर खास मौके को बनाएं और भी खास, हमारी सजावट से दें एक नई पहचान!"
          </p>
        </div>

        {/* Two Column Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Image with Gold Accents matching exact screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative p-3 sm:p-4"
            data-cursor="view"
          >
            {/* Decorative Gold Accent Corner Lines (Top-Left & Bottom-Right) */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/80 rounded-tl-2xl pointer-events-none z-10" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/80 rounded-br-2xl pointer-events-none z-10" />

            {/* Glowing Top-Left Ambient Orb */}
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-amber-400/25 rounded-full blur-2xl pointer-events-none z-0" />

            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-2xl glass-card group z-10">
              {/* Top-Left Floating Badge: Khatipura, Jaipur */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-950/85 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold font-sans shadow-md">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Khatipura, Jaipur</span>
              </div>

              {/* Top-Right Floating Badge: 5 Stars */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-950/85 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs shadow-md">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <img
                src={businessInfo.aboutImage}
                alt="S.Kumar Light and Flower Decoration Jaipur Official Banner"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Bottom Info Glass Card matching screenshot */}
            <div className="mt-4 p-4 rounded-2xl glass-panel border border-amber-400/30 bg-purple-950/90 shadow-xl flex items-center justify-between font-sans z-10 relative">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-11 h-11 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300 font-sans">
                    Khatipura, Jaipur
                  </h4>
                  <p className="text-xs text-slate-200 font-hindi mt-0.5 font-medium">
                    वेडिंग लाइटिंग व फ्लावर डेकोरेशन
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-purple-900/90 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <span>5.0</span>
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Business Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-widest transition-colors font-sans"
              data-cursor="link"
            >
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="underline decoration-amber-500/40 underline-offset-4">KHATIPURA, JAIPUR, JAIPUR, RAJASTHAN</span>
            </a>

            <h3 className="text-2xl sm:text-3xl font-normal font-serif text-white leading-snug">
              Specialists in Royal Wedding Lighting & Fresh Floral Artistry
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              At <strong className="text-amber-300 font-semibold">S.KUMAR Light and Flower Decoration</strong>, we transform wedding venues into glowing fairytale spaces with hanging crystal chandeliers, fresh flower mandaps, cold pyro bride entry walkways, and line-array concert sound.
            </p>

            {/* Hindi Highlight Box */}
            <div className="p-5 rounded-2xl glass-panel bg-purple-900/40 border border-amber-500/20 text-slate-200">
              <p className="text-sm sm:text-base font-hindi leading-relaxed text-amber-100/90">
                खातीपुरा, किशनपुरा, जयपुर में स्थित एस. कुमार लाइट एंड फ्लावर डेकोरेशन — शादी, सगाई व सभी मांगलिक अवसरों के लिए शाही लाइटिंग और ताजे फूलों की सर्वोत्तम सजावट की गारंटी देता है।
              </p>
            </div>

            {/* 4 Feature Pills Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-sans">
              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-amber-500/20 bg-purple-950/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Royal Crystal Chandeliers</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-amber-500/20 bg-purple-950/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Exotic Flower Mandaps & Arches</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-amber-500/20 bg-purple-950/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Cold Pyro Dulhan Entry Walkways</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-amber-500/20 bg-purple-950/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">Waterproof Tent & Power Backup</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stat Counters with Glass Cards */}
        <div className="mt-20 pt-12 border-t border-amber-500/20 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {businessInfo.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-amber-500/20 group"
            >
              <Counter target={stat.number} suffix={stat.suffix} />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans mt-2">
                {stat.label}
              </h4>
              <p className="text-xs text-amber-300/80 font-hindi mt-0.5">
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
