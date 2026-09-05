import svgPaths from "./svg-19wyztb5yg";

function ButtonSearch() {
  return (
    <div className="bg-[#e4fafc] content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[24px] py-[7px] relative shrink-0 w-[430px]" data-name="Button Search">
      <div className="h-[13.673px] relative shrink-0 w-[13.672px]" data-name="icon-search-bar">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6716 13.6726">
          <path d={svgPaths.p29d17c00} fill="var(--fill-0, #999999)" id="icon-search-bar" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#959595] text-[12px]">| Search Sherri Show</p>
    </div>
  );
}

function IconAndSearch() {
  return (
    <button className="absolute block cursor-pointer left-[389px] size-[18px] top-[13px]" data-name="Icon and Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon and Search">
          <path d={svgPaths.p3d0f4200} fill="var(--fill-0, #FC5872)" id="Close Icon" />
        </g>
      </svg>
    </button>
  );
}

export default function SearchFieldMobile() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative size-full" data-name="Search Field Mobile">
      <ButtonSearch />
      <IconAndSearch />
    </div>
  );
}