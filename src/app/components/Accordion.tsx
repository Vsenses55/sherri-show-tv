import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onToggle();
    // Remove focus when closing the accordion
    if (isOpen) {
      e.currentTarget.blur();
    }
  };

  return (
    <div className="border border-slate-200 bg-slate-50">
      <button
        onClick={handleClick}
        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#032a36] focus:ring-inset ${
          isOpen 
            ? "bg-[#032a36]" 
            : "hover:bg-[#e4fafc]"
        }`}
      >
        <span className={`text-lg font-semibold ${isOpen ? "text-white" : "text-slate-900"}`}>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-white" : "text-slate-600"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-slate-600 leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: string }>;
  allowMultiple?: boolean;
}

export function Accordion({ items = [], allowMultiple = false }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}