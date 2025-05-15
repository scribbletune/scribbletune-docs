import React from 'react';
import CodeBlock from '@/components/code-block';

const ScalePage = () => (
  <div>
    <h1>Scale</h1>
    <p>A scale is a set of musical notes ordered by pitch. Scribbletune uses <a href="https://github.com/danigb/tonal">tonal</a> as a dev dependency to create a dumbed down version of its scales in another node module called <a href="https://github.com/scribbletune/harmonics">harmonics</a> and uses that as a dependency of Scribbletune (this is done so as to have a very small footprint in Scribbletune for the music theory).</p>
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
    <p>Scales are also exposed as modes.</p>
    <CodeBlock code={`let cMinor = scribble.mode('C4 aeolian'); // [ 'C4', 'D4', 'D#4', 'F4' ...]`} />
    <p>You can list all the available scales by invoking <code>scales</code> or <code>modes</code> method.</p>
    <CodeBlock code={`const allScales = scribble.scales(); // returns an array of all the available scales from tonal`} />
  </div>
);

export default ScalePage;
