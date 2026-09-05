interface ComingUpCardProps {
  imageUrl: string;
  date: string;
  guestName: string;
  onClick?: () => void;
}

export function ComingUpCard({ imageUrl, date, guestName, onClick }: ComingUpCardProps) {
  return (
    <div 
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px] cursor-pointer group"
      onClick={onClick}
    >
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="h-[169px] relative shrink-0 w-[300px] rounded-[8px] overflow-hidden">
          <img 
            alt={guestName} 
            className="absolute block max-w-none size-full object-cover transition-transform group-hover:scale-105" 
            src={imageUrl} 
          />
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Inter:Black',sans-serif] font-black gap-[8px] items-start not-italic relative shrink-0 text-[#222] uppercase">
        <p className="leading-[16px] relative shrink-0 text-[14px]">{date}</p>
        <p className="leading-[22px] relative shrink-0 text-[18px] w-[177px] whitespace-pre-wrap">{guestName}</p>
      </div>
    </div>
  );
}
