import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const context = useContext(UserContext)
    if (!context)
        throw new Error("Login must be used within  UserContextProvider");
    const { setUser } = context;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-1/2 bg-gray-100">
                <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login