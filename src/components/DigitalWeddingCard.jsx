import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Heart, Image as ImageIcon, Clock, MapPin, Share2, ArrowRight, CheckCircle2, Send, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import ReflectiveCard from './ReflectiveCard';

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
  const [timeLeft, setTimeLeft] = useState({ days: 24, hours: 14, mins: 22, secs: 36 });
  const [cardStyle, setCardStyle] = useState('phone');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="digital-card" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-md font-sans">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>DIGITAL INVITATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            डिजिटल वेडिंग कार्ड व वी.आई.पी. पास
          </h2>

          <p className="text-base sm:text-lg text-amber-200/90 font-hindi max-w-2xl mx-auto italic font-medium">
            "अपने मेहमानों को शेयर करें एक खूबसूरत डिजिटल निमंत्रण — WhatsApp पर तुरंत भेजें"
          </p>

          {/* Card Style Toggle */}
          <div className="pt-3 flex items-center justify-center gap-3 text-xs font-sans">
            <button
              type="button"
              onClick={() => setCardStyle('phone')}
              data-cursor="link"
              className={`px-5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                cardStyle === 'phone'
                  ? 'bg-gold-gradient text-purple-950 shadow-gold-glow scale-105'
                  : 'bg-purple-900/60 border border-amber-500/30 text-slate-200 hover:text-amber-300'
              }`}
            >
              📱 Mobile Invitation View
            </button>
            <button
              type="button"
              onClick={() => setCardStyle('reflective')}
              data-cursor="link"
              className={`px-5 py-2 rounded-full font-bold transition-all cursor-pointer ${
                cardStyle === 'reflective'
                  ? 'bg-gold-gradient text-purple-950 shadow-gold-glow scale-105'
                  : 'bg-purple-900/60 border border-amber-500/30 text-slate-200 hover:text-amber-300'
              }`}
            >
              ✨ Metallic Reflective Pass
            </button>
          </div>
        </div>

        {/* Split Layout matching exact iPhone 16 Pro mockup screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mobile Frame or Metallic Reflective Card */}
          <div className="lg:col-span-5 flex justify-center items-center min-h-[500px]" data-cursor="view">
            {cardStyle === 'reflective' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-center"
              >
                <ReflectiveCard
                  overlayColor="rgba(13, 5, 24, 0.45)"
                  blurStrength={10}
                  glassDistortion={15}
                  metalness={0.8}
                  roughness={0.5}
                  displacementStrength={25}
                  noiseScale={1.5}
                  specularConstant={2.0}
                  grayscale={0.5}
                  color="#ffffff"
                  name="ROHAN & ANANYA"
                  role="ROYAL WEDDING VIP ACCESS"
                  cardId="SKUMAR-2026-JAIPUR"
                />
              </motion.div>
            ) : (
              <div className="relative w-full max-w-[320px] sm:max-w-[350px] rounded-[52px] p-3.5 bg-gradient-to-b from-[#322c42] via-[#1a1528] to-[#282136] border-[6px] border-[#443c59] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.25)] select-none">
              
              {/* Metallic Side Hardware Buttons */}
              {/* Power Button (Right) */}
              <div className="absolute -right-[9px] top-28 w-[4px] h-12 bg-gradient-to-b from-[#5c5278] via-[#332b47] to-[#5c5278] rounded-r-md border-r border-amber-400/20" />
              {/* Volume Up Button (Left) */}
              <div className="absolute -left-[9px] top-24 w-[4px] h-10 bg-gradient-to-b from-[#5c5278] via-[#332b47] to-[#5c5278] rounded-l-md border-l border-amber-400/20" />
              {/* Volume Down Button (Left) */}
              <div className="absolute -left-[9px] top-38 w-[4px] h-10 bg-gradient-to-b from-[#5c5278] via-[#332b47] to-[#5c5278] rounded-l-md border-l border-amber-400/20" />

              {/* Inner Screen Display Bezel */}
              <div className="relative rounded-[40px] bg-purple-950 border border-amber-400/35 overflow-hidden text-slate-100 shadow-2xl p-4 sm:p-5 text-center">
                
                {/* Top Status Bar & Dynamic Island Pill Notch */}
                <div className="flex items-center justify-between px-2 pt-1 pb-3 text-[11px] text-slate-300 font-sans font-semibold">
                  <span>9:41</span>

                  {/* Dynamic Island Pill Notch (Center) */}
                  <div className="w-24 h-5 bg-black rounded-full border border-white/10 flex items-center justify-end px-2 shadow-inner">
                    <div className="w-2 h-2 rounded-full bg-[#0d1b2a] border border-blue-900/60" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Glossy Screen Glass Reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-xl pointer-events-none" />

                {/* Royal Wedding Invitation Screen Content */}
                <div className="relative z-10 pt-1">
                  <div className="text-lg tracking-widest mb-1">🌸 👑 🌸</div>
                  <div className="text-[10px] uppercase tracking-widest text-amber-300 font-bold font-sans">
                    WEDDING INVITATION
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-gold-gradient mt-1">
                    Rohan & Ananya
                  </h3>

                  <p className="text-xs text-amber-200/80 italic mt-1 font-serif">
                    Together with their families request the pleasure of your company
                  </p>

                  {/* Event Date Box */}
                  <div className="my-3 py-2 px-3 border border-amber-500/30 bg-purple-900/80 rounded-xl">
                    <div className="text-xs font-semibold text-amber-300 font-sans">📅 SUNDAY, 24TH NOV 2026</div>
                    <div className="text-xs text-slate-300 font-hindi mt-0.5">जयपुर, राजस्थान</div>
                  </div>

                  {/* Live Countdown Box */}
                  <div className="p-3 rounded-xl bg-purple-900/80 border border-amber-500/30 mb-3">
                    <div className="text-[10px] text-amber-300 uppercase tracking-wider font-bold mb-1.5 font-sans">
                      ⏳ WEDDING COUNTDOWN
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-xs">
                      <div className="bg-purple-950 p-1.5 rounded-lg border border-amber-500/20">
                        <div className="font-bold text-amber-300">{timeLeft.days}</div>
                        <div className="text-[7px] text-slate-400 font-sans">DAYS</div>
                      </div>
                      <div className="bg-purple-950 p-1.5 rounded-lg border border-amber-500/20">
                        <div className="font-bold text-amber-300">{timeLeft.hours}</div>
                        <div className="text-[7px] text-slate-400 font-sans">HRS</div>
                      </div>
                      <div className="bg-purple-950 p-1.5 rounded-lg border border-amber-500/20">
                        <div className="font-bold text-amber-300">{timeLeft.mins}</div>
                        <div className="text-[7px] text-slate-400 font-sans">MINS</div>
                      </div>
                      <div className="bg-purple-950 p-1.5 rounded-lg border border-amber-500/20">
                        <div className="font-bold text-amber-300">{timeLeft.secs}</div>
                        <div className="text-[7px] text-slate-400 font-sans">SECS</div>
                      </div>
                    </div>
                  </div>

                  {/* Share Action Buttons */}
                  <div className="space-y-2 text-left font-sans">
                    <div className="w-full py-2.5 px-3 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs font-bold flex items-center justify-between shadow-sm">
                      <span className="flex items-center gap-1.5 text-emerald-300">
                        <Send className="w-3.5 h-3.5 text-emerald-400" /> Share on WhatsApp
                      </span>
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">Instant</span>
                    </div>

                    <div className="w-full py-2.5 px-3 rounded-xl bg-purple-900/80 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-between shadow-sm">
                      <span className="flex items-center gap-1.5 text-amber-300">
                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> View Google Map
                      </span>
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">Venue</span>
                    </div>
                  </div>

                  {/* Footer Subtext */}
                  <div className="mt-3 pt-2 text-[9px] text-slate-400 font-sans font-medium border-t border-amber-500/15">
                    ✨ Powered by S.KUMAR Light & Flower Decoration
                  </div>
                </div>

                {/* Bottom iPhone Home Bar */}
                <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mt-3" />
              </div>

            </div>
            )}
          </div>

          {/* Right Column: Features Grid matching screenshot */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileTap={{ scale: 0.97 }}
                    className="p-5 rounded-2xl glass-card glass-card-hover text-left border border-amber-500/20 bg-purple-950/80 shadow-md"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-950 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                        <IconComp className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors font-sans">
                          {item.title}
                        </h4>
                        <div className="text-xs font-hindi text-amber-400 font-semibold mt-0.5">
                          {item.titleHindi}
                        </div>
                        <p className="text-xs text-slate-300 mt-1.5 leading-snug font-sans font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA Area matching screenshot */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <MagneticButton
                href="#contact"
                className="shimmer-btn w-full sm:w-auto gap-3 px-8 py-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm font-sans shadow-gold-glow"
                data-cursor="link"
              >
                <Sparkles className="w-4 h-4 fill-purple-950 text-purple-950" />
                <span>Get Your Digital Card</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <div className="flex items-center gap-2 text-xs text-amber-200/90 font-hindi font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24-Hour Express Delivery Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalWeddingCard;
