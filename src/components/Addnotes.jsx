import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addnotes = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleAddNote = () => {
    const payload = {
      title,
      body,
    };
    
    // fetch("https://nutty-gold-wasp.cyclic.app/notes", {

    fetch("https://notesmaker-shoy.onrender.com/notes",{

      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization:`Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/notes");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      Addnotes
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleAddNote}>submit</button>
    </div>
  );
};

export default Addnotes;
