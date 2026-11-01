import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Check, Castle, Flower2, Music, Gift, Eye, CheckCircle2 } from 'lucide-react';
import { MANDAPAM_THEMES, MandapamTheme } from '../data/cateringData';
import { OrnateCornerMandala, FadedMandalaWatermark, KolamBorder, PadmaKolam } from './KolamPatterns';

export const EventPlanningVisualizer: React.FC = () => {
  const [activeThemeId, setActiveThemeId] = useState<string>('chola-temple');
  const [lightingMode, setLightingMode] = useState<'day' | 'night'>('day');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'mandapam-decor', 'nadaswaram', 'brass-kaapi-bar', 'kolam-runway'
  ]);

  const activeTheme = MANDAPAM_THEMES.find(t => t.id === activeThemeId) || MANDAPAM_THEMES[0];

  const turnkeyServices = [
    {
      id: 'mandapam-decor',
      name: 'Architectural Mandapam Staging',
      tamilName: 'மண்டப அலங்காரம்',
      icon: <Castle className="w-4 h-4 text-gold-600" />,
      description: 'Handcrafted temple pillars, 10,000 fresh marigold garlands, and Vedic Agni Kundam setup.'
    },
    {
      id: 'nadaswaram',
      name: 'Thiruvidaimarudur Nadaswaram & Thavil Troupe',
      tamilName: 'மங்கள வாத்தியம்',
      icon: <Music className="w-4 h-4 text-gold-600" />,
      description: 'Hereditary temple musicians performing traditional Ragas for every auspicious Muhurtham ritual.'
    },
    {
      id: 'kolam-runway',
      name: '100-Ft Grand Rice-Flour Kolam Runway',
      tamilName: 'அரிசி மாவு கோல நடைபாதை',
      icon: <Sparkles className="w-4 h-4 text-gold-600" />,
      description: 'Hand-drawn continuous Sikku & Padma Kolam carpet drawn at dawn by hereditary master artisans.'
    },
    {
      id: 'brass-kaapi-bar',
      name: 'Live Kumbakonam Brass Filter Kaapi Lounge',
      tamilName: 'பாரம்பரிய டிகிரி காபி அரங்கம்',
      icon: <span className="text-sm">☕</span>,
      description: 'Antique brass counter with wood-pressed chicory aroma and frothy davarah-tumbler service.'
    },
    {
      id: 'thamboolam-gifts',
      name: 'Heirloom Thamboolam & Sweet Gift Boxes',
      tamilName: 'தாம்பூல பரிசுப் பைகள்',
      icon: <Gift className="w-4 h-4 text-gold-600" />,
      description: 'Kumbakonam Asoka Halwa, betel leaves, sandalwood paste & brass souvenirs in bespoke jute bags.'
    }
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  return (
    <section id="mandapam-events" className="py-20 md:py-28 parchment-texture border-b border-brown-900/15 relative overflow-hidden">
      {/* Corner Mandalas matching cream & brown theme */}
      <OrnateCornerMandala position="tl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="tr" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="bl" size={260} color="#7C4428" opacity={0.7} />
      <OrnateCornerMandala position="br" size={280} color="#7C4428" opacity={0.8} />

      {/* Faded Watermark Mandala in Background */}
      <FadedMandalaWatermark size={480} className="top-1/4 right-1/4" opacity={0.07} color="#7C4428" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-brown-900 text-xs font-semibold uppercase tracking-widest">
            <Castle className="w-3.5 h-3.5 text-gold-600" />
            <span>Grand Muhurtham Scenography</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            Royal Mandapam &amp; Event Styling
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            பாரம்பரிய திருமண மேடை வடிவமைப்பு &amp; மங்கள நிகழ்வுகள்
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            Beyond legendary feasts, Sundaram &amp; Sons is celebrated for orchestrating the finest heritage weddings. We merge centuries of Tamil iconography with seamless event management, vintage Chettinad antiques, and temple-grade floral artistry.
          </p>
        </div>

        {/* Theme Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {MANDAPAM_THEMES.map((theme) => {
            const isSelected = activeThemeId === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => setActiveThemeId(theme.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-serif transition-all border ${
                  isSelected
                    ? 'bg-brown-900 text-cream-50 border-brown-900 shadow-md ring-2 ring-gold-500/40'
                    : 'bg-cream-100/90 text-brown-850 border-brown-900/15 hover:border-gold-500'
                }`}
              >
                <span>{theme.name}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Stage + Turnkey Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Visual Staging Render & Day/Night Toggle (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gold-500/30 shadow-bezel-outer bg-brown-950 p-2 sm:p-3">
              <div className="relative h-[380px] sm:h-[460px] rounded-[calc(2.5rem-0.75rem)] overflow-hidden">
                <img
                  src={activeTheme.image}
                  alt={activeTheme.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    lightingMode === 'night' ? 'brightness-75 contrast-125 sepia-[0.3]' : 'brightness-95'
                  }`}
                />
                
                {/* Night Lighting Overlay */}
                {lightingMode === 'night' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/90 via-gold-600/10 to-sacred-kumkum/15 pointer-events-none" />
                )}

                {/* Day / Night Atmospheric Mode Switcher */}
                <div className="absolute top-4 right-4 z-20 flex items-center bg-black/60 backdrop-blur-md rounded-full p-1 border border-white/20">
                  <button
                    onClick={() => setLightingMode('day')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      lightingMode === 'day'
                        ? 'bg-cream-100 text-brown-900 shadow-sm'
                        : 'text-cream-200 hover:text-white'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-gold-500" />
                    <span>Surya Prakasam (Day)</span>
                  </button>
                  <button
                    onClick={() => setLightingMode('night')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      lightingMode === 'night'
                        ? 'bg-gold-500 text-brown-950 shadow-sm font-semibold'
                        : 'text-cream-200 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-gold-200" />
                    <span>Deepam Glow (Night)</span>
                  </button>
                </div>

                {/* Scenography Card Overlay at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-brown-950/80 backdrop-blur-md border border-white/20 text-cream-50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-gold-300 block">
                        ARCHITECTURAL PALETTE: {activeTheme.palette}
                      </span>
                      <h3 className="font-serif text-xl font-bold">{activeTheme.name}</h3>
                    </div>
                    <span className="font-tamil text-gold-400 text-sm">{activeTheme.tamilName}</span>
                  </div>
                  <p className="text-xs text-cream-200/90 font-light leading-relaxed">
                    {activeTheme.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-gold-300">
                    {activeTheme.highlights.map((h, i) => (
                      <span key={i} className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10">
                        <CheckCircle2 className="w-3 h-3 text-gold-400" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Turnkey Sacred Services (No Cost Estimator!) (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-[2rem] bg-cream-50 border border-brown-900/15 shadow-bezel-outer space-y-4">
              <div className="flex items-center justify-between border-b border-brown-900/10 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-monument tracking-widest text-brown-600 block">
                    TURNKEY WEDDING SCENOGRAPHY
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brown-900">
                    Bespoke Sacred Inclusions
                  </h3>
                </div>
                <span className="text-xs font-mono text-sacred-leaf font-bold bg-cream-200 px-2.5 py-1 rounded-full">
                  {selectedServices.length} Selected
                </span>
              </div>

              <div className="space-y-2.5">
                {turnkeyServices.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-cream-100 border-gold-500/50 shadow-sm'
                          : 'bg-cream-50/50 border-brown-900/10 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                            isChecked ? 'bg-gold-500/20 text-brown-900' : 'bg-cream-200 text-brown-500'
                          }`}>
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-serif text-xs sm:text-sm font-bold text-brown-900">
                              {service.name}
                            </div>
                            <div className="font-tamil text-[10px] text-sacred-kumkum font-semibold">
                              {service.tamilName}
                            </div>
                          </div>
                        </div>

                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          isChecked ? 'bg-sacred-leaf/15 text-sacred-leaf' : 'bg-brown-900/10 text-brown-600'
                        }`}>
                          {isChecked ? '✓ Included' : '+ Add'}
                        </span>
                      </div>
                      <p className="text-[11px] text-brown-700 mt-2 font-light pl-10">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Consultation Action (No Pricing!) */}
              <div className="pt-4 border-t border-brown-900/10">
                <a
                  href="#panchangam"
                  className="w-full py-3.5 rounded-full bg-brown-900 text-cream-50 text-xs font-semibold hover:bg-brown-850 transition-colors shadow-md flex items-center justify-center gap-2 border border-gold-500/30"
                >
                  <span>Plan Scenography &amp; Muhurtham Feast &rarr;</span>
                </a>
              </div>
            </div>

            {/* Tamil Kolam Runway Guarantee */}
            <div className="p-4 rounded-2xl bg-cream-100 border border-gold-500/30 flex items-center gap-4">
              <PadmaKolam size={46} className="text-gold-600 shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-brown-900 text-xs sm:text-sm">
                  100% Certified Rice-Flour Kolams
                </h4>
                <p className="text-[11px] text-brown-700 font-light mt-0.5">
                  We never use synthetic stickers or chemical chalk. Drawn at sunrise by hereditary artisans with pure rice paste to feed earth creatures, as per sacred Tamil Dharma.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
