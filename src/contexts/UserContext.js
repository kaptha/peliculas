import { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const userLogin = (id) => {
    setUser({ id });    
  }


  const userLogout = () => {
    setUser(null);
  };


  return (
    <UserContext.Provider value={{ user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };

