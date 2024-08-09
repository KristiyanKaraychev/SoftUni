import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const editItemTemplate = (data, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="model"
                    id="model"
                    placeholder="Model"
                    .value="${data.model}"
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="car-image"
                    placeholder="Your Car Image URL"
                    .value="${data.imageUrl}"
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price in Euro"
                    .value="${data.price}"
                />
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="Weight in Kg"
                    .value="${data.weight}"
                />
                <input
                    type="text"
                    name="speed"
                    id="speed"
                    placeholder="Top Speed in Kmh"
                    .value="${data.speed}"
                />
                <textarea
                    id="about"
                    name="about"
                    placeholder="More About The Car"
                    rows="10"
                    cols="50"
                    .value="${data.about}"
                ></textarea>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export function loadEditItemPage(context) {
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData);

        if (helpers.formValidationHelper(data)) {
            return;
        }

        dataService
            .updateEntry(context.params.id, data)
            .then(() => context.page.redirect(`/details/${context.params.id}`));
    };

    dataService.getSingleEntry(context.params.id).then((data) => {
        if (!authService.isOwner(data._ownerId)) {
            alert("You are not the owner and you cannot edit");
            return;
        }

        context.render(editItemTemplate(data, onSubmit));
    });
}
