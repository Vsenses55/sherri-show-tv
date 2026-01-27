import imgLogoSherriUnderline from "figma:asset/e42e7f2fabc0eb592d40536f5f93ea8f625eddad.png";
import imgColorPreview from "figma:asset/7b15a01fe58a974012d32aed38cfde307fc0908a.png";

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Logo">
      <div className="h-[106px] relative shrink-0 w-[107px]" data-name="logo-sherri-underline">
        <img alt="" className="block max-w-none size-full" height="106" src={imgLogoSherriUnderline} width="107" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Logo />
      <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic relative shrink-0 text-[38px] text-white uppercase">Colors</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#032a36] relative rounded-[8px] shrink-0 w-full" data-name="Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[96px] py-[48px] relative w-full">
          <Frame />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-b border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Typescale() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Typescale">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Header />
      </div>
      <div aria-hidden="true" className="absolute border border-[#032a36] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ColorPreview() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffd8e6] h-[180px] shrink-0 w-[183px]" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-black text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffd8e6</p>
      <p className="css-ew64yg relative shrink-0">hsl(338, 100, 92)</p>
    </div>
  );
}

function ColorCodeBlockMode() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors />
    </div>
  );
}

function Primary2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/100">
      <ColorPreview />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/100</p>
      <ColorCodeBlockMode />
    </div>
  );
}

function ColorPreview1() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffb1ce] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#661835] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffb1ce</p>
      <p className="css-ew64yg relative shrink-0">hsl(338, 100, 85)</p>
    </div>
  );
}

function ColorCodeBlockMode1() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors1 />
    </div>
  );
}

function Primary3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/200">
      <ColorPreview1 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/200</p>
      <ColorCodeBlockMode1 />
    </div>
  );
}

function ColorPreview2() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe89b5] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#661835] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe89b5</p>
      <p className="css-ew64yg relative shrink-0">hsl(337, 98, 77)</p>
    </div>
  );
}

function ColorCodeBlockMode2() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors2 />
    </div>
  );
}

function Primary4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/300">
      <ColorPreview2 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/300</p>
      <ColorCodeBlockMode2 />
    </div>
  );
}

function ColorPreview3() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe629d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#661835] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe629d</p>
      <p className="css-ew64yg relative shrink-0">hsl(337, 99, 69)</p>
    </div>
  );
}

function ColorCodeBlockMode3() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors3 />
    </div>
  );
}

function Primary5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/400">
      <ColorPreview3 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/400</p>
      <ColorCodeBlockMode3 />
    </div>
  );
}

function ColorPreview4() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe3b84] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-14px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe3b84</p>
      <p className="css-ew64yg relative shrink-0">hsl(338, 99, 61)</p>
    </div>
  );
}

function ColorCodeBlockMode4() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors4 />
    </div>
  );
}

function Primary6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/500">
      <ColorPreview4 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/500</p>
      <ColorCodeBlockMode4 />
    </div>
  );
}

function ColorPreview5() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#cb2f6a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-27px)] not-italic text-[24px] text-white top-[calc(50%-14px)]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#cb2f6a</p>
      <p className="css-ew64yg relative shrink-0">hsl(337, 62, 49)</p>
    </div>
  );
}

function ColorCodeBlockMode5() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors5 />
    </div>
  );
}

function Primary7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/600">
      <ColorPreview5 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/600</p>
      <ColorCodeBlockMode5 />
    </div>
  );
}

function ColorPreview6() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#98234f] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-27px)] not-italic text-[#ffd8e6] text-[24px] top-[calc(50%-14px)]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#98234f</p>
      <p className="css-ew64yg relative shrink-0">hsl(337, 63, 37)</p>
    </div>
  );
}

function ColorCodeBlockMode6() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors6 />
    </div>
  );
}

function Primary8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/700">
      <ColorPreview6 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/700</p>
      <ColorCodeBlockMode6 />
    </div>
  );
}

