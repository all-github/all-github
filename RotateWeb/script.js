(function(){
    const mainMenuElem = document.querySelector(".main-menu");
    const gnbElem = document.querySelector('.gnb');
    const barElem = document.querySelector('.btnMenu')

    // 내비게이션 바를 클릭하면
    gnbElem.addEventListener("click", function(e){
        let target = e.target;
        let index = target.getAttribute("value"); //parseInt();
        index = parseInt(index);
        if( index>=0 || index<=2 ){
            mainMenuElem.classList.add("on");
            barElem.style.display="block";
        }
    });
    barElem.addEventListener("click", function(){
        // 메인메뉴가 회전하며 안보이게
        mainMenuElem.classList.remove("on");
        // barMenu 보이게
        barElem.style.display="none";
    }
)})();