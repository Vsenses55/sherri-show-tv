import svgPaths from "./svg-xheu8l17x3";
import imgImgAbout from "figma:asset/601c951ecacbe84c6c687b5411de1b87c6431a84.png";

export default function Section() {
  return (
    <div className="content-center flex flex-wrap gap-y-[40px] items-center justify-center relative size-full" data-name="Section">
      <div className="content-center flex flex-[1_0_0] flex-wrap gap-[40px] items-center justify-center min-h-px min-w-px relative" data-name="Container">
        <div className="aspect-[504/604] content-stretch flex flex-[1_0_0] items-center justify-center max-h-[604px] max-w-[504px] min-h-[457.7936706542969px] min-w-[382px] relative" data-name="Image">
          <div className="aspect-[504/604] flex-[1_0_0] min-h-px min-w-px relative" data-name="img-about">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImgAbout} />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center max-w-[504px] min-h-px min-w-[390px] relative" data-name="Copy">
          <div className="h-[13px] relative shrink-0 w-[47px]" data-name="Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 13">
              <g id="Circle">
                <path d={svgPaths.pb2ee580} fill="var(--fill-0, #FEDC61)" id="Ellipse 2" />
                <path d={svgPaths.p3b10bb00} fill="var(--fill-0, #00DCE6)" id="Ellipse 3" />
                <path d={svgPaths.p28ad7e80} fill="var(--fill-0, #FF5872)" id="Ellipse 4" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Type Scale">
            <p className="font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic relative shrink-0 text-[#222] text-[38px] uppercase">ABOUT SHERRI</p>
          </div>
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#4e4e4e] text-[16px] w-[min-content] whitespace-pre-wrap">
            <p className="mb-0">The Daytime Emmy Award-winning talk show host, comedienne, actor, and best-selling author Sherri Shepherd brings her inimitable, authentic and comedic perspective to daytime this fall with her own nationally-syndicated talk show, SHERRI.</p>
            <p className="mb-0">&nbsp;</p>
            <p>{`Sherri’s warm, relatable and engaging personality will shine through as she offers her fun and flirty take on pop culture and trending topics with the daytime audience. `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}