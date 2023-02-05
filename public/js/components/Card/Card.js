import Component from "../Component/Component.js";
export default class Card extends Component {
    #pokemon;
    constructor(parentElement, pokemon, cssClasses = "poke-cards__pokemon") {
        super(parentElement, cssClasses, "article");
        this.#pokemon = pokemon;
    }
    render() {
        super.render();
        this.domElement.innerHTML = `
     <img src="${this.#pokemon.img}" alt="${this.#pokemon.pokeName}" class="pokemon__img">
          <p class="pokemon__number">#${this.#pokemon.id
            .toString()
            .padStart(3, "0")}</p>
          <h4 class="pokemon__name">${this.#pokemon.pokeName}</h4>
    `;
    }
}
