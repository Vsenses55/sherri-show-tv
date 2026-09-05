import clsx from "clsx";
import svgPaths from "./svg-kcux0t07yk";
type HelperbuttonHelperProps = {
  additionalClassNames?: string;
};

function HelperbuttonHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<HelperbuttonHelperProps>) {
  return (
    <div className={clsx("flex-none h-[10.471px] rotate-180 w-[16.631px]", additionalClassNames)}>
      <div className="relative size-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.631 10.4706">
          {children}
        </svg>
      </div>
    </div>
  );
}
type DropdownNeutralProps = {
  className?: string;
  label?: string;
  state?: "Default" | "Press";
};

function DropdownNeutral({ className, label = "LABEL", state = "Default" }: DropdownNeutralProps) {
  const isDefault = state === "Default";
  const isPress = state === "Press";
  return (
    <button className={className || "block relative"}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 50">
        <path d={svgPaths.pe282a00} fill={isDefault ? "var(--fill-0, #F4F4F4)" : "var(--fill-0, #032A36)"} id="Rectangle 1122" stroke="var(--stroke-0, #D3D3D3)" />
      </svg>
      {isPress && (
        <>
          <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[9.5%] not-italic right-[64.5%] text-[14px] text-left text-white top-[calc(50%-6.15px)] uppercase whitespace-pre-wrap">LABEL</p>
          <div className="absolute flex inset-[39%_10.59%_40.06%_81.09%] items-center justify-center">
            <HelperbuttonHelper additionalClassNames="-scale-y-100">
              <path d={svgPaths.p72f4800} fill="var(--fill-0, white)" id="Polygon 2" />
            </HelperbuttonHelper>
          </div>
        </>
      )}
      {isDefault && (
        <>
          <p className="absolute font-['Inter:Black',sans-serif] font-black leading-[16px] left-[9.5%] not-italic right-[64.5%] text-[#222] text-[14px] text-left top-[calc(50%-6.15px)] uppercase whitespace-pre-wrap">{label}</p>
          <div className="absolute flex inset-[39%_10.59%_40.06%_81.09%] items-center justify-center">
            <HelperbuttonHelper>
              <path d={svgPaths.p72f4800} fill="var(--fill-0, #FE3B84)" id="Polygon 2" />
            </HelperbuttonHelper>
          </div>
        </>
      )}
    </button>
  );
}

export default function DropdownNeutral1() {
  return <DropdownNeutral className="block cursor-pointer relative size-full" label="STATE" />;
}