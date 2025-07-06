'use client'

import drSerenaBlakeData from '@/constants';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statistics: React.FC = () => {
  const stats = [
    {
      number: drSerenaBlakeData.experience.years,
      title: "Years Experience",
      description: "Providing compassionate and effective Individual and Couples Therapy"
    },
    {
      number: drSerenaBlakeData.experience.sessions,
      title: "Individual Client Sessions",
      description: "Helping individuals and couples heal, grow, and find purpose"
    }
  ];

  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div className="bg-[#305151] py-12 lg:py-20">
      <div className="screen-max-width px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {stats.map((stat, index) => (
            <div key={index} ref={ref} className="text-center lg:text-left">
              <div className="space-y-4">
                {/* Number with CountUp */}
                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {inView ? (
                    <CountUp end={stat.number} duration={2} />
                  ) : (
                    0
                  )}
                  +
                </h2>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
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
