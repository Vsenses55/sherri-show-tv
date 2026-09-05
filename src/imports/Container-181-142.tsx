import clsx from "clsx";
import svgPaths from "./svg-qh4wbs4e6r";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col justify-center size-full">
      <div className="content-stretch flex flex-col items-start justify-center px-[40px] relative size-full">{children}</div>
    </div>
  );
}
type Field2Props = {
  additionalClassNames?: string;
  text: string;
};

function Field2({ children, additionalClassNames = "", text }: React.PropsWithChildren<Field2Props>) {
  return (
    <div className={clsx("h-[64px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <Wrapper>
        <div className="content-stretch flex items-center justify-center relative shrink-0">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[18px] uppercase">{text}</p>
        </div>
      </Wrapper>
    </div>
  );
}
type Field1Props = {
  additionalClassNames?: string;
};

function Field1({ additionalClassNames = "" }: Field1Props) {
  return (
    <div className={clsx("col-1 h-[64px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <TypeScaleText text="Birmingham" />
      </Wrapper>
    </div>
  );
}
type FieldProps = {
  additionalClassNames?: string;
};

function Field({ additionalClassNames = "" }: FieldProps) {
  return (
    <div className={clsx("col-2 h-[64px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <TypeScaleText text="KTUU" />
      </Wrapper>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("col-3 h-[64px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <TypeScaleText text="2pm, M-F" />
      </Wrapper>
    </div>
  );
}
type TypeScaleTextProps = {
  text: string;
};

function TypeScaleText({ text }: TypeScaleTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px]">{text}</p>
    </div>
  );
}
type DropdownNeutralProps = {
  className?: string;
  state?: "Default" | "Press";
};

function DropdownNeutral({ className, state = "Default" }: DropdownNeutralProps) {
  const isDefault = state === "Default";
  return (
    <button className={className || "block relative"}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 50">
        <path d={svgPaths.pe282a00} fill={isDefault ? "var(--fill-0, #F4F4F4)" : "var(--fill-0, #032A36)"} id="Rectangle 1122" stroke="var(--stroke-0, #D3D3D3)" />
      </svg>
      <p className={`absolute font-["Inter:Black",sans-serif] font-black leading-[16px] left-[9.5%] not-italic right-[64.5%] text-[14px] text-left top-[calc(50%-6.15px)] uppercase whitespace-pre-wrap ${isDefault ? "text-[#222]" : "text-white"}`}>LABEL</p>
      <div className="absolute flex inset-[39%_10.59%_40.06%_81.09%] items-center justify-center">
        <div className={`flex-none h-[10.471px] rotate-180 w-[16.631px] ${isDefault ? "" : "-scale-y-100"}`}>
          <div className="relative size-full">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.631 10.4706">
              <path d={svgPaths.p72f4800} fill={isDefault ? "var(--fill-0, #FE3B84)" : "var(--fill-0, white)"} id="Polygon 2" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Container">
      <DropdownNeutral className="block cursor-pointer h-[50px] relative shrink-0 w-[200px]" />
      <div className="bg-white h-[512px] max-w-[1143px] relative rounded-[8px] shrink-0 w-full" data-name="Grid">
        <div className="grid grid-cols-[___minmax(0,1.20fr)_minmax(0,0.75fr)_minmax(0,0.75fr)] grid-rows-[repeat(8,minmax(0,1fr))] max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <Helper additionalClassNames="row-8" />
          <Field additionalClassNames="row-8" />
          <Field1 additionalClassNames="row-8" />
          <Helper additionalClassNames="row-7" />
          <Field additionalClassNames="row-7" />
          <Field1 additionalClassNames="row-7" />
          <Helper additionalClassNames="row-6" />
          <Field additionalClassNames="row-6" />
          <Field1 additionalClassNames="row-6" />
          <Helper additionalClassNames="row-5" />
          <Field additionalClassNames="row-5" />
          <Field1 additionalClassNames="row-5" />
          <Helper additionalClassNames="row-4" />
          <Field additionalClassNames="row-4" />
          <Field1 additionalClassNames="row-4" />
          <Field2 additionalClassNames="bg-[#f4f4f4] col-[1/span_3] row-2" text="ALABAMA" />
          <Helper additionalClassNames="row-3" />
          <Field additionalClassNames="row-3" />
          <div className="col-1 h-[64px] justify-self-stretch relative row-3 shrink-0" data-name="Field">
            <div aria-hidden="true" className="absolute border-[#d3d3d3] border-b border-solid inset-0 pointer-events-none" />
            <Wrapper>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Type Scale">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#222] text-[16px] w-[90px] whitespace-pre-wrap">Birmingham</p>
              </div>
            </Wrapper>
          </div>
          <Field2 additionalClassNames="col-1 row-1" text="LOCATION" />
          <Field2 additionalClassNames="col-2 row-1" text="STATION" />
          <Field2 additionalClassNames="col-3 row-1" text="TIME" />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}