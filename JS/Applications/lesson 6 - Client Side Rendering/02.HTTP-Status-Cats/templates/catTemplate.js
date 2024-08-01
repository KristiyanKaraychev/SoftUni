import { html } from "../node_modules/lit-html/lit-html.js";

export default (data) => html`
    <ul>
        ${data.map(
            (cat) => html`
                <li>
                    <img
                        src="./images/${cat.imageLocation}.jpg"
                        width="250"
                        height="250"
                        alt="Card image cap"
                    />
                    <div class="info">
                        <button class="showBtn" @click=${onClick}>
                            Show status code
                        </button>
                        <div
                            class="status"
                            style="display: none"
                            id="${cat.id}"
                        >
                            <h4>Status Code: ${cat.statusCode}</h4>
                            <p>${cat.statusMessage}</p>
                        </div>
                    </div>
                </li>
            `
        )}
    </ul>
`;

function onClick() {
    let currentDisplay = this.parentElement.querySelector(".status");
    let currentButton = this.parentElement.querySelector("button");

    if (currentDisplay.style.display == "none") {
        currentDisplay.style.display = "block";
        currentButton.textContent = "Hide status code";
    } else {
        currentDisplay.style.display = "none";
        currentButton.textContent = "Show status code";
    }
}
