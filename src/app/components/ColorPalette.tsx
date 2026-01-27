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

  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-3">
        <h2 className="text-xl font-bold text-slate-900 capitalize">{scaleName}</h2>
        <span className="text-slate-400 text-sm">{Object.keys(shades).length} shades</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
        {Object.entries(shades).map(([shade, color]) => {
          const textColor = getContrastColor(color.hex);
          const contrastRating = getContrastRating(color.hex);
          const isCopied = copiedColor === `${scaleName}/${shade}`;

          return (
            <button
              key={shade}
              onClick={() => handleClick(shade, color)}
              className="group relative text-left transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2 rounded-lg"
            >
              {/* Color Preview */}
              <div
                className="w-full h-24 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: color.hex }}
              >
                <span
                  className="text-2xl font-bold z-10 relative"
                  style={{ color: textColor }}
                >
                  {contrastRating}
                </span>
                
                {/* Copied indicator */}
                {isCopied && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">Copied!</span>
                  </div>
                )}
              </div>

              {/* Color Info */}
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-slate-900 capitalize">
                  {scaleName}/{shade}
                </p>
                <code className="block text-xs font-mono text-slate-600">
                  {color.hex}
                </code>
                <code className="block text-xs font-mono text-slate-400">
                  {color.hsl}
                </code>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
