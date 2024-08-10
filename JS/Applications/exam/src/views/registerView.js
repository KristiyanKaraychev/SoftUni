import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from "../services/authService.js";

const registerPageTemplate = (onSubmit) => html`
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="email"
                    id="register-email"
                    placeholder="email"
                />
                <input
                    type="password"
                    name="password"
                    id="register-password"
                    placeholder="password"
                />
                <input
                    type="password"
                    name="re-password"
                    id="repeat-password"
                    placeholder="repeat password"
                />
                <button type="submit">register</button>
                <p class="message">
                    Already registered? <a href="/login">Login</a>
                </p>
            </form>
        </div>
    </section>
`;

export function loadRegisterPage(context) {
    console.log("load Register Page");

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let email = formData.get("email");
        let password = formData.get("password");
        let rePass = formData.get("re-password");

        if (!email || !password || !rePass) {
            window.alert("Please enter information.");
            return;
        }

        if (password !== rePass) {
            window.alert("Passwords don't match.");
            return;
        }

        authService
            .register({ email, password })
            .then(() => {
                e.target.reset();
                context.page.redirect("/");
            })
            .catch((error) => {
                console.log(error);
                window.alert("User already exists.");
            });
    };

    context.render(registerPageTemplate(onSubmit));
}
