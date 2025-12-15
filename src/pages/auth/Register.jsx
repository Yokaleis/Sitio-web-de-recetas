import { Link } from "react-router";
import { BotonPrincipal } from "../../components/Buttons";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = ({target: {name, value}}) => {
        //console.log(e.target.name, e.target.value)
        setUser({...user, [name]: value})
    }

    const hanldeSubmit = e => {
        e.preventDefault()
        guardarUsuario(user.email, user.password)
        console.log(user)
    }

    //Guardando data en FireBase
    /* const guardarUsuario = async () => {
        try {
            await addDoc(collection(db, "usuarios"),
        {
            nameUser: user.name,
            emailUser: user.email
        });
        console.log("Usuario guardado🔥🙌🏽")
        } catch (e) {
            console.log("Error al guardar 😅", e)
        }
    } */


        const guardarUsuario = async (emailAuth, passwordAuth) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailAuth, passwordAuth);
            console.log("Usuario guardado🔥🙌🏽", userCredential.user.uid)
        } catch (e) {
            console.log("Error al guardar 😅", e)
        }
    }
    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-auto lg:w-[600px] bg-white p-8 rounded-sm">
                <h1 className="text-primary font-bold text-5xl m-10 text-center">Regístrate</h1>

               <form onSubmit={hanldeSubmit}>
                <div className="mb-4">
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Nombre y Apellido"/>
                    </div>
                    <div className="mb-4">
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" name="password" id="password" onChange={handleChange} className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Password"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Confirmar password"/>
                    </div>
                    <div className="mb-8"><BotonPrincipal  text="Registrarme"/></div>
                    
                </form>
                <div className="flex flex-col items-center gap-4">
                    <span className="flex items-center gap-2">¿Ya tienes cuenta? <Link to="/login" className="text-secondary hover:text-primary transition-colors">Ir al login</Link></span>
                </div>
            </div>
        </div>
        </>
    )
}