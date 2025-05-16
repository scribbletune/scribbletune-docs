import React from 'react';
import CodeBlock from "@/components/code-block";

const BeatPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Simple 4x4 Beat in the Browser</h1>
    <p className="my-4">Scribbletune can be used to generate beats made from sampled sounds right in your browser.</p>
    <p className="my-4">Here’s how you can create a simple 4x4 kick drum pattern:</p>
    <CodeBlock code={`scribble.clip({
  pattern: 'xxxx',
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();`} />
    <p className="my-4">To subdivide the last note, you can use square braces:</p>
    <CodeBlock code={`scribble.clip({
  pattern: 'xxx[xx]',
  sample: 'https://scribbletune.com/sounds/kick.wav'
}).start();`} />
    <p className="my-4">Finally, bring it all together with hats, bass, and snare:</p>
    <CodeBlock code={`// kick
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

Tone.Transport.bpm.value = 135;
Tone.context.resume().then(() => Tone.Transport.start());`} />
  </div>
);

export default BeatPage;
