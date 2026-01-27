function ExpansionIndicator() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Expansion Indicator">
      <div className="absolute bg-[#222] h-[20px] left-[8px] top-[calc(50%-0.36px)] translate-y-[-50%] w-[4px]" />
      <div className="absolute flex h-[4px] items-center justify-center left-0 top-[7.64px] w-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <div className="bg-[#222] h-[20px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="bg-[#f4f4f4] h-[80px] max-w-[1143px] relative shrink-0 w-full" data-name="Accordion Item 1">
      <div className="flex flex-row items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[40px] py-[10px] relative size-full">
          <ol className="block css-s0k6d3 flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[18px]" start="1">
            <li className="css-4hzbpn ms-[27px]">
              <span className="leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
            </li>
          </ol>
          <ExpansionIndicator />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AccordionSet() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1143px] relative shrink-0 w-full" data-name="Accordion Set">
      <AccordionItem />
    </div>
  );
}

function ExpansionIndicator1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Expansion Indicator">
      <div className="absolute bg-[#222] h-[20px] left-[8px] top-[calc(50%-0.36px)] translate-y-[-50%] w-[4px]" />
      <div className="absolute flex h-[4px] items-center justify-center left-0 top-[7.64px] w-[20px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <div className="bg-[#222] h-[20px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="bg-[#f4f4f4] h-[80px] max-w-[1143px] relative shrink-0 w-full" data-name="Accordion Item 2">
      <div className="flex flex-row items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[40px] py-[10px] relative size-full">
          <ol className="block css-s0k6d3 flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#222] text-[18px]" start="2">
            <li className="css-4hzbpn ms-[27px]">
              <span className="leading-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span>
            </li>
          </ol>
          <ExpansionIndicator1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d3d3d3] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AccordionSet1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1143px] relative shrink-0 w-full" data-name="Accordion Set">
      <AccordionItem1 />
    </div>
  );
}

function Accordion() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
      <AccordionSet />
      <AccordionSet1 />
    </div>
  );
}

export default function AccordionComponent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start justify-center relative size-full" data-name="Accordion Component">
      <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative shrink-0 text-[#222] text-[28px]">FAQ</p>
      <Accordion />
    </div>
  );
}