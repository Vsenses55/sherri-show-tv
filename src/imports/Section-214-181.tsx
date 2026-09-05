import svgPaths from "./svg-66vp0hrtct";

function FormFieldsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f4f4f4] h-[50px] relative rounded-[4px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[20px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Section">
      <div className="content-center flex flex-wrap gap-y-[60px] items-center justify-center max-w-[1143px] overflow-clip py-[80px] relative rounded-[8px] shrink-0 w-[1143px]" data-name="Container" style={{ backgroundImage: "linear-gradient(110.13deg, rgb(67, 187, 207) 0.79919%, rgb(31, 155, 193) 101.97%)" }}>
        <div className="content-center flex flex-wrap gap-y-[36px] items-center justify-between relative shrink-0 w-[792px]" data-name="Content">
          <div className="h-[298px] relative shrink-0 w-[300px]" data-name="Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 298">
              <g id="Logo">
                <g id="Vector">
                  <path d={svgPaths.p313b0400} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p21ec3300} fill="var(--fill-0, white)" />
                </g>
              </g>
            </svg>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start justify-center max-w-[403px] relative shrink-0 w-[792px]" data-name="Form Content">
            <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-white w-full whitespace-pre-wrap" data-name="Text">
              <p className="font-['Inter:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[38px] uppercase w-[323px]">STAY CONNECTED</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] w-[323px]">Sign up for our official newsletter and receive updates about Sherri’s Hot Flash Summer!</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Fields">
              <FormFieldsBackgroundImage>
                <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Label and Input Text">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#7a7a7a] text-[16px]">Name</p>
                </div>
              </FormFieldsBackgroundImage>
              <FormFieldsBackgroundImage>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#7a7a7a] text-[16px]">Email Address</p>
              </FormFieldsBackgroundImage>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="TOS">
              <div className="bg-[#1f9bc1] overflow-clip rounded-[4px] shrink-0 size-[20px]" data-name="Opt In Button" />
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13px] not-italic relative shrink-0 text-[10px] text-white w-[373px] whitespace-pre-wrap">{`By using this site, you agree to the Terms & Conditions`}</p>
            </div>
            <div className="bg-[#43bbcf] relative rounded-[4px] shrink-0" data-name="Button White">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[44px] py-[17px] relative">
                  <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#1f9bc1] text-[14px] uppercase">SUBSCRIBE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}