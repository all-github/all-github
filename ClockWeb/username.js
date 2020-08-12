(function(){

    const KEY_USERNAME="username";
    const userContainer = document.querySelector("#view-user");

    //form 에서 submit 이벤트 발생시 실행되는 함수
    function handlerSubmit(e){
        e.preventDefault();
        const inputElem = this.querySelector("input");
        const value = inputElem.value;
        localStorage.setItem(KEY_USERNAME,value);
        printSpan(value);

    }

    function printInput(){
        //form
        const addForm = document.createElement("form");
        addForm.addEventListener("submit",handlerSubmit );
        //input
        const addInput = document.createElement("input");
        addInput.type = "text";
        addInput.placeholder = "your name here";
        //element 추가
        addForm.appendChild(addInput);
        userContainer.appendChild( addForm );
    }

    function printSpan(text){
        //기존의 form, input 삭제
        userContainer.innerHTML = "";
        //span 요소를 생성해서 usercontainer 객체에 넣어준다
        const textElem = document.createElement("span");
        textElem.innerText = `hellow ${text}`;
        textElem.className = "printSpan";
        userContainer.appendChild( textElem );
    }

    function loadUserName(){
        const currentName = localStorage.getItem(KEY_USERNAME);
        if( currentName === null ){
            //저장된 사용자가 없음. input 이 보이게 함.
            //input 이 보이게 함.
            printInput();
        }
        else{
            //저장된 사용자가 있음.
            //span 으로 사용자 이름 보여줌.
            printSpan(currentName);
        }
    }
    loadUserName();
})();