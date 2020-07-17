// 10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)


(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons().then((people)=>{

            console.log("Please wait for the result !");
            console.log(people);
            
        }).catch((err) => {
            console.error(err)
        })
    });
})();
