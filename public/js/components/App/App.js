import Component from "../Component/Component.js";
import Header from "../Header/Header.js";
export default class App extends Component {
    #children;
    constructor(parentElement) {
        super(parentElement, "div");
        this.#children = [
            new Header("Pokedex oficial de Espetocoders", parentElement),
        ];
    }
    render() {
        super.render();
        this.#children.forEach((component) => {
            component.render();
        });
    }
}
