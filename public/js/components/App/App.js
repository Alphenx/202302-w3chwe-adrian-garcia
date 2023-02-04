import Component from "../Component/Component.js";
export default class App extends Component {
    #children;
    constructor(parentElement) {
        super(parentElement, "div");
        this.#children = [];
    }
    render() {
        super.render();
        this.#children.forEach((component) => {
            component.render();
        });
    }
}
