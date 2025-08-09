import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music with Code",
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
        <title>Music with Code</title>
        <meta
          name="description"
          content="Explore music creation through programming - algorithmic composition, creative coding tools, and music technology research"
        />
      </head>
      <body
        className={`${inter.className} bg-[#1a1e24] text-gray-200 min-h-screen`}
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
