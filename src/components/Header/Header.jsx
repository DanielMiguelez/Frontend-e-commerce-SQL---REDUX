import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const Header = () => {

  const { user } = useSelector((state) => state.auth);
  const [text, setText] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setText(e.target.value);
    if(e.key === "Enter"){
      console.log(text)
      navigate('/search/' +text)
    }
    
  }

  const onLogout = (e) => {
    e.preventDefault()
    dispatch(logout())

    setTimeout(() => {
      navigate("/login")
    }, 2000);

  }
  return (
    <div className='header'>
      
      <Link to ="/home">Home</Link>
      <input onKeyUp={handleChange} placeholder='search' name = "text"/>

      {user?.user?.role === 'admin' ? <span><Link to ="/admin">Admin</Link></span>:''}

    {user ? 
      <>
      <Link to ="/profile">Profile</Link>
      <button onClick={onLogout}>Logout</button>
      </>
      : 
      <>
      
        <Link to ="/register">Register</Link>
        <Link to ="/login">Login</Link>
      
      </>
    }
  </div>
  )
}

export default Header