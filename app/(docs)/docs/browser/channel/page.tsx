import React from 'react';
import CodeBlock from "@/components/code-block";

const ChannelPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">channel</h1>
    <p className="my-4">Scribbletune creates channels that can contain multiple clips.</p>
    <p className="my-4 bg-black p-2 rounded">Note: tone.js must be loaded in the browser via SCRIPT tag before Scribbletune (or your compiled app - with Scribbletune) is loaded.</p>
    <p className="my-4">Before you can create a channel, you must create a <a href="https://scribbletune.com/documentation/browser/session">session</a>.</p>
    <CodeBlock code={`const scribble = require('scribbletune/browser');
const session = new scribble.Session();`} />
    <p className="my-4">You can either pass an array of channels to that or you can add them individually.</p>
    <CodeBlock code={`const kickChannel = session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: 'x' },
    { pattern: 'xxx[xx]' },
    { pattern: 'x' },
    { pattern: 'xxx[-x]' }
  ]
});`} />
    <p className="my-4">To play an individual clip on the channel:</p>
    <CodeBlock code={`kickChannel.startClip(2);`} />
    <p className="my-4">To stop a particular clip:</p>
    <CodeBlock code={`kickChannel.stopClip(2);`} />
    <p className="my-4">To add more clips to an existing channel:</p>
    <CodeBlock code={`const params = { pattern: 'xx[xx]'};
kickChannel.addClip(params, 4);`} />
  </div>
);

export default ChannelPage;
