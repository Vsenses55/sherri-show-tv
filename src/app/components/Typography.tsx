import { useState } from "react";

interface TypeScale {
  name: string;
  size: string;
  lineHeight: string;
  fontWeight: string;
  example: string;
}

const typeScales: TypeScale[] = [
  {
    name: "Display",
    size: "text-7xl",
    lineHeight: "leading-none",
    fontWeight: "font-black",
    example: "The Sherri Show",
  },
  {
    name: "H1",
    size: "text-6xl",
    lineHeight: "leading-tight",
    fontWeight: "font-black",
    example: "Welcome to the Show",
  },
  {
    name: "H2",
    size: "text-5xl",
    lineHeight: "leading-tight",
    fontWeight: "font-black",
    example: "Episode Highlights",
  },
  {
    name: "H3",
    size: "text-4xl",
    lineHeight: "leading-snug",
    fontWeight: "font-black",
    example: "Featured Guests",
  },
  {
    name: "H4",
    size: "text-3xl",
    lineHeight: "leading-snug",
    fontWeight: "font-black",
    example: "Segment Title",
  },
  {
    name: "H5",
    size: "text-xl",
    lineHeight: "leading-[20px]",
    fontWeight: "font-black",
    example: "Topic Discussion",
  },
  {
    name: "H6",
    size: "text-lg",
    lineHeight: "leading-[20px]",
    fontWeight: "font-black",
    example: "Section Heading",
  },
  {
    name: "Body Large",
    size: "text-lg",
    lineHeight: "leading-6",
    fontWeight: "font-normal",
    example: "This is a large body text used for important content and introductory paragraphs.",
  },
  {
    name: "Body",
    size: "text-base",
    lineHeight: "leading-[18px]",
    fontWeight: "font-normal",
    example: "This is the default body text used throughout the application for most content.",
  },
  {
    name: "Body Small",
    size: "text-sm",
    lineHeight: "leading-[18px]",
    fontWeight: "font-normal",
    example: "This is small body text used for secondary information and descriptions.",
  },
  {
    name: "Caption",
    size: "text-xs",
    lineHeight: "leading-[14px]",
    fontWeight: "font-semibold",
    example: "This is caption text used for labels and annotations.",
  },
];

interface TypographyVariable {
  name: string;
  value: string;
  remValue?: string;
  category: "Font Size" | "Line Height" | "Font Weight";
}

const typographyVariables: TypographyVariable[] = [
  // Font Sizes
  { name: "--font-size-xx-large", value: "72px", remValue: "4.5rem", category: "Font Size" },
  { name: "--font-size-x-large", value: "48px", remValue: "3rem", category: "Font Size" },
  { name: "--font-size-large", value: "32px", remValue: "2rem", category: "Font Size" },
  { name: "--font-size-medium", value: "24px", remValue: "1.5rem", category: "Font Size" },
  { name: "--font-size-small", value: "20px", remValue: "1.25rem", category: "Font Size" },
  { name: "--font-size-x-small", value: "16px", remValue: "1rem", category: "Font Size" },
  { name: "--font-size-xx-small", value: "14px", remValue: "0.875rem", category: "Font Size" },
  { name: "--font-size-xxx-small", value: "12px", remValue: "0.75rem", category: "Font Size" },
  { name: "--paragraph-font-size-large", value: "18px", remValue: "1.125rem", category: "Font Size" },
  { name: "--paragraph-font-size-regular", value: "16px", remValue: "1rem", category: "Font Size" },
  { name: "--paragraph-font-size-small", value: "14px", remValue: "0.875rem", category: "Font Size" },
  { name: "--paragraph-font-size-label", value: "10px", remValue: "0.625rem", category: "Font Size" },
  
  // Line Heights
  { name: "--line-height-xx-large", value: "72px", remValue: "4.5rem", category: "Line Height" },
  { name: "--line-height-x-large", value: "48px", remValue: "3rem", category: "Line Height" },
  { name: "--line-height-large", value: "32px", remValue: "2rem", category: "Line Height" },
  { name: "--line-height-medium", value: "24px", remValue: "1.5rem", category: "Line Height" },
  { name: "--line-height-small", value: "20px", remValue: "1.25rem", category: "Line Height" },
  { name: "--line-height-400", value: "24px", remValue: "1.5rem", category: "Line Height" },
  { name: "--line-height-300", value: "18px", remValue: "1.125rem", category: "Line Height" },
  { name: "--line-height-200", value: "12px", remValue: "0.75rem", category: "Line Height" },
  { name: "--line-height-14", value: "14px", remValue: "0.875rem", category: "Line Height" },
  { name: "--line-height-20", value: "20px", remValue: "1.25rem", category: "Line Height" },
  
  // Font Weights
  { name: "--font-weight-black", value: "900", category: "Font Weight" },
  { name: "--font-weight-bold", value: "700", category: "Font Weight" },
  { name: "--font-weight-semibold", value: "600", category: "Font Weight" },
  { name: "--font-weight-regular", value: "400", category: "Font Weight" },
];

