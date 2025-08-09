import CodeBlock from "@/components/code-block";
import PianoRoll from "@/components/ui/piano-roll";
import Link from "next/link";

export default function DocsHomePage() {
  const sampleCode = `const scribble = require('scribbletune');

// Create a clip that plays the middle C
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'xxxxxxx'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'c.mid');`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Scribbletune has a very minimal API.
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        This legacy path will move under{" "}
        <Link
          href="/projects/scribbletune/documentation"
          className="text-blue-400 hover:underline"
        >
          /projects/scribbletune/documentation
        </Link>
        . Please update bookmarks.
      </p>

      <p className="mb-4 text-lg">
        The work flow involves creating clips which are containers for musical
        ideas. Once a clip is created, it can be concatenated with other clips
        to create longer musical ideas (or songs). You can then, either export
        the clip as a MIDI file or play it in the browser.
      </p>

      <div className="my-6">
        <h2 className="text-xl mb-2">Here&apos;s some sample code:</h2>
        <CodeBlock code={sampleCode} />
      </div>

      <p className="mb-4">
        This will create a MIDI file that looks like this when imported in a
        DAW.
      </p>
      <PianoRoll
        notes={["C4", "D4", "E4", "F4", "G4", "A4", "B4"]}
        pattern="x-x-x-x-x-x-x---"
      />

      <p className="mt-6">
        Please use the menu alongside for the various methods available or click
        here to learn how to{" "}
        <Link
          href="/projects/scribbletune/documentation/getting-started/installation"
          className="text-blue-400 hover:underline"
        >
          start using Scribbletune
        </Link>{" "}
        in your project.
      </p>
    </div>
  );
}
