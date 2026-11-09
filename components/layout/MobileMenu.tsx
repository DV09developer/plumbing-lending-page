"use client";

import React from "react";
import { X, Phone, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#102A43] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slideLeft">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-700/80 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#24B8C7] flex items-center justify-center text-[#102A43]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                AquaFlow
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Emergency Tag */}
          <div className="bg-[#1677C8]/20 border border-[#1677C8]/40 rounded-lg p-3 mb-6 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#24B8C7] shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-white block">24/7 Rapid Dispatch</span>
              <span className="text-slate-300">Under 45 min response</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="w-full flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-slate-700/80 space-y-3 mt-6">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-[#24B8C7]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          <Button
            variant="aqua"
            className="w-full font-bold"
            leftIcon={<Calendar className="w-4 h-4" />}
            onClick={() => handleLinkClick("#booking")}
          >
            Book a Service
          </Button>

          <p className="text-[11px] text-center text-slate-400">
            Licensed & Insured Local Plumbers
          </p>
        </div>
      </div>
    </div>
  );
}

