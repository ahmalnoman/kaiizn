"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="about" className="about-background">
      <div className="wrapper flow">
        <h2>{t("why-choose-kaizn")}</h2>
        <div className="orange-border-bottom" data-width="medium"></div>
        <div className="about-flex">
          <div className="about-flex__inner">
            <div className="about-flex-content">
              <h3>{t("seamless-tech-solutions")}</h3>
              <p>{t("seamless-tech-solutions-desc")}</p>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("web3-ai-powered")}</p>
              </div>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("e2e-web2-dev")}</p>
              </div>
            </div>
            <Image
              src="/kaiizn/seamless.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
          </div>
          <div className="about-flex__inner special">
            <Image
              src="/kaiizn/intelligent.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
            <div className="about-flex-content">
              <h3>{t("resource-optimization")}</h3>
              <p>{t("resource-optimization-desc")}</p>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("performance-driven-planning")}</p>
              </div>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("agile-scalability")}</p>
              </div>
            </div>
          </div>
          <div className="about-flex__inner">
            <div className="about-flex-content">
              <h3>{t("custom-tech-solutions")}</h3>
              <p>{t("custom-tech-solutions-desc")}</p>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("data-driven-optimization")}</p>
              </div>
              <div className="flex-content_inner">
                <Image src="/kaiizn/arrow.svg" alt="" height={20} width={20} />
                <p>{t("scalable-architecture")}</p>
              </div>
            </div>
            <Image
              src="/kaiizn/customized.svg"
              alt=""
              height={420}
              width={400}
              className="floating-image"
            />
          </div>
        </div>
        <div className="orange-border-bottom" data-width="xlarge"></div>
        <div className="about-contact">
          <h2>{t("our-company-offerings")}</h2>
          <p>{t("our-company-offerings-desc")}</p>
          <Link href="/contact" className="button-regular" data-padding="small">
            {t("contact-us")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
