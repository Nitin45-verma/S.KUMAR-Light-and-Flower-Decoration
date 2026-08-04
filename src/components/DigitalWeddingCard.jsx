import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Heart,
  Image as ImageIcon,
  Clock,
  MapPin,
  Share2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Send
} from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-Friendly & Shareable Link',
    titleHindi: 'स्मार्टफोन फ्रेंडली लिंक',
    desc: 'Opens flawlessly on any mobile screen. Easy to open and view anywhere in 1 tap.'
  },
  {
    icon: Heart,
    title: 'Personalized Names, Dates & Venue',
    titleHindi: 'व्यक्तिगत नाम व कार्यक्रम विवरण',
    desc: 'Customized with Bride & Groom names, complete event schedule, and royal design.'
  },
  {
    icon: ImageIcon,
    title: 'Photo Gallery Included',
    titleHindi: 'प्री-वेडिंग फोटो गैलरी',
    desc: 'Display high-resolution couple photos and pre-wedding shoot highlights.'
  },
  {
    icon: Clock,
    title: 'Live Countdown Timer',
    titleHindi: 'लाइव वेडिंग काउंटडाउन टाइमर',
    desc: 'Interactive live timer counting down the exact days, hours, and minutes to the big day.'
  },
  {
    icon: MapPin,
    title: 'Google Maps Venue Navigation',
    titleHindi: 'गूगल मैप्स वेन्यू नेविगेशन',
    desc: 'Embedded location link so guests reach the marriage lawn/hotel with zero confusion.'
  },
  {
    icon: Share2,
    title: 'Instant WhatsApp Share Button',
    titleHindi: 'वन-क्लिक व्हाट्सएप शेयर',
    desc: 'Send to all family, friends, and out-of-town guests instantly via WhatsApp & Instagram.'
  }
];

