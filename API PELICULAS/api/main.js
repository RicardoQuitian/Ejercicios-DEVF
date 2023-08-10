import { buscarPeliculas } from "./controllers/controllers.js";

let posters = document.getElementById("posters")

buscarPeliculas ("one piece").then(function(res){ /*Aqui le puse el .then con el fin de guardar la funcion retornada en el archivo controllers. y le puse el nombre de res, exporte una funcion y le cambie el nombre, si no se le pone nombre no recoje nada desde el punto then*/
let arreglo_peliculas=res.Search /*Añadiendole el .Seacrch, nos trae solo el valor solicitado del json*/
console.log (arreglo_peliculas)  
arreglo_peliculas.forEach((elemento) => {/* Con forEach vamos a especificar que cada uno de los elementos dentro del arreglo va a tener un nombre, por cada uno de esos va a hacer una acción, y nos va a mostrar toda la información*/
posters.innerHTML += `<img src = " ${elemento.Poster}">`/*Con esta linea le estoy indicando que me traiga una imagen, con el = que me inprima solo el primer resultado, pero con el += le indico que mne imprima todo*/
console.log(elemento.Poster) /*Con el.Poster le indicamos que nos traiga solo los poster de las peliculas*/
});
})
