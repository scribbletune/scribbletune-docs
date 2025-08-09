import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import React from "react";

interface SiteHeaderProps {
  containerClassName?: string;
  fullWidth?: boolean;
  paddingY?: string;
  border?: boolean;
}

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/plugins", label: "Plugins" },
  { href: "/articles", label: "Articles" },
];

export function SiteHeader({
  containerClassName,
  fullWidth = false,
  paddingY = "py-4",
  border = true,
}: SiteHeaderProps) {
  return (
    <header
      className={clsx(border && "border-b border-gray-800", "bg-[#1a1e24]")}
    >
      <div
        className={clsx(
          fullWidth ? "w-full" : "max-w-7xl mx-auto",
          "flex justify-between items-center px-4",
          paddingY,
          containerClassName
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="https://scribbletune.com/images/scribbletune-logo.png"
            alt="Scribbletune logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-bold text-xl tracking-tight group-hover:opacity-90 transition-opacity">
            Scribbletune
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-200 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
