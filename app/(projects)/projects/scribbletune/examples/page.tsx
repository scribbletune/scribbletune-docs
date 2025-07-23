import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export default function ScribblettuneExamplesPage() {
  const examples = [
    {
      title: "Simple Melody",
      description: "Create a basic melody using scales and patterns",
      href: "/projects/scribbletune/examples/simple-melody",
      difficulty: "Beginner"
    },
    {
      title: "Chord Progressions", 
      description: "Generate common chord progressions and variations",
      href: "/projects/scribbletune/examples/chord-progressions",
      difficulty: "Beginner"
    },
    {
      title: "Beat Patterns",
      description: "Create drum patterns and rhythmic sequences",
      href: "/projects/scribbletune/examples/beat",
      difficulty: "Intermediate"
    },
    {
      title: "Breakbeats",
      description: "Generate complex breakbeat patterns",
      href: "/projects/scribbletune/examples/breakbeats", 
      difficulty: "Intermediate"
    },
    {
      title: "Random Chords",
      description: "Algorithmic chord generation with constraints",
      href: "/projects/scribbletune/examples/random-chords",
      difficulty: "Advanced"
    },
    {
      title: "Guitar Riffs",
      description: "Create guitar-style melodic riffs and patterns",
      href: "/projects/scribbletune/examples/riff",
      difficulty: "Advanced"
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-900/50 text-green-400"
      case "Intermediate": return "bg-yellow-900/50 text-yellow-400"
      case "Advanced": return "bg-red-900/50 text-red-400"
      default: return "bg-gray-900/50 text-gray-400"
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Scribbletune Examples</h1>
        <p className="text-gray-300 text-lg">
          Explore practical examples to learn how to create music with Scribbletune. 
          Each example includes complete code and explanations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{example.title}</h2>
              <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(example.difficulty)}`}>
                {example.difficulty}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{example.description}</p>
            <div className="flex items-center gap-3">
              <Link
                href={example.href}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
              >
                <Play size={14} />
                View Example
              </Link>
              <Link
                href={example.href}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-800/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Want to Contribute?</h3>
        <p className="text-gray-400 mb-4">
          Have an interesting Scribbletune example to share? We'd love to feature it!
        </p>
        <Link
          href="https://github.com/scribbletune/scribbletune"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
        >
          Contribute on GitHub <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
