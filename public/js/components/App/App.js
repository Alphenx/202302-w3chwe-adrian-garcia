/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
export default class App extends Component {
    #headerComponent;
    #classListComponent;
    constructor(parentElement, pokemonsList) {
        super(parentElement, "poke-cards-container", "section");
        const appContainer = document.querySelector(".root");
        this.#headerComponent = new Header("Pokedex oficial de Espetocoders", appContainer);
        this.#classListComponent = pokemonsList;
    }
    render() {
        super.render();
        this.#headerComponent.render();
        this.#classListComponent.forEach((pokemon) => {
            new Card(this.domElement, pokemon, "").render();
        });
    }
}
const pokemonFetchPage = (pokemonPage) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${pokemonPage}`)
        .then(async (response) => response.json())
        .then((pokemonsObject) => {
        console.log(pokemonsObject);
        getPokemon(pokemonsObject);
    })
        .catch((error) => {
        console.error(error);
    });
};
export const pokeInfoArr = [];
const getPokemon = (pokemonsObject) => {
    pokemonsObject.results.forEach((poke) => {
        fetch(poke.url)
            .then(async (res) => res.json())
            .then((pokemonInfo) => {
            const pokeInfo = {
                id: pokemonInfo.id,
                img: pokemonInfo.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default,
                pokeName: pokemonInfo.name,
            };
            pokeInfoArr.push(pokeInfo);
            pokeInfoArr.sort((a, b) => a.id - b.id);
            console.log(pokeInfoArr);
        })
            .catch((error) => {
            console.error(error);
        });
    });
    return pokeInfoArr;
};
pokemonFetchPage(0);
