import type React from "react";
import Header from "@/components/header";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#1a1e24] text-gray-200">
      <Header />
      <main>{children}</main>
    </div>
  );
}
