"use client"

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


const faqData = [
  {
    question: "What are your fees?",
    answer: "Our fees vary depending on the service. Contact us for more details.",
  },
  {
    question: "Do you take insurance?",
    answer: "Yes, we accept several insurance plans. Please call to confirm your provider.",
  },
  {
    question: "Do you provide online counseling?",
    answer: "Yes, we offer both in-person and secure online counseling sessions.",
  },
  {
    question: "What are your office hours?",
    answer: "We are open Monday through Friday from 9am to 6pm.",
  },
  {
    question: "What geographic areas do you serve?",
    answer: "We serve clients across the state and offer online support nationwide.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer individual therapy, couples counseling, child play therapy, and more.",
  },
]
export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
  
    const handleToggle = (index: number) => {
      setOpenIndex(prev => (prev === index ? null : index))
    }
  
    return (
      <section className="bg-cyan-100  py-20 common-padding">
        <div className="screen-max-width">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
  
          {faqData.map((item, idx) => (
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