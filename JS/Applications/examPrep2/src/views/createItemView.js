import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const itemTemplate = (onSubmit) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form class="create-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="car-image"
                    placeholder="Your Car Image URL"
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price in Euro"
                />
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="Weight in Kg"
                />
                <input
                    type="text"
                    name="speed"
                    id="speed"
                    placeholder="Top Speed in Kmh"
                />
                <textarea
                    id="about"
                    name="about"
                    placeholder="More About The Car"
                    rows="10"
                    cols="50"
                ></textarea>
                <button type="submit">Add</button>
            </form>
        </div>
    </section>
`;

export function loadCreateItemPage(context) {
    console.log("Create Item Page");

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData);

        if (helpers.formValidationHelper(data)) {
            return;
        }

        dataService.createEntry(data).then(() => {
            context.page.redirect("/dashboard");
        });
    };

    context.render(itemTemplate(onSubmit));
}
