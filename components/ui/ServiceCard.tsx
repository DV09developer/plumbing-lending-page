"use client";

import React, { useState } from "react";
import {
  Flame,
  Search,
  Wrench,
  Bath,
  Workflow,
  ThermometerSun,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { PlumbingService } from "@/lib/constants";
import { Button } from "./Button";

interface ServiceCardProps {
  service: PlumbingService;
  onBookService?: (serviceName: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-amber-500" />,
  SearchCheck: <Search className="w-6 h-6 text-[#1677C8]" />,
  Wrench: <Wrench className="w-6 h-6 text-[#24B8C7]" />,
  Bath: <Bath className="w-6 h-6 text-[#1677C8]" />,
  Pipette: <Workflow className="w-6 h-6 text-[#102A43]" />,
  ThermometerSun: <ThermometerSun className="w-6 h-6 text-orange-500" />,
};

export function ServiceCard({ service, onBookService }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBookClick = () => {
    setIsOpen(false);
    if (onBookService) {
      onBookService(service.title);
    } else {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
        <div>
          {/* Top Row: Icon & Badge */}
          <div className="flex items-center justify-between gap-2 mb-5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1677C8]/10 transition-all duration-300">
              {iconMap[service.iconName] || <Wrench className="w-6 h-6 text-[#1677C8]" />}
            </div>
            {service.badge && (
              <span className="text-[11px] font-bold uppercase tracking-wider bg-rose-50 text-rose-600 border border-rose-200/60 px-2.5 py-1 rounded-full animate-pulse">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title & Short Description */}
          <h3 className="text-xl font-bold text-[#102A43] group-hover:text-[#1677C8] transition-colors mb-2.5">
            {service.title}
          </h3>
          <p className="text-sm text-[#627789] leading-relaxed mb-5">
            {service.shortDesc}
          </p>

          {/* Key Feature Bullets */}
          <ul className="space-y-2 mb-6 pt-3 border-t border-slate-100">
            {service.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#24B8C7] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677C8] hover:text-[#102A43] transition-colors group/btn"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>

          <Button
            size="sm"
            variant="ghost"
            onClick={handleBookClick}
            className="text-xs font-semibold text-[#102A43] hover:bg-[#1677C8]/10 hover:text-[#1677C8]"
          >
            Book Now
          </Button>
        </div>
      </div>

      {/* Detail Modal Dialog for "Learn More" */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-scaleUp">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#1677C8]/10 flex items-center justify-center">
                {iconMap[service.iconName] || <Wrench className="w-6 h-6 text-[#1677C8]" />}
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#1677C8]">Service Breakdown</span>
                <h3 className="text-xl font-bold text-[#102A43]">{service.title}</h3>
              </div>
            </div>

            <p className="text-sm text-[#627789] leading-relaxed mb-6">
              {service.detailedDesc}
            </p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#24B8C7]" />
                What is included in this service:
              </h4>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#24B8C7] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-[#E8F9FB] p-3 rounded-lg border border-[#24B8C7]/30">
              <Clock className="w-4 h-4 text-[#1CA1AF] shrink-0" />
              <span>
                <strong>Typical Response:</strong> Priority scheduling available with same-day technician dispatch.
              </span>
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                Close
              </Button>
              <Button
                variant="secondary"
                size="sm"
                leftIcon={<CalendarCheck className="w-4 h-4" />}
                onClick={handleBookClick}
              >
                Book This Service
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

