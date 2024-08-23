 import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, setTokenState] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (newToken) => {
      setTokenState(newToken);
      if (newToken) {
        localStorage.setItem("ACCESS_TOKEN", newToken);
      } else {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    };
  

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)