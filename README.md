# AUTOCRAFT Garage & Detailing — 004 Automotive Services

> **Industry-Specific Website Demonstrations**  
> **Brand**: AUTOCRAFT Garage & Detailing  
> **Category**: Automotive – Garages, Detailing, Tyre & Wheel, and Repair  
> **Architecture**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide Icons  
> **Zero `.html` Extensions**: Full dedicated routing across all pages (`/`, `/about`, `/services`, `/detailing`, `/repair`, `/gallery`, `/packages`, `/contact`).

---

## 1. Project Overview

**AUTOCRAFT Garage & Detailing** is a modern, high-performance web application designed for automotive businesses—including car repair workshops, luxury detailing studios, tyre & alignment centers, and battery diagnostic facilities.

### Visual & Design Identity:
- **Cockpit Aesthetic**: Deep chassis charcoal (`#0d0f14`), metallic slate (`#13161c`), and carbon mesh backgrounds.
- **High-Octane Accents**: Electric cyan (`#00d2ff`) telemetry glow and Brembo racing orange (`#ff5500`).
- **Atmospheric Hero Architecture**: Every page features an immersive, photographic background with optical dark gradient scrims ensuring high text contrast on desktop and mobile.
- **Distinctive Cockpit Navigation**: Performance gear-selector drawer (`P/01`, `R/02`, `N/03`, `D/04`, etc.) with live diagnostic status indicators.

---

## 2. Dedicated Multi-Page Architecture

Every navigation option has its own dedicated page with zero `.html` extensions:

1. **Home (`/`)**:
   - Hero section with atmospheric luxury supercar background & headline: *"Precision Care. Performance You Can Trust."*
   - Featured automotive services cards.
   - Interactive Before-and-After paint correction slider.
   - Why Choose Us (5 Core Engineering Standards).
   - Real client testimonials and reviews.
   - Featured service packages.
   - Workshop GPS map preview and intake status.

2. **About Us (`/about`)**:
   - Brand heritage and motorsport DNA.
   - Equipment & facilities: Hunter 3D HawkEye, Autel MaxiSys Ultra, Clean Bay studio, short-wave IR curing.
   - Digital video telemetry inspection pledge.
   - Certified master diagnostic technician and detailing artist profiles.

3. **Our Services (`/services`)**:
   - Complete 13-point automotive service catalog with category filtering:
     - General Car Servicing & Health Check
     - Engine & Transmission Diagnostics
     - Brake Overhaul & Performance Rotors
     - Precision AC Servicing & Leak Repair
     - Fully Synthetic Oil & Filter Service
     - High-Performance Battery & Charging Test
     - Tyre Fitment & 3D Laser Alignment
     - Touchless High-Pressure Foam Spa
     - Executive Interior Steam Spa & Sanitization
     - Concourse Paint Correction & High Gloss
     - Precision Dent Repair & Spray Booth
     - Custom Accessories & Performance Electronics
     - Superbike & Two-Wheeler Performance Care
   - "Know More" detailed process modal and direct "Book Service" integration.

4. **Car Detailing (`/detailing`)**:
   - 9H nano-matrix ceramic coating, self-healing paint protection film (PPF), optical headlight restoration, engine bay dressing.
   - 6-step concourse detailing protocol walkthrough.
   - Interactive Before/After paint correction slider.

5. **Car Repair & Maintenance (`/repair`)**:
   - Mechanical workshop disciplines, ECU diagnostics, suspension & steering overhaul.
   - 24/7 Roadside breakdown recovery hotline.
   - Transparent labor and diagnostic rate sheet.

6. **Gallery (`/gallery`)**:
   - Filterable project portfolio (Car Detailing, Before & After, Workshop, Car Washing, Repairs, Paint Correction, Team & Equipment).
   - Full-screen interactive lightbox with zoom, captions, vehicle specifications, next/previous keyboard navigation, and booking hook.

7. **Service Packages (`/packages`)**:
   - Dynamic vehicle class switcher (Hatchback / Sedan / SUV / Luxury Exotic) recalculating prices in real time.
   - 7 bundled care packages with itemized inclusions, warranty certificates, and durations.

8. **Contact Us (`/contact`)**:
   - Workshop GPS location, direct phone lines, operating hours.
   - Interactive dark map placeholder and instant WhatsApp concierge link.
   - Validated Vehicle Service Enquiry Form with confirmation ticket voucher generator.

---

## 3. Front-End Interactive Features

- **Interactive Before-and-After Comparison Slider**: Draggable handle comparing swirled clear-coat against mirror-finish 9H ceramic coating.
- **Universal Booking Modal**: Accessible from any page with vehicle make/model, category, preferred date/slot, and ticket voucher generator.
- **Dynamic Vehicle Class Package Recalculator**: Real-time pricing toggle.
- **Cockpit Telemetry Drawer**: Custom-engineered sliding menu with active route tracking and gear markers.
- **Full-Screen Lightbox**: Responsive photo enlargement with swipe/keyboard navigation.

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 5. Repository Information

- **GitHub Repository**: `https://github.com/ilath9198-wq/004-automotive-services.git`
- **Zero `.html` Guarantee**: Native Next.js App Router architecture throughout.
