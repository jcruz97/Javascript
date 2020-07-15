// 06-dom/10-match-password-two/script.js - 6.10: password verification (2)


(() => {

    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", ()=>{

        if (pass1.value !== pass2.value){
            pass1.classList.add("error") , pass2.classList.add("error");
        }else {
            pass1.style.borderColor = "blue" , pass2.style.borderColor = "blue";
        }
    })


})();
