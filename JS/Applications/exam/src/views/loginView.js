import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const loginPageTemplate = (onSubmit) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <button type="submit">login</button>
                <p class="message">
                    Not registered?
                    <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>
`;

export function loadLoginPage(context) {
    console.log("load Login Page");

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get("email");
        let password = formData.get("password");

        if (!email || !password) {
            window.alert("Please enter information.");
            return;
        }

        authService
            .login({ email, password })
            .then(() => {
                e.target.reset();
                context.page.redirect("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    context.render(loginPageTemplate(onSubmit));
}
