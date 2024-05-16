import React from "react";
import Section from "./../components/section/Section";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Testimonials() {
  return (
    <Section>
      <div className="container">
        <div className="flex items-center flex-col gap-[88px] ">
          {/* title */}
          <div className="flex items-center flex-col gap-[24px]">
            <h2 className="text-5xl font-normal leading-tight tracking-tight text-center text-Content-Primary ">
              What our customers say
            </h2>
            <p className="text-base font-normal leading-7 tracking-tighter text-center text-Content-Secondary ">
              Thousands of happy customers that changed their energy use
            </p>
          </div>
          {/* slider */}
          <div className="flex rounded-lg bg-white shadow-md flex-col items-center justify-center gap-[40px] p-12 w-800px md:p-16 lg:p-24">
            <div className="">
              <span className="flex items-center justify-center text-[#BEF264]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
              <h2 className="text-[32px] font-semibold leading-10 tracking-tighter text-center text-Content-Primary mt-4 max-w-2xl">
                “Flow transformed my energy use. Efficient, green tech,
                outstanding service!”
              </h2>
            </div>

            <div className="">
              <h2 className="text-lg font-semibold leading-6 tracking-tighter text-center text-Content-Primary">
                Jenny Wilson
              </h2>
              <span className="text-base font-normal leading-7 tracking-normal text-center text-Content-Secondary">
                Solar energy service
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
