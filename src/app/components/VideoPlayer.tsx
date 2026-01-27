import { useState } from "react";
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
        {/* Desktop: Vertical scroll */}
        <div className="hidden lg:flex lg:flex-col lg:h-[480px] lg:w-[285px] lg:overflow-y-auto scrollbar-hide">
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
              {/* Active indicator */}
              {activeVideoIndex === index && (
                <div className="absolute right-0 top-0 bottom-0 w-[6px] bg-[#ffd755]" />
              )}
            </button>
          ))}
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