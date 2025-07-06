"use client"

import Image from "next/image"
import React from "react"

type BookCardProps = {
    title: string
    image?: string
    available?: boolean
    link?: string
    format?: string
    comingSoon?: boolean
}

const BookCard: React.FC<BookCardProps> = ({
   title,
   image,
   available = false,
   link,
   format,
   comingSoon = false,
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between max-w-xs w-full transition hover:shadow-lg">
            <div className="relative h-64 w-full">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                        Cover Image Coming Soon
                    </div>
                )}

                {comingSoon && (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-0.5 rounded-full font-medium">
            Coming Soon
          </span>
                )}
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                    {available ? (
                        <>
                            <p className="text-sm text-gray-600">Available on Amazon</p>
                            {format && (
                                <p className="text-sm text-gray-500">Formats: {format}</p>
                            )}
                        </>
                    ) : (
                        <p className="text-sm text-gray-500">Coming Soon</p>
                    )}
                </div>

                <div className="pt-4">
                    <a
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full block text-center py-2 px-4 rounded-md font-medium transition ${
                            available
                                ? "bg-teal-100 text-teal-800 hover:bg-teal-200"
                                : "bg-gray-100 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        {available ? "View on Amazon" : "Details Coming Soon"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BookCard
