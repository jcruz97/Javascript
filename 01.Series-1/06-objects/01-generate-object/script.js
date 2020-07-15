// 06-objects/01-generate-object/script.js - 6.1: genererate an object

const intro = new Object();
intro.firstname = "Jurgen";
intro.lastname = "Cruz";
intro.age = "23";
intro.city = "Charleroi";
intro.country = "Belgium";

(() => {
    document.getElementById("run").addEventListener("click", () =>{
        
        console.log("My name is "+intro.firstname+" "+intro.lastname+", I'm "+intro.age+" years old and I live in "+intro.city+" "+"("+intro.country+").");
    });
})();
