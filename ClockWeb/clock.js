(function(){

    const clockElem = document.querySelector("#view-clock>h1");
    
    //현재시간 알아내기
    function getTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        // console.log( hours + "/" + minutes + "/" + seconds );
        //화면 출력 함수 호출
        setViewClock(hours,minutes,seconds);
    }

    function setViewClock(h,m,s){
        // let strS = s;
        // if( s < 10 ) {
        //     strS = "0"+s;
        // }
        // 0이 붙어있어야 시분초가 한자릿수로 보인다
        
        //삼항연산자 표시
        let strH = `${h<10 ? `0${h}` : h}`;
        let strM = `${m<10 ? `0${m}` : m}`;
        let strS = `${s<10 ? `0${s}` : s}`;
     
        clockElem.innerText = `${strH} : ${strM} : ${strS}`;
    } 

    getTime();
    setInterval(getTime, 1000 );

})();