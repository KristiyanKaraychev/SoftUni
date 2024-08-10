import * as authService from "../services/authService.js";

export function authMiddleware(context, next) {
    let user = authService.getUserData();

    if (user) {
        context.user = user;
    }

    next();
}
