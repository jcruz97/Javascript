// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click" , () =>{

        for (i=0;i<=9;i++){
    
            let element = fruits[i];
            console.log(element);
            
        }
    });

})();