function ColorPreview7() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#661835] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-27px)] not-italic text-[#ffd8e6] text-[24px] top-[calc(50%-14px)]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#661835</p>
      <p className="css-ew64yg relative shrink-0">hsl(338, 62, 25)</p>
    </div>
  );
}

function ColorCodeBlockMode7() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors7 />
    </div>
  );
}

function Primary9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/800">
      <ColorPreview7 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/800</p>
      <ColorCodeBlockMode7 />
    </div>
  );
}

function ColorPreview8() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#330c1a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-27px)] not-italic text-[24px] text-white top-[calc(50%-14px)]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#330c1a</p>
      <p className="css-ew64yg relative shrink-0">hsl(338, 62, 12)</p>
    </div>
  );
}

function ColorCodeBlockMode8() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors8 />
    </div>
  );
}

function Primary10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="primary/900">
      <ColorPreview8 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">primary/900</p>
      <ColorCodeBlockMode8 />
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="primary">
      <Primary2 />
      <Primary3 />
      <Primary4 />
      <Primary5 />
      <Primary6 />
      <Primary7 />
      <Primary8 />
      <Primary9 />
      <Primary10 />
    </div>
  );
}

function Primary1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="primary">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">primary</p>
      <Primary />
    </div>
  );
}

function ColorPreview9() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#d9f1f5] flex-[1_0_0] h-[100px] min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1b4b53] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#d9f1f5</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 58, 91)</p>
    </div>
  );
}

function ColorCodeBlockMode9() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors9 />
    </div>
  );
}

function Secondary2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/100">
      <ColorPreview9 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/100</p>
      <ColorCodeBlockMode9 />
    </div>
  );
}

function ColorPreview10() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#b4e4ec] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1b4b53] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#b4e4ec</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 60, 82)</p>
    </div>
  );
}

function ColorCodeBlockMode10() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors10 />
    </div>
  );
}

function Secondary3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/200">
      <ColorPreview10 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/200</p>
      <ColorCodeBlockMode10 />
    </div>
  );
}

function ColorPreview11() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#8ed6e2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1b4b53] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#8ed6e2</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 59, 72)</p>
    </div>
  );
}

function ColorCodeBlockMode11() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors11 />
    </div>
  );
}

function Secondary4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/300">
      <ColorPreview11 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/300</p>
      <ColorCodeBlockMode11 />
    </div>
  );
}

function ColorPreview12() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#69c9d9] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#1b4b53] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#69c9d9</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 60, 63)</p>
    </div>
  );
}

function ColorCodeBlockMode12() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors12 />
    </div>
  );
}

function Secondary5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/400">
      <ColorPreview12 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/400</p>
      <ColorCodeBlockMode12 />
    </div>
  );
}

function ColorPreview13() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#43bbcf] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#0d2529] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#43bbcf</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 59, 54)</p>
    </div>
  );
}

function ColorCodeBlockMode13() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors13 />
    </div>
  );
}

function Secondary6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/500">
      <ColorPreview13 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/500</p>
      <ColorCodeBlockMode13 />
    </div>
  );
}

function ColorPreview14() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#3696a6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#3696a6</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 51, 43)</p>
    </div>
  );
}

function ColorCodeBlockMode14() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors14 />
    </div>
  );
}

function Secondary7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/600">
      <ColorPreview14 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/600</p>
      <ColorCodeBlockMode14 />
    </div>
  );
}

function ColorPreview15() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#28707c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#28707c</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 51, 32)</p>
    </div>
  );
}

function ColorCodeBlockMode15() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors15 />
    </div>
  );
}

function Secondary8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/700">
      <ColorPreview15 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/700</p>
      <ColorCodeBlockMode15 />
    </div>
  );
}

function ColorPreview16() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1b4b53] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#b4e4ec] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#1b4b53</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 51, 22)</p>
    </div>
  );
}

function ColorCodeBlockMode16() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors16 />
    </div>
  );
}

