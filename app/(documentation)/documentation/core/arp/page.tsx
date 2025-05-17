import React from "react";
import CodeBlock from "@/components/code-block";

const ArpPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">arp (arpeggiate)</h1>
    <p className="mb-4 text-lg md:text-xl leading-relaxed">
      Scribbletune can generate arpeggios from chords.
    </p>
    <p className="mb-4">
      You can set the order of the notes in the arpeggiator and the count of
      notes in it.
    </p>
    <CodeBlock
      code={`const scribble = require('scribbletune');

const c = scribble.clip({
  notes: scribble.arp('CM FM CM GM'),
  pattern: 'x'.repeat(32)
});

scribble.midi(c, 'arp.mid');`}
    />
    <p className="mb-4">
      This will create a MIDI clip with the notes of the chord progression in an
      arpeggiated format where each note is a quarter note. You can change this
      by setting a property called <code>subdiv</code>.
    </p>
    <CodeBlock code={`subdiv: '16n'`} />
    <p className="mb-4">
      Now it plays a bit faster as we set the default duration of each note to
      sixteenth notes. By default, the <code>arp</code> method uses 4 notes per
      arpeggio and it plays those notes from 0 to 3. But you can change that, as
      the <code>arp</code> method also accepts an object as its argument instead
      of a <code>String</code>.
    </p>
    <CodeBlock
      code={`const scribble = require('scribbletune');

  const notesArr = scribble.arp({
  chords: 'Cm Fm Cm Fm Cm Gm Cm DM',
  count: 3,
  order: '102'
});

const c = scribble.clip({
  notes: notesArr,
  pattern: 'x-x_'.repeat(notesArr.length/2),
  subdiv: '16n'
});

scribble.midi(c, 'arp.mid');`}
    />

    <p className="my-4">
      This will create a midi file called "arp.mid" at the same location as you
      run this script with `node` and it will arpeggiate the triads Cm, Fm, Cm,
      Fm, Cm, Gm, Cm and DM chords each with 3 notes in them ordered as 1 0 2.
      So if the first arpeggio (for Cm) was C4 D#4 G4 then the order of these
      notes would be 1 0 2, which is D#4 C4 G4
    </p>

    <p className="mb-4">
      Here's how it sounded when I imported the MIDI file it produced into
      Ableton Live
    </p>

    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/517314963&color=%232e2e2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
    ></iframe>

    <p className="my-4">
      You can use this in the browser as well. Just make sure to pull in Tone.js
      first however!
    </p>
  </div>
);

export default ArpPage;
