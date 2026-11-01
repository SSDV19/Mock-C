import React from 'react';

// Reusable SVG Kolam Components for authentic Tamil sacred aesthetics

export const KolamBorder: React.FC<{ className?: string; strokeColor?: string; repeat?: number }> = ({
  className = "w-full h-8 text-gold-500",
  strokeColor = "currentColor",
}) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center opacity-85 select-none ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-7xl"
        preserveAspectRatio="none"
      >
        <pattern id="kolam-border-pattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          {/* Authentic Tamil Sikku Border Motif */}
          <circle cx="20" cy="20" r="2.2" fill={strokeColor} opacity="0.6" />
          <circle cx="60" cy="20" r="2.2" fill={strokeColor} opacity="0.6" />
          <circle cx="40" cy="10" r="2.2" fill={strokeColor} opacity="0.6" />
          <circle cx="40" cy="30" r="2.2" fill={strokeColor} opacity="0.6" />
          
          {/* Interlacing Kolam Ribbon Lines */}
          <path
            d="M 10 20 C 10 10, 30 10, 40 20 C 50 30, 70 30, 70 20 C 70 10, 50 10, 40 20 C 30 30, 10 30, 10 20 Z"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 20 10 C 30 10, 40 0, 40 0 C 40 0, 50 10, 60 10 C 70 10, 80 20, 80 20 C 80 20, 70 30, 60 30 C 50 30, 40 40, 40 40 C 40 40, 30 30, 20 30 C 10 30, 0 20, 0 20 C 0 20, 10 10, 20 10 Z"
            stroke={strokeColor}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </pattern>
        <rect x="0" y="0" width="1200" height="40" fill="url(#kolam-border-pattern)" />
      </svg>
    </div>
  );
};

