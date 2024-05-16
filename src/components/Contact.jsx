import React from "react";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[32px] text-center max-w-xl mx-auto">
        <span>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
              fill="#BEF264"
            />
            <path
              d="M13.6761 15.5618C11.7952 17.8603 10.6667 20.7984 10.6667 24.0001C10.6667 27.2018 11.7952 30.14 13.6761 32.4385L18.9201 27.1945C18.3372 26.2695 18 25.1742 18 24.0001C18 22.826 18.3372 21.7308 18.9201 20.8058L13.6761 15.5618Z"
              fill="#022C22"
            />
            <path
              d="M15.5617 13.6762L20.8057 18.9202C21.7306 18.3373 22.8259 18.0001 24 18.0001C25.1741 18.0001 26.2694 18.3373 27.1944 18.9202L32.4384 13.6762C30.1399 11.7953 27.2017 10.6667 24 10.6667C20.7983 10.6667 17.8602 11.7952 15.5617 13.6762Z"
              fill="#022C22"
            />
            <path
              d="M34.324 15.5618L29.08 20.8058C29.6628 21.7308 30 22.8261 30 24.0001C30 25.1742 29.6628 26.2695 29.0799 27.1944L34.3239 32.4384C36.2049 30.1399 37.3334 27.2018 37.3334 24.0001C37.3334 20.7984 36.2049 17.8603 34.324 15.5618Z"
              fill="#022C22"
            />
            <path
              d="M32.4383 34.324L27.1943 29.08C26.2693 29.6629 25.1741 30.0001 24 30.0001C22.826 30.0001 21.7307 29.6629 20.8058 29.0801L15.5618 34.3241C17.8603 36.205 20.7984 37.3334 24 37.3334C27.2017 37.3334 30.1398 36.2049 32.4383 34.324Z"
              fill="#022C22"
            />
          </svg>
        </span>
        <div className="">
          <h2 className="text-lg font-semibold leading-6 tracking-tighter text-Content-Primary">
            Still have questions?
          </h2>
          <p className="mt-4 text-base font-normal leading-6 tracking-tight text-Content-Secondary ">
            For assistance, please visit our{" "}
            <span className="text-base font-semibold leading-6 tracking-tighter underline text-Content-Primary ">
              Contact Us
            </span>{" "}
            page or call our customer support hotline at{" "}
            <span className="text-base font-semibold leading-6 tracking-tighter text-Content-Primary ">
              (671) 555-0110
            </span>
            . Our dedicated team is ready to help you on your journey to a
            greener, more sustainable future.
          </p>
        </div>
      </div>
    </>
  );
}
