import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { getNavbar } from "@/lib/sanity";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarData = await getNavbar();

  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${merriweather.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation
          logo={navbarData?.logo}
          groupName={navbarData?.groupName}
          links={navbarData?.links}
        />
        {children}
      </body>
    </html>
  );
}
