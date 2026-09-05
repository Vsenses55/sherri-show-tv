import { useState } from "react";
import { colorSystem } from "@/app/DesignSystem";

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

    css += `  /* Typography - Font Sizes */\n`;
    css += `  --font-size-xx-large: 72px;\n`;
    css += `  --font-size-x-large: 48px;\n`;
    css += `  --font-size-large: 32px;\n`;
    css += `  --font-size-medium: 24px;\n`;
    css += `  --font-size-small: 20px;\n`;
    css += `  --font-size-x-small: 16px;\n`;
    css += `  --font-size-xx-small: 14px;\n`;
    css += `  --font-size-xxx-small: 12px;\n`;
    css += `  --paragraph-font-size-large: 18px;\n`;
    css += `  --paragraph-font-size-regular: 16px;\n`;
    css += `  --paragraph-font-size-small: 14px;\n`;
    css += `  --paragraph-font-size-label: 10px;\n`;
    css += `\n`;

    css += `  /* Typography - Font Weights */\n`;
    css += `  --font-weight-regular: 400;\n`;
    css += `  --font-weight-semibold: 600;\n`;
    css += `  --font-weight-bold: 700;\n`;
    css += `  --font-weight-black: 900;\n`;
    css += `\n`;

    css += `  /* Typography - Line Heights */\n`;
    css += `  --line-height-xx-large: 72px;\n`;
    css += `  --line-height-x-large: 48px;\n`;
    css += `  --line-height-large: 32px;\n`;
    css += `  --line-height-medium: 24px;\n`;
    css += `  --line-height-small: 20px;\n`;
    css += `  --line-height-400: 24px;\n`;
    css += `  --line-height-300: 18px;\n`;
    css += `  --line-height-200: 12px;\n`;
    css += `  --line-height-14: 14px;\n`;
    css += `  --line-height-20: 20px;\n`;
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
          <div className="text-2xl font-bold text-[#43bbcf]">26</div>
          <div className="text-sm text-slate-600">Typography Variables</div>
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
              <code>{`.heading-display {\n  font-size: var(--font-size-xx-large);\n  font-weight: var(--font-weight-black);\n  line-height: var(--line-height-xx-large);\n}\n\n.heading-1 {\n  font-size: var(--font-size-x-large);\n  font-weight: var(--font-weight-black);\n  line-height: var(--line-height-x-large);\n}\n\n.body-large {\n  font-size: var(--paragraph-font-size-large);\n  font-weight: var(--font-weight-regular);\n  line-height: var(--line-height-400);\n}`}</code>
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