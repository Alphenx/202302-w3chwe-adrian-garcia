import type ComponentStructure from "../types.js";

export default class Component implements ComponentStructure {
  addListeners?: () => void;

  domElement: HTMLElement;

  constructor(
    private readonly parentElement: HTMLElement,
    className: string,
    tag = "div"
  ) {
    this.domElement = document.createElement(tag);
    this.domElement.className = className;
  }

  render(): void {
    this.parentElement.appendChild(this.domElement);
  }
}
