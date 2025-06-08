import React from "react";
import CodeBlock from "@/components/code-block";

const DrumloopPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Drum loop with a bassline</h1>
    <p className="lead mb-6">
      Scribbletune can be used to generate EDM beats that you'd otherwise point
      and click to create in a DAW
    </p>
    <p className="my-4">
      Before we go on, here's a sample of what we are gonna end up creating
      using Scribbletune.
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653204363&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      className="mb-6"
    ></iframe>

    <p className="my-4">
      In many EDM genres, there is a monotonous kick for 8 bars with a small
      variation at the end. You can script this variation instead of tweaking
      notes manually.
    </p>

    <h2 className="text-2xl font-semibold mt-8 my-4">Kick</h2>
    <p className="my-4">
      By default a single <code>x</code> implies a quarter note. Four of these
      make the common kick pattern:
    </p>
    <CodeBlock code={`const ptn = 'xxxx';`} />
    <p className="my-4">
      Eight bars would be <code>'xxxx'.repeat(8)</code>, but we'll do seven and
      vary the eighth:
    </p>
    <CodeBlock code={`const ptn = 'xxxx'.repeat(7);`} />
    <p className="my-4">Define the ending-bar variations:</p>
    <CodeBlock
      code={`const A = 'xxx[x[RR]]';
const B = 'xx[x[RR]][x[RR]]';
const C = 'x-[x[RR]]';`}
    />
    <p className="my-4">
      Use <code>R</code> for random on/off events and square braces for extra
      subdivisions.
    </p>
    <p className="my-4">Compose the full kick clip:</p>
    <CodeBlock
      code={`const kick = scribble.clip({
  notes: 'c4',
  pattern: ptn + A + ptn + B + ptn + A + ptn + C,
});`}
    />
    <p className="my-4">Export as MIDI:</p>
    <CodeBlock code={`scribble.midi(kick, 'kick.mid');`} />

    <h2 className="text-2xl font-semibold mt-8 my-4">Hats</h2>
    <p className="my-4">Closed and open hats with random subdivisions:</p>
    <CodeBlock
      code={`const ch = scribble.clip({
  pattern: '[xR][[x[xR]]]'.repeat(16),
  notes: 'C4',
  sizzle: 'sin',
  sizzleReps: 32,
});
scribble.midi(ch, 'ch.mid');

const oh = scribble.clip({
  notes: 'C4',
  pattern: '[-x][Rx][Rx][Rx]'.repeat(8),
});
scribble.midi(oh, 'oh.mid');`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">Snare</h2>
    <p className="my-4">
      A common snare loop with slight end-of-bar variation:
    </p>
    <CodeBlock
      code={`const D = '-x-x'; // base pattern
const E = '-[xR]-[Rx]'; // variation
const snare = scribble.clip({
  notes: 'C4',
  pattern: (D + D + E + D + D + E + D + D).repeat(4),
});
scribble.midi(snare, 'snare.mid');`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">Bassline</h2>
    <p className="my-4">Two-part bass using randomNotes from scales:</p>
    <CodeBlock
      code={`const bass = scribble.clip({
  notes: 'Bb2',
  pattern: '[-xRx][-xRR][-xRx][-xxR]'.repeat(2),
  randomNotes: scribble.scale('Bb2 minor').slice(1),
  accent: '--x-',
});

const bassEnd = scribble.clip({
  notes: 'G#2',
  pattern: '[-xRx][-xRR][-xRx][-xxR]'.repeat(2),
  randomNotes: scribble.scale('Bb2 harmonic minor').slice(2, 5),
  accent: '--x-',
});

scribble.midi(bass.concat(bassEnd), 'bass.mid');`}
    />

    <p className="my-4">This script now produces five MIDI files:</p>
    <ul className="list-disc pl-6 my-4">
      <li>kick.mid</li>
      <li>ch.mid</li>
      <li>oh.mid</li>
      <li>snare.mid</li>
      <li>bass.mid</li>
    </ul>

    <p className="my-4">
      I imported these into Ableton Live and rendered them with samples; here's
      how it sounds:
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653204363&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      className="mb-6"
    ></iframe>
  </div>
);

export default DrumloopPage;
