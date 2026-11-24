export interface GalleryItem {
  id: string;
  title: string;
  category: 'detailing' | 'before-after' | 'workshop' | 'washing' | 'repairs' | 'paint' | 'team';
  categoryLabel: string;
  image: string;
  description: string;
  vehicle: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Porsche 911 GT3 Multi-Stage Ceramic Armor',
    category: 'detailing',
    categoryLabel: 'Car Detailing',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85',
    description: '3-stage rotary correction followed by double 9H ceramic coating and infrared thermal bake.',
    vehicle: 'Porsche 911 GT3 (992)'
  },
  {
    id: 'gal-2',
    title: 'Paint Correction Swirl Removal & High Gloss',
    category: 'paint',
    categoryLabel: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
    description: 'Rupes dual action orbital polisher eliminating deep buffer trails and restoring mirror reflection.',
    vehicle: 'BMW M4 Competition'
  },
  {
    id: 'gal-3',
    title: 'Brembo Caliper Overhaul & Performance Rotors',
    category: 'repairs',
    categoryLabel: 'Repairs & Mechanics',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    description: 'Slotted performance rotors fitted with heat-resistant ceramic pads and DOT 5.1 racing fluid flush.',
    vehicle: 'Mercedes-AMG GT Coupe'
  },
  {
    id: 'gal-4',
    title: 'Engine Diagnostics & Turbo Overhaul Bay',
    category: 'workshop',
    categoryLabel: 'Workshop & Facilities',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
    description: 'Full telemetry logging, direct fuel injector calibration and vacuum line leak testing under hydraulic lift.',
    vehicle: 'BMW TwinPower Turbo S58'
  },
  {
    id: 'gal-5',
    title: 'Touchless pH-Neutral Snow Foam Decontamination',
    category: 'washing',
    categoryLabel: 'Car Washing & Spa',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85',
    description: 'High-density clinging snow foam lifting road grit safely without swirl generation.',
    vehicle: 'Audi RS6 Avant'
  },
  {
    id: 'gal-6',
    title: 'Hydrophobic Ceramic Shield Water Beading Test',
    category: 'before-after',
    categoryLabel: 'Before & After',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=85',
    description: 'Water contact angle exceeding 115° demonstrating ultra-hydrophobic nano matrix protection.',
    vehicle: 'Lamborghini Huracán EVO'
  },
  {
    id: 'gal-7',
    title: 'Full Down-Draft Climate Curing Spray Booth',
    category: 'workshop',
    categoryLabel: 'Workshop & Facilities',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
    description: 'Positive pressure dust-free booth maintaining steady 65°C bake cycle for factory-grade paint finish.',
    vehicle: 'AUTOCRAFT Dedicated Paint Booth'
  },
  {
    id: 'gal-8',
    title: 'Hydraulic Rotary Lift Bay & Chassis Inspection',
    category: 'repairs',
    categoryLabel: 'Repairs & Mechanics',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85',
    description: 'Underbody suspension geometry audit, steering rack bushing check, and transmission fluid replacement.',
    vehicle: 'Ford Mustang V8'
  },
  {
    id: 'gal-9',
    title: 'Concourse Nappa Leather Restoration & Conditioning',
    category: 'detailing',
    categoryLabel: 'Car Detailing',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
    description: 'Deep antimicrobial steam extraction and matte-finish UV conditioner preventing leather creasing.',
    vehicle: 'Bentley Continental GT'
  },
  {
    id: 'gal-10',
    title: 'Master Technician Precision Torque Calibration',
    category: 'team',
    categoryLabel: 'Team and Equipment',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85',
    description: 'Calibrated digital torque wrench tightening cylinder head bolts to strict OEM manufacturer specs.',
    vehicle: 'Engine Assembly Bench'
  },
  {
    id: 'gal-11',
    title: 'Laser Headlight Alignment & Optic Restoration',
    category: 'paint',
    categoryLabel: 'Paint Correction',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
    description: 'Wet-sanded polycarbonate headlight lens cleared of yellowing and sealed with UV ceramic coating.',
    vehicle: 'Lexus LC500'
  },
  {
    id: 'gal-12',
    title: 'Superbike Supersport Dyno Tuning & Chain Service',
    category: 'repairs',
    categoryLabel: 'Repairs & Mechanics',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=85',
    description: 'Motorcycle lift bay service: ultrasonic chain bath, sprocket alignment, and synchro throttle balancing.',
    vehicle: 'Yamaha YZF-R1'
  }
];
