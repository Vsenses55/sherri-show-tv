import svgPaths from "./svg-6x2gq3pj89";
import imgLogoSherriUnderline from "figma:asset/871d464770a654b7c804b8a55019b5b6df3d2895.png";
import imgSherriMastheadHost1 from "figma:asset/de18f2b37409892e5c0a14db555a8a769f9bae86.png";
import imgMasthead from "figma:asset/53b38aaaa1c16e962ca4a63dc19588b5c30087d9.png";

function ZipCode() {
  return (
    <div className="bg-[#e4fafc] content-stretch flex h-[23px] items-center justify-center relative rounded-[4px] shrink-0 w-[70px]" data-name="Zip Code">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#383838] text-[12px]">90026</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex h-[23px] items-center justify-center px-[11px] py-[4px] relative rounded-[4px] shrink-0 w-[70px]" data-name="Button">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[13px] not-italic relative shrink-0 text-[#d3d3d3] text-[10px] uppercase w-[45px] whitespace-pre-wrap">CHANGE</p>
    </div>
  );
}

function Locator() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Locator">
      <ZipCode />
      <Button />
    </div>
  );
}

function TimeAndStationIdentifier() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[3]" data-name="Time and Station Identifier">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#383838] text-[0px] text-[12px]">
        <span className="font-['Inter:Black',sans-serif] font-black leading-[normal]">2:00pm</span>
        <span className="leading-[normal]">{` on `}</span>
        <span className="font-['Inter:Black',sans-serif] font-black leading-[normal]">KNBC 4</span>
      </p>
      <Locator />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[16px] relative shrink-0" data-name="Menu Item">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">EPISODES</p>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[16px] relative shrink-0" data-name="Menu Item">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">VIDEOS</p>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[16px] relative shrink-0" data-name="Menu Item">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">GIVEAWAYS</p>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[16px] relative shrink-0" data-name="Menu Item">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#7a7a7a] text-[12px]">ARTICLES</p>
    </div>
  );
}

function MenuItemsTop() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Menu Items Top">
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
    </div>
  );
}

function DesktopIconSearchClose() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Desktop Icon Search Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Desktop Icon Search Close">
          <path d={svgPaths.p38422d00} fill="var(--fill-0, #FC5872)" id="Search Icon" />
        </g>
      </svg>
    </div>
  );
}

function DesktopIconSearch() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 z-[2]" data-name="Desktop Icon Search">
      <MenuItemsTop />
      <DesktopIconSearchClose />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-white content-stretch flex h-[44px] isolate items-center justify-between px-[176px] py-[6px] relative shrink-0 w-[1728px]" data-name="Top Bar">
      <TimeAndStationIdentifier />
      <DesktopIconSearch />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center py-[16px] relative shrink-0 w-[202.744px]" data-name="Logo">
      <div className="h-[124px] relative shrink-0 w-[125px]" data-name="logo-sherri-underline">
        <img alt="" className="block max-w-none size-full" height="124" src={imgLogoSherriUnderline} width="125" />
      </div>
    </div>
  );
}

function MenuItemsMasthead() {
  return (
    <div className="content-stretch flex font-['Inter:Black',sans-serif] font-black gap-[24px] items-center leading-[16px] not-italic relative shrink-0 text-[16px] text-white uppercase" data-name="Menu Items Masthead">
      <p className="relative shrink-0">WHERE TO WATCH</p>
      <p className="relative shrink-0">BE ON THE SHOW</p>
      <p className="relative shrink-0">GET TICKETS</p>
    </div>
  );
}

function Host() {
  return (
    <div className="aspect-[207/201] content-stretch flex flex-col h-full items-center justify-end relative shrink-0" data-name="Host">
      <div className="h-[191px] relative shrink-0 w-[197px]" data-name="sherri-masthead-host 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriMastheadHost1} />
      </div>
    </div>
  );
}

function Masthead() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip px-[80px] relative rounded-[8px] shrink-0 w-[1376px]" data-name="Masthead">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgMasthead} />
      <div className="flex flex-row items-center self-stretch">
        <Logo />
      </div>
      <MenuItemsMasthead />
      <div className="flex flex-row items-center self-stretch">
        <Host />
      </div>
    </div>
  );
}

export default function NavigationBar() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative size-full" data-name="Navigation Bar">
      <TopBar />
      <Masthead />
    </div>
  );
}