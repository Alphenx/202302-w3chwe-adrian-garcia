import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
import type PokemonTemplate from "../pokemon-types.js";

export default class CardList extends Component {
  #pokemons: PokemonTemplate[];
  constructor(
    pokemonsList: PokemonTemplate[],
    parentElement: HTMLElement | undefined
  ) {
    super(parentElement, "poke-cards", "ul");
    this.#pokemons = pokemonsList;
  }

  render(): void {
    super.render();
    this.#pokemons.forEach((pokemon) => {
      const liElement = document.createElement("li"); // <li>
      const pokeCard = new Card(liElement, pokemon); // <li> <article>....</article></li>
      pokeCard.render(); // Meto el article dentro de su parent, es decir, el liElement
      this.domElement.appendChild(liElement); // <ul><li>....</li></ul>
    });
  }
}
