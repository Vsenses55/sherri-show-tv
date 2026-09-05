import { useState } from "react";

interface SpacingScale {
  name: string;
  value: string;
  pixels: string;
  rem: string;
}

interface RadiusScale {
  name: string;
  value: string;
  pixels: string;
  description: string;
}

interface SemanticSpacing {
  name: string;
  value: string;
  pixels: string;
  description: string;
}

interface FontWeight {
  name: string;
  value: string;
  cssValue: string;
}

interface SemanticColor {
  name: string;
  value: string;
  hex: string;
  usage: string;
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

const borderRadius: RadiusScale[] = [
  { name: "minimal", value: "4px", pixels: "4px", description: "Subtle rounded corners for small elements" },
  { name: "maximal", value: "8px", pixels: "8px", description: "Standard rounded corners for cards and containers" },
];

const semanticSpacing: SemanticSpacing[] = [
  { name: "xs", value: "4px", pixels: "4px", description: "Extra small spacing for tight layouts" },
  { name: "sm", value: "8px", pixels: "8px", description: "Small spacing for compact elements" },
  { name: "md", value: "24px", pixels: "24px", description: "Medium spacing for standard gaps" },
  { name: "lg", value: "32px", pixels: "32px", description: "Large spacing for section separations" },
  { name: "xl", value: "48px", pixels: "48px", description: "Extra large spacing for major sections" },
  { name: "2xl", value: "96px", pixels: "96px", description: "Double extra large for hero sections" },
  { name: "3xl", value: "104px", pixels: "104px", description: "Triple extra large for page sections" },
];

const fontWeights: FontWeight[] = [
  { name: "regular", value: "Regular", cssValue: "400" },
  { name: "semibold", value: "Semi Bold", cssValue: "600" },
  { name: "bold", value: "Bold", cssValue: "700" },
  { name: "black", value: "Black", cssValue: "900" },
];

const surfaceColors: SemanticColor[] = [
  { name: "primary", value: "surface.primary", hex: "#fe3b84", usage: "Primary brand surface" },
  { name: "primary-hover", value: "surface.primary-hover", hex: "#ef5298", usage: "Primary hover state" },
  { name: "secondary", value: "surface.secondary", hex: "#43bbcf", usage: "Secondary brand surface" },
  { name: "secondary-hover", value: "surface.secondary-hover", hex: "#1f9bc1", usage: "Secondary hover state" },
  { name: "tertiary", value: "surface.tertiary", hex: "#e4fafc", usage: "Light teal background" },
  { name: "dark", value: "surface.dark", hex: "#032a36", usage: "Dark blue background" },
  { name: "white", value: "surface.white", hex: "#ffffff", usage: "Pure white" },
  { name: "white-light", value: "surface.white-light", hex: "#f4f4f4", usage: "Off-white background" },
  { name: "grey-light", value: "surface.grey-light", hex: "#e9e9e9", usage: "Light grey background" },
  { name: "grey", value: "surface.grey", hex: "#7a7a7a", usage: "Medium grey" },
  { name: "border", value: "surface.border", hex: "#d3d3d3", usage: "Default border color" },
  { name: "black", value: "surface.black", hex: "#222222", usage: "Near black" },
];

const textColors: SemanticColor[] = [
  { name: "heading", value: "text.heading", hex: "#222222", usage: "Primary heading text" },
  { name: "body", value: "text.body", hex: "#383838", usage: "Body text" },
  { name: "label", value: "text.label", hex: "#646464", usage: "Label and secondary text" },
  { name: "grey", value: "text.grey", hex: "#7a7a7a", usage: "Muted text" },
  { name: "grey-light", value: "text.grey-light", hex: "#d3d3d3", usage: "Very light text" },
  { name: "primary", value: "text.primary", hex: "#fe3b84", usage: "Primary brand text" },
  { name: "primary-hover", value: "text.primary-hover", hex: "#ef5298", usage: "Primary hover text" },
  { name: "secondary", value: "text.secondary", hex: "#43bbcf", usage: "Secondary brand text" },
  { name: "secondary-hover", value: "text.secondary-hover", hex: "#1f9bc1", usage: "Secondary hover text" },
  { name: "white", value: "text.white", hex: "#ffffff", usage: "White text on dark backgrounds" },
];

export function Spacing() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const handleCopy = (name: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(name);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  return (
    <div className="space-y-16">
      {/* Spacing Scale */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Spacing Scale</h2>
          <p className="text-slate-600">
            Consistent spacing scale for margins, padding, and gaps throughout the design system.
          </p>
        </div>

        <div className="space-y-3">
          {spacingScales.map((scale) => (
            <button
              key={scale.name}
              onClick={() => handleCopy(`spacing-${scale.name}`, scale.pixels)}
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

                  {copiedValue === `spacing-${scale.name}` ? (
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

      {/* Semantic Spacing */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Semantic Spacing</h2>
          <p className="text-slate-600">
            Memorable spacing tokens for common use cases. Easier to remember than numbered scales.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {semanticSpacing.map((spacing) => (
            <button
              key={spacing.name}
              onClick={() => handleCopy(`semantic-${spacing.name}`, spacing.value)}
              className="text-left p-4 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono font-semibold text-slate-900">
                    {spacing.name}
                  </code>
                  <span className="text-sm text-slate-500">{spacing.pixels}</span>
                </div>
                <p className="text-xs text-slate-500">{spacing.description}</p>
                <div className="h-2 bg-slate-50 rounded overflow-hidden">
                  <div
                    className="h-full bg-[#43bbcf]"
                    style={{ width: `${Math.min(parseInt(spacing.pixels) / 1.04, 100)}%` }}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Border Radius</h2>
          <p className="text-slate-600">
            Standardized border radius values for consistent rounded corners.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {borderRadius.map((radius) => (
            <button
              key={radius.name}
              onClick={() => handleCopy(`radius-${radius.name}`, radius.value)}
              className="text-left p-6 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono font-semibold text-slate-900">
                    {radius.name}
                  </code>
                  <span className="text-sm text-slate-500">{radius.pixels}</span>
                </div>
                <p className="text-xs text-slate-500">{radius.description}</p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 bg-[#fe3b84]"
                    style={{ borderRadius: radius.value }}
                  />
                  <code className="text-xs font-mono text-slate-400">
                    rounded-[{radius.value}]
                  </code>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Font Weights */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Font Weights</h2>
          <p className="text-slate-600">
            Available font weight tokens for the Inter typeface.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fontWeights.map((weight) => (
            <button
              key={weight.name}
              onClick={() => handleCopy(`weight-${weight.name}`, weight.cssValue)}
              className="text-left p-6 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <code className="text-sm font-mono font-semibold text-slate-900">
                    {weight.name}
                  </code>
                  <span className="text-sm text-slate-500">{weight.cssValue}</span>
                </div>
                <p
                  className="text-2xl text-slate-900"
                  style={{ fontWeight: weight.cssValue }}
                >
                  Sherri Show
                </p>
                <code className="text-xs font-mono text-slate-400">
                  font-{weight.name} • font-weight: {weight.cssValue}
                </code>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Surface Colors */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Surface Colors</h2>
          <p className="text-slate-600">
            Semantic color tokens for backgrounds, borders, and surfaces.
          </p>
        </div>

        <div className="grid gap-3">
          {surfaceColors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleCopy(`surface-${color.name}`, color.hex)}
              className="text-left p-4 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded border border-slate-200 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <code className="text-sm font-mono font-semibold text-slate-900">
                      {color.value}
                    </code>
                    <span className="text-xs text-slate-500">{color.hex}</span>
                  </div>
                  <p className="text-xs text-slate-500">{color.usage}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Text Colors</h2>
          <p className="text-slate-600">
            Semantic color tokens for text and typography.
          </p>
        </div>

        <div className="grid gap-3">
          {textColors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleCopy(`text-${color.name}`, color.hex)}
              className="text-left p-4 border border-slate-200 rounded-lg hover:border-[#fe3b84] transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded border border-slate-200 shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-1">
                    <code className="text-sm font-mono font-semibold text-slate-900">
                      {color.value}
                    </code>
                    <span className="text-xs text-slate-500">{color.hex}</span>
                  </div>
                  <p className="text-xs text-slate-500">{color.usage}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}