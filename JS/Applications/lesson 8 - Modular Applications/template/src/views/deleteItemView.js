import * as authService from "../services/authService.js";
import * as dataService from "../services/dataService.js";

export function loadDeleteItemPage(context) {
    dataService.getData(context.params.id).then((data) => {
        if (!authService.isOwner(data._ownerId)) {
            alert("You are not the owner and you cannot delete");
            return;
        }

        let confirmation = confirm("Are you sure?");

        if (!confirmation) {
            return;
        }

        dataService.deleteEntry(context.params.id).then(() => {
            context.page.redirect(`/dashboard`);
        });
    });
}
