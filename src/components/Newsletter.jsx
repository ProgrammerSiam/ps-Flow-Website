import React from "react";
import Section from "./section/Section";

export default function Newsletter() {
  return (
    <Section>
      <div className="container">
        <div className="rounded-xl p-5 flex-col lg:flex-row gap-8 lg:gap-0 bg-Background-DarkGreen  lg:py-[64px] lg:px-[96px] flex lg:items-center justify-between">
          {/* left-content */}
          <div className="">
            <h2 className="text-3xl font-normal tracking-tight text-white lg:text-5xl font-helvetica-neue leading-17">
              Your Source for Green
              <br />
              Energy Updates
            </h2>
          </div>
          {/* right-content */}
          <div className="flex items-center gap-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your e-mail..."
              className="flex items-center self-stretch gap-2 p-4 text-base font-normal leading-6 tracking-tighter bg-white rounded-full shadow-form-normal text-Content-Secondary font-Helvetica Neue"
            />
            <button
              type="submit"
              className="px-6 py-4 text-base font-medium leading-6 tracking-tighter rounded-full bg-Button-SecondaryNormal text-Content-Primary"
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
