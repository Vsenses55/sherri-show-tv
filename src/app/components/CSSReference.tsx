import { useState } from "react";
import { colorSystem } from "@/app/App";

export function CSSReference() {
  const [copied, setCopied] = useState(false);

  // Generate CSS custom properties for colors
  const generateColorCSS = () => {
    let css = `:root {\n  /* Sherri Show Design System - Colors */\n\n`;

    Object.entries(colorSystem).forEach(([scaleName, shades]) => {
      css += `  /* ${scaleName.charAt(0).toUpperCase() + scaleName.slice(1)} Colors */\n`;
      Object.entries(shades).forEach(([shade, { hex }]) => {
        css += `  --color-${scaleName}-${shade}: ${hex};\n`;
      });
      css += `\n`;
    });

    css += `  /* Typography */\n`;
    css += `  --font-size-xs: 0.75rem;      /* 12px */\n`;
    css += `  --font-size-sm: 0.875rem;     /* 14px */\n`;
    css += `  --font-size-base: 1rem;       /* 16px */\n`;
    css += `  --font-size-lg: 1.125rem;     /* 18px */\n`;
    css += `  --font-size-xl: 1.25rem;      /* 20px */\n`;
    css += `  --font-size-2xl: 1.5rem;      /* 24px */\n`;
    css += `  --font-size-3xl: 1.875rem;    /* 30px */\n`;
    css += `  --font-size-4xl: 2.25rem;     /* 36px */\n`;
    css += `  --font-size-5xl: 3rem;        /* 48px */\n`;
    css += `  --font-size-6xl: 3.75rem;     /* 60px */\n`;
    css += `\n`;

    css += `  /* Font Weights */\n`;
    css += `  --font-weight-normal: 400;\n`;
    css += `  --font-weight-medium: 500;\n`;
    css += `  --font-weight-semibold: 600;\n`;
    css += `  --font-weight-bold: 700;\n`;
    css += `  --font-weight-black: 900;\n`;
    css += `\n`;

    css += `  /* Line Heights */\n`;
    css += `  --line-height-none: 1;\n`;
    css += `  --line-height-tight: 1.25;\n`;
    css += `  --line-height-snug: 1.375;\n`;
    css += `  --line-height-normal: 1.5;\n`;
    css += `  --line-height-relaxed: 1.625;\n`;
    css += `\n`;

    css += `  /* Spacing */\n`;
    css += `  --spacing-0: 0;\n`;
    css += `  --spacing-0-5: 0.125rem;      /* 2px */\n`;
    css += `  --spacing-1: 0.25rem;         /* 4px */\n`;
    css += `  --spacing-1-5: 0.375rem;      /* 6px */\n`;
    css += `  --spacing-2: 0.5rem;          /* 8px */\n`;
    css += `  --spacing-2-5: 0.625rem;      /* 10px */\n`;
    css += `  --spacing-3: 0.75rem;         /* 12px */\n`;
    css += `  --spacing-3-5: 0.875rem;      /* 14px */\n`;
    css += `  --spacing-4: 1rem;            /* 16px */\n`;
    css += `  --spacing-5: 1.25rem;         /* 20px */\n`;
    css += `  --spacing-6: 1.5rem;          /* 24px */\n`;
    css += `  --spacing-8: 2rem;            /* 32px */\n`;
    css += `  --spacing-10: 2.5rem;         /* 40px */\n`;
    css += `  --spacing-12: 3rem;           /* 48px */\n`;
    css += `  --spacing-16: 4rem;           /* 64px */\n`;
    css += `  --spacing-20: 5rem;           /* 80px */\n`;
    css += `  --spacing-24: 6rem;           /* 96px */\n`;
    css += `\n`;

    css += `  /* Border Radius */\n`;
    css += `  --radius-sm: 0.25rem;         /* 4px */\n`;
    css += `  --radius-md: 0.5rem;          /* 8px */\n`;
    css += `  --radius-lg: 0.625rem;        /* 10px */\n`;
    css += `  --radius-xl: 1rem;            /* 16px */\n`;
    css += `  --radius-full: 9999px;\n`;
    css += `\n`;

    css += `  /* Shadows */\n`;
    css += `  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n`;
    css += `  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n`;
    css += `  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n`;
    css += `  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n`;
    css += `}\n`;

    return css;
  };

  const cssCode = generateColorCSS();

  const handleCopyAll = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">CSS Reference</h2>
        <p className="text-slate-600">
          Complete CSS custom properties for the Sherri Show design system. Copy and paste into
          your stylesheet to use these design tokens in your projects.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-2xl font-bold text-[#fe3b84]">63</div>
          <div className="text-sm text-slate-600">Color Variables</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-2xl font-bold text-[#43bbcf]">10</div>
          <div className="text-sm text-slate-600">Font Sizes</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-2xl font-bold text-[#ffd755]">17</div>
          <div className="text-sm text-slate-600">Spacing Units</div>
        </div>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <div className="text-2xl font-bold text-[#fe3b84]">9</div>
          <div className="text-sm text-slate-600">Radius & Shadows</div>
        </div>
      </div>

      {/* CSS Code Block */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Design Tokens</h3>
          <button
            onClick={handleCopyAll}
            className="px-4 py-2 bg-[#fe3b84] text-white rounded-lg font-semibold hover:bg-[#cb2f6a] transition-colors"
          >
            {copied ? "Copied!" : "Copy All CSS"}
          </button>
        </div>

        <div className="relative">
          <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto text-xs sm:text-sm max-h-[600px] overflow-y-auto">
            <code>{cssCode}</code>
          </pre>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Usage Examples</h3>

        <div className="space-y-4">
          {/* Color Example */}
          <div className="border border-slate-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">Using Colors</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded text-xs sm:text-sm overflow-x-auto">
              <code>{`.button-primary {
  background-color: var(--color-primary-500);
  color: white;
}

.button-primary:hover {
  background-color: var(--color-primary-600);
}

.alert-info {
  background-color: var(--color-info-100);
  border-color: var(--color-info-500);
}`}</code>
            </pre>
          </div>

          {/* Typography Example */}
          <div className="border border-slate-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">Using Typography</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded text-xs sm:text-sm overflow-x-auto">
              <code>{`.heading-1 {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.body-text {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
}`}</code>
            </pre>
          </div>

          {/* Spacing Example */}
          <div className="border border-slate-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-2">Using Spacing</h4>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded text-xs sm:text-sm overflow-x-auto">
              <code>{`.card {
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.section {
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-16);
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="border-l-4 border-[#fe3b84] bg-pink-50 p-4 rounded">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">💡 Best Practices</h4>
        <ul className="text-sm text-slate-700 space-y-1">
          <li>• Use CSS custom properties for consistency across your application</li>
          <li>• Primary colors (pinks) are for main brand elements and CTAs</li>
          <li>• Secondary colors (teals) complement primary actions</li>
          <li>• Accent colors (yellows) highlight important information</li>
          <li>• Use semantic colors (danger, success, info, warning) for system feedback</li>
        </ul>
      </div>
    </div>
  );
}
