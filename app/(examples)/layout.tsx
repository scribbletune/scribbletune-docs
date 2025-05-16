import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import ExamplesSidebar from "@/components/examples-sidebar";
import MainNav from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scribbletune Examples",
  description:
    "Example projects and code snippets for the Scribbletune library",
};

export default function ExamplesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="flex flex-1 mx-auto">
        <ExamplesSidebar />
        <main className="flex-1 p-6 md:p-10 overflow-auto flex justify-center">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
