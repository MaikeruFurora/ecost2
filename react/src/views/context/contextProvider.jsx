// import { createContext, useContext, useState } from "react";

// const stateContext = createContext({
//     user:null,
//     token:null,
//     setUser: () => {},
//     setToken: () => {},
// });

// export const ContextProvider =  ({children}) => {
//     const [user, setUser] = useState({})
//     // const [token, _setToken] = useState('1212')
//     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

//     const setToken= (token) => {
//         _setToken(token)
//         if (token) {
//             localStorage.setItem('ACCESS_TOKEN', token)
//         }else{
//             localStorage.removeItem('ACCESS_TOKEN')
//         }
//     }
//     return (
//         <stateContext.Provider value={{
//             user,
//             token,
//             setUser,
//             setToken,
//         }}>
//             {children}
//         </stateContext.Provider>
//     )
// }

// export const useStateContext = () => useContext(stateContext)

// import { createContext, useContext, useState, useMemo } from "react";

// const stateContext = createContext({
//     user: null,
//     token: null,
//     setUser: () => {},
//     setToken: () => {},
// });

// export const ContextProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

//     const setToken = (token) => {
//         _setToken(token);
//         if (token) {
//             localStorage.setItem('ACCESS_TOKEN', token);
//         } else {
//             localStorage.removeItem('ACCESS_TOKEN');
//         }
//     };

//     const value = useMemo(() => ({
//         user,
//         token,
//         setUser,
//         setToken,
//     }), [user, token]);

//     return (
//         <stateContext.Provider value={value}>
//             {children}
//         </stateContext.Provider>
//     );
// }

// export const useStateContext = () => useContext(stateContext);


import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    // const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    // const setToken = (token) => {
    //     _setToken = token;
    //     if(token) {
    //         localStorage.setItem('ACCESS_TOKEN', token);
    //     } else {
    //         localStorage.removeItem('ACCESS_TOKEN');
    //     }
    // }
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