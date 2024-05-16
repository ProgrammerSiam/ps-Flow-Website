import React from "react";
import Accordian, { AccordianItem } from "../components/Accordion";
import Section from "../components/section/Section";
import Contact from "../components/Contact";

export default function Faq() {
  return (
    <Section>
      <div className="container p-5 md:p-12 rounded-xl bg-Background-Beige">
        <div className="flex flex-col gap-16">
          {/* title */}
          <div className="flex items-center flex-col gap-[24px]">
            <h2 className="text-5xl font-normal tracking-tight text-center text-Content-Primary leading-17">
              FAQs
            </h2>
            <p className="text-base font-normal leading-7 tracking-tighter text-center text-Content-Secondary ">
              Here you will find the answers to the frequently asked questions.
            </p>
          </div>
          {/* faq */}
          <div className="flex flex-col lg:flex-row">
            <Accordian>
              <AccordianItem value={1} trigger="What is green energy?">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>
              <AccordianItem
                value={2}
                trigger="How does green energy benefit the environment?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem
                value={3}
                trigger="What green energy solutions does your company offer?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem
                value={4}
                trigger="What support services do you offer after installing green energy solutions?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem value={5} trigger="How do solar panels work?">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
            </Accordian>
            <Accordian>
              <AccordianItem value={6} trigger="What is green energy?">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>
              <AccordianItem
                value={7}
                trigger="How does green energy benefit the environment?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem
                value={8}
                trigger="What green energy solutions does your company offer?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem
                value={9}
                trigger="What support services do you offer after installing green energy solutions?"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
              <AccordianItem value={10} trigger="How do solar panels work?">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                aspernatur architecto tempora commodi accusamus, deserunt
                distinctio porro est rerum! Labore.
              </AccordianItem>{" "}
            </Accordian>
          </div>

          {/* contact */}
          <div className="">
            <Contact />
          </div>
        </div>
      </div>
    </Section>
  );
}
