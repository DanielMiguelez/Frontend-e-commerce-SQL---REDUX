import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })

    const { name, email, password, role } = formData
    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }

    return (
        <>
        <h2>Formulario de registro</h2>
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} placeholder="name" onChange={onChange} />
            <input type="email" name="email" value={email} placeholder="email"  onChange={onChange} />
            <input type="password" name="password" value={password} placeholder="password" onChange={onChange} />
            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default Register