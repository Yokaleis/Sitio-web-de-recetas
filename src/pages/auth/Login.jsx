import { Link } from "react-router";
import { BotonPrincipal } from "../../components/Buttons";

export function Login() {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-auto lg:w-[600px] bg-white p-8 rounded-sm">
                <h1 className="text-primary font-bold text-5xl m-10 text-center">Bienvenido</h1>

                <form action="">
                    <div className="mb-4">
                        <input type="email" name="" id="" className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Email"/>
                    </div>
                    <div className="mb-4">
                        <input type="password" name="" id="" className="w-full rounded border px-3 py-2 placeholder-primary text-sm" placeholder="Password"/>
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