export function  BotonPrincipal({text}){
    return(
        <button className="bg-secondary text-white px-6 py-2 rounded-sm hover:bg-primary">
            {text}
        </button>
    )
}

export function  BotonSecondary({text}){
    return(
        <button className="bg-primary text-white px-6 py-2 rounded-sm">
            {text}
        </button>
    )
}