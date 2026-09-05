import { useState } from "react";
import svgPaths from "../../imports/svg-66vp0hrtct";

export function StayConnected() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", { name, email, agreedToTerms });
  };

  return (
    <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="rounded-[8px] py-[40px] sm:py-[60px] px-[24px] sm:px-[40px] lg:px-[60px]"
          style={{ backgroundImage: "linear-gradient(110.13deg, rgb(67, 187, 207) 0.79919%, rgb(31, 155, 193) 101.97%)" }}
        >
          <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center justify-center max-w-[900px] mx-auto">
            {/* Logo */}
            <div className="w-[200px] sm:w-[250px] lg:w-[300px] aspect-[300/298] shrink-0">
              <svg className="block size-full" fill="none" viewBox="0 0 300 298">
                <g>
                  <path d={svgPaths.p313b0400} fill="white" />
                  <path d={svgPaths.p21ec3300} fill="white" />
                </g>
              </svg>
            </div>

            {/* Form Content */}
            <div className="flex flex-col gap-[32px] w-full max-w-[403px]">
              {/* Text */}
              <div className="flex flex-col gap-[16px] text-white">
                <h2 className="font-['Inter:Black',sans-serif] font-black leading-[40px] not-italic text-[32px] sm:text-[38px] uppercase">
                  STAY CONNECTED
                </h2>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px]">
                  Sign up for our official newsletter and receive updates about Sherri's Hot Flash Summer!
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-[32px]">
                {/* Form Fields */}
                <div className="flex flex-col gap-[8px]">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#f4f4f4] h-[50px] rounded-[4px] px-[20px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#222] placeholder:text-[#7a7a7a] outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#f4f4f4] h-[50px] rounded-[4px] px-[20px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#222] placeholder:text-[#7a7a7a] outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                {/* TOS Checkbox */}
                <div className="flex gap-[10px] items-center">
                  <button
                    type="button"
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                    className="bg-[#1f9bc1] rounded-[4px] size-[20px] shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Agree to terms and conditions"
                  >
                    {agreedToTerms && (
                      <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                        <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13px] not-italic text-[10px] text-white">
                    By using this site, you agree to the Terms & Conditions
                  </p>
                </div>

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className="bg-[#43bbcf] rounded-[4px] px-[44px] py-[17px] hover:bg-[#3aa9bd] transition-colors"
                >
                  <span className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic text-[#1f9bc1] text-[14px] uppercase">
                    SUBSCRIBE
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
