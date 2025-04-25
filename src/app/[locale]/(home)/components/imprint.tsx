import { useTranslations } from "next-intl";

const Imprint = () => {
  const t = useTranslations("ImprintPage");

  return (
    <article>
      <section id="imprint" className="about-background">
        <div className="wrapper flow">
          <section>
            <h1 className="title">{t("imprint-header")}</h1>
            <div className="orange-border-bottom" data-width="medium"></div>
            <div className="spacing">
              <p>
                {t("imprint-business-name")}
                {t("imprint-business-name-value")}
              </p>
              <p>
                {t("imprint-commercial-registration")}
                {t("imprint-commercial-registration-value")}
              </p>
              <p>
                {t("imprint-tax")}
                {t("imprint-tax-value")}
              </p>
              <p>
                {t("imprint-address")}
                {t("imprint-address-value")}
              </p>
            </div>
            <div className="spacing">
              <p>{t("imprint-contact")}</p>
              <ul>
                <li>{t("imprint-contact-value-1")}</li>
                <li>{t("imprint-contact-value-2")}</li>
              </ul>
            </div>
            <div className="spacing">
              <p>{t("imprint-content")}</p>
              <br />
              <p>{t("imprint-content-value-1")}</p>
              <p>{t("imprint-content-value-2")}</p>
            </div>
          </section>
          <section>
            <h1 className="title">{t("legal-header")}</h1>
            <div className="orange-border-bottom" data-width="medium"></div>
            <div className="spacing">
              <p>{t("legal-business")}</p>
              <ul>
                <li>{t("legal-business-value-1")}</li>
                <br />
                <li>{t("legal-business-value-2")}</li>
              </ul>
            </div>
            <div className="spacing">
              <p>{t("legal-liability")}</p>
              <ul>
                <li>{t("legal-liability-value-1")}</li>
                <br />
                <li>{t("legal-liability-value-2")}</li>
              </ul>
            </div>
            <div className="spacing">
              <p>{t("legal-intellectual")}</p>
              <p>{t("legal-intellectual-value")}</p>
            </div>
            <div className="spacing">
              <p>{t("legal-regulatory")}</p>
              <p>{t("legal-regulatory-value")}</p>
            </div>
          </section>
          <section>
            <div className="spacing">
              <p>{t("last-update")}</p>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};

export default Imprint;
