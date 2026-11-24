'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Droplet, 
  Sun, 
  Flame, 
  Layers, 
  Check,
  Zap,
  Wrench
} from 'lucide-react';
import BeforeAfterSlider from '../../components/BeforeAfterSlider';
import { useBooking } from '../../components/BookingContext';

export default function DetailingPage() {
  const { openBooking } = useBooking();

  const detailingDisciplines = [
    {
      title: 'Multi-Stage Paint Correction',
      desc: 'Rotary and dual-action machine polishing removing 85-95% of swirl marks, buffer holograms, and etching for deep optical clarity.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
      points: ['Digital paint depth micrometer gauge audit', 'Rupes Bigfoot dual-action polishing system', 'Removal of wash scratches & oxidation']
    },
    {
      title: '9H Nano-Matrix Ceramic Coating',
      desc: 'Military-grade quartz ceramic cross-linking directly onto clear coat. Delivers intense candy gloss, self-cleaning hydrophobicity, and chemical armor.',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=85',
      points: ['115°+ extreme water contact beading angle', '3-to-5 Year official warranty certificate', 'Infrared short-wave thermal lamp curing']
    },
    {
      title: 'Self-Healing Paint Protection Film (PPF)',
      desc: 'Optically clear 8-mil thermoplastic polyurethane (TPU) film with instant heat-activated scratch healing against stone chips, highway gravel, and keys.',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85',
      points: ['Custom computerized plotter-cut patterns (Zero razor on paint)', 'Non-yellowing UV resistant adhesive', 'High-gloss or stealth satin matte finish']
    },
    {
      title: 'Executive Interior Deep Cleaning & Steam',
      desc: '210°C pressurized dry steam sanitization, hot-water extractor seat shampooing, leather pH conditioning, and medical-grade ozone cabin deodorization.',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
      points: ['Elimination of 99.9% bacteria & allergens', 'Nappa leather moisturizing & UV feed', 'AC duct antibacterial ozone fogging']
    },
    {
      title: 'Optical Headlight & Taillight Restoration',
      desc: 'Multi-grit wet sanding removing yellow oxidation and cloudy UV degradation, followed by ceramic quartz sealant preventing future hazing.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
      points: ['Factory beam projection distance restored', 'Wet-sanded up to 3000-grit micro finish', 'Permanent UV barrier ceramic clear coat']
    },
    {
      title: 'Concourse Engine Bay Detailing & Dressing',
      desc: 'Gentle dry-vapor steam cleansing removing baked-on road grease, salt, and grime, finished with non-greasy matte anti-static polymer dressing.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
      points: ['Delicate electrical sensor & alternator masking', 'Anti-static dust-repellent finish', 'Rubber hose & plastic conditioning']
    }
  ];

  const detailingSteps = [
    { step: '01', title: 'Chemical Decontamination', desc: 'Citrus pre-wash, iron fallout remover dissolving brake dust particles, and pH-neutral active snow foam.' },
    { step: '02', title: 'Clay Bar Treatment', desc: 'Fine-grade automotive clay bar sliding over paint to shear off embedded industrial fallout and tree sap.' },
    { step: '03', title: 'Paint Depth Micrometer Mapping', desc: 'Ultrasonic gauge measuring clear-coat thickness across 30+ panels to ensure safe cutting limits.' },
    { step: '04', title: 'Multi-Stage Jewel Correction', desc: 'Heavy cutting compound to level scratches, followed by ultra-fine jewel polish eliminating all micro-hazing.' },
    { step: '05', title: 'Isopropyl Alcohol (IPA) Wipe', desc: 'Stripping polishing oils to reveal bare paint surface, ensuring 100% molecular bonding of ceramic quartz.' },
    { step: '06', title: 'Infrared Thermal Chamber Curing', desc: 'Baking under calibrated 60°C short-wave infrared lamps to fully cure the 9H matrix shield.' }
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=85"
            alt="Ceramic Detailing Mercedes-Benz Studio"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-racing-500/10 border border-racing-500/30 text-racing-500 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <span>CONCOURSE DETAILING STUDIO // DUST-FREE FACILITY</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Concourse Detailing & 9H Ceramic Armor
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              Transforming automotive paint into liquid glass. We specialize in precision multi-stage swirl removal, 9H ceramic quartz matrices, and self-healing paint protection films (PPF).
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openBooking('Concourse Detailing Consultation')}
                className="px-8 py-3.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold uppercase text-sm tracking-wider rounded-xl shadow-glow-cyan transition-all"
              >
                Book Detailing Consultation
              </button>
              <Link
                href="/packages"
                className="px-6 py-3.5 bg-dark-900/80 hover:bg-dark-800 text-white border border-dark-700 hover:border-electric-500 text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                View Detailing Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE BEFORE & AFTER SLIDER
          ========================================================================= */}
      <section className="py-20 bg-dark-950 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <BeforeAfterSlider
              title="Paint Correction Telemetry Demonstration"
              subtitle="Slide across the vehicle hood to observe the transition from swirl-hazed clear coat to a concourse 9H mirror finish."
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE DETAILING DISCIPLINES
          ========================================================================= */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              SPECIALIZED DISCIPLINES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Master Detailing Treatments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailingDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="group bg-dark-850 border border-dark-700/80 hover:border-electric-500/50 rounded-2xl overflow-hidden shadow-metal-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-850 via-transparent to-black/30" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-electric-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                      {item.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                          <span className="truncate">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => openBooking(item.title)}
                    className="w-full py-2.5 px-4 bg-dark-800 hover:bg-electric-500 hover:text-dark-950 text-white text-xs font-display font-bold uppercase tracking-wider rounded-xl border border-dark-700 hover:border-electric-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquire for Your Vehicle</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 6-STEP DETAILING PROCESS EXPLANATION
          ========================================================================= */}
      <section className="py-20 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-racing-500/10 border border-racing-500/30 text-racing-500 text-xs font-mono font-bold uppercase tracking-wider">
              PRECISION PROTOCOL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              The 6-Step Concourse Detailing Process
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Every vehicle undergoes a disciplined, contamination-free protocol to guarantee enduring gloss and protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailingSteps.map((st) => (
              <div
                key={st.step}
                className="p-6 bg-dark-900 border border-dark-800 rounded-2xl relative overflow-hidden"
              >
                <span className="font-display text-4xl font-black text-dark-800 absolute top-4 right-4 select-none">
                  {st.step}
                </span>
                <span className="text-xs font-mono text-electric-400 font-bold block mb-2">
                  PHASE {st.step} //
                </span>
                <h3 className="font-display text-lg font-bold uppercase text-white mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 p-8 bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-dark-700 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-1">
                Ready To Transform Your Vehicle&apos;s Paint?
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Book a complimentary 20-minute digital paint thickness and swirl audit at our studio.
              </p>
            </div>
            <button
              onClick={() => openBooking('Paint Thickness & Ceramic Audit')}
              className="shrink-0 px-8 py-3.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold uppercase text-sm tracking-wider rounded-xl shadow-glow-cyan transition-all"
            >
              Book Studio Paint Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
