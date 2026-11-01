import React, { useState } from 'react';
import { Compass, Sparkles } from 'lucide-react';

interface LookbookItem {
  id: string;
  image: string;
  season: string;
  title: string;
  palette: string;
  location: string;
  description: string;
}

const LOOKS: LookbookItem[] = [
  {
    id: 'look-01',
    image: '/images/hero-look.jpg',
    season: 'Autumn / Winter Issue',
    title: 'Monolithic Proportions',
    palette: 'Charcoal Wash · Raw Concrete',
    location: 'Brutalist Pavilion, Tokyo',
    description: 'An architectural silhouette draped with deliberate excess volume. The 340 GSM cotton maintains its sculptured geometry away from the body.'
  },
  {
    id: 'look-02',
    image: '/images/lookbook-female.jpg',
    season: 'Unisex Archive',
    title: 'Natural Bone Drape',
    palette: 'Raw Unbleached Cream · Onyx',
    location: 'Studio Marais, Paris',
    description: 'Fluidity through gravity. Single-origin yarn allowed to rest in its natural undyed tone, pairing structural density with an effortless drape.'
  },
  {
    id: 'look-03',
    image: '/images/atelier-craft.jpg',
    season: 'Process Documentation',
    title: 'Pattern Draft & Cutting',
    palette: 'Drafting Ochre · Dark Marble',
    location: 'Atelier Workshop, Okayama',
    description: 'Hand-graded master card patterns drafted to account for cross-grain shrinkage. Every single garment is checked against brass master calipers.'
  }
];

export const LookbookSection: React.FC = () => {
  const [activeLook, setActiveLook] = useState(0);

  return (
    <section id="lookbook" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-8 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00] block mb-2">
            Visual Journal / Volume IV
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
            Editorial Lookbook
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
          Captured across Paris and Tokyo. Garments studied as architectural objects in interaction with light, concrete, and physical movement.
        </p>
      </div>

      {/* Asymmetric Editorial Bento Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Monumental Feature Look (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between border border-white/10 rounded-3xl p-4 sm:p-6 bg-[#111114] group">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black">
            <img 
              src={LOOKS[activeLook].image} 
              alt={LOOKS[activeLook].title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
            />
            {/* Minimalist Watermark */}
            <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/90">
              {LOOKS[activeLook].season}
            </div>

            <div className="absolute bottom-4 right-4 backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-white/80">
              {LOOKS[activeLook].location}
            </div>
          </div>

          <div className="pt-6 pb-2 px-1 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e65c00] block mb-1">
                {LOOKS[activeLook].palette}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                {LOOKS[activeLook].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-lg mt-2 leading-relaxed">
                {LOOKS[activeLook].description}
              </p>
            </div>

            {/* Quick Switcher Indicators */}
            <div className="flex items-center gap-2">
              {LOOKS.map((look, idx) => (
                <button
                  key={look.id}
                  onClick={() => setActiveLook(idx)}
                  aria-label={`View look ${idx + 1}`}
                  className={`w-8 h-8 rounded-full font-mono text-xs transition-all ${
                    activeLook === idx
                      ? 'bg-white text-black font-semibold'
                      : 'bg-white/5 text-white/50 border border-white/10 hover:border-white/30'
                  }`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Editorial Stack (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Detail Tile 1: Fabric Spec Macro */}
          <div className="p-6 rounded-3xl border border-white/10 bg-[#111114] flex items-center gap-6 group">
            <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 bg-black border border-white/10">
              <img 
                src="/images/fabric-texture.jpg" 
                alt="340 GSM Fabric knit" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e65c00] block mb-1">
                Micro-Texture Spec
              </span>
              <h4 className="font-editorial text-lg text-white font-normal">
                Carded Ring-Spun Knots
              </h4>
              <p className="text-xs text-white/50 leading-relaxed mt-1">
                Slub cotton fibers spun at low tension to preserve natural breathability while maximizing structural rigidity.
              </p>
            </div>
          </div>

          {/* Detail Tile 2: Tokyo Studio Philosophy */}
          <div className="p-8 rounded-3xl border border-white/10 bg-[#111114] flex flex-col justify-between relative overflow-hidden flex-1">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Compass className="w-40 h-40 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-3">
                Atelier Philosophy
              </span>
              <blockquote className="font-editorial text-xl sm:text-2xl text-white font-light italic leading-snug">
                “Clothing should not merely cover the body; it must carve out a calm sanctuary in space.”
              </blockquote>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-[11px] font-mono text-white/60 uppercase tracking-widest">
                Isamu K. · Lead Patternmaker
              </span>
              <span className="text-[10px] font-mono text-white/40">
                1994 — 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
