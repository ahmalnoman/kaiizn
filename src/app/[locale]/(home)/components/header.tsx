"use client";

import LanguagePicker from "@/components/language-picker";
import { usePathname, useRouter } from "@/i18n/navigation";
import { i18nLocales, routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const t = useTranslations("HomePage");
  const i18nT = useTranslations("I18n");

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* <Link href="#home" className="skip-to-main">
        Skip to main content
      </Link> */}
      <header className="site-header">
        <div className="wrapper">
          <div className="site-header__inner">
            <Link href="/">
              <Image
                src="/company-logo.svg"
                alt=""
                className="logo"
                width={80}
                height={30}
              />
            </Link>
            <button
              aria-controls="primary-nav"
              aria-expanded={isExpanded}
              onClick={toggleMenu}
            >
              <span className="visually-hidden">{t("menu")}</span>
              {isExpanded ? (
                <Image src="/close.svg" alt="" height={30} width={30} />
              ) : (
                <Image src="/hamburger.svg" alt="" height={40} width={40} />
              )}
            </button>
            <nav
              className="primary-navigation"
              aria-label="Main navigation"
              id="primary-nav"
              onClick={() => setIsExpanded(false)}
            >
              <ul role="list">
                <li>
                  <Link href="/">{t("home")}</Link>
                </li>
                <li>
                  <Link href="/#services">{t("services")}</Link>
                </li>
                <li>
                  <Link href="/#about">{t("about-us")}</Link>
                </li>
                <li>
                  <Link href="/contact#contact">{t("contact-us")}</Link>
                </li>
                <li>
                  <Link
                    className="button-regular"
                    href="https://calendly.com/kaiizn"
                    target="_blank"
                  >
                    {" "}
                    {t("book-a-meeting")}{" "}
                  </Link>
                </li>
                <li>
                  <LanguagePicker
                    languages={i18nLocales.map((locale) => ({
                      ...locale,
                      label: i18nT(locale.label as any),
                    }))}
                    lang={locale}
                    onChange={(locale) => router.replace(pathname, { locale })}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
