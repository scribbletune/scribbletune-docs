import CodeBlock from "@/components/code-block";
import PianoRoll from "@/components/ui/piano-roll";

export default function ClipPage() {
  const clipExample = `import { clip, midi } from 'scribbletune';

// Create a clip that plays the middle C
const clip = clip({
  notes: 'C4',
  pattern: 'x'
});

// Render a MIDI file
midi(clip, 'c.mid');`;

  const clipWithScaleExample = `import { clip, midi, scale } from 'scribbletune';

// Create a clip using a scale
const clip = clip({
  notes: scale('C4 major'), // or 'C4 D4 E4 F4 G4 A4 B4'
  pattern: 'xxxxxxx'
});

// Render a MIDI file
midi(clip, 'c.mid');`;

  const clipWithSubdivExample = `const scribble = require('scribbletune');

// Create a clip with a custom subdivision
const clip = scribble.clip({
  notes: ['C4', 'E4', 'G4'],
  pattern: 'x_x_x_x_',
  subdiv: '8n'
});`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">clip</h1>

      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        A clip is a container for a musical idea. It’s like a measure of music.
        It can be a single bar or two bars or how many ever bars you need. In
        DAWs such as Ableton Live and Propellerhead Reason, a clip is what you
        create in the session or arrangement view to capture a musical idea.
      </p>

      <p className="mb-4">
        The clip method takes an object literal as an argument. This object lets
        you define the parameters of that clip. Here is an example of the clip
        method being called with an object that sets up the most basic
        properties of the clip:
      </p>

      <div className="my-6">
        <CodeBlock code={clipExample} />
      </div>

      <PianoRoll notes={["C4"]} pattern="x___" />

      <h2 className="text-2xl font-bold mt-8 mb-4">Parameters</h2>

      <div className="space-y-4">
        <div>
          <h3 id="notes" className="text-xl font-semibold">
            notes
          </h3>
          <code className="bg-gray-800 rounded text-red-500">{`String|Array`}</code>
          <p className="mt-4">
            An array of notes or a string of notes separated by spaces. You can
            also use the <code className="bg-gray-800 px-1 rounded">scale</code>{" "}
            method to generate notes from a scale.
          </p>
        </div>

        <div className="my-6">
          <CodeBlock code={clipWithScaleExample} />
        </div>

        <PianoRoll
          notes={["C4", "D4", "E4", "F4", "G4", "A4", "B4"]}
          pattern="x_x_x_x_x_x_x_"
        />

        <div>
          <h3 id="pattern" className="text-xl font-semibold">
            pattern
          </h3>
          <code className="bg-gray-800 rounded text-red-500">{`String`}</code>
          <p className="mt-4">
            This is the most important parameter for the clip method’s object.
            It abstracts away the MIDI note on and note off events along with
            the individual note durations and few other MIDI instructions to
            form a simple notation language. It is made up only of the following
            characters:
          </p>
          <div className="rounded-md p-4">
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">x</span>
              <span>Play a note</span>
            </div>
            <div className="flex items-start gap-4 border-b border-opacity-50 py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">-</span>
              <span>Rest (dont play a note)</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">_</span>
              <span>Sustain a note denoted by x or R</span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">R</span>
              <span>
                Use a random notes from the randomNotes property (if defined) OR
                randomly set volume
              </span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">[</span>
              <span>
                Start subdividing the note duration (based on the number of
                characters inserted)
              </span>
            </div>
            <div className="flex items-start gap-4 border-b py-2">
              <span className="font-mono bg-gray-800 px-1 rounded">]</span>
              <span>End subdividing (you can nest subdivisions as well)</span>
            </div>
          </div>

          <p className="mb-4">
            This is native to Scribbletune and it’s used in multiple ways across
            the Scribbletune library. Here’s an example of what a very simply
            pattern looks like,
          </p>
          <CodeBlock code={"xxxx"} />

          <p className="mb-4">
            These are 4 quarter notes. By default a single x is a quarter note.
            The default can be changed to eighth note or half note or any other
            standard note duration. It might look like this in a DAW (if
            exported as MIDI from Scribbletune):
          </p>
          <PianoRoll notes={["C4"]} pattern="x___x___x___x___" />
          <p className="my-4">
            Each x implies a MIDI "note on" event (hence shows a note in the
            piano roll when imported) and each hyphen implies a MIDI "note off"
            event which does not have any note in that location in the clip.
            Other than setting note on and off events, we can even set the
            duration of a note on event using the pattern language’s third
            character: the _ (underscore) character:
          </p>
          <CodeBlock code={"x_"} />
          <p className="mb-4">
            This makes the quarter note double in size making it a half note
          </p>
          <PianoRoll notes={["C4"]} pattern="x_______" />
          <p className="my-4">
            Notes can be divided further by placing them in square braces.
            Square braces also allow nesting more square braces leading to the
            creation of interesting or even complex patterns!
          </p>
          <CodeBlock code={"x[xx]x"} />
          <PianoRoll notes={["C4"]} pattern="x___x_x_x___" />
          <CodeBlock code={"x[x[xx]]x"} />
          <PianoRoll notes={["C4"]} pattern="x___x_xxx___" />
          <p className="my-4">
            Lastly, the letter R will let you randomly decide if a note is to be
            added or not at the specified position. For example, in this pattern
            xxRx, the quarter note at R will be randomly picked to be added or
            not (random midi note on/off). The volume of this note is governed
            by accentLow property of the clip.
          </p>
          <p className="my-4">
            If you set an additional property called{" "}
            <code className="bg-gray-800 rounded text-red-500">
              randomNotes
            </code>{" "}
            with a string or array of notes, R will then randomly select a note
            to play from these provided notes instead of randomly deciding note
            on or note off events.
          </p>
          <p className="my-4">
            <code className="bg-gray-800 rounded text-red-500">R</code> is a
            powerful feature to create interestingly intricate patterns.
          </p>
        </div>

        <div>
          <h3 id="shuffle" className="text-xl font-semibold">
            shuffle
          </h3>
          <code className="bg-gray-800 rounded text-red-500">{`Boolean`}</code>
          <p>Boolean (default: false). When true, the notes are shuffled.</p>
        </div>

        <div>
          <h3 id="sizzle" className="text-xl font-semibold">
            sizzle
          </h3>
          <code className="bg-gray-800 rounded text-red-500">{`Boolean | sin | cos | rampUp | rampDown`}</code>
          <p>
            Boolean (default: false). When true, adds a sizzle effect by
            randomizing the velocity of the notes.
          </p>
        </div>

        <div>
          <h3 id="subdiv" className="text-xl font-semibold">
            subdiv
          </h3>
          <code className="bg-gray-800 rounded text-red-500">{`String`}</code>
          <p>
            A string that specifies the subdivision of the pattern (e.g.,{" "}
            <code className="bg-gray-800 px-1 rounded">8n</code>,{" "}
            <code className="bg-gray-800 px-1 rounded">16n</code>). Default is{" "}
            <code className="bg-gray-800 px-1 rounded">4n</code>.
          </p>
        </div>

        <div>
          <h3 id="accentMap" className="text-xl font-semibold">
            accentMap
          </h3>
          <p>
            An array of velocities (0-127) that correspond to the pattern. Use
            this to add dynamic accents to your clip.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Using with Scales</h2>

      <div className="my-6">
        <CodeBlock code={clipWithScaleExample} />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Custom Subdivisions</h2>

      <div className="my-6">
        <CodeBlock code={clipWithSubdivExample} />
      </div>

      <p className="mt-6">
        The clip method is highly versatile and can be combined with other
        Scribbletune methods like{" "}
        <code className="bg-gray-800 px-1 rounded">scale</code>,{" "}
        <code className="bg-gray-800 px-1 rounded">chord</code>, and{" "}
        <code className="bg-gray-800 px-1 rounded">progression</code> to create
        complex musical ideas.
      </p>
    </div>
  );
}
