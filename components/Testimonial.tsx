import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full bg-[#B5DBDF] py-10">
      <div className="screen-max-width flex flex-col mt-10 lg:flex-row items-center justify-between gap-10 px-4">
        
        {/* Image Section */}
        <div className="flex justify-center w-full ">
          <Image
            src="/Testimonial.png"
            alt="image"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col w-full  items-center lg:items-start justify-center space-y-6">
          <div className="bg-amber-100 px-3 tracking-wide rounded-lg py-1 text-center lg:text-left">
            <p className="text-xs">
              About Ellie Shumaker, LCSW — Experienced Christian Therapist in Richmond, VA
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#1E4145] text-center lg:text-left">
            Hi I'm Ellie Shumaker
          </h1>

          <p className="text-2xl font-bold tracking-wide font-medium leading-relaxed text-[#1E4145] text-center lg:text-left">
            With over 40 years of dedicated experience in individual and couples therapy, I truly enjoy working with a wide variety of people of different ages, capacities, backgrounds, and presenting problems. <span className="font-bold">My goal is to help you build credibility in your own journey</span> and educate you on pathways to healing.
          </p>

          <p className="text-2xl font-bold tracking-wide font-medium leading-relaxed text-[#1E4145] text-center lg:text-left">
            My therapeutic approach is rooted in Christian principles, aiming to foster spiritual growth, the deepening of relationships, and a greater sense of inner peace. <span className="font-bold">I am passionate about helping clients grow in their capacity to love</span> and in their trust for God's love for them.
          </p>

          <p className="text-2xl font-bold tracking-wide font-medium leading-relaxed text-[#1E4145] text-center lg:text-left">
            Whether you are seeking to heal from past wounds, discover your life's purpose, or prepare for Heaven, <span className="font-bold">I offer a supportive space to explore these profound areas of life</span>. Together, we can work towards achieving your goals for a more fulfilling and purposeful existence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
