import Link from "next/link";
import { ArrowRight, Puzzle, Zap, FileText } from "lucide-react";
import MainNav from "@/components/main-nav";
import CodeBlock from "@/components/code-block";

export default function HomePage() {
  const sampleCode = `const scribble = require('scribbletune');

// Create a clip that plays the middle C
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'xxxxxxx'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'c.mid');`;

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
                  Music with Code
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  A comprehensive platform for music creation through
                  programming - featuring open source libraries, creative
                  plugins, and research into the intersection of code and sound.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    Explore Projects <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/articles"
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    Read Articles
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
                  <Puzzle className="h-7 w-7 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  Open Source Projects
                </h2>
                <p className="text-gray-300 mb-4">
                  JavaScript libraries and tools for algorithmic composition,
                  MIDI generation, and real-time audio processing. Built for
                  developers and musicians.
                </p>
                <Link
                  href="/projects"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Browse Projects <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-purple-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Creative Plugins</h2>
                <p className="text-gray-300 mb-4">
                  AI-powered pattern generators, synthesis engines, and creative
                  tools for modern music production workflows.
                </p>
                <Link
                  href="/plugins"
                  className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                >
                  Explore Plugins <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-lg">
                <div className="bg-green-900/50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Research & Articles</h2>
                <p className="text-gray-300 mb-4">
                  Deep dives into music technology, algorithmic composition
                  techniques, and the intersection of artificial intelligence
                  and creativity.
                </p>
                <Link
                  href="/articles"
                  className="text-green-400 hover:text-green-300 inline-flex items-center gap-1"
                >
                  Read Articles <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          {/* Code Example Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-0 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Start Creating with Scribbletune
              </h2>
              <p className="text-center text-gray-400 mb-6">
                One of our flagship projects - see how easy it is to create
                music with code:
              </p>
              <CodeBlock code={sampleCode} />
              <div className="mt-8 text-center">
                <Link
                  href="/projects/scribbletune/documentation/getting-started/installation"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  Try Scribbletune <ArrowRight size={16} />
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
            <a
              href="https://github.com/scribbletune/scribbletune"
              className="text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
