"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const t = useTranslations("Common");

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-xl w-full px-6 py-4 bg-white shadow-2xl rounded-2xl border border-gray-200 transition-all duration-500 ease-in-out ${
        showBanner
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p
          className="text-gray-700 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: t.markup("essential-cookies-accept", {
              important: (chunks) => `<b>${chunks}</b>`,
            }),
          }}
        />

        <button
          onClick={handleAgree}
          className="mt-2 sm:mt-0 shrink-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-all duration-300 ease-in-out"
        >
          {t("agree")}
        </button>
      </div>
    </div>
  );
}
