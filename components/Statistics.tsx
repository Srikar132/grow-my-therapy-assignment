import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    {
      number: "40+",
      title: "Years Experience",
      description: "Providing compassionate and effective Individual and Couples Therapy"
    },
    {
      number: "45,000+",
      title: "Individual Client Sessions",
      description: "Helping individuals and couples heal, grow, and find purpose"
    }
  ];

  return (
    <div className="bg-[#305151] py-12 lg:py-20">
      <div className="screen-max-width px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="space-y-4">
                {/* Number */}
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {stat.number}
                </h2>
                
                {/* Title */}
                <h3 className="text-xl sm:text-xl lg:text-xl font-semibold text-white">
                  {stat.title}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-sm text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;