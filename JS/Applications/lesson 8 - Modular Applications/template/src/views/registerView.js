import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const registerPageTemplate = (onSubmit) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
`;

export function loadRegisterPage(context) {
    console.log("load Register Page");

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get("email");
        let password = formData.get("password");
        let rePass = formData.get("rePass");

        if (!email || !password || password !== rePass) {
            e.target.reset();
            throw new Error("invalid registration");
        }

        authService.register({ email, password }).then(() => {
            e.target.reset();
            context.page.redirect("/");
        });
    };

    context.render(registerPageTemplate(onSubmit));
}
