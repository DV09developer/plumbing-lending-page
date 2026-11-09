import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { ClipboardList, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";

const stepIcons: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="w-8 h-8 text-[#1677C8]" />,
  FileCheck: <FileCheck className="w-8 h-8 text-[#24B8C7]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
};

export function Process() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F5F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SIMPLE & FAST PROCESS"
          title="How It Works"
          description="Getting your plumbing back in perfect shape is straightforward, hassle-free, and dependable from first contact to final sign-off."
          align="center"
        />

        <div className="relative mt-12">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#1677C8]/20 via-[#24B8C7] to-[#1677C8]/20 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
              >
                {/* Step badge & icon */}
                <div className="relative mb-6">
                  <div className="w-18 h-18 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-4 group-hover:scale-110 group-hover:bg-[#1677C8]/10 transition-all duration-300">
                    {stepIcons[step.iconName]}
                  </div>
                  <span className="absolute -top-2.5 -right-2.5 bg-[#102A43] text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#102A43] mb-2.5 group-hover:text-[#1677C8] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#627789] leading-relaxed max-w-xs">
                  {step.description}
                </p>

                {/* Arrow hint on mobile/tablet */}
                {idx < 2 && (
                  <div className="md:hidden mt-6 text-[#1677C8] opacity-60">
                    <ArrowRight className="w-5 h-5 rotate-90 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500">
            Need emergency assistance right away? You can bypass the online form and{" "}
            <a href="tel:+919876543210" className="font-bold text-[#1677C8] underline">
              call our 24/7 hotline directly
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

