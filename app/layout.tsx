import type React from "react";
import { Figtree, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"], // pruned to necessary weights
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Scribbletune",
  description:
    "Explore music creation through programming - algorithmic composition, creative coding tools, and music technology research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Scribbletune</title>
        <meta
          name="description"
          content="Explore music creation through programming - algorithmic composition, creative coding tools, and music technology research"
        />
      </head>
      <body
        className={`${figtree.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans bg-[#1a1e24] text-gray-200 min-h-screen`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-BB3L4GLBNT"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && window.location.hostname !== "localhost") {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BB3L4GLBNT');
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
