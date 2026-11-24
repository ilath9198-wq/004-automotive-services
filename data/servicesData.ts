export interface AutomotiveService {
  id: string;
  name: string;
  category: 'mechanical' | 'detailing' | 'maintenance' | 'wheels' | 'two-wheeler';
  categoryLabel: string;
  description: string;
  detailedSpecs: string[];
  indicativePrice: string;
  turnaroundTime: string;
  image: string;
  featured: boolean;
}

export const automotiveServices: AutomotiveService[] = [
  {
    id: 'general-servicing',
    name: 'General Car Servicing & Inspection',
    category: 'maintenance',
    categoryLabel: 'Routine Maintenance',
    description: 'Comprehensive 50-point diagnostic health check, multi-fluid replenishment, cabin sanitation, spark plug evaluation, and safety road test.',
    detailedSpecs: [
      '50-Point Digital Health Checklist',
      'Synthetic Oil & OEM Filter Replacement',
      'Spark Plug & Air Filter Inspection',
      'Brake Pad & Rotor Thickness Measurement',
      'Underbody & Suspension Bushing Check'
    ],
    indicativePrice: 'From ₹3,499 / $45',
    turnaroundTime: '3 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'engine-diagnostics',
    name: 'Advanced Engine & ECU Diagnostics',
    category: 'mechanical',
    categoryLabel: 'Diagnostics & Mechanical',
    description: 'Dealer-level OBD-II scanning, live sensor telemetry, ECU fault isolation, compression testing, and fuel delivery calibration.',
    detailedSpecs: [
      'Autel MaxiSys Ultra OEM Diagnostics',
      'Live CAN-Bus Telemetry Logging',
      'Cylinder Compression & Leak-Down Test',
      'Direct-Injection Injector Calibration',
      'Emissions & Catalytic Converter Audit'
    ],
    indicativePrice: 'From ₹1,899 / $25',
    turnaroundTime: '1 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'brake-inspection-repair',
    name: 'Brake Inspection, Rotors & Pad Overhaul',
    category: 'wheels',
    categoryLabel: 'Brakes & Wheels',
    description: 'Precision micrometer rotor runout measurement, Brembo/EBC performance pad fitment, DOT 4/5.1 hydraulic flush, and ABS calibration.',
    detailedSpecs: [
      'Brake Rotor Surface Truing & Micrometer Check',
      'Ceramic / Metallic Performance Pad Replacement',
      'DOT 5.1 Hydraulic Bleeding & Moisture Check',
      'Caliper Piston Seal & Guide Pin Servicing',
      'Electronic Parking Brake Reset'
    ],
    indicativePrice: 'From ₹2,499 / $32',
    turnaroundTime: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'ac-servicing-repair',
    name: 'Precision AC Servicing & Climate Repair',
    category: 'mechanical',
    categoryLabel: 'Climate Control',
    description: 'Automated refrigerant evacuation and recharge (R134a & R1234yf), ultrasonic leak detection, condenser descaling, and ozone cabin deodorization.',
    detailedSpecs: [
      'Dual-Gas R134a / R1234yf Automated Recharging',
      'UV Dye & Nitrogen Ultrasonic Leak Detection',
      'Compressor Clutch & Coil Voltage Verification',
      'Cabin Microfilter Anti-Allergen Replacement',
      'Medical-Grade Ozone Evaporator Decontamination'
    ],
    indicativePrice: 'From ₹2,299 / $30',
    turnaroundTime: '2 Hours',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'oil-filter-replacement',
    name: 'Fully Synthetic Oil & Filter Service',
    category: 'maintenance',
    categoryLabel: 'Fluid Engineering',
    description: 'Premium Motul / Mobil 1 / Castrol Edge fully synthetic oil change paired with OEM micro-fiber filtration and sump plug crush washer renewal.',
    detailedSpecs: [
      'Viscosity Matching per OEM Engine Spec',
      'Magnetic Sump Plug Particle Inspection',
      'OEM High-Flow Oil Filter Element',
      '15-Point Quick Underbody Safety Check',
      'Service Reminder Reset in Vehicle Telematics'
    ],
    indicativePrice: 'From ₹2,999 / $38',
    turnaroundTime: '45 Minutes',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'battery-inspection-replacement',
    name: 'High-Performance Battery & Charging Test',
    category: 'maintenance',
    categoryLabel: 'Electrical & Power',
    description: 'CCA load testing, alternator diode ripple evaluation, parasitic drain check, and replacement with genuine AGM / EFB batteries with warranty.',
    detailedSpecs: [
      'Cold Cranking Amps (CCA) Conductance Test',
      'Alternator Voltage & Diode Ripple Analysis',
      'Parasitic Dark Current Diagnostic Audit',
      'Terminal Cleaning & Anti-Corrosion Coating',
      'BMS (Battery Management System) Registration'
    ],
    indicativePrice: 'From ₹1,499 / $20',
    turnaroundTime: '30 Minutes',
    image: 'https://images.unsplash.com/photo-1534093607318-f025413f49cb?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'tyre-replacement-wheel-balancing',
    name: 'Tyre Fitment, 3D Laser Alignment & Balancing',
    category: 'wheels',
    categoryLabel: 'Tyres & Dynamics',
    description: 'Hunter HawkEye 3D laser alignment, road-force wheel balancing, nitrogen inflation, and performance tyre fitment for all rim diameters up to 24 inches.',
    detailedSpecs: [
      'Hunter HawkEye Elite 3D Laser Geometry',
      'Road Force Vibration Diagnostics',
      'Touchless Leverless Rim Mounting',
      '99.9% Pure Dry Nitrogen Inflation',
      'TPMS Sensor Sync & Re-calibration'
    ],
    indicativePrice: 'From ₹1,299 / $17',
    turnaroundTime: '1 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'car-washing',
    name: 'Touchless High-Pressure Foam Spa',
    category: 'detailing',
    categoryLabel: 'Detailing Studio',
    description: 'pH-neutral snow foam cannon pre-wash, two-bucket grit guard method, deep wheel arch pressure flush, and filtered warm-air blow drying.',
    detailedSpecs: [
      'pH-Neutral Citrus Decontamination Pre-Soak',
      'Gyeon Snow Foam Touchless Lift',
      'Ultra-Plush Korean Microfiber Mitt Wash',
      'Deep Rim Barrel & Caliper Iron Fallout Removal',
      'Filter Air Heated Touchless Blow Drying'
    ],
    indicativePrice: 'From ₹999 / $13',
    turnaroundTime: '1 Hour',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'interior-cleaning',
    name: 'Executive Interior Deep Cleaning & Steam Spa',
    category: 'detailing',
    categoryLabel: 'Detailing Studio',
    description: '210°C pressurized dry steam sanitization, hot water extractor carpet shampooing, leather pH conditioning, and HEPA air purification.',
    detailedSpecs: [
      'High-Temperature Antibacterial Dry Steam Cleaning',
      'Leather Upholstery Deep Feed & UV Protection',
      'Deep Fiber Shampoo & Hot Water Extraction',
      'AC Duct Antimicrobial Fogging',
      'Roof Liner & Trunk Compartment Restoration'
    ],
    indicativePrice: 'From ₹2,799 / $36',
    turnaroundTime: '3 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'exterior-polishing',
    name: 'Concourse Paint Correction & High-Gloss Polish',
    category: 'detailing',
    categoryLabel: 'Detailing Studio',
    description: 'Multi-stage rotary and dual-action machine polishing removing 85-95% of swirl marks, buffer trails, and light oxidation for showroom reflection.',
    detailedSpecs: [
      'Chemical Clay Bar Decontamination',
      'Digital Paint Depth Gauge Micrometer Mapping',
      'Rupes Dual-Action Compound & Polish',
      'Ultra-Reflective Finishing Glaze & Sealant',
      'Microfiber Scratch-Free Hand Buffing'
    ],
    indicativePrice: 'From ₹5,499 / $70',
    turnaroundTime: '5 - 6 Hours',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
    featured: true
  },
  {
    id: 'denting-painting',
    name: 'Precision Dent Repair & Dust-Free Spray Booth',
    category: 'mechanical',
    categoryLabel: 'Bodywork & Paint',
    description: 'Paintless Dent Removal (PDR) and full downdraft climate-controlled oven painting using PPG / Glasurit waterborne OEM color-matching.',
    detailedSpecs: [
      'German Infrared Paint Curing Oven Booth',
      'Spectrophotometer Computerized Color Matching',
      'Paintless Dent Removal (PDR) Technique',
      'High-Solid Ceramic Clear Coat Application',
      '3-Year Warranty Against Peeling & Fading'
    ],
    indicativePrice: 'Per Panel From ₹2,499 / $32',
    turnaroundTime: '24 - 48 Hours',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'car-accessories',
    name: 'Custom Accessories & Performance Electronics',
    category: 'mechanical',
    categoryLabel: 'Upgrades & Tech',
    description: 'Installation of Android Auto / CarPlay head units, dashcam dual surveillance systems, ambient LED fiber optics, and acoustic dampening.',
    detailedSpecs: [
      'OEM Plug-and-Play Wiring Harness Integration',
      '4K Front & Rear Stealth Dashcam Wiring',
      'Acoustic Multi-Layer Sound Deadening Mats',
      'Premium Custom-Fit 7D Floor Protection',
      'High-Output LED Laser Projector Headlight Upgrades'
    ],
    indicativePrice: 'Custom Consultation',
    turnaroundTime: '2 - 4 Hours',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
    featured: false
  },
  {
    id: 'two-wheeler-servicing',
    name: 'Superbike & Two-Wheeler Performance Care',
    category: 'two-wheeler',
    categoryLabel: 'Two-Wheeler Studio',
    description: 'Specialized motorcycle lift bays for supersports, adventure tourers, and commuters: chain ultrasound cleaning, synchro carb/throttle body calibration.',
    detailedSpecs: [
      'Hydraulic Motorcycle Lift & Torque Check',
      'Chain Ultrasound Cleansing & Motul Lube',
      'Fork Seal & Monoshock Damping Tuning',
      'Multi-Throttle Body Vacuum Balancing',
      'Motorcycle Ceramic Shield Application'
    ],
    indicativePrice: 'From ₹1,799 / $23',
    turnaroundTime: '2 - 3 Hours',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=85',
    featured: false
  }
];
