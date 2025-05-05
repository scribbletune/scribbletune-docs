import Link from "next/link"

export default function ExamplesSidebar() {
  const sections = [
    {
      title: "BASICS",
      links: [
        { href: "/examples/simple-melody", label: "Simple Melody" },
        { href: "/examples/chord-progression", label: "Chord Progression" },
        { href: "/examples/arpeggios", label: "Arpeggios" },
      ],
    },
    {
      title: "PATTERNS",
      links: [
        { href: "/examples/euclidean-rhythms", label: "Euclidean Rhythms" },
        { href: "/examples/randomization", label: "Randomization" },
        { href: "/examples/polyrhythms", label: "Polyrhythms" },
      ],
    },
    {
      title: "BROWSER",
      links: [
        { href: "/examples/browser-synth", label: "Browser Synth" },
        { href: "/examples/live-sequencer", label: "Live Sequencer" },
      ],
    },
  ]

  return (
    <aside className="w-64 border-r border-gray-800 bg-[#1a1e24] hidden md:block overflow-y-auto">
      <div className="p-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-gray-500 text-sm mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-1 text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-800 mt-auto">
        <Link href="/docs" className="text-gray-400 hover:text-white text-sm block mb-2">
          Documentation
        </Link>
        <Link
          href="https://github.com/scribbletune/scribbletune/tree/master/examples"
          target="_blank"
          className="text-gray-400 hover:text-white text-sm block"
        >
          GitHub Examples
        </Link>
      </div>
    </aside>
  )
}

