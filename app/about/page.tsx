'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Wrench, 
  Gauge, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Users, 
  Cpu, 
  ArrowRight,
  Eye,
  Video,
  Clock
} from 'lucide-react';
import { teamMembers } from '../../data/testimonialsData';
import { useBooking } from '../../components/BookingContext';

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
            alt="Porsche in AUTOCRAFT Engineering Studio"
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
              <span>ESTABLISHED 2014 // MOTORSPORT DNA</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Engineering Heritage & Concourse Craftsmanship
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Born from a passion for track-side mechanical perfection and concourse aesthetic purity, AUTOCRAFT translates championship engineering standards into everyday automotive care.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND STORY & HERITAGE
          ========================================================================= */}
      <section className="py-20 bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
                OUR MISSION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                Where Automotive Precision Meets Concourse Artistry
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                AUTOCRAFT was founded to bridge a glaring gap in the automotive aftermarket: the void between impersonal, high-cost franchised dealerships and under-equipped local workshops. 
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We engineered a purpose-built facility that combines OEM factory scan tools, Hunter 3D optical suspension geometry, and hospital-grade clean rooms for ceramic coating and paint protection film (PPF). Every technician on our floor holds ASE or master diagnostic certifications, treating every vehicle with uncompromised integrity.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dark-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/30 text-electric-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-white uppercase text-sm block">12+ Years</span>
                    <span className="text-xs text-gray-400 font-mono">Master Experience</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-racing-500/10 border border-racing-500/30 text-racing-500 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-white uppercase text-sm block">Zero Surprises</span>
                    <span className="text-xs text-gray-400 font-mono">Transparent Billing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-dark-700 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85"
                alt="Engine Diagnostics and Workshop Precision"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-electric-400 uppercase tracking-widest block mb-1">
                  FACILITY CELL 03
                </span>
                <span className="font-display text-lg font-bold text-white uppercase">
                  Engine & Powertrain Assembly Bench
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WORKSHOP FACILITIES & ADVANCED EQUIPMENT
          ========================================================================= */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              FACILITIES & HARDWARE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Hospital-Grade Automotive Technology
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              We invest relentlessly in calibrated machinery that exceeds OEM dealer specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-dark-900 border border-dark-800 rounded-2xl">
              <div className="p-3 bg-dark-850 rounded-xl w-fit border border-dark-700 text-electric-400 mb-4">
                <Gauge className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                Hunter 3D HawkEye
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                High-definition optical cameras measuring toe, camber, and caster within 0.01 degrees for precision highway stability and reduced tyre wear.
              </p>
            </div>

            <div className="p-6 bg-dark-900 border border-dark-800 rounded-2xl">
              <div className="p-3 bg-dark-850 rounded-xl w-fit border border-dark-700 text-racing-500 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                Climate Clean Bay
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Positive pressure air-filtration bay maintaining constant 22°C temperature and 45% humidity for sterile ceramic coating application.
              </p>
            </div>

            <div className="p-6 bg-dark-900 border border-dark-800 rounded-2xl">
              <div className="p-3 bg-dark-850 rounded-xl w-fit border border-dark-700 text-electric-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                Autel MaxiSys Ultra
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Dealer-grade 5-in-1 VCMI system capable of oscilloscope signal evaluation, CAN-bus waveform analysis, and component activation testing.
              </p>
            </div>

            <div className="p-6 bg-dark-900 border border-dark-800 rounded-2xl">
              <div className="p-3 bg-dark-850 rounded-xl w-fit border border-dark-700 text-racing-500 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                Short-Wave IR Curing
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                German infrared heat lamps penetrating paint layers from inside out, achieving full quartz molecular cross-linking in under 4 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE QUALITY STANDARDS & CUSTOMER-FIRST POLICY
          ========================================================================= */}
      <section className="py-20 bg-dark-900/60 border-y border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 rounded bg-racing-500/10 border border-racing-500/30 text-racing-500 text-xs font-mono font-bold uppercase tracking-wider">
              OUR CUSTOMER PLEDGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3 mb-4">
              The Transparent Digital Inspection Standard
            </h2>
            <p className="text-sm text-gray-400">
              No hidden line items. No unnecessary component replacements. Just absolute engineering clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-dark-850 border border-dark-700 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/30 text-electric-400 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                1. Digital Video Telemetry Report
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                While your vehicle is on the lift, your lead technician films a 2-minute walkthrough detailing brake pad mm, suspension bushings, and fluid condition sent straight to your phone.
              </p>
            </div>

            <div className="p-6 bg-dark-850 border border-dark-700 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-racing-500/10 border border-racing-500/30 text-racing-500 flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                2. Explicit Customer Pre-Approval
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Not a single bolt is turned without your explicit digital authorization. Old parts removed are boxed and returned for your physical inspection upon collection.
              </p>
            </div>

            <div className="p-6 bg-dark-850 border border-dark-700 rounded-2xl">
              <div className="w-10 h-10 rounded-lg bg-electric-500/10 border border-electric-500/30 text-electric-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                3. Warranty-Backed Workmanship
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                All mechanical services carry a 6-month / 10,000 km warranty. Ceramic coatings include an official 3-to-5 year warranty card with complimentary annual gloss inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROFESSIONAL TEAM INTRODUCTION
          ========================================================================= */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              CERTIFIED MASTER CRAFTSMEN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Meet The Technical Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-dark-900 border border-dark-800 hover:border-electric-500/50 rounded-2xl overflow-hidden shadow-metal-card transition-all"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-dark-950">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-black/20" />
                  <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono bg-dark-950/80 border border-dark-700 text-electric-400">
                    {member.experience}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold uppercase text-white mb-1">
                    {member.name}
                  </h3>
                  <span className="text-xs text-electric-400 font-medium block mb-2 min-h-[32px]">
                    {member.role}
                  </span>
                  <p className="text-[11px] text-gray-400 mb-4">
                    {member.specialty}
                  </p>

                  <div className="pt-3 border-t border-dark-800 space-y-1">
                    {member.credentials.map((cred, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-400 block truncate">
                        • {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-14 text-center">
            <button
              onClick={() => openBooking('Consultation with Master Technician')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold uppercase text-sm tracking-wider rounded-xl shadow-glow-cyan transition-all"
            >
              <Wrench className="w-4 h-4" />
              <span>Schedule Inspection With Our Master Tech</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
