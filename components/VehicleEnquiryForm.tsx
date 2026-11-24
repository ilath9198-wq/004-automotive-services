'use client';

import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  Mail, 
  Car, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Send, 
  MessageSquare,
  ShieldCheck,
  Wrench
} from 'lucide-react';

export default function VehicleEnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    regNumber: '',
    vehicleType: 'sedan',
    service: 'General Car Servicing & Health Check',
    preferredDate: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Full name is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) err.phone = 'Valid phone number required.';
    if (!formData.vehicleMake.trim()) err.vehicleMake = 'Vehicle make is required.';
    if (!formData.vehicleModel.trim()) err.vehicleModel = 'Vehicle model is required.';
    if (!formData.preferredDate) err.preferredDate = 'Preferred appointment date is required.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const generated = `AC-ENG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(generated);
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AUTOCRAFT Garage! Here is my workshop enquiry #${refCode}:\n` +
    `• Name: ${formData.name}\n` +
    `• Vehicle: ${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleType})\n` +
    `• Reg No: ${formData.regNumber || 'N/A'}\n` +
    `• Service: ${formData.service}\n` +
    `• Preferred Date: ${formData.preferredDate}\n` +
    `• Notes: ${formData.notes || 'None'}`
  );

  return (
    <div className="w-full bg-dark-900 border border-dark-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Top Subtle Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-racing-500 to-electric-500" />

      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-electric-500/20 border-2 border-electric-400 text-electric-400 flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-electric-400 bg-electric-500/10 border border-electric-500/30 rounded-full">
            REFERENCE TICKET: {refCode}
          </span>
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            Enquiry Logged in Telemetry Queue
          </h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our service director has received your inquiry for your{' '}
            <strong className="text-electric-400">{formData.vehicleMake} {formData.vehicleModel}</strong> and will contact you within 30 minutes.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919876543210?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold rounded-xl transition-colors text-sm shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Forward Ticket to WhatsApp</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-6 py-3 bg-dark-800 hover:bg-dark-700 text-white rounded-xl text-sm font-medium border border-dark-700 transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="mb-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
              Vehicle Service Enquiry & Slot Request
            </h3>
            <p className="text-xs text-gray-400">
              Provide vehicle details for instant workshop telemetry allocation and quote.
            </p>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Customer Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email & Registration Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Email Address (Optional)
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. vikram@example.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Registration Number (Optional)
              </label>
              <input
                type="text"
                value={formData.regNumber}
                onChange={(e) => setFormData({ ...formData, regNumber: e.target.value.toUpperCase() })}
                placeholder="e.g. MH 02 CD 9921"
                className="w-full px-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm font-mono focus:border-electric-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Vehicle Make, Model & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Vehicle Make *
              </label>
              <div className="relative">
                <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                  placeholder="e.g. BMW / Toyota"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
              {errors.vehicleMake && <p className="text-xs text-red-400 mt-1">{errors.vehicleMake}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Vehicle Model *
              </label>
              <input
                type="text"
                value={formData.vehicleModel}
                onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                placeholder="e.g. M3 Competition / Fortuner"
                className="w-full px-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
              />
              {errors.vehicleModel && <p className="text-xs text-red-400 mt-1">{errors.vehicleModel}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Vehicle Class
              </label>
              <select
                value={formData.vehicleType}
                onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                className="w-full px-3 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
              >
                <option value="hatchback">Hatchback</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV / MUV</option>
                <option value="luxury">Luxury / Exotic</option>
                <option value="two-wheeler">Two-Wheeler / Superbike</option>
              </select>
            </div>
          </div>

          {/* Service & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Required Service Category
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
              >
                <option value="General Car Servicing & Health Check">General Car Servicing & Health Check</option>
                <option value="Engine & Transmission Diagnostics">Engine & Transmission Diagnostics</option>
                <option value="Brake Overhaul & Performance Rotors">Brake Overhaul & Performance Rotors</option>
                <option value="Precision AC Servicing & Leak Repair">Precision AC Servicing & Leak Repair</option>
                <option value="3-Stage Paint Correction & High Gloss">3-Stage Paint Correction & High Gloss</option>
                <option value="9H Matrix Ceramic Coating Package">9H Matrix Ceramic Coating Package</option>
                <option value="Self-Healing Paint Protection Film (PPF)">Self-Healing Paint Protection Film (PPF)</option>
                <option value="Executive Interior Steam Spa & Sanitization">Executive Interior Steam Spa & Sanitization</option>
                <option value="Hunter 3D Laser Wheel Alignment">Hunter 3D Laser Wheel Alignment</option>
                <option value="Two-Wheeler Performance Servicing">Two-Wheeler Performance Servicing</option>
                <option value="Other Custom Requirement">Other Custom Requirement</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                Preferred Appointment Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
                />
              </div>
              {errors.preferredDate && <p className="text-xs text-red-400 mt-1">{errors.preferredDate}</p>}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
              Additional Details / Symptoms Observed
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Describe any symptoms, warning lamps, odd noises, or preferred timing..."
              className="w-full px-3.5 py-2.5 bg-dark-850 border border-dark-700 rounded-xl text-white text-sm focus:border-electric-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-base tracking-wider uppercase rounded-xl shadow-glow-cyan transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Transmit Service Enquiry</span>
          </button>
        </form>
      )}
    </div>
  );
}
