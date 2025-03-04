import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        clearState()
        setTimeout(() => {
            navigate("/profile")
        }, 2000);
    }

    const clearState = () =>{
       setFormData({
        email: '',
        password: ''
       })
    }

    return (
        <>
        <h2>Formulario de LOGIN</h2>
        <form onSubmit={onSubmit}>
            <input type="email" name="email" value={email} placeholder="email"  onChange={onChange} />
            <input type="password" name="password" value={password} placeholder="password" onChange={onChange} />
            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default Login