import NoteList from "./components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello",
      date: "15/10/2021",
    },
    {
      id: nanoid(),
      text: "Hello two",
      date: "15/11/2021",
    },
    {
      id: nanoid(),
      text: "Hello three",
      date: "15/13/2021",
    },
    {
      id: nanoid(),
      text: "Hello four",
      date: "15/15/2021",
    },
  ]);

  const [searchtext, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchtext)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
