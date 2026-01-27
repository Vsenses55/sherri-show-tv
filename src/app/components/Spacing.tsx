import { useState } from "react";

interface SpacingScale {
  name: string;
  value: string;
  pixels: string;
  rem: string;
}

const spacingScales: SpacingScale[] = [
  { name: "0", value: "0", pixels: "0px", rem: "0rem" },
  { name: "0.5", value: "0.5", pixels: "2px", rem: "0.125rem" },
  { name: "1", value: "1", pixels: "4px", rem: "0.25rem" },
  { name: "1.5", value: "1.5", pixels: "6px", rem: "0.375rem" },
  { name: "2", value: "2", pixels: "8px", rem: "0.5rem" },
  { name: "2.5", value: "2.5", pixels: "10px", rem: "0.625rem" },
  { name: "3", value: "3", pixels: "12px", rem: "0.75rem" },
  { name: "3.5", value: "3.5", pixels: "14px", rem: "0.875rem" },
  { name: "4", value: "4", pixels: "16px", rem: "1rem" },
  { name: "5", value: "5", pixels: "20px", rem: "1.25rem" },
  { name: "6", value: "6", pixels: "24px", rem: "1.5rem" },
  { name: "7", value: "7", pixels: "28px", rem: "1.75rem" },
  { name: "8", value: "8", pixels: "32px", rem: "2rem" },
  { name: "9", value: "9", pixels: "36px", rem: "2.25rem" },
  { name: "10", value: "10", pixels: "40px", rem: "2.5rem" },
  { name: "11", value: "11", pixels: "44px", rem: "2.75rem" },
  { name: "12", value: "12", pixels: "48px", rem: "3rem" },
  { name: "14", value: "14", pixels: "56px", rem: "3.5rem" },
  { name: "16", value: "16", pixels: "64px", rem: "4rem" },
  { name: "20", value: "20", pixels: "80px", rem: "5rem" },
  { name: "24", value: "24", pixels: "96px", rem: "6rem" },
  { name: "28", value: "28", pixels: "112px", rem: "7rem" },
  { name: "32", value: "32", pixels: "128px", rem: "8rem" },
  { name: "36", value: "36", pixels: "144px", rem: "9rem" },
  { name: "40", value: "40", pixels: "160px", rem: "10rem" },
  { name: "44", value: "44", pixels: "176px", rem: "11rem" },
  { name: "48", value: "48", pixels: "192px", rem: "12rem" },
  { name: "52", value: "52", pixels: "208px", rem: "13rem" },
  { name: "56", value: "56", pixels: "224px", rem: "14rem" },
  { name: "60", value: "60", pixels: "240px", rem: "15rem" },
  { name: "64", value: "64", pixels: "256px", rem: "16rem" },
  { name: "72", value: "72", pixels: "288px", rem: "18rem" },
  { name: "80", value: "80", pixels: "320px", rem: "20rem" },
  { name: "96", value: "96", pixels: "384px", rem: "24rem" },
];

export function Spacing() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (name: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(name);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Spacing</h2>
        <p className="text-slate-600">
          Consistent spacing scale for margins, padding, and gaps throughout the design system.
        </p>
      </div>

      <div className="space-y-3">
        {spacingScales.map((scale) => (
          <button
            key={scale.name}
            onClick={() => handleCopy(scale.name, scale.pixels)}
            className="w-full text-left p-4 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
          >
            <div className="flex items-center gap-6">
              {/* Visual representation */}
              <div className="flex items-center justify-center w-24 h-12 bg-slate-50 rounded">
                <div
                  className="bg-[#fe3b84] rounded"
                  style={{
                    width: scale.pixels,
                    height: "8px",
                    maxWidth: "80px",
                  }}
                />
              </div>

              {/* Spacing info */}
              <div className="flex-1 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-baseline gap-3">
                    <code className="text-sm font-mono font-semibold text-slate-900">
                      {scale.name}
                    </code>
                    <span className="text-sm text-slate-500">{scale.pixels}</span>
                    <span className="text-xs text-slate-400">{scale.rem}</span>
                  </div>
                  <code className="text-xs font-mono text-slate-400">
                    p-{scale.name} • m-{scale.name} • gap-{scale.name}
                  </code>
                </div>

                {copiedValue === scale.name ? (
                  <span className="text-xs font-semibold text-[#fe3b84]">Copied!</span>
                ) : (
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-[#fe3b84] transition-colors">
                    Click to copy
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
