"use client"

import drSerenaBlakeData from "@/constants"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

type AccordionItemProps = {
    question: string
    answer: string
    isOpen: boolean
    onToggle: () => void
  }
  
  const AccordionItem: React.FC<AccordionItemProps> = ({
    question,
    answer,
    isOpen,
    onToggle,
  }) => {
    return (
      <div className="border-b border-gray-500">
        <button
          className="w-full flex justify-between items-center py-6 text-left font-semibold text-gray-800 text-2xl cursor-pointer"
          onClick={onToggle}
        >
          <span>{question}</span>
          <ChevronDown
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
  
        <div
          className={`grid transition-all duration-300 overflow-hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="text-gray-700 overflow-hidden ">
            <p className="pb-4">{answer}</p>
          </div>
        </div>
      </div>
    )
}


export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
  
    const handleToggle = (index: number) => {
      setOpenIndex(prev => (prev === index ? null : index))
    }
  
    return (
      <section id="faq" className="bg-cyan-100  py-20 common-padding">
        <div className="screen-max-width">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
  
          {drSerenaBlakeData.faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </section>
    )
}