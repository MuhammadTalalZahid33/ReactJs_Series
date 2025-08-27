import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const context = useContext(UserContext);
  if (!context) throw new Error("Profile must be used within UserContextProvider");
  const { user } = context;

    if (!user)
    return (
      <div className="flex items-center justify-center min-h-1/2 bg-gray-50">
        <div className="text-lg text-gray-600 font-medium">Please Login</div>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center min-h-1/2 bg-gradient-to-r from-indigo-100 via-white to-indigo-50">
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome <span className="text-indigo-600">{user.username}</span>
        </h2>
        <p className="text-gray-600 mb-6">You are now logged in 🎉</p>
      </div>
    </div>
  )
}

export default Profile