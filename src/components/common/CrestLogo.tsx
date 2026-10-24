import React from 'react';

interface CrestLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  variant = 'dark',
  compact = false,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Emblem Shield with Gold Accent & Medical Cross */}
      <div className="relative w-11 h-12 flex-shrink-0 group">
        <svg
          viewBox="0 0 100 110"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield Border */}
          <path
            d="M50 4 L92 20 V62 C92 84 50 106 50 106 C50 106 8 84 8 62 V20 L50 4 Z"
            fill={isLight ? '#FFFFFF' : '#086B68'}
            stroke={isLight ? '#F5BC28' : '#F5BC28'}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Line */}
          <path
            d="M50 14 L82 26 V58 C82 76 50 94 50 94 C50 94 18 76 18 58 V26 L50 14 Z"
            fill={isLight ? '#F4F9F8' : '#064E4C'}
            stroke={isLight ? '#13A6A0' : '#13A6A0'}
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* Central Healthcare Cross */}
          <path
            d="M50 32 V74 M29 53 H71"
            stroke={isLight ? '#086B68' : '#FFFFFF'}
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Gold Star / Laurel Accent */}
          <circle cx="50" cy="53" r="4.5" fill="#F5BC28" />
        </svg>

        {/* Subtle gold glow indicator */}
        <div className="absolute -inset-1 rounded-full bg-crest-gold/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* College Typography */}
      {!compact && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-wider text-lg uppercase leading-none font-sans ${
                isLight ? 'text-white' : 'text-crest-heading'
              }`}
            >
              CREST
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-crest-gold/20 text-crest-goldDark border border-crest-gold/30">
              COLLEGE
            </span>
          </div>
          <span
            className={`text-xs font-semibold tracking-wider uppercase font-sans mt-0.5 ${
              isLight ? 'text-white/80' : 'text-crest-teal'
            }`}
          >
            Of Nursing • Abbottabad
          </span>
        </div>
      )}
    </div>
  );
};
