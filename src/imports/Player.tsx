import svgPaths from "./svg-pntqmk93v8";
import imgSherriVideoHero01 from "figma:asset/95e7e68ab2a7ae72fa74ed343603d72a884ec07e.png";
import imgVideoPreview1 from "figma:asset/61aad14b398e54a8b32f8bbd79e317dadf4a920d.png";
import imgVideoPreview2 from "figma:asset/b5125208c8eddd4348bc4e41b5d6d8a77f6d4fef.png";
import imgVideoPreview3 from "figma:asset/aa0b4225dc5a9aad3ddbeb887031aef5273cdef0.png";

function Video() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-center relative shrink-0 w-full" data-name="Video">
      <div className="h-[480px] relative shrink-0 w-[854px]" data-name="sherri-video-hero-0 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSherriVideoHero01} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start min-h-[480px] min-w-[854px] relative shrink-0 w-[854px]">
      <Video />
    </div>
  );
}

function VideoPreview() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-end max-h-[160.10104370117188px] max-w-[285.17999267578125px] p-[20px] relative shrink-0 w-[285px]" data-name="video-preview-1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#032a36] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview1} />
        </div>
      </div>
    </div>
  );
}

function VideoPreview1() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-end max-h-[160.10104370117188px] max-w-[285.17999267578125px] p-[20px] relative shrink-0 w-[285px]" data-name="video-preview-2">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#032a36] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview2} />
        </div>
      </div>
    </div>
  );
}

function VideoPreview2() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-end max-h-[160.10104370117188px] max-w-[285.17999267578125px] p-[20px] relative shrink-0 w-[285px]" data-name="video-preview-3">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#032a36] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgVideoPreview3} />
        </div>
      </div>
    </div>
  );
}

function VideoThumbnails() {
  return (
    <div className="content-stretch flex flex-col h-[480px] items-start relative shrink-0 w-[285.18px]" data-name="Video Thumbnails">
      <VideoPreview />
      <VideoPreview1 />
      <VideoPreview2 />
      <div className="absolute inset-[1.25%_2.35%_86.01%_95.3%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.70325 61.1273">
          <path d={svgPaths.p487e380} fill="var(--fill-0, #FEDC61)" id="Rectangle 1200" />
        </svg>
      </div>
    </div>
  );
}

export default function Player() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] size-full" data-name="Player">
      <Frame />
      <VideoThumbnails />
    </div>
  );
}