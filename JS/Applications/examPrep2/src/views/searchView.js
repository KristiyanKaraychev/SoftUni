import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";

const foundCarTemplate = (car) => html`
    <!--If there are matches display a div with information about every motorcycle-->
    <div class="car">
        <img src="${car.imageUrl}" alt="${car.imageUrl}" />
        <h3 class="model">${car.model}</h3>
        <a class="details-btn" href="/details/${car._id}">More Info</a>
    </div>
`;

const searchTemplate = (data, onSubmit) => html`
    <!-- Search page -->
    <section id="search">
        <div class="form">
            <h4>Search</h4>
            <form class="search-form" @submit=${onSubmit}>
                <input type="text" name="search" id="search-input" />
                <button class="button-list">Search</button>
            </form>
        </div>
        <div class="search-result">
            ${data.length > 0
                ? html`${data.map((car) => foundCarTemplate(car))}`
                : html` <h2 class="no-avaliable">No result.</h2>`}
        </div>
    </section>
`;

export function loadSearchPage(context) {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let carModel = formData.get("search");

        if (!carModel) {
            window.alert("Please fill in the text box");
            return;
        }

        dataService.searchCar(carModel).then((data) => {
            context.render(searchTemplate(data, onSubmit));
        });
    };

    context.render(searchTemplate([], onSubmit));
}
