import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scribbletune",
  description: "Create music with code using JavaScript",
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
        <meta name="description" content="Create music with code" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BB3L4GLBNT"
        />
        <Script id="gtag-init">
          {`
            if (window.location.hostname !== "localhost") {
              window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              gtag("js", new Date());
              gtag("config", "G-BB3L4GLBNT");
            }
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-[#1a1e24] text-gray-200 min-h-screen`}
      >
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PLSRNRN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}

import "./globals.css";
