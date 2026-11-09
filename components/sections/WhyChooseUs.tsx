"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, CalendarCheck, Shield, Clock, ThumbsUp } from "lucide-react";
import { WHY_CHOOSE_US_BENEFITS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function WhyChooseUs() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F9FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Professional Plumber Image with Trust Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                  alt="Certified AquaFlow plumbing specialist performing valve and pipe check"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: 100% Guaranteed */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-4 shadow-card border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#24B8C7]/20 flex items-center justify-center text-[#1677C8]">
                  <Shield className="w-5 h-5 text-[#102A43]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#1677C8] block">Ironclad Guarantee</span>
                  <span className="text-xs font-bold text-[#102A43]">100% Workmanship Warranty</span>
                </div>
              </div>

              {/* Floating Badge 2: On-Time Record */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-card border border-slate-100 flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-emerald-600 block">Punctual & Prepared</span>
                  <span className="text-xs font-bold text-[#102A43]">On-Time Service Every Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 6 Benefits */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1677C8]/10 border border-[#1677C8]/20 text-[#1677C8] text-xs font-bold uppercase tracking-wider mb-3">
                <span>THE AQUAFLOW ADVANTAGE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight">
                Why Homeowners Choose AquaFlow
              </h2>
              <p className="mt-3 text-base text-[#627789] leading-relaxed">
                Plumbing issues disrupt your everyday life. That&apos;s why we bring calm, reliability, and master craftsmanship into every home we enter.
              </p>
            </div>

            {/* 6 Key Benefits in 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {WHY_CHOOSE_US_BENEFITS.map((b, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/80 shadow-soft hover:border-[#1677C8]/40 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#24B8C7] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#102A43] mb-1">
                        {b.title}
                      </h4>
                      <p className="text-xs text-[#627789] leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<CalendarCheck className="w-5 h-5" />}
                onClick={scrollToBooking}
                className="w-full sm:w-auto shadow-md"
              >
                Schedule Your Service
              </Button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ThumbsUp className="w-4 h-4 text-[#1677C8]" />
                <span>Join over 500+ satisfied local homeowners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

