import Component from "../Component/Component.js";
import type PokemonTemplate from "../pokemon-types.js";

export default class Card extends Component {
  #pokemon: PokemonTemplate;
  constructor(
    parentElement: HTMLElement | undefined,
    pokemon: PokemonTemplate
  ) {
    super(parentElement, "poke-cards__pokemon", "article");
    this.#pokemon = pokemon;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `
     <img src="${this.#pokemon.img}" alt="${
      this.#pokemon.pokeName
    }" class="pokemon__img">
          <p class="pokemon__number">#${this.#pokemon.id
            .toString()
            .padStart(3, "0")}</p>
          <h4 class="pokemon__name">${this.#pokemon.pokeName}</h4>
    `;
  }
}
