import Link from "next/link"
import { ArrowRight, Music, Code, AudioWaveform, Layers } from "lucide-react"

export default function ExamplesHomePage() {
  const exampleCategories = [
    {
      title: "Basics",
      description: "Learn the fundamentals of creating music with Scribbletune",
      icon: Music,
      color: "blue",
      examples: [
        { name: "Simple Melody", href: "/examples/simple-melody" },
        { name: "Chord Progression", href: "/examples/chord-progression" },
        { name: "Arpeggios", href: "/examples/arpeggios" },
      ],
    },
    {
      title: "Patterns",
      description: "Explore different rhythmic and melodic patterns",
      icon: Layers,
      color: "purple",
      examples: [
        { name: "Euclidean Rhythms", href: "/examples/euclidean-rhythms" },
        { name: "Randomization", href: "/examples/randomization" },
        { name: "Polyrhythms", href: "/examples/polyrhythms" },
      ],
    },
    {
      title: "Browser",
      description: "Interactive examples that run in the browser",
      icon: Code,
      color: "orange",
      examples: [
        { name: "Browser Synth", href: "/examples/browser-synth" },
        { name: "Live Sequencer", href: "/examples/live-sequencer" },
      ],
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Examples</h1>

      <p className="mb-8 text-lg">
        Explore these examples to learn how to create music with Scribbletune. Each example includes code snippets and
        explanations to help you understand the concepts.
      </p>

      <div className="grid gap-8">
        {exampleCategories.map((category) => {
          const IconComponent = category.icon

          return (
            <div key={category.title} className="border border-gray-800 rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-${category.color}-900/30 flex items-center justify-center`}
                  >
                    <IconComponent className={`h-5 w-5 text-${category.color}-400`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                <p className="text-gray-300">{category.description}</p>
              </div>
              <div className="bg-gray-800/30">
                <ul className="divide-y divide-gray-800">
                  {category.examples.map((example) => (
                    <li key={example.name}>
                      <Link href={example.href} className="flex items-center justify-between p-4 hover:bg-gray-800/50">
                        <span>{example.name}</span>
                        <ArrowRight className="h-4 w-4 text-gray-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

