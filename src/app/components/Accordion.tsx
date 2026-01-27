import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-slate-200 bg-slate-50">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fe3b84] focus:ring-inset"
      >
        <span className="text-lg font-semibold text-slate-900">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 text-slate-600 leading-relaxed border-t border-slate-200">
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

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
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
