import React, { useState, createContext } from "react";

// Create the menu context
const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  // Access this state around the app
  const [isOpen, setNav] = useState([]);

  return (
    <MenuContext.Provider value={[!isOpen, setNav]}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
