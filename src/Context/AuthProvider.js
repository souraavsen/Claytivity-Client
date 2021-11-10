import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthContext = createContext();

// Using contextapi sharing or providing data as value to access from the other components
const AuthProvider = ({ children }) => {
    const Contexts = useFirebase();
    return (
      <AuthContext.Provider value={Contexts}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;

