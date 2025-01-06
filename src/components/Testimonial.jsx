import { benefits } from "@/constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";
import Image from "next/image";
import CustomParallax from "./CustomParallax";

export default function Testimonial() {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Previous Batch" />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] bg-slate300"
              // style={{
              //   backgroundImage: `url(${item.backgroundUrl})`,
              // }}
              key={item.id}
            >
              <CustomParallax
                mouseStrength={Math.random() * (0.03123 - 0.04123) + 0.02123}
                scrollStrength={Math.random() * (0.03123 - 0.04123) + 0.02123}
              >
                <div className="relative z-2 flex flex-col min-h-fit p-[2.4rem] pointer-events-none">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      alt={item.title}
                    />
                    <h5 className="h5 px-2 font-code text-n-1 uppercase tracking-wider">
                      {item.title}
                    </h5>
                  </div>

                  {/* <h5 className="h5 mb-5">{item.title}</h5> */}
                  <p className="body-2 my-6 text-n-3">{item.text}</p>
                  <div className="flex items-center my-auto">
                    {/* <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 rounded-3xl bg-n-8 border border-color-1"
                  // style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 blur-xl">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </CustomParallax>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
