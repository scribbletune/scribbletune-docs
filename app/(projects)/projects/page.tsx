import Link from "next/link"
import { ArrowRight, Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      name: "Scribbletune",
      description: "A JavaScript library for creating music with code using simple and intuitive patterns.",
      type: "Node.js Library",
      status: "Active",
      github: "https://github.com/scribbletune/scribbletune",
      documentation: "/projects/scribbletune/documentation",
      examples: "/projects/scribbletune/examples",
      features: ["MIDI Generation", "Web Audio API", "Music Theory", "Pattern-based Composition"]
    }
    // Future projects will be added here
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Projects
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Open source tools and libraries for creating music with code. From algorithmic composition to real-time audio processing.
        </p>
      </div>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                  <span className="bg-green-900/50 text-green-400 px-2 py-1 rounded text-sm">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">{project.type}</p>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </Link>
                <Link
                  href={project.documentation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                >
                  Documentation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={project.documentation}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                View Documentation <ExternalLink size={14} />
              </Link>
              <Link
                href={project.examples}
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1"
              >
                Browse Examples <ExternalLink size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-800/30 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-3">More Projects Coming Soon</h3>
        <p className="text-gray-400">
          Working on new tools for algorithmic composition, real-time audio processing, and music visualization.
        </p>
      </div>
    </div>
  )
}
