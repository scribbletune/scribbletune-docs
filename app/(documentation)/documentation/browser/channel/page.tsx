import React from "react";
import CodeBlock from "@/components/code-block";

const ChannelPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Channel</h1>
    <p className="lead mb-6">
      Scribbletune creates channels that can contain multiple clips.
    </p>
    <p className="highlight my-4">
      <strong>Note:</strong> tone.js must be loaded in the browser via SCRIPT
      tag before Scribbletune (or your compiled app - with Scribbletune) is
      loaded.
    </p>
    <p className="my-4">
      Before you can create a channel, you must create a{" "}
      <a
        href="/documentation/browser/session"
        className="text-blue-500 hover:underline"
      >
        session
      </a>
      .
    </p>
    <CodeBlock
      code={`const scribble = require('scribbletune/browser');
const session = new scribble.Session();`}
    />
    <p className="my-4">
      You can either pass an array of channels to that or you can add them
      individually.
    </p>
    <CodeBlock
      code={`const kickChannel = session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: 'x' },
    { pattern: 'xxx[xx]' },
    { pattern: 'x' },
    { pattern: 'xxx[-x]' }
  ]
});

const bassChannel = session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: '[-x]' },
    { pattern: '[--xx]' },
    { pattern: '[-xxx]' },
    { pattern: 'xxx' }
  ]
});`}
    />
    <p className="my-4">
      Apart from <code>sample</code> you could also provide an array as{" "}
      <code>samples</code>, or provide a <code>synth</code> property to use a
      Tone.js synth:
    </p>
    <CodeBlock
      code={`const synthChannel = session.createChannel({
  synth: 'PolySynth',
  clips: [
    { pattern: '[-x]', notes: 'C4 D#4' },
    { pattern: '[--xx]', notes: 'C4 Cm-4' },
    { pattern: '[-xxx]', notes: ['E4', 'D#4'] },
    { pattern: 'xxx', notes: scribble.scale('C minor') }
  ]
});`}
    />

    <h2 className="text-2xl font-semibold mt-8 my-4">Methods</h2>
    <p className="my-4">Play or stop a particular clip:</p>
    <CodeBlock code={`bassChannel.startClip(2);`} />
    <CodeBlock code={`bassChannel.stopClip(2);`} />

    <p className="my-4">Add a new clip at a specific index:</p>
    <CodeBlock
      code={`const params = { pattern: 'xx[xx]' };
bassChannel.addClip(params, 4);`}
    />

    <p className="my-4">Get the index of the currently active clip:</p>
    <CodeBlock code={`bassChannel.activeClipIdx;`} />
  </div>
);

export default ChannelPage;
