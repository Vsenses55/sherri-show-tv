import { useState } from "react";
import imgLogoSherriUnderline from "figma:asset/e42e7f2fabc0eb592d40536f5f93ea8f625eddad.png";
import { ColorPalette } from "@/app/components/ColorPalette";
import { Typography } from "@/app/components/Typography";
import { Spacing } from "@/app/components/Spacing";
import { Components } from "@/app/components/Components";
import { CSSReference } from "@/app/components/CSSReference";
import MyPage from "@/app/MyPage";
import { Link } from "react-router";

// Complete color system for Sherri Show TV
export const colorSystem = {
  primary: {
    100: { hex: "#ffd8e6", hsl: "hsl(338, 100%, 92%)" },
    200: { hex: "#ffb1ce", hsl: "hsl(338, 100%, 85%)" },
    300: { hex: "#fe89b5", hsl: "hsl(337, 98%, 77%)" },
    400: { hex: "#fe629d", hsl: "hsl(337, 99%, 69%)" },
    500: { hex: "#fe3b84", hsl: "hsl(338, 99%, 61%)" },
    600: { hex: "#cb2f6a", hsl: "hsl(337, 62%, 49%)" },
    700: { hex: "#98234f", hsl: "hsl(337, 63%, 37%)" },
    800: { hex: "#661835", hsl: "hsl(338, 62%, 25%)" },
    900: { hex: "#330c1a", hsl: "hsl(338, 62%, 12%)" },
  },
  secondary: {
    100: { hex: "#d9f1f5", hsl: "hsl(189, 58%, 91%)" },
    200: { hex: "#b4e4ec", hsl: "hsl(189, 60%, 82%)" },
    300: { hex: "#8ed6e2", hsl: "hsl(189, 59%, 72%)" },
    400: { hex: "#69c9d9", hsl: "hsl(189, 60%, 63%)" },
    500: { hex: "#43bbcf", hsl: "hsl(189, 59%, 54%)" },
    600: { hex: "#3696a6", hsl: "hsl(189, 51%, 43%)" },
    700: { hex: "#28707c", hsl: "hsl(189, 51%, 32%)" },
    800: { hex: "#1b4b53", hsl: "hsl(189, 51%, 22%)" },
    900: { hex: "#0d2529", hsl: "hsl(189, 52%, 11%)" },
  },
  accent: {
    100: { hex: "#fff7dd", hsl: "hsl(46, 100%, 93%)" },
    200: { hex: "#ffefbb", hsl: "hsl(46, 100%, 87%)" },
    300: { hex: "#ffe799", hsl: "hsl(46, 100%, 80%)" },
    400: { hex: "#ffdf77", hsl: "hsl(46, 100%, 73%)" },
    500: { hex: "#ffd755", hsl: "hsl(46, 100%, 67%)" },
    600: { hex: "#ccac44", hsl: "hsl(46, 57%, 53%)" },
    700: { hex: "#998133", hsl: "hsl(46, 50%, 40%)" },
    800: { hex: "#665622", hsl: "hsl(46, 50%, 27%)" },
    900: { hex: "#332b11", hsl: "hsl(46, 50%, 13%)" },
  },
  danger: {
    100: { hex: "#ffd8d8", hsl: "hsl(0, 100%, 92%)" },
    200: { hex: "#ffb1b2", hsl: "hsl(359, 100%, 85%)" },
    300: { hex: "#fe898b", hsl: "hsl(358, 98%, 77%)" },
    400: { hex: "#fe6265", hsl: "hsl(359, 99%, 69%)" },
    500: { hex: "#fe3b3e", hsl: "hsl(359, 99%, 61%)" },
    600: { hex: "#cb2f32", hsl: "hsl(358, 62%, 49%)" },
    700: { hex: "#982325", hsl: "hsl(358, 63%, 37%)" },
    800: { hex: "#661819", hsl: "hsl(359, 62%, 25%)" },
    900: { hex: "#330c0c", hsl: "hsl(0, 62%, 12%)" },
  },
  info: {
    100: { hex: "#d2e9f3", hsl: "hsl(194, 58%, 89%)" },
    200: { hex: "#a5d2e8", hsl: "hsl(194, 57%, 77%)" },
    300: { hex: "#79bcde", hsl: "hsl(194, 57%, 68%)" },
    400: { hex: "#4ca6d4", hsl: "hsl(194, 72%, 55%)" },
    500: { hex: "#1f90c1", hsl: "hsl(194, 72%, 44%)" },
    600: { hex: "#19739a", hsl: "hsl(194, 72%, 35%)" },
    700: { hex: "#135674", hsl: "hsl(194, 72%, 26%)" },
    800: { hex: "#0d3b4d", hsl: "hsl(194, 73%, 18%)" },
    900: { hex: "#061d27", hsl: "hsl(194, 73%, 9%)" },
  },
  success: {
    100: { hex: "#d1f2d1", hsl: "hsl(120, 60%, 89%)" },
    200: { hex: "#a3e5a3", hsl: "hsl(120, 60%, 77%)" },
    300: { hex: "#80d780", hsl: "hsl(120, 59%, 68%)" },
    400: { hex: "#62ca62", hsl: "hsl(120, 95%, 59%)" },
    500: { hex: "#2dc32d", hsl: "hsl(120, 62%, 47%)" },
    600: { hex: "#239b71", hsl: "hsl(160, 62%, 37%)" },
    700: { hex: "#1a8662", hsl: "hsl(160, 65%, 31%)" },
    800: { hex: "#106542", hsl: "hsl(160, 62%, 23%)" },
    900: { hex: "#0a3326", hsl: "hsl(160, 62%, 12%)" },
  },
  warning: {
    100: { hex: "#fff0dd", hsl: "hsl(34, 100%, 93%)" },
    200: { hex: "#ffe1bb", hsl: "hsl(34, 100%, 87%)" },
    300: { hex: "#ffd399", hsl: "hsl(34, 100%, 80%)" },
    400: { hex: "#ffc477", hsl: "hsl(34, 100%, 73%)" },
    500: { hex: "#ffb555", hsl: "hsl(34, 100%, 67%)" },
    600: { hex: "#cc9144", hsl: "hsl(34, 57%, 53%)" },
    700: { hex: "#996d33", hsl: "hsl(34, 50%, 40%)" },
    800: { hex: "#664822", hsl: "hsl(34, 50%, 27%)" },
    900: { hex: "#332411", hsl: "hsl(34, 50%, 13%)" },
  },
};

