import React from "react";
import Section from "./Section";
import Image from "next/image";
import { futuristic, heroBackground } from "@/assets";
import { BackgroundCircles } from "./design/Hero";
import Button from "./Button";
import CustomParallax from "./CustomParallax";

export default function Hero() {
  return (
    <>
      <Section
        crosses
        className="pt-[10rem] -mt-[5rem] mb-6 md:mb-0"
        // crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="relative z-1 container lg:flex">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center lg:text-left mb-6 md-mb-20 lgmb-[6.25rem] py-10">
            <h1 className="h1 mb-6">
              Turning Ideas Into Innovation with
              {` `}
              <span className="inline-block relative text-color-5">
                Algonux
              </span>
            </h1>
            <p className="body-1 max-w-3xl md:mx-0 mx-auto mb-3 text-n-3 lg:mb8">
              Empowering Your Business with Digital Excellence
            </p>
            <Button href="/register" white>
              Contact Us
            </Button>
          </div>

          <div className=" md:block hidden lg:ml-auto xl:w-[38rem] mt4">
            <CustomParallax>
              <Image
                src={futuristic}
                alt="futuristic hero png"
                width={480}
                height={480}
              />
            </CustomParallax>
          </div>
        </div>

        <div className="relative max-w-[23rem] max-h-[490px] mx-auto md:max-w-5xl">
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              className="absolute w-full max-h-[50svh] bottom-0 backdrop-blur-lg blur-lg"
              width={1440}
              height={490}
              alt="heroBackground"
            />
          </div>
          <BackgroundCircles />
        </div>
      </Section>
    </>
  );
}
