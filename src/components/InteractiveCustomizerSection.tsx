import React from 'react';
import { InteractiveTeeViewer } from './InteractiveTeeViewer';
import { TeeCustomizer } from './TeeCustomizer';
import { CustomizationState, TeeColor, TeeSize, TeeView, GraphicLayer } from '../types';

interface InteractiveCustomizerSectionProps {
  customState: CustomizationState;
  onChangeColor: (color: TeeColor) => void;
  onChangeSize: (size: TeeSize) => void;
  onChangeView: (view: TeeView) => void;
  onUpdateLayer: (view: TeeView, updates: Partial<GraphicLayer>) => void;
  onClearLayer: (view: TeeView) => void;
  onAddToCart: () => void;
}

export const InteractiveCustomizerSection: React.FC<InteractiveCustomizerSectionProps> = ({
  customState,
  onChangeColor,
  onChangeSize,
  onChangeView,
  onUpdateLayer,
  onClearLayer,
  onAddToCart,
}) => {
  return (
    <section id="customizer" className="py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#e65c00] block mb-2">
          Laboratory / Bespoke Studio
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
          Customize Your Tee in 3D.
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed font-normal max-w-lg mx-auto">
          Rotate in real-time WebGL 3D, apply custom archival screenprints, adjust placement, and craft your custom heavyweight silhouette.
        </p>
      </div>

      {/* Grid: 3D Viewer & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 3D WebGL Viewer */}
        <div id="interactive-viewer" className="lg:col-span-7 w-full sticky top-24">
          <InteractiveTeeViewer
            customState={customState}
            onViewChange={onChangeView}
          />
        </div>

        {/* Right Column: Customizer Controls */}
        <div className="lg:col-span-5 w-full">
          <TeeCustomizer
            customState={customState}
            onChangeColor={onChangeColor}
            onChangeSize={onChangeSize}
            onChangeView={onChangeView}
            onUpdateLayer={onUpdateLayer}
            onClearLayer={onClearLayer}
            onAddToCart={onAddToCart}
          />
        </div>
      </div>
    </section>
  );
};
