// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {

    document.getElementById("run").addEventListener("click", () => {

        window.lib.getPersons().then((posts) =>{
            console.log(posts);
        })
    });
})();
