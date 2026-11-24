'use client';

import React from 'react';
import Image from 'next/image';
import { Camera, Sparkles, Wrench } from 'lucide-react';
import { galleryItems } from '../../data/galleryData';
import GalleryLightbox from '../../components/GalleryLightbox';
import { useBooking } from '../../components/BookingContext';

export default function GalleryPage() {
  const { openBooking } = useBooking();

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=2000&q=85"
            alt="Audi Supercar Detailing Gallery"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-dark-950/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/70" />
          <div className="absolute inset-0 carbon-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>PROJECT PORTFOLIO // VERIFIED TRANSFORMATIONS</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Automotive Showcase Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Explore our real-world project portfolio spanning exotic supercars, track day weapons, luxury SUVs, and precision mechanical restorations.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GALLERY & LIGHTBOX SECTION
          ========================================================================= */}
      <section className="py-16 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                FILTER BY DISCIPLINE & CLICK TO ENLARGE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                Curated Project Telemetry
              </h2>
            </div>
            <button
              onClick={() => openBooking('Custom Project Consultation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-850 hover:bg-dark-800 text-white border border-dark-700 hover:border-electric-500 rounded-xl text-xs font-semibold transition-all"
            >
              <Wrench className="w-3.5 h-3.5 text-electric-400" />
              <span>Inquire for Similar Vehicle Build</span>
            </button>
          </div>

          {/* Interactive Lightbox Grid Component */}
          <GalleryLightbox items={galleryItems} />
        </div>
      </section>
    </div>
  );
}
