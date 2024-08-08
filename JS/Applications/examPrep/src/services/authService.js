import * as requester from "./requester.js";
import * as api from "./api.js";

const USER_DATA_KEY = "userData";

function saveUserData(data) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
}

function clearUserData() {
    localStorage.removeItem(USER_DATA_KEY);
}

export function getUserData() {
    let user = localStorage.getItem(USER_DATA_KEY);

    if (user) {
        return JSON.parse(user);
    }
}

export function isOwner(id) {
    let userData = getUserData();

    if (userData) {
        return userData._id === id;
    } else {
        return false;
    }
}

export function register(data) {
    return requester.post(api.register, data).then((userData) => {
        console.log(userData);
        saveUserData(userData);
        return userData;
    });
}

export function login(data) {
    return requester
        .post(api.login, data)
        .then((userData) => {
            console.log(userData);
            saveUserData(userData);
            return userData;
        })
        .catch((error) => {
            window.alert("Incorrect Login Information");
            return Promise.reject(error);
        });
}

export function logout() {
    return requester.get(api.logout).finally(() => clearUserData());
}
