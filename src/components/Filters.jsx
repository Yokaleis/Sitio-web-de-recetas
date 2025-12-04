import { useId } from "react";
import { useFiltersHook } from "../hooks/recipeFilter";


export function FilterRecipes() {
    const { filters, setFilters } = useFiltersHook();

    //IDs unicos para los selects 
    const prepTimeId = useId();
    const cookingTimeId = useId();

    const handleChangeFilter = (e) => {
        const { name, value } = e.target;
        setFilters((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    console.log(handleChangeFilter)

    return (
        <>
              {/* <label htmlFor="opciones" className="block mb-2 text-sm font-medium text-gray-700">Selecciona una porción</label> */}
                <select name="preptime" id={prepTimeId} onChange={handleChangeFilter} value={filters.preptime} placeholder="Tiempo de preparación"
                className="rounded border px-3 py-2 text-primary text-sm" >
                    <option value="all">Tiempo de preparación</option>
                    <option value="0">0 minutos</option>
                    <option value="10">10 minutos</option>
                    <option value="15">15 minutos</option>
                    <option value="20">20 minutos</option>
                    <option value="25">25 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="35">35 minutos</option>
                    <option value="40">40 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="50">50 minutos</option>
                </select>
                {/* <label htmlFor="opciones" className="block mb-2 text-sm font-medium text-gray-700">Selecciona una porción</label> */}
                <select name="cookingtime" id={cookingTimeId} onChange={handleChangeFilter} value={filters.cookingtime} placeholder="Tiempo de cocción" 
                className="rounded border px-3 py-2 text-primary text-sm">
                    <option value="all">Tiempo de cocción</option>
                    <option value="0">0 minutos</option>
                    <option value="10">10 minutos</option>
                    <option value="15">15 minutos</option>
                    <option value="20">20 minutos</option>
                    <option value="25">25 minutos</option>
                    <option value="30">30 minutos</option>
                    <option value="35">35 minutos</option>
                    <option value="40">40 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="50">50 minutos</option>
                </select>
        </>
    )
}