import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/cateringData';
import { OrnateCornerMandala, FadedMandalaWatermark, PadmaKolam } from './KolamPatterns';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 parchment-texture border-b border-brown-900/15 relative overflow-hidden">
      {/* Corner Mandalas matching cream and brown theme */}
      <OrnateCornerMandala position="tl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="tr" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="bl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="br" size={280} color="#7C4428" opacity={0.8} />

      {/* Faded Watermark Mandala in Background */}
      <FadedMandalaWatermark size={480} className="top-1/3 left-1/2 -translate-x-1/2" opacity={0.07} color="#7C4428" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-50 border border-gold-500/40 text-brown-900 text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Quote className="w-3.5 h-3.5 text-gold-600" />
            <span>Multi-Generational Trust</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            Voices of Three Generations
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            தலைமுறை தலைமுறையாக தொடரும் குடும்பங்களின் பாசமிகு நற்சான்றிதழ்கள்
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            In South India, wedding caterers become part of the family lineage. Here is what families who have trusted Sundaram &amp; Sons since the 1950s have to say.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-1 rounded-[2.5rem] bg-cream-50/90 border border-gold-500/30 shadow-bezel-outer flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 rounded-[calc(2.5rem-0.25rem)] bg-cream-50 border border-white flex flex-col justify-between h-full space-y-6">
                
                {/* Top Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold-500/15 text-brown-900 font-semibold">
                    {t.year}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-brown-850 text-sm font-serif italic leading-relaxed">
                  "{t.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-brown-900/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-brown-900 text-sm">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gold-700 font-light">
                      {t.event}
                    </p>
                    <p className="text-[10px] text-brown-500 font-mono mt-0.5">
                      {t.location}
                    </p>
                  </div>
                  <PadmaKolam size={34} className="text-gold-500/40 shrink-0" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Heritage Trust Seal */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-cream-50 border border-gold-500/30 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-sacred-kumkum/10 text-sacred-kumkum flex items-center justify-center font-tamil text-lg font-bold">
            ஓம்
          </div>
          <div className="text-left text-xs text-brown-700">
            <span className="font-semibold text-brown-900 block font-serif text-sm">
              The Sundaram Unconditional Purity Pledge
            </span>
            If any wedding dish does not meet the 100-year culinary standard set by our founders, it is not served. All raw ingredients are certified organic &amp; Cauvery Delta farm-direct.
          </div>
        </div>

      </div>
    </section>
  );
};
