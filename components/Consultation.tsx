import { Sparkles } from 'lucide-react';
import React from 'react';

const Consultation = () => {
  return (
    <div className='bg-[#1E4145] w-full h-auto py-20 flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8  screen-max-width '>
        
        <div className='w-full lg:w-[200px] text-center lg:text-left'>
          <p className='text-[#B5DBDF] tracking-wide font-bold text-3xl capitalize'>
            Schedule a Consultation
          </p>
        </div>
        
        <div className='w-full lg:w-[600px]'>
          <p className='font-bold text-[#B5DBDF] text-center text-lg'>
            Ellie Shumaker is currently accepting new clients. Available for online and in-person sessions.
          </p>
        </div>
        
        <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
          <button className="inline-flex border-2 text-[#B5DBDF] items-center gap-3 px-7 py-3 rounded-lg font-medium cursor-pointer">
            <Sparkles className="w-5 h-5" />
            Start Healing
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Consultation;
