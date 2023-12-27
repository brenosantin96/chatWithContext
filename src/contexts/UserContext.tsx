"use client"
import { User } from "@/types/User";
import { ReactNode, createContext, useContext, useState } from "react";


type UserContextType = {
    user: string;
    setUser: (newUser: string) => void
}

const UserContext = createContext<UserContextType | null>(null)

type UserContextProviderProps = {
    children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {


    const [user, setUser] = useState("")


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}

export const UserContextHook = () => {
    return useContext(UserContext);
}