import Link from "next/link";
import { ArrowRight, Music, Code, AudioWaveform, Layers } from "lucide-react";

export default function ExamplesHomePage() {
  const exampleCategories = [
    {
      title: "Basics",
      description: "Learn the fundamentals of creating music with Scribbletune",
      icon: Music,
      color: "blue",
      examples: [
        { name: "Riff", href: "/projects/scribbletune/examples/riff" },
        {
          name: "Simple Melody",
          href: "/projects/scribbletune/examples/simple-melody",
        },
        {
          name: "Chord Progressions",
          href: "/projects/scribbletune/examples/chord-progressions",
        },
      ],
    },
    {
      title: "Beats",
      description: "Explore different rhythmic and melodic patterns",
      icon: Layers,
      color: "purple",
      examples: [
        {
          name: "Breakbeats",
          href: "/projects/scribbletune/examples/breakbeats",
        },
        { name: "Drumloop", href: "/projects/scribbletune/examples/drumloop" },
      ],
    },
    {
      title: "Browser",
      description: "Interactive examples that run in the browser",
      icon: Code,
      color: "orange",
      examples: [
        {
          name: "Random Chords",
          href: "/projects/scribbletune/examples/random-chords",
        },
        {
          name: "Beat (browser)",
          href: "/projects/scribbletune/examples/beat",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Examples (Legacy Path)</h1>

      <div className="mb-8 text-lg space-y-4">
        <p>
          This legacy /examples path has moved. The canonical location is now
          under <code>/projects/scribbletune/examples</code>.
        </p>
        <p>Please update bookmarks. Links below point to the new structure.</p>
        <p>
          <a
            href="/projects/scribbletune/examples"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Go to Scribbletune Examples Home →
          </a>
        </p>
      </div>

      <div className="grid gap-8">
        {exampleCategories.map((category) => {
          const IconComponent = category.icon;

          return (
            <div
              key={category.title}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-${category.color}-900/30 flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`h-5 w-5 text-${category.color}-400`}
                    />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <p className="text-gray-300">{category.description}</p>
              </div>
              <div className="bg-gray-800/30">
                <ul className="divide-y divide-gray-800">
                  {category.examples.map((example) => (
                    <li key={example.name}>
                      <Link
                        href={example.href}
                        className="flex items-center justify-between p-4 hover:bg-gray-800/50"
                      >
                        <span>{example.name}</span>
                        <ArrowRight className="h-4 w-4 text-gray-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
