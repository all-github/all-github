(function(){
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api id};
    const KEY_WEATHER = "location";
    const API_KEY = "20d67a9c6f5bce56354b6ae7e2ea65cc";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
    
    const textElem = document.querySelector(".weather_text");

    function getWeather(Obj){
        fetch(
            `${BASE_URL}lat=${Obj.lat}&lon=${Obj.log}&appid=${API_KEY}&unuts=metric`
            //미터법 적용하려면 &unuts=metric 넣기 등, https://openweathermap.org/api의 표기법보자
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            //console.log(JSON.stringify(myJson));
            const name = myJson.name;
            const temp = Math.floor(myJson.main.temp);
            //소수점 버리기가 Math.floor
            textElem.innerText = `지역: ${name} /  온도: ${temp}˚C`;
        });
    }

    function handlerSuccess(position){
        const lat = position.coords.latitude;
        const log = position.coords.longitude;
        // console.log( lat,log );

        //두 정보를 객체로 만들기
        const coordObj = {
            lat : lat,
            log : log
        };
        localStorage.setItem(KEY_WEATHER, JSON.stringify(coordObj) );
        getWeather( coordObj );
    }
    function handlerError(){
        console.log( "Geolocation is not supported by this browser.");
    }
    function getLocation(){
        navigator.geolocation.getCurrentPosition(handlerSuccess,handlerError);
    }
    function loadWeather(){
        const currentCoords = localStorage.getItem(KEY_WEATHER);
        if(currentCoords == null ) {
            //위도, 경도 정보 가져오기
            getLocation();
        }
        else{
            //위도, 경도 정보로 날씨 알아오기
            getWeather( JSON.parse(currentCoords) );
        }
    }

    loadWeather();
})();