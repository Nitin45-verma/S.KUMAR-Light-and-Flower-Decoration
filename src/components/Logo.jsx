import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "", size = "normal", showText = false }) => {
  const sizeClasses = {
    small: "h-8 w-8",
    normal: "h-[60px] w-[60px]",
    large: "h-10 sm:h-12 w-auto",
    hero: "h-12 sm:h-14 md:h-16 lg:h-18 max-h-[70px] sm:max-h-[85px] md:max-h-[100px] max-w-[260px] sm:max-w-[340px] md:max-w-[420px] w-auto",
    splash: "h-14 sm:h-18 w-auto"
  };

  const currentSizeClass = sizeClasses[size] || sizeClasses.normal;

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      <img
        src={logoImg}
        alt="S.KUMAR Light and Flower Decoration Logo"
        className={`${currentSizeClass} object-contain filter drop-shadow-[0_0_12px_rgba(212,175,55,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(245,196,81,0.8)] group-hover:scale-[1.02] transition-all duration-300`}
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


