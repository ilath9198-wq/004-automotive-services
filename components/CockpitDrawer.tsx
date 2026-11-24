'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  X, 
  Home, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Gauge, 
  Camera, 
  Package, 
  PhoneCall, 
  Activity, 
  MessageSquare,
  AlertTriangle,
  ChevronRight,
  Zap
} from 'lucide-react';
import { useBooking } from './BookingContext';

interface CockpitDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const navigationRoutes = [
  { name: 'Home', path: '/', gear: 'P / 01', icon: Home, desc: 'Workshop Overview & Flagship Showcase' },
  { name: 'About Us', path: '/about', gear: 'R / 02', icon: ShieldCheck, desc: 'Brand Heritage, Facilities & Team' },
  { name: 'Our Services', path: '/services', gear: 'N / 03', icon: Wrench, desc: 'Complete 13-Point Automotive Catalog' },
  { name: 'Car Detailing', path: '/detailing', gear: 'D / 04', icon: Sparkles, desc: 'Paint Correction & Ceramic Matrix' },
  { name: 'Car Repair & Maintenance', path: '/repair', gear: 'S / 05', icon: Gauge, desc: 'Mechanical Diagnostics & Overhaul' },
  { name: 'Gallery', path: '/gallery', gear: 'M / 06', icon: Camera, desc: 'Before & After Project Portfolio' },
  { name: 'Service Packages', path: '/packages', gear: 'L / 07', icon: Package, desc: 'Transparent Vehicle Care Plans' },
  { name: 'Contact Us', path: '/contact', gear: 'OD / 08', icon: PhoneCall, desc: 'Booking Inquiries & Workshop Map' },
];

export default function CockpitDrawer({ isOpen, onClose }: CockpitDrawerProps) {
  const pathname = usePathname();
  const { openBooking } = useBooking();

  // Close on route change or ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Cockpit Drawer Panel */}
      <aside 
        className="relative w-full max-w-md h-full bg-dark-950 border-l border-dark-700/80 shadow-2xl flex flex-col z-10 overflow-y-auto carbon-pattern transition-transform duration-300"
        aria-label="Cockpit Navigation"
      >
        {/* Cockpit HUD Top Bar */}
        <div className="p-5 bg-dark-900/90 border-b border-dark-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-electric-500"></span>
            </div>
            <div>
              <span className="text-[11px] font-mono tracking-widest text-electric-400 font-bold uppercase block">
                COCKPIT TELEMETRY
              </span>
              <span className="text-[10px] text-gray-400 font-mono">AUTOCRAFT HUB • 8 BAYS ACTIVE</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 text-gray-400 hover:text-white hover:border-electric-500 flex items-center justify-center transition-all group"
            aria-label="Close Cockpit Menu"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          </button>
        </div>

        {/* Live Status HUD Strip */}
        <div className="px-5 py-3 bg-dark-850/60 border-b border-dark-800/80 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2 text-gray-300">
            <Activity className="w-3.5 h-3.5 text-electric-400" />
            <span>DIAGNOSTIC LINK: <strong className="text-white">ONLINE</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-racing-400">
            <Zap className="w-3.5 h-3.5" />
            <span>EXPRESS BAYS: 2 FREE</span>
          </div>
        </div>

        {/* Navigation Route Matrix */}
        <div className="flex-1 p-5 space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2 px-2">
            MISSION DIRECTORY // DEDICATED ROUTES
          </span>

          <nav className="space-y-1.5">
            {navigationRoutes.map((route) => {
              const isActive = pathname === route.path;
              const Icon = route.icon;

              return (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={onClose}
                  className={`group relative flex items-center gap-3.5 p-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-electric-500/15 border border-electric-500/40 text-white shadow-glow-cyan'
                      : 'bg-dark-900/60 border border-dark-800/80 text-gray-300 hover:text-white hover:bg-dark-850 hover:border-dark-700'
                  }`}
                >
                  {/* Gear Marker Badge */}
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider ${
                    isActive 
                      ? 'bg-electric-500 text-dark-950' 
                      : 'bg-dark-800 text-gray-400 group-hover:text-electric-400'
                  }`}>
                    {route.gear}
                  </span>

                  {/* Icon */}
                  <div className={`p-2 rounded-lg ${
                    isActive ? 'bg-electric-500/20 text-electric-400' : 'bg-dark-800 text-gray-400 group-hover:text-white'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Labels */}
                  <div className="flex-1 min-w-0">
                    <span className="font-display text-base font-bold tracking-wide uppercase block truncate">
                      {route.name}
                    </span>
                    <span className="text-[11px] text-gray-400 truncate block">
                      {route.desc}
                    </span>
                  </div>

                  {/* Right Arrow */}
                  <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isActive ? 'text-electric-400' : 'text-gray-500'
                  }`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Cockpit Bottom Quick Actions */}
        <div className="p-5 bg-dark-900 border-t border-dark-800 space-y-3">
          {/* Direct CTA */}
          <button
            onClick={() => {
              onClose();
              openBooking();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-cyan transition-all"
          >
            <Wrench className="w-4 h-4" />
            <span>Launch Service Booking</span>
          </button>

          {/* Quick Contacts */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-dark-800 hover:bg-dark-700 border border-dark-700 rounded-lg text-xs font-semibold text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-electric-400" />
              <span>Direct Call</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-lg text-xs font-semibold text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Emergency Hotline Alert */}
          <div className="flex items-center gap-2.5 p-2.5 bg-racing-500/10 border border-racing-500/20 rounded-lg text-[11px] text-gray-300">
            <AlertTriangle className="w-4 h-4 text-racing-500 shrink-0" />
            <span>24/7 Breakdown Assistance: <strong className="text-white">+91 98765 43219</strong></span>
          </div>
        </div>
      </aside>
    </div>
  );
}
