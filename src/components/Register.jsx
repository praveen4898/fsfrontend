import React, { useState } from 'react'

const Register = () => {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleRegister=()=>{
    const payload={
      username,
      email,
      password
    }
  //  fetch("https://nutty-gold-wasp.cyclic.app/users/register",{
    fetch("https://notesmaker-shoy.onrender.com/users/register",{
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(payload)
   })
   .then(res=>res.json())
   .then(data=>console.log(data))
   .catch(err=>console.log(err))


}

  return (
    <div> 
      <h2> REGISTRATION FORM </h2>
    
    <input type="text"  placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input type="text"  placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text"  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleRegister}>REGISTER</button>

    
    
    </div>
    
  )
}

export default Register