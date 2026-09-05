import { useState } from "react";
import { Accordion } from "@/app/components/Accordion";
import { Button } from "@/app/components/Button";
import { FAQCard } from "@/app/components/FAQCard";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { FormField } from "@/app/components/FormField";
import { FormFieldState } from "@/app/components/FormFieldStates";
import { SubmitButton } from "@/app/components/SubmitButton";
import { InteractiveFormExample } from "@/app/components/InteractiveFormExample";
import { NavigationBar } from "@/app/components/NavigationBar";
import { EventCalendar } from "@/app/components/EventCalendar";
import { Ticker } from "@/app/components/Ticker";
import { Listings } from "@/app/components/Listings";
import { Footer } from "@/app/components/Footer";
import { SectionHeader } from "@/app/components/SectionHeader";
import { PostCard } from "@/app/components/PostCard";
import { ComingUpCard } from "@/app/components/ComingUpCard";
import { ContentSection } from "@/app/components/ContentSection";

const accordionCode = `import { Accordion } from "@/app/components/Accordion";

const items = [
  {
    title: "What is the Sherri Show?",
    content: "The Sherri Show is a daily daytime talk show hosted by Sherri Shepherd...",
  },
  {
    title: "When does the show air?",
    content: "The Sherri Show airs weekdays. Check your local listings for times...",
  },
  {
    title: "How can I get tickets?",
    content: "Tickets are available through our website. Visit the tickets page...",
  },
];

<Accordion items={items} />`;

const accordionMultipleCode = `<Accordion items={items} allowMultiple={true} />`;

const faqCardCode = `import { FAQCard } from "@/app/components/FAQCard";

<FAQCard
  image="/path/to/image.jpg"
  title="Show Topic Headline and Description Goes Here"
  description="Quisque accumsan cursus consequat. Morbi mattis, odio eu ornare ultricies..."
  buttonLabel="Learn More"
  onButtonClick={() => console.log("Clicked!")}
/>`;

const videoPlayerCode = `import { VideoPlayer } from "@/app/components/VideoPlayer";

const videos = [
  {
    id: 1,
    thumbnail: "/path/to/thumbnail1.jpg",
    mainImage: "/path/to/main1.jpg",
    title: "Episode 1",
  },
  {
    id: 2,
    thumbnail: "/path/to/thumbnail2.jpg",
    mainImage: "/path/to/main2.jpg",
    title: "Episode 2",
  },
];

<VideoPlayer videos={videos} />`;

const formFieldCode = `import { FormField } from "@/app/components/FormField";

<FormField
  label="Name"
  type="text"
  placeholder="Enter your name"
  value=""
  onChange={(e) => console.log(e.target.value)}
/>`;

const buttonCode = `import { Button } from "@/app/components/Button";

// Primary Button
<Button variant="primary">Get Tickets</Button>

// Secondary Button  
<Button variant="secondary">Subscribe</Button>

// Link Button
<Button variant="link">Learn More</Button>

// Text Arrow Button
<Button variant="text-arrow">View All</Button>

// Arrow Up Button (Icon only)
<Button variant="arrow-up" />

// Small Button
<Button variant="small">Change</Button>

// Disabled State
<Button variant="primary" disabled>Disabled</Button>`;

const navigationBarCode = `import { NavigationBar } from "@/app/components/NavigationBar";

<NavigationBar />`;

const eventCalendarCode = `import { EventCalendar } from "@/app/components/EventCalendar";

<EventCalendar />`;

const tickerCode = `import { Ticker } from "@/app/components/Ticker";

// Using items array
<Ticker
  items={[
    "Upcoming guest: Oprah Winfrey",
    "New episode airs on Monday",
    "Join us for a live taping!",
  ]}
/>

// Or using text prop
<Ticker text="SCROLLER FOR IMPORTANT ANNOUNCEMENTS.....\" />

// Custom speed (pixels per second)
<Ticker
  items={["News 1", "News 2", "News 3"]}
  speed={100}
/>`;

