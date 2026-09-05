import { useState } from "react";

interface ColorShade {
  hex: string;
  hsl: string;
}

interface ColorPaletteProps {
  scaleName: string;
  shades: Record<string, ColorShade>;
  onColorClick: (shade: string, color: ColorShade) => void;
}

// Helper to determine if text should be light or dark based on background
function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#000000" : "#ffffff";
}

// Helper to get WCAG contrast rating
function getContrastRating(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  if (luminance > 0.7 || luminance < 0.3) return "AAA";
  if (luminance > 0.5 || luminance < 0.4) return "AA";
  return "AA";
}

export function ColorPalette({ scaleName, shades, onColorClick }: ColorPaletteProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleClick = (shade: string, color: ColorShade) => {
    navigator.clipboard.writeText(color.hex);
    setCopiedColor(`${scaleName}/${shade}`);
    setTimeout(() => setCopiedColor(null), 2000);
    onColorClick(shade, color);
  };

  // Filter to only show 100, 300, 500, 700, 900
  const filteredShades = Object.entries(shades).filter(([shade]) =>
    ["100", "300", "500", "700", "900"].includes(shade)
  );

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Heading */}
      <h2 className="font-['Inter'] font-bold text-[20px] leading-[28px] tracking-[-0.4492px] text-[#0f172b] capitalize">
        {scaleName}
      </h2>

      {/* Color Grid - 2x2 on mobile, 5 across on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-[24px]">
        {filteredShades.map(([shade, color]) => {
          const textColor = getContrastColor(color.hex);
          const contrastRating = getContrastRating(color.hex);
          const isCopied = copiedColor === `${scaleName}/${shade}`;

          return (
            <button
              key={shade}
              onClick={() => handleClick(shade, color)}
              className="relative rounded-[10px] border border-[#e2e8f0] p-[17px] flex flex-col gap-[12px] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              {/* Color Preview with WCAG Rating */}
              <div
                className="w-full rounded-[8px] border border-[#e2e8f0] flex items-center justify-center px-[72px] py-[41px] relative"
                style={{ backgroundColor: color.hex }}
              >
                <span
                  className="font-['Montserrat'] font-bold text-[20px] leading-[24px] text-center"
                  style={{ color: textColor }}
                >
                  {contrastRating}
                </span>

                {/* Copied indicator */}
                {isCopied && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-[8px]">
                    <span className="text-white text-xs font-semibold">Copied!</span>
                  </div>
                )}
              </div>

              {/* Color Info */}
              <div className="flex flex-col gap-[4px] text-left">
                <p className="font-['Inter'] font-semibold text-[14px] leading-[20px] text-[#0f172b] capitalize text-left">
                  {scaleName} {shade}
                </p>
                <code className="font-['Menlo'] text-[12px] leading-[16px] text-[#45556c] text-left">
                  {color.hex}
                </code>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}