import { getFooter } from "@/lib/sanity";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
  FaSpotify,
  FaApple,
  FaMusic,
} from "react-icons/fa6";

export async function Footer() {
  const footerData = await getFooter();

  const currentYear = new Date().getFullYear();
  const copyrightText =
    footerData?.copyrightText ||
    `© ${currentYear} Trinity College Accidentals. All rights reserved.`;
  const tagline = footerData?.tagline || "A brotherhood of harmony since 1993";

  return (
    <footer className="bg-card border-t border-border py-8 text-muted-foreground mt-auto relative">
      {/* iOS Safari Footer Extension Hack */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "block",
          width: "100vw",
          height: "48px",
          zIndex: -1,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <div className="bg-card h-[100vh] w-full" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>{copyrightText}</p>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        {footerData?.socialLinks && (
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => {
              let Icon = FaMusic;
              if (link.platform === "facebook") Icon = FaFacebook;
              if (link.platform === "instagram") Icon = FaInstagram;
              if (link.platform === "youtube") Icon = FaYoutube;
              if (link.platform === "tiktok") Icon = FaTiktok;
              if (link.platform === "twitter") Icon = FaTwitter;
              if (link.platform === "linkedin") Icon = FaLinkedin;
              if (link.platform === "spotify") Icon = FaSpotify;
              if (link.platform === "apple") Icon = FaApple;

              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{link.platform}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
}
