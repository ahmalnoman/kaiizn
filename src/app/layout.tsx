import type { Metadata } from "next";
import { Michroma, Inter } from "next/font/google";
import BgMouseTrail from "@/components/bg-mouse-trail";
import "@/styles/global.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${michroma.variable} antialiased`}>
        <BgMouseTrail />
        <div className="min-h-screen bg-black/25 w-full overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
