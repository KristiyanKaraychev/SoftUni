import page from "../node_modules/page/page.mjs";

import { renderMiddleware } from "./middlewares/renderMiddleware.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

import { loadHomePage } from "./views/homeView.js";
import { loadRegisterPage } from "./views/registerView.js";
import { loadLoginPage } from "./views/loginView.js";
import { loadLogoutPage } from "./views/logoutView.js";

import { loadDashboardPage } from "./views/dashboardView.js";
import { loadCreatePage } from "./views/createView.js";
import { loadDetailsPage } from "./views/detailsView.js";
import { loadEditPage } from "./views/editView.js";
import { loadDeletePage } from "./views/deleteView.js";

console.log("Initialized");

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page("/", loadHomePage);
page("/dashboard", loadDashboardPage);
page("/register", loadRegisterPage);
page("/login", loadLoginPage);
page("/logout", loadLogoutPage);
page("/create", loadCreatePage);
page("/details/:id", loadDetailsPage);
page("/details/:id/edit", loadEditPage);
page("/details/:id/delete", loadDeletePage);

page.start();
