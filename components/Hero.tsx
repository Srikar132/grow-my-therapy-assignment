import React from "react";
import Image from "next/image";
import { Sparkles, Star } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero_bg.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover"
        sizes="90vw"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10  flex items-center justify-center h-full common-padding">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-2 sm:space-y-3">
            <p className="text-sm sm:text-base lg:text-lg text-white/90 font-medium">
              Christian Counselling Services in Richmond & Central Virginia
            </p>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
              Professional Counseling for Christian Healing and Growth
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Begin your journey today towards spiritual growth, deeper
              relationships, and lasting inner peace.
            </p>

            <p className="text-lg sm:text-xl font-bold text-white">
              I want to work with you for…
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Star className="w-4 h-4 text-blue-800 fill-yellow-400" />
                Top rated
              </div>
              <span className="text-white text-sm font-semibold underline hover:no-underline transition-all duration-200 cursor-pointer">
                40+ Years Experience
              </span>
              <span className="text-white text-sm font-semibold underline hover:no-underline transition-all duration-200 cursor-pointer">
                Testimonials
              </span>
              <span className="text-white text-sm font-semibold underline hover:no-underline transition-all duration-200 cursor-pointer">
                Media mentions
              </span>
            </div>

            <div className="mt-8 relative group">
              <button className="relative inline-flex items-center gap-3 px-6 py-3 bg-blue-50 rounded-lg text-blue-950 font-medium cursor-pointer shadow-lg hover:shadow-xl overflow-hidden">
                <Sparkles className="w-5 h-5" />
                Start Healing Today

                {/* Glowing Animated Gradient Bar */}
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-6 blur-lg opacity-80 animate-ai-glow bg-gradient-to-r from-purple-500 via-blue-500 via-green-400 via-yellow-400 via-red-500 to-pink-500" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;