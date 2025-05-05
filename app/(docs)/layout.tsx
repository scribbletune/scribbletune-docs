import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import DocsSidebar from "@/components/docs-sidebar"
import MainNav from "@/components/main-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Scribbletune Documentation",
  description: "Documentation for the Scribbletune library for music programming",
}

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="flex flex-1 mx-auto">
        <DocsSidebar />
        <main className="flex-1 p-6 md:p-10 overflow-auto flex justify-center">
          <div className="w-full max-w-4xl leading-relaxed">{children}</div>
        </main>
      </div>
    </div>
  )
}

