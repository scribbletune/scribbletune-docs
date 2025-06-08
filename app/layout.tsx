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
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PLSRNRN');
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
