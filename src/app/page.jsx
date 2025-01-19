import About from "@/components/About";
import CourseItenray from "@/components/CourseItenary";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GetInTouch/>
      {/* <Hero />
      <CourseItenray />
      <Pricing />
      <Testimonial />
      <Footer /> */}
    </>
  );
}
