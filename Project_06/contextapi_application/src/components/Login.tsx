import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const context = useContext(UserContext)
    if(!context) 
        throw new Error("Login must be used within  UserContextProvider");
    const {setUser} = context;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <>
            <div>Login</div>
            <input
                type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login