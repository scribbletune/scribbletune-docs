import React from 'react';
import CodeBlock from "@/components/code-block";

const SessionPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">session</h1>
    <p className="my-4">Scribbletune can create a session that can contain multiple channels which can have a single clip or even multiple clips of musical ideas.</p>
    <p className="my-4 bg-black p-2 rounded">Note: tone.js must be loaded in the browser via SCRIPT tag before Scribbletune (or your compiled app - with Scribbletune) is loaded.</p>
    <p className="my-4">You can view this <a href="https://stackblitz.com/edit/scale-player-pv3ntv">stackblitz app</a> that uses React and Scribbletune to create a simple scale player in the browser.</p>
    <CodeBlock code={`const scribble = require('scribbletune/browser');
const session = new scribble.Session();`} />
    <p className="my-4">Now you can add channels to this session. Let’s add a channel with a kick drum sound.</p>
    <CodeBlock code={`session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: 'x' },
    { pattern: 'xxx[xx]' },
    { pattern: 'x' },
    { pattern: 'xxx[-x]' }
  ]
});`} />
    <p className="my-4">To play the second row in the session (which is the same as saying play the second clip in all channels):</p>
    <CodeBlock code={`session.startRow(1);`} />
    <p className="my-4">Make sure Tone is loaded in the browser and its Transport’s start method is initiated:</p>
    <CodeBlock code={`Tone.context.resume().then(() => Tone.Transport.start());`} />
  </div>
);

export default SessionPage;
