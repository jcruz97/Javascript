// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {

    let data = document.getElementById("source").getAttribute("data-image");
    
    let img = document.createElement('img');
    img.src = data;

    document.getElementById("target").appendChild(img);
    document.getElementById("source").removeAttribute("data-image");

})();

