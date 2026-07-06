import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const stainger = localFont({
  src: "./fonts/Stainger-Bold.otf",
  variable: "--font-stainger",
  weight: "700",
});

const modernTypewriter = localFont({
  src: "./fonts/ModernTypewriter.ttf",
  variable: "--font-modern-typewriter",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Çacrée — Cercle de lecture mensuel",
  description:
    "Cercle de lecture autour de The Artist's Way - Libérez votre créativité par Julia Cameron. Inscris-toi pour rejoindre les rencontres mensuelles à distance.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4b5a3e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} ${stainger.variable} ${modernTypewriter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
