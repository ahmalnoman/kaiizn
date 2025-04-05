import { routing } from "@/i18n/routing";
import ContactForm from "../(home)/components/contact-form";
import Footer from "../(home)/components/footer";
import Header from "../(home)/components/header";
import "../(home)/home.css";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
}
