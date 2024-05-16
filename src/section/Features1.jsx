import Heading from "../components/Heading/Heading";
import Section from "../components/section/Section";
import { cicon1 } from "../constants/images";

export default function Features1() {
  return (
    <Section className="" id="solutions">
      <div className="container">
        <div className="flex flex-col p-5 md:p-12 rounded-xl bg-Background-Beige gap-[96px]">
          {/* top-content */}
          <div className="flex flex-col gap-y-[56px]">
            <div className="">
              <span className="flex items-center self-stretch gap-2 pb-4 border-b border-border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="4" fill="#BEF264" />
                </svg>
                Solutions
              </span>
            </div>
            <div className="">
              <h2 className="text-5xl tracking-tight text-Content-Primary leading-17">
                Key to clean future
              </h2>
            </div>
          </div>
          {/* bottom-grid */}
          <div className="grid  grid-cols-1  md:grid-cols-2 gap-x-[32px] gap-y-[64px]">
            <div className="flex flex-col gap-[24px] items-start">
              <span>
                <img src={cicon1} alt="" />
              </span>
              <h2 className="text-base font-semibold leading-9 tracking-tighter text-Content-Primary">
                EV charging{" "}
              </h2>
              <p className="text-base leading-6 tracking-tight text-Content-Secondary ">
                EVs use electricity as a power source, which can be generated
                from renewable energy sources. Our solutions help reducing
                greenhouse gas emissions in the transportation sector.
              </p>
              <button className="text-base font-medium leading-6 tracking-tight text-Button-PrimaryNormal">
                Read more
              </button>
            </div>
            <div className="flex flex-col gap-[24px] items-start">
              <span>
                <img src={cicon1} alt="" />
              </span>
              <h2 className="text-base font-semibold leading-9 tracking-tighter text-Content-Primary">
                EV charging{" "}
              </h2>
              <p className="text-base leading-6 tracking-tight text-Content-Secondary ">
                EVs use electricity as a power source, which can be generated
                from renewable energy sources. Our solutions help reducing
                greenhouse gas emissions in the transportation sector.
              </p>
              <button className="text-base font-medium leading-6 tracking-tight text-Button-PrimaryNormal">
                Read more
              </button>
            </div>{" "}
            <div className="flex flex-col gap-[24px] items-start">
              <span>
                <img src={cicon1} alt="" />
              </span>
              <h2 className="text-base font-semibold leading-9 tracking-tighter text-Content-Primary">
                EV charging{" "}
              </h2>
              <p className="text-base leading-6 tracking-tight text-Content-Secondary ">
                EVs use electricity as a power source, which can be generated
                from renewable energy sources. Our solutions help reducing
                greenhouse gas emissions in the transportation sector.
              </p>
              <button className="text-base font-medium leading-6 tracking-tight text-Button-PrimaryNormal">
                Read more
              </button>
            </div>{" "}
            <div className="flex flex-col gap-[24px] items-start">
              <span>
                <img src={cicon1} alt="" />
              </span>
              <h2 className="text-base font-semibold leading-9 tracking-tighter text-Content-Primary">
                EV charging{" "}
              </h2>
              <p className="text-base leading-6 tracking-tight text-Content-Secondary ">
                EVs use electricity as a power source, which can be generated
                from renewable energy sources. Our solutions help reducing
                greenhouse gas emissions in the transportation sector.
              </p>
              <button className="text-base font-medium leading-6 tracking-tight text-Button-PrimaryNormal">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
