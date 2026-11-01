import React, { useState } from 'react';
import { 
  Type, 
  Image as ImageIcon, 
  Sliders, 
  Trash2, 
  Upload, 
  Check, 
  ShoppingBag,
  RotateCcw,
  Ruler,
  Info
} from 'lucide-react';
import { TeeColor, TeeSize, TeeView, CustomizationState, GraphicLayer } from '../types';
import { TEE_COLORS } from '../data/products';

interface TeeCustomizerProps {
  customState: CustomizationState;
  onChangeColor: (color: TeeColor) => void;
  onChangeSize: (size: TeeSize) => void;
  onChangeView: (view: TeeView) => void;
  onUpdateLayer: (view: TeeView, updates: Partial<GraphicLayer>) => void;
  onClearLayer: (view: TeeView) => void;
  onAddToCart: () => void;
}

const PRINT_COLORS = [
  { name: 'Pure Chalk', hex: '#ffffff' },
  { name: 'Raw Bone', hex: '#eae7df' },
  { name: 'Onyx Black', hex: '#111111' },
  { name: 'Kiln Orange', hex: '#e65c00' },
  { name: 'Vermilion', hex: '#dc2626' },
  { name: 'Silver Foil', hex: '#94a3b8' },
];

const ARTWORK_PRESETS = [
  {
    name: 'Atelier Monogram',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" stroke="white" stroke-width="2" fill="none"/><text x="50" y="58" font-size="28" font-family="serif" text-anchor="middle" fill="white">NA</text><text x="50" y="78" font-size="8" font-family="sans-serif" text-anchor="middle" fill="white" letter-spacing="3">PARIS</text></svg>',
  },
  {
    name: 'Brutalist Grid',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 100 100"><rect x="15" y="15" width="70" height="70" stroke="white" stroke-width="2" fill="none"/><line x1="15" y1="50" x2="85" y2="50" stroke="white" stroke-width="1.5"/><line x1="50" y1="15" x2="50" y2="85" stroke="white" stroke-width="1.5"/><text x="50" y="93" font-size="7" font-family="monospace" text-anchor="middle" fill="white">SPEC 340-GSM</text></svg>',
  },
  {
    name: 'Tokyo Kanji Seal',
    src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 100 100"><rect x="20" y="20" width="60" height="60" rx="6" stroke="white" stroke-width="3" fill="none"/><text x="50" y="62" font-size="34" font-family="sans-serif" text-anchor="middle" fill="white">黒</text></svg>',
  },
];

const SIZE_SPECS: Record<TeeSize, { chest: string; length: string }> = {
  S: { chest: '54 cm', length: '71 cm' },
  M: { chest: '57 cm', length: '73 cm' },
  L: { chest: '60 cm', length: '75 cm' },
  XL: { chest: '63 cm', length: '77 cm' },
  XXL: { chest: '66 cm', length: '79 cm' },
};

