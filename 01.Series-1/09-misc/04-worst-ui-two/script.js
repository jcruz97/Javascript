// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    let btn1 = document.getElementById("part-one");
    let btn2 = document.getElementById("part-two");
    let btn3 = document.getElementById("part-three");
    let btn4 = document.getElementById("part-four");
    let target= document.getElementById("target");

    function numIncrement (button,min,max) {


        button.addEventListener("click",()=>{

            button.innerHTML++;

            if(button.innerHTML > max){
                button.innerHTML = min
            }
            
            if (button.innerHTML<10){
                button.innerHTML = "0"+button.innerHTML;
            }

            target.innerHTML = "+"+"0" + btn1.innerHTML + btn2.innerHTML 
                                + btn3.innerHTML + btn4.innerHTML;
        });
        
    }

    

    numIncrement(btn1,460,499);
    numIncrement(btn2,00,99);
    numIncrement(btn3,00,99);
    numIncrement(btn4,00,99);

    

})();
