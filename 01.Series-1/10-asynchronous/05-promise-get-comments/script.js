// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPosts().then((posts) =>{

            posts.forEach(article => {
                window.lib.getComments(article.id).then((comments) => {
                    article.comments = comments;
                });
            })
            console.log(posts);
        })
    });
})();
