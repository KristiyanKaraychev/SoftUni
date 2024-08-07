import * as requester from "./requester.js";
import * as api from "./api.js";

export function getData(id) {
    let tempPath = `${api.dataPath}${id ? "/" + id : ""}`;
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

// description
// :
// "Medium table"
// img
// :
// "./images/table.png"
// make
// :
// "Table"
// material
// :
// "Hardwood"
// model
// :
// "Swedish"
// price
// :
// 235
// year
// :
// 2015
// _createdOn
// :
// 1615545143015
// _id
// :
// "53d4dbf5-7f41-47ba-b485-43eccb91cb95"
// _ownerId
// :
// "35c62d76-8152-4626-8712-eeb96381bea8"
