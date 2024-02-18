
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Notesedit = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
const navigate=useNavigate()

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const filteredData = notes.filter((el) => el._id === id);
    if (filteredData.length > 0) {
      setTitle(filteredData[0].title);
      setBody(filteredData[0].body);
    }
  }, [notes, id]);

const handleEdit=()=>{
    //  fetch(`https://nutty-gold-wasp.cyclic.app/notes/${id}`,{
      fetch(`https://notesmaker-shoy.onrender.com/notes/${id}`,{

            method:"PATCH",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                title: title,
                body: body
              })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              navigate("/notes")
            })
            .catch(err => console.error(err));

}



  return (
    <div>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
    <button onClick={handleEdit}>SUBMIT</button>
    </div>
  );
}

export default Notesedit;
