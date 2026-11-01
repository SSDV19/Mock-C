import React from 'react';
import { ShieldCheck, Layers, Scale, Scissors } from 'lucide-react';

export const MaterialStory: React.FC = () => {
  return (
    <section id="material" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Textile Spec Macro Gallery */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative rounded-3xl border border-white/10 bg-[#111114] p-3 overflow-hidden group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <img 
                src="/images/atelier-craft.jpg" 
                alt="Atelier craft table in Okayama" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                Studio Bench #02 · Tokyo
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#e65c00]">
                Cold Enzyme Wash
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-editorial text-2xl text-white block">340g</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Density / m²</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-editorial text-2xl text-white block">100%</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Organic Combed</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="font-editorial text-2xl text-white block">500+</span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Wash Resilient</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Engineering Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00] block mb-2">
              Textile Engineering
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white leading-tight">
              A Material Defiant of Gravitational Collapse.
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mt-4 max-w-xl">
              Commercial luxury T-shirts surrender after ten laundering cycles: necklines scallop, seams rotate diagonally, and drape deflates. Our Okayama-milled combed yarn is slow-knitted on vintage loopwheel frames to lock internal fiber tension.
            </p>
          </div>

          {/* Four Pillar Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mb-3">
                <Scale className="w-4 h-4 text-[#e65c00]" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                340 GSM Heavy Weight
              </h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-1">
                More than double the density of commercial tees. Hangs straight down without clinging to anatomical irregularities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mb-3">
                <Scissors className="w-4 h-4 text-[#e65c00]" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Blind Seam Construction
              </h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-1">
                Single-thread needle tuck prevents bulky hem ridges and ensures a razor-sharp bottom silhouette.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mb-3">
                <Layers className="w-4 h-4 text-[#e65c00]" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Anti-Sag Rib Binding
              </h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-1">
                2.5cm ribbed collar reinforced with dual topstitching and elastomeric core memory.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white mb-3">
                <ShieldCheck className="w-4 h-4 text-[#e65c00]" />
              </div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Low-Impact Bio Dye
              </h4>
              <p className="text-[11px] text-white/50 leading-relaxed mt-1">
                Garment-dyed with natural wine-must bio-pigment and botanical plant minerals, preserving yarn softness and gentle patina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
