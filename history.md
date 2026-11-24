# Project Architecture & Implementation Guidelines (`history.md`)
> **Project**: 004 Automotive Services — AUTOCRAFT Garage & Detailing  
> **Collection**: Industry-Specific Website Demonstrations  
> **Directives**: Zero `.html` extensions anywhere in filenames, project structure, or routes; independent modern web application stack; multi-page dedicated routing for all 8 navigation options; atmospheric photographic hero backgrounds on all pages (desktop and mobile); distinctive automotive cockpit drawer navigation.

---

## 1. Core Technical Stack & Architectural Decisions

- **Framework**: **Next.js 14 (App Router)** with React 18, TypeScript, and Tailwind CSS.
- **Strict Zero `.html` Rule**:
  - No `.html` extensions in filenames (`page.tsx`, `layout.tsx`, `components/*.tsx`).
  - Native dedicated URLs:
    - `/` (Home)
    - `/about` (About Us)
    - `/services` (Our Services)
    - `/detailing` (Car Detailing)
    - `/repair` (Car Repair & Maintenance)
    - `/gallery` (Gallery)
    - `/packages` (Service Packages)
    - `/contact` (Contact Us)
- **Design System & Visual Language**:
  - **Aesthetic**: Modern high-performance automotive engineering & luxury detailing studio.
  - **Color Palette**: Dark onyx (`#07080a`), chassis charcoal (`#0d0f14`), gunmetal (`#13161c`), electric telemetry cyan (`#00d2ff`), and Brembo racing orange (`#ff5500`).
  - **Typography**: Dual-type high-octane hierarchy: *Rajdhani* for headlines and telemetry labels, paired with *Outfit* for modern body legibility, and *Space Mono* for telemetry coordinates and codes.
  - **HUD Geometries**: Carbon mesh background overlays, metallic border highlights, glowing badge pills, and glassmorphic telemetry cards.

---

## 2. Header & Navigation Architecture

### Distinctive Cockpit Navigation:
- **Header Element Lockup**:
  - `AUTOCRAFT` brand logo with stylized gear & spark emblem.
  - Live facility telemetry indicator (GPS lock, active bays).
  - Phone shortcut link with one-tap dialing.
  - Primary "Book a Service" CTA button triggering the universal interactive modal.
  - Distinctive Cockpit Hamburger icon with kinetic rev-bar animation.
- **Cockpit Drawer Panel (`CockpitDrawer.tsx`)**:
  - Engineered specifically for this automotive project (never recycled from prior demos).
  - High-tech carbon mesh surface with glowing cyan telemetry rev-counter indicators.
  - Dedicated gear markers for each route:
    - `[ P / 01 ]` Home
    - `[ R / 02 ]` About Us
    - `[ N / 03 ]` Our Services
    - `[ D / 04 ]` Car Detailing
    - `[ S / 05 ]` Car Repair & Maintenance
    - `[ M / 06 ]` Gallery
    - `[ L / 07 ]` Service Packages
    - `[ OD / 08 ]` Contact Us
  - Active route highlight with glowing cyan border and telemetry beacon.
  - Quick-contact action dock (One-tap direct phone call, WhatsApp concierge, and 24/7 breakdown helpline).

---

## 3. Mandatory Hero Section Architecture (Permanent Chat Mandate)

- **Photographic Backgrounds Across All Pages**: Every single dedicated route incorporates high-impact, verified Unsplash automotive photography (luxury supercars, detailing studios, engine diagnostics, hydraulic workshop bays).
- **Directional Scrim**: Multi-stop dark gradient scrims (`rgba(7, 8, 10, 0.95)` to `rgba(7, 8, 10, 0.65)`) ensure pure white typography and electric cyan badges maintain crisp legibility.
- **Desktop & Mobile Parity**: The visual automotive photography is visible immediately above the fold on both desktop (1440px) and mobile (390px) without requiring awkward scrolling.

---

## 4. Key Interactive Components

1. **Interactive Before-and-After Slider (`BeforeAfterSlider.tsx`)**:
   - Draggable divider handle with touch and mouse event listeners.
   - Compares swirled, oxidized paint against 3-stage jewel polished and 9H ceramic coated mirror finish.
2. **Universal Booking Modal (`BookingModal.tsx`)**:
   - Accessible from any page via CTA buttons or service cards.
   - Collects customer name, phone, email, vehicle make & model, registration number, service, preferred date, and time slot.
   - Generates a unique digital booking reference code (`AC-2026-XXXX`).
   - Renders a confirmation voucher with direct WhatsApp forwarding.
3. **Dynamic Vehicle Class Package Selector (`PackageSelector.tsx`)**:
   - Interactive vehicle class switcher (Hatchback / Sedan / SUV / Luxury Exotic).
   - Dynamically recalculates indicative package prices in real time.
4. **Full-Screen Gallery Lightbox (`GalleryLightbox.tsx`)**:
   - 8 filter categories with smooth client-side filtering.
   - Image enlargement with keyboard navigation (Arrows & ESC), vehicle tags, and direct service inquiry buttons.
5. **Vehicle Service Enquiry Form (`VehicleEnquiryForm.tsx`)**:
   - Comprehensive contact form with real-time validation and confirmation voucher.

---

## 5. Repository & Version Control

- **GitHub Repository**: `https://github.com/ilath9198-wq/004-automotive-services.git`
- **Isolation Guarantee**: Strictly isolated inside `Industry-Specific Website Demonstrations/004 Automotive Services/`, keeping all prior demonstrations (`001`, `002`, `003`) 100% untouched.
