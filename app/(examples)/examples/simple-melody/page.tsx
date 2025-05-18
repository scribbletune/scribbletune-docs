import CodeBlock from "@/components/code-block";
import Link from "next/link";

export default function SimpleMelodyPage() {
  const basicExample = `const scribble = require('scribbletune');

// Create a clip that uses the C major scale
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x-x-x-x-'
});

// Export as MIDI
scribble.midi(clip, 'simple-melody.mid');`;

  const patternExample = `const scribble = require('scribbletune');

// Create a clip with a more complex pattern
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x-x_x_x-x_x-x_'
});

// Export as MIDI
scribble.midi(clip, 'complex-pattern.mid');`;

  const sizzleExample = `const scribble = require('scribbletune');

// Create a clip with the sizzle effect
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x-x-x-x-',
  sizzle: true
});

// Export as MIDI
scribble.midi(clip, 'sizzle-melody.mid');`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Simple Melody</h1>

      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        Creating a simple melody with Scribbletune is easy. You can use the{" "}
        <code className="bg-gray-800 px-1 rounded">clip</code> method to create
        a musical phrase and the{" "}
        <code className="bg-gray-800 px-1 rounded">scale</code> method to
        generate notes from a scale.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Basic Example</h2>
      <p className="mb-4">
        This example creates a simple melody using the C major scale with a
        basic pattern:
      </p>
      <CodeBlock code={basicExample} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Using Different Patterns</h2>
      <p className="mb-4">
        You can create more interesting melodies by using different patterns. In
        the pattern string:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <code className="bg-gray-800 px-1 rounded">x</code> plays a note
        </li>
        <li>
          <code className="bg-gray-800 px-1 rounded">-</code> or{" "}
          <code className="bg-gray-800 px-1 rounded">_</code> creates a rest
          (silence)
        </li>
      </ul>
      <p className="mb-4">Here's an example with a more complex pattern:</p>
      <CodeBlock code={patternExample} />

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Adding Dynamics with Sizzle
      </h2>
      <p className="mb-4">
        The <code className="bg-gray-800 px-1 rounded">sizzle</code> parameter
        adds variation to the velocity of the notes, creating a more dynamic and
        expressive melody:
      </p>
      <CodeBlock code={sizzleExample} />

      <div className="mt-12 p-6 bg-gray-800/50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Next Steps</h2>
        <p className="mb-4">
          Now that you've learned how to create a simple melody, try:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link
              href="/examples/chord-progression"
              className="text-blue-400 hover:underline"
            >
              Creating chord progressions
            </Link>
          </li>
          <li>
            <Link
              href="/examples/arpeggios"
              className="text-blue-400 hover:underline"
            >
              Working with arpeggios
            </Link>
          </li>
          <li>
            <Link
              href="/documentation/core/clip"
              className="text-blue-400 hover:underline"
            >
              Exploring the full clip API
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