function Secondary9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/800">
      <ColorPreview16 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/800</p>
      <ColorCodeBlockMode16 />
    </div>
  );
}

function ColorPreview17() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#0d2529] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#b4e4ec] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#0d2529</p>
      <p className="css-ew64yg relative shrink-0">hsl(189, 52, 11)</p>
    </div>
  );
}

function ColorCodeBlockMode17() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors17 />
    </div>
  );
}

function Secondary10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="secondary/900">
      <ColorPreview17 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">secondary/900</p>
      <ColorCodeBlockMode17 />
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="secondary">
      <Secondary2 />
      <Secondary3 />
      <Secondary4 />
      <Secondary5 />
      <Secondary6 />
      <Secondary7 />
      <Secondary8 />
      <Secondary9 />
      <Secondary10 />
    </div>
  );
}

function Secondary1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="secondary">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">secondary</p>
      <Secondary />
    </div>
  );
}

function ColorPreview18() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fff7dd] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#665622] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fff7dd</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 100, 93)</p>
    </div>
  );
}

function ColorCodeBlockMode18() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors18 />
    </div>
  );
}

function Accent2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/100">
      <ColorPreview18 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/100</p>
      <ColorCodeBlockMode18 />
    </div>
  );
}

function ColorPreview19() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffefbb] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#665622] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffefbb</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 100, 87)</p>
    </div>
  );
}

function ColorCodeBlockMode19() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors19 />
    </div>
  );
}

function Accent3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/200">
      <ColorPreview19 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/200</p>
      <ColorCodeBlockMode19 />
    </div>
  );
}

function ColorPreview20() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffe799] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#665622] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffe799</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 100, 80)</p>
    </div>
  );
}

function ColorCodeBlockMode20() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors20 />
    </div>
  );
}

function Accent4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/300">
      <ColorPreview20 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/300</p>
      <ColorCodeBlockMode20 />
    </div>
  );
}

function ColorPreview21() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffdf77] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#665622] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffdf77</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 100, 73)</p>
    </div>
  );
}

function ColorCodeBlockMode21() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors21 />
    </div>
  );
}

function Accent5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/400">
      <ColorPreview21 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/400</p>
      <ColorCodeBlockMode21 />
    </div>
  );
}

function ColorPreview22() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffd755] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#665622] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffd755</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 100, 67)</p>
    </div>
  );
}

function ColorCodeBlockMode22() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors22 />
    </div>
  );
}

function Accent6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/500">
      <ColorPreview22 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/500</p>
      <ColorCodeBlockMode22 />
    </div>
  );
}

function ColorPreview23() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ccac44] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#332b11] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ccac44</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 57, 53)</p>
    </div>
  );
}

function ColorCodeBlockMode23() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors23 />
    </div>
  );
}

function Accent7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/600">
      <ColorPreview23 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/600</p>
      <ColorCodeBlockMode23 />
    </div>
  );
}

function ColorPreview24() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#998133] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#998133</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 50, 40)</p>
    </div>
  );
}

function ColorCodeBlockMode24() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors24 />
    </div>
  );
}

function Accent8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/700">
      <ColorPreview24 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/700</p>
      <ColorCodeBlockMode24 />
    </div>
  );
}

function ColorPreview25() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#665622] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#665622</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 50, 27)</p>
    </div>
  );
}

function ColorCodeBlockMode25() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors25 />
    </div>
  );
}

function Accent9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/800">
      <ColorPreview25 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/800</p>
      <ColorCodeBlockMode25 />
    </div>
  );
}

function ColorPreview26() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#332b11] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#ffe799] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#332b11</p>
      <p className="css-ew64yg relative shrink-0">hsl(46, 50, 13)</p>
    </div>
  );
}

function ColorCodeBlockMode26() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors26 />
    </div>
  );
}

function Accent10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="accent/900">
      <ColorPreview26 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">accent/900</p>
      <ColorCodeBlockMode26 />
    </div>
  );
}

