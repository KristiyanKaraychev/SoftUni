function validator(obj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriRegex = /^[\w\.]+$|^[*]+$/gm;
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let messageRegex = /^[^\<\>\\\&\'\"]*$/gm;

    if (!validMethods.includes(obj.method))
        throw new Error("Invalid request header: Invalid Method");
    if (!obj.hasOwnProperty("uri") || !obj.uri.match(uriRegex))
        throw new Error("Invalid request header: Invalid URI");
    if (!validVersion.includes(obj.version))
        throw new Error("Invalid request header: Invalid Version");
    if (!obj.hasOwnProperty("message") || !obj.message.match(messageRegex))
        throw new Error("Invalid request header: Invalid Message");

    return obj;
}

validator({
    method: "GET",
    version: "HTTP/2.0",
    message: "rm -rf /*",
});
