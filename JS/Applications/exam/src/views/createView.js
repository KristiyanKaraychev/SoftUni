import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const createTattooTemplate = (onSubmit) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add tattoo</h2>
            <form class="create-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Tattoo Type"
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                ></textarea>
                <select id="user-type" name="user-type">
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">
                        First Time in Tattoo
                    </option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Add tattoo</button>
            </form>
        </div>
    </section>
`;

export function loadCreatePage(context) {
    console.log("Create Item Page");

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData);

        if (helpers.formValidationHelper(data)) {
            return;
        }

        let formattedData = {
            type: data.type,
            imageUrl: data["image-url"],
            description: data.description,
            userType: data["user-type"],
        };

        dataService.createEntry(formattedData).then(() => {
            context.page.redirect("/dashboard");
        });
    };

    context.render(createTattooTemplate(onSubmit));
}
