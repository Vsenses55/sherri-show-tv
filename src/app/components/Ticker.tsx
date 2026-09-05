import { useEffect, useRef } from "react";

interface TickerProps {
  text?: string;
  items?: string[];
  speed?: number; // pixels per second
  separator?: string;
}

export function Ticker({ 
  text, 
  items,
  speed = 50,
  separator = " • "
}: TickerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Determine what to display
  const displayText = items ? items.join(separator) : (text || "SCROLLER FOR IMPORTANT ANNOUNCEMENTS.....");

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let position = 0;
    let animationFrameId: number;

    const animate = () => {
      position -= speed / 60; // 60fps
      scrollElement.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div className="bg-[#f4f4f4] content-stretch flex items-center justify-end relative rounded-[4px] w-[364px] min-[834px]:w-[370px] min-[1376px]:w-[442px] h-[28px] overflow-hidden mx-auto">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative w-full h-full overflow-hidden flex items-center">
        <div 
          ref={scrollRef}
          className="flex whitespace-nowrap h-full items-center font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic text-[#646464] text-[14px] uppercase px-4"
        >
          {/* Repeat the content multiple times for seamless scrolling */}
          {Array(10).fill(displayText).map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}