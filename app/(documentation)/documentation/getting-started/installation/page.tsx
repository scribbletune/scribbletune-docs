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

      <p className="mt-6">
        Now you're ready to start creating music with Scribbletune! Check out
        the Core API section to learn about the available methods.
      </p>
    </div>
  );
}
