import { counselingCard } from '@/constants/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CouncellingCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {counselingCard.map((card, index) => (
        <Link href={"/"} key={index} className="min-w-[350px] group border  p-8 rounded-lg bg-[#B5DBDF] hover:shadow-xl">
          <div className="group-hover:translate-x-2 transition-transform duration-300 transform">
            <Image
                src={card.image}
                alt={card.alt}
                className="w-full rounded-md mb-3"
                height={50}
                width={50}
                priority
            />

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-700 mb-4">{card.description}</p>
          </div>

          <div className='w-full flex items-center justify-center mt-4'>
            <button
            // href={card.buttonLink}
            className="inline-block border w-full text-center text-sm border-gray-700 px-4 py-2 rounded hover:bg-white transition"
          >
            {card.buttonText}
          </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CouncellingCard