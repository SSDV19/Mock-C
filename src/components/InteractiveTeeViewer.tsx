import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { 
  Rotate3d, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Eye, 
  Move, 
  Sparkles,
  Layers,
  Compass
} from 'lucide-react';
import { TeeView, CustomizationState } from '../types';

interface InteractiveTeeViewerProps {
  customState: CustomizationState;
  onViewChange: (view: TeeView) => void;
}

export const InteractiveTeeViewer: React.FC<InteractiveTeeViewerProps> = ({
  customState,
  onViewChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'precision'>('3d');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Rotation angles for 3D Orbit
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });
  const pointerStartRef = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const textureCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const dynamicTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const bumpTextureRef = useRef<THREE.CanvasTexture | null>(null);
  const materialsRef = useRef<{ 
    bodyMat?: THREE.MeshStandardMaterial; 
    collarMat?: THREE.MeshStandardMaterial;
    cuffMat?: THREE.MeshStandardMaterial;
  }>({});

  // Active view rotation targets
  const viewAngles: Record<TeeView, { x: number; y: number }> = {
    front: { x: 0, y: 0 },
    back: { x: 0, y: Math.PI },
    left: { x: 0, y: -Math.PI / 2 },
    right: { x: 0, y: Math.PI / 2 },
  };

  // Sync view selection to target rotation
  useEffect(() => {
    const target = viewAngles[customState.activeView];
    targetRotationRef.current = { ...target };
  }, [customState.activeView]);

  // Create procedural bump map for heavy cotton weave
  const createBumpTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 512, 512);

    // Micro slub yarn weave texture
    for (let y = 0; y < 512; y += 4) {
      for (let x = 0; x < 512; x += 4) {
        const val = Math.floor(115 + Math.random() * 25);
        ctx.fillStyle = `rgb(${val},${val},${val})`;
        ctx.fillRect(x, y, 3, 3);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
    return texture;
  };

  // Create or update dynamic texture from customization layers
  const updateTexture = () => {
    if (!textureCanvasRef.current) {
      textureCanvasRef.current = document.createElement('canvas');
      textureCanvasRef.current.width = 1024;
      textureCanvasRef.current.height = 1024;
    }
    const canvas = textureCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Base cloth color
    ctx.fillStyle = customState.color.clothHex;
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle knit slub yarn lines
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    for (let y = 0; y < 1024; y += 4) {
      ctx.fillRect(0, y, 1024, 2);
    }
    ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
    for (let x = 0; x < 1024; x += 6) {
      ctx.fillRect(x, 0, 3, 1024);
    }

    // Draw Front Layer - centered at front chest (x = 512, y = 440)
    const front = customState.layers.front;
    if (front.text || front.imageSrc) {
      ctx.save();
      const centerX = 512 + (front.posX / 100) * 180;
      const centerY = 440 + (front.posY / 100) * 180;
      ctx.translate(centerX, centerY);
      ctx.rotate((front.rotation * Math.PI) / 180);
      ctx.scale(front.scale, front.scale);

      if (front.imageSrc) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = front.imageSrc;
        if (img.complete) {
          ctx.drawImage(img, -65, -65, 130, 130);
        } else {
          img.onload = () => updateTexture();
        }
      }

      if (front.text) {
        ctx.fillStyle = front.textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const fontName = front.textFont === 'serif' ? 'Playfair Display' : front.textFont === 'mono' ? 'JetBrains Mono' : 'Plus Jakarta Sans';
        ctx.font = `600 ${Math.round(front.textSize * 1.9)}px "${fontName}", sans-serif`;
        ctx.fillText(front.text, 0, front.imageSrc ? 75 : 0);
      }

      ctx.restore();
    }

    // Draw Back Layer - centered at back (x = 0 and x = 1024)
    const back = customState.layers.back;
    if (back.text || back.imageSrc) {
      [0, 1024].forEach((baseX) => {
        ctx.save();
        const centerX = baseX + (back.posX / 100) * 180;
        const centerY = 440 + (back.posY / 100) * 180;
        ctx.translate(centerX, centerY);
        ctx.rotate((back.rotation * Math.PI) / 180);
        ctx.scale(back.scale, back.scale);

        if (back.imageSrc) {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.src = back.imageSrc;
          if (img.complete) {
            ctx.drawImage(img, -65, -65, 130, 130);
          } else {
            img.onload = () => updateTexture();
          }
        }

        if (back.text) {
          ctx.fillStyle = back.textColor;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const fontName = back.textFont === 'serif' ? 'Playfair Display' : back.textFont === 'mono' ? 'JetBrains Mono' : 'Plus Jakarta Sans';
          ctx.font = `600 ${Math.round(back.textSize * 1.9)}px "${fontName}", sans-serif`;
          ctx.fillText(back.text, 0, back.imageSrc ? 75 : 0);
        }

        ctx.restore();
      });
    }

    if (dynamicTextureRef.current) {
      dynamicTextureRef.current.needsUpdate = true;
    }
  };

  useEffect(() => {
    updateTexture();
    if (materialsRef.current.bodyMat) {
      materialsRef.current.bodyMat.color.set(customState.color.clothHex);
    }
    if (materialsRef.current.collarMat) {
      materialsRef.current.collarMat.color.set(customState.color.clothHex).multiplyScalar(0.9);
    }
    if (materialsRef.current.cuffMat) {
      materialsRef.current.cuffMat.color.set(customState.color.clothHex).multiplyScalar(0.95);
    }
  }, [customState]);

  // Three.js Scene Setup & Render Loop
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;

    const width = container.clientWidth;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.05, 6.4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    rendererRef.current = renderer;

    // Atmospheric Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    // Warm high-fashion key light
    const keyLight = new THREE.DirectionalLight(0xfffaf0, 2.4);
    keyLight.position.set(2.8, 3.8, 4.2);
    scene.add(keyLight);

    // Cool studio fill light
    const fillLight = new THREE.DirectionalLight(0xdbeafe, 1.4);
    fillLight.position.set(-3.2, 1.8, 2.8);
    scene.add(fillLight);

    // Sharp rim / backlight to sculpt silhouette edges against dark void
    const rimLight = new THREE.DirectionalLight(0xffffff, 3.2);
    rimLight.position.set(0, 3.5, -4.5);
    scene.add(rimLight);

    // Soft upward floor bounce
    const floorBounce = new THREE.DirectionalLight(0xf1f5f9, 0.9);
    floorBounce.position.set(0, -3.8, 1.8);
    scene.add(floorBounce);

    // Procedural Bump Map
    const bumpMap = createBumpTexture();
    bumpTextureRef.current = bumpMap;

    // Dynamic Cloth Texture
    updateTexture();
    const texture = new THREE.CanvasTexture(textureCanvasRef.current!);
    texture.colorSpace = THREE.SRGBColorSpace;
    dynamicTextureRef.current = texture;

    // Garment Group
    const garmentGroup = new THREE.Group();
    meshGroupRef.current = garmentGroup;

    // Garment Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(customState.color.clothHex),
      roughness: 0.72,
      metalness: 0.06,
      map: texture,
      bumpMap: bumpMap || undefined,
      bumpScale: 0.025,
      side: THREE.DoubleSide,
    });
    materialsRef.current.bodyMat = bodyMat;

    const collarMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(customState.color.clothHex).multiplyScalar(0.9),
      roughness: 0.85,
      metalness: 0.03,
      bumpMap: bumpMap || undefined,
      bumpScale: 0.04,
      side: THREE.DoubleSide,
    });
    materialsRef.current.collarMat = collarMat;

    const cuffMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(customState.color.clothHex).multiplyScalar(0.95),
      roughness: 0.8,
      metalness: 0.04,
      side: THREE.DoubleSide,
    });
    materialsRef.current.cuffMat = cuffMat;

    // 1. Torso Geometry: Sculpted boxy heavyweight drape with subtle chest curvature
    const torsoGeo = new THREE.CylinderGeometry(1.02, 1.14, 2.15, 48, 32, true);
    torsoGeo.scale(1.18, 1.0, 0.62);
    const torsoMesh = new THREE.Mesh(torsoGeo, bodyMat);
    torsoMesh.position.y = -0.12;
    garmentGroup.add(torsoMesh);

    // 2. Ribbed High-Density Crew Mockneck Collar
    const collarGeo = new THREE.TorusGeometry(0.46, 0.08, 24, 64);
    collarGeo.scale(1.0, 0.62, 0.45);
    collarGeo.rotateX(Math.PI / 2);
    const collarMesh = new THREE.Mesh(collarGeo, collarMat);
    collarMesh.position.set(0, 0.95, 0);
    garmentGroup.add(collarMesh);

    // 3. Drop Shoulder Sculptural Sleeves
    // Left Sleeve
    const sleeveLeftGeo = new THREE.CylinderGeometry(0.40, 0.45, 1.12, 36, 16, true);
    sleeveLeftGeo.rotateZ(Math.PI / 3.4);
    sleeveLeftGeo.scale(1.0, 1.0, 0.68);
    const sleeveLeftMesh = new THREE.Mesh(sleeveLeftGeo, bodyMat);
    sleeveLeftMesh.position.set(-1.38, 0.46, 0);
    garmentGroup.add(sleeveLeftMesh);

    // Left Sleeve Cuff Rim
    const cuffLeftGeo = new THREE.TorusGeometry(0.45, 0.03, 16, 36);
    cuffLeftGeo.rotateZ(Math.PI / 3.4);
    cuffLeftGeo.scale(1.0, 1.0, 0.68);
    const cuffLeftMesh = new THREE.Mesh(cuffLeftGeo, cuffMat);
    cuffLeftMesh.position.set(-1.86, 0.17, 0);
    garmentGroup.add(cuffLeftMesh);

    // Right Sleeve
    const sleeveRightGeo = new THREE.CylinderGeometry(0.40, 0.45, 1.12, 36, 16, true);
    sleeveRightGeo.rotateZ(-Math.PI / 3.4);
    sleeveRightGeo.scale(1.0, 1.0, 0.68);
    const sleeveRightMesh = new THREE.Mesh(sleeveRightGeo, bodyMat);
    sleeveRightMesh.position.set(1.38, 0.46, 0);
    garmentGroup.add(sleeveRightMesh);

    // Right Sleeve Cuff Rim
    const cuffRightGeo = new THREE.TorusGeometry(0.45, 0.03, 16, 36);
    cuffRightGeo.rotateZ(-Math.PI / 3.4);
    cuffRightGeo.scale(1.0, 1.0, 0.68);
    const cuffRightMesh = new THREE.Mesh(cuffRightGeo, cuffMat);
    cuffRightMesh.position.set(1.86, 0.17, 0);
    garmentGroup.add(cuffRightMesh);

    // 4. Bottom Hem Binding Ring
    const hemGeo = new THREE.TorusGeometry(1.14, 0.035, 16, 48);
    hemGeo.scale(1.18, 0.62, 0.45);
    hemGeo.rotateX(Math.PI / 2);
    const hemMesh = new THREE.Mesh(hemGeo, cuffMat);
    hemMesh.position.set(0, -1.2, 0);
    garmentGroup.add(hemMesh);

    // 5. Studio Pedestal Soft Shadow Disc
    const shadowGeo = new THREE.CircleGeometry(1.5, 48);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -1.45;
    garmentGroup.add(shadowMesh);

    scene.add(garmentGroup);

    // Render loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth rotational damping
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.08;
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.08;

      if (garmentGroup) {
        // Natural subtle floating breathing movement
        const floatOffset = Math.sin(Date.now() * 0.0018) * 0.03;
        garmentGroup.position.y = floatOffset;
        garmentGroup.rotation.y = rotationRef.current.y;
        garmentGroup.rotation.x = rotationRef.current.x;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 550;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      torsoGeo.dispose();
      collarGeo.dispose();
      sleeveLeftGeo.dispose();
      sleeveRightGeo.dispose();
      cuffLeftGeo.dispose();
      cuffRightGeo.dispose();
      hemGeo.dispose();
      shadowGeo.dispose();
      bodyMat.dispose();
      collarMat.dispose();
      cuffMat.dispose();
      if (bumpMap) bumpMap.dispose();
    };
  }, []);

  // Pointer Drag Interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - pointerStartRef.current.x) * 0.008;
    const deltaY = (e.clientY - pointerStartRef.current.y) * 0.008;

    targetRotationRef.current.y += deltaX;
    targetRotationRef.current.x = Math.max(-0.35, Math.min(0.35, targetRotationRef.current.x + deltaY));

    pointerStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Zoom Handler
  const handleZoom = (delta: number) => {
    const nextZoom = Math.max(0.7, Math.min(1.5, zoomLevel + delta));
    setZoomLevel(nextZoom);
    if (cameraRef.current) {
      cameraRef.current.position.z = 6.4 / nextZoom;
    }
  };

  // Reset View
  const handleReset = () => {
    setZoomLevel(1);
    targetRotationRef.current = { x: 0, y: 0 };
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 0.05, 6.4);
    }
    onViewChange('front');
  };

  const currentLayer = customState.layers[customState.activeView];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[640px] rounded-[2.5rem] bg-gradient-to-b from-[#141418] to-[#09090c] border border-white/10 double-bezel overflow-hidden flex flex-col justify-between p-4 sm:p-6 select-none touch-none"
    >
      {/* Top Floating Control Bar */}
      <div className="flex items-center justify-between gap-3 relative z-20">
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="p-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1 backdrop-blur-md">
            <button
              onClick={() => setViewMode('3d')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                viewMode === '3d'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Rotate3d className="w-3.5 h-3.5" />
                3D WebGL Orbit
              </span>
            </button>
            <button
              onClick={() => setViewMode('precision')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wider transition-all ${
                viewMode === 'precision'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Tactile 2D Studio
              </span>
            </button>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            340 GSM Mesh Active
          </span>
        </div>

        {/* Zoom & Reset Toolbar */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => handleZoom(0.15)}
            title="Zoom In"
            aria-label="Zoom in"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => handleZoom(-0.15)}
            title="Zoom Out"
            aria-label="Zoom out"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleReset}
            title="Reset View"
            aria-label="Reset camera and rotation angle"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div 
        className="relative flex-1 w-full flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Hint banner before first interaction */}
        {!hasInteracted && viewMode === '3d' && (
          <div className="absolute top-4 pointer-events-none z-10 animate-bounce flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white/90 shadow-lg">
            <Move className="w-3 h-3 text-[#e65c00]" />
            Drag to Rotate 360°
          </div>
        )}

        {/* 3D WebGL Canvas */}
        <canvas 
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            viewMode === '3d' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        />

        {/* Tactile 2D Precision Studio Overlay Mode */}
        {viewMode === 'precision' && (
          <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[3/4] flex items-center justify-center">
              <img 
                src={customState.color.image} 
                alt={customState.color.name}
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] pointer-events-none select-none rounded-2xl"
              />

              {/* Live Interactive Graphic Placement Box */}
              <div 
                className="absolute pointer-events-none transition-transform duration-100"
                style={{
                  top: `${42 + currentLayer.posY * 0.4}%`,
                  left: `${50 + currentLayer.posX * 0.4}%`,
                  transform: `translate(-50%, -50%) rotate(${currentLayer.rotation}deg) scale(${currentLayer.scale})`,
                }}
              >
                <div className="border border-dashed border-white/50 p-3 sm:p-4 rounded-xl bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center shadow-xl">
                  {currentLayer.imageSrc && (
                    <img 
                      src={currentLayer.imageSrc} 
                      alt="Custom artwork" 
                      className="max-h-20 sm:max-h-24 max-w-24 sm:max-w-28 object-contain mb-1.5 filter drop-shadow"
                    />
                  )}
                  {currentLayer.text && (
                    <span 
                      className="font-bold tracking-tight text-center whitespace-nowrap block"
                      style={{
                        color: currentLayer.textColor,
                        fontSize: `${currentLayer.textSize}px`,
                        fontFamily: currentLayer.textFont === 'serif' ? 'Playfair Display' : currentLayer.textFont === 'mono' ? 'JetBrains Mono' : 'Plus Jakarta Sans',
                      }}
                    >
                      {currentLayer.text}
                    </span>
                  )}
                  {!currentLayer.text && !currentLayer.imageSrc && (
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 px-2 py-0.5">
                      [ Placement Zone ]
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Camera View Angle Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 relative z-20 pt-2 border-t border-white/10">
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {(['front', 'back', 'left', 'right'] as TeeView[]).map((v) => {
            const isActive = customState.activeView === v;
            return (
              <button
                key={v}
                onClick={() => onViewChange(v)}
                aria-label={`Switch camera to ${v} view`}
                className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest transition-all ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {v === 'left' ? 'L Sleeve' : v === 'right' ? 'R Sleeve' : v}
              </button>
            );
          })}
        </div>

        {/* Telemetry */}
        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-wider text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: customState.color.hex }} />
            {customState.color.name}
          </span>
          <span>·</span>
          <span>Size {customState.size}</span>
          <span>·</span>
          <span>View: {customState.activeView.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};
