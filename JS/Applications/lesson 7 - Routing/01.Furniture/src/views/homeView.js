import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { allFurniture } from "../service/dataService.js";

const root = document.querySelector(".container");

const temp = (data) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${data.map(
            (item) =>
                html`
    <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${item.img}" />
                    <p>Description here</p>
                    <footer>
                        <p>Price: <span>${item.price}$</span></p>
                    </footer>
                    <div>
                        <a href="/detail/${data._id}" class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
                `
        )}
    </div>
`;

export default () => {
    allFurniture().then((data) => {
        render(temp(data), root);
    });
};
