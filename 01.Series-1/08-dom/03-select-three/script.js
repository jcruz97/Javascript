// 06-dom/03-select-three/script.js - 6.3: select multiple elements by css selector


(() => {

    for(i=0;i<=4;i++){
   document.getElementsByClassName("material")[0].getElementsByClassName("target")[i].innerHTML = "Owned";
    }


})();
