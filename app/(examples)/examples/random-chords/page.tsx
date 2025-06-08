import React from "react";
import CodeBlock from "@/components/code-block";

const RandomChordsPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Random Chords</h1>
    <p className="lead my-4">
      If you randomly pick 2 or 3 notes from a scale or mode, you’ll end up
      creating random chords. They won’t necessarily sound good, but since we
      will use JavaScript for this, we can generate a bunch of chord
      progressions and tweak something that we like from that bunch. We will use{" "}
      <a href="https://lodash.com/" className="text-blue-500 hover:underline">
        lodash
      </a>{" "}
      for the random picking.
    </p>

    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/872748478&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
      className="my-4"
    ></iframe>
    <br />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/cCOElYQ1RzY"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="my-4"
    ></iframe>

    <h5 className="text-xl font-semibold my-4">Write your own script</h5>
    <p className="my-4">
      We will create a new file called <code>random-chords.js</code> and start
      by importing our dependencies.
    </p>
    <CodeBlock
      code={`const _ = require('lodash');
const scribble = require('scribbletune');`}
    />

    <p className="my-4">
      For the set of notes, we’ll start with the C major scale and a simple
      pattern:
    </p>
    <CodeBlock
      code={`const setOfNotes = scribble.scale('C3 major');
const pattern = 'x___'.repeat(4);`}
    />

    <p className="my-4">
      Now we need to get the count of <code>x</code> in this pattern so that we
      can generate that many random chords.
    </p>
    <CodeBlock code={`const count = pattern.replace(/[^x]/g, '').length;`} />

    <p className="my-4">
      Next, we’ll randomly pick 3 notes from our set for each <code>x</code>:
    </p>
    <CodeBlock
      code={`const notes = [];
for (let i = 0; i < count; i++) {
  notes.push(_.sampleSize([...setOfNotes], 3));
}`}
    />

    <p className="my-4">
      And that should be good enough to produce our MIDI file:
    </p>
    <CodeBlock
      code={`scribble.midi(
  scribble.clip({
    notes,
    pattern,
  })
);`}
    />

    <p className="my-4">
      Finally, execute this file in your terminal with Node.js:
    </p>
    <CodeBlock code={`node random-chords.js`} />

    <h5 className="text-xl font-semibold my-4">Ready to roll</h5>
    <p className="my-4">
      You can use any DAW to do the rest of the steps. I use Ableton Live and a
      bunch of fancy third-party VSTs, hence I created a group instrument
      combining Jupiter 8 V3 and Hive 2. On rendering the MIDI it sounded like
      this:
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/872747692&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
      className="my-4"
    ></iframe>
  </div>
);

export default RandomChordsPage;
