import * as requester from "./requester.js";
import * as api from "./api.js";

export function getData() {
    let tempPath = `${api.dataPath}?sortBy=_createdOn%20desc`;
    return requester.get(tempPath);
}

export function getSingleEntry(id) {
    let tempPath = `${api.dataPath}/${id}`;
    return requester.get(tempPath);
}

export function getOwnData(userId) {
    let tempPath = `${api.dataPath}?where=_ownerId%3D%22${userId}%22`;
    return requester.get(tempPath);
}

export function createEntry(data) {
    return requester.post(api.dataPath, data);
}

export function updateEntry(id, data) {
    return requester.put(`${api.dataPath}/${id}`, data);
}

export function deleteEntry(id) {
    return requester.del(`${api.dataPath}/${id}`);
}

export function likeEntry(characterId) {
    return requester.post(`${api.likesPath}`, { characterId });
}

export function getTotalLikes(entryId) {
    return requester.get(`${api.likesPath}?where=characterId%3D%22${entryId}%22&distinct=_ownerId&count
`);
}

export function searchCar(carModel) {
    return requester.get(
        `${api.dataPath}?where=model%20LIKE%20%22${carModel}%22`
    );
}

export function hasUserLikedEntry(entryId, userId) {
    return requester.get(
        `${api.likesPath}?where=characterId%3D%22${entryId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    );
}
