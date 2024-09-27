class Post {
    constructor(post) {
        this.body =  post.body;
        this.id = post.id;
        this.title = post.title;
        this.userId = post.userId
    }

    getTemplate() {
        return `
            <div>
                <div id="title">
                    ${this.title}
                </div>
                <div id="body">
                    ${this.body}
                </div>
            </div>
        `;
    }
}

function showPosts(posts) {
    let postsContainer = document.getElementById("posts_container");
    postsContainer.innerHTML = '';

    for(let post of posts) {
        console.log(post);
        
        let p = new Post(post);
        let node = document.createElement('div');
        node.innerHTML = p.getTemplate();
        postsContainer.append(node);
    }
}

getPosts({}, showPosts);