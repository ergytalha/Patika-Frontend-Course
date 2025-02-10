import './App.css';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('yellow');
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = () => {
    if (noteText.trim() === '') return;
    setNotes([...notes, { text: noteText, color: noteColor }]);
    setNoteText('');
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Note App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
      />
      <div className="input-group">
        <textarea
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write a note"
          rows={4}
          cols={50}
        />
        <div className="color-picker">
          <label>Select Color:</label>
          <div className="colors">
            {['yellow', 'red', 'green', 'blue', 'purple'].map((color) => (
              <span
                key={color}
                className={`color-option ${color}`}
                onClick={() => setNoteColor(color)}
              />
            ))}
          </div>
        </div>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="notes">
        {filteredNotes.map((note, index) => (
          <div key={index} className={`note ${note.color}`}>
            <p>{note.text}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
