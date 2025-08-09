"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import React from "react";
import { usePathname } from "next/navigation";

interface SiteHeaderProps {
  containerClassName?: string;
  fullWidth?: boolean;
  paddingY?: string;
  border?: boolean;
}

const navLinks = [
  { href: "/projects", label: "Projects", color: "text-blue-400" },
  { href: "/plugins", label: "Plugins", color: "text-fuchsia-400" },
  { href: "/articles", label: "Articles", color: "text-emerald-400" },
];

export function SiteHeader({
  containerClassName,
  fullWidth = false,
  paddingY = "py-4",
  border = true,
}: SiteHeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

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
            src="/scribbletune-logo.png"
            alt="Scribbletune logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="font-bold text-xl tracking-tight group-hover:opacity-90 transition-opacity font-heading">
            Scribbletune
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "relative transition-colors",
                  active
                    ? clsx(l.color, "font-semibold")
                    : "text-gray-300 hover:text-gray-100"
                )}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-current to-transparent"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default SiteHeader;
