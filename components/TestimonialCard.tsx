// components/TestimonialCard.tsx
type Testimonial = {
    name: string
    message: string
    role?: string
  }
  
  const TestimonialCard = ({ name, message, role }: Testimonial) => {
    return (
      <div className="min-w-[300px] max-w-[320px] bg-[#e6f3f5] text-slate-800 p-8 rounded-lg shadow-md mx-4 flex-shrink-0">
        <h4 className="font-medium text-teal-900/80 text-sm mb-6 tracking-wide">{name}</h4>
        {role && <p className="text-xs text-gray-500 mb-2 tracking-wide">{role}</p>}
        <p className="text-sm">
          {message}
        </p>
      </div>
    )
  }
  
  export default TestimonialCard
  