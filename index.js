//EJERCICIO 1//
async function getRandomPokemon() {
    const id = Math.floor(Math.random() * 1025) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}
//EJERCICIO 2//
async function getImageAndName(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }
}
//EJERCICIO 3//
async function printImageAndName(pokemon = Math.floor(Math.random() * 1025) + 1) {
    const datos = await getImageAndName(pokemon);
    return `<section>
    <img src="${datos.img}" alt="${datos.name}">
    <h1>${datos.name}</h1>
</section>`;
}
//EJERCICIO 4//
async function getRandomDogImage() {
    const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
    const datos = await respuesta.json();
    return datos.message;
}
//EJERCICIO 5//
async function getRandomPokemonImage() {
    const id = Math.floor(Math.random() * 1025) + 1;
    const datos = await getImageAndName(id);
    return datos.img;
}
//EJERCICIO 6//
async function printPugVsPikachu() {
    const respuestaPug = await fetch("https://dog.ceo/api/breed/pug/images/random");
    const datosPug = await respuestaPug.json();
    const imgPug = datosPug.message;

    const pikachu = await getImageAndName("pikachu");

    const batalla = document.createElement("section");
    batalla.style.display = "flex";
    batalla.style.alignItems = "center";
    batalla.style.gap = "20px";
    batalla.innerHTML = `
    <div>
      <img src="${imgPug}" alt="Pug" width="200">
      <h2>Pug</h2>
    </div>
    <h2>VS</h2>
    <div>
      <img src="${pikachu.img}" alt="Pikachu" width="200">
      <h2>Pikachu</h2>
    </div>`;

    document.body.appendChild(batalla);
}
//EJERCICIO 7//
async function getRandomCharacter() {
    const id = Math.floor(Math.random() * 826) + 1;
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}
//EJERCICIO 8//
async function getRandomCharacterInfo() {
    const personaje = await getRandomCharacter();
    const urlPrimerEpisodio = personaje.episode[0];
    const respuesta = await fetch(urlPrimerEpisodio);
    const episodio = await respuesta.json();
    const img = personaje.image;
    const name = personaje.name;
    const episodes = personaje.episode;
    const firstEpisode = episodio.name;
    const dateEpisode = episodio.air_date;

    return { img, name, episodes, firstEpisode, dateEpisode };
}
//EJERCICIO 9//
async function printRandomCharacterInfo() {
  const info = await getRandomCharacterInfo();

  const tarjeta = document.createElement("section");
  tarjeta.innerHTML = `
    <img src="${info.img}" alt="${info.name}">
    <h2>${info.name}</h2>
    <p>Aparece en ${info.episodes.length} episodios</p>
    <p>Primer episodio: ${info.firstEpisode} (${info.dateEpisode})</p>`;

  document.body.appendChild(tarjeta);
}
//PINTAR AL CARGAR LA PÁGINA//
document.addEventListener("DOMContentLoaded", () => {
    printPugVsPikachu();
    printRandomCharacterInfo();
});