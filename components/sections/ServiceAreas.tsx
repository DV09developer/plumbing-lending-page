"use client";

import React, { useState } from "react";
import { SERVICE_AREAS, COMPANY_INFO } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, CheckCircle, Navigation, Radio, Phone, ExternalLink } from "lucide-react";

interface ServiceAreasProps {
  googleMapsApiKey?: string; // Configurable for future live Google Maps API embed
  mapEmbedUrl?: string; // Optional custom embed URL
}

export function ServiceAreas({ mapEmbedUrl }: ServiceAreasProps) {
  const [selectedArea, setSelectedArea] = useState(SERVICE_AREAS[0]);
  const [pincodeCheck, setPincodeCheck] = useState("");
  const [pincodeResult, setPincodeResult] = useState<string | null>(null);

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincodeCheck.trim()) return;

    const match = SERVICE_AREAS.some(
      (a) => a.zip === pincodeCheck.trim() || a.name.toLowerCase().includes(pincodeCheck.toLowerCase().trim())
    );

    if (match) {
      setPincodeResult("Great news! We have active plumbing dispatch units available in your area.");
    } else {
      setPincodeResult("We are currently expanding! Please call our dispatch line to confirm immediate proximity.");
    }
  };

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-[#F5F9FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="LOCAL COVERAGE NETWORK"
          title="Plumbing Services in Your Area"
          description="Providing reliable plumbing assistance across our service locations. Our teams are strategically positioned for prompt response times."
          align="center"
        />

        {/* 6 Location Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {SERVICE_AREAS.map((area) => {
            const isSelected = selectedArea.name === area.name;
            return (
              <button
                key={area.name}
                onClick={() => setSelectedArea(area)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 relative ${
                  isSelected
                    ? "bg-[#102A43] text-white border-[#102A43] shadow-md scale-102"
                    : "bg-white text-[#102A43] border-slate-200 hover:border-[#1677C8]/50 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs ${
                      isSelected ? "bg-[#24B8C7] text-[#102A43]" : "bg-[#1677C8]/10 text-[#1677C8]"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <Radio
                    className={`w-3.5 h-3.5 ${
                      isSelected ? "text-[#24B8C7] fill-[#24B8C7]" : "text-slate-300"
                    }`}
                  />
                </div>
                <h4 className="font-bold text-xs sm:text-sm tracking-tight">{area.name}</h4>
                <p
                  className={`text-[10px] mt-1 font-medium ${
                    isSelected ? "text-slate-300" : "text-[#627789]"
                  }`}
                >
                  PIN: {area.zip}
                </p>
                <div className="mt-2 pt-2 border-t border-current/10 flex items-center gap-1 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{area.activeTeams}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Split Layout: Interactive Map Placeholder & Coverage Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Section (Configurable for Google Maps embed) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden flex flex-col">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#1677C8]" />
                <span className="font-semibold text-slate-800">
                  Interactive Service Dispatch Map
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
                  {selectedArea.name} Sector
                </span>
              </div>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                Live Zone Placeholder
              </span>
            </div>

            {/* Map Visual Component */}
            <div className="relative min-h-[340px] sm:min-h-[400px] flex-1 bg-slate-900 overflow-hidden flex items-center justify-center">
              {mapEmbedUrl ? (
                <iframe
                  title="AquaFlow Service Location Map"
                  src={mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              ) : (
                /* Google Maps Stylized Dark/Blueprint Canvas Placeholder */
                <div className="relative w-full h-full min-h-[340px] bg-[#0E1E2F] p-6 flex flex-col justify-between select-none">
                  {/* Grid Lines Pattern */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#24B8C7_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1677C8_1px,transparent_1px),linear-gradient(to_bottom,#1677C8_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                  {/* Stylized River / Road vector curve */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                    viewBox="0 0 800 400"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,200 C200,100 400,300 800,150"
                      fill="none"
                      stroke="#24B8C7"
                      strokeWidth="18"
                    />
                    <path
                      d="M100,0 C300,250 500,100 700,400"
                      fill="none"
                      stroke="#1677C8"
                      strokeWidth="10"
                    />
                  </svg>

                  {/* Top Map UI Controls */}
                  <div className="relative z-10 flex justify-between items-center text-xs text-white">
                    <div className="bg-[#102A43]/90 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Dispatch Status: <strong>Optimal Response Time</strong></span>
                    </div>

                    <div className="bg-[#102A43]/90 backdrop-blur px-2.5 py-1 rounded text-[10px] text-slate-300 border border-slate-700">
                      Standard Mapbox/Google Embed Ready
                    </div>
                  </div>

                  {/* Active Pinpoint Marker */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#24B8C7]/20 animate-ping absolute" />
                      <div className="w-12 h-12 rounded-full bg-[#1677C8] border-2 border-white flex items-center justify-center text-white shadow-xl">
                        <MapPin className="w-6 h-6 text-[#24B8C7]" />
                      </div>
                    </div>

                    {/* Zone Info Card floating above marker */}
                    <div className="mt-3 bg-[#102A43] text-white px-4 py-2.5 rounded-xl border border-slate-700 shadow-2xl text-center max-w-xs animate-fadeIn">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#24B8C7]">
                        Active Dispatch Zone
                      </p>
                      <p className="text-sm font-extrabold text-white">
                        {selectedArea.name} ({selectedArea.zip})
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Key Hub: {selectedArea.landmark}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Map Legend */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span>Available Units</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#24B8C7]" />
                        <span>Service Boundary</span>
                      </span>
                    </div>
                    <span>Configurable Maps Container</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Check Your Area & Quick Call */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            {/* Pincode / Area Checker Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
              <h4 className="text-base font-bold text-[#102A43] mb-1">
                Check Availability in Your Pincode
              </h4>
              <p className="text-xs text-[#627789] mb-4">
                Enter your area or postal code to verify instant plumber dispatch.
              </p>

              <form onSubmit={handleCheckPincode} className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={pincodeCheck}
                    onChange={(e) => {
                      setPincodeCheck(e.target.value);
                      setPincodeResult(null);
                    }}
                    placeholder="e.g. 400001 or Northside"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#1677C8] focus:ring-2 focus:ring-[#1677C8]/20 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1677C8] hover:bg-[#1262A6] text-white text-xs sm:text-sm font-semibold py-2.5 rounded-lg transition-colors shadow-sm"
                >
                  Verify Coverage
                </button>
              </form>

              {pincodeResult && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 animate-fadeIn flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pincodeResult}</span>
                </div>
              )}
            </div>

            {/* Rapid Dispatch Contact Box */}
            <div className="bg-gradient-to-br from-[#102A43] to-[#0A1C2E] text-white rounded-2xl p-6 border border-slate-700/80 shadow-card">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#24B8C7] mb-2">
                <MapPin className="w-4 h-4" />
                <span>Stationed Near You</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Need rapid service in {selectedArea.name}?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Our local mobile service vans carry heavy-duty hydro-jetters, thermal pipe detectors, and replacement parts to solve issues on the spot.
              </p>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#24B8C7] hover:bg-[#1fa0ad] text-[#102A43] text-xs sm:text-sm font-bold py-3 rounded-lg transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Demo Notice */}
            <p className="text-[11px] text-slate-400 italic text-center">
              * Demonstration service locations shown for regional showcase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

