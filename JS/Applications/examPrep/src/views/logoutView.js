import * as authService from "../services/authService.js";

export function loadLogoutPage(context) {
    authService.logout().finally(() => {
        context.page.redirect("/");
    });
}
