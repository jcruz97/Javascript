// 06-dom/09-match-password-one/script.js - 6.9: password verification (1)


(() => {

    let pass1 = document.getElementById("pass-one");
    let pass2 = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", ()=>{

        if (pass1.value !== pass2.value){
            pass1.style.borderColor = "red" , pass2.style.borderColor = "red" 
        }else {
            pass1.style.borderColor = "blue" , pass2.style.borderColor = "blue"
        }
    })

})();
