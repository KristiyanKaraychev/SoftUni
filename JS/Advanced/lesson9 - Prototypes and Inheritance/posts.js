function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            if (this.comments.length > 0) {
                let commentsString = this.comments
                    .map((e) => " * " + e)
                    .join("\n");
                return `Post: ${this.title}\nContent: ${
                    this.content
                }\nRating: ${
                    this.likes - this.dislikes
                }\nComments:\n${commentsString}`;
            }
            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${
                this.likes - this.dislikes
            }`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}

const classes = solution();

let post = new classes.Post("Post", "Content");
console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());

let blogPost = new classes.BlogPost("blog", "content", 33);
console.log(blogPost.toString());

blogPost.view();
console.log(blogPost.toString());

blogPost.view().view().view().view();
console.log(blogPost.toString());
