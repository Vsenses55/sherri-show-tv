export default function Ticker() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex items-center justify-end relative rounded-[4px] size-full" data-name="Ticker">
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Black',sans-serif] font-black justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#646464] text-[14px] text-center uppercase">
        <p className="leading-[16px] whitespace-pre-wrap">SCROLLER FOR IMPORTANT ANNOUNCEMENTS.....</p>
      </div>
    </div>
  );
}