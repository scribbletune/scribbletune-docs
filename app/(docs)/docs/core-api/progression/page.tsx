import React from 'react';
import CodeBlock from '@/components/code-block';

const ProgressionPage = () => (
  <div>
    <h1>Chord Progressions</h1>
    <p>Scribbletune generates common chord progressions for the given key.</p>
    <CodeBlock code={`const scribble = require('scribbletune');

const majorChordProgression = scribble.progression('M');
const minorChordProgression = scribble.progression('m', 8);

console.log(majorChordProgression); // something like [ 'I', 'ii', 'ii', 'V' ]
console.log(minorChordProgression);  // something like [ 'i', 'VI', 'ii', 'V', 'ii', 'iv', 'iv', 'V', 'V' ]`} />
    <p><code>getChordsByProgression</code> works toward translating chord degrees to actual chords for the given scale and root note.</p>
    <CodeBlock code={`const c = scribble.clip({
  notes: scribble.getChordsByProgression('C4 major', 'I IV V ii'),
  pattern: 'x_'.repeat(4) + 'x_______'
});

scribble.midi(c, 'chords.mid');`} />
  </div>
);

export default ProgressionPage;
