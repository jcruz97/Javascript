
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    var opOne = document.getElementById("op-one").value;
    var opTwo = document.getElementById("op-two").value;


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(Number(opOne)+Number(opTwo));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(Number(opOne)-Number(opTwo));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(Number(opOne)*Number(opTwo));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(Number(opOne)/Number(opTwo));
    });
})();
