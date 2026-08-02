import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

const FloatingButtons = () => {
  return (
    <>
      {/* Floating WhatsApp Button (Desktop + Mobile) */}
      <motion.a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] border-2 border-amber-300 group cursor-pointer"
        aria-label="Chat on WhatsApp with S.Kumar Light and Flower Decoration"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 relative z-10" />
        
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0d0518] text-[#f5c451] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#d4af37]/40 shadow-lg">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Floating "Call Now" Sticky Bar (Mobile Only - Fixed at Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0d0518]/95 backdrop-blur-md border-t border-[#d4af37]/40 p-3 flex items-center justify-between gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col pl-2">
          <span className="text-[10px] uppercase font-bold text-gold-gradient tracking-wider">
            S.KUMAR LIGHT & FLOWER
          </span>
          <span className="text-xs font-bold text-slate-200 font-hindi">
            कपूरवाला, जयपुर
          </span>
        </div>

        <a
          href={`tel:${businessInfo.phone}`}
          className="flex-1 max-w-[200px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm shadow-[0_0_15px_rgba(212,175,55,0.5)] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-purple-950" />
          <span>Call: {businessInfo.phone}</span>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
