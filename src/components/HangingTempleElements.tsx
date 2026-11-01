import React from 'react';

/**
 * HangingTempleElements
 * Authentic hand-sketched Tamil temple bells (கோவில் மணி) and banana leaves (வாழை இலை)
 * that hang gracefully and sway gently with realistic pendulum/breeze CSS animations.
 */
export const HangingTempleElements: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-[64px] sm:top-[74px] overflow-visible z-20 ${className}`}>
      {/* ================= LEFT HANGING BELL & BANANA LEAF ================= */}
      <div className="absolute -top-1 left-2 sm:left-8 md:left-14 flex items-start">
        {/* Hanging Chain & Temple Bell (Left) */}
        <div className="relative origin-top animate-temple-bell-left" style={{ animationDuration: '4.8s' }}>
          <svg
            width="82"
            height="210"
            viewBox="0 0 82 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm"
          >
            {/* Top Anchor Ring */}
            <circle cx="41" cy="6" r="4.5" stroke="#7C4428" strokeWidth="1.8" fill="none" />
            <circle cx="41" cy="6" r="2" fill="#7C4428" />

            {/* Twisted Brass Hanging Chain Links */}
            <path
              d="M 41 10 L 41 22 M 38 16 Q 41 19 44 16
                 M 41 22 L 41 34 M 38 28 Q 41 31 44 28
                 M 41 34 L 41 46 M 38 40 Q 41 43 44 40
                 M 41 46 L 41 58 M 38 52 Q 41 55 44 52
                 M 41 58 L 41 70 M 38 64 Q 41 67 44 64
                 M 41 70 L 41 82 M 38 76 Q 41 79 44 76"
              stroke="#7C4428"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Ornamental Beads on Chain */}
            <circle cx="41" cy="28" r="2.5" fill="#8D4E2F" />
            <circle cx="41" cy="52" r="2.5" fill="#8D4E2F" />
            <circle cx="41" cy="76" r="3" fill="#8D4E2F" />

            {/* Bell Crown / Top Finial (Kalasam) */}
            <path
              d="M 36 82 L 46 82 L 48 88 L 34 88 Z"
              stroke="#5C321E"
              strokeWidth="1.6"
              fill="#F4EBDC"
            />
            <circle cx="41" cy="85" r="1.5" fill="#5C321E" />
            <path
              d="M 33 88 C 33 88, 30 94, 26 98 L 56 98 C 52 94, 49 88, 49 88 Z"
              stroke="#5C321E"
              strokeWidth="1.8"
              fill="#FDFBF7"
            />

            {/* Bell Dome (Kumbha) with Engraved Sacred Bands */}
            <path
              d="M 26 98 C 24 108, 16 128, 11 144 C 9 150, 12 156, 18 156 L 64 156 C 70 156, 73 150, 71 144 C 66 128, 58 108, 56 98 Z"
              stroke="#5C321E"
              strokeWidth="2"
              fill="#FAF5EC"
            />
            {/* Horizontal Ornamental Grooves */}
            <path d="M 23 110 Q 41 113 59 110" stroke="#7C4428" strokeWidth="1.3" fill="none" />
            <path d="M 20 120 Q 41 123 62 120" stroke="#7C4428" strokeWidth="1.3" fill="none" />
            <path d="M 16 132 Q 41 136 66 132" stroke="#7C4428" strokeWidth="1.5" fill="none" />
            <path d="M 14 142 Q 41 146 68 142" stroke="#7C4428" strokeWidth="1.3" fill="none" />

            {/* Bell Engraved Petals */}
            <path
              d="M 22 120 Q 28 126 34 120 Q 41 126 48 120 Q 54 126 60 120"
              stroke="#8D4E2F"
              strokeWidth="1.2"
              fill="none"
            />

            {/* Bottom Flared Bell Lip (Mouth) */}
            <path
              d="M 14 156 C 14 163, 68 163, 68 156 Z"
              stroke="#5C321E"
              strokeWidth="2.2"
              fill="#EBDDC5"
            />
            <path d="M 18 159 Q 41 163 64 159" stroke="#7C4428" strokeWidth="1" fill="none" />

            {/* Clapper / Tongue with Bottom Dangling Bell Bead */}
            <path d="M 41 156 L 41 180" stroke="#5C321E" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="41" cy="184" r="5" stroke="#5C321E" strokeWidth="1.8" fill="#F4EBDC" />
            <circle cx="41" cy="184" r="2" fill="#8B2226" />
            <path d="M 41 189 L 41 198" stroke="#7C4428" strokeWidth="1.5" />
            <circle cx="41" cy="201" r="2.5" fill="#7C4428" />
          </svg>
        </div>

        {/* Arching Sketched Banana Leaf (Left) */}
        <div
          className="relative -ml-4 origin-top-left animate-leaf-sway-left"
          style={{ animationDuration: '6.2s' }}
        >
          <svg
            width="130"
            height="180"
            viewBox="0 0 130 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm opacity-90"
          >
            {/* Banana Leaf Stem / Rachis Curve */}
            <path
              d="M 4 2 C 16 35, 42 75, 76 125 C 92 148, 114 168, 126 178"
              stroke="#5C321E"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Banana Leaf Body with Traditional Tamil Botanical Sketch Linework */}
            <path
              d="M 4 2 
                 C 28 8, 56 22, 78 48 
                 C 102 76, 122 118, 126 178 
                 C 108 170, 78 140, 56 108 
                 C 34 76, 12 36, 4 2 Z"
              stroke="#7C4428"
              strokeWidth="1.6"
              fill="#FAF5EC"
              fillOpacity="0.85"
            />

            {/* Detailed Parallel Lateral Vein Lines (Natural Plantain Foliage) */}
            <path
              d="M 12 18 C 24 16, 42 22, 52 26
                 M 18 32 C 32 30, 54 38, 68 44
                 M 26 48 C 42 46, 68 58, 84 66
                 M 36 66 C 54 64, 82 78, 98 88
                 M 46 84 C 64 82, 92 98, 108 110
                 M 58 104 C 74 102, 102 120, 116 132
                 M 72 124 C 88 122, 108 138, 120 148
                 M 88 144 C 100 144, 114 156, 122 164"
              stroke="#8D4E2F"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Natural Leaf Serrations / Notches */}
            <path d="M 68 44 L 62 48" stroke="#5C321E" strokeWidth="1.2" />
            <path d="M 98 88 L 91 93" stroke="#5C321E" strokeWidth="1.2" />
            <path d="M 116 132 L 109 137" stroke="#5C321E" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      {/* ================= RIGHT HANGING BELL & BANANA LEAF ================= */}
      <div className="absolute -top-1 right-2 sm:right-8 md:right-14 flex items-start flex-row-reverse">
        {/* Hanging Chain & Temple Bell (Right) */}
        <div
          className="relative origin-top animate-temple-bell-right"
          style={{ animationDuration: '5.2s' }}
        >
          <svg
            width="82"
            height="210"
            viewBox="0 0 82 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm"
          >
            {/* Top Anchor Ring */}
            <circle cx="41" cy="6" r="4.5" stroke="#7C4428" strokeWidth="1.8" fill="none" />
            <circle cx="41" cy="6" r="2" fill="#7C4428" />

            {/* Twisted Brass Hanging Chain Links */}
            <path
              d="M 41 10 L 41 22 M 44 16 Q 41 19 38 16
                 M 41 22 L 41 34 M 44 28 Q 41 31 38 28
                 M 41 34 L 41 46 M 44 40 Q 41 43 38 40
                 M 41 46 L 41 58 M 44 52 Q 41 55 38 52
                 M 41 58 L 41 70 M 44 64 Q 41 67 38 64
                 M 41 70 L 41 82 M 44 76 Q 41 79 38 76"
              stroke="#7C4428"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Ornamental Beads on Chain */}
            <circle cx="41" cy="28" r="2.5" fill="#8D4E2F" />
            <circle cx="41" cy="52" r="2.5" fill="#8D4E2F" />
            <circle cx="41" cy="76" r="3" fill="#8D4E2F" />

            {/* Bell Crown / Top Finial (Kalasam) */}
            <path
              d="M 36 82 L 46 82 L 48 88 L 34 88 Z"
              stroke="#5C321E"
              strokeWidth="1.6"
              fill="#F4EBDC"
            />
            <circle cx="41" cy="85" r="1.5" fill="#5C321E" />
            <path
              d="M 33 88 C 33 88, 30 94, 26 98 L 56 98 C 52 94, 49 88, 49 88 Z"
              stroke="#5C321E"
              strokeWidth="1.8"
              fill="#FDFBF7"
            />

            {/* Bell Dome (Kumbha) */}
            <path
              d="M 26 98 C 24 108, 16 128, 11 144 C 9 150, 12 156, 18 156 L 64 156 C 70 156, 73 150, 71 144 C 66 128, 58 108, 56 98 Z"
              stroke="#5C321E"
              strokeWidth="2"
              fill="#FAF5EC"
            />
            {/* Horizontal Ornamental Grooves */}
            <path d="M 23 110 Q 41 113 59 110" stroke="#7C4428" strokeWidth="1.3" fill="none" />
            <path d="M 20 120 Q 41 123 62 120" stroke="#7C4428" strokeWidth="1.3" fill="none" />
            <path d="M 16 132 Q 41 136 66 132" stroke="#7C4428" strokeWidth="1.5" fill="none" />
            <path d="M 14 142 Q 41 146 68 142" stroke="#7C4428" strokeWidth="1.3" fill="none" />

            {/* Bell Engraved Petals */}
            <path
              d="M 22 120 Q 28 126 34 120 Q 41 126 48 120 Q 54 126 60 120"
              stroke="#8D4E2F"
              strokeWidth="1.2"
              fill="none"
            />

            {/* Bottom Flared Bell Lip (Mouth) */}
            <path
              d="M 14 156 C 14 163, 68 163, 68 156 Z"
              stroke="#5C321E"
              strokeWidth="2.2"
              fill="#EBDDC5"
            />
            <path d="M 18 159 Q 41 163 64 159" stroke="#7C4428" strokeWidth="1" fill="none" />

            {/* Clapper / Tongue with Dangling Ring */}
            <path d="M 41 156 L 41 180" stroke="#5C321E" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="41" cy="184" r="5" stroke="#5C321E" strokeWidth="1.8" fill="#F4EBDC" />
            <circle cx="41" cy="184" r="2" fill="#8B2226" />
            <path d="M 41 189 L 41 198" stroke="#7C4428" strokeWidth="1.5" />
            <circle cx="41" cy="201" r="2.5" fill="#7C4428" />
          </svg>
        </div>

        {/* Arching Sketched Banana Leaf (Right - Mirrored) */}
        <div
          className="relative -mr-4 origin-top-right animate-leaf-sway-right"
          style={{ animationDuration: '6.8s' }}
        >
          <svg
            width="130"
            height="180"
            viewBox="0 0 130 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm opacity-90 transform -scale-x-100"
          >
            {/* Banana Leaf Stem / Rachis Curve */}
            <path
              d="M 4 2 C 16 35, 42 75, 76 125 C 92 148, 114 168, 126 178"
              stroke="#5C321E"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* Banana Leaf Body */}
            <path
              d="M 4 2 
                 C 28 8, 56 22, 78 48 
                 C 102 76, 122 118, 126 178 
                 C 108 170, 78 140, 56 108 
                 C 34 76, 12 36, 4 2 Z"
              stroke="#7C4428"
              strokeWidth="1.6"
              fill="#FAF5EC"
              fillOpacity="0.85"
            />

            {/* Detailed Parallel Lateral Vein Lines */}
            <path
              d="M 12 18 C 24 16, 42 22, 52 26
                 M 18 32 C 32 30, 54 38, 68 44
                 M 26 48 C 42 46, 68 58, 84 66
                 M 36 66 C 54 64, 82 78, 98 88
                 M 46 84 C 64 82, 92 98, 108 110
                 M 58 104 C 74 102, 102 120, 116 132
                 M 72 124 C 88 122, 108 138, 120 148
                 M 88 144 C 100 144, 114 156, 122 164"
              stroke="#8D4E2F"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Leaf Notches */}
            <path d="M 68 44 L 62 48" stroke="#5C321E" strokeWidth="1.2" />
            <path d="M 98 88 L 91 93" stroke="#5C321E" strokeWidth="1.2" />
            <path d="M 116 132 L 109 137" stroke="#5C321E" strokeWidth="1.2" />
          </svg>
        </div>
      </div>

      {/* Traditional Mango Leaves & Auspicious Toranam Garland Swag (Across Top Edge) */}
      <div className="absolute top-0 inset-x-24 sm:inset-x-44 hidden md:flex justify-around items-start opacity-70 pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="origin-top animate-leaf-sway-left"
            style={{ animationDuration: `${4.5 + (idx % 3) * 0.8}s`, animationDelay: `${idx * 0.3}s` }}
          >
            <svg width="28" height="54" viewBox="0 0 28 54" fill="none">
              <path d="M 14 0 L 14 8" stroke="#7C4428" strokeWidth="1.5" />
              <path
                d="M 14 8 C 8 16, 4 28, 14 50 C 24 28, 20 16, 14 8 Z"
                stroke="#7C4428"
                strokeWidth="1.4"
                fill="#FAF5EC"
              />
              <path d="M 14 8 L 14 44" stroke="#8D4E2F" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="14" cy="51" r="1.5" fill="#8B2226" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
