import React from 'react';
import CodeBlock from "@/components/code-block";

const ChordPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">chord</h1>
      <p className="mb-4">
        A chord is 2 (typically 3) or more notes that combine harmoniously. Scribbletune uses <a href="https://github.com/tonaljs/tonal" target="_blank" rel="noopener noreferrer">Tonal</a> as a dev dependency to create a simplified version of its chords in another module called <a href="https://github.com/scribbletune/harmonics" target="_blank" rel="noopener noreferrer">Harmonics</a>. This ensures a small footprint for music theory in Scribbletune.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Using Chords</h2>
      <p className="mb-4">
        Use chords by their commonly used names. For instance, here is a chord progression set up via chord names:
      </p>
      <CodeBlock code={`import { chords } from 'scribbletune';

// Get a list of all the available chords
const allChords = chords(); // Returns an array of all the available chords`} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Examples</h2>
      <p className="mb-4">
        Here’s how chords can be used in Scribbletune:
      </p>
      <CodeBlock code={`import { chord } from 'scribbletune';

// Get C Major (Major is denoted by M)
const cMajorChord = chord('C4 M'); // [ 'C4', 'E4', 'G4' ]

// Get the C Major chord on the 5th octave
const cMajorChord5 = chord('C5 M'); // [ 'C5', 'E5', 'G5' ]

// Get the C minor chord (denoted with a lowercase \`m\`)
const cMinorChord = chord('C4 m'); // [ 'C4', 'EB4', 'G4' ]`} />

      <h2 className="text-2xl font-bold mt-8 mb-4">List of Available Chords</h2>
      <p className="mb-4">
        Scribbletune uses Tonal behind the scenes to manage chords. However, it renames chords such as C5 and C13 to C5th and C13th to avoid confusion with notes. Here are some of the possible chords in Scribbletune:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>+add#9</li>
        <li>11th</li>
        <li>13th</li>
        <li>7b9</li>
        <li>m7</li>
        <li>M7#11</li>
        <li>sus4</li>
        {/* Add more chords as needed */}
      </ul>

      <p className="mt-6">
        For more details, visit the official documentation at <a href="https://scribbletune.com/documentation/core/chord" target="_blank" rel="noopener noreferrer">Scribbletune Chord Documentation</a>.
      </p>
    </div>
  );
};

export default ChordPage;