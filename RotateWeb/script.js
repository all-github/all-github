(function(){
    const mainMenuElem = document.querySelector(".main-menu");
    const gnbElem = document.querySelector('.gnb');
    const barElem = document.querySelector('.btnMenu');
    const showElem = document.querySelector('.container');
    const itemElem = document.querySelector('.item');

    // 내비게이션 바를 클릭하면
    gnbElem.addEventListener("click", function(e){
        let target = e.target;
        let index = target.getAttribute("value"); //parseInt();
        index = parseInt(index);
        if( index>=0 || index<=2 ){
            mainMenuElem.classList.add("on");
            barElem.style.display="block";
            showElem.classList.remove("show");
                   // container에서 해당 이미지 보이기
        // showElem.children;
        for( let item of showElem.children ){
            item.classList.remove("item");
        }
        showElem.children[index].classList.add("item");
        }
    });
    barElem.addEventListener("click", function(){
        // 메인메뉴가 회전하며 안보이게
        // barMenu 보이게
        // barElem.style.display="block";
        barElem.style.display="none";
        mainMenuElem.classList.remove("on");
        showElem.classList.add("show");
    }
    // itemElem.addEventListener("click", function()){
    //     mainMenuElem.classList.remove("on");
    //     itemElem.classList.add("item");
    //     barElem.
    // }
        //클릭할 때 다른 게 투명화되고 다음 메뉴가 나오게
)})();