import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
//MODULOS FIREBASE
import appFirebase from "../credenciales"
const auth = getAuth(appFirebase)

const AuthContext = createContext(null)


export function AuthProvider({children}){
    const [usuario, setUsuario] = useState(null) 
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            setUsuario(usuarioFirebase || null)
            setLoading(false)
        })
        return () => unsuscribe();
    },[]);

    
    return <AuthContext.Provider value={{usuario, loading}}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext);
}