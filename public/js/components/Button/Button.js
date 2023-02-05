import Component from "../Component/Component.js";
export default class Button extends Component {
    #buttonPrevious;
    #buttonNext;
    page = 0;
    constructor(buttonPrevious, buttonNext, parentElement) {
        super(parentElement, "poke-cards-container__btn", "div");
        this.#buttonPrevious = buttonPrevious;
        this.#buttonNext = buttonNext;
    }
    render() {
        super.render();
        this.domElement.innerHTML = `<input type="button" value="${this.#buttonPrevious}"><input type="button" value="${this.#buttonNext}">`;
    }
}
