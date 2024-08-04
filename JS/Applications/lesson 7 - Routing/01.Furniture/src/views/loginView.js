import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../service/userService.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../app.js";

const root = document.querySelector(".container");

const temp = () => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
    </div>
`;

function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
        throw new Error("invalid registration");
    }

    login({ email, password }).then(() => {
        e.target.reset();
        page.redirect("/dashboard");
        updateNav();
    });
}

export default () => {
    render(temp(), root);
};
