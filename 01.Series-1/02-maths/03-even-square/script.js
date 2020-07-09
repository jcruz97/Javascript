
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var n=21;

        for (i=1;i<=n;i++){
            
            var sqrNumber = i**2;
            alert("The square of "+i+" is : "+sqrNumber);
    }

    });

})();
