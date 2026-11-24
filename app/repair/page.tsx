'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Wrench, 
  Gauge, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Clock,
  ArrowRight,
  Disc,
  Cpu,
  Zap,
  RotateCw
} from 'lucide-react';
import { useBooking } from '../../components/BookingContext';

export default function RepairPage() {
  const { openBooking } = useBooking();

  const repairDisciplines = [
    {
      title: 'Routine Scheduled Vehicle Servicing',
      desc: 'Factory-compliant interval servicing preserving manufacturer warranty: synthetic oil, multi-filter replacement, and comprehensive 50-point digital health audit.',
      price: 'From ₹3,499 / $45',
      time: '3 - 4 Hours',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Motul / Mobil 1 Fully Synthetic Oil', 'OEM Oil, Air & Cabin Filter Replacement', 'Fluid Top-Up & Brake Pad Wear Inspection']
    },
    {
      title: 'Engine & Transmission Diagnostics',
      desc: 'Live OBD-II sensor telemetry, CAN-bus waveform signal analysis, compression leak-down testing, and dual-clutch transmission (DSG/PDK) calibration.',
      price: 'From ₹1,899 / $25',
      time: '1 - 2 Hours',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Autel Ultra Scan & ECU Diagnostic Report', 'Direct Fuel Injection Telemetry Audit', 'Transmission Mechatronics Health Test']
    },
    {
      title: 'Brake Overhaul & Performance Rotors',
      desc: 'Precision micrometer runout check, Brembo slotted performance rotors, low-dust ceramic pads, and DOT 5.1 hydraulic pressure bleed.',
      price: 'From ₹2,499 / $32',
      time: '2 - 3 Hours',
      icon: Disc,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Rotor Micrometer Truing Check', 'Brembo Ceramic Performance Pads', 'Electronic Parking Brake Calibration']
    },
    {
      title: 'Suspension, Steering & Strut Repair',
      desc: 'Hydraulic lift inspection of control arm bushings, ball joints, sway bar links, and electronic adaptive damper replacements (Bilstein / KW).',
      price: 'From ₹2,999 / $38',
      time: '3 - 5 Hours',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Control Arm Bushing Hydraulic Press Replacement', 'Strut Mount & Shock Absorber Test', 'Chassis Dynamic Geometry Alignment']
    },
    {
      title: 'Electrical & Sensor Troubleshooting',
      desc: 'Oscilloscope diagnosis of wiring harnesses, parasitic battery drain tracing, alternator diode ripple analysis, and sensor replacements.',
      price: 'From ₹1,499 / $20',
      time: '2 Hours',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Dark Current Parasitic Drain Isolation', 'Alternator Voltage Load Testing', 'Body Control Module (BCM) Sync']
    },
    {
      title: 'Precision Climate Control & AC Overhaul',
      desc: 'Automated recovery and recharge of R134a/R1234yf refrigerants, UV dye leak isolation, compressor clutch servicing, and ozone sanitization.',
      price: 'From ₹2,299 / $30',
      time: '2 Hours',
      icon: RotateCw,
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85',
      inclusions: ['Automated Dual-Gas Recovery & Flush', 'Compressor Magnetic Clutch Verification', 'High-Temperature Evaporator Decontamination']
    }
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=2000&q=85"
            alt="Mechanical Workshop Technician Tooling"
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
              <span>MECHANICAL DIVISION // ASE CERTIFIED</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Car Repair & Master Mechanical Care
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              From precision engine rebuilds and CAN-bus troubleshooting to Hunter 3D laser alignment and brake overhauls. Factory-spec equipment for European, Japanese, and American vehicles.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openBooking('Mechanical Diagnostic Inspection')}
                className="px-8 py-3.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold uppercase text-sm tracking-wider rounded-xl shadow-glow-cyan transition-all"
              >
                Schedule Diagnostic Inspection
              </button>
              <a
                href="tel:+919876543219"
                className="px-6 py-3.5 bg-racing-500/20 hover:bg-racing-500/30 text-racing-400 border border-racing-500/40 text-sm font-display font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>24/7 Breakdown Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EMERGENCY ROADSIDE BREAKDOWN BANNER
          ========================================================================= */}
      <section className="bg-dark-900 border-b border-dark-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-6 bg-racing-500/10 border border-racing-500/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-racing-500 text-dark-950 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white">
                  Stranded on the Road? Emergency Flatbed Recovery Ready
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Flatbed tow truck dispatched with live GPS tracking within 20 minutes across metropolitan territory.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <a
                href="tel:+919876543219"
                className="px-6 py-3 bg-racing-500 hover:bg-racing-400 text-white font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-orange transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency Recovery</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REPAIR DISCIPLINES CATALOG
          ========================================================================= */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
              MECHANICAL DISCIPLINES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide mt-3">
              Engineered Mechanical Services
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              Transparent labor rates, digital video telemetry reports, and manufacturer-approved warranty parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairDisciplines.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-dark-900 border border-dark-800 hover:border-electric-500/50 rounded-2xl overflow-hidden shadow-metal-card transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30" />
                      <div className="absolute top-3 left-3 p-2 rounded-lg bg-dark-950/80 backdrop-blur-md border border-dark-700 text-electric-400">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                        <span className="text-electric-400 font-bold">{item.price}</span>
                        <span>{item.time}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold uppercase text-white group-hover:text-electric-400 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed mb-5">
                        {item.desc}
                      </p>

                      <ul className="space-y-1.5 text-xs text-gray-300 mb-6">
                        {item.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                            <span className="truncate">{inc}</span>
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
                      <Wrench className="w-3.5 h-3.5" />
                      <span>Book Diagnostic Slot</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING & REPAIR POLICY GUARANTEE
          ========================================================================= */}
      <section className="py-20 bg-dark-900/60 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 rounded bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono font-bold uppercase tracking-wider">
                TRANSPARENCY GUARANTEE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                Fair Hourly Telemetry & Zero Hidden Markups
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Most dealerships charge inflated flat-rate book hours regardless of actual repair duration. At AUTOCRAFT, every job is tracked by computerized workshop clocking and backed by digital proof videos.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">Old Parts Return Policy</h4>
                    <p className="text-xs text-gray-400">All worn mechanical components replaced are boxed and placed in your boot for verification.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-display">6-Month / 10,000 KM Warranty</h4>
                    <p className="text-xs text-gray-400">Full warranty covering both OEM replacement hardware and certified master technician labor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-850 border border-dark-700 rounded-2xl shadow-metal-card">
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                Indicative Labor & Diagnostic Rate Sheet
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-dark-700 text-gray-300">
                  <span>General Mechanical Labor (Per Hour)</span>
                  <span className="text-white font-bold">₹1,200 / $16</span>
                </div>
                <div className="flex justify-between py-2 border-b border-dark-700 text-gray-300">
                  <span>Autel Ultra Full ECU Scanning & Code Clear</span>
                  <span className="text-white font-bold">₹1,499 / $20</span>
                </div>
                <div className="flex justify-between py-2 border-b border-dark-700 text-gray-300">
                  <span>Hunter 3D 4-Wheel Laser Alignment</span>
                  <span className="text-white font-bold">₹1,299 / $17</span>
                </div>
                <div className="flex justify-between py-2 border-b border-dark-700 text-gray-300">
                  <span>AC R134a Automated Recovery & Recharge</span>
                  <span className="text-white font-bold">₹1,899 / $25</span>
                </div>
                <div className="flex justify-between py-2 text-gray-300">
                  <span>Brake Pad Fitment (Per Axle)</span>
                  <span className="text-white font-bold">₹799 / $11</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
