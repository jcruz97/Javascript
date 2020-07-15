// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {

        constructor(name){
            this.name = name;
        }

        sayHello() {
            return `${this.constructor.greeting}! Ich bin ${this.name}!`;
        }
    }

    class Cat extends Animal {
        static greeting = "Miau";
    }

    class Dog extends Animal {
        static greeting = "Wuf Wuf";
    }

    document.getElementById("run").addEventListener("click", ()=> {
        doggo = new Dog("Helmar");
        katse = new Cat("Bismarck");
        console.log(doggo.sayHello());
        console.log(katse.sayHello());
    });
})();
