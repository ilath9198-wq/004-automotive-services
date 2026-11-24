'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Zap, 
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { automotiveServices } from '../data/servicesData';
import { servicePackages } from '../data/packagesData';
import { testimonials } from '../data/testimonialsData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { useBooking } from '../components/BookingContext';

export default function HomePage() {
  const { openBooking } = useBooking();
  const featuredServices = automotiveServices.filter((s) => s.featured).slice(0, 6);
  const featuredPackages = servicePackages.slice(0, 3);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          Dark metallic scrim + dewy supercar reflection + bold typography
          ========================================================================= */}
      <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden py-24 sm:py-28">
        {/* Photographic Background with Optical Gradient Scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
            alt="AUTOCRAFT Garage Detailing Studio Supercar"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Multi-layered directional gradient scrim: Ensures high contrast on desktop & mobile */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/85 to-dark-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/70" />
          <div className="absolute inset-0 carbon-pattern opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* HUD Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-electric-500/40 text-electric-400 text-xs font-mono font-bold tracking-wider mb-6 shadow-glow-cyan backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
              <span>FACILITY TELEMETRY // GERMAN & EXOTIC AUTOMOTIVE HUB</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] mb-6">
              Precision Care.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 via-white to-electric-400">
                Performance
              </span>{' '}
              You Can Trust.
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
              State-of-the-art diagnostics, master-certified mechanical repairs, and concourse-grade detailing studio. From everyday routine maintenance to multi-stage ceramic matrix shields, engineered for absolute precision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-black text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Wrench className="w-5 h-5" />
                <span>Book a Service</span>
              </button>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-dark-900/80 hover:bg-dark-800 text-white border border-dark-700 hover:border-electric-500/60 font-display font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-electric-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Telemetry Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dark-800/80 text-left">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-white block">15,000+</span>
                <span className="text-xs text-gray-400 font-mono">Vehicles Serviced</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-electric-400 block">99.8%</span>
                <span className="text-xs text-gray-400 font-mono">Precision Rating</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-white block">45 Min</span>
                <span className="text-xs text-gray-400 font-mono">Express Oil Care</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-black text-racing-500 block">5 Years</span>
                <span className="text-xs text-gray-400 font-mono">Ceramic Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICES SHOWCASE
          ========================================================================= */}
      <section className="py-20 bg-dark-900/60 border-y border-dark-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <span>WORKSHOP CAPABILITIES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                Specialized Automotive Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 hover:text-white transition-colors group"
            >
              <span>View All 13 Automotive Services</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((svc) => (
              <div
                key={svc.id}
                className="group bg-dark-900 border border-dark-800 hover:border-electric-500/50 rounded-2xl overflow-hidden shadow-metal-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                    <Image
                      src={svc.image}
                      alt={svc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/20" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-dark-950/80 backdrop-blur-md border border-dark-700 text-electric-400">
                      {svc.categoryLabel}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                      <span className="text-electric-400 font-bold">{svc.indicativePrice}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span>{svc.turnaroundTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-electric-400 transition-colors mb-2">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">
                      {svc.description}
                    </p>

                    <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                      {svc.detailedSpecs.slice(0, 3).map((spec, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => openBooking(svc.name)}
                    className="w-full py-2.5 px-4 bg-dark-800 hover:bg-electric-500 hover:text-dark-950 text-white text-xs font-display font-bold uppercase tracking-wider rounded-xl border border-dark-700 hover:border-electric-500 transition-all flex items-center justify-center gap-2"
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
          INTERACTIVE BEFORE & AFTER DETAILING SHOWCASE
          ========================================================================= */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded bg-racing-500/10 border border-racing-500/30 text-racing-500 text-xs font-mono font-bold uppercase tracking-wider">
              OPTICAL SURFACE RESTORATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide mt-3 mb-4">
              Before & After Detailing Telemetry
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Examine our multi-stage jewel correction process. We eliminate micro-scratches, buffer holograms and industrial fallout to reveal factory-surpassing mirror reflections.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/detailing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-900 hover:bg-dark-800 border border-dark-700 hover:border-electric-500 text-sm font-display font-bold uppercase tracking-wider text-white rounded-xl transition-all"
            >
              <Sparkles className="w-4 h-4 text-electric-400" />
              <span>Explore Concourse Detailing Packages</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US: 5 CORE ENGINEERING PILLARS
          ========================================================================= */}
      <section className="py-20 bg-dark-900 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              THE AUTOCRAFT STANDARD
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Why Discerning Drivers Choose AUTOCRAFT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-dark-850 border border-dark-800 rounded-2xl shadow-metal-card hover:border-electric-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-400 flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Dealer-Level Diagnostics
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Equipped with Autel MaxiSys Ultra, Bosch telemetry scanners, and CAN-bus loggers capable of reading live sensor feeds across all European, Asian, and American marques.
              </p>
            </div>

            <div className="p-8 bg-dark-850 border border-dark-800 rounded-2xl shadow-metal-card hover:border-electric-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-racing-500/10 border border-racing-500/30 text-racing-500 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                Dust-Free Detailing Studio
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Positive-pressure climate-controlled studio bay with multi-spectrum 5000K CRI lighting and infrared short-wave lamps for flawless nano-ceramic curing.
              </p>
            </div>

            <div className="p-8 bg-dark-850 border border-dark-800 rounded-2xl shadow-metal-card hover:border-electric-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-400 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-2">
                100% Genuine OEM Spares
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Direct-sourced original filters, Brembo brake pads, Motul fully-synthetic lubricants, and OE suspension hardware accompanied by official manufacturer warranty certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICE PACKAGES PREVIEW
          ========================================================================= */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
                TRANSPARENT VALUE PLANS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-2">
                Featured Care Packages
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-semibold text-electric-400 hover:text-white transition-colors group"
            >
              <span>Explore All 7 Packages with Vehicle Switcher</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 bg-dark-900 border border-dark-800 rounded-2xl flex flex-col justify-between hover:border-dark-700 transition-all"
              >
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{pkg.tagline}</p>
                  
                  <div className="p-3 bg-dark-950 rounded-xl mb-4 text-xs font-mono">
                    <span className="text-gray-400 block text-[10px]">STARTING FROM (SEDAN CLASS)</span>
                    <span className="text-2xl font-bold text-white">{pkg.pricing.sedan.inr}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                    {pkg.inclusions.slice(0, 4).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/packages"
                  className="w-full py-2.5 px-4 bg-dark-800 hover:bg-dark-700 text-white text-xs font-display font-bold uppercase tracking-wider rounded-xl text-center border border-dark-700 hover:border-electric-500 transition-all block"
                >
                  View Details & Select
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CUSTOMER REVIEWS / TESTIMONIALS
          ========================================================================= */}
      <section className="py-20 bg-dark-900/60 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              CLIENT TELEMETRY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Words From Passionate Drivers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 bg-dark-900 border border-dark-800 rounded-2xl shadow-metal-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-racing-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-dark-800">
                  <h4 className="font-display font-bold text-sm text-white uppercase">{t.name}</h4>
                  <span className="text-[11px] text-electric-400 font-mono block">{t.vehicle}</span>
                  <span className="text-[10px] text-gray-500">{t.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORKSHOP LOCATION & INTAKE PREVIEW
          ========================================================================= */}
      <section className="py-20 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 rounded bg-racing-500/10 border border-racing-500/30 text-racing-500 text-xs font-mono font-bold uppercase tracking-wider">
                FLAGSHIP ENGINEERING HUB
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide mt-3 mb-4">
                Visit Our State-Of-The-Art Workshop
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mb-6 leading-relaxed">
                Featuring 8 specialized hydraulic service bays, clean-room detailing studio, customer lounge with live bay inspection video screens, and espresso bar.
              </p>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-electric-400 shrink-0" />
                  <span>Plot 42, Speed Corridor, Sector 18, Motor City Hub, Bengaluru</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <PhoneCall className="w-5 h-5 text-electric-400 shrink-0" />
                  <span>Direct Hotline: +91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-racing-400 shrink-0" />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openBooking()}
                  className="px-6 py-3 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold uppercase text-sm tracking-wider rounded-xl shadow-glow-cyan transition-all"
                >
                  Schedule Workshop Visit
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-dark-900 hover:bg-dark-800 text-white border border-dark-700 hover:border-electric-500 text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Get Route Directions
                </Link>
              </div>
            </div>

            {/* Stylized Dark Workshop Map Placeholder Card */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-dark-700 shadow-2xl bg-dark-900">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                alt="AUTOCRAFT Workshop Bay View"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-[2px]" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-dark-900/90 border border-electric-500/40 rounded-lg text-xs font-mono text-electric-400 font-bold">
                    GPS // 12.9716° N, 77.5946° E
                  </span>
                  <span className="px-2.5 py-1 bg-racing-500 text-white rounded text-[10px] font-mono font-bold">
                    INTAKE LIVE
                  </span>
                </div>

                <div className="p-4 bg-dark-900/90 border border-dark-700 rounded-xl backdrop-blur-md">
                  <h4 className="font-display font-bold text-white text-base uppercase">
                    AUTOCRAFT Main Technical Facility
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Free vehicle pick-and-drop available across a 15km radius for all major service packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
