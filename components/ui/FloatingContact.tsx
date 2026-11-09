"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingContact() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Prompt Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#102A43] text-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-700/60 text-xs animate-bounce animate-duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Need immediate assistance? Chat on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex sm:flex-col items-center gap-3">
        {/* Direct Call Button (Mobile & Desktop) */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1677C8] text-white shadow-xl hover:bg-[#1262A6] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#1677C8]/40"
          aria-label={`Call AquaFlow at ${COMPANY_INFO.phone}`}
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="sr-only">Call Us</span>

          {/* Desktop tooltip label */}
          <span className="absolute right-16 bg-[#102A43] text-white text-xs font-semibold px-2.5 py-1 rounded shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
            Call: {COMPANY_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="sr-only">Chat on WhatsApp</span>

          {/* Desktop tooltip label */}
          <span className="absolute right-16 bg-[#102A43] text-white text-xs font-semibold px-2.5 py-1 rounded shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

