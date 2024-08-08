import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";

const itemTemplate = (item) => html`
    <div class="character">
        <img src="${item.imageUrl}" alt="example2" />
        <div class="hero-info">
            <h3 class="category">${item.category}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
        </div>
    </div>
`;

const dashboardTemplate = (data) => html`
    <!-- Dashboard page -->
    <h2>Characters</h2>
    <section id="characters">
        <!-- Display a div with information about every post (if any)-->
        ${data.length > 0
            ? html`${data.map((item) => itemTemplate(item))}`
            : html`<!-- Display an h2 if there are no posts -->
                  <h2>No added Heroes yet.</h2>`}
    </section>
`;

export function loadDashboardPage(context) {
    dataService.getData().then((data) => {
        console.log(data);
        context.render(dashboardTemplate(data));
    });
}
