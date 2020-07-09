
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();

    if (hour<17 && minute>30){
        document.getElementById("target").innerHTML = "Hello";
    }else{
        document.getElementById("target").innerHTML = "Good Evening";
    }


})();
