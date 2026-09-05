import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

export function Card({ title, description, imageUrl, onButtonClick }: CardProps) {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-full h-[200px] bg-slate-200 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col gap-3">
        {/* Title */}
        <h3 className="font-['Inter:Black',sans-serif] font-black text-[18px] uppercase text-[#222]">
          {title}
        </h3>

        {/* Description */}
        <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#666] leading-relaxed">
          {description}
        </p>

        {/* Optional Button */}
        {onButtonClick && (
          <button
            onClick={onButtonClick}
            className="mt-2 font-['Inter:Black',sans-serif] font-black text-[12px] text-[#fe3b84] hover:text-[#fe629d] uppercase transition-colors w-fit"
          >
            Learn More →
          </button>
        )}
      </div>
    </div>
  );
}
