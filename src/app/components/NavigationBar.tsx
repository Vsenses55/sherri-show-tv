import { useState } from "react";
import { Link } from "react-router";
import svgPaths from "@/imports/svg-6x2gq3pj89";
import searchSvgPaths from "@/imports/svg-19wyztb5yg";
import imgLogoSherriUnderline from "figma:asset/871d464770a654b7c804b8a55019b5b6df3d2895.png";
import imgSherriMastheadHost1 from "figma:asset/de18f2b37409892e5c0a14db555a8a769f9bae86.png";
import imgMasthead from "figma:asset/53b38aaaa1c16e962ca4a63dc19588b5c30087d9.png";
import { Menu, X } from "lucide-react";
import DesktopIconSearchClose from "@/imports/DesktopIconSearchClose";

export function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zipCode, setZipCode] = useState("90026");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full flex flex-col items-center" data-name="Navigation Bar">
      {/* Menu Bar with Time/Station Info and Navigation */}
      <div className="bg-white w-full h-[44px] flex justify-center">
        <div className="max-w-[1376px] w-full flex items-center justify-between px-4 min-[834px]:px-8 min-[1376px]:px-12 py-2 h-full relative">
          {/* Search Overlay - Mobile (covers entire navbar, matches masthead width) */}
          {searchOpen && (
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-white flex items-center z-10 min-[834px]:hidden">
              <div className="bg-[#e4fafc] flex gap-[8px] h-[44px] items-center px-[24px] py-[7px] w-full">
                <div className="h-[13.673px] w-[13.672px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6716 13.6726">
                    <path d={searchSvgPaths.p29d17c00} fill="#999999" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Sherri Show"
                  className="bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#383838] placeholder:text-[#959595] outline-none flex-1"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-[18px] h-[18px] shrink-0"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={searchSvgPaths.p3d0f4200} fill="#FC5872" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Search Overlay - Desktop (covers all menu items) */}
          {searchOpen && (
            <div className="hidden min-[834px]:flex absolute top-0 bottom-0 right-4 min-[834px]:right-8 min-[1376px]:right-12 z-10 items-center bg-white">
              <div className="bg-[#e4fafc] flex gap-[8px] h-[28px] items-center px-[16px] py-[7px] min-w-[400px]">
                <div className="h-[13.673px] w-[13.672px] shrink-0">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6716 13.6726">
                    <path d={searchSvgPaths.p29d17c00} fill="#999999" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Sherri Show"
                  className="bg-transparent font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#383838] placeholder:text-[#959595] outline-none flex-1"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="w-[18px] h-[18px] shrink-0"
                >
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={searchSvgPaths.p3d0f4200} fill="#FC5872" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Left - Mobile Hamburger or Desktop Time/Station Info */}
          <div className="flex gap-[12px] items-center">
            {/* Mobile - Hamburger Menu */}
            <button
              className="min-[834px]:hidden text-[#7a7a7a]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Time and Station Info */}
            <div className="flex gap-[12px] items-center">
              <p className="text-[12px] min-[834px]:text-[14px] text-[#383838]">
                <span className="font-bold">2:00pm</span> on <span className="font-bold">KNBC 4</span>
              </p>
              <div className="flex gap-[5px] items-center">
                <div className="bg-[#e4fafc] border border-[#d3d3d3] rounded-[4px] px-2 py-1 h-[23px] min-w-[70px] flex items-center justify-center">
                  <p className="text-[12px] text-[#383838]">{zipCode}</p>
                </div>
                <button className="bg-[#f4f4f4] rounded-[4px] px-[11px] py-[4px] h-[23px] min-w-[70px]">
                  <p className="font-['Inter:Black',sans-serif] font-black text-[10px] text-[#d3d3d3] uppercase">
                    CHANGE
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Menu Items and Search grouped together */}
          <div className="flex items-center gap-[24px]">
            {/* Desktop - Menu Items */}
            <div className="hidden min-[834px]:flex font-bold gap-[24px] items-center text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              <Link to="/episodes" className="hover:opacity-80 transition-opacity">EPISODES</Link>
              <Link to="/videos" className="hover:opacity-80 transition-opacity">VIDEOS</Link>
              <Link to="/giveaways" className="hover:opacity-80 transition-opacity">GIVEAWAYS</Link>
              <Link to="/articles" className="hover:opacity-80 transition-opacity">ARTICLES</Link>
            </div>

            {/* Search Icon */}
            <button
              className="w-[18px] h-[18px]"
              onClick={() => setSearchOpen(true)}
            >
              <DesktopIconSearchClose />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only visible when menu is open */}
      {mobileMenuOpen && (
        <div className="w-full bg-white py-4 px-4 min-[834px]:hidden">
          <div className="max-w-[1376px] mx-auto flex flex-col gap-4">
            <Link to="/episodes" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              EPISODES
            </Link>
            <Link to="/videos" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              VIDEOS
            </Link>
            <Link to="/giveaways" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              GIVEAWAYS
            </Link>
            <Link to="/articles" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              ARTICLES
            </Link>
            <a href="#" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              WHERE TO WATCH
            </a>
            <a href="#" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              BE ON THE SHOW
            </a>
            <a href="#" className="font-bold text-[12px] min-[834px]:text-[14px] text-[#7a7a7a]">
              GET TICKETS
            </a>
          </div>
        </div>
      )}

      {/* Masthead */}
      <div className="w-full">
        <div className="max-w-[1376px] mx-auto relative rounded-[8px] overflow-hidden">
          {/* Background Image */}
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[8px]"
            src={imgMasthead}
          />

          {/* Content */}
          <div className="relative flex flex-row items-center justify-between px-4 min-[834px]:px-8 min-[1376px]:px-[80px]">
            {/* Logo */}
            <div className="flex items-center justify-center py-4 min-[834px]:py-[16px] w-[100px] min-[834px]:w-[125px] min-[1376px]:w-[202.744px]">
              <img
                alt="Sherri Logo"
                className="block max-w-none h-[64px] min-[834px]:h-[80px] min-[1376px]:h-[124px] w-auto"
                src={imgLogoSherriUnderline}
              />
            </div>

            {/* Host Image - Show on all screen sizes */}
            <div className="flex items-end h-[120px] w-[116px] min-[834px]:h-[160px] min-[834px]:w-[155px] min-[1376px]:h-[191px] min-[1376px]:w-[197px]">
              <img
                alt="Sherri Shepherd"
                className="w-full h-full object-cover object-top"
                src={imgSherriMastheadHost1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}