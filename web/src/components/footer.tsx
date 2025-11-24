import { getFooter } from "@/lib/sanity";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Music } from "lucide-react";

export async function Footer() {
  const footerData = await getFooter();

  const currentYear = new Date().getFullYear();
  const copyrightText =
    footerData?.copyrightText ||
    `© ${currentYear} Trinity College Accidentals. All rights reserved.`;
  const tagline = footerData?.tagline || "A brotherhood of harmony since 1993";

  return (
    <footer className="bg-card border-t border-primary/20 py-8 text-muted-foreground mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p>{copyrightText}</p>
          <p className="text-sm text-muted-foreground/70">{tagline}</p>
        </div>

        {footerData?.socialLinks && (
          <div className="flex gap-4">
            {footerData.socialLinks.map((link) => {
              let Icon = Music;
              if (link.platform === "facebook") Icon = Facebook;
              if (link.platform === "instagram") Icon = Instagram;
              if (link.platform === "youtube") Icon = Youtube;

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
