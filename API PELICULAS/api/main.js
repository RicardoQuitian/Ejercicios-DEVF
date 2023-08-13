import { buscarPeliculas } from "./controllers/controllers.js";

let posters = document.getElementById("posters")
buscarPeliculas ("one piece").then(function(res){ 
let arreglo_peliculas=res.Search
let html = "" 
console.log (arreglo_peliculas)  
arreglo_peliculas.forEach((elemento) => {
html += `<img src = " ${elemento.Poster}">`
console.log(elemento.Poster) 
});
posters.innerHTML += html
})
