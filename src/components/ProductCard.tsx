import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Check, ArrowUpRight } from 'lucide-react';
import { CatalogProduct, TeeColor } from '../types';

interface ProductCardProps {
  product: CatalogProduct;
  onSelectProductFor3D: (product: CatalogProduct, color: TeeColor) => void;
  onQuickAddToCart: (product: CatalogProduct, color: TeeColor) => void;
  isFeatured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProductFor3D,
  onQuickAddToCart,
  isFeatured = false,
}) => {
  const [selectedColor, setSelectedColor] = useState<TeeColor>(product.defaultColor);
  const [isHovered, setIsHovered] = useState(false);
  const [addedEffect, setAddedEffect] = useState(false);

  const handleColorClick = (e: React.MouseEvent, color: TeeColor) => {
    e.stopPropagation();
    setSelectedColor(color);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAddToCart(product, selectedColor);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1600);
  };

  return (
    <div 
      className={`group flex flex-col justify-between transition-all duration-500 select-none ${
        isFeatured ? 'lg:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Well - Large Editorial Photography */}
      <div 
        className="relative w-full aspect-[3/4] overflow-hidden bg-[#141416] border border-white/10 rounded-2xl cursor-pointer"
        onClick={() => onSelectProductFor3D(product, selectedColor)}
      >
        {/* Primary Studio Plinth Shot */}
        <img 
          src={selectedColor.image} 
          alt={`${product.title} in ${selectedColor.name}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />

        {/* Secondary Editorial On-Model Shot (Hover Reveal) */}
        <img 
          src={product.secondaryImage} 
          alt={`${product.title} editorial on model`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            isHovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />

        {/* Top Floating Telemetry Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono uppercase tracking-widest text-white/90">
            {product.gsm} GSM
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono uppercase tracking-widest text-white/90">
            {product.silhouette}
          </span>
        </div>

        {/* Hover Action Overlay */}
        <div className={`absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProductFor3D(product, selectedColor);
            }}
            aria-label={`Open 3D bespoke lab for ${product.title}`}
            className="flex-1 py-2.5 px-3 rounded-full bg-white/90 backdrop-blur-md text-black hover:bg-white text-[11px] font-mono uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 shadow-lg active-press"
          >
            <Sparkles className="w-3 h-3 text-[#e65c00]" />
            Bespoke 3D
          </button>
          <button
            onClick={handleAdd}
            aria-label={`Quick add ${product.title} to bag`}
            className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white hover:bg-black flex items-center justify-center transition-all shadow-lg active-press"
          >
            {addedEffect ? <Check className="w-4 h-4 text-emerald-400" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Editorial Metadata Footer */}
      <div className="pt-4 pb-2 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/45 block mb-0.5">
              {product.subtitle}
            </span>
            <h3 className="font-editorial text-lg sm:text-xl font-normal text-white">
              {product.title}
            </h3>
          </div>
          <span className="font-mono text-sm sm:text-base font-semibold text-white">
            ${product.price}
          </span>
        </div>

        {/* Colorway Swatches Bar */}
        <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
          <div className="flex items-center gap-2">
            {product.availableColors.map((col) => {
              const isSelected = selectedColor.id === col.id;
              return (
                <button
                  key={col.id}
                  onClick={(e) => handleColorClick(e, col)}
                  title={col.name}
                  aria-label={`Select colorway ${col.name} for ${product.title}`}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    isSelected
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0c] scale-110'
                      : 'border-white/25 opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                  style={{ backgroundColor: col.hex }}
                />
              );
            })}
          </div>

          <span className="text-[10px] font-mono text-white/45 uppercase tracking-wider">
            {selectedColor.name}
          </span>
        </div>
      </div>
    </div>
  );
};
