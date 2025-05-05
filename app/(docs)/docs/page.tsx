import CodeBlock from "@/components/code-block"
import Link from "next/link"

export default function DocsHomePage() {
  const sampleCode = `const scribble = require('scribbletune');

// Create a clip that plays the middle C
const clip = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'xxxxxxx'
});

// Render a MIDI file of this clip
scribble.midi(clip, 'c.mid');`

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Scribbletune has a very minimal API.</h1>

      <p className="mb-4 text-lg">
        The work flow involves creating clips which are containers for musical ideas. Once a clip is created, it can be
        concatenated with other clips to create longer musical ideas (or songs). You can then, either export the clip as
        a MIDI file or play it in the browser.
      </p>

      <div className="my-6">
        <h2 className="text-xl mb-2">Here&apos;s some sample code:</h2>
        <CodeBlock code={sampleCode} />
      </div>

      <p className="mt-6">
        Please use the menu alongside for the various methods available or click here to learn how to{" "}
        <Link href="/docs/getting-started/installation" className="text-blue-400 hover:underline">
          start using Scribbletune
        </Link>{" "}
        in your project.
      </p>
    </div>
  )
}

