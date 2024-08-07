import { render } from "../../node_modules/lit-html/lit-html.js";

export function renderMiddleware(context, next) {
    let root = document.querySelector(".container");

    context.render = (template) => render(template, root);
    next();
}
