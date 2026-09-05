import svgPaths from "./svg-d4ogkics98";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pr-[16px] relative">{children}</div>
      </div>
    </div>
  );
}
type MenuItemTextProps = {
  text: string;
};

function MenuItemText({ text }: MenuItemTextProps) {
  return (
    <Wrapper>
      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#e4fafc] text-[14px] uppercase">{text}</p>
    </Wrapper>
  );
}

export default function Section() {
  return (
    <div className="bg-[#032a36] content-center flex flex-wrap gap-0 items-center justify-center relative rounded-[8px] size-full" data-name="Section">
      <div className="content-start flex flex-[1_0_0] flex-wrap gap-y-[48px] items-start justify-between max-w-[1143px] min-h-px min-w-px py-[160px] relative" data-name="Container">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0" data-name="Left Content">
          <div className="h-[156.283px] relative shrink-0 w-[163.042px]" data-name="Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163.042 156.283">
              <g id="Logo">
                <path d={svgPaths.p2a88900} fill="var(--fill-0, #FEDC61)" id="Path 426" />
                <path d={svgPaths.p66c5b00} fill="var(--fill-0, #FEDC61)" id="Path 425" />
              </g>
            </svg>
          </div>
          <div
            className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[13px] items-start leading-[normal] not-italic relative shrink-0 text-[13px] text-white w-[196px] whitespace-pre-wrap"
            data-name="Terms of use | Privacy Policy
© 2022 Sherri Shepherd Productions."
          >
            <p className="relative shrink-0 w-full">Terms of use | Privacy Policy</p>
            <p className="relative shrink-0 w-full">© 2022 Sherri Shepherd Productions.</p>
          </div>
        </div>
        <div className="content-start flex flex-wrap gap-[48px_90px] items-start max-w-[652px] relative shrink-0 w-[652px]" data-name="Right Content">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[121px]" data-name="Nav Left">
            <Wrapper>
              <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[14px] text-white uppercase">HOME</p>
            </Wrapper>
            <MenuItemText text="EPISODES" />
            <MenuItemText text="VIDEOS" />
            <MenuItemText text="GIVEAWAYS" />
            <MenuItemText text="ARTICLES" />
            <MenuItemText text="WHERE TO WATCH" />
            <MenuItemText text="BE ON THE SHOW" />
            <MenuItemText text="GET TICKETS" />
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[157px]" data-name="Nav Right">
            <MenuItemText text="BREAKING THE NEWS" />
            <MenuItemText text="CELEBRITY INTERVIEWS" />
            <MenuItemText text="SHERRI MOMENTS" />
            <MenuItemText text="WARDROBE" />
            <MenuItemText text="SHOP" />
          </div>
          <div className="h-[23.048px] relative shrink-0 w-[192.383px]" data-name="Social Icons">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.383 23.0479">
              <g id="Social Icons">
                <path d={svgPaths.p1d318f00} fill="var(--fill-0, white)" id="Social_Instagram" />
                <path d={svgPaths.p182a82f0} fill="var(--fill-0, white)" id="Social_FB" />
                <path d={svgPaths.pa530200} fill="var(--fill-0, white)" id="Social_Twitter" />
                <path d={svgPaths.p2723db00} fill="var(--fill-0, white)" id="Path 405" />
                <path d={svgPaths.p125e6880} fill="var(--fill-0, white)" id="Social_YouTube" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[30.28px] flex items-center justify-center right-[30px] size-[50px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "36" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="content-stretch flex gap-[10px] items-center px-[20px] py-[16px] relative size-[50px]" data-name="Arrow_Up">
            <div className="absolute contents inset-0" data-name="Btn: See all news">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                <g id="Rectangle 70">
                  <g id="Vector" />
                  <path d={svgPaths.p2eb91780} id="Vector_2" stroke="var(--stroke-0, white)" />
                </g>
              </svg>
            </div>
            <div className="h-[17.1px] relative shrink-0 w-[9.789px]" data-name="Icon ionic-ios-arrow-back">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.78888 17.1">
                <path d={svgPaths.p35f6900} fill="var(--fill-0, white)" id="Icon ionic-ios-arrow-back" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}