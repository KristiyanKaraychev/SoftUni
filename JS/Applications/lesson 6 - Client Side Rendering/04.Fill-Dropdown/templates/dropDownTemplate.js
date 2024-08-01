import { html } from "../node_modules/lit-html/lit-html.js";

export default (data) => html`
    ${data.map(
        (option) => html`<option value=${option._id}>${option.text}</option>`
    )}
`;
