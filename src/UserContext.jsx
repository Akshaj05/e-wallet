import React, { useState } from "react";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [uid, setUid] = useState(null);

  return (
    <UserContext.Provider value={{ uid, setUid }}>
      {children}
    </UserContext.Provider>
  );
}
