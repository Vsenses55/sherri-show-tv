import svgPaths from "./svg-7wzi3k2q7i";

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="icon-info">
      <div className="absolute inset-[-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <g id="icon-info">
            <path d={svgPaths.p247fa4f2} id="icon-info_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15px] items-center relative shrink-0 w-[73px]" data-name="Label">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#032a36] text-[16px]">Label*</p>
      <IconInfo />
    </div>
  );
}

function InputText() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0 w-[339px] z-[2]" data-name="Input Text">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#7a7a7a] text-[16px]">|Placeholder text</p>
    </div>
  );
}

function SearchClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search / Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0013">
        <g id="Search / Close">
          <path d={svgPaths.p33e1b100} fill="var(--fill-0, #FC5872)" id="Search Icon" />
        </g>
      </svg>
    </div>
  );
}

function Error() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px] z-[1]" data-name="Error">
      <SearchClose />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#e4fafc] h-[50px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex isolate items-center justify-between px-[16px] relative size-full">
          <InputText />
          <Error />
        </div>
      </div>
    </div>
  );
}

function Helpter() {
  return <div className="content-stretch flex h-[12px] items-center shrink-0 w-[87px]" data-name="Helpter" />;
}

export default function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Input Field">
      <Label />
      <Input />
      <Helpter />
    </div>
  );
}