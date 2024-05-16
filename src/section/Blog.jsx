import React from "react";
import Section from "../components/section/Section";
import {
  blogimg1,
  blogimg2,
  blogimg3,
  blogimg4,
  blogminimg1,
} from "../constants/images";

export default function Blog() {
  return (
    <Section id="blog">
      <div className="container">
        <div className="flex flex-col gap-[88px]">
          {/* header text */}
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-normal tracking-tight text-Content-Primary leading-17">
              Blog
            </h2>
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

          {/* grid text */}
          <div className="flex gap-[32px] justify-center  flex-col lg:flex-row ">
            {/* large-images */}

            <div className="flex flex-col max-w-2xl">
              <div className="flex flex-col gap-[32px]">
                <img src={blogimg1} alt="" />
                {/* tag */}
                <div className="flex flex-col gap-[24px]">
                  <div className="flex items-center gap-[4px]">
                    <span className="flex items-center h-6 px-2 font-medium leading-5 tracking-tighter text-center bg-white border border-gray-300 border-solid rounded-lg gap-1text-base text-Content-Primary">
                      Solar Power
                    </span>
                    <span className="flex items-center h-6 px-2 font-medium leading-5 tracking-tighter text-center bg-white border border-gray-300 border-solid rounded-lg gap-1text-base text-Content-Primary">
                      Solutions
                    </span>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-[24px]">
                      {/* text */}
                      <div className="flex flex-col gap-[16px]">
                        <h2 className="text-2xl font-semibold leading-10 tracking-tighter text-Content-Primary ">
                          Harnessing the Power of the Sun: Exploring the World
                          of Solar Energy
                        </h2>
                        <p className="overflow-hidden text-base font-normal leading-7 tracking-tighter text-Content-Secondary ">
                          Solar energy is revolutionizing the way we power our
                          world. In this blog post, we'll delve into the
                          incredible potential of solar technology, its
                          environmental benefits, and how you can tap into this
                          sustainable energy source for a brighter future...
                        </p>
                      </div>

                      {/* author */}
                      <div className="flex items-center gap-[16px]">
                        <img src={blogminimg1} alt="" />
                        <span className="text-sm font-medium leading-5 tracking-tighter text-Content-Primary">
                          Leslie Alexander
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="none"
                        >
                          <circle cx="2" cy="2" r="2" fill="#929C9A" />
                        </svg>
                        <span className="text-sm font-medium leading-5 tracking-tighter text-Content-Primary">
                          9 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* small-images */}
            <div className="flex flex-col gap-[32px] ">
              <div className="flex  gap-[32px] items-center">
                <img src={blogimg2} alt="" />
                <div className="flex flex-col gap-[24px]">
                  {/* text */}
                  <div className="">
                    <h2 className="text-lg font-semibold leading-9 tracking-tighter line-clamp-2 md:line-clamp-none text-Content-Primary">
                      Wind Power: A Breath of Fresh Air for Clean Energy
                      Enthusiasts
                    </h2>
                  </div>

                  {/* author */}
                  <div className="flex items-center gap-[16px]">
                    <img src={blogminimg1} alt="" />
                    <span>Leslie Alexander</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#929C9A" />
                    </svg>
                    <span className="hidden md:block">9 min read</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[32px]">
                <img src={blogimg3} alt="" />
                <div className="flex flex-col gap-[24px]">
                  {/* text */}
                  <div className="">
                    <h2 className="text-lg font-semibold leading-9 tracking-tighter text-Content-Primary">
                      Wind Power: A Breath of Fresh Air for Clean Energy
                      Enthusiasts
                    </h2>
                  </div>

                  {/* author */}
                  <div className="flex items-center gap-[16px]">
                    <img src={blogminimg1} alt="" />
                    <span>Leslie Alexander</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#929C9A" />
                    </svg>
                    <span>9 min read</span>
                  </div>
                </div>
              </div>{" "}
              <div className="flex gap-[32px]">
                <img src={blogimg4} alt="" />
                <div className="flex flex-col gap-[24px]">
                  {/* text */}
                  <div className="">
                    <h2 className="text-lg font-semibold leading-9 tracking-tighter text-Content-Primary">
                      Wind Power: A Breath of Fresh Air for Clean Energy
                      Enthusiasts
                    </h2>
                  </div>

                  {/* author */}
                  <div className="flex items-center gap-[16px]">
                    <img src={blogminimg1} alt="" />
                    <span>Leslie Alexander</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <circle cx="2" cy="2" r="2" fill="#929C9A" />
                    </svg>
                    <span>9 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
