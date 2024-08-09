import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";

const itemTemplate = (item) => html`
    <!-- Display a div with information about every post (if any)-->
    <div class="car">
        <img src="${item.imageUrl}" alt="${item.imageUrl}" />
        <h3 class="model">${item.model}</h3>
        <div class="specs">
            <p class="price">Price: €${item.price}</p>
            <p class="weight">Weight: ${item.weight} kg</p>
            <p class="top-speed">Top Speed: ${item.speed} kph</p>
        </div>
        <a class="details-btn" href="/details/${item._id}">More Info</a>
    </div>
`;

const dashboardTemplate = (data) => html`
    <!-- Dashboard page -->
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">
        ${data.length > 0
            ? html`${data.map((item) => itemTemplate(item))}`
            : html`<!-- Display an h2 if there are no posts -->
                  <h3 class="nothing">Nothing to see yet</h3>`}
    </section>
`;

export function loadDashboardPage(context) {
    dataService.getData().then((data) => {
        console.log(data);
        context.render(dashboardTemplate(data));
    });
}
