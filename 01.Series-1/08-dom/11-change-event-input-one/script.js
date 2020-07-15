// 06-dom/11-change-event-input-one/script.js - 6.11: change event (1)


(() => {

    let pass = document.getElementById('pass-one');
    let counter = document.getElementById('counter');

    pass.addEventListener('input',checker);
    counter.innerHTML = pass.value.length + "/10";

    function checker (){
        if (pass.value.length > 10) {
            console.log("No!");
        }
    }
    

})();
