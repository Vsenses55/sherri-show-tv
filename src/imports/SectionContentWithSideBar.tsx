import svgPaths from "./svg-ls1qdwo051";
import imgSherriPostLarge1 from "figma:asset/81b47cc877e50c72a0bb2a57f6eb6c8ef74369a5.png";
import imgPostRegular3642051 from "figma:asset/7fd93c2674a65b0adcdca78e4423dad3d1653e2d.png";
import imgPostRegular3642052 from "figma:asset/863fc5cd7ac11ce51e27ea7e8f37ab8ebe65bc6b.png";
import imgPostRegular3642053 from "figma:asset/9dcfe973d3436a944465d07037afbf6f8c1ec2b1.png";
import imgPostRegular3642054 from "figma:asset/213d6e5533edce0fc51d22b6aac8fd1116eec71a.png";
import imgPostRegular3642055 from "figma:asset/0bc3bf1b7cd1039cdc5e2e15d21dc2d4fce82d28.png";
import imgPostRegular3642056 from "figma:asset/e4d9c6915fc68d869c8647eee2d55f3b2a003cbe.png";
import imgPostComingUp1 from "figma:asset/bbe0e79b3dbcde9644d71129ba1e5369c325421e.png";
import imgImage7 from "figma:asset/ad80e4c0437926baeb2a05dfec3bf8c0a6f71ae9.png";
import imgPostComingUp2 from "figma:asset/66dd6fd0603b8a1de62a35c6079f45f53512ef9b.png";
import imgPostComingUp3 from "figma:asset/ac18b1e73f3db2839a43d6781649ab5f7b2f5a2f.png";

function Image({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="h-[205px] relative shrink-0 w-[364px]" data-name="post-regular-364-205-1">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-[169px] relative shrink-0 w-[300px]" data-name="post-coming-up-1">
        {children}
      </div>
    </div>
  );
}

function ImgImage() {
  return (
    <Wrapper>
      <img alt="" className="absolute block max-w-none size-full" height="169" src={imgPostComingUp2} width="300" />
    </Wrapper>
  );
}
type TypeProps = {
  text: string;
  text1: string;
};

function Type({ text, text1 }: TypeProps) {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Black',sans-serif] font-black gap-[8px] items-start not-italic relative shrink-0 text-[#222] uppercase">
      <p className="leading-[16px] relative shrink-0 text-[14px]">{text}</p>
      <p className="leading-[22px] relative shrink-0 text-[18px] w-[177px] whitespace-pre-wrap">{text1}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[267px]">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[18px] uppercase w-full whitespace-pre-wrap">{`A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE `}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[267px]">
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#222] text-[14px] uppercase w-full whitespace-pre-wrap">{text}</p>
    </div>
  );
}

export default function SectionContentWithSideBar() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-y-[68px] isolate items-start justify-center relative size-full" data-name="Section Content with Side Bar">
      <div className="content-start flex flex-[1_0_0] flex-wrap gap-[44px] items-start justify-center min-h-px min-w-px relative z-[1]" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start max-w-[750px] min-h-px min-w-[364px] relative" data-name="Breaking the News">
          <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-between relative shrink-0 w-full" data-name="Header Label">
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
          <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[364px] overflow-clip relative shrink-0 w-full" data-name="Card Post">
            <div className="bg-black content-stretch flex h-[423px] items-start justify-center min-w-[364px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Image">
              <div className="h-[423px] relative shrink-0 w-[752px]" data-name="sherri-post-large 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriPostLarge1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[550px] relative shrink-0 w-full" data-name="Text">
              <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#222] text-[14px] uppercase w-full whitespace-pre-wrap">CATEGORY TITLE</p>
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Type Scale">
                <p className="flex-[1_0_0] font-['Inter:Black',sans-serif] font-black leading-[30px] min-h-px min-w-px not-italic relative text-[#222] text-[28px] uppercase whitespace-pre-wrap">The show episode title with an extra long headline</p>
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[24px] items-start justify-between relative shrink-0 w-full" data-name="Horizontal Stack">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642051} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642052} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[24px] items-start justify-between relative shrink-0 w-full" data-name="Horizontal Stack">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642053} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642054} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
          </div>
          <div className="content-start flex flex-wrap gap-y-[24px] items-start justify-between relative shrink-0 w-full" data-name="Horizontal Stack">
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642055} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px]" data-name="Card">
              <Image>
                <img alt="" className="absolute block max-w-none size-full" height="205" src={imgPostRegular3642056} width="364" />
              </Image>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Text">
                <TextText text="CATEGORY TITLE" />
                <Text />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[41px] items-center max-w-[349px] pb-[34px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 w-[349px]" data-name="Coming Up Module">
          <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.15)]" />
          <p className="font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative shrink-0 text-[#222] text-[28px] text-center uppercase">Coming Up...</p>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px]" data-name="Card">
            <Wrapper>
              <img alt="" className="absolute block max-w-none size-full" height="169" src={imgPostComingUp1} width="300" />
            </Wrapper>
            <Type text="MON, SEPTEMBER 10" text1="NAME OF GUEST" />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Ad">
            <div className="col-1 h-[250px] ml-0 mt-0 relative row-1 w-[300px]" data-name="Image 7">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage7} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card">
            <ImgImage />
            <Type text="MON, SEPTEMBER 10" text1="NAME OF GUEST" />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card">
            <Wrapper>
              <img alt="" className="absolute block max-w-none size-full" height="169" src={imgPostComingUp3} width="300" />
            </Wrapper>
            <Type text="MON, SEPTEMBER 10" text1="NAME OF GUEST" />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Card">
            <ImgImage />
            <Type text="MON, SEPTEMBER 10" text1="NAME OF GUEST" />
          </div>
        </div>
      </div>
    </div>
  );
}