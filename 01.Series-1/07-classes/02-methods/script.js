//07-classes/02-methods/script.js - 7.2: methods


(() => {

    class Person {
        constructor (fn,ln){
            this.firstname = fn;
            this.lastname = ln;
        }

        sayHello() {
            return "Hello " + this.firstname +" "+this.lastname;
        }
    }

    document.getElementById("run").addEventListener("click", ()=> {
        me = new Person ("Jurgen","Cruz");
        console.log(me.sayHello());
    });

})();
