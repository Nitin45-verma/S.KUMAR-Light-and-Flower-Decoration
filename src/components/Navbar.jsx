import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { businessInfo } from '../data/content';
import Logo from './Logo';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
      className={`fixed top-0 left-0 right-0 z-50 h-[55px] flex items-center transition-all duration-500 ${
        isScrolled
          ? 'glass-nav border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(13,5,24,0.8)]'
          : 'bg-gradient-to-b from-[#0d0518]/95 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center group cursor-pointer">
          <Logo size="normal" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-[#f5c451]'
                    : 'text-slate-300 hover:text-[#f5c451]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#f5c451] to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call-Now Pill Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href={`tel:${businessInfo.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-purple-950 font-bold text-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,196,81,0.7)] transition-all duration-300"
          >
            <Phone className="w-4 h-4 fill-purple-950" />
            <span>Call: {businessInfo.phone}</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${businessInfo.phone}`}
            className="p-2 rounded-full bg-gold-gradient text-purple-950 shadow-[0_0_12px_rgba(212,175,55,0.4)]"
            aria-label="Call S.Kumar Light and Flower Decoration"
          >
            <Phone className="w-4 h-4 fill-purple-950" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-200 hover:text-[#f5c451] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-in Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#1a0a2e] border-l border-[#d4af37]/30 z-50 flex flex-col justify-between p-6 shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#d4af37]/20">
                  <Logo size="small" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-[#2e0a4a] text-slate-300 hover:text-[#f5c451]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 space-y-3">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#2e0a4a]/40 hover:bg-[#2e0a4a] text-slate-200 hover:text-[#f5c451] border border-transparent hover:border-[#d4af37]/30 transition-all"
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-[#f5c451]/60" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#d4af37]/20 space-y-3">
                <p className="text-xs text-slate-400 font-hindi text-center">
                  "आपके हर खास मौके को बनाएं और भी खास!"
                </p>
                <a
                  href={`tel:${businessInfo.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gold-gradient text-purple-950 font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)]"
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
