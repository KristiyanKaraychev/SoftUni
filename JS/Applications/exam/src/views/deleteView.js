import * as dataService from "../services/dataService.js";

export function loadDeletePage(context) {
    let confirmation = confirm("Are you sure?");

    if (!confirmation) {
        return;
    }

    dataService.deleteEntry(context.params.id).then(() => {
        context.page.redirect(`/dashboard`);
    });
}
