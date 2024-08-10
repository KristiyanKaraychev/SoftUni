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

export function createEntry(data) {
    return requester.post(api.dataPath, data);
}

export function updateEntry(id, data) {
    return requester.put(`${api.dataPath}/${id}`, data);
}

export function deleteEntry(id) {
    return requester.del(`${api.dataPath}/${id}`);
}

export function likeEntry(tattooId) {
    return requester.post(`${api.likesPath}`, { tattooId });
}

export function getTotalLikes(tattooId) {
    return requester.get(`${api.likesPath}?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count
`);
}

export function hasUserLikedEntry(tattooId, userId) {
    return requester.get(
        `${api.likesPath}?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`
    );
}
