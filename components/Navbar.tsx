'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, Wrench, Shield, Sparkles } from 'lucide-react';
import { useBooking } from './BookingContext';
import CockpitDrawer from './CockpitDrawer';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { openBooking } = useBooking();
  const pathname = usePathname();

  // Find active route label for quick HUD indication
  const currentRouteName = () => {
    switch (pathname) {
      case '/': return 'Home';
      case '/about': return 'About Us';
      case '/services': return 'Our Services';
      case '/detailing': return 'Car Detailing';
      case '/repair': return 'Car Repair & Maintenance';
      case '/gallery': return 'Gallery';
      case '/packages': return 'Service Packages';
      case '/contact': return 'Contact Us';
      default: return 'Automotive Hub';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-dark-950/85 backdrop-blur-md border-b border-dark-800/80 transition-all">
        {/* Top Telemetry Ticker (Desktop only) */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-dark-900 border-b border-dark-800 text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
              <span>FACILITY STATUS: <strong className="text-white">OPERATIONAL</strong></span>
            </span>
            <span>CLIMATE CONTROLLED DETAILING BOOTH: <strong className="text-electric-400">READY</strong></span>
            <span>HUNTER 3D ALIGNMENT: <strong className="text-white">CALIBRATED</strong></span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hover:text-electric-400 transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-electric-400" />
              <span>Direct Concierge: <strong>+91 98765 43210</strong></span>
            </a>
            <span className="text-dark-700">|</span>
            <span className="text-gray-400">Mon - Sat: 8:00 AM - 8:00 PM</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink-0"
            aria-label="AUTOCRAFT Garage & Detailing Homepage"
          >
            {/* Logo Emblem */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 p-1.5 sm:p-2 flex items-center justify-center shadow-metal-card group-hover:border-electric-500/60 group-hover:shadow-glow-cyan transition-all shrink-0">
              <div className="relative">
                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-electric-400 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-racing-500 absolute -top-1 -right-1" />
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-display text-lg sm:text-2xl font-black tracking-wider text-white uppercase group-hover:text-electric-400 transition-colors">
                  AUTOCRAFT
                </span>
                <span className="px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold uppercase bg-electric-500/10 text-electric-400 border border-electric-500/30">
                  GARAGE
                </span>
              </div>
              <span className="hidden xs:block text-[9px] sm:text-[10px] tracking-widest text-gray-400 uppercase font-medium">
                PRECISION CARE & DETAILING
              </span>
            </div>
          </Link>

          {/* Center HUD Current Route indicator */}
          <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-dark-900/90 border border-dark-800 rounded-full text-xs font-mono">
            <span className="text-gray-500 uppercase tracking-wider">NAV //</span>
            <span className="text-electric-400 font-bold uppercase tracking-wide">
              {currentRouteName()}
            </span>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone shortcut button */}
            <a
              href="tel:+919876543210"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-electric-500/50 rounded-xl text-xs font-semibold text-gray-200 hover:text-white transition-all"
              aria-label="Call AUTOCRAFT Garage"
            >
              <Phone className="w-3.5 h-3.5 text-electric-400" />
              <span className="hidden xl:inline">+91 98765 43210</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* "Book a Service" Primary CTA */}
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-glow-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Book a Service</span>
              <span className="sm:hidden whitespace-nowrap">Book</span>
            </button>

            {/* Distinctive Cockpit Hamburger Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 sm:py-2.5 bg-dark-850 hover:bg-dark-800 border border-dark-700 hover:border-electric-500 text-white rounded-xl shadow-metal-card transition-all group shrink-0"
              aria-label="Open Navigation Menu"
            >
              <div className="space-y-1 sm:space-y-1.5 flex flex-col justify-center">
                <span className="block w-4 sm:w-5 h-0.5 bg-electric-400 group-hover:w-5 sm:group-hover:w-6 transition-all" />
                <span className="block w-3 sm:w-4 h-0.5 bg-white group-hover:w-5 sm:group-hover:w-6 transition-all" />
                <span className="block w-5 sm:w-6 h-0.5 bg-electric-400 transition-all" />
              </div>
              <span className="hidden sm:inline-block font-display font-bold text-xs tracking-wider uppercase text-gray-200 group-hover:text-electric-400">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Cockpit Drawer Side Navigation */}
      <CockpitDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
