import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";

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

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${merriweather.variable} font-sans antialiased bg-background text-foreground min-h-screen supports-[min-height:100dvh]:min-h-[100dvh] flex flex-col`}
        suppressHydrationWarning
      >
        <NavbarWrapper />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
