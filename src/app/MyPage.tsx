import { Accordion } from "./components/Accordion";
import { Card } from "./components/Card";
import { Listings } from "./components/Listings";
import { VideoPlayer } from "./components/VideoPlayer";
import { NavigationBar } from "./components/NavigationBar";
import { EventCalendar } from "./components/EventCalendar";
import { Ticker } from "./components/Ticker";
import { Footer } from "./components/Footer";
import { ContentSection } from "./components/ContentSection";
import { About } from "./components/About";
import { StayConnected } from "./components/StayConnected";
import { SherriMoments } from "./components/SherriMoments";
import { Link } from "react-router";
import imgSherriBanner728X901 from "figma:asset/b814c09559e840f08c23af5fd54c2a70380c4b63.png";
import imgSherriPostLarge1 from "figma:asset/81b47cc877e50c72a0bb2a57f6eb6c8ef74369a5.png";
import imgPostRegular1 from "figma:asset/7fd93c2674a65b0adcdca78e4423dad3d1653e2d.png";
import imgPostRegular2 from "figma:asset/863fc5cd7ac11ce51e27ea7e8f37ab8ebe65bc6b.png";
import imgPostRegular3 from "figma:asset/9dcfe973d3436a944465d07037afbf6f8c1ec2b1.png";
import imgPostRegular4 from "figma:asset/213d6e5533edce0fc51d22b6aac8fd1116eec71a.png";
import imgPostRegular5 from "figma:asset/0bc3bf1b7cd1039cdc5e2e15d21dc2d4fce82d28.png";
import imgPostRegular6 from "figma:asset/e4d9c6915fc68d869c8647eee2d55f3b2a003cbe.png";
import imgPostComingUp1 from "figma:asset/bbe0e79b3dbcde9644d71129ba1e5369c325421e.png";
import imgImage7 from "figma:asset/ad80e4c0437926baeb2a05dfec3bf8c0a6f71ae9.png";
import imgPostComingUp2 from "figma:asset/66dd6fd0603b8a1de62a35c6079f45f53512ef9b.png";
import imgPostComingUp3 from "figma:asset/ac18b1e73f3db2839a43d6781649ab5f7b2f5a2f.png";

export default function MyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavigationBar />

      {/* Ticker */}
      <div className="pt-[24px] min-[834px]:pt-[32px] min-[1376px]:pt-[40px] pb-[40px]">
        <Ticker 
          items={[
            "Upcoming guest: Oprah Winfrey",
            "Special giveaway this Friday",
            "New episodes every weekday at 2pm"
          ]}
          speed={50}
        />
      </div>

      {/* Banner */}
      <div className="flex justify-center pb-[40px]">
        <div className="w-[364px] min-[834px]:w-[728px] min-[1376px]:w-[970px]">
          <img
            alt="Promo Codes Available"
            className="w-full h-auto"
            src={imgSherriBanner728X901}
          />
        </div>
      </div>

      {/* Video Player Section */}
      <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[24px] sm:text-[36px] text-[#222] mb-[30px] uppercase">
            Latest Episode
          </h2>
          <VideoPlayer />
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <ContentSection
        title="THE SHERRI SHOW"
        featuredPost={{
          imageUrl: imgSherriPostLarge1,
          category: "CATEGORY TITLE",
          title: "The show episode title with an extra long headline"
        }}
        posts={[
          {
            imageUrl: imgPostRegular1,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          },
          {
            imageUrl: imgPostRegular2,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          },
          {
            imageUrl: imgPostRegular3,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          },
          {
            imageUrl: imgPostRegular4,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          },
          {
            imageUrl: imgPostRegular5,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          },
          {
            imageUrl: imgPostRegular6,
            category: "CATEGORY TITLE",
            title: "A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
          }
        ]}
        comingUpItems={[
          {
            imageUrl: imgPostComingUp1,
            date: "MON, SEPTEMBER 10",
            guestName: "NAME OF GUEST"
          },
          {
            imageUrl: imgPostComingUp2,
            date: "MON, SEPTEMBER 10",
            guestName: "NAME OF GUEST"
          },
          {
            imageUrl: imgPostComingUp3,
            date: "MON, SEPTEMBER 10",
            guestName: "NAME OF GUEST"
          },
          {
            imageUrl: imgPostComingUp2,
            date: "MON, SEPTEMBER 10",
            guestName: "NAME OF GUEST"
          }
        ]}
        adImageUrl={imgImage7}
      />

      {/* About Section */}
      <About />

      {/* Sherri Moments */}
      <SherriMoments />

      {/* Stay Connected */}
      <StayConnected />

      {/* Cards Section */}
      <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[24px] sm:text-[36px] text-[#222] mb-[30px] uppercase">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px]">
            <Card
              title="Behind the Scenes"
              description="Get an exclusive look at what happens behind the camera on the Sherri Show."
              imageUrl="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800"
            />
            <Card
              title="Guest Interviews"
              description="Watch our favorite celebrity interviews and memorable moments from the show."
              imageUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800"
            />
            <Card
              title="Community Stories"
              description="Inspiring stories from our viewers and communities across the country."
              imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800"
            />
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[24px] sm:text-[36px] text-[#222] mb-[30px] uppercase">
            Frequently Asked Questions
          </h2>
          <Accordion 
            items={[
              {
                title: "When does the show air?",
                content: "The Sherri Show airs weekdays. Check your local listings below for specific times in your area."
              },
              {
                title: "How can I get tickets to the show?",
                content: "Tickets are available through our official website. Visit the tickets page to request seats for upcoming tapings."
              },
              {
                title: "Can I submit a story or topic idea?",
                content: "Yes! We love hearing from our viewers. You can submit story ideas through our contact form or social media channels."
              }
            ]}
          />
        </div>
      </section>

      {/* Event Calendar */}
      <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[24px] sm:text-[36px] text-[#222] mb-[30px] uppercase">
            Upcoming Events
          </h2>
          <EventCalendar />
        </div>
      </section>

      {/* Listings */}
      <section className="px-[16px] sm:px-[40px] py-[40px] sm:py-[60px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-['Inter:Black',sans-serif] font-black text-[24px] sm:text-[36px] text-[#222] mb-[30px] uppercase">
            Local Listings
          </h2>
          <Listings />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-[16px] sm:px-[40px] pb-[40px]">
        <Footer />
      </footer>
    </div>
  );
}