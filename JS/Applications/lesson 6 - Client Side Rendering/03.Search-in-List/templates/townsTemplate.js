import { html } from "../node_modules/lit-html/lit-html.js";

const resultElement = document.getElementById("result");

export default (data, searchText) => {
    let isActive = "";
    let amountOfMatches = 0;

    let template = html`
        <ul>
            ${data.map((town) => {
                isActive = "";

                if (!!searchText && town.includes(searchText)) {
                    isActive = "active";
                    amountOfMatches++;
                }
                return html`<li class=${isActive}>${town}</li>`;
            })}
        </ul>
    `;

    if (!!amountOfMatches) {
        resultElement.textContent = `${amountOfMatches} matches found`;
    } else {
        resultElement.textContent = "";
    }

    return template;
};
