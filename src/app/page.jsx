import CourseItenray from "@/components/CourseItenary";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="p-4 lg:py-2 overflow-hidden">
        <Header />
        <Hero />
        <CourseItenray />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
