import Link from "next/link";

export default function Sidebar() {
  const sections = [
    {
      title: "GETTING STARTED",
      links: [
        {
          href: "/projects/scribbletune/documentation/getting-started/installation",
          label: "Installation",
        },
      ],
    },
    {
      title: "CORE API",
      links: [
        {
          href: "/projects/scribbletune/documentation/core/clip",
          label: "clip",
        },
        {
          href: "/projects/scribbletune/documentation/core/scale",
          label: "scale",
        },
        {
          href: "/projects/scribbletune/documentation/core/chord",
          label: "chord",
        },
        { href: "/projects/scribbletune/documentation/core/arp", label: "arp" },
        {
          href: "/projects/scribbletune/documentation/core/progression",
          label: "progression",
        },
        {
          href: "/projects/scribbletune/documentation/core/midi",
          label: "midi",
        },
      ],
    },
    {
      title: "BROWSER",
      links: [
        {
          href: "/projects/scribbletune/documentation/browser/session",
          label: "session",
        },
        {
          href: "/projects/scribbletune/documentation/browser/channel",
          label: "channel",
        },
      ],
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#1a1e24] hidden md:block overflow-y-auto">
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-gray-500 text-sm mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-gray-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
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
          href="/report-issue"
          className="text-gray-400 hover:text-white text-sm block"
        >
          Report an issue
        </Link>
      </div>
    </aside>
  );
}
