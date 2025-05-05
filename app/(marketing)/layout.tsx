import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import MarketingHeader from "@/components/marketing-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Scribbletune - Create Music with Code",
  description: "A JavaScript library for creating music with code using simple and intuitive patterns",
}

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1e24] text-gray-200 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <MarketingHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400 text-sm">
                Scribbletune is an open-source project.{" "}
                <a href="https://github.com/scribbletune/scribbletune" className="text-blue-400 hover:underline">
                  View on GitHub
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

