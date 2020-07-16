// 06-dom/12-change-event-input-two/script.js - 6.12: change event (2)


(() => {

    let passOne = document.getElementById("pass-one");
    let validity = document.getElementById("validity");

    var textInput = /^(?=.*\d{2,})(?=.{8,})(?=.*\w)/;

    passOne.addEventListener("input",checker);

    function checker (lol){
        (textInput.test(passOne.value) ) ?
          validity.innerHTML = "Ok" : validity.innerHTML = "Not ok";
        
    }


})();