function Accent() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="accent">
      <Accent2 />
      <Accent3 />
      <Accent4 />
      <Accent5 />
      <Accent6 />
      <Accent7 />
      <Accent8 />
      <Accent9 />
      <Accent10 />
    </div>
  );
}

function Accent1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="accent">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">accent</p>
      <Accent />
    </div>
  );
}

function ColorPreview27() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffd8d8] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#661819] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffd8d8</p>
      <p className="css-ew64yg relative shrink-0">hsl(0, 100, 92)</p>
    </div>
  );
}

function ColorCodeBlockMode27() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors27 />
    </div>
  );
}

function Danger2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/100">
      <ColorPreview27 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/100</p>
      <ColorCodeBlockMode27 />
    </div>
  );
}

function ColorPreview28() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffb1b2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#330c0c] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffb1b2</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 100, 85)</p>
    </div>
  );
}

function ColorCodeBlockMode28() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors28 />
    </div>
  );
}

function Danger3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/200">
      <ColorPreview28 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/200</p>
      <ColorCodeBlockMode28 />
    </div>
  );
}

function ColorPreview29() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe898b] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#330c0c] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe898b</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 98, 77)</p>
    </div>
  );
}

function ColorCodeBlockMode29() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors29 />
    </div>
  );
}

function Danger4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/300">
      <ColorPreview29 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/300</p>
      <ColorCodeBlockMode29 />
    </div>
  );
}

function ColorPreview30() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe6265] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#330c0c] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe6265</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 99, 69)</p>
    </div>
  );
}

function ColorCodeBlockMode30() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors30 />
    </div>
  );
}

function Danger5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/400">
      <ColorPreview30 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/400</p>
      <ColorCodeBlockMode30 />
    </div>
  );
}

function ColorPreview31() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fe3b3e] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fe3b3e</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 99, 61)</p>
    </div>
  );
}

function ColorCodeBlockMode31() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors31 />
    </div>
  );
}

function Danger6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/500">
      <ColorPreview31 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/500</p>
      <ColorCodeBlockMode31 />
    </div>
  );
}

function ColorPreview32() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#cb2f32] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#cb2f32</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 62, 49)</p>
    </div>
  );
}

function ColorCodeBlockMode32() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors32 />
    </div>
  );
}

function Danger7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/600">
      <ColorPreview32 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/600</p>
      <ColorCodeBlockMode32 />
    </div>
  );
}

function ColorPreview33() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#982325] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#ffd8d8] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#982325</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 63, 37)</p>
    </div>
  );
}

function ColorCodeBlockMode33() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors33 />
    </div>
  );
}

function Danger8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/700">
      <ColorPreview33 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/700</p>
      <ColorCodeBlockMode33 />
    </div>
  );
}

function ColorPreview34() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#661819] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#ffd8d8] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#661819</p>
      <p className="css-ew64yg relative shrink-0">hsl(359, 62, 25)</p>
    </div>
  );
}

function ColorCodeBlockMode34() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors34 />
    </div>
  );
}

function Danger9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/800">
      <ColorPreview34 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/800</p>
      <ColorCodeBlockMode34 />
    </div>
  );
}

function ColorPreview35() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#330c0c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#ffb1b2] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#330c0c</p>
      <p className="css-ew64yg relative shrink-0">hsl(0, 62, 12)</p>
    </div>
  );
}

function ColorCodeBlockMode35() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors35 />
    </div>
  );
}

function Danger10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="danger/900">
      <ColorPreview35 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">danger/900</p>
      <ColorCodeBlockMode35 />
    </div>
  );
}

function Danger() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="danger">
      <Danger2 />
      <Danger3 />
      <Danger4 />
      <Danger5 />
      <Danger6 />
      <Danger7 />
      <Danger8 />
      <Danger9 />
      <Danger10 />
    </div>
  );
}

