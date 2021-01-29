var container = document.getElementById('map'); // 지도를 표시할 div

var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표 -> 중심위치 초기값 셋팅
    level: 3 // 지도의 확대 레벨
};

var map;

var watchStatus = false; // 처음 로딩시 시작이 안되어있기때문에 false

var watchID;

var watchMarker = '';
var searchMarker = '';

var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성 합니다


// 페이지 로딩시 지도에 현위치를 좌표로 중심표시
function updateCenterCoordinate(){ // 위도 경도의 값을 받는 함수 선언 => 중심좌표 업데이트 -> 첫 로딩시 현재위치 업데이트 
    
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(function(position){ // getCurrentPosition=> 현재위치 확인

            
             options.center = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);

             map = new kakao.maps.Map(container, options);  // 현재위치 좌표로 지도를 재 생성     
             
             geocoder.coord2Address(position.coords.longitude,position.coords.latitude, function(result,status){

                console.log(result[0].address.region_1depth_name);
                document.querySelector('.popup-address-1depth').innerHTML = result[0].address.region_1depth_name;

                console.log(result[0].address.region_2depth_name);
                document.querySelector('.popup-address-2depth').innerHTML = result[0].address.region_2depth_name;

                console.log(result[0].address.region_3depth_name);
                document.querySelector('.popup-address-3depth').innerHTML = result[0].address.region_3depth_name;
                document.querySelector('.popup-address-3depth-h').innerHTML = '';
            });      
          
             getWeatherData(position.coords.latitude, position.coords.longitude);
    });

    }else{
        alert('Not Support!');

    }
    
}

// 현재 위치를 모니터링
function watchLocation(){ // 처음 페이지 로딩시 현재 위치 추척 => 자동 모니터링 하는 함수 

    document.querySelector('.input-address').value = ''; // 주소 검색한 기능이 남아있다면 (input 박스에 텍스트가 남아있다면 칸을 지워준다

    if(navigator.geolocation){

        watchID = navigator.geolocation.watchPosition(function(position){ //watchPosition => 위도,경도 좌표 표시 => 현재위치 계속확인

            if(watchMarker != ''){ // marker가 빈 문자가 아닐때 marker를 실행하시오
                watchMarker.setMap(null); // 기존 마커 삭제
            };
                        
            console.log(position.coords);

            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude); 

            // 마커를 생성합니다
            watchMarker = new kakao.maps.Marker({
                position: markerPosition
            });

            map.setCenter(markerPosition); // 마커 위치로 지도 중심 이동

            // 마커가 지도 위에 표시되도록 설정합니다
            watchMarker.setMap(map);

            geocoder.coord2Address(position.coords.longitude,position.coords.latitude, function(result,status){

                console.log(result[0].address.region_1depth_name);
                document.querySelector('.popup-address-1depth').innerHTML = result[0].address.region_1depth_name;

                console.log(result[0].address.region_2depth_name);
                document.querySelector('.popup-address-2depth').innerHTML = result[0].address.region_2depth_name;

                console.log(result[0].address.region_3depth_name);
                document.querySelector('.popup-address-3depth').innerHTML = result[0].address.region_3depth_name;  
                document.querySelector('.popup-address-3depth-h').innerHTML = '';   
              
             });  

             getWeatherData(position.coords.latitude, position.coords.longitude);
                             
      });

    }else{

        alert('Not Support!');

    }
   
}

function stopWatch(dom){

    dom.setAttribute('class','button-position'); // 'button-position active'를 표시(모니터링 상태라면 )

    navigator.geolocation.clearWatch(watchID); // watchPosition 함수와 clearWatch 연결을 표시 => watchID

    watchStatus = false; // 실행을 멈춘다 (모니터링 상태라면 )
   

}