const listingsCode = `import { Listings } from "@/app/components/Listings";

// Default listings with sample data
<Listings />

// With custom data
const customData = [
  { id: "1", location: "Birmingham", station: "KTUU", time: "2pm, M-F", state: "ALABAMA" },
  { id: "2", location: "Phoenix", station: "KTVK", time: "3pm, M-F", state: "ARIZONA" },
  // ... more listings
];

<Listings data={customData} />`;

const footerCode = `import { Footer } from "@/app/components/Footer";

<Footer />`;

const sectionHeaderCode = `import { SectionHeader } from "@/app/components/SectionHeader";

<SectionHeader 
  title="THE SHERRI SHOW"
  showSeeMore={true}
  onSeeMoreClick={() => console.log("See more clicked")}
/>`;

const postCardCode = `import { PostCard } from "@/app/components/PostCard";

// Large featured post
<PostCard
  imageUrl="/path/to/image.jpg"
  category="CATEGORY TITLE"
  title="The show episode title with an extra long headline"
  size="large"
/>

// Regular post
<PostCard
  imageUrl="/path/to/image.jpg"
  category="CATEGORY TITLE"
  title="A SHOW EPISODE TITLE"
  size="regular"
/>`;

const comingUpCardCode = `import { ComingUpCard } from "@/app/components/ComingUpCard";

<ComingUpCard
  imageUrl="/path/to/image.jpg"
  date="MON, SEPTEMBER 10"
  guestName="NAME OF GUEST"
/>`;

const contentSectionCode = `import { ContentSection } from "@/app/components/ContentSection";

<ContentSection
  title="THE SHERRI SHOW"
  featuredPost={{
    imageUrl: "/path/to/featured.jpg",
    category: "CATEGORY TITLE",
    title: "The show episode title with an extra long headline"
  }}
  posts={[
    {
      imageUrl: "/path/to/post1.jpg",
      category: "CATEGORY TITLE",
      title: "A SHOW EPISODE TITLE"
    },
    // ... more posts
  ]}
  comingUpItems={[
    {
      imageUrl: "/path/to/guest1.jpg",
      date: "MON, SEPTEMBER 10",
      guestName: "NAME OF GUEST"
    },
    // ... more guests
  ]}
  adImageUrl="/path/to/ad.jpg"
/>`;

