import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNotetext] = useState("");
  const [characterCount, setCharacterDown] = useState(200);
  const characterLimit = 200;

  const handleChange = (event) => {
    const count = 200 - event.target.value.length;
    setCharacterDown(count);
    if (count >= 1) {
      setNotetext(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNotetext("");
      setCharacterDown(200);
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="New note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterCount} Remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
