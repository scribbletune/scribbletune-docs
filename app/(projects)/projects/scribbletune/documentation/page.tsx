import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ScribbletuneDocs() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Scribbletune Documentation</h1>
      <p className="lead">
        Scribbletune is a JavaScript library that helps you create music with code using simple and intuitive patterns.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Getting Started</h3>
          <p className="text-gray-300 mb-4">
            Learn how to install and set up Scribbletune in your project.
          </p>
          <Link
            href="/projects/scribbletune/documentation/getting-started/installation"
            className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            Installation Guide <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Core Concepts</h3>
          <p className="text-gray-300 mb-4">
            Understand clips, scales, chords, and other fundamental concepts.
          </p>
          <Link
            href="/projects/scribbletune/documentation/core/clip"
            className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            Core Documentation <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Browser Usage</h3>
          <p className="text-gray-300 mb-4">
            Learn how to use Scribbletune in the browser with Web Audio API.
          </p>
          <Link
            href="/projects/scribbletune/documentation/browser/session"
            className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            Browser Guide <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Examples</h3>
          <p className="text-gray-300 mb-4">
            Browse practical examples and code samples.
          </p>
          <Link
            href="/projects/scribbletune/examples"
            className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
          >
            View Examples <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
