"use client";

import React from "react";
import { SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const handleBookService = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR COMPREHENSIVE SERVICES"
          title="Complete Plumbing Solutions for Every Need"
          description="Professional plumbing services designed to keep your home and business running smoothly. From precision repairs to new installations, we handle it all."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={handleBookService}
            />
          ))}
        </div>

        {/* Emergency Callout Card Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#102A43] via-[#1677C8] to-[#102A43] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700/50">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-[#24B8C7]">
              Need a Custom Commercial or Industrial Job?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              We provide heavy-duty commercial plumbing consultations.
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Restaurants, multi-family housing complexes, retail outlets, and office facilities.
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => {
                const quoteSection = document.getElementById("quote");
                if (quoteSection) quoteSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-[#102A43] font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition-colors"
            >
              Request Custom Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

