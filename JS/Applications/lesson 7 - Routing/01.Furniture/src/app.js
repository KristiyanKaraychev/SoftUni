import page from "../node_modules/page/page.mjs";
import { logout } from "./service/userService.js";
import { getUserData } from "./utils/userUtils.js";
import homeView from "./views/homeView.js";
import loginView from "./views/loginView.js";
import registerView from "./views/registerView.js";

const root = document.querySelector(".container");
const userNav = document.getElementById("user");
const guestNav = document.getElementById("guest");

page("/", homeView);
page("/dashboard", homeView);
page("/catalog", () => console.log("catalog"));
page("/create", () => console.log("create"));
page("/details/:id", () => console.log("details"));
page("/edit/:id", () => console.log("edit"));
page("/login", loginView);
page("/my-furniture", () => console.log("my-furniture"));
page("/register", registerView);
page("/logout", logout);

page();
updateNav();

export function updateNav() {
    let user = getUserData();
    if (user) {
        userNav.style.display = "inline-block";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "inline-block";
    }
}
