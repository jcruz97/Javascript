
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").addEventListener("click", () => {
        var hexaDecimal = Math.floor(Math.random() * 16777216).toString(16);
        document.documentElement.style.backgroundColor = "#" + hexaDecimal;
    });

})();