export const KolamCorner: React.FC<{ className?: string; position?: 'tl' | 'tr' | 'bl' | 'br'; size?: number }> = ({
  className = "text-gold-500/60",
  position = 'tl',
  size = 54
}) => {
  const getRotation = () => {
    switch (position) {
      case 'tr': return 'rotate-90';
      case 'br': return 'rotate-180';
      case 'bl': return '-rotate-90';
      default: return 'rotate-0';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none transition-transform duration-500 ${getRotation()} ${className}`}
    >
      <circle cx="12" cy="12" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="28" cy="12" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="44" cy="12" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="28" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="28" cy="28" r="1.8" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="44" r="1.8" fill="currentColor" opacity="0.6" />

      {/* Traditional Corner Sikku Flourish */}
      <path
        d="M 6 6 L 50 6 C 54 6, 54 10, 50 14 C 44 20, 36 28, 30 30 C 28 36, 20 44, 14 50 C 10 54, 6 54, 6 50 Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M 12 12 Q 28 20 28 28 Q 20 28 12 12 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M 6 22 C 16 22, 22 16, 22 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 3"
        fill="none"
      />
    </svg>
  );
};

/**
 * OrnateCornerMandala
 * Intricately crafted circular mandala that replicates the exact design in the user's reference image:
 * Concentric beaded bands, dentil notches, lotus petal tiers, and radial finials in warm brown ink (#8D4E2F / #7C4428).
 */
export const OrnateCornerMandala: React.FC<{
  position?: 'tl' | 'tr' | 'bl' | 'br';
  size?: number;
  className?: string;
  color?: string;
  opacity?: number;
}> = ({
  position = 'tl',
  size = 280,
  className = '',
  color = '#8D4E2F',
  opacity = 0.85
}) => {
  const getTransform = () => {
    switch (position) {
      case 'tr': return 'top-0 right-0 rotate-90 origin-top-right';
      case 'br': return 'bottom-0 right-0 rotate-180 origin-bottom-right';
      case 'bl': return 'bottom-0 left-0 -rotate-90 origin-bottom-left';
      default: return 'top-0 left-0 rotate-0 origin-top-left';
    }
  };

  return (
    <div className={`absolute pointer-events-none select-none z-10 ${getTransform()} ${className}`} style={{ opacity }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Origin Bindu / Hub */}
        <circle cx="0" cy="0" r="16" stroke={color} strokeWidth="1.8" fill="none" />
        <circle cx="0" cy="0" r="28" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="38" stroke={color} strokeWidth="1.6" fill="none" />

        {/* Tier 1: Small Radiating Lotus Petals (0 to 90 degrees) */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((deg) => (
          <g key={`t1-${deg}`} transform={`rotate(${deg} 0 0)`}>
            <path
              d="M 0 38 Q 4 48 0 58 Q -4 48 0 38 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="0" cy="62" r="1.6" fill={color} />
          </g>
        ))}

        {/* Tier 1 Outer Beaded Border */}
        <circle cx="0" cy="0" r="68" stroke={color} strokeWidth="1.4" />
        <circle cx="0" cy="0" r="74" stroke={color} strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="0" cy="0" r="82" stroke={color} strokeWidth="1.8" />

        {/* Tier 2: Medium Graceful Lotus Petals with Central Veins (15 deg spacing) */}
        {[0, 7.5, 15, 22.5, 30, 37.5, 45, 52.5, 60, 67.5, 75, 82.5, 90].map((deg) => (
          <g key={`t2-${deg}`} transform={`rotate(${deg} 0 0)`}>
            <path
              d="M 0 82 C 7 96, 9 116, 0 130 C -9 116, -7 96, 0 82 Z"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
            />
            <path d="M 0 82 L 0 124" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
            <circle cx="0" cy="134" r="2.2" fill={color} />
          </g>
        ))}

        {/* Tier 2 Outer Concentric Decorative Ring */}
        <circle cx="0" cy="0" r="142" stroke={color} strokeWidth="1.5" />
        <circle cx="0" cy="0" r="148" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="156" stroke={color} strokeWidth="2" />

        {/* Dentil / Sunburst Chevron Pattern Band */}
        {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88].map((deg) => (
          <g key={`t2b-${deg}`} transform={`rotate(${deg} 0 0)`}>
            <path d="M -2 156 L 0 165 L 2 156" stroke={color} strokeWidth="1" fill="none" />
          </g>
        ))}
        <circle cx="0" cy="0" r="166" stroke={color} strokeWidth="1.6" />

        {/* Tier 3: Grand Scalloped Sacred Petals with Double Linework & Floral Finials */}
        {[0, 11.25, 22.5, 33.75, 45, 56.25, 67.5, 78.75, 90].map((deg) => (
          <g key={`t3-${deg}`} transform={`rotate(${deg} 0 0)`}>
            {/* Outer Petal Outline */}
            <path
              d="M 0 166 C 16 190, 22 232, 0 256 C -22 232, -16 190, 0 166 Z"
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
            {/* Nested Inner Petal */}
            <path
              d="M 0 178 C 11 198, 15 228, 0 246 C -15 228, -11 198, 0 178 Z"
              stroke={color}
              strokeWidth="1.2"
              fill="none"
              opacity="0.8"
            />
            {/* Radial Fan Hatching inside Petal */}
            <path d="M 0 178 L 0 240" stroke={color} strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 0 200 L 8 225" stroke={color} strokeWidth="0.9" opacity="0.6" />
            <path d="M 0 200 L -8 225" stroke={color} strokeWidth="0.9" opacity="0.6" />

            {/* Droplet Finial at Apex */}
            <circle cx="0" cy="262" r="3.2" fill={color} />
            <path d="M 0 266 Q 3 274 0 280 Q -3 274 0 266 Z" stroke={color} strokeWidth="1" fill={color} />
          </g>
        ))}

        {/* Outer Perimeter Floral Crests & Sunburst Rays */}
        <circle cx="0" cy="0" r="288" stroke={color} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="0" cy="0" r="296" stroke={color} strokeWidth="1.8" opacity="0.75" />
        {[0, 5.625, 11.25, 16.875, 22.5, 28.125, 33.75, 39.375, 45, 50.625, 56.25, 61.875, 67.5, 73.125, 78.75, 84.375, 90].map((deg) => (
          <g key={`t4-${deg}`} transform={`rotate(${deg} 0 0)`}>
            <circle cx="0" cy="304" r="2" fill={color} opacity="0.7" />
          </g>
        ))}
      </svg>
    </div>
  );
};

/**
 * FadedMandalaWatermark
 * Faint, ghosted background mandala (opacity 0.07 to 0.14) replicating the subtle background
 * watermark motifs seen in the user's reference image across the canvas.
 */
export const FadedMandalaWatermark: React.FC<{
  size?: number;
  className?: string;
  opacity?: number;
  color?: string;
}> = ({
  size = 460,
  className = '',
  opacity = 0.09,
  color = '#7C4428'
}) => {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{ opacity, width: size, height: size }}
    >
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Full 360-degree Watermark Mandala */}
        <circle cx="160" cy="160" r="16" stroke={color} strokeWidth="1.5" />
        <circle cx="160" cy="160" r="32" stroke={color} strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="160" cy="160" r="54" stroke={color} strokeWidth="1.4" />

        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={`wm1-${deg}`} transform={`rotate(${deg} 160 160)`}>
            <path
              d="M 160 106 Q 165 90 160 74 Q 155 90 160 106 Z"
              stroke={color}
              strokeWidth="1.2"
            />
            <circle cx="160" cy="68" r="2" fill={color} />
          </g>
        ))}

        <circle cx="160" cy="160" r="100" stroke={color} strokeWidth="1.4" />
        <circle cx="160" cy="160" r="106" stroke={color} strokeWidth="1" strokeDasharray="2 3" />

        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
          <g key={`wm2-${deg}`} transform={`rotate(${deg} 160 160)`}>
            <path
              d="M 160 54 C 172 32, 175 14, 160 2 C 145 14, 148 32, 160 54 Z"
              stroke={color}
              strokeWidth="1.4"
            />
            <path d="M 160 54 L 160 8" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="160" cy="0" r="2.5" fill={color} />
          </g>
        ))}

        <circle cx="160" cy="160" r="156" stroke={color} strokeWidth="1.2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

export const PadmaKolam: React.FC<{ size?: number; className?: string; animated?: boolean }> = ({
  size = 180,
  className = "text-gold-500",
  animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'animate-kolam-draw' : ''} ${className}`}
    >
      <circle cx="100" cy="100" r="5" fill="#8B2226" />
      <circle cx="100" cy="100" r="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="28" stroke="currentColor" strokeWidth="1.2" />

      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <path
            d="M 100 72 C 85 52, 90 28, 100 18 C 110 28, 115 52, 100 72 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100 72 L 100 26"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 3"
            opacity="0.7"
          />
          <circle cx="100" cy="14" r="2" fill="currentColor" />
          <path
            d="M 80 84 Q 100 66 120 84"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            opacity="0.8"
          />
        </g>
      ))}

      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
    </svg>
  );
};

