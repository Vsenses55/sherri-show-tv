import svgPaths from "./svg-xx2xyxbcxj";
import imgMasthead from "figma:asset/53b38aaaa1c16e962ca4a63dc19588b5c30087d9.png";
import imgLogoSherriUnderline from "figma:asset/3e6c3dc9b87a6db06953b04f13c0a2cb2672d334.png";
import imgSherriMastheadHost1 from "figma:asset/de18f2b37409892e5c0a14db555a8a769f9bae86.png";
import imgSherriBanner728X901 from "figma:asset/b814c09559e840f08c23af5fd54c2a70380c4b63.png";
import imgSherriVideoHero01 from "figma:asset/95e7e68ab2a7ae72fa74ed343603d72a884ec07e.png";
import imgVideoPreview1 from "figma:asset/61aad14b398e54a8b32f8bbd79e317dadf4a920d.png";
import imgVideoPreview2 from "figma:asset/b5125208c8eddd4348bc4e41b5d6d8a77f6d4fef.png";
import imgVideoPreview3 from "figma:asset/aa0b4225dc5a9aad3ddbeb887031aef5273cdef0.png";

function VideoPreview({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="cursor-pointer h-[160px] max-h-[160.10104370117188px] max-w-[285.17999267578125px] relative shrink-0 w-[285px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#032a36] inset-0" />
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      </div>
      <div className="flex flex-col justify-end max-h-[inherit] max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end max-h-[inherit] max-w-[inherit] p-[20px] size-full" />
      </div>
    </button>
  );
}
type MenuItemsTopMenuItemTextProps = {
  text: string;
};

function MenuItemsTopMenuItemText({ text }: MenuItemsTopMenuItemTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[16px] relative">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#7a7a7a] text-[14px] uppercase">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative size-full" data-name="Section Header">
      <div className="content-stretch flex flex-col gap-[12px] items-center pt-[12px] relative shrink-0 w-full" data-name="Navigation Bar">
        <div className="bg-white content-stretch flex isolate items-center justify-between px-[176px] relative shrink-0 w-[1728px]" data-name="Top Bar">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[3]" data-name="Time and Station Identifier">
            <p className="font-['Inter:Black',sans-serif] font-black leading-[0] not-italic relative shrink-0 text-[#383838] text-[0px] text-[12px]">
              <span className="leading-[16px]">{`2:00pm `}</span>
              <span className="font-['Inter:Regular',sans-serif] font-normal leading-[16px]">on</span>
              <span className="leading-[16px]">{` KNBC 4`}</span>
            </p>
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Locator">
              <button className="bg-[#e4fafc] cursor-pointer h-[23px] relative rounded-[4px] shrink-0 w-[70px]" data-name="Zip Code">
                <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center relative size-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#383838] text-[12px] text-left">90026</p>
                  </div>
                </div>
              </button>
              <div className="bg-[#f4f4f4] h-[23px] relative rounded-[4px] shrink-0 w-[70px]" data-name="Button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[11px] py-[4px] relative size-full">
                    <p className="font-['Inter:Black',sans-serif] font-black leading-[13px] not-italic relative shrink-0 text-[#d3d3d3] text-[10px] uppercase w-[45px] whitespace-pre-wrap">CHANGE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[2]" data-name="Desktop Icon Search">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Menu Items Top">
              <MenuItemsTopMenuItemText text="EPISODES" />
              <MenuItemsTopMenuItemText text="VIDEOS" />
              <MenuItemsTopMenuItemText text="GIVEAWAYS" />
              <MenuItemsTopMenuItemText text="ARTICLES" />
            </div>
            <button className="block cursor-pointer relative shrink-0 size-[18px]" data-name="Desktop Icon Search Close">
              <div className="-translate-y-1/2 absolute aspect-[17.399921417236328/17.400897979736328] left-0 right-0 top-1/2" data-name="Search Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p38422d00} fill="var(--fill-0, #FC5872)" id="Search Icon" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between overflow-clip px-[80px] relative rounded-[8px] shrink-0 w-[1376px]" data-name="Masthead">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMasthead} />
          <div className="flex flex-row items-center self-stretch">
            <div className="h-full relative shrink-0 w-[202.744px]" data-name="Logo">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
                  <div className="h-[124px] relative shrink-0 w-[125px]" data-name="logo-sherri-underline">
                    <img alt="" className="absolute block max-w-none size-full" height="124" src={imgLogoSherriUnderline} width="125" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex font-['Inter:Black',sans-serif] font-black gap-[36px] items-center leading-[22px] not-italic relative shrink-0 text-[18px] text-white uppercase" data-name="Menu Items Masthead">
            <p className="relative shrink-0">WHERE TO WATCH</p>
            <p className="relative shrink-0">BE ON THE SHOW</p>
            <p className="relative shrink-0">GET TICKETS</p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="aspect-[207/201] content-stretch flex flex-col h-full items-center justify-end relative shrink-0" data-name="Host">
              <div className="h-[191px] relative shrink-0 w-[197px]" data-name="sherri-masthead-host 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriMastheadHost1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] content-stretch flex h-[26px] items-center justify-end max-w-[442px] relative rounded-[4px] shrink-0 w-[442px]" data-name="Ticker">
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#646464] text-[14px] text-center uppercase">
          <p className="leading-[16px] whitespace-pre-wrap">SCROLLER FOR IMPORTANT ANNOUNCEMENTS.....</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Banner">
        <div className="h-[250px] relative shrink-0 w-[970px]" data-name="Banner">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <div className="h-[250px] relative shrink-0 w-full" data-name="sherri-banner-728x90 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriBanner728X901} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[480px] items-center justify-center max-w-[1140px] overflow-clip relative rounded-[8px] shrink-0 w-[1140px]" data-name="Player">
        <div className="content-stretch flex flex-col h-[480px] items-start min-h-[480px] min-w-[854px] relative shrink-0 w-[854px]">
          <div className="h-[480px] relative shrink-0 w-full" data-name="Video">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative size-full">
                <div className="h-[480px] relative shrink-0 w-[854px]" data-name="sherri-video-hero-0 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriVideoHero01} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[480px] items-start relative shrink-0 w-[285.18px]" data-name="Video Thumbnails">
          <VideoPreview>
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview1} />
          </VideoPreview>
          <VideoPreview>
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview2} />
          </VideoPreview>
          <VideoPreview>
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview3} />
          </VideoPreview>
          <div className="absolute inset-[1.25%_2.35%_86.01%_95.3%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70325 61.1273">
              <path d={svgPaths.p487e380} fill="var(--fill-0, #FEDC61)" id="Rectangle 1200" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}