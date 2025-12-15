import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { BotonPrincipal } from "../../components/Buttons";

import { db } from "../../credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../credenciales";
import { doc, getDoc } from "firebase/firestore";

export function Login() {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const functionAuth = async(e) => {
        e.preventDefault();
        const emailAuth = e.target.email.value;
        const passwordAuth = e.target.password.value;
        console.log(emailAuth);

        try {
            const userCredential = await signInWithEmailAndPassword (auth, emailAuth, passwordAuth);
            const user = userCredential.user;

            //Trayendo los datos 
            const userDocRef = doc(db, "usuarios", user.uid);
            const userDoc = await getDoc(userDocRef);

            if(userDoc.exists()){
                console.log("Los datos del usuario: ", userDoc.data())
            }
            navigate("/");
        } catch (error) {
            console.error("Error al hacer login", error.code, error.message);
            setError("Credenciales inválidas o usuario no registrado")
        }

        /* try {
            await signInWithEmailAndPassword (auth, emailAuth, passwordAuth);
            navigate("/");
        } catch (err) {
      console.error("Error en login:", err.code, err.message);
      setError("Credenciales inválidas o usuario no registrado");
    } */
    }
    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-auto lg:w-[600px] bg-white p-8 rounded-sm">
                <h1 className="text-primary font-bold text-5xl m-10 text-center">Bienvenido</h1>

                <form onSubmit={functionAuth}>
                    <div className="mb-4">
                        <input type="email" name="email" id="email" className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" name="password" id="password" className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Password"/>
                    </div>
                    <div className="mb-8"><BotonPrincipal  text="Inicia sesión"/></div>
                    
                </form>
                <div className="flex flex-col items-center gap-4">
                    <Link to="/olvide-contraseña" className="hover:text-primary transition-colors">¿Olvidaste tu contraseña?</Link>
                    <span className="flex items-center gap-2">¿No tienes cuenta? <Link to="/registro" className="text-secondary hover:text-primary transition-colors">Regístrate</Link></span>
                </div>
            </div>
        </div>
        </>
    )
}