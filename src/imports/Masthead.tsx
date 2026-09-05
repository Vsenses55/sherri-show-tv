import imgLogoSherriUnderline from "figma:asset/871d464770a654b7c804b8a55019b5b6df3d2895.png";
import imgSherriMastheadHost1 from "figma:asset/de18f2b37409892e5c0a14db555a8a769f9bae86.png";
import imgMasthead from "figma:asset/53b38aaaa1c16e962ca4a63dc19588b5c30087d9.png";

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

export default function Masthead() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip px-[80px] relative rounded-[8px] size-full" data-name="Masthead">
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