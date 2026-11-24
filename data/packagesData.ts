export type VehicleType = 'hatchback' | 'sedan' | 'suv' | 'luxury';

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  recommendedFor: string;
  isPopular?: boolean;
  pricing: Record<VehicleType, { inr: string; usd: string }>;
  turnaround: string;
  warranty: string;
  inclusions: string[];
  recommendedInterval: string;
}

export const servicePackages: ServicePackage[] = [
  {
    id: 'basic-car-service',
    name: 'Basic Car Service',
    tagline: 'Essential maintenance for everyday reliability and smooth commuting.',
    recommendedFor: 'Routine checkups every 6 months or 5,000 km.',
    pricing: {
      hatchback: { inr: '₹3,499', usd: '$45' },
      sedan: { inr: '₹4,199', usd: '$54' },
      suv: { inr: '₹4,999', usd: '$64' },
      luxury: { inr: '₹6,999', usd: '$89' }
    },
    turnaround: '3 - 4 Hours',
    warranty: '3 Months / 5,000 km',
    recommendedInterval: 'Every 6 Months',
    inclusions: [
      'Synthetic Engine Oil Replacement (Up to 3.5L)',
      'OEM Oil Filter Replacement',
      'Air Filter Clean & Inspection',
      'Coolant & Brake Fluid Top-up',
      '25-Point Comprehensive Health Check',
      'Exterior Pressure Wash & Floor Vacuuming',
      'Battery & Alternator Voltage Check'
    ]
  },
  {
    id: 'premium-car-service',
    name: 'Premium Car Service',
    tagline: 'Complete mechanical overhaul, fluid replacement and electronic diagnostics.',
    recommendedFor: 'Comprehensive annual care or high-mileage highway journeys.',
    isPopular: true,
    pricing: {
      hatchback: { inr: '₹7,999', usd: '$99' },
      sedan: { inr: '₹8,999', usd: '$115' },
      suv: { inr: '₹10,499', usd: '$135' },
      luxury: { inr: '₹14,999', usd: '$190' }
    },
    turnaround: '6 - 7 Hours',
    warranty: '6 Months / 10,000 km',
    recommendedInterval: 'Every 12 Months',
    inclusions: [
      'Full Synthetic Premium Motul / Mobil 1 Oil',
      'Oil, Air, Cabin & Fuel Filter Replacements',
      'Brake Caliper Servicing & Pad Thickness Audit',
      'Spark Plug Cleaning / Calibration',
      'Throttle Body Ultrasound Cleaning',
      'Hunter 3D Laser Wheel Alignment & Balancing',
      'Autel Full ECU Diagnostic Health Scan',
      'AC Gas Pressure Check & Evaporator Sanitization',
      'Complimentary Foam Spa Wash'
    ]
  },
  {
    id: 'complete-car-spa',
    name: 'Complete Car Spa',
    tagline: 'Deep interior steam detailing and exterior high-gloss gloss enhancer.',
    recommendedFor: 'Post-monsoon or pre-festive seasonal visual rejuvenation.',
    pricing: {
      hatchback: { inr: '₹4,999', usd: '$65' },
      sedan: { inr: '₹5,799', usd: '$74' },
      suv: { inr: '₹6,699', usd: '$86' },
      luxury: { inr: '₹8,999', usd: '$115' }
    },
    turnaround: '4 - 5 Hours',
    warranty: '1 Month Gloss Retention',
    recommendedInterval: 'Every 4 - 6 Months',
    inclusions: [
      'pH-Neutral Citrus Foam Pre-Wash & Engine Rinse',
      'Two-Bucket Hand Wash with Microfiber Mitts',
      'Alloy Rim Deep Decontamination & Iron Off',
      '210°C High-Pressure Interior Steam Sanitization',
      'Upholstery Shampoo & Stain Extraction',
      'Dashboard & Trim UV Shield Dressing',
      'Single-Stage Exterior Machine Glaze Polish',
      'Windshield Hydrophobic Treatment'
    ]
  },
  {
    id: 'interior-deep-cleaning',
    name: 'Interior Deep Cleaning & Sanitization',
    tagline: 'Hospital-grade antimicrobial interior extraction and leather restoration.',
    recommendedFor: 'Eliminating stubborn odors, stains, and restoring leather supple texture.',
    pricing: {
      hatchback: { inr: '₹3,999', usd: '$50' },
      sedan: { inr: '₹4,499', usd: '$58' },
      suv: { inr: '₹5,299', usd: '$68' },
      luxury: { inr: '₹7,499', usd: '$96' }
    },
    turnaround: '4 Hours',
    warranty: 'Antimicrobial Protection 90 Days',
    recommendedInterval: 'Twice a Year',
    inclusions: [
      'Full Seat & Carpet Hot-Water Extraction',
      'Leather Deep Conditioning & pH Balance Feed',
      'Ceiling / Headliner Fabric Gentle Steam Lift',
      'Door Cards & Plastic Console Restorative Cream',
      'AC Duct Medical-Grade Ozone Fogging',
      'Trunk & Spare Wheel Well Deep Clean',
      'Anti-Static Dust Repellent Treatment'
    ]
  },
  {
    id: 'exterior-detailing',
    name: 'Exterior Detailing & Paint Correction',
    tagline: 'Multi-stage swirl removal and sealant armor for mirror-like reflections.',
    recommendedFor: 'Removing micro-scratches, buffer trails, and weather oxidation.',
    pricing: {
      hatchback: { inr: '₹6,499', usd: '$85' },
      sedan: { inr: '₹7,499', usd: '$96' },
      suv: { inr: '₹8,999', usd: '$115' },
      luxury: { inr: '₹12,499', usd: '$160' }
    },
    turnaround: '6 - 8 Hours',
    warranty: '6 Months Paint Protection',
    recommendedInterval: 'Once a Year',
    inclusions: [
      'Chemical Fallout Iron & Tar Decontamination',
      'Medium-Grade Clay Bar Smooth Surface Prep',
      'Paint Depth Gauge Micrometer Surface Mapping',
      'Stage 1: Heavy Cutting Compound (Removes 85% Swirls)',
      'Stage 2: Ultra-Fine Jewel Polish (Removes Hazing)',
      'Synthetic Hydrophobic Polymer Sealant Top Coat',
      'Headlight & Taillight Optical Restoration',
      'Chrome & Black Trim Deep Revitalization'
    ]
  },
  {
    id: 'ceramic-coating-package',
    name: '9H Matrix Ceramic Coating Package',
    tagline: 'Military-grade nano-ceramic shield offering extreme hydrophobicity and gloss.',
    recommendedFor: 'Ultimate scratch resistance, chemical defense, and hyper gloss.',
    isPopular: true,
    pricing: {
      hatchback: { inr: '₹18,999', usd: '$240' },
      sedan: { inr: '₹22,999', usd: '$295' },
      suv: { inr: '₹27,999', usd: '$360' },
      luxury: { inr: '₹34,999', usd: '$450' }
    },
    turnaround: '2 Days (48 Hours with Curing)',
    warranty: '3-Year Official Certificate & Annual Inspections',
    recommendedInterval: 'Long-term 3-5 Year Armor',
    inclusions: [
      '3-Stage Precision Paint Correction to 95%+ Clarity',
      'Dual-Layer 9H Hardness Nano-Matrix Ceramic Shield',
      'Dedicated Glass Hydrophobic Rain Repellent Coating',
      'High-Temperature Wheel Caliper & Rim Ceramic Coat',
      'Plastic Trim & Rubber UV Ceramic Protection',
      'Infrared (IR) Short-Wave Thermal Curing Chamber',
      'Digital Warranty Certificate & Annual Free Inspection'
    ]
  },
  {
    id: 'seasonal-vehicle-care',
    name: 'Monsoon & Summer Armor Package',
    tagline: 'Specialized weather shielding against salt, humidity, heat and torrential rain.',
    recommendedFor: 'Seasonal road trip preparation and undercarriage rust prevention.',
    pricing: {
      hatchback: { inr: '₹5,499', usd: '$70' },
      sedan: { inr: '₹6,299', usd: '$80' },
      suv: { inr: '₹7,199', usd: '$92' },
      luxury: { inr: '₹9,499', usd: '$120' }
    },
    turnaround: '4 Hours',
    warranty: 'Seasonal Protection 6 Months',
    recommendedInterval: 'Before Monsoon & Summer',
    inclusions: [
      'Undercarriage Anti-Rust Rubberized Coating Check',
      'Windshield Optical Rain-X Hydrophobic Treatment',
      'Wiper Blade Health Check & Free Pair Replacement',
      'AC High-Load Coolant Flow Diagnostic',
      'Electrical Harness Silicone Dielectric Weatherproofing',
      'Battery Terminal Anti-Sulphation Seal',
      'Tyre Tread Depth Wet Grip Assurance Check'
    ]
  }
];
