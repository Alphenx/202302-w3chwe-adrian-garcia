import Component from "../Component/Component.js";

export default class Header extends Component {
  #title: string;
  constructor(
    title: string,
    parentElement: HTMLElement | undefined,
    cssClasses = ""
  ) {
    super(parentElement, "main-header", "header");
    this.#title = title;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `
      <img src="./assets/img/pokemon-logo.svg" alt="Pokemon logo" width="300px">
      <img src="./assets/img/sardiner.webp" alt="Poke espeto" width="150px">
      <h1>${this.#title}</h1>`;
  }
}
