import Metrics2 from "../components/Metrics2";
import Metrics3 from "../components/Metrics3";
import Section from "./../components/section/Section";

export default function AboutUs() {
  return (
    <Section className="flex flex-col gap-[96px]" id="about-us">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          {/* left-content */}
          <div className="">
            <h2 className="text-5xl tracking-tight text-Content-Primary leading-17">
              About us
            </h2>
          </div>

          {/* right-content */}
          <div className="lg:max-w-2xl ">
            <p className="text-base font-medium leading-9 tracking-tighter text-Content-Primary ">
              At Flow, we're committed to a sustainable future. As a pioneering
              force in the green energy sector, we've been at the forefront of
              the transition to clean, renewable power sources. Our mission is
              simple yet profound: to create a world where energy is not only
              abundant but also environmentally responsible. We believe that by
              harnessing the power of nature, we can power the world and protect
              it simultaneously.
            </p>

            <button className="px-6 py-4 mt-5 text-base font-medium leading-6 tracking-tight rounded-full text-Content-Primary bg-Button-SecondaryNormal">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Metrics2 />
      </div>

      <div className="mt-10">
        <Metrics3 />
      </div>
    </Section>
  );
}