export function Typography() {
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null);
  const [copiedVariable, setCopiedVariable] = useState<string | null>(null);

  const handleCopy = async (name: string, size: string, lineHeight: string, fontWeight: string) => {
    const cssClass = `${size} ${lineHeight} ${fontWeight}`;
    const textArea = document.createElement('textarea');
    textArea.value = cssClass;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedStyle(name);
      setTimeout(() => setCopiedStyle(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textArea);
  };

  const handleCopyVariable = async (variableName: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = variableName;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedVariable(variableName);
      setTimeout(() => setCopiedVariable(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textArea);
  };

  const groupedVariables = {
    "Font Size": typographyVariables.filter(v => v.category === "Font Size"),
    "Line Height": typographyVariables.filter(v => v.category === "Line Height"),
    "Font Weight": typographyVariables.filter(v => v.category === "Font Weight"),
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Typography</h2>
        <p className="text-slate-600">
          The Sherri Show typography scale with font sizes, line heights, and weights.
        </p>
      </div>

      <div className="space-y-6">
        {typeScales.map((scale) => (
          <button
            key={scale.name}
            onClick={() =>
              handleCopy(scale.name, scale.size, scale.lineHeight, scale.fontWeight)
            }
            className="w-full text-left p-6 border border-slate-200 rounded-lg hover:border-[#fe3b84] hover:shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-offset-2"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{scale.name}</h3>
                <div className="flex gap-4 text-xs text-slate-500">
                  <code className="font-mono">{scale.size}</code>
                  <code className="font-mono">{scale.lineHeight}</code>
                  <code className="font-mono">{scale.fontWeight}</code>
                </div>
              </div>
              {copiedStyle === scale.name ? (
                <span className="text-xs font-semibold text-[#fe3b84]">Copied!</span>
              ) : (
                <span className="text-xs font-semibold text-slate-400 group-hover:text-[#fe3b84] transition-colors">
                  Click to copy
                </span>
              )}
            </div>
            <p className={`${scale.size} ${scale.lineHeight} ${scale.fontWeight} text-slate-900 ${
              scale.name === 'Display' || scale.name.startsWith('H') ? 'uppercase' : ''
            }`}>
              {scale.example}
            </p>
          </button>
        ))}
      </div>

      {/* CSS Variables Section */}
      <div className="pt-8 border-t border-slate-200">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">CSS Variables</h3>
          <p className="text-slate-600">
            Typography system variables for custom implementations.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(groupedVariables).map(([category, variables]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900 mb-3">{category}</h4>
              <div className="grid grid-cols-1 min-[834px]:grid-cols-2 gap-3">
                {variables.map((variable) => (
                  <button
                    key={variable.name}
                    onClick={() => handleCopyVariable(variable.name)}
                    className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-[#43bbcf] hover:shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-[#43bbcf] focus:ring-offset-2"
                  >
                    <div className="flex-1 text-left">
                      <code className="text-xs font-mono text-slate-900 block mb-1">
                        {variable.name}
                      </code>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">{variable.value}</span>
                        {variable.remValue && (
                          <>
                            <span className="text-slate-400">•</span>
                            <span className="text-sm text-slate-500">{variable.remValue}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {copiedVariable === variable.name ? (
                      <span className="text-xs font-semibold text-[#43bbcf] ml-4">Copied!</span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-[#43bbcf] transition-colors ml-4">
                        Copy
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}