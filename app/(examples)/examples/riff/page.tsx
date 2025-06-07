import React from "react";
import CodeBlock from "@/components/code-block";
import PianoRoll from "@/components/ui/piano-roll";

const RiffPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Riff</h1>
    <p className="mb-4 text-lg md:text-xl leading-relaxed">
      A riff is a short, repeated musical phrase that forms the basis of a
      musical idea. In trance and other electronic music, riffs are often
      created by repeating a pattern of notes with some randomness.
    </p>
    <p className="my-4">
      Before we begin, here’s what we are going for in this article. It is a
      riff created with JavaScript and Scribbletune after importing it into a
      DAW alongside a kick and bass and some drums.
    </p>
    <div className="my-6">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535502394&amp;color=%23080404&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"
      ></iframe>
    </div>
    <p className="my-4">
      Here’s a video walkthrough of how what this article is all about and how
      to go about creating such riffs with or without Scribbletune.
    </p>
    <div className="my-6">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-eYCm-XIOdM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
    <p className="mb-4">
      This is a commonly used technique. You randomly click some of the steps in
      a 16 beat pattern and move them around while sticking to a particular
      scale. Then, on a lower octave, add notes to the missing steps on a
      particular key to act as the counter point notes. This works great and
      quickly creates a nice little riff that looks a bit like this,
    </p>
    <PianoRoll
      notes={["D4", "F4", "D4", "G4", "D4", "A4"]}
      pattern="x-x_xx-xx_x-xxx_"
    />

    <p className="my-4">
      Instead of doing it in a DAW, you can create a JavaScript function that
      does this and allow it to accept some things dynamically such as “key”,
      “scale” and “chord degrees” to use as the progression.
    </p>
    <h3 className="text-xl font-bold mt-8 mb-4">Pattern</h3>
    <p className="mb-4">
      Here’s how you can create a random pattern for a riff using Scribbletune:
    </p>
    <CodeBlock
      code={`const getRandomPattern = function (count) {
  let str = '[x-]R';
  for (let i = 1; i < (count || 8); i++) {
    str += Math.round(Math.random()) ? '[x-]R' : 'R[x-]';
  }
  return str;
};`}
    />

    <p className="mb-4">
      Here we are starting with{" "}
      <code className="bg-gray-800 px-1 rounded">[x-]R</code> as I would like to
      have the root note of our riff to have a “note on” event every time the
      riff starts. From then on, we are randomly alternating between{" "}
      <code className="bg-gray-800 px-1 rounded">[x-]R</code> and{" "}
      <code className="bg-gray-800 px-1 rounded">R[x-]</code> instead of{" "}
      <code className="bg-gray-800 px-1 rounded">[x-]</code> and{" "}
      <code className="bg-gray-800 px-1 rounded">R</code> to avoid creating a
      pattern that is too sparse. The reason we are using{" "}
      <code className="bg-gray-800 px-1 rounded">[x-]</code> instead of x is to
      subdivide that note so that the x plays for half it’s duration which could
      be interesting for the riff as I cannot do palm muting with JavaScript
      (yet). The function will produce something like,
    </p>
    <CodeBlock code={`[x-]RR[x-][x-]R[x-]R[x-]R[x-]R[x-]RR[x-]`}></CodeBlock>

    <h3 className="text-xl font-bold mt-8 mb-4">Random notes</h3>
    <p className="my-4">
      To make it more interesting, you can provide more notes to the{" "}
      <code>randomNotes</code> parameter:
    </p>
    <CodeBlock
      code={`randomNotes: scribble.arp(
  scribble.getChordsByProgression('D2 minor', 'ii iii')
)`}
    />

    <p className="my-4">Now, create a clip and set the notes to be used:</p>
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
      To take it up just one notch up, we could generate 2 clips, Clip A and
      Clip B. For Clip A, we will use the ii and iii chord degree and for Clip
      B, we’ll use the iii and v chord degree and then concatenate the clips in
      this order
    </p>
    <CodeBlock code={`Clip A + Clip A + Clip A + Clip B`}></CodeBlock>

    <p className="my-4">
      To see the complete script so far,{" "}
      <a
        className="text-blue-400 hover:underline"
        href="https://gist.github.com/walmik/f3d2a0557810c68fa2e40ecff9f32343"
        target="blank"
      >
        click here
      </a>
      . For reference, here’s the earlier sample constructed using this
      approach. I used Sylenth1 for the riff itself.
    </p>
    <div className="my-6">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/535502394&amp;color=%23080404&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false"
      ></iframe>
    </div>

    <p className="my-4">
      You can experiment with different note values, patterns, and randomization
      to create your own unique riffs!
    </p>
  </div>
);

export default RiffPage;
