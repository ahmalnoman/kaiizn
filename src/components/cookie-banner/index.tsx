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

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "tru");
    setShowBanner(false);
  };

  const handleDeny = () => {
    // TODO: Implement cookie customization logic
    setShowBanner(false);
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl w-[95%] p-8 bg-black/30 backdrop-blur-md shadow-lg rounded-2xl transition-all duration-500 ease-in-out border border-[1px] border-[#3e2ba7] ${
        showBanner
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{ borderImage: 'linear-gradient(45deg, #0d0d0d 0%, #3e2ba7 50%, #0d0d0d 100%) 1' }}
    >
      <div className="flex flex-col gap-6">
        <p className="text-white text-lg">
          {t("essential-cookies-accept")}
        </p>
        <div className="flex gap-4 items-center">
          <button
            onClick={handleAccept}
            className="px-8 py-3 bg-white hover:bg-gray-100 text-[#07071C] text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t("agree")}
          </button>
          <button
            onClick={handleDeny}
            className="px-8 py-3 border border-white text-white hover:bg-white/10 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {t("deny")}
          </button>
        </div>
      </div>
    </div>
  );
}
