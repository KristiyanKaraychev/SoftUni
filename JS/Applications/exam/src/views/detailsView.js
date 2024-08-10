import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from "../services/dataService.js";
import * as authService from "../services/authService.js";

const tattooDetailTemplate = (
    tattoo,
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
                    src="${tattoo.imageUrl}"
                    alt="${tattoo.imageUrl}"
                />
                <div>
                    <div id="info-wrapper">
                        <p id="details-type">${tattoo.type}</p>
                        <div id="details-description">
                            <p id="user-type">${tattoo.userType}</p>
                            <p id="description">${tattoo.description}</p>
                        </div>
                        <h3>Like tattoo:<span id="like">${numLikes}</span></h3>

                        ${isUser
                            ? html`<div id="action-buttons">
                                  ${isOwner
                                      ? html` <!--Edit and Delete are only for creator-->
                                            <a
                                                href="/details/${tattoo._id}/edit"
                                                id="edit-btn"
                                                >Edit</a
                                            >
                                            <a
                                                href="/details/${tattoo._id}/delete"
                                                id="delete-btn"
                                                >Delete</a
                                            >`
                                      : html`${hasLiked
                                            ? ""
                                            : html`<!--Bonus - Only for logged-in users ( not authors )-->
                                                  <a
                                                      @click=${onLike}
                                                      href="#"
                                                      id="like-btn"
                                                      >Like</a
                                                  >`} `}
                              </div>`
                            : ""}
                    </div>
                </div>
            </div>
        </section>
    `;

export function loadDetailsPage(context) {
    dataService
        .getTotalLikes(context.params.id)
        .then((numLikes) => {
            if (context.user) {
                return dataService
                    .hasUserLikedEntry(context.params.id, context.user._id)
                    .then((hasLiked) => [numLikes, !!hasLiked]);
            } else {
                return [numLikes, true];
            }
        })
        .then(([numLikes, hasLiked]) => {
            return dataService
                .getSingleEntry(context.params.id)
                .then((data) => ({
                    data,
                    numLikes,
                    hasLiked,
                }));
        })
        .then(({ data, numLikes, hasLiked }) => {
            let isOwner = authService.isOwner(data._ownerId);
            let isUser = !!context.user;

            const onLike = () => {
                dataService.likeEntry(context.params.id).then(() => {
                    context.page.redirect(`/details/${context.params.id}`);
                });
            };

            context.render(
                tattooDetailTemplate(
                    data,
                    isOwner,
                    isUser,
                    numLikes,
                    hasLiked,
                    onLike
                )
            );
        })
        .catch((error) => {
            console.error(error);
        });
}
