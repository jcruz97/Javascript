// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, callback) => {

            callback.forEach(post =>  {

                window.lib.getComments(post.id,(error, comments) => { 
                post.comments = comments;
                });
                
            });
            console.log(callback);
        });
    });
})();
