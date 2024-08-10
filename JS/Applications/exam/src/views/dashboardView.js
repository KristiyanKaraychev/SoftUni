import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";

const tattooTemplate = (tattoo) => html`
    <!-- Display a div with information about every post (if any)-->
    <div class="tattoo">
        <img src="${tattoo.imageUrl}" alt="${tattoo.imageUrl}" />
        <div class="tattoo-info">
            <h3 class="type">${tattoo.type}</h3>
            <span>Uploaded by </span>
            <p class="user-type">${tattoo.userType}</p>
            <a class="details-btn" href="/details/${tattoo._id}">Learn More</a>
        </div>
    </div>
`;

const dashboardTemplate = (data) => html`
    <!-- Dashboard page -->
    <h2>Collection</h2>

    ${data.length > 0
        ? html`<section id="tattoos">
              ${data.map((tattoo) => tattooTemplate(tattoo))}
          </section>`
        : html`<h2 id="no-tattoo">
              Collection is empty, be the first to contribute
          </h2>`}
`;

export function loadDashboardPage(context) {
    dataService.getData().then((data) => {
        console.log(data);
        context.render(dashboardTemplate(data));
    });
}
