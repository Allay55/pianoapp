import React from "react";
import "../App.css";

const notes = [
  // Octava 3
  { note: "Do",  file: "C3.mp3" },
  { note: "Re",  file: "D3.mp3" },
  { note: "Mi",  file: "E3.mp3" },
  { note: "Fa",  file: "F3.mp3" },
  { note: "Sol", file: "G3.mp3" },
  { note: "La",  file: "A3.mp3" },
  { note: "Si",  file: "B3.mp3" },

  // Octava 4
  { note: "Do",  file: "C4.mp3" },
  { note: "Re",  file: "D4.mp3" },
  { note: "Mi",  file: "E4.mp3" },
  { note: "Fa",  file: "F4.mp3" },
  { note: "Sol", file: "G4.mp3" },
  { note: "La",  file: "A4.mp3" },
  { note: "Si",  file: "B4.mp3" },

  // Octava 5
  { note: "Do",  file: "C5.mp3" },
  { note: "Re",  file: "D5.mp3" },
  { note: "Mi",  file: "E5.mp3" },
  { note: "Fa",  file: "F5.mp3" },
  { note: "Sol", file: "G5.mp3" },
  { note: "La",  file: "A5.mp3" },
  { note: "Si",  file: "B5.mp3" },

  // Do más agudo
  { note: "Do+", file: "C6.mp3" }
];

export default function Piano() {

  const playSound = (file) => {
    const audio = new Audio(`/sounds/${file}`);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="piano-wrapper">
      <div className="piano">
        {notes.map((n, index) => (
          <div
            key={index}
            className="key"
            onClick={() => playSound(n.file)}
          >
            {n.note}
          </div>
        ))}
      </div>
    </div>
  );
}
