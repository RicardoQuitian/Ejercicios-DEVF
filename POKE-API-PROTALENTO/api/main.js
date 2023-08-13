import { buscarPokemon } from "./controllers/controllers.js"; /*Desde está primera linea, en los corchetes, y despues de la coma(,)se pueden importar mas funciones*/

let root = document.getElementById ("root")

async function render() {
  let pokemones = await buscarPokemon();
  /*console.log(pokemones);*/

let html ="";
  pokemones.forEach((pokemon) => { /*Cada dato pokemon que iteremos en el array*/

    let cardPokemon = ` <div>
                            <span>${pokemon.name}</span>
                            <span>${pokemon.url}</span>
                         </div>`
    html += cardPokemon /*Con esto se esta evitando reenderizar la pagina 20 veces, lo que esta pasando, es que termina de ejecutar el dív, y se guarda en la variable (let html ="";), entonces va agregando las iteraciónes una detras de la otra, y al final cuando esté listo, lo que hace es guardar toda la información, y nos damos el lujo de reenderizar todo una sola vez*/
});
root.innerHTML += html /*luego me salgo del bloque de codigo del ForEach, de esta manera el resultado es el mismo al ejemplo anterior, pero si tuviera contedido de más peso se demoraría más*/
}


render();
 