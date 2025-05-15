import React from 'react';
import CodeBlock from '@/components/code-block';

const ScalePage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">scale</h1>
    <p className="mb-4">A scale is a set of musical notes ordered by pitch. Scribbletune uses <a href="https://github.com/danigb/tonal">tonal</a> as a dev dependency to create a dumbed down version of its scales in another node module called <a href="https://github.com/scribbletune/harmonics">harmonics</a> and uses that as a dependency of Scribbletune (this is done so as to have a very small footprint in Scribbletune for the music theory).</p>
    <CodeBlock code={`const scribble = require('scribbletune');

// Get the C major scale
let cMajor = scribble.scale('C4 major'); // [ 'C4', 'D4', 'E4' ... ]

// That's the same as
cMajor = scribble.scale('C4 ionian'); // [ 'C4', 'D4', 'E4', 'F4' ...]

// Create a clip that plays this C major scale
const clip = scribble.clip({
  notes: cMajor,
  pattern: 'xxxxxxx',
});

// Export this clip as a MIDI file
scribble.midi(clip, 'c-major.mid');`} />
    <p className="mb-4">Scales are also exposed as modes.</p>
    <CodeBlock code={`let cMinor = scribble.mode('C4 aeolian'); // [ 'C4', 'D4', 'D#4', 'F4' ...]`} />
    <p className="mb-4">You can list all the available scales by invoking <code>scales</code> or <code>modes</code> method.</p>
    <CodeBlock code={`const allScales = scribble.scales();`} />

    <h2 className="text-2xl font-bold mt-8 mb-4">List of available scales</h2>
    <ul className="list-disc pl-6 space-y-1">
      <li>aeolian</li>
      <li>altered</li>
      <li>augmented</li>
      <li>augmented heptatonic</li>
      <li>balinese</li>
      <li>bebop</li>
      <li>bebop dominant</li>
      <li>bebop locrian</li>
      <li>bebop major</li>
      <li>bebop minor</li>
      <li>chromatic</li>
      <li>composite blues</li>
      <li>diminished</li>
      <li>dorian</li>
      <li>dorian #4</li>
      <li>double harmonic lydian</li>
      <li>double harmonic major</li>
      <li>egyptian</li>
      <li>enigmatic</li>
      <li>flamenco</li>
      <li>flat six pentatonic</li>
      <li>flat three pentatonic</li>
      <li>half-whole diminished</li>
      <li>harmonic major</li>
      <li>harmonic minor</li>
      <li>hirajoshi</li>
      <li>hungarian major</li>
      <li>hungarian minor</li>
      <li>ichikosucho</li>
      <li>in-sen</li>
      <li>ionian augmented</li>
      <li>ionian pentatonic</li>
      <li>iwato</li>
      <li>kafi raga</li>
      <li>kumoijoshi</li>
      <li>leading whole tone</li>
      <li>locrian</li>
      <li>locrian #2</li>
      <li>locrian major</li>
      <li>locrian pentatonic</li>
      <li>lydian</li>
      <li>lydian #5P pentatonic</li>
      <li>lydian #9</li>
      <li>lydian augmented</li>
      <li>lydian diminished</li>
      <li>lydian dominant</li>
      <li>lydian dominant pentatonic</li>
      <li>lydian minor</li>
      <li>lydian pentatonic</li>
      <li>major</li>
      <li>major blues</li>
      <li>major flat two pentatonic</li>
      <li>major pentatonic</li>
      <li>malkos raga</li>
      <li>melodic minor</li>
      <li>melodic minor fifth mode</li>
      <li>melodic minor second mode</li>
      <li>minor #7M pentatonic</li>
      <li>minor bebop</li>
      <li>minor blues</li>
      <li>minor hexatonic</li>
      <li>minor pentatonic</li>
      <li>minor six diminished</li>
      <li>minor six pentatonic</li>
      <li>mixolydian</li>
      <li>mixolydian pentatonic</li>
      <li>mystery #1</li>
      <li>neopolitan</li>
      <li>neopolitan major</li>
      <li>neopolitan major pentatonic</li>
      <li>neopolitan minor</li>
      <li>oriental</li>
      <li>pelog</li>
      <li>persian</li>
      <li>phrygian</li>
      <li>phrygian dominant</li>
      <li>piongio</li>
      <li>prometheus</li>
      <li>prometheus neopolitan</li>
      <li>purvi raga</li>
      <li>ritusen</li>
      <li>romanian minor</li>
      <li>scriabin</li>
      <li>six tone symmetric</li>
      <li>spanish heptatonic</li>
      <li>super locrian pentatonic</li>
      <li>todi raga</li>
      <li>vietnamese 1</li>
      <li>vietnamese 2</li>
      <li>whole tone</li>
      <li>whole tone pentatonic</li>
    </ul>
  </div>
);

export default ScalePage;
