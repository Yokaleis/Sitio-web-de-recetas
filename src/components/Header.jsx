import { BotonPrincipal } from "./Buttons";

import headerImg from "../assets/images/food-girl-fitness.png"

export function Header() {
    return (
        <>
        <div className="w-[90%] m-auto mb-20 text-center">
            <h1 className="text-primary font-bold text-5xl m-10">Easy and healthy food, without any hassles</h1>
            <p className="text-primary font-normal text-xl m-5">Nutritious recipes, wellness tips, balanced meal plans, and resources to transform your lifestyle. 
                <br/>Everything you need to take care of yourself, all in one place
            </p>
            <div className="w-full h-[510px] bg-cover bg-center mb-5 rounded-sm" style={{ backgroundImage: `url(${headerImg})` }}>
            </div>
            <BotonPrincipal text="Quiero recetas personalizadas"/>
        </div>
        </>
    )
}

export function Hero() {
    return (
        <>
        <div className="w-[90%] m-auto mb-20 text-center">
            <h1 className="text-primary font-bold text-5xl m-10">Easy and nutritious recipes for your everyday life</h1>
            <p className="text-primary font-normal text-xl m-5">Discover a space designed just for you, where every recipe combines flavor, practicality, and well-being.
                <br/> Here you'll find quick options for your busiest days, balanced dishes that take care of your health, and creative ideas that transform simple ingredients into memorable experiences. 
                <br/> Our catalog is designed to inspire and support you every step of the way: from energizing breakfasts to light dinners, always with clear and accessible instructions that make cooking a pleasure, not a chore.
            </p>
        </div>
        </>
    )
}