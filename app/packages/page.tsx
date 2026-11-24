'use client';

import React from 'react';
import Image from 'next/image';
import { Package, ShieldCheck, CheckCircle2, Clock, Wrench } from 'lucide-react';
import PackageSelector from '../../components/PackageSelector';

export default function PackagesPage() {
  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=85"
            alt="Ferrari Supercar Detailing Packages"
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
              <span>ALL-INCLUSIVE PLANS // TRANSPARENT PRICING</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Specialized Service Packages
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Engineered bundled care plans for every stage of your vehicle&apos;s lifecycle. Select your vehicle class below for calibrated pricing and itemized inclusions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PACKAGE SELECTOR
          ========================================================================= */}
      <section className="py-16 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PackageSelector />
        </div>
      </section>

      {/* =========================================================================
          FAQ / TRANSPARENCY ACCORDION
          ========================================================================= */}
      <section className="py-20 bg-dark-900 border-t border-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              PRICING TRANSPARENCY
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-white tracking-wide mt-2">
              Frequently Asked Questions Regarding Packages
            </h2>
          </div>

          <div className="space-y-4 text-left">
            <div className="p-6 bg-dark-850 border border-dark-700/80 rounded-2xl">
              <h3 className="font-display text-base font-bold uppercase text-white mb-2">
                Why does pricing differ across vehicle categories?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Larger vehicles (like full-size SUVs and exotics) require significantly higher engine oil volume (up to 8 liters vs 3.5 liters for hatchbacks), larger surface area for polishing and ceramic coatings, and specialized lift attachments.
              </p>
            </div>

            <div className="p-6 bg-dark-850 border border-dark-700/80 rounded-2xl">
              <h3 className="font-display text-base font-bold uppercase text-white mb-2">
                Can I combine multiple packages or add customized services?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Yes. Many clients pair the Premium Car Service with the 9H Ceramic Matrix Package. Our service advisor will provide an optimized bundled quote during physical intake.
              </p>
            </div>

            <div className="p-6 bg-dark-850 border border-dark-700/80 rounded-2xl">
              <h3 className="font-display text-base font-bold uppercase text-white mb-2">
                Is complimentary pickup and delivery included?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Complimentary doorstep vehicle pickup and sanitised flatbed or valet return is included on all packages above ₹5,000 within a 15km perimeter of our workshop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
