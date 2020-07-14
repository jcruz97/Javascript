
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById("run").addEventListener("click" ,() =>{

        let date = new Date(document.getElementById("dob-month").value + document.getElementById("dob-day").value + document.getElementById("dob-year").value);
        let today = new Date();
        let yearDif = (today.getFullYear() - date.getFullYear());
        let monthDif = (today.getMonth() - date.getMonth());
        let dayDif = (today.getDate() - date.getDate());

        if (monthDif > 0 || (monthDif === 0 && dayDif > 0)) {
            window.alert(Number(yearDif));
        } else {
            window.alert(Number(yearDif) - 1);
        }
       
    });

})();
