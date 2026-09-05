function ExpansionIndicator() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Expansion Indicator">
      <div className="-translate-y-1/2 absolute bg-[#222] h-[20px] left-[8px] top-[calc(50%-0.36px)] w-[4px]" />
      <div className="absolute flex h-[4px] items-center justify-center left-0 top-[7.64px] w-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#222] h-[20px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}

export default function AccordionItem() {
  return (
    <div className="bg-[#f4f4f4] relative size-full" data-name="Accordion Item 1">
      <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[40px] py-[10px] relative size-full">
        <ol className="block css-8097nc flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[18px]" start="1">
          <li className="ms-[27px] whitespace-pre-wrap">
            <span className="leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
          </li>
        </ol>
        <ExpansionIndicator />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none" />
    </div>
  );
}