function Danger1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="danger">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">danger</p>
      <Danger />
    </div>
  );
}

function ColorPreview36() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#d2ebf3] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#135d74] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#d2ebf3</p>
      <p className="css-ew64yg relative shrink-0">hsl(195, 58, 89)</p>
    </div>
  );
}

function ColorCodeBlockMode36() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors36 />
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/100">
      <ColorPreview36 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/100</p>
      <ColorCodeBlockMode36 />
    </div>
  );
}

function ColorPreview37() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#a5d7e6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#135d74] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#a5d7e6</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 57, 77)</p>
    </div>
  );
}

function ColorCodeBlockMode37() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors37 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/200">
      <ColorPreview37 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/200</p>
      <ColorCodeBlockMode37 />
    </div>
  );
}

function ColorPreview38() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#79c3da] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-1px)] not-italic text-[24px] text-black text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#79c3da</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 57, 66)</p>
    </div>
  );
}

function ColorCodeBlockMode38() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors38 />
    </div>
  );
}

function Info4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/300">
      <ColorPreview38 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/300</p>
      <ColorCodeBlockMode38 />
    </div>
  );
}

function ColorPreview39() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#4cafcd] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">A</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#4cafcd</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 56, 55)</p>
    </div>
  );
}

function ColorCodeBlockMode39() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors39 />
    </div>
  );
}

function Info5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/400">
      <ColorPreview39 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/400</p>
      <ColorCodeBlockMode39 />
    </div>
  );
}

function ColorPreview40() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#1f9bc1] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#1f9bc1</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 72, 44)</p>
    </div>
  );
}

function ColorCodeBlockMode40() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors40 />
    </div>
  );
}

function Info6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/500">
      <ColorPreview40 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/500</p>
      <ColorCodeBlockMode40 />
    </div>
  );
}

function ColorPreview41() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#197c9a] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[24px] text-center text-white top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#197c9a</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 72, 35)</p>
    </div>
  );
}

function ColorCodeBlockMode41() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors41 />
    </div>
  );
}

function Info7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/600">
      <ColorPreview41 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/600</p>
      <ColorCodeBlockMode41 />
    </div>
  );
}

function ColorPreview42() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#135d74] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d2ebf3] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#135d74</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 72, 26)</p>
    </div>
  );
}

function ColorCodeBlockMode42() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors42 />
    </div>
  );
}

function Info8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/700">
      <ColorPreview42 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/700</p>
      <ColorCodeBlockMode42 />
    </div>
  );
}

function ColorPreview43() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#0c3e4d] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d2ebf3] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#0c3e4d</p>
      <p className="css-ew64yg relative shrink-0">hsl(194, 73, 17)</p>
    </div>
  );
}

function ColorCodeBlockMode43() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors43 />
    </div>
  );
}

function Info9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/800">
      <ColorPreview43 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/800</p>
      <ColorCodeBlockMode43 />
    </div>
  );
}

function ColorPreview44() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#061f27] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d2ebf3] text-[24px] text-center top-[calc(50%-14px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#061f27</p>
      <p className="css-ew64yg relative shrink-0">hsl(195, 73, 9)</p>
    </div>
  );
}

function ColorCodeBlockMode44() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors44 />
    </div>
  );
}

function Info10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="info/900">
      <ColorPreview44 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">info/900</p>
      <ColorCodeBlockMode44 />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="info">
      <Info2 />
      <Info3 />
      <Info4 />
      <Info5 />
      <Info6 />
      <Info7 />
      <Info8 />
      <Info9 />
      <Info10 />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="info">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">info</p>
      <Info />
    </div>
  );
}

function ColorPreview45() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#d8fff2] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#0c3326] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#d8fff2</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 100, 92)</p>
    </div>
  );
}

function ColorCodeBlockMode45() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors45 />
    </div>
  );
}

function Success2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/100">
      <ColorPreview45 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/100</p>
      <ColorCodeBlockMode45 />
    </div>
  );
}

