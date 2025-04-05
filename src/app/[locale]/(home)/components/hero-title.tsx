"use client";

import Link from "next/link";
import Image from "next/image";
import useTypewriting from "@/hooks/useTypewriting";
import React from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HomePage");

  const { ref } = useTypewriting([
    `${t("services").toUpperCase()}_`,
    `${t("solutions").toUpperCase()}_`,
  ]);

  return (
    <>
      <section id="home" className="section  flow">
        <div className="wrapper flow">
          <div className="title-image-wrapper">
            <div>
              <h1 className="hero-title">
                <div>{t("elite-talent")}</div>
                <span id="dynamic-text" ref={ref} />
              </h1>
              <div className="orange-border-bottom"></div>
            </div>
            <Image
              src="hero.svg"
              alt=""
              width={600}
              height={600}
              className="hero-image"
            />
          </div>
          <div className="hero-content">
            <div className="hero-text flow">
              <p>{t("unlock-world")}</p>
            </div>
            <div className="flex-wrapper">
              <Link href="#services" className="button-lg" data-color="purple">
                {t("services")}
              </Link>

              <Link href="/contact" className="button-lg">
                {t("connect")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
