// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {

    let x = document.getElementById("target");
    let table = document.createElement("table");

    for (i=0;i<10;i++){

      let row = table.insertRow();
      let cell = row.insertCell();

      cell.innerHTML = "Row"+i;
    }

})();
