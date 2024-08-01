import { html, render } from "../node_modules/lit-html/lit-html.js";

export default (data) => html`
    <ul>
        ${data.map((town) => html`<li>${town}</li>`)}
    </ul>
`;
