import { recipes } from "../mockups/recipes";
import { products } from "../mockups/products";
import { IconAlarm, IconCooking, IconServing } from "../assets/icons";
import { BotonPrincipal, BotonSecondary } from "./Buttons";



export function CardRecipe({ id, titulo, imagen, porciones, descripcion, coccion, preparacion}) {

    return (
        
        <>
         <div id={id} className="bg-white block max-w-full rounded-lg shadow-xs">
            <a href="#">
                <img className="rounded-t-lg h-[400px] w-full" src={imagen} alt="" />
            </a>
            <div className="p-6 mb-6">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{titulo}</h5>
                <p className="mb-3">{descripcion}</p>
                <div className="flex gap-2 mb-2 text-xs">
                    <div><IconServing/></div>
                    <span>Serving: {porciones} porciones</span>
                    <div><IconAlarm/></div>
                    <span>Preparation: {preparacion} minutos</span>
                </div>
                <div className="flex gap-2 mb-2 text-xs">
                    <div><IconCooking/></div>
                    <span>Cook: {coccion} minutos</span>
                </div>
            </div>
            <div className="text-center mb-6"><BotonPrincipal text="Ver receta"/></div>
        </div>
        </>

    )
}

export function CardProduct() {
    return(
        <>
        {products.map((product) => (
            <div className="bg-transparent block max-w-full m-auto rounded-lg shadow-xs">
        <img className="rounded-t-lg" src={product.imagen} alt="" />
            <div className="p-6 mb-6">
                <h5 className="mt-3 mb-6 text- text-center font-semibold tracking-tight text-heading">{product.nombre}</h5>
                <div className="flex justify-center gap-2 mb-2">
                    <span className="text-red-600 font-bold">{product.descuento}</span>
                    <span>{product.precio}</span>  
                </div>
            </div>
            <div className="text-center mb-6"><BotonSecondary text="Añadir al carrito"/></div>
        </div>
        ))}
        </>
    )
}