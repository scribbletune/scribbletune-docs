import React from "react";
import CodeBlock from "@/components/code-block";

const RiffPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Riff</h1>
    <p className="mb-4 text-lg md:text-xl leading-relaxed">
      Scribbletune can be used to generate a commonly used pattern for riffs in
      trance music.
    </p>
    <p className="my-4">
      Here’s how you can create a random pattern for a riff:
    </p>
    <CodeBlock
      code={`const getRandomPattern = function (count) {
  let str = '[x-]R';
  for (let i = 1; i < (count || 8); i++) {
    str += Math.round(Math.random()) ? '[x-]R' : 'R[x-]';
  }
  return str;
}`}
    />
    <p className="my-4">Next, create a clip and set the notes to be used:</p>
    <CodeBlock
      code={`const clip = scribble.clip({
  notes: 'D2',
  randomNotes: 'D3',
  pattern: getRandomPattern(),
  subdiv: '16n',
});

scribble.midi(clip, 'riff.mid');`}
    />
    <p className="my-4">
      To make it more interesting, you can provide more notes to the{" "}
      <code>randomNotes</code> parameter:
    </p>
    <CodeBlock
      code={`randomNotes: scribble.arp(
  scribble.getChordsByProgression('D2 minor', 'ii iii')
)`}
    />
  </div>
);

export default RiffPage;
