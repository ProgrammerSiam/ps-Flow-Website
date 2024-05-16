import Metrics from "../components/Metrics";
import Section from "../components/section/Section";
import { img, location } from "../constants/images";

export default function Hero() {
  return (
    <Section
      className="pt-[11.5rem]  relative lg:h-[900px] md:-mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          {/* left side content */}
          <div className="flex flex-col gap-[32px] md:justify-center md:text-center lg:text-start md:items-center lg:items-start  lg:max-w-lg">
            <span className="flex items-center gap-2 text-sm font-medium leading-5 tracking-tight text-Content-Primary ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <rect width="12" height="12" rx="2" fill="#022C22" />
                <circle cx="6" cy="6" r="4" fill="#BEF264" />
              </svg>
              Powering Tomorrow
            </span>
            <h2 className="text-6xl font-normal tracking-wide text-Content-Primary leading-96">
              The Future of Green Energy
            </h2>
            <p className="text-base font-normal leading-6 tracking-tighter text-Content-Secondary ">
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet. Join us on a journey towards a future where
              clean, renewable energy sources transform the way we power our
              lives.
            </p>

            <div className="flex flex-wrap  items-center gap-[16px]">
              <button className="flex items-center justify-center gap-4 px-6 py-4 bg-[#022C22] rounded-full text-white font-medium text-base leading-6 tracking-tighter">
                See our solutions
              </button>
              <button className="flex items-center justify-center gap-4 px-6 py-4 bg-[#fff] rounded-full text-Content-Primary font-medium text-base leading-6 tracking-tighter border-[#022C22] border border-solid">
                Get in touch
              </button>
            </div>
          </div>

          {/* right-images */}
          <div className="relative lg:bg-Background-Green">
            <img src={img} alt="" className="rounded-full" />
            <img
              src={location}
              alt=""
              className="absolute hidden -bottom-5 lg:block right-60"
            />
          </div>
        </div>
        {/* bottom-component */}
        <div className="">
          <Metrics />
        </div>
      </div>
    </Section>
  );
}
