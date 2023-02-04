const pokemonFetch = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(async (response) => response.json())
        .then((pokemonsObject) => {
        createPokemon(pokemonsObject);
    })
        .catch((error) => {
        console.error(error);
    });
};
const pokemonsFetch = (id) => {
    for (let i = 1; i <= id; i++) {
        pokemonFetch(i);
    }
};
// PokemonsFetch(386);
const createPokemon = (pokemon) => {
    const gif = document.createElement("img");
    gif.src =
        pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    // Container.appendChild(gif);
};
