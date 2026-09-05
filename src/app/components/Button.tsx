import { ButtonHTMLAttributes, forwardRef } from "react";
import svgPaths from "@/imports/svg-yrb6xzbl51";
import arrowSvgPaths from "@/imports/svg-5l8knh41tw";
import arrowUpSvgPaths from "@/imports/svg-qyvgdhb1yi";

export type ButtonVariant = 
  | "primary" 
  | "secondary" 
  | "link" 
  | "arrow-up" 
  | "text-arrow"
  | "small";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children = "LABEL", className = "", disabled, ...props }, ref) => {
    // Primary Button (Pink)
    if (variant === "primary") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`bg-[#fe3b84] hover:bg-[#e5347a] active:bg-[#cc2d6b] disabled:bg-[#f4f4f4] disabled:cursor-not-allowed content-stretch flex items-center justify-center px-[42px] py-[20px] rounded-[4px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2 ${className}`}
          {...props}
        >
          <p className={`font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-[16px] uppercase ${disabled ? "text-[#d3d3d3]" : "text-white"}`}>
            {children}
          </p>
        </button>
      );
    }

    // Secondary Button (Teal)
    if (variant === "secondary") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`bg-[#43bbcf] hover:bg-[#5ac5d8] active:bg-[#3aacbe] disabled:bg-[#e0e0e0] disabled:cursor-not-allowed content-stretch flex items-center justify-center px-[44px] py-[17px] rounded-[4px] transition-colors focus:outline-none focus:ring-2 focus:ring-[#43bbcf] focus:ring-offset-2 ${className}`}
          {...props}
        >
          <p className={`font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-[16px] uppercase ${disabled ? "text-[#b0b0b0]" : "text-white"}`}>
            {children}
          </p>
        </button>
      );
    }

    // Link Button
    if (variant === "link") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`content-stretch flex gap-[10px] items-center justify-center hover:opacity-80 active:opacity-60 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity focus:outline-none focus:ring-2 focus:ring-[#222] focus:ring-offset-2 rounded ${className}`}
          {...props}
        >
          <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-[#222] text-[16px] uppercase">
            {children}
          </p>
          <div className="h-[18px] shrink-0 w-[17.997px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9971 18">
              <path clipRule="evenodd" d={svgPaths.p244bf080} fill="#222222" fillRule="evenodd" />
            </svg>
          </div>
        </button>
      );
    }

    // Arrow Up Button (Circular)
    if (variant === "arrow-up") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`w-[50px] h-[50px] hover:opacity-80 active:opacity-60 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity focus:outline-none focus:ring-2 focus:ring-[#E4FAFC] focus:ring-offset-2 rounded-full ${className}`}
          {...props}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <g>
              <path d={arrowUpSvgPaths.p3fde6280} stroke="#E4FAFC" />
              <path d={arrowUpSvgPaths.p2c66ca80} fill="#E4FAFC" />
            </g>
          </svg>
        </button>
      );
    }

    // Text Arrow Button
    if (variant === "text-arrow") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`border-[#222] border-b border-solid pb-2 hover:border-[#fe3b84] hover:text-[#fe3b84] active:border-[#cc2d6b] active:text-[#cc2d6b] disabled:border-[#d3d3d3] disabled:text-[#d3d3d3] disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#222] focus:ring-offset-2 inline-flex items-center gap-3 ${className}`}
          {...props}
        >
          <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic text-[16px] uppercase">
            {children}
          </p>
          <div className="w-[18.324px] h-[8.654px] translate-y-[1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.324 8.65399">
              <path d={arrowSvgPaths.p3f77b100} fill="currentColor" />
            </svg>
          </div>
        </button>
      );
    }

    // Small Button (Disabled state example)
    if (variant === "small") {
      return (
        <button
          ref={ref}
          disabled={disabled}
          className={`bg-[#f4f4f4] hover:bg-[#e5e5e5] active:bg-[#d4d4d4] disabled:bg-[#f4f4f4] disabled:cursor-not-allowed content-stretch flex items-center justify-center px-[11px] py-[4px] rounded-[4px] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${className}`}
          {...props}
        >
          <p className={`font-['Inter:Black',sans-serif] font-black leading-[13px] not-italic shrink-0 text-[10px] uppercase ${disabled ? "text-[#d3d3d3]" : "text-[#666]"}`}>
            {children}
          </p>
        </button>
      );
    }

    return null;
  }
);

Button.displayName = "Button";