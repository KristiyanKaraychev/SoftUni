import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as helpers from "../utils/helpers.js";

const itemTemplate = (onSubmit) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Character</h2>
            <form class="create-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Character Type"
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
                <textarea
                    id="additional-info"
                    name="additional-info"
                    placeholder="Additional Info"
                    rows="2"
                    cols="10"
                ></textarea>
                <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
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

        let newData = {};

        newData.category = data.category;
        newData.imageUrl = data["image-url"];
        newData.description = data.description;
        newData.moreInfo = data["additional-info"];

        dataService.createEntry(newData).then(() => {
            context.page.redirect("/catalog");
        });
    };

    context.render(itemTemplate(onSubmit));
}
