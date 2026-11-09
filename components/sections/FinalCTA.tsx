"use client";

import React from "react";
import { Phone, CalendarCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#102A43] via-[#1677C8] to-[#102A43] text-white relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#24B8C7]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#102A43]/40 blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#24B8C7] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>FAST • LICENSED • GUARANTEED WORK</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Don&apos;t Let Plumbing Problems Slow You Down.
        </h2>

        <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed">
          Get professional plumbing assistance from a team that puts quality and customer satisfaction first. Available 24/7 for urgent emergencies and planned installations.
        </p>

        {/* Feature Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-100">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#24B8C7]" />
            <span>Under 45-Min Emergency Response</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#24B8C7]" />
            <span>Upfront & Honest Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#24B8C7]" />
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            variant="aqua"
            size="lg"
            className="w-full sm:w-auto shadow-2xl text-base font-extrabold"
            leftIcon={<CalendarCheck className="w-5 h-5" />}
            onClick={scrollToBooking}
          >
            Book a Service
          </Button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#102A43] hover:bg-slate-100 px-6 py-3.5 rounded-lg text-base font-bold transition-all shadow-xl active:scale-95"
          >
            <Phone className="w-5 h-5 text-[#1677C8]" />
            <span>Call Us Now: {COMPANY_INFO.phone}</span>
          </a>
        </div>

        <p className="text-xs text-slate-300 pt-2">
          No advance fees. Speak to our certified master plumbers immediately.
        </p>
      </div>
    </section>
  );
}

