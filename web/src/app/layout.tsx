import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Trinity College Accidentals | Digital Heritage Platform",
  description:
    "The official Digital Heritage archive for the Trinity College Accidentals - preserving 30 years of a cappella excellence.",
};

import { NavbarWrapper } from "@/components/navbar-wrapper";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${merriweather.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-[100vh] supports-[min-height:-webkit-fill-available]:min-h-[-webkit-fill-available]`}
        suppressHydrationWarning
      >
        <NavbarWrapper />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
