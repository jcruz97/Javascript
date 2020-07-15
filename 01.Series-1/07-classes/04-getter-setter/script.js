// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {

    class Person {
        constructor(fn,ln){
            this.firstname = fn;
            this.lastname = ln;
        }
        get name() {
            return `${this.firstname} ${this.lastname}`;
        }
        set name(x){
            let fullname = x.split(" ");
            this.firstname = fullname[0];
            this.lastname = fullname[1];
        }
    }


    document.getElementById("run").addEventListener("click", ()=> {
        mySelf = new Person ("Jurgen","Cruz");
        console.log(mySelf.name);
        mySelf.name = "El Guapo"; 
        console.log(mySelf.name);
    });
})();
