import Header from "./[locale]/(home)/components/header";
import Hero from "./[locale]/(home)/components/hero-title";
import Services from "./[locale]/(home)/components/services";
import "./[locale]/(home)/home.css";

export async function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
