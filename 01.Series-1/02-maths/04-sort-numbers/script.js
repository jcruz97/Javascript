// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var nums = document.getElementById("numbers").value.split(",");
        alert("This is the unsorted array of input numbers : "+nums + "\n" +"This is the sorted array of input numbers : "+ nums.sort((a,b) => a-b));
       
    });

})();
