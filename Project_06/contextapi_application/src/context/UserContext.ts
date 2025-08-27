import React from "react";

// Define shape of user
export type User = {
    username: string;
    password: string;
} | null;

// Define shape of context
export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};


const UserContext = React.createContext<UserContextType | undefined>(undefined);

export default UserContext;