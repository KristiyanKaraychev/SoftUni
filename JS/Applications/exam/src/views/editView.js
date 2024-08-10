import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const editTattooTemplate = (tattoo, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit tattoo</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="type"
                    id="type"
                    placeholder="Tattoo Type"
                    .value="${tattoo.type}"
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                    .value="${tattoo.imageUrl}"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    rows="2"
                    cols="10"
                    .value="${tattoo.description}"
                ></textarea>
                <select
                    id="user-type"
                    name="user-type"
                    .value="${tattoo.userType}"
                >
                    <option value="" disabled selected>Select your role</option>
                    <option value="Tattoo Artist">Tattoo Artist</option>
                    <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
                    <option value="First Time in Tattoo">
                        First Time in Tattoo
                    </option>
                    <option value="Tattoo Collector">Tattoo Collector</option>
                </select>
                <button type="submit">Edit</button>
            </form>
        </div>
    </section>
`;

export function loadEditPage(context) {
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

        dataService
            .updateEntry(context.params.id, formattedData)
            .then(() => context.page.redirect(`/details/${context.params.id}`));
    };

    dataService.getSingleEntry(context.params.id).then((data) => {
        if (!authService.isOwner(data._ownerId)) {
            alert("You are not the owner and you cannot edit");
            return;
        }

        context.render(editTattooTemplate(data, onSubmit));
    });
}
