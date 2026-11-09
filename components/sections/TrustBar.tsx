import React from "react";
import { TRUST_STATS } from "@/lib/constants";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";

const statIcons = [
  <Award key="exp" className="w-6 h-6 text-[#24B8C7]" />,
  <Users key="cust" className="w-6 h-6 text-[#24B8C7]" />,
  <Clock key="emerg" className="w-6 h-6 text-[#24B8C7]" />,
  <ShieldCheck key="qual" className="w-6 h-6 text-[#24B8C7]" />,
];

export function TrustBar() {
  return (
    <section className="bg-[#102A43] text-white py-10 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {TRUST_STATS.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                {statIcons[index]}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#24B8C7]">
                {stat.label}
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-[200px] leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Demo indicator */}
        <div className="mt-8 pt-4 border-t border-slate-800 text-center">
          <p className="text-[11px] text-slate-400 italic">
            * Metrics represent illustrative demo benchmarks for portfolio presentation purposes.
          </p>
        </div>
      </div>
    </section>
  );
}

