import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { businessInfo } from '../data/content';
import Logo from './Logo';
import MagneticButton from './MagneticButton';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Digital Card', href: '#digital-card' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Videos', href: '#highlights' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-purple-950/90 backdrop-blur-xl border-amber-500/30 shadow-2xl shadow-purple-950/80'
          : 'bg-purple-950/75 backdrop-blur-md border-amber-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4">
        
        {/* Brand Logo (Left) */}
        <a
          href="#hero"
          aria-label="S.KUMAR Light & Flower Decoration Home"
          className="flex items-center cursor-pointer shrink-0"
          data-cursor="link"
        >
          <Logo size="normal" showText={true} />
        </a>

        {/* Desktop Navigation Links (Center) */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                data-cursor="link"
                className={`relative px-3 py-2 text-xs font-sans uppercase font-bold tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'text-amber-300' : 'text-slate-300 hover:text-amber-300'
                }`}
              >
                {link.name}
                {/* Golden active line indicator */}
                <span
                  className={`absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Call-Now Magnetic CTA Button (Right) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <MagneticButton
            href={`tel:${businessInfo.phone}`}
            aria-label={`Call S.Kumar Light and Flower Decoration at ${businessInfo.phone}`}
            className="shimmer-btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-purple-950 font-bold text-xs font-sans transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-lg"
            data-cursor="link"
          >
            <Phone className="w-3.5 h-3.5 fill-purple-950 text-purple-950" />
            <span>Call: {businessInfo.phone}</span>
          </MagneticButton>
        </div>

        {/* Mobile / Tablet Hamburger & Call Button */}
        <div className="flex lg:hidden items-center gap-2.5 shrink-0">
          <a
            href={`tel:${businessInfo.phone}`}
            className="p-2 rounded-full border border-amber-400/40 text-amber-300 bg-amber-500/15 active:scale-95 shadow-sm"
            aria-label={`Call S.Kumar Light and Flower Decoration at ${businessInfo.phone}`}
          >
            <Phone className="w-4 h-4 text-amber-300" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-amber-300 focus:outline-none border border-amber-500/30 bg-purple-900/80 shadow-sm cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-300" /> : <Menu className="w-6 h-6 text-amber-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-purple-950/98 backdrop-blur-2xl border-l border-amber-500/30 z-50 flex flex-col justify-between p-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-amber-500/20">
                  <Logo size="small" showText={true} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full text-slate-300 hover:text-amber-300 bg-purple-900 border border-amber-500/30 cursor-pointer"
                  >
                    <X className="w-5 h-5 text-amber-300" />
                  </button>
                </div>

                <nav className="mt-6 space-y-1.5 font-sans">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-purple-900/60 text-slate-200 hover:text-amber-300 border border-transparent hover:border-amber-500/25 transition-all text-xs font-bold uppercase tracking-wider"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-amber-400/60" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-amber-500/20 space-y-3 font-sans">
                <p className="text-xs text-amber-200/80 font-hindi text-center italic">
                  "{businessInfo.taglineHindi}"
                </p>
                <a
                  href={`tel:${businessInfo.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-purple-950 font-bold text-xs shadow-gold-glow transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-purple-950" />
                  <span>Call Now: {businessInfo.phone}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
