import CodeBlock from "@/components/code-block";

export default function InstallationPage() {
  const installCode = `npm install scribbletune`;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        Scribbletune is a node module. You can install it using npm:
      </p>

      <div className="my-6">
        <CodeBlock code={installCode} />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Requirements</h2>

      <p className="mb-4">
        Scribbletune works in both Node.js and browser environments:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>
          For Node.js: Scribbletune can generate MIDI files that you can import
          into your DAW.
        </li>
        <li>
          For browsers: Scribbletune can play the clips directly in the browser
          using the Web Audio API.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>

      <p className="mb-4">
        After installation, you can import Scribbletune in your project:
      </p>

      <div className="my-6">
        <CodeBlock
          code={`// Using require
const scribble = require('scribbletune');

// Or using ES6 imports
import scribble from 'scribbletune';`}
        />
      </div>

      <p className="mb-4">
        Now you're ready to start creating music with code! Check out the{" "}
        <a
          href="/projects/scribbletune/examples"
          className="text-blue-400 hover:text-blue-300"
        >
          examples
        </a>{" "}
        to see what you can build.
      </p>
    </div>
  );
}
