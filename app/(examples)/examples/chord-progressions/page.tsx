import React from "react";
import CodeBlock from "@/components/code-block";

const ChordProgressionsPage = () => (
  <div>
    <h1 className="text-3xl font-bold my-4">
      Generate chord progressions that always sound good
    </h1>
    <p className="lead mb-6">
      Scribbletune can be used to generate chord progressions based on basic
      music theory.
    </p>

    <p className="my-4">
      Before we get into the code, here's what we will produce in this example
    </p>
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/691481236&color=%23080404&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      className="mb-6"
    ></iframe>

    <p className="my-4">
      Recently I came across some fundamental chord progression theory on{" "}
      <a
        href="https://www.artofcomposing.com/composing-a-chord-progression"
        className="text-blue-500 hover:underline"
      >
        the art of composing website
      </a>{" "}
      and quickly learnt the basics of putting together good sounding chord
      progressions. I decided to convert the repetitive aspect of this process
      to a method in Scribbletune. The result was pretty satisfying.
    </p>

    <p className="my-4">
      The instructor,{" "}
      <a
        href="https://www.artofcomposing.com/author/jonbrantingham"
        className="text-blue-500 hover:underline"
      >
        Jon Brantingham
      </a>
      , speaks about a recipe of sorts for a good chord progression. He goes
      pretty in-depth and explains really well and my take on it may be mediocre
      at best, but the theory suggests moving along the chord degrees formed by
      the Tonic (T), Predominant (P) and the Dominant (D) chord degrees. You are
      allowed to go from left to right only T → P (optional) → D. From D you can
      move to P if you like and then again you move right. If you chose to come
      to the Tonic from the Dominant, then the progression is complete. The
      instructor has a very{" "}
      <a
        href="https://www.artofcomposing.com/composing-a-chord-progression"
        className="text-blue-500 hover:underline"
      >
        nice chart
      </a>{" "}
      for the major as well as the minor scales, that can help you visualize
      this really well.
    </p>

    <p className="my-4">
      One other thing Jon mentioned was, great composers avoided the{" "}
      <code>iii</code> chord for a major scale and he also mentioned that using
      the <code>VII°</code> chord degree required some amount of expertise.
      Hence Scribbletune leaves out <code>iii</code> and <code>VII°</code> to
      keep things really simple.
    </p>

    <p className="my-4">
      If we consider a Major scale, then these are the scale degrees:
    </p>
    <CodeBlock code={`I ii iii IV V vi VII°`}></CodeBlock>

    <p className="my-4">
      Since we have decided to leave out <code>iii</code> and <code>VII°</code>,
      we are left with <code>I ii IV V vi</code>. Out of these,
    </p>
    <ul className="list-disc pl-6 my-4">
      <li>
        <code>I</code> and <code>vi</code> are Tonic (T)
      </li>
      <li>
        <code>ii</code> and <code>IV</code> are Predominant (P)
      </li>
      <li>
        <code>V</code> is Dominant (D).
      </li>
    </ul>

    <p className="my-4">
      We will move from left to right and pick the degrees as we go along,
      sometimes optionally returning to P and then continuing again till we are
      done with at least 4 chords (later we will make the number of chords
      dynamic).
    </p>

    <p className="my-4">
      If we were to manually put this to use, say for the C Major scale, then
      this is what we have:
    </p>
    <ul className="list-disc pl-6 my-4">
      <li>
        <em>Tonic</em>: CM, Am
      </li>
      <li>
        <em>Predominant</em>: Dm, FM
      </li>
      <li>
        <em>Dominant</em>: GM
      </li>
    </ul>

    <p className="my-4">
      Going from left to right (T → P → D), we’ll take <strong>CM</strong> as
      the tonic, then pick <strong>Dm</strong>, <strong>GM</strong> and then
      back to <strong>CM</strong> (we need to come back to the tonic we picked),
      thus we have <code>CM, Dm, GM, CM</code>. This chord progression{" "}
      <em>will</em> sound good! This is because we stuck to the rules. Let's
      take one more example, we’ll take <strong>Am</strong> this time as the
      Tonic, and we'll just skip the Predominant entirely and directly pick{" "}
      <strong>GM</strong> and then come back to the Tonic, and we'll pick{" "}
      <strong>Am</strong>. Thus we have <code>Am, GM, Am</code>. This too will
      sound fine as a progression :)
    </p>

    <p className="my-4">
      With this set of rules to follow, Scribbletune provides a method that’ll
      help us do this instantly and yet throw out a different progression each
      time with the guarantee that it <em>WILL</em> sound good ;) Needless to
      say, it is not limited to the C Major scale as it can throw out chord
      progressions for any major or minor scale. AFAIK functional harmony does
      not apply to the modes, hence this method doesn't work in case of any of
      the modes other than Ionian and Aeolian.
    </p>

    <CodeBlock
      code={`const scribble = require('scribbletune');
console.log(scribble.progression('M')); // outputs an array, e.g. ['I', 'ii', 'iii', 'V']`}
    />

    <p className="my-4">
      We can use Scribbletune's <code>getChordsByProgression</code> method to
      generate the chords from this progression:
    </p>

    <CodeBlock
      code={`const scribble = require('scribbletune');
const majorChordProgression = scribble.progression('M').join(' ');
console.log(scribble.getChordsByProgression('C4 major', majorChordProgression)); // outputs something like 'Am-4 Dm-4 Dm-4 GM-4'`}
    />

    <p className="my-4">
      Taking this one step ahead, we can now use the chords we generate along
      with Scribbletune's <code>arp</code> method and patterns with the{" "}
      <code>R</code> character to create nice sounding arpeggios!
    </p>

    <CodeBlock
      code={`const scribble = require('scribbletune');
const progMinor = progression('m').join(' ');
const c = scribble.clip({
  notes: 'D3',
  pattern: '[x-RR]'.repeat(16), // R will play notes from our progression
  randomNotes: scribble.arp({
    chords: scribble.getChordsByProgression('D4 minor', progMinor), // We are using the \`m\` method we generated earlier from our factory method
    count: 4,
    order: '1032',
  }),
});

scribble.midi(c, 'prog.mid');`}
    />

    <p className="my-4">
      Here is the rendered Aiff file using a really nice but lesser known
      additive synth called{" "}
      <a
        href="https://www.airmusictech.com/virtual-instruments/loom-ii/"
        className="text-blue-500 hover:underline"
      >
        Loom
      </a>{" "}
      . I also slapped on an instance of{" "}
      <a
        href="https://www.izotope.com/"
        className="text-blue-500 hover:underline"
      >
        Ozone
      </a>{" "}
      on top of it with the default output of Master Assistant. Here's how it
      sounds:
    </p>

    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/691481236&color=%23080404&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
      className="my-6"
    ></iframe>
  </div>
);

export default ChordProgressionsPage;
