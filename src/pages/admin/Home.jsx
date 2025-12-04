import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";

import { IconServiceP, IconServiceE, IconServiceC } from "../../assets/icons"
import { CardRecipe, CardProduct } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { BotonPrincipal } from "../../components/Buttons";
import { recipes } from "../../mockups/recipes";

export function Home() {
    return (
        <>
            <div className="p-6">
                <Navbar />
                <Header />
                <h1 className="text-primary font-normal text-center text-3xl m-5">Easy and healthy food, without any hassles</h1>

                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11 m-auto mb-10 p-20  justify-between">
                    <div className="grid ">
                        <div className="mb-3">
                            <IconServiceP />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Planificador Personalizado de Recetas</h4>
                            <p>Un asistente interactivo que adapta recetas según objetivos: bajar de peso, ganar masa muscular, mejorar energía.</p>

                        </div>
                    </div>

                    <div className="grid">
                        <div className="mb-3">
                            <IconServiceE />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Entrenamiento + Nutrición Integrados</h4>
                            <p>Servicio que combina rutinas de ejercicio con recetas específicas para potenciar resultados.</p>

                        </div>
                    </div>

                    <div className="grid">
                        <div className="mb-3">
                            <IconServiceC />
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Comunidad Saludable Interactiva</h4>
                            <p>Espacio social donde los usuarios comparten fotos de sus platos, tips de entrenamiento y logros.</p>

                        </div>


                    </div>
                </section>

                {/* PRODUCTS */}
                <h1 className="text-primary font-normal text-center text-3xl m-5">Our healthy products</h1>
                <section className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-10 p-6 m-auto mb-10 justify-center">
                    <CardProduct />
                </section>
                {/* BLOG */}
                <div className="grid lg:grid-cols-2 md:grid-cols-1">
                    <div className="p-4">
                        <h2 className="text-primary font-normal text-3xl mb-5">Green Restaurant: Where flavor meets sustainability</h2>
                        <p className="mb-5">In the heart of the city, a new space has emerged that redefines what it means to eat well: Restaurante Verde, a place where every detail is designed to care for you and the planet.
                            <br />Green Restaurant is a space that invites you to reflect on how our daily choices can transform the world. Here, every meal is an act of love for your body and for the Earth.
                        </p>
                        <BotonPrincipal className="mb-5" text="Read more" />
                    </div>
                    <div>
                        <img className="rounded-lg h-96 m-auto" src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?_gl=1*lx5l93*_ga*MjY1NzQwNTA5LjE3NjA4MDQxNzc.*_ga_8JE65Q40S6*czE3NjMyMjAwMDQkbzQkZzEkdDE3NjMyMjAwNDYkajE4JGwwJGgw" alt="" sizes="" srcset="" />
                    </div>
                </div>
                {/* RECIPES */}
                <h1 className="text-primary font-normal text-center text-3xl m-5">Recipes</h1>
                <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-6 m-auto mb-10 justify-center">
                    {recipes.slice(0, 3).map((recipe) => (
                        <CardRecipe id={recipe.id} titulo={recipe.title} imagen={recipe.image} porciones={recipe.servings}
                            coccion={recipe.cookingtime} preparacion={recipe.preptime} descripcion={recipe.description} />
                    ))}
                </section>
            </div>

            <Footer />
        </>
    )
}