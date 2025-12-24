import "./globals.css";
import { Rock_Salt, Pirata_One, IBM_Plex_Mono } from "next/font/google";

const rock_salt = Rock_Salt({
  variable: "--font-rock-salt",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const pirata_one = Pirata_One({
  variable: "--font-pirata-one",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "DuressCrew.com",
  description: "The Duress Crew Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${rock_salt.variable} ${pirata_one.variable} ${ibm_plex_mono.variable}`}
    >
      <body className="h-full">{children}</body>
    </html>
  );
}
