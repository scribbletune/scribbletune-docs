import React from 'react';
import CodeBlock from "@/components/code-block";

const RandomChordsPage = () => (
  <div>
    <h1>Random Chords</h1>
    <p>If you randomly pick 2 or 3 notes from a scale or mode, you’ll end up creating random chords. They won’t necessarily sound good, but you can generate a bunch of chord progressions and tweak something that you like from that bunch.</p>
    <CodeBlock code={`const _ = require('lodash');
const scribble = require('scribbletune');

const setOfNotes = scribble.scale('C3 major');
const pattern = 'x___'.repeat(4);
const count = pattern.replace(/[^x]/g, '').length;

const notes = [];
for (let i = 0; i < count; i++) {
  notes.push(_.sampleSize([...setOfNotes], 3));
}

scribble.midi(
  scribble.clip({
    notes,
    pattern,
  })
);`} />
    <p>Execute this file in your terminal with Node.js:</p>
    <CodeBlock code={`node random-chords.js`} />
  </div>
);

export default RandomChordsPage;