export const TeeCustomizer: React.FC<TeeCustomizerProps> = ({
  customState,
  onChangeColor,
  onChangeSize,
  onChangeView,
  onUpdateLayer,
  onClearLayer,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'artwork' | 'transform'>('text');
  const currentLayer = customState.layers[customState.activeView];

  const hasCustomization = Boolean(
    customState.layers.front.text ||
    customState.layers.front.imageSrc ||
    customState.layers.back.text ||
    customState.layers.back.imageSrc ||
    customState.layers.left.text ||
    customState.layers.left.imageSrc ||
    customState.layers.right.text ||
    customState.layers.right.imageSrc
  );
  const totalPrice = customState.basePrice + (hasCustomization ? customState.customizationFee : 0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      onUpdateLayer(customState.activeView, {
        imageSrc: result,
        imageName: file.name,
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full rounded-[2.5rem] bg-[#111114] border border-white/10 double-bezel p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
      <div>
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[#e65c00] mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e65c00]" />
              Digital Bespoke Workbench
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
              Garment Configurator
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/45 block">
              {hasCustomization ? 'Base $145 + Print $20' : 'Pure Base'}
            </span>
            <span className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
              ${totalPrice}
            </span>
          </div>
        </div>

        {/* 1. Target Canvas Area Tabs */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
              Target Canvas Zone
            </label>
            <span className="text-[10px] font-mono uppercase text-white/40">
              Active: {customState.activeView.toUpperCase()}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
            {(['front', 'back', 'left', 'right'] as TeeView[]).map((view) => (
              <button
                key={view}
                onClick={() => onChangeView(view)}
                aria-label={`Target ${view} canvas zone`}
                className={`py-2 text-[11px] font-mono uppercase tracking-wider rounded-xl transition-all ${
                  customState.activeView === view
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {view === 'left' ? 'L Sleeve' : view === 'right' ? 'R Sleeve' : view}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Garment Colorway */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
              Garment Colorway
            </label>
            <span className="font-mono text-xs text-white/80">{customState.color.name}</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {TEE_COLORS.map((col) => {
              const isSelected = customState.color.id === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => onChangeColor(col)}
                  aria-label={`Select garment colorway ${col.name}`}
                  className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-white bg-white/10'
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <span 
                    className="w-6 h-6 rounded-full border border-white/20 shadow-inner flex items-center justify-center" 
                    style={{ backgroundColor: col.hex }}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white mix-blend-difference" />}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-tighter text-white/60 truncate max-w-full">
                    {col.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Architectural Sizing with Dimensions */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">
              Architectural Sizing
            </label>
            <span className="font-mono text-[11px] text-white/60 flex items-center gap-1">
              <Ruler className="w-3 h-3 text-[#e65c00]" />
              Chest: {SIZE_SPECS[customState.size].chest} · Length: {SIZE_SPECS[customState.size].length}
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {(['S', 'M', 'L', 'XL', 'XXL'] as TeeSize[]).map((size) => {
              const isSelected = customState.size === size;
              return (
                <button
                  key={size}
                  onClick={() => onChangeSize(size)}
                  aria-label={`Select size ${size}`}
                  className={`py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    isSelected
                      ? 'bg-white text-black font-semibold shadow'
                      : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Bespoke Tooling Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
            <button
              onClick={() => setActiveTab('text')}
              aria-label="Typography controls"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'text'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              Typography
            </button>
            <button
              onClick={() => setActiveTab('artwork')}
              aria-label="Artwork controls"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'artwork'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Artwork
            </button>
            <button
              onClick={() => setActiveTab('transform')}
              aria-label="Position and scale controls"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'transform'
                  ? 'bg-white/15 text-white font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Position & Scale
            </button>
          </div>

          {/* TAB 1: Typography */}
          {activeTab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1.5">
                  Custom Lettering / Motto ({customState.activeView.toUpperCase()} VIEW)
                </label>
                <input
                  type="text"
                  value={currentLayer.text}
                  onChange={(e) => onUpdateLayer(customState.activeView, { text: e.target.value })}
                  placeholder="e.g. MONOLITH ARCHIVE"
                  maxLength={30}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white font-mono"
                />
              </div>

              {/* Typeface Family */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1.5">
                  Typeface Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['serif', 'sans', 'mono'] as const).map((font) => (
                    <button
                      key={font}
                      onClick={() => onUpdateLayer(customState.activeView, { textFont: font })}
                      className={`py-2 rounded-xl text-xs capitalize border transition-all ${
                        currentLayer.textFont === font
                          ? 'bg-white text-black font-semibold border-white'
                          : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {font === 'serif' ? 'Editorial Serif' : font === 'sans' ? 'Modern Sans' : 'Technical Mono'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screenprint Pigment */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                    Screenprint Pigment
                  </label>
                  <span className="text-[10px] font-mono text-white/60">
                    {PRINT_COLORS.find(c => c.hex === currentLayer.textColor)?.name || 'Custom'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {PRINT_COLORS.map((pc) => (
                    <button
                      key={pc.hex}
                      onClick={() => onUpdateLayer(customState.activeView, { textColor: pc.hex })}
                      title={pc.name}
                      aria-label={`Select print color ${pc.name}`}
                      className={`w-7 h-7 rounded-full border transition-all ${
                        currentLayer.textColor === pc.hex
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110'
                          : 'opacity-70 hover:opacity-100 border-white/20'
                      }`}
                      style={{ backgroundColor: pc.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Font Size Slider */}
              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                  <span>Font Scale</span>
                  <span>{currentLayer.textSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="44"
                  value={currentLayer.textSize}
                  onChange={(e) => onUpdateLayer(customState.activeView, { textSize: Number(e.target.value) })}
                  aria-label="Font Scale"
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Artwork */}
          {activeTab === 'artwork' && (
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1.5">
                  Upload Custom Artwork (PNG / SVG)
                </label>
                <label className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-white/20 hover:border-white/50 cursor-pointer bg-white/[0.02] transition-colors">
                  <Upload className="w-5 h-5 text-white/60 mb-1" />
                  <span className="text-xs text-white/80">Choose local image file</span>
                  <span className="text-[10px] font-mono text-white/40 mt-0.5">Transparent high-resolution PNG recommended</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1.5">
                  Or Apply Atelier Monogram Presets
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {ARTWORK_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => onUpdateLayer(customState.activeView, {
                        imageSrc: preset.src,
                        imageName: preset.name,
                      })}
                      aria-label={`Apply preset ${preset.name}`}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 flex flex-col items-center gap-1.5 transition-all text-center group"
                    >
                      <img src={preset.src} alt={preset.name} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
                      <span className="text-[9px] font-mono uppercase tracking-tighter text-white/60 truncate w-full">
                        {preset.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {(currentLayer.imageSrc || currentLayer.text) && (
                <button
                  onClick={() => onClearLayer(customState.activeView)}
                  aria-label="Remove artwork and text on this view"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-mono text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove Layer Graphics
                </button>
              )}
            </div>
          )}

          {/* TAB 3: Transform & Coordinates */}
          {activeTab === 'transform' && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                  <span>Horizontal Axis (X)</span>
                  <span>{currentLayer.posX}%</span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  value={currentLayer.posX}
                  onChange={(e) => onUpdateLayer(customState.activeView, { posX: Number(e.target.value) })}
                  aria-label="Horizontal Position X"
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                  <span>Vertical Axis (Y)</span>
                  <span>{currentLayer.posY}%</span>
                </div>
                <input
                  type="range"
                  min="-40"
                  max="40"
                  value={currentLayer.posY}
                  onChange={(e) => onUpdateLayer(customState.activeView, { posY: Number(e.target.value) })}
                  aria-label="Vertical Position Y"
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                  <span>Scale Multiplier</span>
                  <span>{currentLayer.scale.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.8"
                  step="0.1"
                  value={currentLayer.scale}
                  onChange={(e) => onUpdateLayer(customState.activeView, { scale: Number(e.target.value) })}
                  aria-label="Scale Multiplier"
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono uppercase text-white/50 mb-1">
                  <span>Rotation Angle</span>
                  <span>{currentLayer.rotation}°</span>
                </div>
                <input
                  type="range"
                  min="-180"
                  max="180"
                  value={currentLayer.rotation}
                  onChange={(e) => onUpdateLayer(customState.activeView, { rotation: Number(e.target.value) })}
                  aria-label="Rotation Angle"
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <button
                onClick={() => onUpdateLayer(customState.activeView, { posX: 0, posY: 0, scale: 1, rotation: 0 })}
                aria-label="Reset graphic placement to center"
                className="w-full py-2 rounded-lg text-[10px] font-mono uppercase text-white/50 hover:text-white flex items-center justify-center gap-1.5 border border-white/5 hover:border-white/20 transition-all"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Placement Coordinates
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 5. Add To Bag Action */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={onAddToCart}
          className="w-full group relative flex items-center justify-between px-6 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#eae7df] transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] active-press"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-black" />
            <span>Add Bespoke Piece To Bag</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm">${totalPrice}</span>
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-mono group-hover:scale-110 transition-transform">
              →
            </div>
          </div>
        </button>
        <p className="text-[10px] font-mono text-center text-white/40 mt-2.5">
          Complimentary Insured Courier · Hand-Numbered Tokyo Atelier Certificate
        </p>
      </div>
    </div>
  );
};
