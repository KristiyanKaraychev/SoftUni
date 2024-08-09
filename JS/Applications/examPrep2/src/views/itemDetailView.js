import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as authService from "../services/authService.js";

const itemDetailTemplate = (data, isOwner) =>
    html`
        <!-- Details page -->

        <section id="details">
            <div id="details-wrapper">
                <img
                    id="details-img"
                    src="${data.imageUrl}"
                    alt="${data.imageUrl}"
                />
                <p id="details-title">${data.model}</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p class="price">Price: €${data.price}</p>
                        <p class="weight">Weight: ${data.weight} kg</p>
                        <p class="top-speed">Top Speed: ${data.speed} kph</p>
                        <p id="car-description">${data.about}</p>
                    </div>
                    <!--Edit and Delete are only for creator-->
                    ${isOwner
                        ? html`<div id="action-buttons">
                              <a href="/details/${data._id}/edit" id="edit-btn"
                                  >Edit</a
                              >
                              <a
                                  href="/details/${data._id}/delete"
                                  id="delete-btn"
                                  >Delete</a
                              >
                          </div>`
                        : ""}
                </div>
            </div>
        </section>
    `;

export function loadItemDetailsPage(context) {
    dataService
        .getSingleEntry(context.params.id)
        .then((data) => {
            let isOwner = authService.isOwner(data._ownerId);
            // let isUser = !!context.user;

            context.render(itemDetailTemplate(data, isOwner));
        })
        .catch((error) => {
            console.error(error);
        });
}
