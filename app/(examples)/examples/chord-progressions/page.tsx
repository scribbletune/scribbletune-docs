import React from 'react';
import Link from "next/link"
import CodeBlock from "@/components/code-block";

const ChordProgressionsPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Chord Progressions</h1>
    <p className="my-4">Scribbletune can be used to generate chord progressions based on basic music theory.</p>
    <CodeBlock code={`const scribble = require('scribbletune');
console.log(scribble.progression('M')); // outputs an array, e.g. ['I', 'ii', 'iii', 'V']`} />
    <p className="my-4">We can use Scribbletune’s <code>getChordsByProgression</code> method to generate the chords from this progression:</p>
    <CodeBlock code={`const scribble = require('scribbletune');
const majorChordProgression = scribble.progression('M').join(' ');
console.log(scribble.getChordsByProgression('C4 major', majorChordProgression)); // outputs something like 'Am-4 Dm-4 Dm-4 GM-4'`} />
    <p className="my-4">Taking this one step ahead, we can now use the chords we generate along with Scribbletune’s <code>arp</code> method and patterns with the <code>R</code> character to create nice sounding arpeggios!</p>
    <CodeBlock code={`const scribble = require('scribbletune');
const progMinor = progression('m').join(' ');
const c = scribble.clip({
  notes: 'D3',
  pattern: '[x-RR]'.repeat(16), // R will play notes from our progression
  randomNotes: scribble.arp({
    chords: scribble.getChordsByProgression('D4 minor', progMinor),
    count: 4,
    order: '1032',
  }),
});

scribble.midi(c, 'prog.mid');`} />
    {/* <div className="mt-12 p-6 bg-gray-800/50 rounded-lg">
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
          <Link href="/documentation/core/progression" className="text-blue-400 hover:underline">
            Exploring the full progression API
          </Link>
        </li>
      </ul>
    </div> */}
  </div>
);

export default ChordProgressionsPage;
