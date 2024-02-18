// Notes.jsx
import React, { useEffect, useState } from 'react';
import Notecard from './Notecard';
import { useNavigate } from 'react-router-dom';

function Notes() {
  const [notes, setNotes] = useState([]);
 const navigate=useNavigate()
  useEffect(() => {
    getNotes();
  }, [notes]);

  const getNotes = () => {
    // fetch("https://nutty-gold-wasp.cyclic.app/notes", {
      fetch("https://notesmaker-shoy.onrender.com/notes",{

      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.notes && Array.isArray(data.notes)) {
          setNotes(data.notes);
        } else {
          console.error("Invalid data structure or notes not found:", data);
        }
      })
      .catch(err => console.error(err));
  };

  const handleAddNote = () => {
    navigate("/addnotes")
  };

  return (
    <div>
      <h1>Notes</h1>
      <div id="parent">Notes available are:
      <button onClick={handleAddNote}>ADD NOTE</button>
</div>
      <div style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)",gap:"30px"}}>
        {notes.map((note, index) => (
        <Notecard key={note._id} {...note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;
