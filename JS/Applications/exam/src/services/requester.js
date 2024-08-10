import * as authService from "../services/authService.js";

function requester(method, url, data) {
    let options = {
        method,
        headers: {},
    };

    let user = authService.getUserData();

    if (method !== "GET") {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if (user) {
        options.headers["X-Authorization"] = user.accessToken;
    }

    return fetch(url, options).then((res) => {
        if (res.url.endsWith("logout")) {
            return res;
        }

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        return res.json();
    });
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");
