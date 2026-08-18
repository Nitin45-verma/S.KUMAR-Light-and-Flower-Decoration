import React from 'react';

/**
 * ArchDivider - Minimal Editorial Hairline Dividers
 */
export const ArchDivider = ({
  variant = 'accent',
  className = '',
  color = '#cbb896'
}) => {
  if (variant === 'accent') {
    return (
      <div className={`flex items-center justify-center py-3 ${className}`}>
        <div className="w-12 h-[1px] bg-sand-line" />
      </div>
    );
  }

  if (variant === 'section-divider') {
    return (
      <div className={`w-full flex items-center justify-center py-8 ${className}`}>
        <div className="w-full max-w-7xl px-4 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-sand-line/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-bronze/60" />
          <div className="flex-1 h-[1px] bg-sand-line/60" />
        </div>
      </div>
    );
  }

  return null;
};

export const SectionTransition = ({ className = '' }) => {
  return (
    <div className={`w-full h-[1px] bg-sand-line/40 ${className}`} />
  );
};

export default ArchDivider;
