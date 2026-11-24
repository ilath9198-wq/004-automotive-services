'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, AlertCircle } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=85',
  afterImage = 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=85',
  beforeLabel = 'BEFORE: BUFFER TRAILS & SWIRL DEFECTS',
  afterLabel = 'AFTER: 3-STAGE JEWEL POLISH & 9H CERAMIC',
  title = 'Interactive Transformation Telemetry',
  subtitle = 'Drag the slider across the surface to examine paint clarity, swirl removal and hydrophobic gloss.'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full">
      {/* Header Info */}
      {(title || subtitle) && (
        <div className="mb-6 text-center max-w-2xl mx-auto">
          {title && (
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Slider Frame */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-dark-700 shadow-2xl select-none comparison-slider-container cursor-ew-resize bg-dark-950"
      >
        {/* AFTER IMAGE (Underneath layer - Right side) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After paint correction detailing"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-black/20" />
          
          {/* After Badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 flex items-center gap-2 px-3 py-1.5 bg-dark-900/90 border border-electric-500/40 rounded-lg text-xs font-mono font-bold text-electric-400 backdrop-blur-md shadow-glow-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{afterLabel}</span>
            <span className="sm:hidden">AFTER (9H CERAMIC)</span>
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped on top - Left side) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
            <Image
              src={beforeImage}
              alt="Before paint correction detailing"
              fill
              className="object-cover filter contrast-125 saturate-75 brightness-90"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-black/30" />
            
            {/* Before Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-2 px-3 py-1.5 bg-dark-900/90 border border-racing-500/40 rounded-lg text-xs font-mono font-bold text-racing-400 backdrop-blur-md shadow-glow-orange">
              <AlertCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{beforeLabel}</span>
              <span className="sm:hidden">BEFORE (SWIRLS)</span>
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,210,255,0.8)] -translate-x-1/2 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Glowing Center Handle Knob */}
          <div 
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="w-10 h-10 -ml-0.5 rounded-full bg-dark-950 border-2 border-electric-400 shadow-glow-cyan flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold">◀</span>
              <span className="text-[10px] font-bold">▶</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider Telemetry Marker */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-500 px-2">
        <span>DEFECT EXPOSURE: {Math.round(sliderPosition)}%</span>
        <span>OPTICAL CLEAR COAT RESTORATION: {100 - Math.round(sliderPosition)}%</span>
      </div>
    </div>
  );
}