//주소로 위치 검색
function formSearch(){ // 중복사용 되므로 함수로 만들어 호출하는 방식으로 작성 

    stopWatch(document.querySelector('.button-position'));

    let address = document.querySelector('.input-address').value; // 버튼 클릭할때 input 박스의 값을 가져온다

    // 주소로 좌표를 검색합니다
   geocoder.addressSearch(address, function(result,status) {
       // api함수 addressSearch 를 사용할때 익명함수 를 사용할 경우 api합수가 자동으로 함수의 매개변수에 값을 넣는다

       if(searchMarker != ''){
        searchMarker.setMap(null);
    }

       // 정상적으로 검색이 완료됐으면 
       if (status === kakao.maps.services.Status.OK) { // ok -> 값 => if status = true

         var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 주소로 검색한 위치 좌표를 지도의 위치로 대응, result 라는 매개변수의 0번째 index칸에 들어있는 값

           // 결과값으로 받은 위치를 마커로 표시합니다
           searchMarker = new kakao.maps.Marker({ // marker라는 클래스 선언 
               map: map, // 생성된 지도
               position: coords // 계산된 위치 좌표
           });

           // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
           map.setCenter(coords); // 검색된 곳이 표시되는 영역의중앙에 놓이도록 설정
           
            console.log(result[0].address.region_1depth_name);
            document.querySelector('.popup-address-1depth').innerHTML = result[0].address.region_1depth_name;
            console.log(result[0].address.region_2depth_name);
            document.querySelector('.popup-address-2depth').innerHTML = result[0].address.region_2depth_name;
            console.log(result[0].address.region_3depth_name);
            document.querySelector('.popup-address-3depth').innerHTML = result[0].address.region_3depth_name;
            console.log(result[0].address.region_3depth_h_name);
            document.querySelector('.popup-address-3depth-h').innerHTML = result[0].address.region_3depth_h_name;

            getWeatherData(result[0].y, result[0].x);

       } 
   }); 
};

map = new kakao.maps.Map(container, options); // 초기값으로 맵 생성 후 updateCenterCoordinate 함수가실행된다

updateCenterCoordinate(); // 지도 중심위치를 현재위치로 업데이트



document.querySelector('.button-search').addEventListener('click',function(){
   
    formSearch();   
});

document.querySelector('.input-address').addEventListener('keypress', function(event){ // 익명함수에 event를 넣어주면 keypress를 했을때 관한 정보를 담는다 

    if(event.key === 'Enter'){ // event의 key가 눌렸을 때 'Enter'과 같으면

        formSearch(); // 해당함수를 호출한다 

    };

});

document.querySelector('.button-position').addEventListener('click',function(){ //버튼을 클릭했을때
    
    if(watchStatus == false){ //모니터링 상태가 아니면 실행한다

        this.setAttribute('class', 'button-position active');

        watchLocation();

        watchStatus = true;

    }else { // 모니터링 상태라면 

       stopWatch(this);
    }

    
});


// 날씨

function getWeatherData(weatherLatitude,weatherLongitude){ // 실행하면 api에서 정보 받아와서 함수 실행
    
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + weatherLatitude + '&lon=' + weatherLongitude + '139&appid=4221ea14847f6b257532c3fb5a5ea81d') //API 실행
    .then(function(response){ // response => 매개변수
        return response.json();
    })
    .then(function(myJson){

        extractWeatherData(myJson);
});

}
    
function extractWeatherData(weatherJson){

    console.log(weatherJson.weather[0].main);

    document.querySelector('.popup-weather-text').innerHTML = weatherJson.weather[0].main; // 날씨 상태 텍스트 가져오기

    console.log(weatherJson.weather[0].id); // 날씨 아이콘 표시

    let groupId = Math.floor(weatherJson.weather[0].id / 100);

    
    console.log(groupId);

    $('.climacon').removeClass('active');

    if( groupId == 8 ){

        switch( weatherJson.weather[0].id ){
            case 800: // climacon_sunFill
                $('.climacon_sunFill').addClass('active');
                break;

            default: // climacon_cloudFill
                $('.climacon_cloudFill').addClass('active');
                break;

        }
    } else {

        switch(groupId){
            case 2: // climacon_cloudLightningFill
                $('.climacon_cloudLightningFill').addClass('active');
                break;
            case 3: // climacon_cloudDrizzleFill
                $('.climacon_cloudDrizzleFill').addClass('active');
                break;
            case 5: // climacon_cloudRainFill
                $('.climacon_cloudRainFill').addClass('active');
                break;
            case 6: // climacon_cloudSnowAltFill
                $('.climacon_cloudSnowAltFill').addClass('active');
                break;
            case 7: // climacon_cloudFogFill
                $('.climacon_cloudFogFill').addClass('active');
                break;
        }

    }

    console.log( Math.floor( weatherJson.main.temp - 273.15 ) );

    let temp = Math.floor( weatherJson.main.temp - 273.15 );

    document.querySelector('.popup-temp-number').innerHTML = temp; // 기온 나타내는것


}

document.querySelector('.button-weather').addEventListener('click', function(){
    
    $('.popup').addClass('active');
    $('.popup-contents').addClass('active');

});

document.querySelector('.popup').addEventListener('click', function(){
    $('.popup').removeClass('active');
})