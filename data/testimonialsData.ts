export interface Testimonial {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  service: string;
  content: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikramaditya Singhania',
    role: 'Automotive Collector',
    vehicle: 'Porsche 911 GT3 RS',
    service: '9H Ceramic Coating & PPF Armor',
    content: 'AUTOCRAFT is the only workshop in the city I trust with my GT3 RS. The 3-stage paint correction brought out a liquid-glass depth that surpasses even the factory finish. Their dust-free booth and technician precision are second to none.',
    rating: 5,
    date: 'October 2026'
  },
  {
    id: 'test-2',
    name: 'Ananya Deshmukh',
    role: 'Architect & Track Day Enthusiast',
    vehicle: 'BMW M4 Competition',
    service: 'Brake Upgrade & Engine Diagnostics',
    content: 'I had an intermittent boost-leak issue that two dealerships failed to diagnose. AUTOCRAFT pinpointed the cracked vacuum fitting within 45 minutes using live CAN-bus telemetry. Honest, transparent and deeply knowledgeable mechanics.',
    rating: 5,
    date: 'November 2026'
  },
  {
    id: 'test-3',
    name: 'Rajeev Menon',
    role: 'Managing Partner',
    vehicle: 'Mercedes-AMG G63',
    service: 'Full Premium Service & Interior Spa',
    content: 'The digital video health report they send while your car is on the lift gives complete peace of mind. Every worn part was clearly explained before work began. The steam detailing made the interior look and smell straight out of the showroom.',
    rating: 5,
    date: 'September 2026'
  },
  {
    id: 'test-4',
    name: 'Dr. Siddharth Roy',
    role: 'Surgeon',
    vehicle: 'Audi RS6 Avant',
    service: 'Hunter 3D Alignment & General Service',
    content: 'My high-speed steering vibration was completely resolved thanks to their Hunter road-force balancer. Professional cockpit atmosphere, punctual turnaround, and polite concierge service. Highly recommended!',
    rating: 5,
    date: 'November 2026'
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  credentials: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Marcus Vance',
    role: 'Master Diagnostic Technician & Workshop Chief',
    experience: '18+ Years Experience',
    specialty: 'German Performance & ECU Powertrain Calibrations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    credentials: ['ASE Master Certified (A1-A9)', 'Bosch Diagnostics Specialist', 'Porsche Motorsport Academy Alumni']
  },
  {
    id: 'member-2',
    name: 'Elena Rostova',
    role: 'Chief Detailing Artist & Paint Correction Lead',
    experience: '12+ Years Experience',
    specialty: 'Multi-Stage Jewel Polishing & Nano-Ceramic Systems',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    credentials: ['IDA Certified Master Detailer (CD-SV)', 'Gyeon Certified Installer', 'XPEL PPF Master Technician']
  },
  {
    id: 'member-3',
    name: 'Karan Mehra',
    role: 'Senior Transmission & Chassis Engineer',
    experience: '14+ Years Experience',
    specialty: 'Dual-Clutch Transmissions (DSG/PDK) & Suspension Geometry',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    credentials: ['ZF Drivetrain Certified', 'Hunter Engineering Specialist', 'Brembo Track Brake Technician']
  },
  {
    id: 'member-4',
    name: 'David Sterling',
    role: 'Customer Service & Quality Assurance Director',
    experience: '15+ Years Experience',
    specialty: 'Workshop Telematics & Transparent Customer Experience',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    credentials: ['Automotive Management Institute (AMI)', 'ISO 9001 Workshop Lead Auditor']
  }
];