export const BrahmaMudiKolam: React.FC<{ size?: number; className?: string; animated?: boolean }> = ({
  size = 200,
  className = "text-gold-500",
  animated = false
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'animate-kolam-draw' : ''} ${className}`}
    >
      {[40, 70, 100, 130, 160].map((x) =>
        [40, 70, 100, 130, 160].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#5C3D2E" opacity="0.45" />
        ))
      )}
      <circle cx="100" cy="100" r="3.5" fill="#8B2226" />
      <path
        d="M 100 40 
           C 130 40, 160 70, 160 100 
           C 160 130, 130 160, 100 160 
           C 70 160, 40 130, 40 100 
           C 40 70, 70 40, 100 40 Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 55 55 
           Q 100 85 145 55 
           Q 115 100 145 145 
           Q 100 115 55 145 
           Q 85 100 55 55 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export const CentennialKolamBadge: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center p-2 ${className}`}>
      <svg
        viewBox="0 0 240 240"
        className="w-36 h-36 md:w-44 md:h-44 animate-slow-spin text-gold-500 select-none pointer-events-none"
        fill="none"
      >
        <circle cx="120" cy="120" r="114" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
        <circle cx="120" cy="120" r="106" stroke="#8E5C41" strokeWidth="1.4" />
        <circle cx="120" cy="120" r="92" stroke="currentColor" strokeWidth="1" opacity="0.4" />

        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 120 120)`}>
            <circle cx="120" cy="14" r="2.5" fill="#8B2226" />
            <path d="M 115 22 Q 120 14 125 22" stroke="currentColor" strokeWidth="1.4" />
          </g>
        ))}

        <path id="badge-text-path" d="M 120 30 A 90 90 0 1 1 119.9 30" fill="none" />
        <text className="text-[10px] uppercase font-monument tracking-[0.26em] fill-[#523323] font-semibold">
          <textPath href="#badge-text-path" startOffset="0%">
            • 100+ YEARS OF SACRED HOSPITALITY • EST. 1924 •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 m-auto w-24 h-24 md:w-28 md:h-28 rounded-full bg-cream-100 border border-gold-500/40 shadow-bezel-outer flex flex-col items-center justify-center text-center p-2">
        <span className="font-tamil text-sacred-kumkum text-xs font-semibold tracking-wider">ஸ்ரீ சுந்தரம்</span>
        <span className="font-monument text-brown-900 text-lg md:text-xl font-bold tracking-tight">100+</span>
        <span className="text-[9px] uppercase tracking-widest text-brown-600 font-medium">YEARS</span>
        <span className="text-[8px] text-gold-600 font-mono tracking-wider">1924 — 2026</span>
      </div>
    </div>
  );
};
