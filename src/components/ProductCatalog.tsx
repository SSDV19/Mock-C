import React, { useState } from 'react';
import { CATALOG_PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { CatalogProduct, TeeColor } from '../types';

interface ProductCatalogProps {
  onSelectProductFor3D: (product: CatalogProduct, color: TeeColor) => void;
  onQuickAddToCart: (product: CatalogProduct, color: TeeColor) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductFor3D,
  onQuickAddToCart,
}) => {
  const [filterGsm, setFilterGsm] = useState<number | 'all'>('all');

  const filteredProducts = filterGsm === 'all'
    ? CATALOG_PRODUCTS
    : CATALOG_PRODUCTS.filter((p) => p.gsm === filterGsm);

  return (
    <section id="collection" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-white/10">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#e65c00] block mb-2">
            Catalog / Permanent Issue
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white">
            The Architectural Series
          </h2>
        </div>

        {/* Filter by Fabric Density */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider mr-2 hidden sm:inline">
            Fabric Weight:
          </span>
          <button
            onClick={() => setFilterGsm('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              filterGsm === 'all'
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
            }`}
          >
            All Weights
          </button>
          {[320, 340, 380].map((gsm) => (
            <button
              key={gsm}
              onClick={() => setFilterGsm(gsm)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                filterGsm === gsm
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/5 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {gsm} GSM
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProductFor3D={onSelectProductFor3D}
            onQuickAddToCart={onQuickAddToCart}
          />
        ))}
      </div>

      {/* Technical Footnote Banner */}
      <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-sm text-white">
            Ω
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium">Bespoke Production Transparency</h4>
            <p className="text-[11px] text-white/50 mt-0.5">Each piece is individually carded, garment-dyed, and tagged with its limited edition release number.</p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
          300 UNITS PER SILHOUETTE
        </span>
      </div>
    </section>
  );
};
