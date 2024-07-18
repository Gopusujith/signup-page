import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const[name,setName]=useState('');
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();

    const eventhandler=(e)=>{
        e.preventDefault();
        if(name ==='sujith'&& username ==='sujith2@gmail.com'&& password ==='123456'){
            navigate('/home');
        }
        else{
             alert('Invalid details');
        }    

    };
  return (
    <div>
        <center>
            <form onSubmit={eventhandler}>
            <label>Name</label><br></br>
            <input type='text' placeholder='enter your name'value={name} onChange={(e)=>setName(e.target.value)}required/><br></br>
            <label>username</label><br></br>
            <input type='email'placeholder='enter your email'value={username} onChange={(e)=>setUsername(e.target.value)}required/><br></br>
            <label>Password</label><br></br>
            <input type='password'placeholder='enter youe password' value={password} onChange={(e)=>setPassword(e.target.value)}required/><br></br>
            <button>Submit</button>
            </form>

        </center>
      
    </div>
  )
}

export default Login
