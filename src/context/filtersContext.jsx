import { createContext, useState } from "react";

export const FiltersContext = createContext();


export function FiltersProviders({ children }) {
    const [ filters, setFilters ] = useState({
        preptime: 'all',
        cookingtime: 'all'
    });

    return(
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    );
}