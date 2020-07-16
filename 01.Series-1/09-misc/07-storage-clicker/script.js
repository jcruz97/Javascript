// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {   
    
    target.innerHTML = localStorage.getItem("clicker");
    
    
    let clicks = 0;
    

    function count() {
        
        
        clicks +=1;
        localStorage.setItem("clicker",clicks);
        document.getElementById("target").innerHTML = clicks;
        
    }

    document.getElementById("increment").addEventListener("click",count);

})();
