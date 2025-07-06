import React from 'react';

const TestimonialSection = () => {
  return (
    <div className='bg-[#B5DBDF] w-full py-10 px-4'>
      <div className='screen-max-width'>
        <div className='flex flex-col gap-4 max-w-xl w-full'>
          
          {/* Label */}
          <div className='bg-amber-100 w-[280px] rounded-lg inline-block px-3 py-1'>
            <p className='text-sm font-medium capitalize text-[#1E4145]'>
              Client Success Stories & Testimonials
            </p>
          </div>

          {/* Title */}
          <h2 className='text-4xl font-bold capitalize'>
            What former client say
          </h2>

          {/* Subtitle */}
          <p className='text-lg font-light tracking-wide leading-relaxed text-[#1E4145]'>
            Real experiences from individuals who have found healing and growth through our work together.
          </p>

        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
