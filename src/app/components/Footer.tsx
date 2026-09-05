import { Link } from "react-router";
import svgPaths from "@/imports/svg-d4ogkics98";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#032a36] rounded-[8px] w-full relative" data-name="Footer">
      <div className="max-w-[1143px] mx-auto px-4 min-[834px]:px-8 py-[80px] min-[834px]:py-[120px] min-[1376px]:py-[160px]">
        <div className="flex flex-col min-[834px]:flex-row gap-[48px] min-[834px]:gap-[60px] min-[1376px]:gap-0 min-[1376px]:justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-[24px]">
            <div className="w-[163.042px] h-[156.283px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.042 156.283">
                <g>
                  <path d={svgPaths.p2a88900} fill="#FEDC61" />
                  <path d={svgPaths.p66c5b00} fill="#FEDC61" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-[13px] font-['Inter:Regular',sans-serif] font-normal text-[13px] text-white leading-normal w-[196px]">
              <p>Terms of use | Privacy Policy</p>
              <p>© 2022 Sherri Shepherd Productions.</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-wrap gap-[48px] min-[834px]:gap-[48px_60px] max-w-[652px]">
            {/* Nav Left */}
            <div className="flex flex-col gap-[16px] w-[121px]">
              <Link to="/" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-white leading-[22px] pr-[16px]">
                HOME
              </Link>
              <Link to="/episodes" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors">
                EPISODES
              </Link>
              <Link to="/videos" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors">
                VIDEOS
              </Link>
              <Link to="/giveaways" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors">
                GIVEAWAYS
              </Link>
              <Link to="/articles" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors">
                ARTICLES
              </Link>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                WHERE TO WATCH
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                BE ON THE SHOW
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                GET TICKETS
              </button>
            </div>

            {/* Nav Right */}
            <div className="flex flex-col gap-[16px] w-[157px]">
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                BREAKING THE NEWS
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                CELEBRITY INTERVIEWS
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                SHERRI MOMENTS
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                WARDROBE
              </button>
              <button type="button" className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#e4fafc] leading-[22px] pr-[16px] hover:text-white transition-colors text-left">
                SHOP
              </button>
            </div>

            {/* Social Icons */}
            <div className="w-[192.383px] h-[23.048px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.383 23.0479">
                <g>
                  <path d={svgPaths.p1d318f00} fill="white" />
                  <path d={svgPaths.p182a82f0} fill="white" />
                  <path d={svgPaths.pa530200} fill="white" />
                  <path d={svgPaths.p2723db00} fill="white" />
                  <path d={svgPaths.p125e6880} fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-[30px] right-[30px] w-[50px] h-[50px] rotate-90 hover:opacity-80 transition-opacity"
        aria-label="Back to top"
      >
        <div className="relative size-full">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <g>
              <g />
              <path d={svgPaths.p2eb91780} stroke="white" />
            </g>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[9.789px] h-[17.1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.78888 17.1">
                <path d={svgPaths.p35f6900} fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}