import { SectionHeader } from "./SectionHeader";
import imgSherriPostLarge from "figma:asset/df29e7a17e5c07202e1d6419bfaea39bf89d27a1.png";
import imgPostRegular1 from "figma:asset/0fa48db5338c0a5bd8e6b92c02d5103274f9424e.png";
import imgPostRegular2 from "figma:asset/330c342d54556bdd624cc5714974241c99b08887.png";
import imgPostRegular3 from "figma:asset/13b9b966dae5abea4b479820557764ba1fac97d4.png";
import imgAdPlaceholder from "figma:asset/23a5fd6b78147c67649898644dbee84fb30eba70.png";

interface MomentCardProps {
  image: string;
  category: string;
  title: string;
}

function MomentCard({ image, category, title }: MomentCardProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="w-full aspect-[364/205] overflow-hidden rounded-[8px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="font-['Inter:Black',sans-serif] font-black text-[14px] leading-[16px] text-[#222]">
          {category}
        </p>
        <p className="font-['Inter:Black',sans-serif] font-black text-[18px] leading-[22px] text-[#222] uppercase">
          {title}
        </p>
      </div>
    </div>
  );
}

export function SherriMoments() {
  return (
    <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px] bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-[48px]">
        {/* Header */}
        <SectionHeader title="SHERRI MOMENTS" />

        {/* Main Content with Ad */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px] lg:gap-[32px]">
          {/* Large Feature Post - spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-[16px]">
            <div className="w-full h-[423px] overflow-hidden rounded-[8px] bg-black">
              <img src={imgSherriPostLarge} alt="Featured Sherri Moment" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-[16px] max-w-[500px]">
              <p className="font-['Inter:Black',sans-serif] font-black text-[14px] leading-[16px] text-[#222]">
                CATEGORY TITLE
              </p>
              <p className="font-['Inter:Black',sans-serif] font-black text-[28px] leading-[30px] text-[#222] uppercase">
                SHOW EPISODE TITLE WITH EXTRA LONG SHOW TITLE
              </p>
            </div>
          </div>

          {/* Ad Placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[300px] h-[250px] overflow-hidden">
              <img src={imgAdPlaceholder} alt="Advertisement" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Three Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[48px] lg:gap-[32px]">
          <MomentCard
            image={imgPostRegular1}
            category="CATEGORY TITLE"
            title="A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          />
          <MomentCard
            image={imgPostRegular2}
            category="CATEGORY TITLE"
            title="A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          />
          <MomentCard
            image={imgPostRegular3}
            category="CATEGORY TITLE"
            title="A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          />
        </div>
      </div>
    </section>
  );
}