const DigitalWeddingCard = () => {
  // Live sample countdown timer simulation inside mockup
  const [timeLeft, setTimeLeft] = useState({ days: 24, hours: 14, mins: 32, secs: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="digital-card" className="py-20 sm:py-28 bg-gradient-to-b from-[#1a0a2e] via-[#0d0518] to-[#1a0a2e] relative overflow-hidden">
      {/* Subtle Ambient Gold Glow Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#f5c451]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4a1268]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0518]/90 border border-[#d4af37]/40 text-[#f5c451] text-xs font-semibold uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#f5c451]" />
            <span>Digital Invitations • डिजिटल निमंत्रण</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-hindi text-gold-gradient py-2 leading-tight tracking-normal drop-shadow-md">
            डिजिटल वेडिंग कार्ड
          </h2>

          <p className="mt-2 text-base sm:text-lg text-[#f5c451] font-hindi font-medium">
            "अपने मेहमानों को शेयर करें एक खूबसूरत डिजिटल निमंत्रण — WhatsApp पर तुरंत भेजें"
          </p>

          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            We design and host a personalized digital wedding invitation website for your special day — complete with your names, event details, venue map, photo gallery, and countdown timer. Perfect for sharing on WhatsApp, Instagram, and with out-of-town guests.
          </p>
        </motion.div>

        {/* Split Layout: Phone Mockup vs Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Interactive Floating Phone Screen Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full max-w-[320px] sm:max-w-[340px] p-3 sm:p-4 rounded-[2.5rem] sm:rounded-[3rem] bg-[#120722] border-4 sm:border-[6px] border-[#d4af37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] relative group"
            >
              {/* Phone Camera Notch */}
              <div className="w-28 h-4 bg-[#0d0518] rounded-full mx-auto mb-3 flex items-center justify-center border border-[#d4af37]/20">
                <div className="w-3 h-3 rounded-full bg-slate-800" />
              </div>

              {/* Phone Display Screen */}
              <div className="rounded-[1.8rem] bg-gradient-to-b from-[#2e0a4a] via-[#1a0a2e] to-[#0d0518] border border-[#d4af37]/30 p-5 text-center shadow-inner relative overflow-hidden">
                {/* Background Golden Sparkle Accents */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#f5c451]/15 via-transparent to-transparent pointer-events-none" />

                {/* Decorative Card Header */}
                <div className="text-xl text-[#f5c451] mb-1">🌸 👑 🌸</div>
                <span className="text-[10px] uppercase font-bold text-[#f5c451] tracking-widest block">
                  Wedding Invitation
                </span>

                <h3 className="text-2xl font-bold font-serif text-gold-gradient mt-2">
                  Rohan & Ananya
                </h3>
                <p className="text-[11px] text-slate-300 italic mt-1 font-serif">
                  Together with their families request the pleasure of your company
                </p>

                <div className="my-4 py-2 border-y border-[#d4af37]/30 bg-[#0d0518]/60 rounded-xl">
                  <div className="text-xs font-semibold text-[#f5c451]">📅 SUNDAY, 24TH NOV 2026</div>
                  <div className="text-[11px] text-slate-300 font-hindi mt-0.5">जयपुर, राजस्थान</div>
                </div>

                {/* Countdown Timer Badge */}
                <div className="p-3 rounded-xl bg-[#2e0a4a]/90 border border-[#f5c451]/40 mb-4 shadow-lg">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold mb-1">
                    ⏳ Wedding Countdown
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-center font-mono">
                    <div className="bg-[#0d0518] p-1 rounded border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-[#f5c451]">{timeLeft.days}</div>
                      <div className="text-[8px] text-slate-400">DAYS</div>
                    </div>
                    <div className="bg-[#0d0518] p-1 rounded border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-[#f5c451]">{timeLeft.hours}</div>
                      <div className="text-[8px] text-slate-400">HRS</div>
                    </div>
                    <div className="bg-[#0d0518] p-1 rounded border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-[#f5c451]">{timeLeft.mins}</div>
                      <div className="text-[8px] text-slate-400">MINS</div>
                    </div>
                    <div className="bg-[#0d0518] p-1 rounded border border-[#d4af37]/30">
                      <div className="text-sm font-bold text-[#f5c451]">{timeLeft.secs}</div>
                      <div className="text-[8px] text-slate-400">SECS</div>
                    </div>
                  </div>
                </div>

                {/* Interactive Phone Buttons Teaser */}
                <div className="space-y-2 text-left">
                  <div className="w-full py-2 px-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Send className="w-3 h-3 text-emerald-400" /> Share on WhatsApp
                    </span>
                    <span className="text-[10px] bg-emerald-800/60 px-1.5 py-0.5 rounded">Instant</span>
                  </div>

                  <div className="w-full py-2 px-3 rounded-lg bg-[#0d0518]/90 border border-[#d4af37]/30 text-[#f5c451] text-[11px] font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#f5c451]" /> View Google Map
                    </span>
                    <span className="text-[9px] text-slate-400">Venue</span>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-700/40 text-[9px] text-slate-400 font-hindi">
                  ✨ Powered by S.KUMAR Light & Flower Decoration
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Feature List & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-5 rounded-2xl bg-[#0d0518]/90 border border-[#d4af37]/30 hover:border-[#f5c451] glass-panel card-hover-glow transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-gold-gradient p-[1.5px] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
                        <div className="w-full h-full bg-[#0d0518] rounded-[10px] flex items-center justify-center text-[#f5c451]">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-slate-100 group-hover:text-[#f5c451] transition-colors">
                          {item.title}
                        </h4>
                        <div className="text-[11px] font-hindi text-[#f5c451] mt-0.5">
                          {item.titleHindi}
                        </div>
                        <p className="text-xs text-slate-300 mt-1.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button Anchor Link to #contact */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-base shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(245,196,81,0.7)] transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 fill-purple-950" />
                <span>Get Your Digital Card</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-hindi">
                <CheckCircle2 className="w-4 h-4 text-[#f5c451]" />
                <span>24-Hour Express Delivery Available</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DigitalWeddingCard;
