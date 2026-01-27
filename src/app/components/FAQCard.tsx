import svgPaths from "@/imports/svg-7qpertf5lb";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface FAQCardProps {
  image: string;
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function FAQCard({
  image,
  title,
  description,
  buttonLabel = "Learn More",
  onButtonClick,
}: FAQCardProps) {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[364px]">
      {/* Image */}
      <div className="w-full h-[205px] bg-slate-200 rounded-lg overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-black text-xl uppercase leading-snug text-slate-900 h-[56px] overflow-hidden">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed h-[130px] overflow-hidden">
        {description}
      </p>

      {/* Button with Arrow */}
      <button
        onClick={onButtonClick}
        className="group flex items-center gap-2 w-fit border-b-2 border-slate-900 hover:border-[#fe3b84] transition-colors pb-1"
      >
        <span className="font-black text-slate-900 group-hover:text-[#fe3b84] uppercase text-sm transition-colors">
          {buttonLabel}
        </span>
        <svg
          className="w-[18px] h-[9px] text-slate-900 group-hover:text-[#fe3b84] transition-colors"
          fill="currentColor"
          viewBox="0 0 18.324 8.65399"
        >
          <path d={svgPaths.p3f77b100} />
        </svg>
      </button>
    </div>
  );
}