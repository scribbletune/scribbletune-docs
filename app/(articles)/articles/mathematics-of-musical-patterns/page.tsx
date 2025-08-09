import CodeBlock from "@/components/code-block";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/articles"
        className="text-green-400 hover:text-green-300 inline-flex items-center gap-1 mb-8"
      >
        <ArrowLeft size={16} />
        Back to Articles
      </Link>

      <article className="prose prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            The Mathematics of Musical Patterns
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              January 15, 2025
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />8 min read
            </div>
          </div>
          <div className="flex gap-2 mb-6">
            <span className="bg-green-900/50 text-green-400 px-3 py-1 rounded-full text-sm">
              Mathematics
            </span>
            <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-sm">
              Patterns
            </span>
            <span className="bg-lime-900/50 text-lime-400 px-3 py-1 rounded-full text-sm">
              Algorithms
            </span>
          </div>
        </header>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Music and mathematics have been intertwined since ancient times. From
          the mathematical ratios that define harmony to the fractal patterns
          found in Bach's compositions, understanding these relationships can
          unlock new creative possibilities in algorithmic music generation.
        </p>

        <h2>Fractals in Music Composition</h2>

        <p>
          Fractals are mathematical objects that exhibit self-similarity at
          different scales. In music, we can apply fractal principles to create
          patterns that have structure across multiple time scales.
        </p>

        <CodeBlock
          code={`const scribble = require('scribbletune');

// Generate a fractal-like melody using recursive subdivision
function generateFractalMelody(scale, depth, length) {
  if (depth === 0) {
    return [scale[Math.floor(Math.random() * scale.length)]];
  }
  
  const subPattern = generateFractalMelody(scale, depth - 1, length / 2);
  return [...subPattern, ...subPattern.map(note => 
    scribble.transpose(note, Math.random() > 0.5 ? '2M' : '-2M')
  )];
}

// Create a clip with fractal structure
const fractalScale = scribble.scale('C4 major');
const fractalMelody = generateFractalMelody(fractalScale, 3, 16);

const clip = scribble.clip({
  notes: fractalMelody,
  pattern: 'x'.repeat(fractalMelody.length)
});`}
        />

        <h2>Cellular Automata for Rhythm Generation</h2>

        <p>
          Cellular automata are discrete mathematical models that can generate
          complex patterns from simple rules. Rule 30, for example, can create
          rhythmic patterns that feel both structured and unpredictable.
        </p>

        <CodeBlock
          code={`// Implement Rule 30 cellular automaton for rhythm generation
function rule30(left, center, right) {
  const state = (left << 2) | (center << 1) | right;
  return (30 >> state) & 1;
}

function generateCellularRhythm(initialState, generations) {
  let currentState = initialState;
  const patterns = [currentState];
  
  for (let i = 0; i < generations; i++) {
    const nextState = [];
    for (let j = 0; j < currentState.length; j++) {
      const left = currentState[(j - 1 + currentState.length) % currentState.length];
      const center = currentState[j];
      const right = currentState[(j + 1) % currentState.length];
      nextState[j] = rule30(left, center, right);
    }
    patterns.push([...nextState]);
    currentState = nextState;
  }
  
  return patterns;
}

// Generate drum pattern using cellular automata
const initialPattern = [1, 0, 0, 1, 0, 1, 0, 0];
const rhythmEvolution = generateCellularRhythm(initialPattern, 8);

rhythmEvolution.forEach((pattern, index) => {
  const clip = scribble.clip({
    notes: ['C2'],
    pattern: pattern.map(bit => bit ? 'x' : '-').join('')
  });
  scribble.midi(clip, \`cellular_rhythm_\${index}.mid\`);
});`}
        />

        <h2>The Golden Ratio in Musical Structure</h2>

        <p>
          The golden ratio (φ ≈ 1.618) appears frequently in nature and has been
          used by composers to create aesthetically pleasing musical structures.
          We can use this ratio to determine optimal lengths for musical
          sections and phrase structures.
        </p>

        <h2>Practical Applications</h2>

        <p>
          These mathematical concepts aren't just theoretical curiosities—they
          can be powerful tools for creating music that feels both familiar and
          surprising. Here are some practical ways to incorporate mathematical
          patterns into your compositions:
        </p>

        <ul>
          <li>
            <strong>Fractal melodies</strong> for creating coherent themes
            across different time scales
          </li>
          <li>
            <strong>Cellular automata</strong> for generating evolving rhythmic
            patterns
          </li>
          <li>
            <strong>Prime number sequences</strong> for creating non-repeating
            but structured patterns
          </li>
          <li>
            <strong>Fibonacci numbers</strong> for determining phrase lengths
            and structural proportions
          </li>
        </ul>

        <h2>Conclusion</h2>

        <p>
          Mathematics provides a rich toolkit for algorithmic composition. By
          understanding and applying these concepts, we can create music that
          has both the complexity of natural phenomena and the intentionality of
          human creativity. The key is finding the right balance between
          mathematical structure and musical expression.
        </p>

        <div className="bg-gray-800/50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3">Try It Yourself</h3>
          <p className="text-gray-300 mb-4">
            Experiment with these mathematical concepts in your own
            compositions. Start with simple patterns and gradually increase
            complexity as you become comfortable with the techniques.
          </p>
          <Link
            href="/projects/scribbletune/documentation/getting-started/installation"
            className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
          >
            Get Started with Scribbletune
          </Link>
        </div>
      </article>
    </div>
  );
}
