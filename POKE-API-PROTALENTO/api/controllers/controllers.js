export async function buscarPokemon() {
  let data = await fetch("https://pokeapi.co/api/v2/pokemon/");
  let dataParseada = await data.json();
  //console.log (dataParseada);//
  return dataParseada.results; /*La data parseada siempre llega con muchos datos, aqui es donde nosotros elegimos la información que queremos, las apis siempre bienen con muchos datos, nosotros debemos dejas solo lo que necestitamos.*/
}
