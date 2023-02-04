import Component from "../Component/Component.js";

export default class App extends Component {
  #children: Component[];

  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "div");
    this.#children = [];
  }

  render(): void {
    super.render();
    this.#children.forEach((component) => {
      component.render();
    });
  }
}
