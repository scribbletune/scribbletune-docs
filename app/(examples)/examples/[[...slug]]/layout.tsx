import type React from "react"
import { Inter } from "next/font/google"
import "../../../globals.css"
import ExamplesSidebar from "@/components/examples-sidebar"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Scribbletune Examples",
  description: "Example projects and code snippets for the Scribbletune library",
}

export default function ExamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1a1e24] text-gray-200 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <ExamplesSidebar />
            <main className="flex-1 p-6 md:p-10 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

