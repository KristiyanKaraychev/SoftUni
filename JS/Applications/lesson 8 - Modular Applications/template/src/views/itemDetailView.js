import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as authService from "../services/authService.js";

const itemDetailTemplate = (data, isOwner) =>
    html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="../${data.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${data.make}</span></p>
                <p>Model: <span>${data.model}</span></p>
                <p>Year: <span>${data.year}</span></p>
                <p>Description: <span>${data.description}</span></p>
                <p>Price: <span>${data.price}</span></p>
                <p>Material: <span>${data.material}</span></p>
                <div>
                    ${isOwner
                        ? html`<a
                                  href="/details/${data._id}/edit"
                                  class="btn btn-info"
                                  >Edit</a
                              >
                              <a
                                  href="/details/${data._id}/delete"
                                  class="btn btn-red"
                                  >Delete</a
                              >`
                        : ""}
                </div>
            </div>
        </div>
    `;

export function loadItemDetailsPage(context) {
    dataService.getData(context.params.id).then((data) => {
        let isOwner = authService.isOwner(data._ownerId);
        context.render(itemDetailTemplate(data, isOwner));
    });
}
