import type { Metadata, Viewport } from "next";
import "./globals.css";
import { COMPANY_INFO } from "@/lib/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#102A43",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aquaflow-plumbing.demo"),
  title: {
    default: "AquaFlow Plumbing | Reliable Local Plumbing Services & Emergency Repairs",
    template: "%s | AquaFlow Plumbing",
  },
  description:
    "Professional residential and commercial plumbing services. Fast 24/7 emergency response, transparent pricing, leak detection, drain cleaning, and master workmanship.",
  keywords: [
    "plumbing services",
    "emergency plumber",
    "leak detection",
    "drain cleaning",
    "water heater repair",
    "bathroom plumbing",
    "pipe installation",
    "AquaFlow Plumbing",
    "commercial plumbing",
  ],
  authors: [{ name: "AquaFlow Plumbing Team" }],
  creator: "AquaFlow Plumbing",
  publisher: "AquaFlow Plumbing",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquaflow-plumbing.demo",
    title: "AquaFlow Plumbing | Reliable Local Plumbing Services",
    description:
      "24/7 emergency plumbing, upfront pricing, and certified workmanship across all local districts. Book online or call for immediate dispatch.",
    siteName: "AquaFlow Plumbing",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AquaFlow Professional Plumbing Technician at Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaFlow Plumbing | Reliable Plumbing Solutions",
    description:
      "Dependable residential and commercial plumbing services with upfront pricing and 24/7 rapid emergency dispatch.",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://aquaflow-plumbing.demo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness / Plumber JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": COMPANY_INFO.name,
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://aquaflow-plumbing.demo",
    "url": "https://aquaflow-plumbing.demo",
    "telephone": COMPANY_INFO.phoneRaw,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "42 Waterworks Avenue, Central District",
      "addressLocality": "Metro City",
      "postalCode": "400001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.076,
      "longitude": 72.8777,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    ],
    "areaServed": [
      "Downtown",
      "Northside",
      "West End",
      "Riverside",
      "Greenfield",
      "Central District",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plumbing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leak Detection & Repair",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drain Cleaning",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Plumbing",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pipe Installation & Repair",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Water Heater Services",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#172B3A] bg-[#F5F9FC]">
        {children}
      </body>
    </html>
  );
}
