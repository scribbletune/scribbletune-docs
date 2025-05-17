import React from "react";
import CodeBlock from "@/components/code-block";

const ProgressionPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">progression</h1>
    <p className="mb-4 text-lg md:text-xl leading-relaxed">
      Scribbletune generates common chord progressions for the given key
    </p>
    <p className="mb-4">
      This is an experimental feature. As of now it supports providing chord
      progressions for major and minor scales only based on the theory that the
      progression must start from the Tonic, optionally move to the PreDominant
      or SubDominant and then the Dominant. Randomly it will move from Dominant
      to PreDominant and then back to Dominant.
    </p>
    <CodeBlock
      code={`const scribble = require('scribbletune');

const majorChordProgression = scribble.progression('M');
const minorChordProgression = scribble.progression('m', 8);

// the following will output something like [ 'I', 'ii', 'ii', 'V' ]
console.log(majorChordProgression);

// the following will output something like [ 'i', 'VI', 'ii', 'V', 'ii', 'iv', 'iv', 'V', 'V' ]
console.log(minorChordProgression);`}
    />
    <h4 className="my-4 text-1xl font-bold">getChordsByProgression</h4>
    <p className="my-4">
      <code>getChordsByProgression</code> works toward translating chord degrees
      to actual chords for the given scale and root note.
    </p>
    <CodeBlock
      code={`const c = scribble.clip({
  notes: scribble.getChordsByProgression('C4 major', 'I IV V ii'),
  pattern: 'x_'.repeat(4) + 'x_______'
});

scribble.midi(c, 'chords.mid');`}
    />
    <p className="my-4">
      You can even get chord degrees for select scales/modes:
    </p>
    <CodeBlock
      code={`// the following outputs [ 'i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII' ]        
console.log(scribble.getChordDegrees('minor')); `}
    />

    <p className="my-4">
      You can even get chord degrees for the following scales/modes:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>ionian/major</li>
      <li>dorian</li>
      <li>phrygian</li>
      <li>lydian</li>
      <li>mixolydian</li>
      <li>aeolian/minor</li>
      <li>locrian</li>
      <li>melodic minor</li>
      <li>harmonic minor</li>
    </ul>
  </div>
);

export default ProgressionPage;
