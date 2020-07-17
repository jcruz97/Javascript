// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    var phoneSlider = document.getElementById("slider").value;
    var phoneNumber = document.getElementById("target");

    document.getElementById("slider").addEventListener("change", () => {
        phoneNumber.innerHTML =  "0"+ phoneSlider;
    });

})();
