import React from "react";
import Section from "../components/section/Section";
import { img, location } from "../constants/images";

export default function Cta() {
  return (
    <Section className="">
      <div className="container bg-DarkGreen">
        <div className="flex items-center gap-[50px] md:gap-[136px] flex-col md:flex-row">
          {/* left-content */}
          <div className="flex flex-col gap-[40px] items-start py-5">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-5xl font-normal tracking-tight text-Content-Reversed leading-17">
                Join the green movement
              </h2>
              <p className="text-base font-normal leading-7 tracking-tighter text-Content-Alpha">
                Our commitment to green energy is paving the way for a cleaner,
                healthier planet.
              </p>
            </div>
            <button className="px-6 py-4 text-base font-medium leading-6 tracking-tighter rounded-full bg-Button-SecondaryNormal text-Content-Primary">
              Get in touch
            </button>
          </div>
          {/* right-content */}
          <div className="relative bg-Background-Green">
            <img src={img} alt="" className="rounded-full" />
            {/* <div
              className="flex-shrink-0 bg-center bg-no-repeat bg-cover rounded-full w-452 h-452"
              style={{ backgroundImage: `url(${img})` }}
            ></div> */}
          </div>
        </div>
      </div>
    </Section>
  );
}
