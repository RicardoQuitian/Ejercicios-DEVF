const API_KEY = "8d53d0ca"
const URL_PELICULAS = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

export async function buscarPeliculas (nombre){/*el async se coloca en una funcion para  hacer peticiones get*/
let resultado = await fetch (URL_PELICULAS+`&s=${nombre}`) /*Lo que hicimos con fetch fue llamar ciertos valores (url+&+parametro de busqueda"s"+nombre")*/
let objResultado = await resultado.json() /*A la variable anterior, se le hacen cambios y se guarda en otra variable*/
return objResultado /*Por último se llama la variable con todos los cambios agregados*/
}


