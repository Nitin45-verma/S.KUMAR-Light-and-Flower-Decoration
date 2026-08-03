import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "", size = "normal", showText = false }) => {
  const sizeClasses = {
    small: "h-9 w-auto",
    normal: "h-25 sm:h-14 w-25",
    large: "h-16 sm:h-20 w-auto",
    hero: "h-24 sm:h-32 md:h-40 w-auto",
    splash: "h-28 sm:h-36 w-auto"
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


