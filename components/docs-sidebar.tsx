"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const clipParams = [
  { id: "notes", label: "notes" },
  { id: "pattern", label: "pattern" },
  { id: "shuffle", label: "shuffle" },
  { id: "sizzle", label: "sizzle" },
  { id: "subdiv", label: "subdiv" },
  { id: "accentMap", label: "accentMap" },
];

export default function DocsSidebar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onHashChange = () => setHash(window.location.hash);
      window.addEventListener("hashchange", onHashChange);
      setHash(window.location.hash);
      return () => window.removeEventListener("hashchange", onHashChange);
    }
  }, []);

  const sections = [
    {
      title: "GETTING STARTED",
      links: [
        {
          href: "/documentation/getting-started/installation",
          label: "Installation",
        },
      ],
    },
    {
      title: "CORE",
      links: [
        {
          href: "/documentation/core/clip",
          label: "clip",
          submenu:
            pathname === "/documentation/core/clip" ? clipParams : undefined,
        },
        { href: "/documentation/core/scale", label: "scale" },
        { href: "/documentation/core/chord", label: "chord" },
        { href: "/documentation/core/arp", label: "arp" },
        { href: "/documentation/core/progression", label: "progression" },
        { href: "/documentation/core/midi", label: "midi" },
      ],
    },
    {
      title: "BROWSER",
      links: [
        { href: "/documentation/browser/session", label: "session" },
        { href: "/documentation/browser/channel", label: "channel" },
      ],
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#1a1e24] md:block overflow-y-auto sticky top-0 h-screen">
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-gray-500 text-sm mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1 text-gray-300 hover:text-white ${
                      pathname === link.href ? "font-bold text-white" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                  {/* Submenu for clip */}
                  {link.label === "clip" &&
                    pathname === "/documentation/core/clip" &&
                    link.submenu && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {link.submenu.map((param) => (
                          <li key={param.id}>
                            <a
                              href={`#${param.id}`}
                              className={`block text-sm py-1 px-2 rounded hover:bg-gray-700 ${
                                hash === `#${param.id}`
                                  ? "bg-gray-800 text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              {param.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800 mt-auto">
        <Link
          href="/about"
          className="text-gray-400 hover:text-white text-sm block mb-2"
        >
          About
        </Link>
        <Link
          href="https://github.com/scribbletune/scribbletune/issues/new?assignees=&labels=bug&template=bug_report.yml"
          target="_blank"
          className="text-gray-400 hover:text-white text-sm block"
        >
          Report an issue
        </Link>
      </div>
    </aside>
  );
}
