import imgImage3 from "figma:asset/23a5fd6b78147c67649898644dbee84fb30eba70.png";
import svgPaths from "./svg-brjnwoalh5";
import imgSherriPostLarge1 from "figma:asset/df29e7a17e5c07202e1d6419bfaea39bf89d27a1.png";
import imgPostRegular3642051 from "figma:asset/0fa48db5338c0a5bd8e6b92c02d5103274f9424e.png";
import imgPostRegular3642052 from "figma:asset/330c342d54556bdd624cc5714974241c99b08887.png";
import imgPostRegular3642053 from "figma:asset/13b9b966dae5abea4b479820557764ba1fac97d4.png";

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <div className="h-[205px] relative shrink-0 w-[364px]" data-name="post-regular-364-205-1">
        {children}
      </div>
      <div className="content-stretch flex flex-col font-['Inter:Black',sans-serif] font-black gap-[12px] items-start not-italic relative shrink-0 text-[#222] w-full whitespace-pre-wrap">
        <p className="leading-[16px] relative shrink-0 text-[14px] w-full">{"CATEGORY TITLE"}</p>
        <p className="leading-[22px] relative shrink-0 text-[18px] uppercase w-full">{`A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE `}</p>
      </div>
    </div>
  );
}

export default function SectionAdOption() {
  return (
    <div className="bg-white content-start flex flex-wrap isolate items-start justify-center relative size-full" data-name="Section - Ad Option">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] items-start max-w-[1143px] min-h-px min-w-[364px] relative z-[1]" data-name="Content">
        <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-between max-w-[1143px] relative shrink-0 w-full" data-name="Header Label">
          <div className="h-[13px] max-w-[47px] relative shrink-0 w-[47px]" data-name="Circles">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 13">
              <g id="Circles">
                <path d={svgPaths.pb2ee580} fill="var(--fill-0, #FEDC61)" id="Ellipse 2" />
                <path d={svgPaths.p3b10bb00} fill="var(--fill-0, #00DCE6)" id="Ellipse 3" />
                <path d={svgPaths.p28ad7e80} fill="var(--fill-0, #FF5872)" id="Ellipse 4" />
              </g>
            </svg>
          </div>
          <div className="content-center flex flex-wrap gap-y-[10px] items-center relative shrink-0 w-[982px]" data-name="Header">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Type Scale">
              <p className="font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic relative shrink-0 text-[#222] text-[38px] uppercase">SHERRI MOMENTS</p>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-[8px_0px] items-center justify-end relative shrink-0" data-name="Button See More">
            <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#fe3b84] text-[14px] uppercase w-[90px] whitespace-pre-wrap">see more</p>
            <div className="h-[8.712px] relative shrink-0 w-[7.552px]" data-name="Path 421">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.55235 8.71155">
                <path d={svgPaths.p37cc9000} fill="var(--fill-0, #FE3B84)" id="Path 421" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-start flex flex-wrap gap-[48px_91px] items-start relative shrink-0 w-full" data-name="Main Image with Ad">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start max-w-[1143px] min-h-px min-w-[364px] overflow-clip relative" data-name="Card Post">
            <div className="bg-black content-stretch flex h-[423px] items-start justify-center min-w-[364px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
              <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="sherri-post-large 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriPostLarge1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Inter:Black',sans-serif] font-black gap-[16px] items-start max-w-[500px] not-italic relative shrink-0 text-[#222] w-full whitespace-pre-wrap" data-name="Text">
              <p className="leading-[16px] relative shrink-0 text-[14px] w-full">CATEGORY TITLE</p>
              <p className="leading-[30px] relative shrink-0 text-[28px] uppercase w-full">SHOW EPISODE TITLE WITH EXTRA LONG SHOW TITLE</p>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Ad">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative">
                <div className="h-[250px] relative shrink-0 w-[300px]" data-name="Image 3">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-start flex flex-wrap gap-y-[48px] items-start justify-between relative shrink-0 w-full" data-name="Horizontal Stack">
          <Card>
            <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642051} width="364" />
          </Card>
          <Card>
            <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642052} width="364" />
          </Card>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Card">
            <div className="h-[205px] relative shrink-0 w-[364px]" data-name="post-regular-364-205-1">
              <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642053} width="364" />
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[267px]" data-name="Text">
                <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#222] text-[14px] w-full whitespace-pre-wrap">CATEGORY TITLE</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[267px]" data-name="Text">
                <p className="font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[18px] uppercase w-full whitespace-pre-wrap">{`A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}