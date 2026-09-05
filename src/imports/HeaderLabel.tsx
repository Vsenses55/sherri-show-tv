import svgPaths from "./svg-2v7xf5sgt6";

export default function HeaderLabel() {
  return (
    <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-between relative size-full" data-name="Header Label">
      <div className="h-[13px] max-w-[47px] relative shrink-0 w-[47px]" data-name="Circles">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 13">
          <g id="Circles">
            <path d={svgPaths.pb2ee580} fill="var(--fill-0, #FEDC61)" id="Ellipse 2" />
            <path d={svgPaths.p3b10bb00} fill="var(--fill-0, #00DCE6)" id="Ellipse 3" />
            <path d={svgPaths.p28ad7e80} fill="var(--fill-0, #FF5872)" id="Ellipse 4" />
          </g>
        </svg>
      </div>
      <div className="content-center flex flex-wrap gap-y-[10px] items-center relative shrink-0 w-[572px]" data-name="Header">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic relative shrink-0 text-[#222] text-[38px] uppercase">THE SHERRI SHOW</p>
      </div>
      <div className="content-center flex flex-wrap gap-[8px] items-center justify-end relative shrink-0" data-name="Button See More">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#fe3b84] text-[14px] uppercase">see more</p>
        <div className="h-[8.712px] relative shrink-0 w-[7.552px]" data-name="Path 421">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.55235 8.71155">
            <path d={svgPaths.p37cc9000} fill="var(--fill-0, #FE3B84)" id="Path 421" />
          </svg>
        </div>
      </div>
    </div>
  );
}