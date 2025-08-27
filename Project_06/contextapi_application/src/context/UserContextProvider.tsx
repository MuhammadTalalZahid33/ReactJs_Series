import React, { useState, type ReactNode } from "react"
import UserContext, { type User } from "./UserContext"

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    return(
        <>
            <UserContext.Provider value={{user, setUser}}>
            {children}
            </UserContext.Provider> 
        </>
    )
}

export default UserContextProvider