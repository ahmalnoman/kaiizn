import Header from "./components/header";
import Hero from "./components/hero-title";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import "./home.css";
import { routing } from "@/i18n/routing";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