function ColorPreview46() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#b1ffe5] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#18664c] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#b1ffe5</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 100, 85)</p>
    </div>
  );
}

function ColorCodeBlockMode46() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors46 />
    </div>
  );
}

function Success3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/200">
      <ColorPreview46 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/200</p>
      <ColorCodeBlockMode46 />
    </div>
  );
}

function ColorPreview47() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#89fed7] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#18664c] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#89fed7</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 98, 77)</p>
    </div>
  );
}

function ColorCodeBlockMode47() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors47 />
    </div>
  );
}

function Success4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/300">
      <ColorPreview47 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/300</p>
      <ColorCodeBlockMode47 />
    </div>
  );
}

function ColorPreview48() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#62feca] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#0c3326] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#62feca</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 99, 69)</p>
    </div>
  );
}

function ColorCodeBlockMode48() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors48 />
    </div>
  );
}

function Success5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/400">
      <ColorPreview48 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/400</p>
      <ColorCodeBlockMode48 />
    </div>
  );
}

function ColorPreview49() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#3bfebd] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#0c3326] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#3bfebd</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 99, 61)</p>
    </div>
  );
}

function ColorCodeBlockMode49() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors49 />
    </div>
  );
}

function Success6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/500">
      <ColorPreview49 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/500</p>
      <ColorCodeBlockMode49 />
    </div>
  );
}

function ColorPreview50() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#2fcb97] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#0c3326] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#2fcb97</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 62, 49)</p>
    </div>
  );
}

function ColorCodeBlockMode50() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors50 />
    </div>
  );
}

function Success7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/600">
      <ColorPreview50 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/600</p>
      <ColorCodeBlockMode50 />
    </div>
  );
}

function ColorPreview51() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#239871] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#239871</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 63, 37)</p>
    </div>
  );
}

function ColorCodeBlockMode51() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors51 />
    </div>
  );
}

function Success8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/700">
      <ColorPreview51 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/700</p>
      <ColorCodeBlockMode51 />
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d8fff2] text-[24px] text-center top-[calc(50%-55.5px)] translate-x-[-50%]">AAA</p>
    </div>
  );
}

function ColorPreview52() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#18664c] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d8fff2] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#18664c</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 62, 25)</p>
    </div>
  );
}

function ColorCodeBlockMode52() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors52 />
    </div>
  );
}

function Success9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/800">
      <ColorPreview52 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/800</p>
      <ColorCodeBlockMode52 />
    </div>
  );
}

function ColorPreview53() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#0c3326] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#d8fff2] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#0c3326</p>
      <p className="css-ew64yg relative shrink-0">hsl(160, 62, 12)</p>
    </div>
  );
}

function ColorCodeBlockMode53() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors53 />
    </div>
  );
}

function Success10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="success/900">
      <ColorPreview53 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">success/900</p>
      <ColorCodeBlockMode53 />
    </div>
  );
}

function Success() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="success">
      <Success2 />
      <Success3 />
      <Success4 />
      <Success5 />
      <Success6 />
      <Success7 />
      <Success8 />
      <Success9 />
      <Success10 />
    </div>
  );
}

function Success1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="success">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">success</p>
      <Success />
    </div>
  );
}

function ColorPreview54() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#fff0dd] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#332411] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#fff0dd</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 100, 93)</p>
    </div>
  );
}

function ColorCodeBlockMode54() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors54 />
    </div>
  );
}

function Warning2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/100">
      <ColorPreview54 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/100</p>
      <ColorCodeBlockMode54 />
    </div>
  );
}

function ColorPreview55() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffe1bb] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#664822] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffe1bb</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 100, 87)</p>
    </div>
  );
}

function ColorCodeBlockMode55() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors55 />
    </div>
  );
}

function Warning3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/200">
      <ColorPreview55 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/200</p>
      <ColorCodeBlockMode55 />
    </div>
  );
}

