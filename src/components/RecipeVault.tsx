import React, { useState } from 'react';
import { Flame, Sparkles, ChevronDown, ChevronUp, Clock, Award } from 'lucide-react';
import { OrnateCornerMandala, FadedMandalaWatermark, KolamBorder } from './KolamPatterns';

interface RecipeSecret {
  id: string;
  name: string;
  tamilName: string;
  year: number;
  vessel: string;
  cookingTime: string;
  story: string;
  secretRule: string;
  image: string;
  ingredients: string[];
}

export const RecipeVault: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('rasam-podi');

  const recipes: RecipeSecret[] = [
    {
      id: 'rasam-podi',
      name: '1924 Secret Stone-Ground Rasam Podi',
      tamilName: '1924 பாரம்பரிய ரசப் பொடி',
      year: 1924,
      vessel: 'Velli Eyya Chombu (Tin-Coated Brass)',
      cookingTime: '18 Minutes Slow Simmer',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
      story: 'Created by Sundaram Achariyar in 1924. We strictly ban electrical blenders — 14 whole spices are sun-dried on temple terrace mats and hand-pounded on granite ammi-kal (அம்மிக்கல்) to preserve the volatile essential oils.',
      secretRule: 'Never let rasam reach a roaring boil. The moment a froth of golden pearls forms on top (நுரை கூடும் போது), extinguish the flame and temper with hot ghee.',
      ingredients: [
        'Tellicherry Black Pepper (High-altitude Malabar)',
        'Stone-ground Cumin Seeds',
        'Kumbakonam Guntur Coriander Seeds',
        'Cauvery Valley Asafoetida (Perungayam)',
        'Sun-dried Curry Leaves & Red Chilies'
      ]
    },
    {
      id: 'elaneer-payasam',
      name: 'Royal Cauvery Elaneer Payasam',
      tamilName: 'ராயல் இளநீர் பாயாசம்',
      year: 1968,
      vessel: 'Vengala Urli (Heavy Bell-Metal Bronze)',
      cookingTime: '3.5 Hours Reduction',
      image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80',
      story: 'Pioneered for the Zamindar weddings of Tanjore. Whole country cow milk is reduced by half in wide-mouthed bell-metal vessels until sweet and thick, then gently cooled before folding in tender coconut pulp and water.',
      secretRule: 'Tender coconut water must NEVER touch direct heat. It must be folded into lukewarm reduced milk, preserving its natural pristine sweetness.',
      ingredients: [
        'Fresh Cauvery Delta Tender Coconut Water & Pulp',
        'Double-reduced Pure Country Cow Milk',
        'Green Cardamom (Idukki Estate)',
        'Ghee-roasted Cashews & Golden Raisins',
        'Organic Diamond Rock Sugar (Kalkandu)'
      ]
    },
    {
      id: 'asoka-halwa',
      name: 'Tiruvaiyaru Ghee Asoka Halwa',
      tamilName: 'திருவையாறு அசோகா அல்வா',
      year: 1947,
      vessel: 'Thanjavur Brass Cauldron',
      cookingTime: '2 Hours Wood-Fire Stirring',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
      story: 'The crowning glory of South Indian wedding banquets. Yellow moong dal is steamed, pounded silken-smooth, and continuously stirred over gentle wood embers with equal parts pure cow ghee until it slides like satin from the ladle.',
      secretRule: 'The ghee must be poured in continuous micro-streams while stirring in unbroken clockwise arcs (வலஞ்சுழியாக) to ensure complete emulsion without graininess.',
      ingredients: [
        'Split Yellow Moong Dal (Paasi Paruppu)',
        'A2 Gir Cow Desi Ghee',
        'Organic Cane Sugar',
        'Saffron Threads (Kashmir Pampore)',
        'Crushed Green Cardamom'
      ]
    },
    {
      id: 'degree-coffee',
      name: 'Kumbakonam Degree Filter Kaapi',
      tamilName: 'கும்பகோணம் டிகிரி பில்டர் காபி',
      year: 1924,
      vessel: 'Heavy Kumbakonam Brass Davarah & Tumbler',
      cookingTime: 'Slow Gravity Percolation',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      story: 'The legendary conclusion to every wedding meal. We blend 80% washed plantation peaberry beans with 20% French chicory, percolating with pure rainwater in heavy brass drip filters.',
      secretRule: 'Use only the "First Decoction" (முதல் டிக்காக்ஷன்). Never boil the decoction twice. Combine with frothing, un-diluted rich farm buffalo milk.',
      ingredients: [
        'Chikmagalur Peaberry Coffee Beans',
        'Certified Roasted French Chicory',
        'Boiling Fresh Rich Farm Milk',
        'Organic Khandsari Sugar'
      ]
    }
  ];

  const toggleRecipe = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="recipe-vault" className="py-20 md:py-28 parchment-texture border-b border-brown-900/15 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sacred-kumkum/10 border border-sacred-kumkum/30 text-sacred-kumkum text-xs font-semibold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5" />
            <span>Ancestral Culinary Science</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            The 1924 Secret Recipe Vault
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            100 ஆண்டு பாரம்பரிய சமையல் ரகசியங்கள் &amp; பாரம்பரிய பாத்திரங்கள்
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            True old-money culinary artistry lies in respect for ancestral physics: bell-metal bronze conductivity, stone ammi grinding, and strict heat moderation. Discover the four crown jewels of Sundaram &amp; Sons.
          </p>
        </div>

        {/* 4 Recipe Cards Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => {
            const isExpanded = expandedId === recipe.id;
            return (
              <div
                key={recipe.id}
                className={`p-1.5 rounded-[2rem] transition-all duration-300 ${
                  isExpanded
                    ? 'bg-brown-900 shadow-xl ring-2 ring-gold-500'
                    : 'bg-cream-100/90 hover:bg-cream-200 border border-brown-900/15'
                }`}
              >
                <div className={`p-6 rounded-[calc(2rem-0.375rem)] transition-all ${
                  isExpanded ? 'bg-brown-850 text-cream-50' : 'bg-cream-50 text-brown-900'
                }`}>
                  
                  {/* Card Top Row with Appetizing Photo Thumbnail */}
                  <div
                    onClick={() => toggleRecipe(recipe.id)}
                    className="flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-gold-500/40 shrink-0 shadow-sm">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded font-semibold ${
                            isExpanded ? 'bg-gold-500/20 text-gold-300' : 'bg-brown-900/10 text-brown-800'
                          }`}>
                            Est. {recipe.year}
                          </span>
                          <span className={`text-[11px] font-mono ${
                            isExpanded ? 'text-cream-300' : 'text-brown-600'
                          }`}>
                            {recipe.cookingTime}
                          </span>
                        </div>
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold leading-tight">
                          {recipe.name}
                        </h3>
                        <p className={`font-tamil text-xs font-semibold mt-0.5 ${
                          isExpanded ? 'text-gold-300' : 'text-sacred-kumkum'
                        }`}>
                          {recipe.tamilName}
                        </p>
                      </div>
                    </div>

                    <button className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isExpanded ? 'bg-gold-500 text-brown-900 rotate-180' : 'bg-cream-200 text-brown-700'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Vessel Badge */}
                  <div className={`mt-3 pt-3 border-t text-xs flex items-center gap-2 ${
                    isExpanded ? 'border-white/10 text-cream-200' : 'border-brown-900/10 text-brown-700'
                  }`}>
                    <span className="font-medium">Mandatory Vessel:</span>
                    <span className="font-semibold text-gold-500">{recipe.vessel}</span>
                  </div>

                  {/* Expanded Body Content */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/15 space-y-4 animate-fadeIn">
                      <p className="text-xs text-cream-200/90 font-light leading-relaxed">
                        {recipe.story}
                      </p>

                      {/* Golden Rule of the Master Chef */}
                      <div className="p-3.5 rounded-xl bg-gold-500/15 border border-gold-500/30 text-xs">
                        <div className="text-gold-300 font-serif font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          Master Acharya’s Secret Rule:
                        </div>
                        <p className="text-cream-100 font-light italic">
                          "{recipe.secretRule}"
                        </p>
                      </div>

                      {/* Key Ingredients */}
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 block mb-2">
                          Single-Origin Ingredients:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-cream-200">
                          {recipe.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                              <span className="font-light">{ing}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Kolam Divider */}
        <div className="mt-14">
          <KolamBorder className="text-gold-600/35" />
        </div>

      </div>
    </section>
  );
};
