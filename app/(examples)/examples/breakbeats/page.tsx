import React from 'react';
import CodeBlock from "@/components/code-block";

const BreakbeatsPage = () => (
  <div>
    <h1>Classic Breakbeats</h1>
    <p>Scribbletune can be used to generate classic breakbeats with slight variations each time they are generated.</p>
    <p>Here’s an example pattern for “The Funky Drummer”:</p>
    <CodeBlock code={`{
  kick: 'x-x---x---x--x-x',
  snare: '----x--x-x-xx--x',
  ch: 'xxxxxxx-xxxxx-xx',
  oh: '-------x-----x-x',
}`} />
    <p>To add variation, you can use the <code>R</code> feature of Scribbletune patterns:</p>
    <CodeBlock code={`const funkyDrummer = {
  kick: 'x-x---x---x--x-R',
  snare: '----x--x-[xR]-xx--[xR]',
  ch: 'xxxxxx[xR]-xxxxx-x[x[RR]]',
  oh: '-------[xR]-----x-R',
};`} />
    <p>Finally, render the MIDI files:</p>
    <CodeBlock code={`for (const p in funkyDrummer) {
  scribble.midi(
    scribble.clip({
      pattern: funkyDrummer[p].repeat(4),
      notes: 'C4',
      subdiv: '16n',
    }),
    'funkyDrummer_' + p + '.mid'
  );
}`} />
  </div>
);

export default BreakbeatsPage;
