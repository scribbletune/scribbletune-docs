import React from 'react';
import CodeBlock from "@/components/code-block";

const DrumloopPage = () => (
  <div>
    <h1>Drum Loop with a Bassline</h1>
    <p>Scribbletune can be used to generate EDM beats that you’d otherwise point and click to create in a DAW.</p>
    <p>Here’s how you can create a kick drum pattern:</p>
    <CodeBlock code={`const kick = scribble.clip({
  notes: 'c4',
  pattern: 'xxxx'.repeat(7) + 'xxx[x[RR]]',
});

scribble.midi(kick, 'kick.mid');`} />
    <p>For hats, you can use:</p>
    <CodeBlock code={`const ch = scribble.clip({
  pattern: '[xR][[x[xR]]]'.repeat(16),
  notes: 'C4',
  sizzle: 'sin',
  sizzleReps: 32,
});

scribble.midi(ch, 'ch.mid');`} />
    <p>And for the bassline:</p>
    <CodeBlock code={`const bass = scribble.clip({
  notes: 'Bb2',
  pattern: '[-xRx][-xRR][-xRx][-xxR]'.repeat(2),
  randomNotes: scribble.scale('Bb2 minor').slice(1),
  accent: '--x-',
});

scribble.midi(bass, 'bass.mid');`} />
  </div>
);

export default DrumloopPage;
