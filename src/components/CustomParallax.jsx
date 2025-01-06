"use client";

import { MouseParallax, ScrollParallax } from "react-just-parallax";

export default function CustomParallax({
  children,
  isAbsolutelyPositioned,
  scrollStrength,
  mouseStrength,
}) {
  return (
    <ScrollParallax
      strength={scrollStrength || 0.05}
      // lerpEase={2}
      isAbsolutelyPositioned={isAbsolutelyPositioned}
      // shouldPause
    >
      <MouseParallax
        strength={mouseStrength || 0.004}
        shouldResetPosition={true}
      >
        {children}
      </MouseParallax>
    </ScrollParallax>
  );
}
