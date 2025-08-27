import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const context = useContext(UserContext);
  if (!context) throw new Error("Profile must be used within UserContextProvider");
  const { user } = context;

    if(!user) return <div>Please Login</div>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile