// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    let fix1 = document.getElementById("part-one");
    let fix2 = document.getElementById("part-two");
    let fix3 = document.getElementById("part-three");
    let fix4 = document.getElementById("part-four");

    let target= document.getElementById("target");

    let btn1 = document.getElementById("fix-part-one");
    let btn2 = document.getElementById("fix-part-two");
    let btn3 = document.getElementById("fix-part-three");
    let btn4 = document.getElementById("fix-part-four");

    function stopButton (button,fix,min,max) {

        button.addEventListener("click",()=>{

            fix.value = Math.floor(Math.random()*max);

            if(fix.value > max){
                fix.value = min
            }
            
            if (fix.value<10){
                fix.value = "0"+fix.value;
            }

            target.innerHTML = "+"+"0" + fix1.value + fix2.value 
                                + fix3.value + fix4.value;
        });
        
    }

    stopButton(btn1,fix1,460,499);
    stopButton(btn2,fix2,00,99);
    stopButton(btn3,fix3,00,99);
    stopButton(btn4,fix4,00,99);
})();
