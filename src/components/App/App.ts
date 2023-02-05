/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Button from "../Button/Button.js";
import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
import type PokemonTemplate from "../pokemon-types.js";

export default class App extends Component {
  #headerComponent: Header;
  #classListComponent: PokemonTemplate[];
  #btnComponent: Button;
  constructor(
    parentElement: HTMLElement | undefined,
    pokemonsList: PokemonTemplate[]
  ) {
    super(parentElement, "poke-cards-container", "section");
    const appContainer = document.querySelector<HTMLElement>(".root");
    this.#headerComponent = new Header(
      "Pokedex oficial de Espetocoders",
      appContainer
    );
    this.#classListComponent = pokemonsList;
    this.#btnComponent = new Button("Previous", "Next", appContainer);
  }

  render(): void {
    super.render();
    this.#headerComponent.render();
    this.#btnComponent.render();
    this.#classListComponent.forEach((pokemon) => {
      new Card(this.domElement, pokemon).render();
    });
  }
}

export const pokemonFetchPage = (pokemonPage: number): any => {
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

export const pokeInfoArr: Array<{ id: number; img: string; pokeName: string }> =
  [];
const getPokemon = (pokemonsObject: {
  results: Array<{ url: RequestInfo | URL }>;
}) => {
  pokemonsObject.results.forEach((poke) => {
    fetch(poke.url)
      .then(async (res) => res.json())
      .then((pokemonInfo) => {
        const pokeInfo: { id: number; img: string; pokeName: string } = {
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

setTimeout(() => {
  const buttons = document.querySelector(".poke-cards-container__btn");
  let page = 20;
  buttons?.addEventListener("click", () => {
    page += 20;
    pokemonFetchPage(page);
  });
}, 1000);
pokemonFetchPage(0);
