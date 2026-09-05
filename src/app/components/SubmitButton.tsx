interface SubmitButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function SubmitButton({ onClick, disabled = false }: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#fe3b84] flex items-center justify-center px-[42px] py-[20px] rounded-[4px] transition-all ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e5347a] active:bg-[#cc2f6c]"
      }`}
    >
      <p className="font-['Inter',sans-serif] font-black leading-[16px] text-[16px] text-white uppercase">
        SUBMIT
      </p>
    </button>
  );
}
