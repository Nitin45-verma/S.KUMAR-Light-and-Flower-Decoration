import React from 'react';
import { Sparkles, Phone, MapPin, ChevronRight } from 'lucide-react';
import { businessInfo, services } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-[#080210] border-t border-[#d4af37]/30 text-slate-300 relative overflow-hidden pt-16 pb-24 md:pb-12">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#f5c451] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#d4af37]/20">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-gradient p-[1.5px] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0">
                <div className="w-full h-full bg-[#0d0518] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#f5c451]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-serif-heading text-gold-gradient tracking-wider uppercase leading-none">
                  S.KUMAR
                </span>
                <span className="text-[10px] tracking-wider text-slate-300 uppercase leading-tight font-sans">
                  Light and Flower Decoration
                </span>
              </div>
            </div>

            <p className="text-sm font-hindi text-slate-300 leading-relaxed max-w-md">
              "आपके हर खास मौके को बनाएं और भी खास, हमारी लाइटिंग से दें एक नई पहचान!"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Specializing in luxury wedding lighting, fresh flower decorations, grand stage backdrops, line-array DJ sound, dulhan entry pyros, and waterproof tent setups in Jaipur.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold font-serif-heading text-gold-gradient uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About S.Kumar', href: '#about' },
                { name: 'Services Grid', href: '#services' },
                { name: 'Work Gallery', href: '#gallery' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#f5c451] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#f5c451]/60" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold font-serif-heading text-gold-gradient uppercase tracking-wider mb-4">
              Our Key Services
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-hindi mb-6">
              {services.map((s) => (
                <li key={s.id} className="flex items-center gap-1.5">
                  <span className="text-[#f5c451]">•</span>
                  <span>{s.titleHindi}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-[#d4af37]/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-[#f5c451]" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-[#f5c451] font-semibold text-sm">
                  {businessInfo.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#f5c451] shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-hindi text-slate-300 text-center sm:text-left">
            "हमारी लाइटिंग से दें एक नई पहचान!" — S.KUMAR Light and Flower Decoration (Jaipur)
          </p>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} S.KUMAR Light and Flower Decoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
