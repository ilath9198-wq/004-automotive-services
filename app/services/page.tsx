'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Wrench, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Info, 
  X, 
  Filter,
  Check
} from 'lucide-react';
import { automotiveServices, AutomotiveService } from '../../data/servicesData';
import { useBooking } from '../../components/BookingContext';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<AutomotiveService | null>(null);
  const { openBooking } = useBooking();

  const filters = [
    { key: 'all', label: 'All Services (13)' },
    { key: 'mechanical', label: 'Mechanical & Diagnostics' },
    { key: 'detailing', label: 'Detailing & Spa' },
    { key: 'maintenance', label: 'Routine Maintenance' },
    { key: 'wheels', label: 'Tyres & Brakes' },
    { key: 'two-wheeler', label: 'Two-Wheeler Care' },
  ];

  const filteredServices = activeFilter === 'all'
    ? automotiveServices
    : automotiveServices.filter((s) => s.category === activeFilter);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2000&q=85"
            alt="AUTOCRAFT Hydraulic Bay Workshop"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/70" />
          <div className="absolute inset-0 carbon-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>PRECISION CATALOG // 13 SPECIALIZED DISCIPLINES</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Comprehensive Automotive Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              From advanced CAN-bus ECU diagnostics to multi-stage concourse paint rejuvenation and superbike tuning. Every discipline performed by ASE-certified technicians.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES FILTER & GRID CATALOG
          ========================================================================= */}
      <section className="py-16 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none no-scrollbar">
            {filters.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-electric-500 text-dark-950 shadow-glow-cyan font-bold'
                      : 'bg-dark-900 border border-dark-800 text-gray-400 hover:text-white hover:border-dark-700'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="group bg-dark-900 border border-dark-800 hover:border-electric-500/50 rounded-2xl overflow-hidden shadow-metal-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-dark-950/80 backdrop-blur-md border border-dark-700 text-electric-400">
                      {svc.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                      <span className="text-electric-400 font-bold">{svc.indicativePrice}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-500" />
                        <span>{svc.turnaroundTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-electric-400 transition-colors mb-2">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-5">
                      {svc.description}
                    </p>

                    {/* Specifications List */}
                    <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                      {svc.detailedSpecs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions: Book Service & Know More */}
                <div className="px-6 pb-6 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="py-2.5 px-3 bg-dark-800 hover:bg-dark-750 text-gray-200 hover:text-white text-xs font-semibold rounded-xl border border-dark-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-gray-400" />
                    <span>Know More</span>
                  </button>
                  <button
                    onClick={() => openBooking(svc.name)}
                    className="py-2.5 px-3 bg-electric-500 hover:bg-electric-400 text-dark-950 text-xs font-display font-bold uppercase tracking-wider rounded-xl shadow-glow-cyan flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          "KNOW MORE" SERVICE DETAIL MODAL
          ========================================================================= */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-dark-900 border border-dark-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-dark-950/80 text-white flex items-center justify-center hover:bg-dark-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-electric-500/10 text-electric-400 border border-electric-500/30">
                  {selectedService.categoryLabel}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Indicative: {selectedService.indicativePrice}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-white mb-3">
                {selectedService.name}
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              <h4 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3">
                DETAILED PROCESS SPECIFICATIONS:
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedService.detailedSpecs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-dark-800">
                <span className="text-xs text-gray-400 font-mono">
                  Estimated Duration: <strong className="text-white">{selectedService.turnaroundTime}</strong>
                </span>
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    openBooking(name);
                  }}
                  className="px-6 py-2.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-cyan transition-all"
                >
                  Book This Service Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
