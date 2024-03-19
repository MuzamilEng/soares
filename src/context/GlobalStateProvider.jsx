// GlobalStateContext.js
import React, { createContext, useContext,useState } from 'react';



// Create context
const GlobalStateContext = createContext();

// Create provider
export const GlobalStateProvider = ({ children }) => {
const [menueBar,setMenueBar] = useState(false)
const [hamburger,setHamburger] = useState(true)

  return (
    <GlobalStateContext.Provider value={{ menueBar,setMenueBar,hamburger,setHamburger }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => useContext(GlobalStateContext);
