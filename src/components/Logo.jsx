import React from 'react';
import logoImg from '../assets/logo.webp';

const Logo = ({ className = "", size = "normal", showText = false }) => {
  const sizeClasses = {
    small: { class: "h-8 w-auto object-contain", width: 120, height: 32 },
    normal: { class: "h-[42px] max-h-[44px] w-auto object-contain", width: 165, height: 44 },
    large: { class: "h-16 w-auto object-contain", width: 240, height: 64 },
    hero: { class: "h-[160px] w-[260px] max-h-[160px] max-w-[260px] object-contain", width: 260, height: 160 },
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
        className={`${currentSize.class} transition-transform duration-300 group-hover:scale-[1.02]`}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-h4 font-bold font-display tracking-widest text-gold-gradient uppercase leading-none">
            S.KUMAR
          </span>
          <span className="text-label font-medium tracking-widest text-amber-300/80 uppercase leading-tight font-body mt-0.5">
            Light & Flower Decor
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
