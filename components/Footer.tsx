'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  ShieldCheck, 
  MessageSquare,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { navigationRoutes } from './CockpitDrawer';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-950 border-t border-dark-800 carbon-pattern text-gray-400">
      {/* 24/7 Breakdown Hotline Banner */}
      <div className="bg-gradient-to-r from-racing-600 via-racing-500 to-racing-600 text-white py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-black/25 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wide uppercase block">
                24/7 Emergency Breakdown & Flatbed Towing Assistance
              </span>
              <span className="text-xs text-white/80">
                Rapid response recovery fleet deployed across all city sectors.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543219"
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-dark-950 hover:bg-black text-white text-xs font-mono font-bold tracking-wider rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-racing-500" />
              <span>HOTLINE: +91 98765 43219</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 p-2 flex items-center justify-center shadow-metal-card group-hover:border-electric-500/60 transition-all">
                <Wrench className="w-5 h-5 text-electric-400 -rotate-45" />
              </div>
              <div>
                <span className="font-display text-2xl font-black tracking-wider text-white uppercase block">
                  AUTOCRAFT
                </span>
                <span className="text-[10px] tracking-widest text-electric-400 uppercase font-mono">
                  GARAGE & DETAILING STUDIO
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Concourse-grade detailing, multi-stage paint correction, Hunter 3D laser alignment, and dealer-level mechanical diagnostics engineered for performance automobiles and everyday commuters.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-dark-800 text-gray-300">
                BOSCH DIAGNOSTICS
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-dark-800 text-gray-300">
                HUNTER 3D ALIGNMENT
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-dark-800 text-gray-300">
                9H MATRIX CERAMIC
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Routes */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Mission Routes
            </h4>
            <ul className="space-y-2 text-sm">
              {navigationRoutes.slice(0, 4).map((r) => (
                <li key={r.path}>
                  <Link 
                    href={r.path}
                    className="hover:text-electric-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] font-mono text-gray-600">{r.gear.split(' / ')[0]}</span>
                    <span>{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Routes */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Specialized Care
            </h4>
            <ul className="space-y-2 text-sm">
              {navigationRoutes.slice(4).map((r) => (
                <li key={r.path}>
                  <Link 
                    href={r.path}
                    className="hover:text-electric-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[10px] font-mono text-gray-600">{r.gear.split(' / ')[0]}</span>
                    <span>{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Workshop Hub
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
              <span>Plot 42, Speed Corridor, Sector 18, Motor City Hub, Bengaluru</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-electric-400 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs">
              <Mail className="w-4 h-4 text-electric-400 shrink-0" />
              <a href="mailto:service@autocraftgaragedetailing.com" className="hover:text-white transition-colors truncate">
                service@autocraftgaragedetailing.com
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs pt-1 border-t border-dark-800">
              <Clock className="w-4 h-4 text-racing-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-gray-300 font-semibold">Mon - Sat: 8:00 AM - 8:00 PM</span>
                <span className="block text-gray-500">Sunday: 9:00 AM - 5:00 PM (Detailing)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-dark-800 text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> AUTOCRAFT is an industry-specific demonstration website for automotive garages, detailing studios, tyre shops, and repair centers.
            </span>
          </div>
          <div className="font-mono text-gray-500 text-center md:text-right">
            <span>© 2026 AUTOCRAFT Garage & Detailing. Industry-Specific Website Demonstrations.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
