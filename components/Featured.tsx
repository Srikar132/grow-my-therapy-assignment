import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full bg-[#B5DBDF] py-6 h-auto">
      <div className="screen-max-width !w-fit flex-wrap  flex items-center justify-center gap-5 lg:gap-10 px-4 ">
        
        {/* Text */}
        <div className="">
          <p className=" text-2xl lg:text-4xl font-bold text-[#1E4145]">Featured In</p>
        </div>

        {["/featured1.jpg" , "/featured2.png" , "/featured3.png" , "/featured4.svg"].map((image, index) => (
            <Image
                key={index}
                src={image}
                width={170}
                height={120}
                alt="featured"
                className="cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
        ))}
      </div>
    </div>
  );
};

export default Featured;
