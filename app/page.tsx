"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/ui/FloatingContact";

import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { BookingForm } from "@/components/sections/BookingForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState<string>("");

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FC] text-[#172B3A] selection:bg-[#24B8C7]/30 selection:text-[#102A43]">
      {/* Sticky Header with Top Emergency Alert */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Statistics Bar */}
        <TrustBar />

        {/* 3. Plumbing Services Grid */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Why Choose Us Split Section */}
        <WhyChooseUs />

        {/* 5. Pricing & Service Packages */}
        <Pricing onSelectPlan={handleSelectService} />

        {/* 6. How It Works 3-Step Process */}
        <Process />

        {/* 7. Customer Testimonials */}
        <Testimonials />

        {/* 8. Service Areas & Interactive Map */}
        <ServiceAreas />

        {/* 9. Request a Free Quote Section */}
        <QuoteForm />

        {/* 10. Book a Service Appointment Form */}
        <BookingForm selectedService={selectedService} />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Final Closing Call to Action */}
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp and Call Integration */}
      <FloatingContact />
    </div>
  );
}

