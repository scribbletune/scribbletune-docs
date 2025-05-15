import CodeBlock from "@/components/code-block"
import Link from "next/link"

export default function ExamplesPage() {
  const basicExample = `const scribble = require('scribbletune');

// Create a clip that uses the C major scale
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x-x-x-x-'
});

// Export as MIDI
scribble.midi(clip, 'c-major.mid');`

  const chordProgressionExample = `const scribble = require('scribbletune');

// Create a chord progression
const chords = scribble.progression('C4 major', 'I IV V');

// Create a clip with the chord progression
const clip = scribble.clip({
  notes: chords,
  pattern: 'x___x___x___x___'
});

// Export as MIDI
scribble.midi(clip, 'chord-progression.mid');`

  const arpeggiatedExample = `const scribble = require('scribbletune');

// Create an arpeggiated pattern from a chord
const arp = scribble.arp({
  notes: scribble.chord('Cm7'),
  pattern: 'up',
  count: 8
});

// Create a clip with the arpeggiated pattern
const clip = scribble.clip({
  notes: arp,
  pattern: 'x-x-x-x-x-x-x-x-'
});

// Export as MIDI
scribble.midi(clip, 'arpeggiated.mid');`

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Examples</h1>

      <p className="mb-6">
        Here are some examples to help you get started with Scribbletune. Each example demonstrates different features
        of the library.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <p className="mb-4">A simple example using the C major scale:</p>
          <CodeBlock code={basicExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Chord Progression</h2>
          <p className="mb-4">Creating a chord progression using the I-IV-V pattern:</p>
          <CodeBlock code={chordProgressionExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Arpeggiated Pattern</h2>
          <p className="mb-4">Creating an arpeggiated pattern from a chord:</p>
          <CodeBlock code={arpeggiatedExample} />
        </section>
      </div>

      <div className="mt-12 p-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Try It Yourself</h2>
        <p className="mb-4">
          Ready to create your own music with Scribbletune? Check out the{" "}
          <Link href="/documentation/getting-started/installation" className="text-blue-400 hover:underline">
            installation guide
          </Link>{" "}
          to get started, or explore the{" "}
          <Link href="/documentation" className="text-blue-400 hover:underline">
            API documentation
          </Link>{" "}
          to learn more about the available methods.
        </p>
      </div>
    </div>
  )
}

