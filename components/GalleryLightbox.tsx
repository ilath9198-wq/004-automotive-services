'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, ZoomIn, Car, Wrench } from 'lucide-react';
import { useBooking } from './BookingContext';

interface GalleryLightboxProps {
  items: GalleryItem[];
}

export default function GalleryLightbox({ items }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { openBooking } = useBooking();

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'detailing', label: 'Car Detailing' },
    { key: 'before-after', label: 'Before & After' },
    { key: 'workshop', label: 'Workshop' },
    { key: 'washing', label: 'Car Washing' },
    { key: 'repairs', label: 'Repairs' },
    { key: 'paint', label: 'Paint Correction' },
    { key: 'team', label: 'Team & Equipment' },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedIndex(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-electric-500 text-dark-950 shadow-glow-cyan font-bold'
                  : 'bg-dark-900 border border-dark-800 text-gray-400 hover:text-white hover:border-dark-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-900 border border-dark-800/80 hover:border-electric-500/50 cursor-pointer shadow-metal-card transition-all duration-300 hover:-translate-y-1.5"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-dark-950/80 backdrop-blur-md border border-dark-700 text-electric-400">
                {item.categoryLabel}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-1">
                <Car className="w-3.5 h-3.5 text-racing-400" />
                <span>{item.vehicle}</span>
              </div>
              <h4 className="font-display text-lg font-bold text-white group-hover:text-electric-400 transition-colors truncate">
                {item.title}
              </h4>
            </div>

            {/* Hover Magnifier Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
              <div className="w-12 h-12 rounded-full bg-electric-500/90 text-dark-950 flex items-center justify-center shadow-glow-cyan transform scale-75 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeItem && selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-dark-800 border border-dark-700 text-gray-300 hover:text-white hover:border-electric-500 flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-dark-900/80 border border-dark-700 hover:border-electric-500 text-white flex items-center justify-center transition-colors shadow-2xl"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-dark-900/80 border border-dark-700 hover:border-electric-500 text-white flex items-center justify-center transition-colors shadow-2xl"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Content Card */}
          <div 
            className="relative w-full max-w-5xl bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Large Image Box */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>

            {/* Metadata Footer */}
            <div className="p-5 sm:p-6 bg-dark-850 border-t border-dark-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-electric-500/10 text-electric-400 border border-electric-500/30">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {activeItem.vehicle}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-500 font-mono">
                    {selectedIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-gray-300 max-w-2xl">
                  {activeItem.description}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedIndex(null);
                  openBooking(`Inquiry regarding ${activeItem.title}`);
                }}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-cyan transition-all"
              >
                <Wrench className="w-4 h-4" />
                <span>Book This Service</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
