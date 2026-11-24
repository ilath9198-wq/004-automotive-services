'use client';

import React, { useState } from 'react';
import { servicePackages, VehicleType } from '../data/packagesData';
import { Check, Clock, ShieldCheck, Calendar, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { useBooking } from './BookingContext';

export default function PackageSelector() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('sedan');
  const { openBooking } = useBooking();

  const vehicleOptions: { key: VehicleType; label: string; sub: string }[] = [
    { key: 'hatchback', label: 'Hatchback', sub: 'i20, Polo, Swift' },
    { key: 'sedan', label: 'Sedan', sub: 'City, Verna, C-Class, 3-Series' },
    { key: 'suv', label: 'SUV / MUV', sub: 'Creta, Fortuner, X5, Defender' },
    { key: 'luxury', label: 'Luxury & Exotic', sub: 'Porsche, Ferrari, Maybach, G-Wagon' },
  ];

  return (
    <div className="w-full">
      {/* Vehicle Type Switcher Strip */}
      <div className="max-w-3xl mx-auto mb-10 p-2 bg-dark-900 border border-dark-700/80 rounded-2xl shadow-metal-card">
        <div className="text-center mb-2 pt-1">
          <span className="text-[11px] font-mono uppercase tracking-widest text-electric-400 font-bold">
            STEP 1: SELECT YOUR VEHICLE CLASS FOR PRECISE TELEMETRY PRICING
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {vehicleOptions.map((opt) => {
            const isSelected = vehicleType === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => setVehicleType(opt.key)}
                className={`p-3 rounded-xl text-center transition-all ${
                  isSelected
                    ? 'bg-electric-500 text-dark-950 shadow-glow-cyan font-bold scale-[1.02]'
                    : 'bg-dark-850 hover:bg-dark-800 text-gray-300 hover:text-white border border-dark-700'
                }`}
              >
                <span className="block font-display text-sm sm:text-base font-bold tracking-wide uppercase">
                  {opt.label}
                </span>
                <span className={`block text-[10px] truncate ${isSelected ? 'text-dark-900/80 font-medium' : 'text-gray-500'}`}>
                  {opt.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pricing Disclaimer Alert */}
      <div className="max-w-3xl mx-auto mb-8 p-3 bg-dark-850/80 border border-dark-700 rounded-xl text-center text-xs text-gray-400 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
        <span>
          Illustrative pricing shown for <strong className="text-white capitalize">{vehicleType}</strong> class. Exact cost confirmed upon complimentary physical intake inspection.
        </span>
      </div>

      {/* Package Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {servicePackages.map((pkg) => {
          const price = pkg.pricing[vehicleType];
          const isSpecial = pkg.isPopular;

          return (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                isSpecial
                  ? 'bg-gradient-to-b from-dark-850 to-dark-900 border-2 border-electric-500 shadow-glow-cyan -translate-y-2'
                  : 'bg-dark-900 border border-dark-800 hover:border-dark-700 hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {isSpecial && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-electric-500 text-dark-950 text-xs font-display font-bold uppercase tracking-wider rounded-full shadow-lg">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-gray-400 min-h-[32px]">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-4 bg-dark-950/80 border border-dark-800 rounded-xl mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                      {price.inr}
                    </span>
                    <span className="text-sm font-mono text-gray-400">
                      / {price.usd}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-electric-400 uppercase tracking-widest block mt-1">
                    FOR {vehicleType.toUpperCase()} CLASS
                  </span>
                </div>

                {/* Turnaround & Warranty Badges */}
                <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-mono">
                  <div className="p-2.5 bg-dark-850 rounded-lg border border-dark-800">
                    <div className="flex items-center gap-1.5 text-gray-400 mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-electric-400" />
                      <span>Duration</span>
                    </div>
                    <span className="font-semibold text-white truncate block">{pkg.turnaround}</span>
                  </div>
                  <div className="p-2.5 bg-dark-850 rounded-lg border border-dark-800">
                    <div className="flex items-center gap-1.5 text-gray-400 mb-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-racing-400" />
                      <span>Warranty</span>
                    </div>
                    <span className="font-semibold text-white truncate block">{pkg.warranty}</span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                    PACKAGE INCLUSIONS ({pkg.inclusions.length})
                  </span>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openBooking(`${pkg.name} (${vehicleType.toUpperCase()} - ${price.inr})`)}
                className={`w-full py-3 px-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  isSpecial
                    ? 'bg-electric-500 hover:bg-electric-400 text-dark-950 shadow-glow-cyan'
                    : 'bg-dark-800 hover:bg-dark-700 text-white border border-dark-700 hover:border-electric-500/50'
                }`}
              >
                <span>Select Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
