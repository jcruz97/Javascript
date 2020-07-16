// 11-fetch/03-details/script.js - 11.3: details


(() => {
    document.getElementById("run").addEventListener('click', () =>{

        let template = document.getElementById("tpl-hero");
        let heroId = document.getElementById("hero-id");
        let target = document.getElementById("target");

        let numberH = heroId.value;

        fetch ("http://localhost:3000/heroes")

            .then(response => response.json())

            .then((heroes) => {

                if (numberH > 0 && numberH <= heroes.length){

                  let hero = heroes[heroId.value-1];  
                  let temp = document.createElement('div');
                  temp.innerHTML = template.innerHTML;
                  temp.getElementsByClassName('name')[0].innerHTML = hero.name;
                  temp.getElementsByClassName('alter-ego')[0].innerHTML = hero.alterEgo;
                  temp.getElementsByClassName('powers')[0].innerHTML = hero.abilities;
                  target.appendChild(temp.childNodes[1]);

                } else{
                    alert("Choose a number between 1 and 5 please !")
                }
            })

    });
})();
