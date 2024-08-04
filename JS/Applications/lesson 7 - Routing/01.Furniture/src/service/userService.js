import { get, post } from "../utils/requester.js";
import { clearData, setUser } from "../utils/userUtils.js";
import page from "../../node_modules/page/page.mjs";
import { updateNav } from "../app.js";

const endpoints = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logut",
};

function register(data) {
    return post(endpoints.register, data).then((userData) => {
        setUser(userData);
    });
}

function login(data) {
    return post(endpoints.login, data).then((userData) => {
        setUser(userData);
    });
}

function logout() {
    return get(endpoints.logout).then(() => {
        clearData();
        page.redirect("/dashboard");
        updateNav();
    });
}

export { register, login, logout };
