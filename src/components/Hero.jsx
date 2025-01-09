import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import { brainwaveSymbol, check, heroBackground } from "@/assets";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { collabApps, collabContent, collabText } from "@/constants";
import CustomParallax from "./CustomParallax";
import TagLine from "./TagLine";

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
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-6 md-mb-20 lgmb-[6.25rem]">
          <h1 className="h1 mb-6">
            Learn &nbsp;MERN Fullstack&nbsp; &nbsp;Web Development&nbsp; with{" "}
            {` `}
            <span className="inline-block relative text-color-5">Algonux </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-3 text-n-2 lg:mb8">
            Algonux offers Bootcamp + Intenship program to upskill your talent.
          </p>
          <Button href="/register" white>
            Join Now
          </Button>
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

        <div className="container lg:flex">
          <CustomParallax scrollStrength={0.04}>
            <div className="max-w-[25rem] xl:mr-auto xl:ml-10">
              <h2 className="h2 mb-4 md:mb-8">0 to 100 Fullstack</h2>
              <TagLine>
                <p className="h7 pb-4 font-code">{collabText}</p>
              </TagLine>

              <ul className="max-w-[22rem] mb-5 md:mb-10">
                {collabContent.map((item) => (
                  <li className="mb-3 py-3" key={item.id}>
                    <div className="flex items-center">
                      <Image src={check} width={24} height={24} alt="check" />
                      <h6 className="body-2 ml-5 ">{item.title}</h6>
                    </div>
                    {item.text && (
                      <p className="body-2 mt-3 text-n-4">{item.text}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </CustomParallax>

          <div className="lg:ml-auto xl:w-[38rem] mt4">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                  <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full text-color-5 font-black h3">
                    {"</>"}
                  </div>
                </div>
              </div>
              <ul>
                <CustomParallax
                  strength={0.05}
                  // lerpEase={2}
                  isAbsolutelyPositioned
                  // shouldPause
                >
                  {collabApps.map((app, index) => (
                    <li
                      key={app.id}
                      className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                        index * 45
                      }`}
                    >
                      <div
                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                          index * 45
                        }`}
                      >
                        <Image
                          className="m-auto"
                          width={64}
                          height={64}
                          alt={app.title}
                          src={app.icon}
                        />
                      </div>
                    </li>
                  ))}
                </CustomParallax>
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
