import { useState } from "react";
import { Accordion } from "@/app/components/Accordion";
import { FAQCard } from "@/app/components/FAQCard";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { unsplash_tool } from "@/tools/unsplash";

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

export function Components() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
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

      {/* FAQCard Component */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900">FAQ Card</h3>
          <p className="text-slate-600 text-sm">
            A card component for displaying FAQs with an image, title, description, and a button.
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
    </div>
  );
}