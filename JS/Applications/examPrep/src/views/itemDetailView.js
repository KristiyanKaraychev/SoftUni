import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as authService from "../services/authService.js";

const itemDetailTemplate = (
    data,
    isOwner,
    isUser,
    numLikes,
    hasLiked,
    onLike
) =>
    html`
        <!-- Details page -->
        <section id="details">
            <div id="details-wrapper">
                <img
                    id="details-img"
                    src="${data.imageUrl}"
                    alt="${data.imageUrl}"
                />
                <div>
                    <p id="details-category">${data.category}</p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <p id="description">${data.description}</p>
                            <p id="more-info">${data.moreInfo}</p>
                        </div>
                    </div>
                    <h3>Is This Useful:<span id="likes">${numLikes}</span></h3>

                    ${isUser
                        ? html`<!--Edit and Delete are only for creator-->
                              <div id="action-buttons">
                                  ${isOwner
                                      ? html`<a
                                                href="/details/${data._id}/edit"
                                                id="edit-btn"
                                                >Edit</a
                                            >
                                            <a
                                                href="/details/${data._id}/delete"
                                                id="delete-btn"
                                                >Delete</a
                                            >`
                                      : html`${hasLiked
                                            ? ""
                                            : html`<!--Bonus - Only for logged-in users ( not authors )-->
                                                  <a
                                                      @click=${onLike}
                                                      href=""
                                                      id="like-btn"
                                                      >Like</a
                                                  >`} `}
                              </div>`
                        : ""}
                </div>
            </div>
        </section>
    `;

export function loadItemDetailsPage(context) {
    dataService
        .getTotalLikes(context.params.id)
        .then((numLikes) => {
            return numLikes;
        })
        .then((numLikes) => {
            if (context.user) {
                return dataService
                    .hasUserLikedEntry(context.params.id, context.user._id)
                    .then((hasLiked) => {
                        return [numLikes, !!hasLiked];
                    });
            } else {
                return [numLikes, true];
            }
        })
        .then(([numLikes, hasLiked]) => {
            dataService.getSingleEntry(context.params.id).then((data) => {
                let isOwner = authService.isOwner(data._ownerId);
                let isUser = !!context.user;

                const onLike = () => {
                    dataService.likeEntry(context.params.id).then(() => {
                        context.page.redirect(`/catalog/${context.params.id}`);
                    });
                };

                context.render(
                    itemDetailTemplate(
                        data,
                        isOwner,
                        isUser,
                        numLikes,
                        hasLiked,
                        onLike
                    )
                );
            });
        });
}