export function Components() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [secondaryButtonState, setSecondaryButtonState] = useState<"default" | "hover" | "active" | "disabled">("default");

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const cycleSecondaryButtonState = () => {
    const states: Array<"default" | "hover" | "active" | "disabled"> = ["default", "hover", "active", "disabled"];
    const currentIndex = states.indexOf(secondaryButtonState);
    const nextIndex = (currentIndex + 1) % states.length;
    setSecondaryButtonState(states[nextIndex]);
  };

  const sampleItems = [
    {
      title: "What is the Sherri Show?",
      content:
        "The Sherri Show is a daily daytime talk show hosted by Sherri Shepherd, featuring celebrity guests, lifestyle segments, and inspiring stories.",
    },
    {
      title: "When does the show air?",
      content:
        "The Sherri Show airs weekdays on NBC. Check your local listings for exact times in your area.",
    },
    {
      title: "How can I get tickets?",
      content:
        "Tickets are available through our website. Visit the tickets page to request free tickets to attend a live taping of the show.",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Components</h2>
        <p className="text-slate-600">
          Reusable UI components for the Sherri Show design system.
        </p>
      </div>

      {/* Accordion Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Accordion</h3>
          <p className="text-slate-600 text-sm">
            Collapsible content sections, perfect for FAQs and content organization.
          </p>
        </div>

        {/* Single Select Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Single Select (Default)</h4>
            <button
              onClick={() => handleCopy(accordionCode, "single")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "single" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg bg-white">
            <Accordion items={sampleItems} />
          </div>
        </div>

        {/* Multiple Select Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Multiple Select</h4>
            <button
              onClick={() => handleCopy(accordionMultipleCode, "multiple")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "multiple" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-6 border border-slate-200 rounded-lg bg-white">
            <Accordion items={sampleItems} allowMultiple={true} />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(accordionCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{accordionCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">items</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">Array</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Array of objects with title and content
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">allowMultiple</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">boolean</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">false</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Allow multiple items to be open at once
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Button Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Buttons</h3>
          <p className="text-slate-600 text-sm">
            Various button styles and variants for different actions and states.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(buttonCode, "button")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "button" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Primary Button */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Primary
                </p>
                <Button variant="primary">Get Tickets</Button>
              </div>

              {/* Secondary Button */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Secondary
                  </p>
                  <span className="text-xs text-slate-400">
                    ({secondaryButtonState})
                  </span>
                </div>
                <div onClick={cycleSecondaryButtonState} className="cursor-pointer">
                  {secondaryButtonState === "default" && (
                    <button className="bg-[#43bbcf] content-stretch flex items-center justify-center px-[44px] py-[17px] rounded-[4px]">
                      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-white text-[16px] uppercase">
                        Subscribe
                      </p>
                    </button>
                  )}
                  {secondaryButtonState === "hover" && (
                    <button className="bg-[#5ac5d8] content-stretch flex items-center justify-center px-[44px] py-[17px] rounded-[4px]">
                      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-white text-[16px] uppercase">
                        Subscribe
                      </p>
                    </button>
                  )}
                  {secondaryButtonState === "active" && (
                    <button className="bg-[#3aacbe] content-stretch flex items-center justify-center px-[44px] py-[17px] rounded-[4px]">
                      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-white text-[16px] uppercase">
                        Subscribe
                      </p>
                    </button>
                  )}
                  {secondaryButtonState === "disabled" && (
                    <button disabled className="bg-[#e0e0e0] cursor-not-allowed content-stretch flex items-center justify-center px-[44px] py-[17px] rounded-[4px] pointer-events-none">
                      <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic shrink-0 text-[#b0b0b0] text-[16px] uppercase">
                        Subscribe
                      </p>
                    </button>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-2">Click to cycle states</p>
              </div>

              {/* Link Button */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Link
                </p>
                <Button variant="link">Learn More</Button>
              </div>

              {/* Text Arrow Button */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Text Arrow
                </p>
                <Button variant="text-arrow">View All</Button>
              </div>

              {/* Arrow Up Button (Icon only) */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Arrow Up
                </p>
                <Button variant="arrow-up" />
              </div>

              {/* Small Button */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Small
                </p>
                <Button variant="small">Change</Button>
              </div>

              {/* Disabled State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Disabled
                </p>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(buttonCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{buttonCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">variant</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Style variant of the button (e.g., primary, secondary, link, text-arrow, arrow-up, small)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">disabled</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">boolean</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">false</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Disables the button
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQCard Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Cards</h3>
          <p className="text-slate-600 text-sm">
            A card component for displaying content with an image, title, description, and a button.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(faqCardCode, "faqCard")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "faqCard" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FAQCard
                image="https://images.unsplash.com/photo-1768222935380-0a3a76fbb42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxldmlzaW9uJTIwc3R1ZGlvJTIwYnJvYWRjYXN0fGVufDF8fHx8MTc2OTUzNTg4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                title="Show Topic Headline and Description Goes Here"
                description="Quisque accumsan cursus consequat. Morbi mattis, odio eu ornare ultricies, mi dolor dapibus massa, vel hendrerit ligula magna vel lorem. Suspendisse interdum finibus purus, eu vulputate orci consectetur ac."
                buttonLabel="Learn More"
                onButtonClick={() => console.log("Card 1 clicked")}
              />
              <FAQCard
                image="https://images.unsplash.com/photo-1511817175014-923df6b4009d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJpdHklMjBpbnRlcnZpZXclMjBzaG93fGVufDF8fHx8MTc2OTUzNTg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                title="Behind the Scenes with Sherri"
                description="Get an exclusive look at what happens behind the scenes of The Sherri Show. From guest prep to stage setup, discover the magic that makes each episode special."
                buttonLabel="Watch Now"
                onButtonClick={() => console.log("Card 2 clicked")}
              />
              <FAQCard
                image="https://images.unsplash.com/photo-1614604858874-5354c8788d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxldmlzaW9uJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3Njk1MzU4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                title="Upcoming Guest Lineup"
                description="Check out who's coming to visit Sherri this week! We have an amazing lineup of celebrities, influencers, and inspiring personalities ready to share their stories."
                buttonLabel="See Schedule"
                onButtonClick={() => console.log("Card 3 clicked")}
              />
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(faqCardCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{faqCardCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">image</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    URL of the image to display
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">title</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Title of the FAQ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">description</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Description of the FAQ
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">buttonLabel</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Label for the button
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">onButtonClick</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">function</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Function to call when the button is clicked
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* VideoPlayer Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Video Player</h3>
          <p className="text-slate-600 text-sm">
            A video player component for displaying a list of videos with thumbnails and main images.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(videoPlayerCode, "videoPlayer")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "videoPlayer" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-4 sm:p-8 border border-slate-200 rounded-lg bg-white">
            <VideoPlayer />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(videoPlayerCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{videoPlayerCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">videos</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">Array</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Array of video objects with id, thumbnail, mainImage, and title
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* EventCalendar Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Event Calendar</h3>
          <p className="text-slate-600 text-sm">
            A calendar component for displaying events and dates.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(eventCalendarCode, "eventCalendar")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "eventCalendar" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <EventCalendar />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(eventCalendarCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{eventCalendarCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* FormField Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Form Fields</h3>
          <p className="text-slate-600 text-sm">
            Flexible form input components with labels, validation states, and helper text.
          </p>
        </div>

        {/* Examples */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Field States</h4>
            <button
              onClick={() => handleCopy(formFieldCode, "formField")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "formField" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Default State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Default
                </p>
                <FormFieldState
                  state="default"
                  label="Label"
                  placeholder="Placeholder text"
                />
              </div>

              {/* Hover State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Hover
                </p>
                <FormFieldState
                  state="hover"
                  label="Label"
                  placeholder="Placeholder text"
                />
              </div>

              {/* Focused State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Focused
                </p>
                <FormFieldState
                  state="focused"
                  label="Label"
                  placeholder="Placeholder text"
                />
              </div>

              {/* Filled State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Filled
                </p>
                <FormFieldState
                  state="filled"
                  label="Label"
                  placeholder="Placeholder text"
                />
              </div>

              {/* Error State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Error
                </p>
                <FormFieldState
                  state="error"
                  label="Label"
                  placeholder="Placeholder text"
                  helperText="This field is required"
                />
              </div>

              {/* Disabled State */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                  Disabled
                </p>
                <FormFieldState
                  state="disabled"
                  label="Label"
                  placeholder="Placeholder text"
                  helperText="This field is disabled"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Interactive Example</h4>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <div className="max-w-md">
              <InteractiveFormExample />
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(formFieldCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{formFieldCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">label</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Label for the form field
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">type</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Type of the form field (e.g., text, email, password)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">placeholder</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Placeholder text for the form field
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">value</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Current value of the form field
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">onChange</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">function</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Function to call when the value changes
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">required</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">boolean</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">false</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Marks the field as required
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">error</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Error message to display
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">helperText</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Helper text to display
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">disabled</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">boolean</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">false</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Disables the form field
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">showInfo</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">boolean</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">false</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Shows an info icon
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* NavigationBar Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Navigation Bar</h3>
          <p className="text-slate-600 text-sm">
            A navigation bar component for the Sherri Show website.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(navigationBarCode, "navigationBar")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "navigationBar" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <NavigationBar />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(navigationBarCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{navigationBarCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Ticker Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Ticker</h3>
          <p className="text-slate-600 text-sm">
            A ticker component for displaying scrolling text.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(tickerCode, "ticker")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "ticker" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <Ticker
              items={[
                "Upcoming guest: Oprah Winfrey",
                "New episode airs on Monday",
                "Join us for a live taping!",
              ]}
            />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(tickerCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{tickerCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">items</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string[]</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Array of strings to display in the ticker
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">text</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">—</td>
                  <td className="px-4 py-3 text-slate-600">
                    Single text string to display (alternative to items)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">speed</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">number</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">50</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Scroll speed in pixels per second
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">separator</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">string</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">" • "</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Separator between items when using items array
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Listings Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Listings</h3>
          <p className="text-slate-600 text-sm">
            A listings component for displaying a list of items with details.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(listingsCode, "listings")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "listings" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <Listings />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(listingsCode, "usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{listingsCode}</code>
            </pre>
          </div>
        </div>

        {/* Props Table */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Props</h4>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Prop</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Type</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">Default</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3">
                    <code className="text-xs bg-slate-100 px-2 py-1 rounded">data</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">Array</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    <code className="text-xs">defaultData</code>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    Array of listing objects with id, location, station, time, and state
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Footer</h3>
          <p className="text-slate-600 text-sm">
            A footer component for the Sherri Show website.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(footerCode, "footer")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "footer" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <Footer />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(footerCode, "footer-usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "footer-usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{footerCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Section Header Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Section Header</h3>
          <p className="text-slate-600 text-sm">
            A header component with 3 decorative circles, a title, and an optional "SEE MORE" button.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(sectionHeaderCode, "section-header")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "section-header" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <SectionHeader 
              title="THE SHERRI SHOW"
              showSeeMore={true}
            />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(sectionHeaderCode, "section-header-usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "section-header-usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{sectionHeaderCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Post Card Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Post Card</h3>
          <p className="text-slate-600 text-sm">
            A card component for displaying show episodes and posts. Supports both large featured and regular sizes.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(postCardCode, "post-card")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "post-card" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white space-y-8">
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-4 uppercase">Regular Size</p>
              <PostCard
                imageUrl="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800"
                category="BEHIND THE SCENES"
                title="A SHOW EPISODE TITLE WITH AN EXTRA LONG HEADLINE"
                size="regular"
              />
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(postCardCode, "post-card-usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "post-card-usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{postCardCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Coming Up Card Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Coming Up Card</h3>
          <p className="text-slate-600 text-sm">
            A card component for displaying upcoming guest appearances with date and name.
          </p>
        </div>

        {/* Example */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-slate-700">Example</h4>
            <button
              onClick={() => handleCopy(comingUpCardCode, "coming-up-card")}
              className="text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded border border-slate-200 hover:border-[#fe3b84]"
            >
              {copiedCode === "coming-up-card" ? "Copied!" : "Copy Code"}
            </button>
          </div>
          <div className="p-8 border border-slate-200 rounded-lg bg-white">
            <ComingUpCard
              imageUrl="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800"
              date="MON, SEPTEMBER 10"
              guestName="NAME OF GUEST"
            />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(comingUpCardCode, "coming-up-card-usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "coming-up-card-usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{comingUpCardCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Content Section Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">Content Section</h3>
          <p className="text-slate-600 text-sm">
            A comprehensive content section combining a featured post, grid of regular posts, and a "Coming Up" sidebar module.
          </p>
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-700">Usage</h4>
          <div className="relative">
            <button
              onClick={() => handleCopy(contentSectionCode, "content-section-usage")}
              className="absolute top-3 right-3 text-xs font-semibold text-slate-400 hover:text-[#fe3b84] transition-colors px-3 py-1 rounded bg-slate-800 hover:bg-slate-700"
            >
              {copiedCode === "content-section-usage" ? "Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{contentSectionCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}