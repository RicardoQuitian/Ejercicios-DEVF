export function saludar () {
    console.log ("Hello, my name is Luffy")

}

/*(export) se utiliza para indicarle a la funcion que està lista para ser exportada a otro archivo JS*/ 

export async function buscarPokemon(){

    let data = await fetch ("https://pokeapi.co/api/v2/pokemon/") /*con el await le estoy indicando que debe esperar a que la api responda,
    para poder seguir con la función*/
    let dataParseada = await data.json(); /* Con data.json parseo la data, para que nos muestre los datos parseados  En programación, parsear es el proceso de analizar una cadena de texto para identificar su estructura sintáctica y extraer información significativa de ella., como cuando hacemos la consulta desde Posmant */
    console.log(dataParseada);
}



/*async indica que va a ser una funcion asincrona,
fetch, estoy haciendo una consulta (get) al endpoint (link de la poke api)*/