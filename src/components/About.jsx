import React from "react";
import CustomParallax from "./CustomParallax";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";
import { benefitIcon1, benefitImage2 } from "@/assets";
import Image from "next/image";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div
        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] bg-slate300 max-w-6xl mx-auto"
        // style={{
        //   backgroundImage: `url(${item.backgroundUrl})`,
        // }}
      >
        <div className="relative z-2 flex flex-col min-h-fit p-[2.4rem] pointer-events-none ">
          <div className="flex items-center gap-4">
            <h5 className="h2 lg:h1 px-2 font-code text-n-1 uppercase tracking-wider">
              About{" "}
              <span className="inline-block relative text-color-5">
                Algonux
              </span>
            </h5>
          </div>

          <p className="body-2 mt-2 mb-4 text-n-3">
            We specializes in building and managing powerful websites and apps
            tailored to help businesses thrive in the digital era.
          </p>
          <p className="body-2 mb-4 text-n-3">
            We combine innovative design with cutting-edge technology to create
            solutions that drive growth, enhance user experiences, and scale
            with your business. Our dedicated team is committed to delivering
            tailored digital strategies, ensuring your enterprise stands out and
            succeeds in an ever-evolving online landscape.
          </p>

          <p className="body-2  text-n-3">
            We envision a future where technology becomes a catalyst for
            success, helping enterprises build stronger connections with their
            audiences, one digital breakthrough at a time.
          </p>
        </div>

        {/* <GradientLight opacity={5} /> */}

        <div
          className="absolute inset-0.5 rounded-3xl bg-n-8 border border-color-1"
          // style={{ clipPath: "url(#benefits)" }}
        ></div>

        {/* <ClipPath /> */}
      </div>
    </Section>
  );
}
