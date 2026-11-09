import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "aqua" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variantStyles = {
      primary:
        "bg-[#102A43] text-white hover:bg-[#163b5c] focus:ring-[#102A43] shadow-sm hover:shadow",
      secondary:
        "bg-[#1677C8] text-white hover:bg-[#1262A6] focus:ring-[#1677C8] shadow-sm hover:shadow",
      aqua:
        "bg-[#24B8C7] text-[#102A43] font-semibold hover:bg-[#1fa0ad] focus:ring-[#24B8C7] shadow-sm hover:shadow",
      outline:
        "border-2 border-[#1677C8] text-[#1677C8] bg-transparent hover:bg-[#1677C8]/10 focus:ring-[#1677C8]",
      white:
        "bg-white text-[#102A43] hover:bg-slate-100 focus:ring-white shadow-md hover:shadow-lg font-semibold",
      ghost:
        "bg-transparent text-[#172B3A] hover:bg-slate-100 focus:ring-slate-300",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

