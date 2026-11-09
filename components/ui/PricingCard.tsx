import React from "react";
import { Check, Sparkles } from "lucide-react";
import { PricingPlan } from "@/lib/constants";
import { formatINR } from "@/lib/utils";
import { Button } from "./Button";

interface PricingCardProps {
  plan: PricingPlan;
  onSelectPlan: (planName: string) => void;
}

export function PricingCard({ plan, onSelectPlan }: PricingCardProps) {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 p-6 sm:p-8 ${
        isPopular
          ? "bg-gradient-to-b from-[#102A43] to-[#0A1C2E] text-white shadow-elevated scale-100 lg:-translate-y-2 border-2 border-[#24B8C7]"
          : "bg-white text-[#172B3A] border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1"
      }`}
    >
      {/* Popular Ribbon */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 bg-[#24B8C7] text-[#102A43] font-bold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{plan.badge || "Most Popular"}</span>
          </div>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="mb-5">
          <h3 className={`text-xl font-bold ${isPopular ? "text-white" : "text-[#102A43]"}`}>
            {plan.name}
          </h3>
          <p className={`text-xs mt-1 leading-relaxed ${isPopular ? "text-slate-300" : "text-[#627789]"}`}>
            {plan.description}
          </p>
        </div>

        {/* Price display */}
        <div className="mb-6 pb-6 border-b border-slate-100/20">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-4xl font-extrabold tracking-tight ${isPopular ? "text-[#24B8C7]" : "text-[#102A43]"}`}>
              {formatINR(plan.price)}
            </span>
            <span className={`text-xs font-medium ${isPopular ? "text-slate-300" : "text-[#627789]"}`}>
              {plan.period}
            </span>
          </div>
          <span className={`inline-block text-[11px] font-medium mt-1.5 px-2 py-0.5 rounded ${
            isPopular ? "bg-white/10 text-slate-200" : "bg-slate-100 text-slate-600"
          }`}>
            Sample Demo Estimate
          </span>
        </div>

        {/* Feature List */}
        <div className="mb-8">
          <p className={`text-xs font-bold uppercase tracking-wider mb-3.5 ${
            isPopular ? "text-slate-300" : "text-slate-700"
          }`}>
            Package Includes:
          </p>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    isPopular ? "bg-[#24B8C7] text-[#102A43]" : "bg-[#1677C8]/10 text-[#1677C8]"
                  }`}
                >
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className={isPopular ? "text-slate-200" : "text-slate-700"}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action CTA */}
      <div>
        <Button
          variant={isPopular ? "aqua" : "outline"}
          size="md"
          className="w-full text-sm font-bold"
          onClick={() => onSelectPlan(plan.name)}
        >
          {plan.ctaText}
        </Button>
        <p className={`text-[11px] text-center mt-2.5 ${isPopular ? "text-slate-400" : "text-slate-400"}`}>
          Ideal for: {plan.idealFor}
        </p>
      </div>
    </div>
  );
}

