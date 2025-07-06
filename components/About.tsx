import drSerenaBlakeData from "@/constants";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#B5DBDF] py-10">
      <div className="screen-max-width flex flex-col mt-10 lg:flex-row items-center justify-between gap-10 px-4">
        
        {/* Image Section */}
        <div className="flex justify-center w-full ">
          <Image
            src="/serenablake.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col w-full  items-center lg:items-start justify-center space-y-6">
          <div className="bg-amber-100 px-3 tracking-wide rounded-lg py-1 text-center lg:text-left">
            <p className="text-xs">
              About Sarena Blake, LCSW — Experienced Christian Therapist in {drSerenaBlakeData.location.address}
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-[#1E4145] text-center lg:text-left">
            Hi I'm Sarena Blake
          </h1>

          {drSerenaBlakeData.about.map((about , i) => (
            <p key={i} className="text-2xl font-bold tracking-wide font-medium leading-relaxed text-[#1E4145] text-center lg:text-left">
              {about}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
