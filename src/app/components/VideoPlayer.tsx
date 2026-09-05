import { useState, useRef, useEffect } from "react";
import svgPaths from "@/imports/svg-pntqmk93v8";
import imgSherriVideoHero01 from "figma:asset/95e7e68ab2a7ae72fa74ed343603d72a884ec07e.png";
import imgSherriVideoHero11 from "figma:asset/8e5afd825e1d9b76c5381dda48e9a5db0a5036c0.png";
import imgSherriVideoHero21 from "figma:asset/079411edfc2f9fe7e3f757241228f4d38dca6722.png";
import imgSherriVideoHero31 from "figma:asset/a169325861e396654fac824f407555a0cb3bd6d4.png";

interface VideoPlayerProps {
  videos?: {
    id: number;
    thumbnail: string;
    mainImage: string;
    title?: string;
  }[];
}

const defaultVideos = [
  {
    id: 1,
    thumbnail: imgSherriVideoHero01,
    mainImage: imgSherriVideoHero01,
    title: "Episode 1",
  },
  {
    id: 2,
    thumbnail: imgSherriVideoHero11,
    mainImage: imgSherriVideoHero11,
    title: "Episode 2",
  },
  {
    id: 3,
    thumbnail: imgSherriVideoHero21,
    mainImage: imgSherriVideoHero21,
    title: "Episode 3",
  },
  {
    id: 4,
    thumbnail: imgSherriVideoHero31,
    mainImage: imgSherriVideoHero31,
    title: "Episode 4",
  },
];

export function VideoPlayer({ videos = defaultVideos }: VideoPlayerProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [scrollThumbTop, setScrollThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ scrollTop: 0, clientY: 0 });

  const THUMB_HEIGHT = 160; // Match thumbnail height
  const CONTAINER_HEIGHT = 480;
  const CONTENT_HEIGHT = videos.length * 160;
  const MAX_SCROLL = CONTENT_HEIGHT - CONTAINER_HEIGHT;
  const MAX_THUMB_TOP = CONTAINER_HEIGHT - THUMB_HEIGHT;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollPercentage = scrollTop / MAX_SCROLL;
      const thumbTop = scrollPercentage * MAX_THUMB_TOP;
      setScrollThumbTop(Math.max(0, Math.min(thumbTop, MAX_THUMB_TOP)));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [MAX_SCROLL, MAX_THUMB_TOP]);

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      scrollTop: scrollContainerRef.current?.scrollTop || 0,
      clientY: e.clientY,
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const deltaY = e.clientY - dragStartRef.current.clientY;
      const scrollDelta = (deltaY / MAX_THUMB_TOP) * MAX_SCROLL;
      container.scrollTop = dragStartRef.current.scrollTop + scrollDelta;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, MAX_THUMB_TOP, MAX_SCROLL]);

  return (
    <div className="flex flex-col lg:flex-row gap-0 w-full max-w-full overflow-hidden rounded-lg">
      {/* Main Video Display */}
      <div className="flex-1 relative bg-[#fe3b84] aspect-video lg:aspect-auto lg:h-[480px] w-full">
        <img
          alt={videos[activeVideoIndex].title || `Video ${activeVideoIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[activeVideoIndex].mainImage}
        />
      </div>

      {/* Video Thumbnails - Horizontal scroll on mobile, vertical on desktop */}
      <div className="relative bg-[#032a36]">
        {/* Desktop: Vertical scroll with custom scrollbar */}
        <div className="hidden lg:block lg:relative lg:h-[480px] lg:w-[285px]">
          <div 
            ref={scrollContainerRef}
            className="h-full w-full overflow-y-auto scrollbar-hide flex flex-col"
          >
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setActiveVideoIndex(index)}
                className={`relative h-[160px] w-full flex-shrink-0 overflow-hidden transition-opacity ${
                  activeVideoIndex === index ? "opacity-100" : "opacity-70 hover:opacity-90"
                }`}
              >
                <img
                  alt={video.title || `Thumbnail ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={video.thumbnail}
                />
              </button>
            ))}
          </div>
          
          {/* Custom scrollbar track and thumb */}
          <div className="absolute right-0 top-0 w-[6px] h-full bg-[#032a36]">
            <div
              className={`absolute right-0 w-full bg-[#ffd755] cursor-pointer transition-colors ${
                isDragging ? "bg-[#ffdd66]" : "hover:bg-[#ffdd66]"
              }`}
              style={{
                height: `${THUMB_HEIGHT}px`,
                top: `${scrollThumbTop}px`,
              }}
              onMouseDown={handleThumbMouseDown}
            />
          </div>
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="flex lg:hidden overflow-x-auto scrollbar-hide gap-2 p-2">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setActiveVideoIndex(index)}
              className={`relative h-[100px] w-[160px] flex-shrink-0 overflow-hidden rounded transition-opacity ${
                activeVideoIndex === index ? "opacity-100 ring-2 ring-[#ffd755]" : "opacity-70 hover:opacity-90"
              }`}
            >
              <img
                alt={video.title || `Thumbnail ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                src={video.thumbnail}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}