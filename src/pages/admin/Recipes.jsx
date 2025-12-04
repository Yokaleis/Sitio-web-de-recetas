import { useEffect, useRef, useState } from "react";
import { CardRecipe } from "../../components/Cards";
import { Hero } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer"
import { recipes } from "../../mockups/recipes";
import { FilterRecipes } from "../../components/Filters";
import { useFiltersHook } from "../../hooks/recipeFilter";

export function FilterSearch() {    
    
    const [recipe, setRecipe] = useState(recipes);
    //Filtro Busqueda
    const [inputValue, setInputValue] = useState('');
    const [filterRecipeList, setFilterRecipeList] = useState(recipe);
    const input = useRef(null);

    useEffect(() => {
        fetch(recipe)
            .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setFilterRecipeList(data); })
    }, []);

    const filterRecipe = (value) => {
        setInputValue(value);
        const filterRecipes = recipe.filter((r) =>
            r.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilterRecipeList(filterRecipes);
    };
    const handleOnClick = (title) => {
        input.current.value = title;
        setFilterRecipeList(recipe);
    };

        //Filtro Selects
    const { filtersGeneral } = useFiltersHook();
    const filtros  = filtersGeneral(filterRecipeList);

    return (
        <>
            <div className="w-full p-6">
            <Navbar />
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex gap-3 p-2">
                    <FilterRecipes/>
                </div> 
                <div className="p-2 grid justify-items-end">
                    <input
                    className="w-full rounded border px-3 py-2 placeholder-primary text-sm" 
                ref={input}
                type="search"
                placeholder="Busca tu receta favorita por ejemplo una Pizza Margarita" 
                onChange={(e) => filterRecipe(e.target.value)}
            />
                </div>
            </div>
            <Recipes filters={{filterRecipeList, filtros}} />

           
        </div>
        <Footer/>
        </>
    ); 
}

export function Recipes({ filters }) {
    const { filterRecipeList, filtros } = filters;
    const dataToRender = filtros.length === 0 && filters.preptime === 'all' && filters.cookingtime === 'all'
    ? filterRecipeList
    : filtros;


    console.log(filters)
    console.log(filtros)
    return (
        <>
            <div>
                <section className="grid lg:grid-cols-3 gap-10 p-6 m-auto mb-10 justify-center">
                    {dataToRender && dataToRender.map((recipe) => (
                        <CardRecipe key={recipe.id} titulo={recipe.title} imagen={recipe.image} porciones={recipe.servings}
                            coccion={recipe.cookingtime} preparacion={recipe.preptime} descripcion={recipe.description} />
                   ))}
                </section>
            </div>

        </>
    )
}