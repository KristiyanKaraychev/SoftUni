import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemplate = () => html`
    <!-- Home page -->
    <section id="hero">
        <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
        </h1>
    </section>
`;

export function loadHomePage(context) {
    console.log("load Home Page");
    context.render(homeTemplate());
}
