import Heading from "../components/Heading/Heading";
import { svgLogo } from "../constants/images";
import Section from "./../components/section/Section";

export default function Metrics() {
  return (
    <>
      <div className="hidden lg:block" id="about-us">
        <div className="border-t border-b border-solid border-border-solid">
          <div className="flex items-center justify-between p-10 py-16 bg-white gap-y-6">
            <h2>Global partners that trusted us</h2>
            <div className="flex flex-wrap justify-center items-start gap-[88px]">
              <img src={svgLogo} alt="" />
              <img src={svgLogo} alt="" />
              <img src={svgLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
