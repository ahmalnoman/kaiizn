import { routing } from "@/i18n/routing";
import ContactForm from "../(home)/components/contact-form";
import Footer from "../(home)/components/footer";
import Header from "../(home)/components/header";
import "../(home)/home.css";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
