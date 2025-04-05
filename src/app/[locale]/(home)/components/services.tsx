"use client";

import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="services" className="section service-background">
      <div className="wrapper flow">
        <h2>{t("our-services")}</h2>
        <div className="orange-border-bottom" data-width="small"></div>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-card__title">{t("tech-innovators")}</h3>
            <p className="service-card__text">{t("tech-innovators-desc")}</p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">{t("full-stack-dev")}</h3>
            <p className="service-card__text">{t("full-stack-dev-desc")}</p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">{t("cloud-optimization")}</h3>
            <p className="service-card__text">{t("cloud-optimization-desc")}</p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">{t("security-compliance")}</h3>
            <p className="service-card__text">
              {t("security-compliance-desc")}
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              {t("business-analysis-management")}
            </h3>
            <p className="service-card__text">
              {t("business-analysis-management-desc")}
            </p>
          </div>
          <div className="service-card">
            <h3 className="service-card__title">
              {t("operational-support-and-monitoring")}
            </h3>
            <p className="service-card__text">
              {t("operational-support-and-monitoring-desc")}
            </p>
          </div>
        </div>
        <div className="orange-border-bottom" data-width="xlarge"></div>
      </div>
      <div className="light-background"></div>
    </section>
  );
};

export default Services;
