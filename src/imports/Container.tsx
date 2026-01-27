import svgPaths from "./svg-7qpertf5lb";

function Img() {
  return (
    <div className="bg-[#222] h-[205px] relative rounded-[10px] shrink-0 w-full" data-name="Img">
      <div className="size-full" />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Headline">
      <p className="css-4hzbpn font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[20px] uppercase w-[364px]">{`SHOW TOPIC HEADLINE AND DESCRIPTION GOES HERE `}</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Description">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal h-[130px] leading-[22px] not-italic relative shrink-0 text-[#383838] text-[16px] w-[364px]">Quisque accumsan cursus consequat. Morbimattis, odio eu ornare ultricies, mi dolor dapibus massa, vel hendrerit ligula magna vel lorem. Suspendisse interdum finibus purus, eu vulputate orci consectetur ac.</p>
    </div>
  );
}

function ButtonTextArrow() {
  return (
    <div className="h-[21px] relative shrink-0 w-[132px]" data-name="Button Text Arrow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Black',sans-serif] font-black inset-[14.29%_60.61%_28.57%_0] leading-[16px] not-italic text-[#222] text-[16px] uppercase">LABEL</p>
        <div className="absolute inset-[14.29%_0_44.5%_86.12%]" data-name="Path 24">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 34, 34, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.324 8.65399">
              <path d={svgPaths.p3f77b100} fill="var(--fill-0, #222222)" id="Path 24" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#222] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PostTitleAndDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[364px]" data-name="Post Title and Description">
      <Img />
      <Headline />
      <Description />
      <ButtonTextArrow />
    </div>
  );
}

function Stack() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] items-start justify-between max-w-[1143px] relative shrink-0 w-full" data-name="Stack">
      {[...Array(3).keys()].map((_, i) => (
        <PostTitleAndDescription key={i} />
      ))}
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start justify-center relative size-full" data-name="Container">
      <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative shrink-0 text-[#222] text-[28px]">FAQ</p>
      <Stack />
    </div>
  );
}