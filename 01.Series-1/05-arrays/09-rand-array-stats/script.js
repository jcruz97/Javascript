// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array
//document.getElementById("element-id").innerHTML = "new-value"
(() => {

    document.getElementById("run").addEventListener("click", () =>{

        let numberArr=[];

        for (let i=0;i<10;i++){

           numberArr[i]= Math.floor(Math.random() * 101);
           document.getElementById('n-' + (i+1)).innerHTML = numberArr[i];

            min = Math.min(...numberArr);
            max = Math.max(...numberArr);
            sum = numberArr.reduce((a, b) => a + b, 0);
            avg = (sum/(numberArr.length));

        }

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = avg;

        
        

        
    });

})();
