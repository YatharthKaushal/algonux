import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";
import { brainwaveServices, roadmap } from "@/constants";
import { check, check2, grid, loading1 } from "@/assets";
import { Gradient } from "./design/Roadmap";
import Image from "next/image";
import CustomParallax from "./CustomParallax";

export default function CourseItenray() {
  return (
    <>
      <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
          <Heading tag="Ready to get started" title="What we’re working on" />

          <CustomParallax mouseStrength={0.0001}>
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
              {roadmap.map((item) => {
                const status = item.status === "done" ? "Done" : "In progress";

                return (
                  <div
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      item.colorful ? "bg-conic-gradient" : "bg-n-6"
                    }`}
                    key={item.id}
                  >
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <CustomParallax mouseStrength={0.07}>
                          <Image
                            className="w-full"
                            src={grid}
                            width={550}
                            height={550}
                            alt="Grid"
                          />
                        </CustomParallax>
                      </div>

                      <CustomParallax
                        scrollStrength={0.03}
                        mouseStrength={0.0001}
                      >
                        <div className="relative z-1">
                          <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                            <TagLine>
                              <TagLine>[ Registrations ]</TagLine>
                              Starting: {item.date}
                            </TagLine>
                            <span>
                              <div className="flex items-center w-fit px-4 py-1 bg-rose-500 rounded text-n-8 m-auto text-center">
                                <Image
                                  className="mr-2.5"
                                  // src={item.status === "done" ? check2 : loading1}
                                  src={loading1}
                                  width={16}
                                  height={16}
                                  alt={status}
                                />
                                <div className="tagline">{"Live"}</div>
                              </div>
                            </span>
                          </div>

                          <div className="mb-10 -my-10 -mx-15">
                            {/* image here */}
                          </div>
                          <h4 className="h4 mb-4">{item.title}</h4>
                          <p className="body-2 text-n-4">{item.text}</p>

                          <ul className="body-2">
                            {item.itenary.map((item, index) => (
                              <li
                                key={item.id}
                                className="flex items-start py-4 border-b border-color-1"
                              >
                                <Image
                                  width={24}
                                  height={24}
                                  src={check}
                                  alt="check"
                                />
                                <p className="ml-4">{item.title}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CustomParallax>
                    </div>
                  </div>
                );
              })}

              <Gradient />
            </div>
          </CustomParallax>
        </div>
      </Section>
    </>
  );
}
