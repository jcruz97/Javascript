// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () =>{


        let finder = fruits.includes("apple");

        if (finder==true){
            console.log("There is an apple in the array :)");
        } else {
            console.log("There isn't any apple in the array sorry :(");
        }
        

    });

})();
