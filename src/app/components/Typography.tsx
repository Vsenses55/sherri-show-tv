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
    size: "text-6xl",
    lineHeight: "leading-none",
    fontWeight: "font-black",
    example: "The Sherri Show",
  },
  {
    name: "Heading 1",
    size: "text-5xl",
    lineHeight: "leading-tight",
    fontWeight: "font-bold",
    example: "Welcome to the Show",
  },
  {
    name: "Heading 2",
    size: "text-4xl",
    lineHeight: "leading-tight",
    fontWeight: "font-bold",
    example: "Episode Highlights",
  },
  {
    name: "Heading 3",
    size: "text-3xl",
    lineHeight: "leading-snug",
    fontWeight: "font-semibold",
    example: "Featured Guests",
  },
  {
    name: "Heading 4",
    size: "text-2xl",
    lineHeight: "leading-snug",
    fontWeight: "font-semibold",
    example: "Segment Title",
  },
  {
    name: "Heading 5",
    size: "text-xl",
    lineHeight: "leading-normal",
    fontWeight: "font-semibold",
    example: "Topic Discussion",
  },
  {
    name: "Body Large",
    size: "text-lg",
    lineHeight: "leading-relaxed",
    fontWeight: "font-normal",
    example: "This is a large body text used for important content and introductory paragraphs.",
  },
  {
    name: "Body",
    size: "text-base",
    lineHeight: "leading-relaxed",
    fontWeight: "font-normal",
    example: "This is the default body text used throughout the application for most content.",
  },
  {
    name: "Body Small",
    size: "text-sm",
    lineHeight: "leading-relaxed",
    fontWeight: "font-normal",
    example: "This is small body text used for secondary information and descriptions.",
  },
  {
    name: "Caption",
    size: "text-xs",
    lineHeight: "leading-normal",
    fontWeight: "font-normal",
    example: "This is caption text used for labels and annotations.",
  },
];

export function Typography() {
  const [copiedStyle, setCopiedStyle] = useState<string | null>(null);

  const handleCopy = (name: string, size: string, lineHeight: string, fontWeight: string) => {
    const cssClass = `${size} ${lineHeight} ${fontWeight}`;
    navigator.clipboard.writeText(cssClass);
    setCopiedStyle(name);
    setTimeout(() => setCopiedStyle(null), 2000);
  };

  return (
    <div className="space-y-8">
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
            <p className={`${scale.size} ${scale.lineHeight} ${scale.fontWeight} text-slate-900`}>
              {scale.example}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
