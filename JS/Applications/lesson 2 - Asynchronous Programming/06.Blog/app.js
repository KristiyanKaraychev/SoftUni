function attachEvents() {
    const endpoints = {
        posts: "http://localhost:3030/jsonstore/blog/posts",
        comments: "http://localhost:3030/jsonstore/blog/comments",
    };

    const buttonLoadPosts = document.getElementById("btnLoadPosts");
    const buttonViewPosts = document.getElementById("btnViewPost");
    const postsSelectEl = document.getElementById("posts");
    const postTileEl = document.getElementById("post-title");
    const postBodyEl = document.getElementById("post-body");
    const postCommentsEl = document.getElementById("post-comments");

    let postID = postsSelectEl.value;

    buttonLoadPosts.addEventListener("click", getPosts);
    buttonViewPosts.addEventListener("click", showPost);

    function getPosts() {
        postsSelectEl.replaceChildren();

        fetch(endpoints.posts)
            .then((res) => res.json())
            .then((posts) => {
                for (const post in posts) {
                    let newPost = createOption(posts[post]);
                    postsSelectEl.appendChild(newPost);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function createOption(element) {
        let body = element.body;
        let id = element.id;
        let title = element.title;

        let optionEl = document.createElement("option");
        optionEl.setAttribute("value", id);
        optionEl.textContent = title;

        return optionEl;
    }

    function showPost() {
        postID = postsSelectEl.value;

        postCommentsEl.replaceChildren();

        if (!!postID) {
            fetch(`${endpoints.comments}`)
                .then((res) => res.json())
                .then((comments) => {
                    Object.keys(comments).forEach((comment) => {
                        if (comments[comment].postId == postID) {
                            let commentLiEl = document.createElement("li");
                            commentLiEl.textContent = comments[comment].text;
                            postCommentsEl.appendChild(commentLiEl);
                        }
                    });
                })
                .catch((err) => {
                    console.log(err);
                });

            fetch(`${endpoints.posts}/${postID}`)
                .then((res) => res.json())
                .then((post) => {
                    let title = undefined;
                    let body = undefined;

                    if (post.length) {
                        title = post[0].title;
                        body = post[0].body;
                    } else {
                        title = post.title;
                        body = post.body;
                    }
                    console.log(post);
                    postTileEl.textContent = title;
                    postBodyEl.textContent = body;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}

attachEvents();
