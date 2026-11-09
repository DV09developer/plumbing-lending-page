# AquaFlow Plumbing – Premium Plumbing Business Website

A modern, trustworthy, conversion-focused website for **AquaFlow Plumbing**, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide React**, **React Hook Form**, and **Zod**.

Designed specifically as a presentation-ready client deliverable for digital marketing agencies pitching local service businesses.

---

## 🌟 Live Demo Highlights & Features

1. **Conversion-Optimized Hero Section**:
   - Compelling value proposition with dual CTAs (*"Book a Plumber"* & *"Get a Free Quote"*).
   - Dynamic floating trust indicators: *"Available for Bookings"* and *"Top-Rated Local Service"*.
   - Responsive emergency call banner with instant 24/7 hotline access.

2. **Interactive 2-Way Service Booking**:
   - Dedicated appointment scheduling form with native past-date prevention.
   - Clicking *"Book This Service"* in the **Services** or **Pricing** section automatically pre-fills the selected package in the booking form.
   - Realistic frontend validation and submission simulation with immediate visual confirmation.

3. **Request a Free Quote (Contrasting Navy Section)**:
   - High-contrast lead capture section with detailed property type and contact preference options.
   - Full Zod schema validation with clear field-level error messages.

4. **Transparent Pricing Packages**:
   - 3 clear tiers priced in INR (Basic Inspection at ₹499, Standard Repair at ₹1,499 [Most Popular], and Premium at ₹2,999).
   - Clear disclaimer highlighting illustrative demo figures.

5. **6 Core Plumbing Services Grid**:
   - Emergency Plumbing, Leak Detection & Repair, Drain Cleaning, Bathroom Plumbing, Pipe Installation & Repair, and Water Heater Services.
   - Modal breakdown with detailed feature checklists and direct booking triggers.

6. **Interactive Service Area & Pincode Checker**:
   - 6 demo municipal locations (Downtown, Northside, West End, Riverside, Greenfield, Central District).
   - Interactive styled map canvas ready for a live Google Maps embed.
   - Live pincode coverage checker.

7. **Omnichannel Contact Integration**:
   - Floating WhatsApp button with pre-configured greeting message (`COMPANY_INFO.whatsappMessage`).
   - Click-to-call `tel:` hotline triggers in header, footer, hero, and emergency callouts.

8. **SEO & Structured Data**:
   - Semantic HTML5 heading hierarchy (H1, H2, H3).
   - `PlumbingService` Schema.org JSON-LD structured data for rich snippets.
   - Dynamic `robots.txt` and `sitemap.xml` generated automatically.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod 3.23](https://zod.dev/) + `@hookform/resolvers`
- **Animations**: CSS transitions + subtle keyframes

---

## 📁 Project Architecture

```
├── app/
│   ├── globals.css          # Tailwind directives, animations & custom scrollbar
│   ├── layout.tsx           # Root layout, metadata, SEO & Schema.org JSON-LD
│   ├── page.tsx             # Main page composing all 12 core sections
│   ├── robots.ts            # Dynamic robots.txt configuration
│   └── sitemap.ts           # Dynamic XML sitemap
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky navigation, emergency bar, call actions
│   │   ├── MobileMenu.tsx   # Slide-in mobile drawer navigation
│   │   └── Footer.tsx       # Multi-column footer, demo disclaimer, back to top
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Conversion hero with floating status cards
│   │   ├── TrustBar.tsx     # 4-column trust & experience statistics bar
│   │   ├── Services.tsx     # 6-card plumbing services grid with modals
│   │   ├── WhyChooseUs.tsx  # Split layout with plumber photo & 6 core benefits
│   │   ├── Pricing.tsx      # 3 INR pricing packages with "Most Popular" ribbon
│   │   ├── Process.tsx      # 3-step timeline (Request -> Quote -> Fix)
│   │   ├── Testimonials.tsx # 3 customer testimonial cards with star ratings
│   │   ├── ServiceAreas.tsx # Coverage grid, map placeholder & pincode checker
│   │   ├── QuoteForm.tsx    # High-contrast navy free quote form
│   │   ├── BookingForm.tsx  # Appointment booking form with date/time picker
│   │   ├── FAQ.tsx          # Accessible accordion with 6 key questions
│   │   └── FinalCTA.tsx     # High-impact closing banner
│   │
│   └── ui/
│       ├── Button.tsx       # Reusable button with variants & loading state
│       ├── FormField.tsx    # Standardized labels, inputs & Zod error display
│       ├── SectionHeading.tsx # Eyebrow pill badge, title & description
│       ├── ServiceCard.tsx  # Interactive service card with modal breakdown
│       ├── PricingCard.tsx  # Pricing tier with features & booking trigger
│       └── FloatingContact.tsx # WhatsApp prompt bubble & click-to-call FAB
│
├── lib/
│   ├── constants.ts         # Central business info, services, pricing & areas
│   ├── validations.ts       # Zod schemas for quote and booking forms
│   └── utils.ts             # Tailwind class merger (cn) & INR currency formatter
│
├── tailwind.config.js       # Brand color palette & elevation shadows
├── tsconfig.json            # TypeScript configuration with @/* path aliases
└── package.json
```

---

## 🎨 Brand Design Tokens

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#102A43` | Main headings, dark containers, headers & footers |
| **Secondary Blue** | `#1677C8` | Primary interactive buttons, icons, accents |
| **Aqua Accent** | `#24B8C7` | Badges, highlights, hover effects, energetic accents |
| **Background** | `#F5F9FC` | Clean modern section background |
| **White** | `#FFFFFF` | Cards, modals, contrast surfaces |
| **Main Text** | `#172B3A` | Body typography, bold titles |
| **Secondary Text**| `#627789` | Descriptions, helper labels |

---

## ⚙️ Configuration & Customization

All business details are centralized in [`lib/constants.ts`](file:///d:/Lending%20Page/plumbing%20site/lib/constants.ts):

- **Phone & WhatsApp**: Update `COMPANY_INFO.phone`, `phoneRaw`, and `whatsappNumber`.
- **Operating Hours**: Update `COMPANY_INFO.operatingHours`.
- **Services**: Modify or add services in the `SERVICES` array.
- **Pricing**: Adjust demo prices in the `PRICING_PLANS` array.
- **Service Locations**: Edit or expand `SERVICE_AREAS`.
- **Google Maps**: In `components/sections/ServiceAreas.tsx`, pass a live `mapEmbedUrl` prop to render an interactive Google Maps iframe.

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📄 License & Attribution

Created for portfolio demonstration and client pitch presentations. All photos are sourced under the Unsplash license.

