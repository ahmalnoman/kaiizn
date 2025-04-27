import { useTranslations } from "next-intl";

const PrivacyNotice = () => {
  const t = useTranslations("PrivacyPage");

  return (
    <article className="about-background">
      <section id="privacy">
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
            <p>{t("privacy-data-desc-3")}</p>
            <p>{t("privacy-data-desc-4")}</p>
          </div>
          <div className="spacing">
            <h2 className="sec-title">{t("privacy-data-processing")}</h2>
            <p>{t("privacy-data-collect-desc")}</p>
            <h3>{t("privacy-data-collect-l1-1")}</h3>
            <ul>
              <li>{t("privacy-data-collect-l1-2")}</li>
              <li>{t("privacy-data-collect-l1-3")}</li>
              <li>{t("privacy-data-collect-l1-4")}</li>
              <li>{t("privacy-data-collect-l1-5")}</li>
            </ul>
            <p>{t("privacy-data-not-collect-desc")}</p>
            <ul>
              <li>{t("privacy-data-not-collect-l1-1")}</li>
              <li>{t("privacy-data-not-collect-l1-2")}</li>
              <li>{t("privacy-data-not-collect-l1-3")}</li>
            </ul>
          </div>
          <div className="spacing">
            <h3>{t("privacy-process-data")}</h3>
            <p>{t("privacy-process-data-desc")}</p>
            <ul>
              <li>{t("privacy-process-data-li-1")}</li>
              <li>{t("privacy-process-data-li-2")}</li>
              <li>{t("privacy-process-data-li-3")}</li>
            </ul>
          </div>
          <div className="spacing">
            <h3>{t("privacy-data-sharing")}</h3>
            <p>{t("privacy-data-sharing-desc")}</p>
            <ul>
              <li>{t("privacy-data-sharing-li-1")}</li>
            </ul>
          </div>
          <div className="spacing">
            <h3>{t("privacy-data-retention")}</h3>
            <ul>
              <li>{t("privacy-data-retention-li-1")}</li>
              <li>{t("privacy-data-retention-li-2")}</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PrivacyNotice;
