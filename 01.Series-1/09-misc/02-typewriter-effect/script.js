// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    let i =0;
    let speed = Math.floor(Math.random()*350);
    let text = document.getElementById("target").textContent;

    function typeWriter (){

        document.getElementById("target").innerHTML = document.getElementById('target').innerHTML.substring(0, i);

        if (i<text.length){
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

})();
