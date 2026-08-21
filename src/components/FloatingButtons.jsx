import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

const FloatingButtons = () => {
  return (
    <>
      {/* Floating WhatsApp Bubble (Desktop & Mobile) */}
      <a
        href={businessInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="link"
        className="fixed bottom-20 sm:bottom-8 right-5 z-40 w-13 h-13 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:bg-emerald-500 hover:scale-105 transition-all group cursor-pointer border border-emerald-400/40"
        aria-label="Chat on WhatsApp with S.Kumar Light and Flower Decoration"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-purple-950/95 text-amber-300 text-body-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-amber-500/30 shadow-xl font-body pointer-events-none">
          💬 Instant WhatsApp Quote
        </span>
      </a>

      {/* Floating Call & WhatsApp Sticky Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-purple-950/95 backdrop-blur-xl border-t border-amber-500/30 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex flex-col pl-2 text-left">
          <span className="text-label font-bold font-display text-gold-gradient tracking-widest uppercase">
            S.KUMAR LIGHT DECOR
          </span>
          <span className="text-label font-semibold text-slate-300 font-hindi">
            खातीपुरा, जयपुर
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="p-2.5 rounded-full bg-emerald-600/90 text-white border border-emerald-400/40 active:scale-95 flex items-center justify-center shadow-md"
            aria-label="WhatsApp chat"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
          </a>

          <a
            href={`tel:${businessInfo.phone}`}
            data-cursor="link"
            aria-label={`Call S.Kumar Light and Flower Decoration at ${businessInfo.phone}`}
            className="shimmer-btn p-2.5 rounded-full bg-gold-gradient text-purple-950 flex items-center justify-center shadow-gold-glow active:scale-95"
          >
            <Phone className="w-4 h-4 fill-purple-950" />
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
