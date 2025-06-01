import { routing } from "@/i18n/routing";
import ContactForm from "../(home)/components/contact-form";
import Footer from "../(home)/components/footer";
import Header from "../(home)/components/header";
import "../(home)/home.css";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Contact Us | KAIIZN",
  description: "Get in touch with KAIIZN for innovative software solutions and expert services.",
  openGraph: {
    title: "Contact Us | KAIIZN",
    description: "Reach out to KAIIZN for tailored software solutions and expert advice.",
    url: "https://kaiizn.com/contact",
    siteName: "KAIIZN",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact KAIIZN",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon-16x16.png",
  },
};

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
