import { render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import catTemplate from "./templates/catTemplate.js";

render(catTemplate(cats), document.body);
