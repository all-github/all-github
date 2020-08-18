(function(){
    
    const KEY_TODOS = "todos";
    const formElem = document.querySelector("#view-todoList>form");
    const inputElem = document.querySelector("#view-todoList>form>input");
    const ulElem = document.querySelector(".todo-list");
    let toDos = [];

    function onDelBtnClick(){
        const target = e.target;
        const list = target.parentElement;
        const ul = list.parentElement;
        const liID = parseInt(list.id);
        ul.removeChild(list);
        //toDos 배열의 목록을 제외
        toDos.filter(function(todo){
            return todo.key !== liID
        });
        stringToDo();
    }

    function stringToDo(){
                //문자열화
                const strToDo = JSON.stringify(toDos);
                localStorage.setItem( KEY_TODOS , strToDo );
    }

    function saveToDo(text){
        const obj = {
            key : toDos.length+1,
            value : text
        }
        toDos.push(obj);
        toDos.push(text);
        stringToDo();
    }

    function addToDoList(text){
        const list = document.createElement("li");
        list.className = "todo";
        list.id = toDos.length+1;
        //X표시 span
        const delBtn = document.createElement("span");
        delBtn.innerHTML = "X";
        delBtn.addEventListener("click", onDelBtnClick);
        //text 표시 span
        const label = document.createElement("span");
        label.innerHTML = text;
        //List에 자식 객체 추가
        list.appendChild(delBtn);
        list.appendChild(label);
        ulElem.appendChild(list);
        saveToDo(text);
    }

    function onSubmit(e){
        e.preventDefault();
        let listValue = inputElem.value;
        addToDoList( listValue );
        inputElem.value = "";
    }

    function loadToDos(){
        const todoList = localStorage.getItem(KEY_TODOS);
        if( todoList !== null ){
            // todoList 목록 보여줌
            const temp = JSON.parse(todoList);
            temp.forEach(function(todo){
                addToDoList(todo.value);
            });
        }
        formElem.addEventListener("submit", onSubmit);
    }
    loadToDos();
})();