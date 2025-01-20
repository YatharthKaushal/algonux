import React from "react";
import Section from "./Section";
import Image from "next/image";
import CustomParallax from "./CustomParallax";
import { services, servicespng } from "@/assets";
import { companyLogos } from "@/constants";

export default function Services() {
  return (
    <Section id="services">
      <div className="container text-center md:text-left">
        <h5 className="h2 lg:h1 px-2 font-code text-n-1 uppercase tracking-wider">
          Services we offer to{" "}
          <span className="inline-block relative text-color-5">transform</span>{" "}
          your&nbsp;business
        </h5>

        <div className="relative z-1 container lg:flex mx-auto">
          <p className="body-2 text-n-3 md:w-[60%] my-auto text-2xl">
            Our diverse services empower your business with seamless{" "}
            <span className="text-color-5 font-code font-semibold">
              Website{" "}
            </span>
            Development,{" "}
            <span className="text-color-5 font-code font-semibold">AI </span>
            Integration,{" "}
            <span className="text-color-5 font-code font-semibold">SaaS </span>
            Solutions,{" "}
            <span className="text-color-5 font-code font-semibold">
              Automation
            </span>
            , <span className="text-color-5 font-code font-semibold">APP </span>
            Development, backend management, and ongoing website maintenance,
            ensuring scalability, efficiency, and innovation at every step.
          </p>
          <div className=" md:block hidden lg:mlauto xl:w-[38rem] mt4 px-20 mx-auto">
            <CustomParallax>
              <Image
                src={servicespng}
                alt="futuristic hero png"
                width={350}
                height={350}
              />
            </CustomParallax>
          </div>
        </div>
      </div>
      {/* <div>
        <h5 className="tagline mb-2 text-center text-n-1/50">
          Helping people with
        </h5>
        <ul className="flex">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <Image src={logo} width={134} height={28} alt={logo} />
            </li>
          ))}
        </ul>
      </div> */}
    </Section>
  );
}
