import CodeBlock from "@/components/code-block";

export default function SimpleMelodyPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Simple melody</h1>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        Adding constraints or limitations to the construction of your melody can
        make you creative
      </p>
      <p className="my-4">
        Recently I went through{" "}
        <a
          href="https://courses.artofcomposing.com/courses/the-vocabulary-of-composition"
          className="text-blue-500 hover:underline"
        >
          a (free) course on artofcomposing.com
        </a>{" "}
        and learnt that adding constraints or limitations to the construction of
        your melody can make you creative. Here are the basic constraints this
        course suggested as a starting point:
      </p>
      <ul className="list-disc pl-6 my-4">
        <li>Select a root note and scale</li>
        <li>Use only chord tones from the selected scale</li>
        <li>Use only half notes, eighth notes and quarter notes</li>
      </ul>
      <p className="my-4">
        Before we go on, here's a sample of what we are gonna end up creating
        using Scribbletune
      </p>
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/606723279&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="mb-6"
      ></iframe>
      <p className="my-4">
        Using the constraints the instructor created a simple melody. He laid
        out the chord progression <code>I I V I</code> for the C Major scale and
        randomly choosing between quarter notes and eighth notes. Of course he
        was a trained musician with a lot more to offer than just that but I
        thought this simple technique can easily be implemented with
        Scribbletune for creating simple melodies.
      </p>
      <p className="my-4">
        Create a file called <code>simpleMelody.js</code> and require
        scribbletune:
      </p>
      <CodeBlock code={`const scribble = require('scribbletune');`} />
      <p className="my-4">
        So let's select the C minor scale for our example and decide to use the
        progression <code>i iii ii v</code>. We can get the actual chords like
        this:
      </p>
      <CodeBlock
        code={`const chords = scribble.getChordsByProgression('C4 minor', 'i iii ii v');`}
      />
      <p className="my-4">
        This will set <code>chords</code> to a string that looks like{" "}
        <code>Cm-4 Gm-4 Cm-4 Dm-4</code>. The number after the hyphen indicates
        the octave. In Ableton Live the middle C is on the third octave, hence
        the 4 you see here will transpose to 3 in Ableton live. I have an
        article that explains middle C a bit more. You can read it if that
        interests you.
      </p>
      <p className="my-4">
        Since we have 4 chords, we can start accumulating notes and a pattern
        too. Let's start by initializing them:
      </p>
      <CodeBlock
        code={`const notes = [];
let pattern = '';`}
      />
      <p className="my-4">
        Next, we'll loop over the 4 chords and decide at each chord if we want
        to use 2 quarter notes or 1 quarter note and 2 eighth notes. We can
        either use <code>Math.random()</code> to determine this or we can do it
        based on some other condition. For instance we'll do a modulo on the
        current index in the loop.
      </p>
      <CodeBlock
        code={`chords.split(' ').forEach((chordName, index) => {
  // Get the chord as an array of notes
  const chord = scribble.chord(chordName);

  if (index % 2 !== 0) {
    // Use 2 quarter notes
    pattern += 'xx';

    // Since we are using 2 notes, we'll push the first 2 notes from the chord into the notes array
    // You could very well use 2 random notes, but we'll keep things straightforward for now
    notes.push(chord[0]);
    notes.push(chord[1]);
  } else {
    // Use a quarter note and 2 eighth notes
    pattern += 'x[xx]';

    // Since we are using 3 notes in all, we'll push all 3 notes of the chord to the notes array
    notes.push(chord[0]);
    notes.push(chord[1]);
    notes.push(chord[2]);
  }
});`}
      />
      <p className="my-4">
        At the end of this, we should now have a bunch of notes and a pattern.
        Let's create a clip out of these and render it out as a MIDI file:
      </p>
      <CodeBlock
        code={`const clip1 = scribble.clip({
  notes,
  pattern
});
scribble.midi(clip1, 'clip1.mid');`}
      />
      <p className="my-4">
        Additionally, to make it sound interesting, let's create another clip
        with a longer note length but the same notes and pattern. In
        Scribbletune note lengths are set to 4n (quarter notes) by default. We
        can change this by using the <code>subdiv</code> property. For this
        example, we'll create a clip which uses 2n (half notes) as the{" "}
        <code>subdiv</code>:
      </p>
      <CodeBlock
        code={`const clip2 = scribble.clip({
  notes,
  pattern,
  subdiv: '2n'
});
scribble.midi(clip2, 'clip2.mid');`}
      />
      <p className="my-4">
        Running <code>node simpleMelody.js</code> should produce 2 MIDI files:{" "}
        <code>clip1.mid</code> and <code>clip2.mid</code>. Here's how it sounded
        like when I rendered the MIDI files with <code>i iii ii v</code> and{" "}
        <code>ii III ii v</code> in Ableton Live. For <code>clip1.mid</code> I
        used NI's Reaktor Factory Library synthesizer Junatic and for{" "}
        <code>clip2.mid</code> I used Ableton's stock synth preset Epic Trance
        Lead. I added a beat and a riser effect to make it sound a little nicer.
        Here it is again ;)
      </p>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/606723279&color=%23080404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        className="mb-6"
      ></iframe>
    </div>
  );
}
