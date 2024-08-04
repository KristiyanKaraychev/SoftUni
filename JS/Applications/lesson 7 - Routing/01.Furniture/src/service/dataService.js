import { del, get, post, put } from "../utils/requester.js";

const endpoints = {
    catalog: "http://localhost:3030/data/catalog",
    details: "http://localhost:3030/data/catalog/",
    myFurniture: (id) =>
        `http://localhost:3030/data/catalog?where=_ownerId%3D%22${id}%22`,
};

function createFurniture(data) {
    return post(endpoints.catalog, data);
}

function allFurniture() {
    return get(endpoints.catalog);
}

function furnitureDetails(id) {
    return get(endpoints.details + id);
}

function updateFurniture(id, data) {
    return put(endpoints.details + id, data);
}

function deleteFurniture(id) {
    return del(endpoints.details + id);
}

function getMyFurniture(id) {
    return get(endpoints.myFurniture + id);
}

export {
    createFurniture,
    allFurniture,
    furnitureDetails,
    updateFurniture,
    deleteFurniture,
    getMyFurniture,
};
