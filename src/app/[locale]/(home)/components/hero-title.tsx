"use client";

import Link from "next/link";
import useTypewriting from "@/hooks/useTypewriting";
import React from "react";

const Hero = () => {
  const { ref } = useTypewriting(["SERVICES_", "SOLUTIONS_"]);

  return (
    <>
      <section id="home" className="section hero flow">
        <div className="wrapper flow">
          <h1 className="hero-title">
            ELITE TALENT
            <div></div>
            <span id="dynamic-text" ref={ref} />
          </h1>
          <div className="orange-border-bottom"></div>
          <div className="flex-wrapper">
            <div className="hero-text flow">
              <p>
                Unlock world-class talent and cutting-edge solutions to
                accelerate your business growth and turn bold visions into
                reality
              </p>
            </div>
            <div className="flex-wrapper">
              <Link href="#services" className="button-lg" data-color="purple">
                SERVICES
              </Link>

              <Link href="#contact" className="button-lg">
                WORK WITH US
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
