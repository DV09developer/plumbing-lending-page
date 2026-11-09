"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  BadgePercent,
  Clock,
  ThumbsUp,
  PhoneCall,
  CalendarCheck,
  CheckCircle,
  Star,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-[#F5F9FC] pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle decorative background water wave / gradient patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#1677C8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#24B8C7]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Conversion Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1677C8]/10 border border-[#1677C8]/20 text-[#1677C8] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#24B8C7] animate-ping" />
              <span>YOUR LOCAL PLUMBING EXPERTS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#102A43] tracking-tight leading-[1.15]">
              Reliable Plumbing Solutions.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677C8] to-[#24B8C7]">
                Done Right
              </span>{" "}
              the First Time.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#627789] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From emergency repairs to complete plumbing installations, our experienced team delivers dependable service, transparent pricing, and quality workmanship you can count on.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto shadow-md"
                leftIcon={<CalendarCheck className="w-5 h-5" />}
                onClick={() => scrollTo("booking")}
              >
                Book a Plumber
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => scrollTo("quote")}
              >
                Get a Free Quote
              </Button>
            </div>

            {/* Quick Contact Line */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-600 pt-1">
              <span>Need immediate assistance?</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-bold text-[#1677C8] hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Indicators Pill List */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                  <div className="w-6 h-6 rounded-md bg-[#24B8C7]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#1677C8]" />
                  </div>
                  <span>Licensed & Insured</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                  <div className="w-6 h-6 rounded-md bg-[#24B8C7]/20 flex items-center justify-center shrink-0">
                    <BadgePercent className="w-4 h-4 text-[#1677C8]" />
                  </div>
                  <span>Transparent Pricing</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                  <div className="w-6 h-6 rounded-md bg-[#24B8C7]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#1677C8]" />
                  </div>
                  <span>Fast Response</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#102A43]">
                  <div className="w-6 h-6 rounded-md bg-[#24B8C7]/20 flex items-center justify-center shrink-0">
                    <ThumbsUp className="w-4 h-4 text-[#1677C8]" />
                  </div>
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Plumber Photo & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back decoration ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1677C8] to-[#24B8C7] rounded-3xl opacity-20 blur-xl transform -rotate-2" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="AquaFlow professional plumber inspecting residential water fixture"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />

                {/* Subtle gradient overlay at bottom for card contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Available for Bookings (Required by prompt) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 max-w-[260px] sm:max-w-[280px] animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Available for Bookings
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-[#102A43]">
                      Professional Plumbing Services
                    </h3>
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Same-Day Slots</span>
                  <span className="font-semibold text-[#1677C8]">6 Slots Left Today</span>
                </div>
              </div>

              {/* Floating Card 2: Rating Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-[#102A43] text-sm">4.9 / 5.0</span>
                    <span className="text-[10px] text-slate-400 font-medium">(500+ Reviews)</span>
                  </div>
                  <span className="text-[11px] text-[#627789] block font-medium">
                    Top-Rated Local Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

