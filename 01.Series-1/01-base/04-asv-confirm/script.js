
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    
    var age = prompt("How old are you?");
    var gender = prompt("Are you a male or a female");
    var town = prompt("Where do you live?");


    

    alert("You are "+age+" years old, live in "+town+" and are a "+gender+".");



    if(confirm("Please confirm the intel you gave ! ")){
        txt = "Intel confirmed !";
    } else{
        txt = "You will access other pages after intel is confirmed !"
        location.reload();
    }

})();
