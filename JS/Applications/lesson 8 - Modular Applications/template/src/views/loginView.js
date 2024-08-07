import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const loginPageTemplate = (onSubmit) => html`
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

export function loadLoginPage(context) {
    console.log("load Login Page");

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get("email");
        let password = formData.get("password");

        if (!email || !password) {
            throw new Error("invalid login");
        }

        authService.login({ email, password }).then(() => {
            e.target.reset();
            context.page.redirect("/");
        });
    };

    context.render(loginPageTemplate(onSubmit));
}
