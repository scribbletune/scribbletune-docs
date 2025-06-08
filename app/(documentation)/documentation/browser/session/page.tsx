import React from "react";
import CodeBlock from "@/components/code-block";

const SessionPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Session</h1>
    <p className="lead mb-6">
      Scribbletune can create a session that can contain multiple channels which
      can have a single clip or even multiple clips of musical ideas.
    </p>
    <p className="highlight my-4">
      <strong>Note:</strong> tone.js must be loaded in the browser via SCRIPT
      tag before Scribbletune (or your compiled app - with Scribbletune) is
      loaded.
    </p>
    <p className="my-4">
      You can view this{" "}
      <a
        href="https://stackblitz.com/edit/scale-player-pv3ntv"
        className="text-blue-500 hover:underline"
      >
        stackblitz app
      </a>{" "}
      that uses React and Scribbletune to create a simple scale player in the
      browser.
    </p>
    <p className="my-4">
      A session is a simplistic example of{" "}
      <a
        href="https://www.ableton.com/en/manual/session-view/"
        className="text-blue-500 hover:underline"
      >
        Ableton Live's session view
      </a>
      . Scribbletune provides just a basic interface to simulate something like
      that. Here's a{" "}
      <a
        href="http://live.scribbletune.com/"
        className="text-blue-500 hover:underline"
      >
        cool browser app
      </a>{" "}
      built using this interface, and{" "}
      <a
        href="https://github.com/scribbletune/live"
        className="text-blue-500 hover:underline"
      >
        this is the repo
      </a>
      .
    </p>

    <CodeBlock
      code={`const scribble = require('scribbletune/browser');
const session = new scribble.Session();`}
    />

    <p className="my-4">
      Now you can add channels. Here's a kick drum channel:
    </p>
    <CodeBlock
      code={`session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: 'x' },
    { pattern: 'xxx[xx]' },
    { pattern: 'x' },
    { pattern: 'xxx[-x]' }
  ]
});`}
    />

    <p className="my-4">And a bass channel:</p>
    <CodeBlock
      code={`session.createChannel({
  sample: 'https://scribbletune.com/sounds/kick.wav',
  clips: [
    { pattern: '[-x]' },
    { pattern: '[--xx]' },
    { pattern: '[-xxx]' },
    { pattern: 'xxx' }
  ]
});`}
    />

    <p className="my-4">To play the second row (clip) in all channels:</p>
    <CodeBlock code={`session.startRow(1);`} />

    <p className="my-4">
      As always, make sure Tone is loaded and its Transport is started:
    </p>
    <CodeBlock
      code={`Tone.context.resume().then(() => Tone.Transport.start());`}
    />

    <p className="my-4">Get a list of channels:</p>
    <CodeBlock code={`session.channels;`} />
  </div>
);

export default SessionPage;
