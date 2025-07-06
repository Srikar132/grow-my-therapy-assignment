import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Happy Client",
      message:
        "Client testimonials are coming soon. Please check back later for insights from those who have worked with Dr. Serena Blake.",
    },
    {
      name: "Grateful Individual",
      message:
        "Working with Dr. Blake helped me overcome anxiety I struggled with for years. I'm finally feeling peace again.",
    },
    {
      name: "Virtual Client",
      message:
        "The Zoom sessions were convenient, and I felt fully supported even online. She's kind and professional.",
    },
  ]

return (
    <section id='testimonials' className="bg-[#B5DBDF] common-padding py-20">
      <div className="screen-max-width">
        <span className="bg-yellow-100 text-sm px-3 py-1 rounded-full font-medium text-gray-700">
          Client Success Stories & Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
          What Former Clients Say
        </h2>
        <p className="text-slate-700 mt-2 mb-8 max-w-xl">
          Real experiences from individuals who have found healing and growth through our work together.
        </p>

        {/* Scrollable Card Section */}
        <div className="relative">
          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#c1e4e9] to-transparent z-10 pointer-events-none" />

          {/* Right Gradient (optional) */}
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#c1e4e9] to-transparent z-10 pointer-events-none" />

          {/* Scrollable Cards */}
          <div className="flex overflow-x-auto animate-scroll scrollbar-hide -mx-4 px-4 mx-auto max-w-sm relative z-0">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                message={testimonial.message}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
};

export default TestimonialSection;
