function getPosts(pedido, showPosts) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => showPosts(json))
        .catch((error) => alert("Se generó un error"));
}