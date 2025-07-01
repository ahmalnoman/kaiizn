"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const clients = [
  { id: 1, name: "Yourstaik Bau Gmbh", img: "/yourstatik.webp" },
  { id: 2, name: "AlBuraki Shipping Co. LTD", img: "/alburaki.webp" },
  { id: 3, name: "Shakoshy", img: "/shakoshy.webp" },
  { id: 4, name: "Arabia Automobile", img: "/arabia.webp" },
  { id: 5, name: "Alhashim Foods", img: "/alhashimfoods.webp" },
  { id: 5, name: "Echo to Light", img: "/echo.webp" },
];

const Scrollbar = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      id="clients"
      className="section flex flex-col justify-center items-center"
    >
      <div className="wrapper flow">
        <h2>{t("our-clients")}</h2>
        <div className="orange-border-bottom" data-width="small"></div>
      </div>
      <div className="overflow-hidden w-1/2 relative fade">
        <div className="flex justify-center items-center w-max scroll">
          {[...clients, ...clients].map((client, index) => (
            <Image
              key={index}
              src={client.img}
              alt={client.name}
              width={120}
              height={120}
              className="client-logo"
            />
          ))}
          <div className="fade"></div>
        </div>
      </div>
    </section>
  );
};

export default Scrollbar;
