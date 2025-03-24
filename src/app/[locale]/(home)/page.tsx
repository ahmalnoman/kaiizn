import Header from "./components/header";
import Hero from "./components/hero-title";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import ".home.css";

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
        <About />
      </main>
      <Footer />
    </>
  );
}
