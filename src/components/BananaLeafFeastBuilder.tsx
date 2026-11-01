import React, { useState, useMemo } from 'react';
import { Sparkles, Utensils, Check, Plus, Minus, Download, Eye, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ALL_DISHES, FEAST_PACKAGES, DishItem, FeastPackage } from '../data/cateringData';
import { OrnateCornerMandala, FadedMandalaWatermark, KolamBorder } from './KolamPatterns';

interface BananaLeafFeastBuilderProps {
  onOpenBookingWithMenu?: (packageDetails: { packageName: string; guestCount: number }) => void;
}

export const BananaLeafFeastBuilder: React.FC<BananaLeafFeastBuilderProps> = ({ onOpenBookingWithMenu }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('shatabdi-kalyana');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDishIds, setSelectedDishIds] = useState<string[]>(
    FEAST_PACKAGES[0].dishIds
  );
  const [inspectedDish, setInspectedDish] = useState<DishItem>(
    ALL_DISHES.find(d => d.id === 'kumbakonam-sambar') || ALL_DISHES[0]
  );
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Switch package
  const handleSelectPackage = (pkg: FeastPackage) => {
    setSelectedPackageId(pkg.id);
    setSelectedDishIds(pkg.dishIds);
    const firstDish = ALL_DISHES.find(d => pkg.dishIds.includes(d.id));
    if (firstDish) setInspectedDish(firstDish);
  };

  // Toggle dish on the leaf
  const handleToggleDish = (dishId: string) => {
    setSelectedPackageId('custom');
    if (selectedDishIds.includes(dishId)) {
      if (selectedDishIds.length <= 5) {
        alert("A traditional feast requires at least 5 courses!");
        return;
      }
      setSelectedDishIds(selectedDishIds.filter(id => id !== dishId));
    } else {
      setSelectedDishIds([...selectedDishIds, dishId]);
    }
  };

  // Filtered dishes for selection list
  const filteredDishes = useMemo(() => {
    if (activeCategory === 'all') return ALL_DISHES;
    if (activeCategory === 'signature') return ALL_DISHES.filter(d => d.isHeritage1924Signature);
    return ALL_DISHES.filter(d => d.category === activeCategory);
  }, [activeCategory]);

  // Selected dishes details
  const activeDishes = useMemo(() => {
    return ALL_DISHES.filter(d => selectedDishIds.includes(d.id));
  }, [selectedDishIds]);

  // Export banquet menu trigger
  const handleExportBanquet = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C59B3F', '#26532B', '#8B2226', '#FDFBF7']
      });
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4000);
    } catch (e) {}
  };

  return (
    <section id="leaf-feast" className="py-20 md:py-28 parchment-alt-texture border-b border-brown-900/15 relative overflow-hidden">
      {/* Corner Kolams in warm brown matching cream background */}
      <OrnateCornerMandala position="tl" size={280} color="#7C4428" opacity={0.85} />
      <OrnateCornerMandala position="tr" size={260} color="#7C4428" opacity={0.65} />
      <OrnateCornerMandala position="bl" size={260} color="#7C4428" opacity={0.65} />
      <OrnateCornerMandala position="br" size={290} color="#7C4428" opacity={0.88} />

      {/* Subtle Background Watermark Mandalas */}
      <FadedMandalaWatermark size={500} className="top-1/3 left-1/2 -translate-x-1/2" opacity={0.08} color="#7C4428" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sacred-leaf/10 border border-sacred-leaf/30 text-sacred-leaf text-xs font-semibold uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            <span>Interactive Sacred Culinary Explorer</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-brown-900 font-normal">
            Thalaivazhai Ilai Saapadu
          </h2>
          <p className="font-tamil text-sacred-kumkum text-base font-medium">
            தலைவாழை இலை விருந்து — பாரம்பரிய முறைப்படி இலை அலங்கரிப்பு
          </p>
          <p className="text-brown-700 text-sm sm:text-base font-light">
            In Tamil wedding tradition, presenting a multi-course royal feast on a fresh plantain leaf is a sacred geometric ritual. Explore each authentic dish with photograph, learn its ancient preparation, and visualize its sacred placement.
          </p>
        </div>

        {/* Preset Feast Package Selection Cards (No Cost Estimator, Focus on Courses & Heritage) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {FEAST_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            return (
              <button
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg)}
                className={`p-1 rounded-2xl text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-brown-900 shadow-md ring-2 ring-gold-500'
                    : 'bg-cream-50 hover:bg-cream-200 border border-brown-900/15'
                }`}
              >
                <div className={`p-4 rounded-[calc(1rem-0.25rem)] h-full flex flex-col justify-between ${
                  isSelected ? 'bg-brown-850 text-cream-50' : 'bg-cream-50 text-brown-900'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        isSelected ? 'bg-gold-500/20 text-gold-300' : 'bg-brown-900/10 text-brown-800'
                      }`}>
                        {pkg.dishCount} Courses
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-gold-400" />}
                    </div>
                    <h3 className="font-serif font-bold text-base leading-snug mb-1">
                      {pkg.name}
                    </h3>
                    <p className={`font-tamil text-xs mb-2 ${isSelected ? 'text-gold-300' : 'text-sacred-kumkum'}`}>
                      {pkg.tamilName}
                    </p>
                    <p className={`text-xs line-clamp-2 font-light ${isSelected ? 'text-cream-200/80' : 'text-brown-600'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brown-900/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gold-600">
                      {isSelected ? 'Currently Selected' : 'Click to Load'}
                    </span>
                    <span className="text-xs font-serif italic text-gold-500">&rarr;</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: Banana Leaf Canvas & Dish Showcase with Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Banana Leaf Canvas & Inspected Dish Image Card (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Banana Leaf Visual Surface */}
            <div className="bg-cream-50 p-4 sm:p-6 rounded-[2rem] border border-gold-500/30 shadow-bezel-outer space-y-4">
              <div className="flex items-center justify-between border-b border-brown-900/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sacred-leaf animate-pulse" />
                  <h3 className="font-serif text-lg font-bold text-brown-900">
                    Virtual Thalaivazhai Ilai (Live Serving Order)
                  </h3>
                </div>
                <div className="text-xs font-mono text-brown-700 bg-cream-200 px-3 py-1 rounded-full">
                  <span className="font-bold text-brown-900">{selectedDishIds.length}</span> Dishes on Leaf
                </div>
              </div>

              {/* Plantain Leaf Surface */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-[#1E3F1F] p-4 sm:p-6 shadow-inner border-2 border-[#163017]">
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, #2A5A2B 0, #2A5A2B 2px, transparent 0, transparent 16px)'
                  }}
                />
                <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1.5 bg-[#4F8B4F] rounded-full opacity-60 shadow-sm" />

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono text-cream-100 flex items-center gap-1">
                  <span>🍃 Leaf Tip (Left)</span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono text-gold-300">
                  Click any dish to view image
                </div>

                {/* Hotspots on the Leaf */}
                <div className="relative z-10 py-5 min-h-[400px] flex flex-col justify-between">
                  
                  {/* Top Row: Salt, Pickles, Poriyals & Sweets */}
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-green-200/80 mb-2">
                      Top Row: Sacred Salt, Relishes, Poriyals &amp; Sweets
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {activeDishes
                        .filter(d => ['condiment', 'vegetable', 'sweet'].includes(d.category))
                        .map((dish) => {
                          const isInspected = inspectedDish?.id === dish.id;
                          return (
                            <button
                              key={dish.id}
                              onClick={() => setInspectedDish(dish)}
                              className={`group relative px-2.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                                isInspected
                                  ? 'bg-cream-50 text-brown-900 ring-2 ring-gold-400 scale-105'
                                  : 'bg-black/40 hover:bg-black/60 text-cream-100 border border-white/20'
                              }`}
                            >
                              <span className="text-base">{dish.icon}</span>
                              <span className="font-serif text-[11px] truncate max-w-[90px] sm:max-w-[120px]">
                                {dish.name}
                              </span>
                              {dish.isHeritage1924Signature && (
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" title="1924 Signature" />
                              )}
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Center Core: Steaming Ponni Rice with Ghee, Sambar & Rasam */}
                  <div className="my-5 p-4 rounded-2xl bg-black/35 border border-white/20 backdrop-blur-sm">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-gold-300 mb-2 flex items-center justify-between">
                      <span>Center Core: Steaming Ponni Rice, Ghee, Sambar &amp; Rasam</span>
                      <span className="text-cream-200">Main Courses</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {activeDishes
                        .filter(d => ['rice', 'curry'].includes(d.category))
                        .map((dish) => {
                          const isInspected = inspectedDish?.id === dish.id;
                          return (
                            <button
                              key={dish.id}
                              onClick={() => setInspectedDish(dish)}
                              className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 transition-all text-left ${
                                isInspected
                                  ? 'bg-cream-50 text-brown-900 ring-2 ring-gold-400 scale-[1.02]'
                                  : 'bg-white/10 hover:bg-white/20 text-cream-50 border border-white/10'
                              }`}
                            >
                              <span className="text-lg">{dish.icon}</span>
                              <div className="truncate">
                                <div className="font-serif text-xs font-semibold truncate">{dish.name}</div>
                                <div className="font-tamil text-[9px] opacity-80 truncate">{dish.tamilName}</div>
                              </div>
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Bottom Row: Crisps, Vada, Thayir Sadham & Degree Kaapi */}
                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-wider text-green-200/80 mb-2">
                      Bottom Row: Crisps, Vadai, Curd Rice &amp; Filter Kaapi
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      {activeDishes
                        .filter(d => ['crisp', 'digestif'].includes(d.category))
                        .map((dish) => {
                          const isInspected = inspectedDish?.id === dish.id;
                          return (
                            <button
                              key={dish.id}
                              onClick={() => setInspectedDish(dish)}
                              className={`px-2.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                                isInspected
                                  ? 'bg-cream-50 text-brown-900 ring-2 ring-gold-400 scale-105'
                                  : 'bg-black/40 hover:bg-black/60 text-cream-100 border border-white/20'
                              }`}
                            >
                              <span className="text-base">{dish.icon}</span>
                              <span className="font-serif text-[11px] truncate max-w-[90px] sm:max-w-[120px]">
                                {dish.name}
                              </span>
                            </button>
                          );
                        })}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Currently Inspected Dish Details Card with REAL APPETIZING DISH IMAGE */}
            {inspectedDish && (
              <div className="p-5 rounded-[2rem] bg-cream-50 border border-gold-500/30 shadow-bezel-outer">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* Dish Photograph */}
                  <div className="relative w-full sm:w-36 h-36 rounded-2xl overflow-hidden border-2 border-gold-500/40 shrink-0 shadow-md">
                    <img
                      src={inspectedDish.image}
                      alt={inspectedDish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-brown-900/80 backdrop-blur-sm text-[9px] font-mono text-gold-300">
                      {inspectedDish.category}
                    </div>
                  </div>

                  {/* Dish Narrative & Description */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-serif font-bold text-brown-900 text-lg">
                        {inspectedDish.name}
                      </h4>
                      <span className="font-tamil text-sacred-kumkum text-sm font-semibold">
                        {inspectedDish.tamilName}
                      </span>
                      {inspectedDish.isHeritage1924Signature && (
                        <span className="px-2 py-0.5 rounded-full bg-gold-500/20 text-brown-900 text-[10px] font-serif font-semibold border border-gold-500/40">
                          1924 Heritage Signature
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brown-700 font-light leading-relaxed">
                      {inspectedDish.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-brown-600 border-t border-brown-900/10">
                      <span className="font-mono text-[11px]">
                        Leaf Position: <strong className="text-brown-900">{inspectedDish.leafZone}</strong>
                      </span>
                      <button
                        onClick={() => handleToggleDish(inspectedDish.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                          selectedDishIds.includes(inspectedDish.id)
                            ? 'bg-sacred-kumkum/10 text-sacred-kumkum border-sacred-kumkum/30 hover:bg-sacred-kumkum hover:text-white'
                            : 'bg-sacred-leaf text-white border-sacred-leaf'
                        }`}
                      >
                        {selectedDishIds.includes(inspectedDish.id) ? 'Remove from Leaf' : '+ Add to Leaf'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Dish Browser & Visual Photo Grid (No Cost Estimator!) (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Dish Browser & Course Tray */}
            <div className="p-6 rounded-[2rem] bg-cream-50 border border-brown-900/15 shadow-bezel-outer space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-monument tracking-widest text-brown-600 block">
                    COMPLETE 30-DISH HERITAGE TRAY
                  </span>
                  <h4 className="font-serif font-bold text-brown-900 text-lg">
                    Browse Dishes with Images
                  </h4>
                </div>
                <div className="flex items-center gap-1 bg-cream-200 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-2 py-1 rounded text-[11px] font-semibold ${
                      viewMode === 'grid' ? 'bg-brown-900 text-cream-50' : 'text-brown-700'
                    }`}
                  >
                    Photos
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-2 py-1 rounded text-[11px] font-semibold ${
                      viewMode === 'list' ? 'bg-brown-900 text-cream-50' : 'text-brown-700'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'signature', label: '1924 Signatures' },
                  { id: 'vegetable', label: 'Poriyal & Avial' },
                  { id: 'curry', label: 'Sambar & Rasam' },
                  { id: 'sweet', label: 'Payasam & Sweets' },
                  { id: 'crisp', label: 'Vada & Crisps' },
                  { id: 'digestif', label: 'Filter Kaapi & Drinks' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1 rounded-full text-[11px] transition-all ${
                      activeCategory === tab.id
                        ? 'bg-brown-900 text-cream-50 font-medium shadow-sm'
                        : 'bg-cream-200 text-brown-700 hover:bg-cream-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dish List with Images */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                  {filteredDishes.map((dish) => {
                    const isSelected = selectedDishIds.includes(dish.id);
                    const isInspected = inspectedDish.id === dish.id;
                    return (
                      <div
                        key={dish.id}
                        onClick={() => {
                          setInspectedDish(dish);
                        }}
                        className={`group relative rounded-2xl overflow-hidden border text-left cursor-pointer transition-all ${
                          isInspected
                            ? 'ring-2 ring-gold-500 shadow-md'
                            : 'border-brown-900/15 hover:border-gold-500/60'
                        }`}
                      >
                        {/* Dish Photo Thumbnail */}
                        <div className="relative h-28 w-full overflow-hidden bg-cream-200">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent" />
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleDish(dish.id);
                              }}
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md transition-transform ${
                                isSelected ? 'bg-sacred-leaf text-white' : 'bg-cream-50 text-brown-900 hover:scale-110'
                              }`}
                            >
                              {isSelected ? '✓' : '+'}
                            </button>
                          </div>
                          {dish.isHeritage1924Signature && (
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[8px] font-bold bg-gold-500 text-brown-950">
                              1924
                            </span>
                          )}
                        </div>

                        {/* Text info below photo */}
                        <div className="p-2.5 bg-cream-50">
                          <div className="font-serif text-xs font-bold text-brown-900 truncate">
                            {dish.name}
                          </div>
                          <div className="font-tamil text-[10px] text-sacred-kumkum truncate">
                            {dish.tamilName}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="max-h-[460px] overflow-y-auto pr-1 space-y-2">
                  {filteredDishes.map((dish) => {
                    const isSelected = selectedDishIds.includes(dish.id);
                    return (
                      <div
                        key={dish.id}
                        onClick={() => setInspectedDish(dish)}
                        className={`p-2 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-cream-100 border-sacred-leaf/40 text-brown-900'
                            : 'bg-cream-50/50 border-brown-900/10 text-brown-600 hover:border-gold-500'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="w-10 h-10 rounded-lg object-cover border border-brown-900/10 shrink-0"
                          />
                          <div>
                            <div className="font-semibold text-brown-900">{dish.name}</div>
                            <div className="font-tamil text-[10px] text-sacred-kumkum">{dish.tamilName}</div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggleDish(dish.id);
                          }}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            isSelected ? 'bg-sacred-leaf text-white' : 'bg-cream-200 text-brown-600'
                          }`}
                        >
                          {isSelected ? '✓' : '+'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons: Export & Consultation (No Prices!) */}
              <div className="pt-3 border-t border-brown-900/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleExportBanquet}
                  className="flex-1 py-3 rounded-full bg-cream-200 text-brown-900 text-xs font-semibold tracking-wider hover:bg-gold-300 transition-colors flex items-center justify-center gap-2 shadow-sm border border-brown-900/15"
                >
                  <Download className="w-3.5 h-3.5" />
                  {exportSuccess ? 'Menu Exported!' : 'Export Feast Card'}
                </button>
                <button
                  onClick={() => {
                    if (onOpenBookingWithMenu) {
                      onOpenBookingWithMenu({
                        packageName: selectedPackageId === 'custom' ? 'Custom 28-Item Banquet' : selectedPackageId,
                        guestCount: 500
                      });
                    }
                  }}
                  className="flex-1 py-3 rounded-full bg-brown-900 text-cream-50 text-xs font-semibold tracking-wider hover:bg-brown-850 transition-colors flex items-center justify-center gap-2 shadow-md border border-gold-500/40"
                >
                  Schedule VIP Tasting &rarr;
                </button>
              </div>

            </div>

            {/* Centenary Banquet Service Standards Card */}
            <div className="p-5 rounded-[2rem] bg-cream-100 border border-gold-500/25 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-600" />
                <h4 className="font-serif font-bold text-brown-900 text-sm">
                  The Sundaram 1924 Feast Protocol
                </h4>
              </div>
              <ul className="text-xs text-brown-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sacred-leaf shrink-0" />
                  <span>Fresh daily plantain leaves cut from Cauvery Delta groves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sacred-leaf shrink-0" />
                  <span>Simmered in Eyya Chombu (pure tin-coated brass) vessels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sacred-leaf shrink-0" />
                  <span>100% Native A2 Desi Cow Ghee ladled steaming hot</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
