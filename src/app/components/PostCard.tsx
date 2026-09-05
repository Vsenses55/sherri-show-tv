interface PostCardProps {
  imageUrl: string;
  category: string;
  title: string;
  size?: "large" | "regular";
  onClick?: () => void;
}

export function PostCard({ imageUrl, category, title, size = "regular", onClick }: PostCardProps) {
  if (size === "large") {
    return (
      <div 
        className="content-stretch flex flex-col gap-[24px] items-start min-w-[364px] overflow-clip relative shrink-0 w-full cursor-pointer group"
        onClick={onClick}
      >
        <div className="bg-black content-stretch flex h-[423px] items-start justify-center min-w-[364px] overflow-clip relative rounded-[8px] shrink-0 w-full">
          <img 
            alt={title} 
            className="h-[423px] w-full object-cover transition-transform group-hover:scale-105" 
            src={imageUrl} 
          />
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[550px] relative shrink-0 w-full">
          <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#222] text-[14px] uppercase w-full whitespace-pre-wrap">
            {category}
          </p>
          <p className="font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative text-[#222] text-[28px] uppercase whitespace-pre-wrap">
            {title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[364px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="h-[205px] relative shrink-0 w-[364px] rounded-[8px] overflow-hidden">
          <img 
            alt={title} 
            className="absolute block max-w-none size-full object-cover transition-transform group-hover:scale-105" 
            src={imageUrl} 
          />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#222] text-[14px] uppercase w-[267px] whitespace-pre-wrap">
          {category}
        </p>
        <p className="font-['Inter:Black',sans-serif] font-black leading-[22px] not-italic relative shrink-0 text-[#222] text-[18px] uppercase w-[267px] whitespace-pre-wrap">
          {title}
        </p>
      </div>
    </div>
  );
}
