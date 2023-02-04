import Component from "../Component/Component.js";
import Header from "../Header/Header.js";

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "div");
    this.#children = [
      new Header("Pokedex oficial de Espetocoders", parentElement),
    ];
  }

  render(): void {
    super.render();
    this.#children.forEach((component) => {
      component.render();
    });
  }
}
