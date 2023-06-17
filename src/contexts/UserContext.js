import { createContext } from "react";
import { useState } from "react";
import React from "react";
import { login } from "../services/userLogin";
export const UserContext = createContext(null)

export const UserProvider =  ({ children }) => {
    const [isuser, setIsuser] = useState("");
    const [token, setToken] = useState("");
    const userLogin = async(evt, data) => {
            evt.preventDefault()
            const user = await login(data)
            //if(!user) return setIsuser(null)
            return setIsuser(user)
    }
    return(
        <UserContext.Provider value={{isuser}}>
         
          {children}
        </UserContext.Provider>
    )
}
