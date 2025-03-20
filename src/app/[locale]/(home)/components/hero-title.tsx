"use client";

import useTypewriting from "@/hooks/useTypewriting";
import React from "react";

const HeroTitle = () => {
  const { ref } = useTypewriting(["SERVICES_", "SOLUTIONS_"]);

  return (
    <h1 className="hero-title">
      ELITE TALENT
      <div></div>
      <span id="dynamic-text" ref={ref} />
    </h1>
  );
};

export default HeroTitle;
