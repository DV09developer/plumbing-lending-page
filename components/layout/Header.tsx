"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, ShieldCheck, Clock } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Banner: Emergency Contact & Trust Status */}
      <div className="bg-[#102A43] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase tracking-wide">
              Emergency 24/7
            </span>
            <span className="hidden md:inline text-slate-300">
              Immediate dispatch for water leaks & burst pipes across all service areas
            </span>
            <span className="md:hidden text-slate-300">
              Rapid response under 45 mins
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#24B8C7]" />
              <span>Response: ~45 mins</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#24B8C7]" />
              <span>{COMPANY_INFO.licenseNumber}</span>
            </span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-bold text-white hover:text-[#24B8C7] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#24B8C7]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80"
            : "bg-white py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1677C8] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#102A43] via-[#1677C8] to-[#24B8C7] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              {/* Droplet SVG Icon */}
              <svg
                className="w-6 h-6 fill-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-[#102A43] tracking-tight">
                  AquaFlow
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#1677C8] hidden sm:inline">
                  Plumbing
                </span>
              </div>
              <p className="text-[10px] text-[#627789] tracking-tight hidden sm:block">
                Reliable • Honest • Quality
              </p>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.slice(0, 7).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-xs xl:text-sm font-semibold text-[#172B3A] hover:text-[#1677C8] transition-colors relative py-1 focus:outline-none focus:text-[#1677C8]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Quick Call & Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-[#102A43] hover:text-[#1677C8] hover:bg-slate-50 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-[#1677C8]/10 flex items-center justify-center text-[#1677C8]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <Button
              variant="secondary"
              size="sm"
              leftIcon={<Calendar className="w-3.5 h-3.5" />}
              onClick={() => {
                const target = document.getElementById("booking");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book a Service
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              variant="aqua"
              size="sm"
              className="text-xs px-3 py-1.5 font-bold"
              onClick={() => {
                const target = document.getElementById("booking");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-[#102A43] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1677C8]"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}

