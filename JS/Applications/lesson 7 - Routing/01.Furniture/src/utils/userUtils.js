function setUser(data) {
    sessionStorage.setItem("userData", JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userData"));
}

function getToken() {
    let userData = getUserData();
    let token = undefined;

    if (userData) {
        token = userData.accessToken;
    } else {
        token = null;
    }

    return token;
}

function hasOwner(id) {
    let userData = getUserData();
    return userData._id == id;
}

function clearData() {
    sessionStorage.removeItem("userData");
}

export { setUser, getUserData, getToken, hasOwner, clearData };
