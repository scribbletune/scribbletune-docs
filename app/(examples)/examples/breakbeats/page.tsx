import React from "react";
import CodeBlock from "@/components/code-block";

const BreakbeatsPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">Classic breakbeats</h1>
    <p className="lead mb-6">
      Scribbletune can be used to generate classic breakbeats with slight
      variations each time they are generated.
    </p>
    <p className="my-4">
      Before we go on, here's a sample of what we are gonna end up creating
      using Scribbletune.
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653692301&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      className="mb-6"
    ></iframe>

    <p className="my-4">
      I am always on the lookout for patterns that I can use in Scribbletune and
      I came across this really nice{" "}
      <a
        href="https://docs.google.com/spreadsheets/d/19_3BxUMy3uy1Gb0V8Wc-TcG7q16Amfn6e8QVw4-HuD0/edit#gid=0"
        className="text-blue-500 hover:underline"
      >
        spreadsheet
      </a>{" "}
      made public by the illustrious{" "}
      <a
        href="http://www.ethanhein.com/wp/"
        className="text-blue-500 hover:underline"
      >
        Ethan Hein
      </a>
      !
    </p>

    <p className="my-4">
      I used the filled cells in the spreadsheet to identify the down beats we
      need for a kick, snare, closed hats and an open hats part. This is how it
      would look if we transposed them to Scribbletune's minimalistic pattern
      language:
    </p>
    <CodeBlock
      code={`{
  kick: 'x-x---x---x--x-x',
  snare: '----x--x-x-xx--x',
  ch: 'xxxxxxx-xxxxx-xx',
  oh: '-------x-----x-x',
};`}
    />

    <p className="my-4">
      Let's use this in a new script called <code>drum-patterns.js</code> and
      make these a bit more interesting by adding some occasional variation.
    </p>
    <CodeBlock
      code={`const scribble = require('scribbletune');

const funkyDrummer = {
  kick: 'x-x---x---x--x-R',
  snare: '----x--x-[xR]-xx--[xR]',
  ch: 'xxxxxx[xR]-xxxxx-x[x[RR]]',
  oh: '-------[xR]-----x-R',
};`}
    />

    <p className="my-4">
      I added the <code>R</code> feature of Scribbletune patterns to randomly
      decide a MIDI note on OR off event. The square braces will subdivide the
      note further to create an interesting pattern.
    </p>

    <p className="my-4">
      Next, we will use the <code>clip</code> method on each of these and render
      a MIDI file with Scribbletune's <code>midi</code> method. Since the
      spreadsheet uses sixteenth notes, let's set the <code>subdiv</code> to{" "}
      <code>16n</code> and repeat each pattern 4 times to get 4 bars:
    </p>
    <CodeBlock
      code={`for (const p in funkyDrummer) {
  scribble.midi(
    scribble.clip({
      pattern: funkyDrummer[p].repeat(4), // Repeat the pattern to get 4 bars
      notes: 'C4',
      subdiv: '16n',
    }),
    'funkyDrummer_' + p + '.mid' // Name your MIDI file
  );
}`}
    />

    <p className="my-4">This script will produce the following MIDI files:</p>
    <ul className="list-disc pl-6 my-4">
      <li>funkyDrummer_kick.mid</li>
      <li>funkyDrummer_snare.mid</li>
      <li>funkyDrummer_ch.mid</li>
      <li>funkyDrummer_oh.mid</li>
    </ul>

    <p className="my-4">
      I imported these MIDI files in Ableton Live and rendered them with a few
      drum samples. Here it is again:
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/653692301&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      className="mb-6"
    ></iframe>

    <h5 className="text-xl font-semibold mt-8 my-4">More breakbeats?</h5>
    <p className="my-4">
      Ethan's spreadsheet had a bunch of classic breakbeats like this one. I put
      them in a JSON file called breakbeats.json
    </p>
    <CodeBlock
      code={`
{
  "billyJean": {
    "kick": "x-------x-------",
    "snare": "----x-------x---",
    "ch": "x-x-x-x-x-x-x-x-"
  },
  "funkyDrummer": {
    "kick": "x-x---x---x--x-R",
    "snare": "----x--x-R-xx--R",
    "ch": "xxxxxxR-xxxxx-xR",
    "oh": "-------x-----x-R"
  },
  "impeachThePresident": {
    "kick": "x------xx-----xR",
    "snare": "----x-------R--R",
    "ch": "x-x-x-xRx---x-RR",
    "oh": "----------x-----"
  },
  "whenTheLeveeBreaks": {
    "kick": "xx-----x--xR---R",
    "snare": "----x-------R--R",
    "ch": "x-x-x-xRx-x-x-xR"
  },
  "walkThisWay": {
    "kick": "x------xx-x----R",
    "snare": "----R-------x--R",
    "ch": "--x-x-x-R-x-x-xR",
    "oh": "x---------------"
  },
  "itsANewDay": {
    "kick": "x-x-------xx---R",
    "snare": "----x-------R-R-",
    "ch": "x-x-x-x-x-x-x-xR"
  },
  "papaWasToo": {
    "kick": "x------xx-x----R",
    "snare": "----x-------x---",
    "ch": "----x---x-R-x-xR",
    "tamb": "----x-------R---"
  },
  "theBigBeat": {
    "kick": "x--x--x-x---R---",
    "snare": "----x-------R---",
    "clap": "----R-------x---"
  },
  "ashelysRoachClip": {
    "kick": "x-x---x--xx---R-",
    "snare": "----x-------x-R-",
    "ch": "R-x-R-x-x---x-R-",
    "oh": "----------R-----",
    "tamb": "R"
  },
  "mardiGras": {
    "kick": "x--x------x--R--",
    "snare": "----x--R-R--x---",
    "ch": "x---x-xxx-x-x-RR",
    "oh": "--------------R-",
    "hiBell": "x-x--R---x--x---",
    "loBell": "----x--x--x--x-R"
  },
  "synthSub": {
    "kick": "x-x----x-xxx---x",
    "snare": "----x-------x---",
    "ch": "x-x-x-x-x-x-x-x-",
    "oh": "--R-------------"
  },
  "amen": {
    "kick": "x-x-------xR----",
    "snare": "----x--x-x--x--x",
    "ride": "x-x-x-x-x-x-x-x-",
    "oh": "----------R-----"
  },
  "apache": {
    "kick": "x-R-------x-----",
    "snare": "----x----x--R--x",
    "ch": "x-x-x-x-x-x-x-x-",
    "loConga": "x-RR--RR--R---R-",
    "hiConga": "R--Rx--x-xR-xR-R"
  }
}
`}
    ></CodeBlock>
    <p className="my-4">and then wrote a script that generates them all!</p>
    <CodeBlock
      code={`const scribble = require('scribbletune');
const breakbeats = require('./breakbeats.json');

const generateMidiFiles = (obj, prefix) => {
  for (const p in obj) {
    scribble.midi(
      scribble.clip({
        // Repeat the pattern to get 4 bars
        pattern: obj[p].repeat(4),
        notes: 'C4',
        subdiv: '16n',
      }),
      // Name your MIDI file
      prefix + '_' + p + '.mid'
    );
  }
};

for (const breakbeat in breakbeats) {
  generateMidiFiles(breakbeats[breakbeat], breakbeat);
}`}
    />
  </div>
);

export default BreakbeatsPage;
