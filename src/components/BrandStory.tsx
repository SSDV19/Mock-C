import React from 'react';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Big Manifesto Statement */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e65c00]" />
            Atelier Manifesto
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12]">
            “The T-shirt has been trivialized by fast manufacturing. We treat it as an unyielding architectural monument.”
          </h2>
        </div>

        {/* Right Editorial Narrative */}
        <div className="lg:col-span-4 border-l border-white/10 pl-6 lg:pl-10 space-y-5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
            The Drape Standard
          </span>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal">
            By eliminating artificial silicone softeners and using exclusively 340+ GSM ring-spun long-staple cotton, our garments establish their own structural volume, floating sculpturally around the posture rather than collapsing against it.
          </p>
          <div className="pt-2 text-[11px] font-mono text-white/40 flex items-center justify-between border-t border-white/5">
            <span>OKAYAMA · 2026 ARCHIVE</span>
            <span>100% COMBED COTTON</span>
          </div>
        </div>
      </div>
    </section>
  );
};
