import React from "react";
import Section from "../components/section/Section";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { logo } from "../constants/images";

export default function Footer() {
  return (
    <Section crosses className="!px-0 !py-10 bg-Primary-9">
      <div className="container">
        {/* content */}
        <div className="flex flex-col flex-wrap items-start justify-between gap-10 p-10 md:flex-row">
          {/* logo */}
          <div className="">
            {/* logo */}
            <a className="flex items-center " href="#hero">
              <img src={logo} className="w-28" alt="logo" />
            </a>
          </div>

          {/* link-1 */}
          <div className="flex flex-col items-start gap-[24px] ">
            <h2 className="text-base font-semibold leading-6 tracking-tighter text-Content-Primary font-Helvetica Neue">
              Platform
            </h2>
            <div className="text-base font-normal leading-6 tracking-tighter text-Content-Secondary flex flex-col  gap-[24px]  font-Helvetica Neue items-start">
              <a href="#">Solutions</a>
              <a href="#">How it works</a>
              <a href="#">Pricing</a>
            </div>
          </div>

          {/* link-2 */}
          <div className="flex flex-col items-start gap-[24px] ">
            <h2 className="text-base font-semibold leading-6 tracking-tighter text-Content-Primary font-Helvetica Neue">
              Company
            </h2>
            <div className="text-base font-normal leading-6 tracking-tighter text-Content-Secondary flex flex-col  gap-[24px]  font-Helvetica Neue items-start">
              <a href="#">About</a>
              <a href="#">Our Mission</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
          {/* link-3 */}
          <div className="flex flex-col items-start gap-[24px] ">
            <h2 className="text-base font-semibold leading-6 tracking-tighter text-Content-Primary font-Helvetica Neue">
              Resources
            </h2>
            <div className="text-base font-normal leading-6 tracking-tighter text-Content-Secondary flex flex-col  gap-[24px]  font-Helvetica Neue items-start">
              <a href="#">Blogs</a>
              <a href="#">Help Center</a>
              <a href="#">Support</a>
            </div>
          </div>
          {/* link-4 */}
          <div className="flex flex-col items-start gap-[24px] ">
            <div className="flex items-center gap-[16px]">
              <span className="p-2 rounded-full bg-Background-Green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_236_5979)">
                    <path
                      d="M13.8577 24V13.0533H17.5306L18.0816 8.78588H13.8577V6.06176C13.8577 4.82664 14.1993 3.98492 15.9725 3.98492L18.2303 3.98399V0.167076C17.8398 0.116334 16.4995 0 14.9395 0C11.682 0 9.45185 1.98836 9.45185 5.63912V8.78588H5.76782V13.0533H9.45185V24H13.8577Z"
                      fill="#022C22"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_236_5979">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <p className="text-base font-semibold leading-6 tracking-tight text-Content-Primary ">
                Follow us on Facebook
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <span className="p-2 rounded-full bg-Background-Green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="#022C22"
                  />
                </svg>
              </span>
              <p className="text-base font-semibold leading-6 tracking-tight text-Content-Primary ">
                Follow us on Instagram
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <span className="p-2 rounded-full bg-Background-Green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="#022C22"
                  />
                </svg>
              </span>
              <p className="text-base font-semibold leading-6 tracking-tight text-Content-Primary ">
                Follow us on LinkedIn
              </p>
            </div>
          </div>
        </div>

        {/* copy-right */}
        <div className="mt-20 text-sm font-normal leading-5 tracking-tight text-center lg:text-end text-Content-Secondary font-Helvetica Neue">
          <p>
            © 2024. All Rights Reserved By{" "}
            <span>
              <a href="https://programmer-siam.netlify.app/">
                Mehedi Hasan Siam
              </a>
            </span>
          </p>
        </div>
      </div>
    </Section>
  );
}
