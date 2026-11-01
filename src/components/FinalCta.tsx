import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onCustomizeClick: () => void;
  onExploreCollection: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onCustomizeClick,
  onExploreCollection,
}) => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      <div className="relative rounded-[3rem] bg-gradient-to-b from-[#16161a] to-[#0c0c0e] border border-white/10 double-bezel p-8 sm:p-16 text-center overflow-hidden">
        {/* Subtle background ambient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e65c00]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e65c00] animate-pulse" />
            Limited Batch Reservation
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
            Claim Your Silhouette or Craft It in 3D.
          </h2>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-md mx-auto">
            Numbered production run of 300 pieces per colorway. Complimentary global insured courier with each atelier order.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onCustomizeClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#eae7df] transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active-press"
            >
              <Sparkles className="w-4 h-4 text-[#e65c00]" />
              <span>Launch 3D Bespoke Lab</span>
            </button>

            <button
              onClick={onExploreCollection}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-xs uppercase tracking-wider transition-all active-press"
            >
              <span>Browse Catalog</span>
              <ArrowUpRight className="w-4 h-4 text-white/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
