// 06-dom/04-attr-create/script.js - 6.4: manipulating attributes and creating elements


(() => {
 
   let img = document.createElement("img");
   let src = document.getElementById("source").getAttribute("data-image");
   img.setAttribute('src', src);
   
   document.getElementById("target").appendChild(img);
   document.getElementById("source").remove();

})();

