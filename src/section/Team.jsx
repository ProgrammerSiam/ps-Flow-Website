import Section from "../components/section/Section";
import { teamimg1, teamimg2, teamimg3, teamimg4 } from "../constants/images";

export default function Team() {
  return (
    <Section className="" id="team">
      <div className="container ">
        <div className="flex flex-col gap-[88px]">
          {/* header text */}
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-5xl font-normal tracking-tight text-Content-Primary leading-17 ">
                Meet our experts
              </h2>
              <p className="text-base font-normal leading-7 tracking-tighter text-Content-Secondary ">
                Our team boasts top green energy experts, driving innovation in
                sustainability.
              </p>
            </div>
            <button className="flex items-center justify-center gap-4 py-4 text-base font-medium leading-6 tracking-tighter text-Content-Primary ">
              See all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.75 10H15.25"
                  stroke="#1D1F1E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 4.75L15.25 10L10 15.25"
                  stroke="#1D1F1E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* slider */}
          <div className="flex items-center gap-[32px]  justify-center overflow-auto xl:overflow-hidden">
            <img src={teamimg1} alt="" />
            <img src={teamimg2} alt="" />
            <img src={teamimg3} alt="" />
            <img src={teamimg4} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
