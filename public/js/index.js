import App, { pokeInfoArr } from "./components/App/App.js";
const app = new App(document.body, pokeInfoArr);
setTimeout(() => {
    app.render();
}, 500);
