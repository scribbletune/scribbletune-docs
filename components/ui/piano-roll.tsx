import React from 'react';
import './piano-roll.css'; // Import styles for the piano roll

interface PianoRollProps {
  notes: string[]; // Array of notes (e.g., ['C4', 'E4', 'G4', 'B4'])
  pattern: string; // Pattern string (e.g., '-x--x---x_--x_--')
}

const deriveNotesArray = (notes: string[], pattern: string) => {
  const derivedNotes = [];
  const gridWidth = 1; // Each 'x' represents one grid box width

  let column = 2; // Start from the second column (first is for keys)
  let noteIndex = 0; // Track the current note index

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];

    if (char === 'x') {
      // Add a new note
      derivedNotes.push({
        row: 12 - ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].indexOf(notes[noteIndex].slice(0, -1)),
        column,
        width: gridWidth,
      });
      noteIndex = (noteIndex + 1) % notes.length; // Cycle through notes
    } else if (char === '_') {
      // Extend the width of the last note
      if (derivedNotes.length > 0) {
        derivedNotes[derivedNotes.length - 1].width += gridWidth;
      }
    }
    column++; // Increment column in all cases
  }

  return derivedNotes;
};

const PianoRoll: React.FC<PianoRollProps> = ({ notes, pattern }) => {
  const keys = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
  ].reverse(); // Reverse the order to make C the bottom-most note

  const derivedNotes = deriveNotesArray(notes, pattern);

  return (
    <div className="piano-roll" style={{ display: 'flex' }}>
      <div className="keyboard">
        {keys.map((key, rowIndex) => (
          <div
            key={rowIndex}
            className={`key ${key.includes('#') ? 'black-key' : 'white-key'}`}
          />
        ))}
      </div>
      <div className="grid">
        {Array.from({ length: 16 * 12 }).map((_, cellIndex) => (
          <div
            key={cellIndex}
            className="grid-cell"
            style={{
              gridColumn: Math.floor(cellIndex / 12) + 1,
              gridRow: (cellIndex % 12) + 1,
            }}
          />
        ))}
        {derivedNotes.map((note, index) => (
          <div
            key={index}
            className="note"
            style={{
              gridColumn: `${note.column - 1} / span ${note.width}`,
              gridRow: note.row,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PianoRoll;