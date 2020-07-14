
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let d = new Date();
    let date =d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
    let time =d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    let fullDate = date +" "+time;

    document.getElementById("target").innerHTML = fullDate;

})();
