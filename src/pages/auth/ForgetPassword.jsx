import { Link } from "react-router";
import { BotonPrincipal } from "../../components/Buttons";

export function ForgetPassword() {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-auto lg:w-[600px] bg-white p-8 rounded-sm">
                <h1 className="text-primary font-bold text-5xl m-10 text-center">¿Olvidaste tu contraseña?</h1>

                <form action="">
                    <div className="mb-4">
                        <input type="email" name="" id="" className="w-full rounded border px-3 py-2 placeholder-primary text-sm mb-2" placeholder="Email"/>
                        <span className="text-sm">Introduce el correo asociado a tu cuenta.</span>
                    </div>
                    <div className="mb-8"><BotonPrincipal  text="Enviar enlace de recuperación"/></div>
                    
                </form>
                <div className="flex flex-col items-center gap-4">
                    <span className="flex items-center gap-2">¿Recordaste tu contraseña?<Link to="/login" className="text-secondary hover:text-primary transition-colors">Inicia sesión</Link></span>
                    <span className="flex items-center gap-2">¿No tienes cuenta? <Link to="/registro" className="text-secondary hover:text-primary transition-colors">Regístrate</Link></span>
                </div>
            </div>
        </div>
        </>
    )
}