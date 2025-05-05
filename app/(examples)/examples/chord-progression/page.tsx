import CodeBlock from "@/components/code-block"
import Link from "next/link"

export default function ChordProgressionPage() {
  const basicExample = `const scribble = require('scribbletune');

// Create a chord progression
const chords = scribble.progression('C4 major', 'I IV V');

// Create a clip with the chord progression
const clip = scribble.clip({
  notes: chords,
  pattern: 'x___x___x___x___'
});

// Export as MIDI
scribble.midi(clip, 'chord-progression.mid');`

  const jazzExample = `const scribble = require('scribbletune');

// Create a jazz chord progression
const jazzChords = scribble.progression('C4 minor', 'ii-7 V7 i-maj7');

// Create a clip with the jazz chord progression
const clip = scribble.clip({
  notes: jazzChords,
  pattern: 'x___x___x___',
  shuffle: true
});

// Export as MIDI
scribble.midi(clip, 'jazz-progression.mid');`

  const multipleProgressionsExample = `const scribble = require('scribbletune');

// Create verse chord progression
const verseChords = scribble.progression('C4 major', 'I V vi IV');
const verseClip = scribble.clip({
  notes: verseChords,
  pattern: 'x___x___x___x___'
});

// Create chorus chord progression
const chorusChords = scribble.progression('C4 major', 'IV I V vi');
const chorusClip = scribble.clip({
  notes: chorusChords,
  pattern: 'x___x___x___x___'
});

// Concatenate the clips
const songClip = verseClip.concat(chorusClip);

// Export as MIDI
scribble.midi(songClip, 'song-progression.mid');`

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Chord Progression</h1>

      <p className="mb-6 text-lg">
        Chord progressions are the foundation of most songs. Scribbletune makes it easy to create chord progressions
        using music theory concepts without needing to know all the details.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Basic Chord Progression</h2>
      <p className="mb-4">This example creates a simple I-IV-V chord progression in the key of C major:</p>
      <CodeBlock code={basicExample} />
      <p className="mt-4">
        The <code className="bg-gray-800 px-1 rounded">progression</code> method takes a key and a progression pattern
        using Roman numerals. The pattern 'I IV V' represents the first, fourth, and fifth chords in the C major scale.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Jazz Chord Progression</h2>
      <p className="mb-4">You can create more complex chord progressions with extended chords for jazz:</p>
      <CodeBlock code={jazzExample} />
      <p className="mt-4">
        In this example, we're using a ii-V-i progression in C minor with seventh chords. The{" "}
        <code className="bg-gray-800 px-1 rounded">shuffle</code> parameter adds a swing feel to the rhythm.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Combining Multiple Progressions</h2>
      <p className="mb-4">You can create different sections of a song by combining multiple chord progressions:</p>
      <CodeBlock code={multipleProgressionsExample} />
      <p className="mt-4">
        This example creates a verse with a I-V-vi-IV progression and a chorus with a IV-I-V-vi progression, then
        concatenates them to form a complete song structure.
      </p>

      <div className="mt-12 p-6 bg-gray-800/50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Next Steps</h2>
        <p className="mb-4">Now that you've learned how to create chord progressions, try:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <Link href="/examples/arpeggios" className="text-blue-400 hover:underline">
              Creating arpeggios from your chord progressions
            </Link>
          </li>
          <li>
            <Link href="/examples/edm" className="text-blue-400 hover:underline">
              Building an EDM track with chord progressions
            </Link>
          </li>
          <li>
            <Link href="/docs/core-api/progression" className="text-blue-400 hover:underline">
              Exploring the full progression API
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

