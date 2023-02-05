import { pokemonFetchPage } from "../App/App.js";
import Component from "../Component/Component.js";

export default class Button extends Component {
  #buttonPrevious: string;
  #buttonNext: string;
  page = 0;
  constructor(
    buttonPrevious: string,
    buttonNext: string,
    parentElement: HTMLElement | undefined
  ) {
    super(parentElement, "poke-cards-container__btn", "div");
    this.#buttonPrevious = buttonPrevious;
    this.#buttonNext = buttonNext;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<input type="button" value="${
      this.#buttonPrevious
    }"><input type="button" value="${this.#buttonNext}">`;
  }
}
