import React, { useState } from 'react';
import { Clock, MapPin, Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERITAGE_TIMELINE, HeritageMilestone } from '../data/cateringData';
import { OrnateCornerMandala, FadedMandalaWatermark, KolamBorder, PadmaKolam, CentennialKolamBadge } from './KolamPatterns';

export const HeritageTimeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeMilestone = HERITAGE_TIMELINE[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % HERITAGE_TIMELINE.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + HERITAGE_TIMELINE.length) % HERITAGE_TIMELINE.length);
  };

  const handleSelectYear = (idx: number) => {
    setActiveIdx(idx);
  };

  return (
    <section id="heritage" className="py-20 md:py-28 parchment-alt-texture border-b border-brown-900/15 relative overflow-hidden">
      {/* Corner Mandalas matching cream and brown theme */}
      <OrnateCornerMandala position="tl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="tr" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="bl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="br" size={280} color="#7C4428" opacity={0.8} />

      {/* Faded Background Watermark Mandala */}
      <FadedMandalaWatermark size={480} className="top-1/4 right-1/3" opacity={0.07} color="#7C4428" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold-500/40 text-brown-900 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gold-600" />
            <span>1924 — 2026 • Centennial Chronology</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            A Century of Culinary Dharma
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            நூற்றாண்டு கடந்த பாரம்பரியம் — 100 ஆண்டுகளின் புனித வரலாற்றுப் பயணம்
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            From woodfire cauldrons in Kumbakonam temple streets to global royal wedding banquets, explore the milestones of four generations of Sundaram culinary masters.
          </p>
        </div>

        {/* Interactive Year Selector Ribbon */}
        <div className="relative mb-12">
          <div className="flex items-center justify-between max-w-4xl mx-auto px-4 overflow-x-auto pb-4 gap-4 scrollbar-none">
            {HERITAGE_TIMELINE.map((m, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={m.year}
                  onClick={() => handleSelectYear(idx)}
                  className={`flex flex-col items-center group transition-all shrink-0 ${
                    isCurrent ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCurrent
                      ? 'bg-brown-900 text-gold-400 border-gold-500 shadow-md ring-4 ring-gold-400/20'
                      : 'bg-cream-50 text-brown-800 border-brown-900/20 group-hover:border-gold-500'
                  }`}>
                    <span className="font-monument text-xs font-bold">{m.year}</span>
                  </div>
                  <span className={`text-[11px] font-serif mt-2 transition-colors ${
                    isCurrent ? 'text-brown-900 font-bold' : 'text-brown-600'
                  }`}>
                    {m.year === 1924 ? 'Inception' : m.year === 2026 ? 'Present' : `${m.year}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Golden connecting line */}
          <div className="hidden sm:block absolute top-6 left-12 right-12 h-0.5 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent -z-0" />
        </div>

        {/* Milestone Showcase Card (Double-Bezel Luxury Architecture) */}
        <div className="max-w-4xl mx-auto p-2 sm:p-3 rounded-[2.5rem] bg-cream-50/80 border border-gold-500/40 shadow-bezel-outer">
          <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-cream-50 p-6 sm:p-10 border border-white shadow-bezel-inner space-y-6">
            
            {/* Top Bar with Location & Tamil Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brown-900/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brown-600">
                <MapPin className="w-4 h-4 text-sacred-kumkum" />
                <span>{activeMilestone.location}</span>
              </div>
              <div className="font-tamil text-sacred-kumkum text-sm sm:text-base font-semibold">
                {activeMilestone.tamilTitle}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Year Stamp & Kolam */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-cream-100 border border-gold-500/30 text-center">
                <span className="font-monument text-4xl sm:text-5xl font-bold text-brown-900 block">
                  {activeMilestone.year}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold-700 mt-1">
                  HISTORIC MILESTONE
                </span>
                <div className="my-4">
                  <PadmaKolam size={90} className="text-gold-600 animate-slow-spin" />
                </div>
                <div className="text-xs font-serif italic text-brown-700">
                  Cauvery Delta Heritage
                </div>
              </div>

              {/* Text Narrative */}
              <div className="md:col-span-8 space-y-4">
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-brown-900 font-semibold leading-snug">
                  {activeMilestone.title}
                </h3>
                <p className="text-brown-700 text-sm sm:text-base font-light leading-relaxed">
                  {activeMilestone.description}
                </p>

                {/* Highlight Badge */}
                <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-brown-850">
                    <strong className="font-semibold block text-brown-900">Culinary &amp; Event Innovation:</strong>
                    {activeMilestone.highlight}
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Arrows */}
            <div className="pt-4 border-t border-brown-900/10 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brown-900/15 text-xs font-medium text-brown-800 hover:bg-cream-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Era</span>
              </button>

              <div className="text-xs font-mono text-brown-500">
                {activeIdx + 1} of {HERITAGE_TIMELINE.length}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brown-900 text-cream-50 text-xs font-medium hover:bg-brown-850 transition-colors"
              >
                <span>Next Era</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Kolam Divider */}
        <div className="mt-14">
          <KolamBorder className="text-gold-600/35" />
        </div>

      </div>
    </section>
  );
};
