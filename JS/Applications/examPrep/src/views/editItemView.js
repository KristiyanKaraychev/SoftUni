import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const editItemTemplate = (data, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <img class="border" src="${data.imageUrl}" alt="" />
            <h2>Edit Character</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Character Type"
                    .value="${data.category}"
                />
                <input
                    type="text"
                    name="image-url"
                    id="image-url"
                    placeholder="Image URL"
                    .value="${data.imageUrl}"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    .value="${data.description}"
                    rows="2"
                    cols="10"
                ></textarea>
                <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    .value="${data.moreInfo}"
                    rows="2"
                    cols="10"
                ></textarea>
                <button type="submit">Edit</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
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

        let newData = {};

        newData.category = data.category;
        newData.imageUrl = data["image-url"];
        newData.description = data.description;
        newData.moreInfo = data["additional-info"];

        dataService
            .updateEntry(context.params.id, newData)
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
