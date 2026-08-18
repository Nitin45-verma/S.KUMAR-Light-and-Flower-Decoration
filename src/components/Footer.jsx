import React from 'react';
import { Phone, MapPin, ChevronRight } from 'lucide-react';
import { businessInfo, services } from '../data/content';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-purple-950 text-slate-200 border-t border-amber-500/20 relative overflow-hidden pt-16 pb-24 md:pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-amber-500/20">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="large" showText={true} />

            <p className="text-body-sm font-hindi text-amber-200/90 leading-relaxed max-w-md italic">
              "{businessInfo.taglineHindi}"
            </p>

            <p className="text-body-sm text-slate-300 leading-relaxed max-w-md font-body font-light">
              Specializing in luxury wedding lighting, crystal chandeliers, fresh flower decorations, grand stage backdrops, line-array DJ sound, and waterproof tent setups across Khatipura & Jaipur.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-h4 font-bold font-display text-amber-300 uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-body-sm font-body font-medium">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About S.Kumar', href: '#about' },
                { name: 'Services Grid', href: '#services' },
                { name: 'Digital Card', href: '#digital-card' },
                { name: 'Work Gallery', href: '#gallery' },
                { name: 'Why Choose Us', href: '#why-us' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact & Map', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-h4 font-bold font-display text-amber-300 uppercase tracking-widest mb-4">
              Our Key Services
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-body-sm text-slate-300 font-hindi mb-6">
              {services.map((s) => (
                <li key={s.id} className="flex items-center gap-1.5">
                  <span className="text-amber-400">•</span>
                  <span>{s.titleHindi}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-amber-500/20 space-y-3 text-body-sm font-body">
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href={`tel:${businessInfo.phone}`} data-cursor="link" className="hover:text-amber-300 font-bold text-body-sm text-gold-gradient">
                  {businessInfo.phoneFormatted}
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="hover:text-amber-300 transition-colors group flex flex-col"
                >
                  <span>{businessInfo.address}</span>
                  <span className="text-label text-amber-300 underline opacity-90 group-hover:opacity-100 mt-0.5 font-bold">
                    View Location on Google Maps →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Tagline & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-body-sm text-slate-400 font-body">
          <p className="font-hindi text-amber-200/90 text-center sm:text-left">
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
