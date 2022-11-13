import React, { createContext, useReducer, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    const [user, setUser] = useState({
        nome: 'Fabricio'
    })

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}