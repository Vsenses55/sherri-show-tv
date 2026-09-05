import svgPaths from "../../imports/svg-ls1qdwo051";

interface SectionHeaderProps {
  title: string;
  showSeeMore?: boolean;
  onSeeMoreClick?: () => void;
}

export function SectionHeader({ title, showSeeMore = true, onSeeMoreClick }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap gap-x-[16px] gap-y-[8px] items-center relative w-full">
      {/* Dots Icon */}
      <div className="h-[13px] relative shrink-0 w-[47px]">
        <svg className="block size-full" fill="none" viewBox="0 0 47 13">
          <g>
            <path d={svgPaths.pb2ee580} fill="#FEDC61" />
            <path d={svgPaths.p3b10bb00} fill="#00DCE6" />
            <path d={svgPaths.p28ad7e80} fill="#FF5872" />
          </g>
        </svg>
      </div>
      
      {/* Title - full width on mobile to force see more to next line */}
      <h2 className="font-['Inter:Black',sans-serif] font-black leading-[1.2] not-italic text-[#222] text-[24px] min-[834px]:text-[32px] min-[1376px]:text-[38px] uppercase basis-full min-[834px]:basis-auto">
        {title}
      </h2>
      
      {/* See More - on desktop, pushed to right with ml-auto */}
      {showSeeMore && (
        <button 
          onClick={onSeeMoreClick}
          className="flex gap-[8px] items-center hover:opacity-80 transition-opacity min-[834px]:ml-auto"
        >
          <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic text-[#fe3b84] text-[14px] uppercase">
            see more
          </p>
          <div className="h-[8.712px] relative shrink-0 w-[7.552px]">
            <svg className="block size-full" fill="none" viewBox="0 0 7.55235 8.71155">
              <path d={svgPaths.p37cc9000} fill="#FE3B84" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}