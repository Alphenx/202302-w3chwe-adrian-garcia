import Card from "../Card/Card.js";
import Component from "../Component/Component.js";
export default class CardList extends Component {
    #pokemons;
    constructor(pokemonsList, parentElement) {
        super(parentElement, "poke-cards", "ul");
        this.#pokemons = pokemonsList;
    }
    render() {
        super.render();
        this.#pokemons.forEach((pokemon) => {
            const liElement = document.createElement("li");
            const pokeCard = new Card(liElement, pokemon);
            pokeCard.render();
            this.domElement.appendChild(liElement);
        });
    }
}
