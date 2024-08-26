import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext({
  currentUser: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setTokenState] = useState(localStorage.getItem('ACCESS_TOKEN'));

  useEffect(() => {
    // Sync state with localStorage on mount
    const tokenFromLocalStorage = localStorage.getItem('ACCESS_TOKEN');
    setTokenState(tokenFromLocalStorage);

    // Listen for storage changes
    const handleStorageChange = (event) => {
      if (event.key === 'ACCESS_TOKEN') {
        setTokenState(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const setToken = (newToken) => {
    if (newToken) {
      localStorage.setItem('ACCESS_TOKEN', newToken);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
    setTokenState(newToken);
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
  );
}

export const useStateContext = () => useContext(StateContext);
