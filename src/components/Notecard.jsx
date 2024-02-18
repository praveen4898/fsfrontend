import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Notecard = ({title,body,author,_id}) => {
const [flag,setFlag]=useState(false)
const navigate=useNavigate()

    const handleEdit=()=>{
       

navigate(`/notesedit/${_id}`)
           
    }


    const handleDelete=()=>{
        // fetch(`https://nutty-gold-wasp.cyclic.app/notes/${_id}`,{
          fetch(`https://notesmaker-shoy.onrender.com/notes/${_id}`,{

            method:"DELETE",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data){
                setFlag(prev=>!prev)
              }
            })
            .catch(err => console.error(err));
    }

  return (
    <div>
        <h1>Title:{title}</h1>
        <h2>Body:{body}</h2>
        <h3>Author:{author}</h3>

  <div>
  <button onClick={handleEdit}>EDIT</button>
  <button onClick={handleDelete}>DELETE</button>
  </div>
        
    </div>
  )
}

export default Notecard