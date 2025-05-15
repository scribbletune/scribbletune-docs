import React from 'react';
import CodeBlock from '@/components/code-block';

const ArpPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">arp (arpeggiate)</h1>
    <p className="mb-4">Scribbletune can generate arpeggios from chords. You can set the order of the notes in the arpeggiator and the count of notes in it.</p>
    <CodeBlock code={`const scribble = require('scribbletune');

const c = scribble.clip({
  notes: scribble.arp('CM FM CM GM'),
  pattern: 'x'.repeat(32)
});

scribble.midi(c, 'arp.mid');`} />
    <p className="mb-4">This will create a MIDI clip with the notes of the chord progression in an arpeggiated format where each note is a quarter note. You can change this by setting a property called <code>subdiv</code>.</p>
    <CodeBlock code={`subdiv: '16n'`} />
    <p className="mb-4">By default, the <code>arp</code> method uses 4 notes per arpeggio and it plays those notes from 0 to 3. But you can change that, as the <code>arp</code> method also accepts an object as its argument instead of a <code>String</code>.</p>
    <CodeBlock code={`const notesArr = scribble.arp({
  chords: 'Cm Fm Cm Fm Cm Gm Cm DM',
  count: 3,
  order: '102'
});

const c = scribble.clip({
  notes: notesArr,
  pattern: 'x-x_'.repeat(notesArr.length/2),
  subdiv: '16n'
});

scribble.midi(c, 'arp.mid');`} />
  </div>
);

export default ArpPage;
