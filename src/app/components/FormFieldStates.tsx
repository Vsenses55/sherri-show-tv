import svgPaths from "@/imports/svg-8xjwz1z1gv";

interface FormFieldStateProps {
  state: "default" | "hover" | "focused" | "error" | "disabled" | "filled";
  label?: string;
  placeholder?: string;
  helperText?: string;
  showInfo?: boolean;
}

function IconInfo() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="icon-info">
      <div className="absolute inset-[-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <g id="icon-info">
            <path
              d={svgPaths.p247fa4f2}
              id="icon-info_2"
              stroke="#032a36"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ErrorIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24.0013">
        <g id="Search / Close">
          <path d={svgPaths.p33e1b100} fill="#fe3b84" id="Search Icon" />
        </g>
      </svg>
    </div>
  );
}

export function FormFieldState({
  state,
  label = "Label",
  placeholder = "Placeholder text",
  helperText = "",
  showInfo = true,
}: FormFieldStateProps) {
  const getBackgroundColor = () => {
    switch (state) {
      case "hover":
        return "bg-[#e4fafc]";
      case "focused":
        return "bg-white";
      case "error":
        return "bg-[#fff0f3]";
      case "disabled":
        return "bg-[#f4f4f4]";
      case "filled":
        return "bg-[#f4f4f4]";
      default:
        return "bg-[#f4f4f4]";
    }
  };

  const getBorderColor = () => {
    switch (state) {
      case "focused":
        return "border-[#43bbcf]";
      case "error":
        return "border-[#fe3b84]";
      default:
        return "border-[#e9e9e9]";
    }
  };

  const getTextColor = () => {
    switch (state) {
      case "disabled":
        return "text-[#b0b0b0]";
      case "filled":
        return "text-[#032a36]";
      default:
        return "text-[#7a7a7a]";
    }
  };

  const getBorderWidth = () => {
    return state === "focused" ? "border-2" : "border";
  };

  const getOpacity = () => {
    return state === "disabled" ? "opacity-50" : "opacity-100";
  };

  const showErrorIcon = state === "error" || state === "hover";
  const displayText = state === "filled" ? "John Doe" : placeholder;
  const cursorSymbol = state === "focused" ? "|" : "";

  return (
    <div className="flex flex-col gap-[16px] w-full" data-name="Input Field State">
      {/* Label */}
      <div className="flex gap-[8px] h-[15px] items-center">
        <p className="font-['Inter',sans-serif] font-normal leading-[22px] text-[#032a36] text-[16px]">
          {label}*
        </p>
        {showInfo && <IconInfo />}
      </div>

      {/* Input */}
      <div
        className={`${getBackgroundColor()} ${getOpacity()} h-[50px] rounded-[4px] w-full relative`}
        data-name="Input"
      >
        <div
          className={`absolute ${getBorderColor()} ${getBorderWidth()} border-solid inset-0 pointer-events-none rounded-[4px]`}
        />
        <div className="flex flex-row items-center size-full">
          <div className="flex items-center justify-between px-[16px] w-full h-full">
            <p
              className={`font-['Inter',sans-serif] font-normal leading-[22px] ${getTextColor()} text-[16px]`}
            >
              {cursorSymbol}
              {displayText}
            </p>
            {showErrorIcon && (
              <div className="flex items-center justify-center shrink-0 size-[24px]">
                <ErrorIcon />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Helper Text */}
      {helperText && (
        <div className="flex items-center min-h-[12px]">
          <p
            className={`text-[12px] font-['Inter',sans-serif] leading-[16px] ${
              state === "error" ? "text-[#fe3b84]" : "text-[#7a7a7a]"
            }`}
          >
            {helperText}
          </p>
        </div>
      )}
    </div>
  );
}
