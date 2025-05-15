import Link from "next/link"
import { ArrowRight, Music, Code, BookOpen } from "lucide-react"
import MainNav from "@/components/main-nav"
import CodeBlock from "@/components/code-block"

export default function HomePage() {
  const sampleCode = `const scribble = require('scribbletune');

// Create a clip that plays the middle C
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'xxxxxxx'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'c.mid');`

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-0">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 md:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Create Music with Code
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  Scribbletune is a JavaScript library that helps you create music with code using simple and intuitive
                  patterns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/documentation/getting-started/installation"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/examples"
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    View Examples
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 3-Column Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-0">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-blue-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-7 w-7 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Simple API</h2>
                <p className="text-gray-300 mb-4">
                  Create musical clips with a minimal and intuitive API. Scribbletune makes it easy to generate
                  melodies, chord progressions, and rhythms.
                </p>
                <Link
                  href="/documentation/core/clip"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-purple-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-7 w-7 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Browser & Node.js</h2>
                <p className="text-gray-300 mb-4">
                  Works in both Node.js for generating MIDI files and in the browser for real-time audio playback using
                  Web Audio API.
                </p>
                <Link
                  href="/documentation/browser/session"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-green-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-7 w-7 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Music Theory</h2>
                <p className="text-gray-300 mb-4">
                  Leverage built-in music theory concepts like scales, chords, and progressions without needing to be a
                  music theory expert.
                </p>
                <Link
                  href="/documentation/core/scale"
                  className="text-green-400 hover:text-green-300 inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* Code Example Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-0 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Get Started with a Few Lines of Code</h2>
              <CodeBlock code={sampleCode} />
              <div className="mt-8 text-center">
                <Link
                  href="/documentation/getting-started/installation"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  Start Creating Music <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Scribbletune is an open-source project.{" "}
            <a href="https://github.com/scribbletune/scribbletune" className="text-blue-400 hover:underline">
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

