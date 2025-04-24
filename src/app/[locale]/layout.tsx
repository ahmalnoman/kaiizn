import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import BgMouseTrail from "@/components/bg-mouse-trail";
import "@/styles/global.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CookieBanner from "@/components/cookie-banner";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "KAIIZN",
  description:
    "KAIZN is a leading software development house specializing in delivering innovative and tailored software solutions. We offer a wide range of services, including web and mobile app development, custom software solutions, and digital transformation strategies, helping businesses thrive in the digital age.",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const rtlLocales = ["ar"];
  const isRtl = rtlLocales.includes(locale);

  return (
    <html lang="en" dir={isRtl ? "rtl" : "ltr"}>
      <NextIntlClientProvider>
        <body className={`${inter.variable} ${michroma.variable} antialiased`}>
          <CookieBanner />
          <BgMouseTrail />
          <div className="min-h-screen bg-black/25 w-full overflow-hidden">
            {children}
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