export default function DesignSystem() {
  const [selectedColor, setSelectedColor] = useState<{
    scale: string;
    shade: string;
    color: { hex: string; hsl: string };
  } | null>(null);
  const [activeTab, setActiveTab] = useState<"prototype" | "colors" | "typography" | "spacing" | "components" | "css">("components");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-[#032a36] border-b border-[#0d2529]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-center gap-4">
            <img
              src={imgLogoSherriUnderline}
              alt="Sherri Show"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide justify-center">
            <button
              onClick={() => setActiveTab("components")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "components"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveTab("colors")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "colors"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              Colors
            </button>
            <button
              onClick={() => setActiveTab("typography")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "typography"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              Typography
            </button>
            <button
              onClick={() => setActiveTab("spacing")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "spacing"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              Spacing
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "css"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab("prototype")}
              className={`px-4 sm:px-6 py-4 font-semibold border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "prototype"
                  ? "border-[#fe3b84] text-[#fe3b84]"
                  : "border-transparent text-[#7a7a7a] hover:text-[#383838]"
              }`}
            >
              Prototype
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className={activeTab === "prototype" ? "" : "max-w-[1100px] mx-auto px-4 sm:px-6 py-8 sm:py-12"}>
        {activeTab === "prototype" && <MyPage />}

        {activeTab === "colors" && (
          <div className="space-y-16">
            {Object.entries(colorSystem).map(([scaleName, shades]) => (
              <ColorPalette
                key={scaleName}
                scaleName={scaleName}
                shades={shades}
                onColorClick={(shade, color) =>
                  setSelectedColor({ scale: scaleName, shade, color })
                }
              />
            ))}
          </div>
        )}

        {activeTab === "typography" && <Typography />}

        {activeTab === "spacing" && <Spacing />}

        {activeTab === "components" && <Components />}

        {activeTab === "css" && <CSSReference />}

        {/* Color Detail Modal */}
        {selectedColor && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Color Details</h2>
              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-10"
                  style={{ backgroundColor: selectedColor.color.hex }}
                ></div>
                <div>
                  <p className="text-sm font-bold">Scale: {selectedColor.scale}</p>
                  <p className="text-sm font-bold">Shade: {selectedColor.shade}</p>
                  <p className="text-sm">Hex: {selectedColor.color.hex}</p>
                  <p className="text-sm">HSL: {selectedColor.color.hsl}</p>
                </div>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-[#fe3b84] text-white rounded-lg"
                onClick={() => setSelectedColor(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}