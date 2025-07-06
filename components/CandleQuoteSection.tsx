"use client"

import LottiePlayer from "lottie-react"
import candleAnimation from "@/assets/candle.json"

const CandleQuoteSection = () => {
  return (
    <section className="bg-gray-50 common-padding py-30 text-center grid grid-cols-1 md:grid-cols-2 items-center justify-center screen-max-width">
      <div className="w-64 mb-6">
        <LottiePlayer
          animationData={candleAnimation}
          autoplay
          loop
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <blockquote className="text-2xl sm:text-3xl md:text-7xl font-bold text-teal-800 font-handwriting">
        “Come to me, all who labor and are heavy laden, and I will give you rest.”
        <br />
        <span className="text-base mt-2 block">– Matthew 11:28</span>
      </blockquote>
    </section>
  )
}

export default CandleQuoteSection
