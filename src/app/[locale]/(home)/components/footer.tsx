"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="footer" className="footer-background">
      <div className="wrapper flow">
        <div>
          <Image
            src="/company-logo.svg"
            alt=""
            className="logo"
            width={80}
            height={30}
          />
          <p>{t("footer-rights")}</p>
        </div>
        <div className="footer-content">
          <Link href="/privacy">{t("footer-privacy-cookies")}</Link>
          <Link href="/imprint">{t("footer-imprint")}</Link>
          <div className="flex-content_inner">
            <Image src="/telegram.svg" height={20} width={20} alt="" />
            <Link href="https://t.me/solnoman" target="_blank">
              {t("footer-telegram")}
            </Link>
          </div>

          <div className="flex-content_inner">
            <Image src="/linkedin.svg" height={20} width={20} alt="" />
            <Link
              href="https://www.linkedin.com/company/kaiizn/"
              target="_blank"
            >
              {t("footer-linkedin")}
            </Link>
          </div>
          <div className="flex-content_inner" data-link="calendly">
            <Image src="/meet.svg" height={20} width={20} alt="" />
            <Link href="https://calendly.com/kaiizn" target="_blank">
              {t("footer-founder")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
