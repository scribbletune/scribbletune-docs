import React from "react";
import CodeBlock from "@/components/code-block";

const BeatPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Simple 4x4 beat in the browser</h1>
    <p className="lead mb-6">
      Scribbletune can be used to generate beats made from sampled sounds right
      in your browser
    </p>

    <div className="my-4">
      <button className="btnStartAll">&#9654;</button>
      <button className="btnStopAll">&#9632;</button>
    </div>
    <p className="my-4">Desktop browser only</p>

    <p className="my-4">
      As you can imagine, this can easily be done in any DAW but when you do it
      with JavaScript, you can get a little bit more out of your loops than
      simply pointing and clicking in a piano roll (which can be time consuming
      over time for simple beats). I’ll lay down the basics for the beat—you can
      use your creativity to make the patterns intricate.
    </p>
    <p className="my-4">
      We'll have a simple 4x4 kick drum along with a simple bass line, closed
      hat, open hats and a clap sound.
    </p>
    <p className="my-4">
      Since we are going to use sample wav files, we will depend on
      Scribbletune's <code>clip</code> method which allows us to use patterns.
      There are two aspects to Scribbletune: one is a Node module for exporting
      MIDI files, or you can use it directly in the browser, which we'll do
      here.
    </p>

    <h2 className="text-2xl font-semibold mt-8 my-4">Kick</h2>
    <p className="my-4">
      By default a single <code>x</code> implies a quarter note. Four of these
      make up the common kick drum pattern:
    </p>
    <CodeBlock
      code={`scribble.clip({
  pattern: 'xxxx', // simple 4x4 kick
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">Subdivide</h2>
    <p className="my-4">
      You can subdivide the last hit using square braces. For example `xxx[xx]`
      splits the 4th hit into two eighth notes:
    </p>
    <CodeBlock
      code={`scribble.clip({
  pattern: 'xxx[xx]',
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();`}
    />
    <p className="my-4">Nest braces for deeper subdivisions: `xxx[x[xx]]`</p>
    <CodeBlock
      code={`scribble.clip({
  pattern: 'xxx[x[xx]]',
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">Bass</h2>
    <p className="my-4">
      A common bassline uses a single low note on the third downbeat of a
      16-beat bar: `[-x]`
    </p>
    <CodeBlock
      code={`scribble.clip({
  pattern: '[-x]', // bass on every quarter note
  sample: 'https://scribbletune.com/sounds/bass.wav'
}).start();`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">All together now</h2>
    <p className="my-4">
      Bring in closed hats, open hats and a clap/snare to complete the loop:
    </p>
    <CodeBlock
      code={`// kick
scribble.clip({
  pattern: 'x',
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();

// bass
scribble.clip({
  pattern: '[-x]',
  sample: 'https://scribbletune.com/sounds/bass.wav'
}).start();

// closed hats
scribble.clip({
  pattern: '[xx][xx][xxx][xx]',
  sample: 'https://scribbletune.com/sounds/ch.wav'
}).start();

// open hats
scribble.clip({
  pattern: '[-x][-x][-x][xx]',
  sample: 'https://scribbletune.com/sounds/oh.wav'
}).start();

// clap/snare
scribble.clip({
  pattern: '-x',
  sample: 'https://scribbletune.com/sounds/snare.wav'
}).start();

// start transport
Tone.Transport.bpm.value = 135;
Tone.context.resume().then(() => Tone.Transport.start());`}
    />
  </div>
);

export default BeatPage;
