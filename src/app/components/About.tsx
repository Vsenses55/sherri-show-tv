import svgPaths from "../../imports/svg-xheu8l17x3";
import imgImgAbout from "figma:asset/601c951ecacbe84c6c687b5411de1b87c6431a84.png";

export function About() {
  return (
    <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap gap-[40px] items-center justify-center">
          {/* Image */}
          <div className="flex-[1_0_0] min-w-[382px] max-w-[504px] aspect-[504/604]">
            <img 
              alt="About Sherri" 
              className="w-full h-full object-contain" 
              src={imgImgAbout} 
            />
          </div>
          
          {/* Copy */}
          <div className="flex-[1_0_0] min-w-[min(390px,100%)] max-w-[504px] flex flex-col gap-[24px]">
            {/* Dots */}
            <div className="h-[13px] w-[47px]">
              <svg className="block size-full" fill="none" viewBox="0 0 47 13">
                <g>
                  <path d={svgPaths.pb2ee580} fill="#FEDC61" />
                  <path d={svgPaths.p3b10bb00} fill="#00DCE6" />
                  <path d={svgPaths.p28ad7e80} fill="#FF5872" />
                </g>
              </svg>
            </div>
            
            {/* Title */}
            <h2 className="font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic text-[#222] text-[38px] uppercase">
              ABOUT SHERRI
            </h2>
            
            {/* Description */}
            <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#4e4e4e] text-[16px]">
              <p className="mb-[16px]">
                The Daytime Emmy Award-winning talk show host, comedienne, actor, and best-selling author Sherri Shepherd brings her inimitable, authentic and comedic perspective to daytime this fall with her own nationally-syndicated talk show, SHERRI.
              </p>
              <p>
                Sherri's warm, relatable and engaging personality will shine through as she offers her fun and flirty take on pop culture and trending topics with the daytime audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
