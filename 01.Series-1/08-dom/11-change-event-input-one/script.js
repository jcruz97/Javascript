// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    let passOne = document.getElementById("pass-one");
    let counter = document.getElementById("counter");

    passOne.setAttribute("maxlength",10);

    passOne.addEventListener("keyup", () => {

        counter.innerText = `${passOne.value.length}/10`
    })
    

})();
