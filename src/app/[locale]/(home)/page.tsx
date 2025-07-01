import Header from "./components/header";
import Hero from "./components/hero-title";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import "./home.css";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Scrollbar from "./components/scrollbar";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Scrollbar />
        <Services />
        <About />
      </main>
      <Footer />
    </>
  );
}
