"use client";
import { recording01 } from "@/assets";
import MenuSvg from "@/assets/svg/MenuSvg";
import Image from "next/image";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 bg-n-8/90 backdrop-blur-sm max-h-17 flex justify-between ${
          openNavigation ? "flex-col" : "flex-row"
        }`}
      >
        <div className="p-4 font-black font-code text-4xl shadow-md text-color-5">
          <a href="/">Algonux</a>
        </div>
        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } p-4 font- font-mono text-xl shadow-md text-color-1 md:flex flex-col md:flex-row gap-6 mt-2`}
        >
          <a onClick={handleClick} href="#about">
            About
          </a>
          <a onClick={handleClick} href="#services">
            Services
          </a>
          <a onClick={handleClick} href="#getintouch">
            Contact
          </a>
          <a onClick={handleClick} href="/nirvana">
            Bootcamp
          </a>
        </div>
        <button
          className={`md:hidden block p-4 font-black font-mono text-xl shadow-md text-color-1 mt-2 border-y border-n-6`}
          onClick={toggleNavigation}
        >
          {openNavigation ? (
            <span className="text-rose-500">Close</span>
          ) : (
            <Image src={recording01} alt="menu" className="rotate-90" />
          )}
        </button>
      </div>
    </>
  );
}
