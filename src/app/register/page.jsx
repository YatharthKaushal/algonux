import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { service1, service2, service3, check } from "@/assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "@/components/design/Services";
import Image from "next/image";
import { brainwaveServices, brainwaveServicesIcons } from "@/constants";
import Generating from "@/components/Generating";
import RegistrationForm from "@/components/RegistrationForm";

export default function Page() {
  return (
    <>
      <Section
        // crosses
        className="pt-[10rem] -mt-[5rem] min-h-screen"
        // crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container">
          <Heading
            title="Enroll Now"
            text="Submit an application to register with Algonux"
          />

          <div className="relative min-h-screen">
            <div className="relative z-1 w-fit flex itemscenter p-4 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:min-h-full mx-auto">
              <div className="relative z-1 maxw-[17rem] mx-auto">
                {/* <p className="flex items-start py-4 border-t border-n-6"></p> */}
                {/* <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                      <Image width={24} height={24} src={check} alt="donk" />
                      <p className="ml-4">{item}</p>
                  ))}
                </ul> */}
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
        <Gradient />
      </Section>
    </>
  );
}
