import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Percent, Award, Trophy, Crown, Check } from 'lucide-react';
import Waves from './Waves';

const whyUsCards = [
  {
    icon: Sparkles,
    titleHindi: 'प्रीमियम लाइटिंग',
    subtitleEng: '(PREMIUM LIGHTING)',
    description: 'उच्चतम गुणवत्ता की LED स्ट्रिंग लाइट्स, क्रिस्टल झूमर, 3D टनल व अत्याधुनिक लाइटिंग टेक्नोलॉजी जिससे आपका इवेंट चमक उठे।',
    footer: '100% Guaranteed Excellence'
  },
  {
    icon: Clock,
    titleHindi: 'समय पर सेवा',
    subtitleEng: '(ON-TIME SERVICE)',
    description: 'कार्यक्रम शुरू होने से काफी पहले 100% परफेक्ट तैयारी का वादा। हमारी प्रोफेशनल टीम हर पल आपके साथ रहती है।',
    footer: '100% Guaranteed Excellence'
  },
  {
    icon: Percent,
    titleHindi: 'उचित मूल्य',
    subtitleEng: '(FAIR PRICING)',
    description: 'खातीपुरा, किशनपुरा व संपूर्ण जयपुर में सबसे किफ़ायती और पारदर्शी दरों पर शाही व लग्जरी सजावट। कोई छुपा हुआ खर्च नहीं।',
    footer: '100% Guaranteed Excellence'
  },
  {
    icon: Award,
    titleHindi: '15+ वर्षों का अनुभव',
    subtitleEng: '(15+ YEARS EXPERIENCE)',
    description: 'खातीपुरा व जयपुर में 15 से अधिक वर्षों से उत्कृष्ट वेडिंग लाइटिंग, फ्लावर डेकोरेशन एवं इवेंट मैनेजमेंट सेवाएं।',
    footer: '100% Guaranteed Excellence'
  },
  {
    icon: Trophy,
    titleHindi: 'सफल भव्य इवेंट्स',
    subtitleEng: '(200+ LIT EVENTS)',
    description: 'शादी-विवाह, हल्दी-मेहंदी, बर्थडे व धार्मिक आयोजनों में 200 से अधिक सफल और शानदार सजावट का अटूट रिकॉर्ड।',
    footer: '100% Guaranteed Excellence'
  },
  {
    icon: Crown,
    titleHindi: 'जयपुर की नंबर-1 पसंद',
    subtitleEng: '(JAIPUR FAVORITE)',
    description: 'खातीपुरा, वैशाली नगर और संपूर्ण जयपुर में सबसे प्रतिष्ठित एवं विश्वसनीय लाइटिंग व फ्लावर सजावट सर्विस।',
    footer: '100% Guaranteed Excellence'
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-purple-950 text-slate-100 relative overflow-hidden bg-light-glow">
      {/* Interactive Wave Animation Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Waves
          lineColor="rgba(245, 196, 81, 0.25)"
          backgroundColor="transparent"
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={36}
          waveAmpY={18}
          friction={0.925}
          tension={0.005}
          maxCursorMove={120}
          xGap={14}
          yGap={36}
        />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/40 bg-purple-950/80 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-md font-sans">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>WHY CHOOSE US</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-amber-300 tracking-wide uppercase leading-tight drop-shadow-md">
            WHY S.KUMAR LIGHT DECORATION?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-hindi italic font-medium">
            "हम क्यों हैं खातीपुरा व जयपुर में इवेंट डेकोरेशन के लिए पहली पसंद?"
          </p>
        </div>

        {/* 3-Column Card Grid matching exact user screenshot design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {whyUsCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden bg-[#130722]/90 backdrop-blur-xl border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-8 sm:p-10 flex flex-col justify-between items-center text-center shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(245,196,81,0.15)]"
              >
                {/* Decorative background arc pattern top right */}
                <div className="absolute -top-14 -right-14 w-44 h-44 rounded-full border border-amber-400/10 bg-amber-400/[0.02] pointer-events-none" />

                <div className="w-full flex flex-col items-center">
                  {/* Glowing Icon Circle */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-amber-400/70 bg-[#1d0b38]/80 flex items-center justify-center mx-auto mb-7 shadow-[0_0_25px_rgba(245,196,81,0.25)] group-hover:scale-105 group-hover:border-amber-400 group-hover:shadow-[0_0_35px_rgba(245,196,81,0.4)] transition-all duration-300">
                    <IconComponent className="w-9 h-9 text-amber-300 stroke-[2.2]" />
                  </div>

                  {/* Primary Hindi Title */}
                  <h3 className="text-2xl font-bold font-hindi text-white mb-1.5 tracking-wide">
                    {card.titleHindi}
                  </h3>

                  {/* Secondary English Subtitle */}
                  <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-5 font-sans">
                    {card.subtitleEng}
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-hindi px-1 mb-8 min-h-[72px] flex items-center justify-center">
                    {card.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div className="w-full pt-4 border-t border-amber-400/15 flex items-center justify-center gap-2 text-amber-400 text-xs font-bold tracking-wide font-sans">
                  <Check className="w-4 h-4 text-amber-400 stroke-[2.5]" />
                  <span>{card.footer}</span>
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
