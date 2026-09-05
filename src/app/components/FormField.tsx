import { useState } from "react";
import svgPaths from "@/imports/svg-8xjwz1z1gv";

interface FormFieldProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  required?: boolean;
  showInfo?: boolean;
  error?: string;
  helperText?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
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

export function FormField({
  label,
  placeholder = "Placeholder text",
  type = "text",
  required = false,
  showInfo = false,
  error,
  helperText,
  value,
  onChange,
  disabled = false,
}: FormFieldProps) {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const currentValue = value !== undefined ? value : internalValue;
  const hasError = Boolean(error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  const getBackgroundColor = () => {
    if (disabled) return "bg-[#f4f4f4]";
    if (isFocused) return "bg-white";
    if (hasError) return "bg-[#fff0f3]";
    return "bg-[#f4f4f4] hover:bg-[#e4fafc]";
  };

  const getBorderColor = () => {
    if (hasError) return "border-[#fe3b84]";
    if (isFocused) return "border-[#43bbcf]";
    return "border-[#e9e9e9]";
  };

  const getBorderWidth = () => {
    return isFocused ? "border-2" : "border";
  };

  return (
    <div className="flex flex-col gap-[16px] w-full" data-name="Input Field">
      {/* Label */}
      {label && (
        <div className="flex gap-[8px] h-[15px] items-center">
          <p className="font-['Inter',sans-serif] font-normal leading-[22px] text-[#032a36] text-[16px]">
            {label}
            {required && "*"}
          </p>
          {showInfo && <IconInfo />}
        </div>
      )}

      {/* Input */}
      <div
        className={`${getBackgroundColor()} h-[50px] rounded-[4px] w-full relative transition-colors ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        data-name="Input"
      >
        <div
          className={`absolute ${getBorderColor()} ${getBorderWidth()} border-solid inset-0 pointer-events-none rounded-[4px] transition-all`}
        />
        <div className="flex flex-row items-center size-full">
          <div className="flex items-center justify-between px-[16px] w-full h-full">
            <input
              type={type}
              placeholder={placeholder}
              value={currentValue}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={disabled}
              className="bg-transparent font-['Inter',sans-serif] font-normal leading-[22px] text-[#032a36] text-[16px] w-full h-full outline-none placeholder:text-[#7a7a7a]"
            />
            {hasError && (
              <div className="flex items-center justify-center shrink-0 size-[24px]">
                <ErrorIcon />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Helper or Error Text */}
      {(helperText || error) && (
        <div className="flex items-center min-h-[12px]">
          <p
            className={`text-[12px] font-['Inter',sans-serif] leading-[16px] ${
              hasError ? "text-[#fe3b84]" : "text-[#7a7a7a]"
            }`}
          >
            {error || helperText}
          </p>
        </div>
      )}
    </div>
  );
}