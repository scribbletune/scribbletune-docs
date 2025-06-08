import Link from "next/link";

export default function ExamplesSidebar() {
  const sections = [
    {
      title: "BASICS",
      links: [
        { href: "/examples/riff", label: "Riff" },
        { href: "/examples/simple-melody", label: "Simple Melody" },
        { href: "/examples/chord-progressions", label: "Chord Progressions" },
      ],
    },
    {
      title: "BEATS",
      links: [
        { href: "/examples/breakbeats", label: "Breakbeats" },
        { href: "/examples/drumloop", label: "Drumloop" },
      ],
    },
    {
      title: "BROWSER",
      links: [
        { href: "/examples/random-chords", label: "Random Chords" },
        { href: "/examples/beat", label: "Beat (browser)" },
      ],
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#1a1e24] md:block overflow-y-auto">
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
          href="/documentation"
          className="text-gray-400 hover:text-white text-sm block mb-2"
        >
          Documentation
        </Link>
        <Link
          href="/about"
          className="text-gray-400 hover:text-white text-sm block"
        >
          About
        </Link>
      </div>
    </aside>
  );
}
