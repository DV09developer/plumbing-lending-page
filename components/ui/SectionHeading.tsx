import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3",
            isDark
              ? "bg-[#24B8C7]/20 text-[#24B8C7] border border-[#24B8C7]/30"
              : "bg-[#1677C8]/10 text-[#1677C8] border border-[#1677C8]/20"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight",
          isDark ? "text-white" : "text-[#102A43]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-[#627789]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

