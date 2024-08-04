import { html } from "../node_modules/lit-html/lit-html.js";

export default (data, input) => {
    return html`
        ${data.map((e) => {
            let isSelected = "";

            if (!!input) {
                delete e["_id"];

                Object.values(e).forEach((e) => {
                    if (e.toLowerCase().includes(input.toLowerCase())) {
                        isSelected = "select";
                    }
                });
            }

            return html`<tr class=${isSelected}>
                <td>${e.firstName} ${e.lastName}</td>
                <td>${e.email}</td>
                <td>${e.course}</td>
            </tr>`;
        })}
    `;
};
