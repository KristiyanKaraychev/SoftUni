import { getToken } from "./userUtils.js";

function requester(method, url, data) {
    let options = {
        method,
        headers: {},
    };

    let userToken = getToken();

    if (userToken) {
        options.headers["X-Authorization"] = userToken;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    return fetch(url, options)
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return console.error(err);
        });
}

function get(url) {
    return requester("GET", url);
}

function post(url, data) {
    return requester("POST", url, data);
}

function put(url, data) {
    return requester("PUT", url, data);
}

function del(url) {
    return requester("DELETE", url);
}

export { get, post, put, del };
