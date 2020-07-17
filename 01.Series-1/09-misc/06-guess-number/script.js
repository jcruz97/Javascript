// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    function guesser () {

        let counter = 0;
        let xGuess;
        let x = Math.floor(Math.random()*100)+1;
        console.log(x);
        

        do {
            let xGuess = parseInt(prompt("Please guess the number between 1 and 100"),10);
            counter++;
        if (x<xGuess){
            alert("Lower");
            
        } else if (x>xGuess){
            alert("Higher");
         } else  {
            alert("That's it! \n You got the correct answer after " +counter+ " tries")
            document.location.reload(true);
         }
       } while (x!==xGuess)
    }

    guesser();

})();
