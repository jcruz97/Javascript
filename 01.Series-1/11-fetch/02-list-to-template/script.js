

(() => {
    document.getElementById("run").addEventListener('click', () =>{

        let template = document.getElementById('tpl-hero');
        let target = document.getElementById('target');

        fetch ("http://localhost:3000/heroes")

            .then(response => response.json())

            .then((heroes) => {
                
                
                heroes.forEach((hero) =>{
                    
                    let temp = document.createElement('div');
                    temp.innerHTML = template.innerHTML;
                    temp.getElementsByClassName('name')[0].innerHTML = hero.name;
                    temp.getElementsByClassName('alter-ego')[0].innerHTML = hero.alterEgo;
                    temp.getElementsByClassName('powers')[0].innerHTML = hero.abilities;
                    target.appendChild(temp.childNodes[1]);
                })
            })

    });
})();
