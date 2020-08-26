(function(){
    const stageElem = document.querySelector("#stage");
    const containerElem = document.querySelector("#container");
    let maxScrollHeight = 0;
    let mousePos = {x:0,y:0};
    let preClickMenu = 0;

    const liElem = document.querySelectorAll(".sub-gnb>ul>li");
    for( let i=0 ; i<liElem.length ; i++ ){
        liElem[i].addEventListener("mousemove",function(){
            // alert("menu index="+1);
            liElem[preClickMenu].classList.remove("on");
            liElem[i].classList.add("on");
            preClickMenu = i;
        });
    }

    //window resize event
    function onWindowResize(){
        maxScrollHeight = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener("resize",onWindowResize);

    //window scroll event
    function onStageScroll(){
        // stageElem.style.transform = "translateZ("+()+"vw)";
        const scrollPer = pageYOffset / maxScrollHeight ;
        const zMove = scrollPer * 990 - 500;
        stageElem.style.transform = `translateZ(${zMove}vw)`;
    }
    window.addEventListener("scroll",onStageScroll );

    // function onStageScroll
    // const mainElem = document.querySelectorAll("")
    // for( let i=0 ; i<mainElem.length)
    
    

    //window mousemonve event
    function onMouseMove(e){
        //top: 0, left: 0 --> (0,0)
        //화면의 정가운데가 (0,0)
        mousePos.x = -1 + (e.clientX/window.innerWidth)*2;
        mousePos.y = 1 - (e.clientY/window.innerHeight)*2;
        containerElem.style.transform = `rotateX(${mousePos.x*6}deg) rotateY(${mousePos.y*6}deg)`;
    }
    window.addEventListener("mousemove",onMouseMove );

    onWindowResize();
})();

// sun_gnb click event