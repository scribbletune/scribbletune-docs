import React from 'react';
import CodeBlock from '@/components/code-block';

const MidiPage = () => (
  <div>
    <h1>MIDI</h1>
    <p>
      Scribbletune exports clips as MIDI files using the{' '}
      <a href="https://github.com/dingram/jsmidgen">jsmidgen</a> module. As the
      name suggests, the <code>midi</code> method generates a MIDI file from its
      input.
    </p>
    <CodeBlock
      code={`import { clip, midi } from 'scribbletune';

const c = clip({
  notes: 'c4',
  pattern: 'x_______'
});

midi(c); // Will create a file called music.mid
// OR
midi(c, 'c.mid'); // Will create a file called c.mid`}
    />
    <p>You can also create downloadable MIDI files from the browser.</p>
    <CodeBlock
      code={`const c = scribble.clip({
  notes: scribble.scale('C4 major'),
  pattern: 'x'.repeat(7)
});

const b = scribble.midi(c, null);

var bytes = new Uint8Array(b.length);
for (var i = 0; i < b.length; i++) {
  var ascii = b.charCodeAt(i);
  bytes[i] = ascii;
}

var blob = new Blob([bytes], {type: "audio/midi"});

var link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = 'music.mid';
link.innerText = 'Download MIDI file';
document.body.appendChild(link);`}
    />
  </div>
);

export default MidiPage;
