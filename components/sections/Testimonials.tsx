import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle, Info } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CLIENT EXPERIENCES"
          title="What Our Customers Say"
          description="Read experiences from homeowners and property managers who rely on AquaFlow for rapid, immaculate plumbing solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F5F9FC] rounded-2xl p-7 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#1677C8]/20 bg-slate-200 shrink-0">
                      <Image
                        src={t.avatar}
                        alt={`Photo of ${t.name}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#102A43] flex items-center gap-1.5">
                        <span>{t.name}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-[#24B8C7]" />
                      </h3>
                      <p className="text-xs text-[#627789]">{t.role}</p>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#1677C8]/20 group-hover:text-[#1677C8]/40 transition-colors" />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-slate-700 ml-1.5">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Review text */}
                <p className="text-xs sm:text-sm text-[#172B3A] leading-relaxed italic mb-4">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Footer: Service tag & timestamp */}
              <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#1677C8] font-semibold text-[11px] border border-slate-200">
                  {t.service}
                </span>
                <span className="text-[11px] text-slate-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Disclaimer (Prompt Requirement) */}
        <div className="mt-12 max-w-2xl mx-auto p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <Info className="w-4 h-4 text-[#1677C8] shrink-0" />
          <span>
            <strong>Demo Content Notice:</strong> These reviews are illustrative demonstration entries for website preview purposes and do not represent verified third-party customer accounts.
          </span>
        </div>
      </div>
    </section>
  );
}

