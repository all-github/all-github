(function(){
    const bodyElem = document.querySelector("body");

    function getRandom(){
        let number = Math.floor(Math.random()*4);
        return number+1;
    }

    bodyElem.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),"+"url('images/"+getRandom()+".jpg')";
})();