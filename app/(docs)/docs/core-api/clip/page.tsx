import CodeBlock from "@/components/code-block"
import PianoRoll from "@/components/ui/piano-roll";

export default function ClipPage() {
  const clipExample = `const scribble = require('scribbletune');

// Create a simple clip
const clip = scribble.clip({
  notes: ['C4', 'E4', 'G4'],
  pattern: 'x_x_x_x_'
});

// Render a MIDI file
scribble.midi(clip, 'simple-clip.mid');`

  const clipWithScaleExample = `const scribble = require('scribbletune');

// Create a clip using a scale
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x-x-x-x-'
});`

  const clipWithSubdivExample = `const scribble = require('scribbletune');

// Create a clip with a custom subdivision
const clip = scribble.clip({
  notes: ['C4', 'E4', 'G4'],
  pattern: 'x_x_x_x_',
  subdiv: '8n'
});`

  const notesForPianoRoll = [
    { note: "C4", start: 0, duration: 128 },
    { note: "E4", start: 128, duration: 128 },
    { note: "G4", start: 256, duration: 128 },
    { note: "C5", start: 256 + 128, duration: 128 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">clip</h1>

      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        The <code className="bg-gray-800 px-1 rounded">clip</code> method is the core of Scribbletune. It creates a
        musical phrase that can be exported as MIDI or played in the browser. You can use it to generate melodies,
        basslines, and more by combining notes, patterns, and other parameters.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Piano Roll Visualization</h2>
      <PianoRoll notes={['C4', 'E4', 'G4', 'B4']} pattern="-x--x---x_--x_--" />


      <h2 className="text-2xl font-bold mt-8 mb-4">Basic Usage</h2>

      <div className="my-6">
        <CodeBlock code={clipExample} />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Parameters</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">notes</h3>
          <p>
            An array of notes or a string of notes separated by spaces. You can also use the{" "}
            <code className="bg-gray-800 px-1 rounded">scale</code> method to generate notes from a scale.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">pattern</h3>
          <p>A string that determines when notes are played. Use:</p>
          <div className="rounded-md p-4">
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">x</span>
              <span>Play a note</span>
            </div>
            <div className="flex items-start gap-4 border-b border-opacity-50 py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">-</span>
              <span>Rest (dont play a note)</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">_</span>
              <span>Sustain a note denoted by x or R</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">R</span>
              <span>Use a random notes from the randomNotes property (if defined) OR randomly set volume</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">[</span>
              <span>Start subdividing the note duration (based on the number of characters inserted)</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">]</span>
              <span>End subdividing (you can nest subdivisions as well)</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">shuffle</h3>
          <p>Boolean (default: false). When true, the notes are shuffled.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">sizzle</h3>
          <p>Boolean (default: false). When true, adds a sizzle effect by randomizing the velocity of the notes.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">subdiv</h3>
          <p>
            A string that specifies the subdivision of the pattern (e.g., <code className="bg-gray-800 px-1 rounded">8n</code>,{" "}
            <code className="bg-gray-800 px-1 rounded">16n</code>). Default is <code className="bg-gray-800 px-1 rounded">4n</code>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">accentMap</h3>
          <p>
            An array of velocities (0-127) that correspond to the pattern. Use this to add dynamic accents to your clip.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">velocityMap</h3>
          <p>
            An array of velocities (0-127) that override the default velocity for each note in the pattern.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Using with Scales</h2>

      <div className="my-6">
        <CodeBlock code={clipWithScaleExample} />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Custom Subdivisions</h2>

      <div className="my-6">
        <CodeBlock code={clipWithSubdivExample} />
      </div>

      <p className="mt-6">
        The clip method is highly versatile and can be combined with other Scribbletune methods like{" "}
        <code className="bg-gray-800 px-1 rounded">scale</code>, <code className="bg-gray-800 px-1 rounded">chord</code>
        , and <code className="bg-gray-800 px-1 rounded">progression</code> to create complex musical ideas.
      </p>
    </div>
  )
}

