"use client";

import React, { useState } from "react";
import { FAQS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello AquaFlow, I have a question regarding your plumbing services."
  )}`;

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F9FC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Got Questions? We Have Answers."
          description="Everything you need to know about our local plumbing services, diagnostic processes, transparent pricing, and booking."
          align="center"
        />

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#102A43] pr-4 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#1677C8]/10 text-[#1677C8] flex items-center justify-center text-xs shrink-0 font-bold">
                      Q{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#1677C8] text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#627789] leading-relaxed border-t border-slate-100 bg-slate-50/50 animate-fadeIn">
                    <p className="pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Query Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#1677C8]" />
              Still have a specific plumbing question?
            </h4>
            <p className="text-xs text-[#627789]">
              Our technical helpdesk is on standby to assist with custom situations or commercial jobs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#102A43] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1677C8]" />
              <span>Call Us</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

