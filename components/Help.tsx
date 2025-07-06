import React from 'react'
import CouncellingCard from './CouncellingCard'
import Image from 'next/image'

const Help = () => {
  return (
    <section className="py-36 mt-8 relative">
      <div className="screen-max-width flex flex-col gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-900">
          How I Help
        </h1>

        <div className="flex justify-center">
          <CouncellingCard />
        </div>
      </div>
      <div className='inline-block z-0 absolute right-14 bottom-0 max-md:hidden'>
        <Image src="/plant_with_white_bg.png" width={200} height={200} alt='plant'/>
      </div>
    </section>
  )
}

export default Help
