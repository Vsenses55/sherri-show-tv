import { ComingUpCard } from "./ComingUpCard";

interface ComingUpItem {
  imageUrl: string;
  date: string;
  guestName: string;
}

interface ComingUpModuleProps {
  items: ComingUpItem[];
  adImageUrl?: string;
}

export function ComingUpModule({ items, adImageUrl }: ComingUpModuleProps) {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col gap-[41px] items-center max-w-[349px] pb-[34px] pt-[40px] px-[24px] relative rounded-[8px] shrink-0 w-[349px]">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.15)]" />
      
      <p className="font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative shrink-0 text-[#222] text-[28px] text-center uppercase">
        Coming Up...
      </p>
      
      {items.map((item, index) => (
        <div key={index}>
          <ComingUpCard
            imageUrl={item.imageUrl}
            date={item.date}
            guestName={item.guestName}
          />
          
          {/* Insert ad after first item if provided */}
          {index === 0 && adImageUrl && (
            <div className="mt-[41px] mb-[41px]">
              <div className="h-[250px] relative w-[300px] rounded-[8px] overflow-hidden">
                <img 
                  alt="Advertisement" 
                  className="absolute left-0 max-w-none size-full top-0 object-cover" 
                  src={adImageUrl} 
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
