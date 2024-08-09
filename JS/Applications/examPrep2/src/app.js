import page from "../node_modules/page/page.mjs";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

import { loadHomePage } from "./views/homeView.js";
import { loadRegisterPage } from "./views/registerView.js";
import { loadLoginPage } from "./views/loginView.js";
import { loadLogoutPage } from "./views/logoutView.js";

import { loadDashboardPage } from "./views/dashboardView.js";
import { loadCreateItemPage } from "./views/createItemView.js";
import { navigationMiddleware } from "./middlewares/navigationMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { loadItemDetailsPage } from "./views/itemDetailView.js";
import { loadEditItemPage } from "./views/editItemView.js";
import { loadDeleteItemPage } from "./views/deleteItemView.js";
import { loadMyListingPage } from "./views/myListingView.js";
import { loadSearchPage } from "./views/searchView.js";

console.log("Initialized");

page(authMiddleware);
page(navigationMiddleware);
page(renderMiddleware);

page("/", loadHomePage);
page("/dashboard", loadDashboardPage);
page("/register", loadRegisterPage);
page("/login", loadLoginPage);
page("/logout", loadLogoutPage);
page("/create", loadCreateItemPage);
page("/details/:id", loadItemDetailsPage);
page("/details/:id/edit", loadEditItemPage);
page("/details/:id/delete", loadDeleteItemPage);
// page("/my-furniture", loadMyListingPage);
page("/search", loadSearchPage);

page.start();