function ColorPreview56() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffd399] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#664822] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffd399</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 100, 80)</p>
    </div>
  );
}

function ColorCodeBlockMode56() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors56 />
    </div>
  );
}

function Warning4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/300">
      <ColorPreview56 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/300</p>
      <ColorCodeBlockMode56 />
    </div>
  );
}

function ColorPreview57() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffc477] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#664822] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffc477</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 100, 73)</p>
    </div>
  );
}

function ColorCodeBlockMode57() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors57 />
    </div>
  );
}

function Warning5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/400">
      <ColorPreview57 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/400</p>
      <ColorCodeBlockMode57 />
    </div>
  );
}

function ColorPreview58() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#ffb555] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#664822] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#ffb555</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 100, 67)</p>
    </div>
  );
}

function ColorCodeBlockMode58() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors58 />
    </div>
  );
}

function Warning6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/500">
      <ColorPreview58 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/500</p>
      <ColorCodeBlockMode58 />
    </div>
  );
}

function ColorPreview59() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#cc9144] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#332411] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#cc9144</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 57, 53)</p>
    </div>
  );
}

function ColorCodeBlockMode59() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors59 />
    </div>
  );
}

function Warning7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/600">
      <ColorPreview59 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/600</p>
      <ColorCodeBlockMode59 />
    </div>
  );
}

function ColorPreview60() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#996d33] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#fff0dd] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#996d33</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 50, 40)</p>
    </div>
  );
}

function ColorCodeBlockMode60() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors60 />
    </div>
  );
}

function Warning8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/700">
      <ColorPreview60 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/700</p>
      <ColorCodeBlockMode60 />
    </div>
  );
}

function ColorPreview61() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#664822] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#fff0dd] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#664822</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 50, 27)</p>
    </div>
  );
}

function ColorCodeBlockMode61() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors61 />
    </div>
  );
}

function Warning9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/800">
      <ColorPreview61 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/800</p>
      <ColorCodeBlockMode61 />
    </div>
  );
}

function ColorPreview62() {
  return (
    <div className="bg-size-[36px_36px] bg-top-left h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="color-preview" style={{ backgroundImage: `url('${imgColorPreview}')` }}>
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#332411] flex-[1_0_0] h-full min-h-px min-w-px" data-name="color-chip-Mode 1" />
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-1/2 not-italic text-[#ffe1bb] text-[24px] text-center top-[calc(50%-15px)] translate-x-[-50%]">AAA</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ListOfColors62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-start leading-[normal] min-h-px min-w-px not-italic overflow-clip relative text-[16px] text-black" data-name="list-of-colors">
      <p className="css-ew64yg relative shrink-0">#332411</p>
      <p className="css-ew64yg relative shrink-0">hsl(34, 50, 13)</p>
    </div>
  );
}

function ColorCodeBlockMode62() {
  return (
    <div className="content-start flex flex-wrap items-start overflow-clip relative shrink-0 w-full" data-name="color-code-block-Mode 1">
      <ListOfColors62 />
    </div>
  );
}

function Warning10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[183px]" data-name="warning/900">
      <ColorPreview62 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[240px]">warning/900</p>
      <ColorCodeBlockMode62 />
    </div>
  );
}

function Warning() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-name="warning">
      <Warning2 />
      <Warning3 />
      <Warning4 />
      <Warning5 />
      <Warning6 />
      <Warning7 />
      <Warning8 />
      <Warning9 />
      <Warning10 />
    </div>
  );
}

function Warning1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="warning">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black">warning</p>
      <Warning />
    </div>
  );
}

export default function Prmitives() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[48px] items-center px-[40px] py-[48px] relative rounded-[8px] size-full" data-name="Prmitives">
      <Typescale />
      <Primary1 />
      <Secondary1 />
      <Accent1 />
      <Danger1 />
      <Info1 />
      <Success1 />
      <Warning1 />
    </div>
  );
}