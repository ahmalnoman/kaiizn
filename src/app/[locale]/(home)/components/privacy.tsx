import { useTranslations } from "next-intl";

const PrivacyNotice = () => {
  const t = useTranslations("PrivacyPage");

  return (
    <article>
      <section id="privacy" className="about-background">
        <div className="wrapper flow">
          <h1 className="title">{t("privacy-header")}</h1>
          <div className="orange-border-bottom" data-width="medium"></div>
          <div className="spacing">
            <h2 className="sec-title">{t("privacy-introduction")}</h2>
            <p>{t("privacy-introduction-desc")}</p>
          </div>
          <div className="spacing">
            <h2 className="sec-title">{t("privacy-website")}</h2>
            <p>{t("privacy-website-desc")}</p>
          </div>
          <div className="spacing">
            <h2 className="sec-title">{t("privacy-data")}</h2>
            <p>{t("privacy-data-desc-1")}</p>
            <p>{t("privacy-data-desc-2")}</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PrivacyNotice;
