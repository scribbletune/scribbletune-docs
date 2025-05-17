import React from "react";
import CodeBlock from "@/components/code-block";

const MidiPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">midi</h1>
    <p className="mb-4 text-lg md:text-xl leading-relaxed">
      Scribbletune exports clips as MIDI files.
    </p>
    <p className="mb-4">
      As the name suggests, the <code>midi</code> method generates a MIDI file
      from its input.
    </p>
    <CodeBlock
      code={`import { clip, midi } from 'scribbletune';

const c = clip({
  notes: 'c4',
  pattern: 'x_______'
});

// the following will create a file called music.mid
midi(c);

// Alternatively, you can specify the name of the file
midi(c, 'c.mid');`}
    />
    <h3 className="my-4 text-1xl font-bold">
      Create downloadable MIDI files from the browser
    </h3>
    <p className="my-4">
      Using the <code>midi</code> method as is in the browser (with a filename
      as the second parameter), will generate a download href that looks like
      this
    </p>
    <code>
      http://yourDomainOrLocalhost/5f9aa791-3509-4584-81aa-656c74597e98
    </code>
    <p className="my-4">
      You can create an anchor element out of it and set it's download attribute
      to whatever name you'd like to give to your MIDI file.
    </p>
    <CodeBlock
      code={`<a href="blob:http://yourDomainOrLocalhost/5f9aa791-3509-4584-81aa-656c74597e98"
  download="music.mid">Download MIDI file
</a>`}
    ></CodeBlock>
    <p className="my-4">
      You can append this to any HTML node in your page. To change the value of
      the <code>href</code>, simply use <code>setAttribute</code> or{" "}
      <code>href</code> directly on the anchor element.
    </p>

    <p className="my-4">
      If you dont want this functionality, then pass <code>null</code> as the
      second argument. It will return <code>bytes</code> and you can wire up the
      download funtionality the way you like. Here is a reference you can
      follow:
    </p>
    <CodeBlock
      code={`// Sample Clip that renders the C Major scale
const c = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x'.repeat(7)
});

// Get hold of the bytes from the scribble.midi method
// (passing null as the second argument returns bytes)
const b = scribble.midi(c, null);

// https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript
const bytes = new Uint8Array(b.length);
for (let i = 0; i < b.length; i++) {
  const ascii = b.charCodeAt(i);
  bytes[i] = ascii;
}

const blob = new Blob([bytes], {type: "audio/midi"});

// Create a link element to be used (you can use an existing link on the page as well)
const link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);

// Give your downloadable file a name
link.download = 'music.mid';
link.innerText = 'Download MIDI file';
document.body.appendChild(link);`}
    />
  </div>
);

export default MidiPage;
