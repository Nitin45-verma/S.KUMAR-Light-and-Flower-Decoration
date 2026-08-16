import React from 'react';
import logoImg from '../assets/logo.webp';

const Logo = ({ className = "", size = "normal", showText = false }) => {
  const sizeClasses = {
    small: { class: "h-8 w-auto object-contain", width: 120, height: 32 },
    normal: { class: "h-[42px] max-h-[44px] w-auto object-contain", width: 165, height: 44 },
    large: { class: "h-16 w-auto object-contain", width: 240, height: 64 },
    hero: { class: "h-[200px] w-[300px] max-h-[200px] max-w-[300px] object-contain", width: 300, height: 200 },
    splash: { class: "h-24 w-auto object-contain", width: 200, height: 96 }
  };

  const currentSize = sizeClasses[size] || sizeClasses.normal;

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <img
        src={logoImg}
        alt="S.KUMAR Light and Flower Decoration Logo"
        width={currentSize.width}
        height={currentSize.height}
        loading="eager"
        decoding="async"
        className={`${currentSize.class} filter drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(245,196,81,0.8)] group-hover:scale-[1.02] transition-all duration-300`}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl sm:text-2xl font-bold font-serif-heading tracking-wider text-gold-gradient uppercase leading-none">
            S.KUMAR
          </span>
          <span className="text-[9px] sm:text-[10px] font-medium tracking-wider text-slate-200 uppercase leading-tight font-sans">
            Light & Flower Decoration
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;


