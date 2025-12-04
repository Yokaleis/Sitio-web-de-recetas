import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";


export function useFiltersHook() {

    const { filters, setFilters } = useContext(FiltersContext);
    console.log(filters) 
    
    const filtersGeneral = (recipes) => {
        return recipes.filter((r) => {
            return(
                (filters.preptime === 'all' || Number(r.preptime) === Number(filters.preptime)) &&
                (filters.cookingtime === 'all' || Number(r.cookingtime) === Number(filters.cookingtime))
            )
        });
    };

   
console.log("valor en filtros:", filters.preptime);



    return { filters, setFilters, filtersGeneral}
}