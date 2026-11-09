import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export function FormField({
  label,
  error,
  required,
  hint,
  children,
  className,
  theme = "light",
}: FormFieldProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("space-y-1.5", className)}>
      <div className="flex justify-between items-center">
        <label
          className={cn(
            "text-xs sm:text-sm font-semibold tracking-wide block",
            isDark ? "text-slate-200" : "text-[#102A43]"
          )}
        >
          {label}
          {required && <span className="text-red-500 ml-1 font-bold">*</span>}
        </label>
        {hint && (
          <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-500")}>
            {hint}
          </span>
        )}
      </div>

      <div>{children}</div>

      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-500 font-medium mt-1 animate-fadeIn">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

export const inputClasses = (hasError?: boolean, isDark = false) =>
  cn(
    "w-full rounded-lg text-sm px-3.5 py-2.5 transition duration-150 border outline-none",
    isDark
      ? "bg-[#0C2033]/80 border-slate-700 text-white placeholder-slate-400 focus:border-[#24B8C7] focus:ring-2 focus:ring-[#24B8C7]/20"
      : "bg-white border-slate-300 text-[#172B3A] placeholder-slate-400 focus:border-[#1677C8] focus:ring-2 focus:ring-[#1677C8]/20",
    hasError && "border-red-500 focus:border-red-500 focus:ring-red-200 text-red-900",
    "disabled:bg-slate-100 disabled:cursor-not-allowed"
  );

