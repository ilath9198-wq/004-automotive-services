'use client';

import React, { useState, useEffect } from 'react';
import { useBooking } from './BookingContext';
import { X, Calendar, Clock, Car, Phone, User, CheckCircle2, ShieldCheck, Wrench, ArrowRight, MessageSquare } from 'lucide-react';

export default function BookingModal() {
  const { isOpen, prefilledService, closeBooking } = useBooking();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    regNumber: '',
    vehicleType: 'sedan',
    service: '',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  // Set default minimum date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: prev.date || dateStr }));
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeBooking();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.length < 8) newErrors.phone = 'Please provide a valid contact number.';
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Please specify vehicle make (e.g. BMW, Honda, Hyundai).';
    if (!formData.service.trim()) newErrors.service = 'Please select or enter the required service.';
    if (!formData.date) newErrors.date = 'Please pick a preferred date.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `AC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeBooking();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AUTOCRAFT Garage! I would like to confirm my booking #${bookingRef || 'NEW'}:\n` +
    `• Name: ${formData.name}\n` +
    `• Vehicle: ${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleType})\n` +
    `• Service: ${formData.service}\n` +
    `• Date: ${formData.date} - ${formData.timeSlot}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-dark-900 border border-dark-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-850 border-b border-dark-700/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-electric-500/10 border border-electric-500/30 flex items-center justify-center text-electric-400">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">
                {isSubmitted ? 'Service Booking Confirmed' : 'Book Workshop Appointment'}
              </h3>
              <p className="text-xs text-gray-400">AUTOCRAFT Garage & Detailing Studio • Precision Care</p>
            </div>
          </div>
          <button
            onClick={closeBooking}
            className="w-8 h-8 rounded-full bg-dark-700/50 hover:bg-dark-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Voucher Screen */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-electric-500/20 border-2 border-electric-400 text-electric-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-electric-400 bg-electric-500/10 border border-electric-500/30 rounded-full mb-3">
              REFERENCE: {bookingRef}
            </span>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Appointment Scheduled Successfully
            </h2>
            <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your slot has been reserved for your{' '}
              <strong className="text-electric-400">{formData.vehicleMake} {formData.vehicleModel}</strong>.
            </p>

            {/* Voucher Card */}
            <div className="bg-dark-800/80 border border-dark-700 rounded-xl p-5 max-w-lg mx-auto text-left mb-6 text-sm">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-dark-700">
                <div>
                  <span className="text-xs text-gray-400 block">Service Requested</span>
                  <span className="font-semibold text-white">{formData.service}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Vehicle Category</span>
                  <span className="font-semibold text-white capitalize">{formData.vehicleType}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <span className="text-xs text-gray-400 block">Appointment Date</span>
                  <span className="font-semibold text-white">{formData.date}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">Time Slot</span>
                  <span className="font-semibold text-white">{formData.timeSlot}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold rounded-lg transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp Concierge</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-lg font-medium transition-colors text-sm"
              >
                Close & Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            {/* Customer Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Vehicle Make & Model *
                </label>
                <div className="relative">
                  <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    placeholder="e.g. Porsche 911 / Honda City"
                    className="w-full pl-10 pr-4 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
                  />
                </div>
                {errors.vehicleMake && <p className="text-xs text-red-400 mt-1">{errors.vehicleMake}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Reg Number (Optional)
                </label>
                <input
                  type="text"
                  value={formData.regNumber}
                  onChange={(e) => setFormData({ ...formData, regNumber: e.target.value.toUpperCase() })}
                  placeholder="e.g. DL 01 AB 1234"
                  className="w-full px-3.5 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm font-mono focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Vehicle Category
                </label>
                <select
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  className="w-full px-3 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none"
                >
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV / MUV</option>
                  <option value="luxury">Luxury / Supercar</option>
                  <option value="two-wheeler">Two-Wheeler / Superbike</option>
                </select>
              </div>
            </div>

            {/* Service & Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Service / Package Required *
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="e.g. 9H Ceramic Coating / General Service"
                  className="w-full px-3.5 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
                />
                {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none"
                  />
                  {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-2 py-2.5 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-xs focus:border-electric-500 focus:outline-none"
                  >
                    <option value="Morning (09:00 AM - 12:00 PM)">Morning (9 - 12)</option>
                    <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12 - 3)</option>
                    <option value="Evening (03:00 PM - 06:00 PM)">Evening (3 - 6)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                Specific Concerns or Instructions (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention any squeaking sounds, warning lights on dashboard, or specific detailing spots..."
                className="w-full px-3.5 py-2 bg-dark-800/90 border border-dark-700 rounded-lg text-white text-sm focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
              />
            </div>

            {/* Guarantees */}
            <div className="flex items-center gap-2 p-3 bg-dark-800/50 border border-dark-700/60 rounded-lg text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-electric-400 shrink-0" />
              <span>Zero-surprise billing. Digital health report shared before any work begins. Free road-test included.</span>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-dark-700">
              <button
                type="button"
                onClick={closeBooking}
                className="px-5 py-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric-500 hover:bg-electric-400 text-dark-950 font-display font-bold text-base tracking-wider uppercase rounded-lg shadow-glow-cyan transition-all"
              >
                <span>Confirm Reservation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
