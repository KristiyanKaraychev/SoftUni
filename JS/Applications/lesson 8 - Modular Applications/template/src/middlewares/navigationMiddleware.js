export function navigationMiddleware(context, next) {
    const userNav = document.querySelector("#user");
    const guestNav = document.querySelector("#guest");

    if (context.user) {
        userNav.style.display = "inline-block";
        guestNav.style.display = "none";
    } else {
        userNav.style.display = "none";
        guestNav.style.display = "inline-block";
    }

    console.log(context.user);

    next();
}
