// 10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur


(() => {
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, people) =>{
            console.log("Please wait for the result !");
            setTimeout(() =>{
                if (error ===null) console.log(people);
                else console.error(error);
            } ,5000);
            
        })
    });
})();
