"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#102A43] text-slate-300 border-t border-slate-800">
      {/* Top Pre-Footer Emergency Strip */}
      <div className="border-b border-slate-800/80 bg-[#0C2033] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">
                Experiencing a Plumbing Emergency Right Now?
              </p>
              <p className="text-xs text-slate-400">
                Our technicians are stationed across all active zones for rapid 24/7 dispatch.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#1677C8] hover:bg-[#1262A6] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile (2 spans on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1677C8] to-[#24B8C7] flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  AquaFlow Plumbing
                </span>
                <span className="text-xs text-[#24B8C7] font-semibold">
                  Reliable • Honest • Quality
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.shortDescription} Dedicated to high-standard residential and commercial plumbing solutions across all local municipal zones.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-[#24B8C7] shrink-0" />
                <span>Certified Master Plumbers • Verified Background Checks</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#24B8C7] shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1677C8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook (Demo)"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1677C8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram (Demo)"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1677C8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn (Demo)"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#home"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#1677C8] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter / X (Demo)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Plumbing Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#24B8C7] transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              Service Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICE_AREAS.map((a) => (
                <li key={a.name}>
                  <a
                    href="#service-areas"
                    className="text-slate-400 hover:text-[#24B8C7] transition-colors flex items-center justify-between"
                  >
                    <span>{a.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">PIN {a.zip}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-700/60 pb-2">
              Contact & Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#24B8C7] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block font-semibold">Toll-Free / Dispatch</span>
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#24B8C7] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] text-slate-500 uppercase block font-semibold">General Inquiries</span>
                    <span className="break-all">{COMPANY_INFO.email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#24B8C7] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-500 uppercase block font-semibold">Main Office (Demo)</span>
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
          <p className="text-xs text-slate-400">
            <strong className="text-slate-300">Portfolio Demonstration Notice:</strong> AquaFlow Plumbing is an illustrative showcase website created to demonstrate high-standard frontend engineering, component modularity, and conversion-focused UX. All statistics, testimonials, pricing, and contact entries are fictional placeholders.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} AquaFlow Plumbing Services. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#quote" className="hover:text-white transition-colors">Privacy Policy (Demo)</a>
            <a href="#quote" className="hover:text-white transition-colors">Terms of Service (Demo)</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

