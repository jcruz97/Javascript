// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", () =>{

        
        let nomArr= Math.floor(Math.random() * birds.length);
        let nom = birds[nomArr].name;
        let adjectif = Array.from(adjectives)[Math.floor(Math.random() * adjectives.size)];

        if ((birds[nomArr].fem) == true) {
            
            document.getElementById("target").innerHTML = nom+" "+adjectif+"e";
        } else{
            document.getElementById("target").innerHTML = nom+" "+adjectif;
        }

    });
})();
