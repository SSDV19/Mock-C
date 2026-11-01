import React from 'react';
import { ArrowRight, Sparkles, Utensils, Castle, Award, CheckCircle2 } from 'lucide-react';
import { OrnateCornerMandala, FadedMandalaWatermark, CentennialKolamBadge, KolamBorder } from './KolamPatterns';
import { HangingTempleElements } from './HangingTempleElements';

interface HeroProps {
  onOpenFeastBuilder: () => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFeastBuilder, onOpenBooking }) => {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-28 parchment-texture overflow-hidden border-b border-brown-900/15">
      {/* 1. Hanging Sketched Temple Bells & Banana Leaves (Gently Swaying) */}
      <HangingTempleElements />

      {/* 2. Ornate Corner Kolam Mandalas Matching Cream & Brown Palette (from User Reference) */}
      <OrnateCornerMandala position="tl" size={310} color="#7C4428" opacity={0.88} />
      <OrnateCornerMandala position="tr" size={260} color="#7C4428" opacity={0.65} />
      <OrnateCornerMandala position="bl" size={260} color="#7C4428" opacity={0.65} />
      <OrnateCornerMandala position="br" size={320} color="#7C4428" opacity={0.92} />

      {/* 3. Faded / Invisible Background Mandalas (As per User Reference Image) */}
      <FadedMandalaWatermark size={520} className="top-1/4 left-1/2 -translate-x-1/2" opacity={0.10} color="#7C4428" />
      <FadedMandalaWatermark size={420} className="top-8 right-1/4" opacity={0.08} color="#8D4E2F" />
      <FadedMandalaWatermark size={400} className="bottom-12 left-1/4" opacity={0.08} color="#8D4E2F" />

      {/* Subtle Radial Warmth in Center */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream-100/90 border border-gold-500/40 shadow-sm text-brown-850">
            <span className="w-2 h-2 rounded-full bg-sacred-kumkum animate-ping" />
            <span className="font-tamil text-sacred-kumkum text-xs font-semibold">நூற்றாண்டு பாரம்பரியம்</span>
            <span className="text-brown-400">|</span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-brown-800">
              100+ YEARS OF CULINARY SPLENDOUR • EST. 1924
            </span>
          </div>
        </div>

        {/* Main Grid: Old-Money Narrative + Grand Feast Presentation Centerpiece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Old-Money Editorial Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="space-y-3">
              <span className="block text-gold-700 font-serif italic text-lg sm:text-xl tracking-wide">
                Kumbakonam Heritage • Royal Tamil Nuptials
              </span>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-brown-900 font-normal leading-[1.08] tracking-tight">
                A Century of <span className="italic font-light text-brown-700">Sacred Feasts</span> &amp; Royal Event Mastery.
              </h1>
              <p className="font-tamil text-sacred-kumkum/95 text-sm sm:text-base font-medium tracking-wide">
                நூற்றாண்டு கண்ட புனித தலைவாழை விருந்தும், கம்பீரமான திருமண நிகழ்வு வடிவமைப்பும்.
              </p>
            </div>

            <p className="text-brown-700/95 text-base sm:text-lg max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Since 1924, <strong className="font-medium text-brown-900">Sundaram &amp; Sons</strong> has preserved the authentic culinary art of the Cauvery Delta. From wood-fired bronze degchis (விறகு அடுப்பு) and single-origin Thanjavur Ponni rice to sculpted brass temple mandapams, we curate multi-generational milestones with sacred devotion and precision event planning.
            </p>

            {/* Action Buttons: Button-in-Button Pattern */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenFeastBuilder}
                className="w-full sm:w-auto group relative inline-flex items-center justify-between gap-4 pl-6 pr-2 py-3.5 rounded-full bg-sacred-leaf text-cream-50 text-sm font-medium tracking-wide shadow-md hover:bg-sacred-leafLight active:scale-[0.98] transition-all duration-300 border border-gold-400/30"
              >
                <span>Explore Banana Leaf Feast (இலை சாப்பாடு)</span>
                <span className="w-8 h-8 rounded-full bg-cream-50/20 text-cream-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Utensils className="w-4 h-4" />
                </span>
              </button>

              <a
                href="#mandapam-events"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-cream-100/90 text-brown-900 text-sm font-medium tracking-wide border border-brown-900/25 hover:border-gold-500 hover:bg-cream-200 active:scale-[0.98] transition-all duration-300 shadow-sm"
              >
                <Castle className="w-4 h-4 text-gold-600" />
                <span>Explore Mandapam &amp; Decor</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-brown-900/15 text-xs text-brown-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span>Pure A2 Desi Cow Ghee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span>Zero Artificial Additives</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-600" />
                <span>Turnkey Wedding Planning</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Royal Feast Visual Showpiece & Centennial Crest */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Double-Bezel Nested Card Container */}
            <div className="relative w-full max-w-lg p-3 rounded-[2.5rem] bg-cream-100/80 border border-gold-500/40 shadow-bezel-outer">
              <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-cream-50 p-4 sm:p-5 border border-white/80 shadow-bezel-inner flex flex-col items-center text-center overflow-hidden">
                
                {/* Floating Centennial Stamp */}
                <div className="absolute top-2 right-2 scale-75 origin-top-right z-20">
                  <CentennialKolamBadge />
                </div>

                {/* Hero Showcase Image: Authentic Royal Feast Spread */}
                <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden border border-brown-900/15 shadow-md group">
                  <img
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic Traditional South Indian Wedding Banana Leaf Feast"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient Overlay for Editorial Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/85 via-transparent to-black/20" />

                  {/* Top Traditional Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brown-900/85 backdrop-blur-sm border border-gold-400/40 text-[10px] uppercase font-mono tracking-widest text-gold-300">
                    இலை சாப்பாடு • 28 Courses
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-gold-300 block">
                      KUMBAKONAM RAJA VIRUNDHU
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-cream-50 font-bold leading-tight">
                      Sacred Thalaivazhai Banquet
                    </h3>
                    <p className="text-[11px] text-cream-200/90 font-light mt-0.5 line-clamp-1">
                      Wood-fired bronze degchis, steaming Ponni rice &amp; Kumbakonam filter kaapi
                    </p>
                  </div>
                </div>

                {/* Cultural Accreditation Highlights */}
                <div className="mt-4 w-full grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-cream-100 border border-brown-900/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sacred-leaf shrink-0" />
                    <div>
                      <div className="text-[11px] font-serif font-bold text-brown-900">100% Wood-Fire</div>
                      <div className="text-[9px] text-brown-600">Ancestral Viragu Aduppu</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-cream-100 border border-brown-900/10 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <div>
                      <div className="text-[11px] font-serif font-bold text-brown-900">Cauvery Delta Rice</div>
                      <div className="text-[9px] text-brown-600">Single-origin Thanjavur</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Signature Line */}
                <div className="mt-3 pt-3 border-t border-brown-900/10 w-full flex items-center justify-between text-left text-xs text-brown-700">
                  <div>
                    <span className="font-semibold text-brown-900 block font-serif">100+ Years Sacred Tradition</span>
                    <span className="text-[10px]">Serving three generations of families</span>
                  </div>
                  <span className="font-tamil text-sacred-kumkum font-semibold text-sm">மங்கலம்</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Kolam Decorative Divider */}
        <div className="mt-14 mb-8">
          <KolamBorder className="text-gold-600/40" />
        </div>

        {/* 4 Pillars of Old-Money Heritage (Double-Bezel Bento Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-1 rounded-2xl bg-cream-100/90 border border-brown-900/15 shadow-sm">
            <div className="p-4 sm:p-5 rounded-[calc(1rem-0.25rem)] bg-cream-50/90 border border-white/60 text-center space-y-1">
              <div className="font-monument text-2xl sm:text-3xl font-bold text-brown-900">102+</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-brown-800">Years of Legacy</div>
              <div className="text-[11px] text-brown-600">Founded in Kumbakonam, 1924</div>
            </div>
          </div>

          <div className="p-1 rounded-2xl bg-cream-100/90 border border-brown-900/15 shadow-sm">
            <div className="p-4 sm:p-5 rounded-[calc(1rem-0.25rem)] bg-cream-50/90 border border-white/60 text-center space-y-1">
              <div className="font-monument text-2xl sm:text-3xl font-bold text-sacred-kumkum">12,000+</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-brown-800">Muhurthams Catered</div>
              <div className="text-[11px] text-brown-600">3-generation trust in families</div>
            </div>
          </div>

          <div className="p-1 rounded-2xl bg-cream-100/90 border border-brown-900/15 shadow-sm">
            <div className="p-4 sm:p-5 rounded-[calc(1rem-0.25rem)] bg-cream-50/90 border border-white/60 text-center space-y-1">
              <div className="font-monument text-2xl sm:text-3xl font-bold text-gold-600">28+</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-brown-800">Courses Per Leaf</div>
              <div className="text-[11px] text-brown-600">Authentic Thalaivazhai protocol</div>
            </div>
          </div>

          <div className="p-1 rounded-2xl bg-cream-100/90 border border-brown-900/15 shadow-sm">
            <div className="p-4 sm:p-5 rounded-[calc(1rem-0.25rem)] bg-cream-50/90 border border-white/60 text-center space-y-1">
              <div className="font-monument text-2xl sm:text-3xl font-bold text-sacred-leaf">100%</div>
              <div className="text-xs uppercase tracking-wider font-semibold text-brown-800">Eco-Friendly Leaves</div>
              <div className="text-[11px] text-brown-600">Cauvery delta fresh plantain leaves</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
