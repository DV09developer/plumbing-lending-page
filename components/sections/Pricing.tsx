"use client";

import React from "react";
import { PRICING_PLANS } from "@/lib/constants";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AlertCircle, ShieldCheck } from "lucide-react";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const handleSelect = (planName: string) => {
    onSelectPlan(planName);
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TRANSPARENT ESTIMATES"
          title="Quality Plumbing Without Surprises"
          description="Explore our sample service packages and get an idea of our transparent pricing. No hidden fees or inflated emergency rates."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelectPlan={handleSelect}
            />
          ))}
        </div>

        {/* Disclaimer Note (Required by prompt) */}
        <div className="mt-12 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5 text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="font-semibold text-amber-950">
              Pricing Disclaimer & Transparent Commitment:
            </p>
            <p className="text-amber-800 leading-relaxed">
              These are illustrative demo prices only. Final pricing depends on service requirements and inspection. All repairs receive a clear written quote before work begins.
            </p>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#24B8C7]" />
          <span>Every paid service comes with our 30 to 90-day peace-of-mind workmanship warranty.</span>
        </div>
      </div>
    </section>
  );
}

