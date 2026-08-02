import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "", size = "normal" }) => {
  const sizeClass = size === "large" ? "w-12 h-12" : "w-[50px] h-[50px]";

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={logoImg}
        alt="NK Events Logo"
        className={`${sizeClass} object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300`}
      />
    </div>
  );
};

export default Logo;

