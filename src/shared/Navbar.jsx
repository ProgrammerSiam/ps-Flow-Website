import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "./../constants/index";
import { logo } from "../constants/images";

export default function Navbar() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 border-b border-border-solid bg-white left-0 w-full z-50  ${
        openNavigation ? "" : "bg-white"
      }`}
    >
      <div className="flex container items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between">
        {/* logo */}
        <a className="flex items-center " href="#hero">
          <img src={logo} className="w-28" alt="logo" />
        </a>

        {/* nav items */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4.1rem] bg-white left-0 right-0 bottom-0  lg:static lg:flex lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center w-full h-full m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative  transition-color ${
                  item.onlyMobile ? "lg:hidden" : ""
                }px-6 py-6 md:py-10 lg:-mr-0.25 lg:text-[16px] font-medium leading-6 tracking-tighter ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-Primary-8"
                    : "lg:text-Button-PrimaryNormal"
                }  lg:leading-5 xl:px-5`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="px-5 py-3 border border-solid rounded-full hidden lg:block border-[#022C22]"
        >
          <div className="flex items-center justify-center gap-2 text-Content-Primary text-[16px]">
            Get in touch
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
          </div>
        </a>
        <button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <FaBarsStaggered
            openNavigation={openNavigation}
            className="text-Neutral-4"
          />
        </button>
      </div>
    </div>
  );
}
