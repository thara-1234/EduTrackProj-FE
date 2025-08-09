import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(() => {
    // ✅ Load from localStorage if available
    return localStorage.getItem('role') || null;
  });

  //  Keep localStorage in sync with context
  useEffect(() => {
    if (userRole) {
      localStorage.setItem('role', userRole);
    }
  }, [userRole]);

  return (
    <UserContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
