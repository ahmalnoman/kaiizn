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
  metadataBase: new URL(
    (process.env.NEXT_PUBLIC_BASE_URL as string) || "https://kaiizn.com",
  ),
  title: "KAIIZN | Top Talent Services & Solutions",
  description:
    "KAIIZN is a leading software development house specializing in delivering innovative and tailored software solutions. We offer a wide range of services, including web and mobile app development, custom software solutions, and digital transformation strategies, helping businesses thrive in the digital age.",
  icons: {
    icon: "/favicon-16x16.png",
  },
  openGraph: {
    title: "KAIIZN | Top Talent Services & Solutions",
    description:
      "KAIIZN is a leading software development house specializing in delivering innovative and tailored software solutions.",
    url: "https://kaiizn.com",
    siteName: "KAIIZN",
    images: [
      {
        url: "/company-logo.png",
        width: 1200,
        height: 630,
        alt: "KAIIZN Logo",
      },
    ],
    type: "website",
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

  // Dynamically generate the canonical URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const canonicalUrl = `${baseUrl}/${locale}`;

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        {/* Canonical Tag */}
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <NextIntlClientProvider>
        <body
          className={`${inter.variable} ${michroma.variable} antialiased`}
          suppressHydrationWarning
        >
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
