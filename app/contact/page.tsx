'use client';

import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Navigation, 
  Calendar,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import VehicleEnquiryForm from '../../components/VehicleEnquiryForm';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85"
            alt="AUTOCRAFT Technical Bay Exterior"
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
              <span>WORKSHOP INTAKE & INQUIRIES // MOTOR CITY HUB</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4">
              Connect With AUTOCRAFT
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              Schedule your vehicle service intake, speak directly with our master diagnostic technician, or visit our clean-room detailing facility.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & ENQUIRY SECTION
          ========================================================================= */}
      <section className="py-16 bg-dark-950 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Workshop Details & Map (Span 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono text-electric-400 font-bold uppercase tracking-widest block mb-2">
                  DIRECT CHANNELS
                </span>
                <h2 className="font-display text-3xl font-bold uppercase text-white mb-4">
                  Engineering Facility Hub
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Located in the heart of the motor corridor with 8 drive-through hydraulic bays and customer hospitality lounge.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 bg-dark-900 border border-dark-800 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-dark-850 border border-dark-700 rounded-xl text-electric-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-white text-sm mb-1">
                      Facility Location
                    </h4>
                    <p className="text-xs text-gray-300">
                      Plot 42, Speed Corridor, Sector 18, Motor City Hub, Bengaluru, 560038
                    </p>
                    <span className="text-[11px] font-mono text-gray-500 block mt-1">
                      Coordinates: 12.9716° N, 77.5946° E
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-dark-900 border border-dark-800 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-dark-850 border border-dark-700 rounded-xl text-electric-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-white text-sm mb-1">
                      Service Line & Concierge
                    </h4>
                    <a href="tel:+919876543210" className="text-xs text-gray-300 hover:text-white block font-mono">
                      +91 98765 43210 (Main Line)
                    </a>
                    <a href="tel:+919876543219" className="text-xs text-racing-400 hover:text-racing-300 block font-mono mt-0.5">
                      +91 98765 43219 (24/7 Breakdown Recovery)
                    </a>
                  </div>
                </div>

                <div className="p-5 bg-dark-900 border border-dark-800 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-dark-850 border border-dark-700 rounded-xl text-electric-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-white text-sm mb-1">
                      Electronic Mail
                    </h4>
                    <a href="mailto:service@autocraftgaragedetailing.com" className="text-xs text-gray-300 hover:text-white block font-mono">
                      service@autocraftgaragedetailing.com
                    </a>
                    <span className="text-[10px] text-gray-500 block mt-0.5">
                      Average response time: &lt; 30 minutes
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-dark-900 border border-dark-800 rounded-2xl flex items-start gap-4">
                  <div className="p-3 bg-dark-850 border border-dark-700 rounded-xl text-racing-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-white text-sm mb-1">
                      Operational Hours
                    </h4>
                    <span className="text-xs text-gray-300 block font-semibold">
                      Monday – Saturday: 8:00 AM – 8:00 PM
                    </span>
                    <span className="text-xs text-gray-500 block">
                      Sunday: 9:00 AM – 5:00 PM (Detailing Studio Only)
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Chat Button */}
              <a
                href="https://wa.me/919876543210?text=Hello%20AUTOCRAFT%2C%20I%20would%20like%20to%20inquire%20about%20vehicle%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold rounded-xl transition-all shadow-lg text-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat Instantly on WhatsApp Concierge</span>
              </a>

              {/* Interactive Styled Dark Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-dark-700 bg-dark-900 shadow-xl relative aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                  alt="AUTOCRAFT Garage Map Location"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-950/70 backdrop-blur-[1px]" />
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-dark-900/90 border border-electric-500/40 text-[11px] font-mono text-electric-400 font-bold rounded">
                      GPS SATELLITE LOCK
                    </span>
                    <span className="px-2 py-0.5 bg-racing-500 text-white text-[10px] font-mono font-bold rounded">
                      BAY INTAKE
                    </span>
                  </div>

                  <div className="p-3.5 bg-dark-900/90 border border-dark-700 rounded-xl backdrop-blur-md">
                    <span className="font-display text-sm font-bold text-white uppercase block">
                      AUTOCRAFT Workshop Entrance
                    </span>
                    <span className="text-[11px] text-gray-400 block mt-0.5">
                      Direct approach from Speed Corridor Expressway. Secure visitor parking available.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vehicle Service Enquiry Form (Span 7) */}
            <div className="lg:col-span-7">
              <VehicleEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
