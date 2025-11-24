"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-white group-hover:text-gold transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gold" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-gold" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-white/70 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}
